// 数据完整性校验：改完 data/ 后跑一遍，避免引用失效在页面上才暴露
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const venues = JSON.parse(readFileSync(resolve(root, 'data/venues.json'), 'utf8'))
const areasData = JSON.parse(readFileSync(resolve(root, 'data/areas.json'), 'utf8'))
const reports = JSON.parse(readFileSync(resolve(root, 'data/reports.json'), 'utf8'))

const ALL = [...venues.conferences, ...venues.journals]
const ids = new Set(ALL.map(v => v.id))
const errs = []
const warns = []

// 1. 基础结构
if (new Set(ALL.map(v => v.id)).size !== ALL.length) errs.push('venue id 重复')
if (!venues.tags) errs.push('venues.tags 缺失（venue 的 tags 字段会显示原始英文 id）')

// 2. tags 定义完整
const tagIds = new Set((venues.tags || []).map(t => t.id))
ALL.forEach(v => (v.tags || []).forEach(t => {
  if (!tagIds.has(t)) errs.push(`${v.shortName} 引用了未定义的标签 "${t}"`)
}))

// 3. 引用完整性
ALL.forEach(v => (v.related || []).forEach(r => {
  if (!ids.has(r)) errs.push(`${v.shortName} 的 related 指向不存在的 "${r}"`)
}))
areasData.areas.forEach(a => a.venueIds.forEach(id => {
  if (!ids.has(id)) errs.push(`领域 ${a.id} 指向不存在的 venue "${id}"`)
}))

// 4. 领域内venue 数量健康度（不做标签交集判断——
//领域 topic 与 venue tag 是两套命名体系，强行匹配会产生大量误报）
areasData.areas.forEach(a => {
  if (a.venueIds.length < 2) {
    warns.push(`领域「${a.name}」只关联了 ${a.venueIds.length} 个 venue，考虑是否需要补充`)
  }
  if (a.venueIds.length > 10) {
    warns.push(`领域「${a.name}」关联了 ${a.venueIds.length} 个 venue，列表过长不利于筛选`)
  }
})

// 5. values 维度完整且在1-5 范围
const DIMS = ['hci', 'sensing', 'systems', 'mobile', 'hardware', 'theory']
ALL.forEach(v => {
  if (!v.values) errs.push(`${v.shortName} 缺 values`)
  else DIMS.forEach(d => {
    const n = v.values[d]
    if (n === undefined) errs.push(`${v.shortName} 缺维度 ${d}`)
    else if (n < 1 || n > 5) errs.push(`${v.shortName} 维度 ${d} 越界: ${n}`)
  })
})

// 6. 录用率数据一致性
ALL.forEach(v => {
  const s = v.acceptanceStats
  if (!s) { errs.push(`${v.shortName} 缺 acceptanceStats`); return }
  if (s.confidence !== 'none' && !s.source) errs.push(`${v.shortName} 标了置信度但缺 source`)
  if (s.confidence === 'none' && s.history?.length) errs.push(`${v.shortName} 标 none 却有 history`)
  if (s.history) {
    s.history.forEach(h => {
      if (h.submitted > 0 && h.accepted > h.submitted)
        errs.push(`${v.shortName} ${h.year}: 录用数(${h.accepted}) > 投稿数(${h.submitted})`)
      const calc = h.submitted ? (h.accepted / h.submitted * 100) : 0
      if (Math.abs(calc - h.rate) > 0.6)
        errs.push(`${v.shortName} ${h.year}: rate(${h.rate}) 与投稿录用数不符，应为 ${calc.toFixed(2)}`)
    })
    // 年份必须降序
    for (let i = 1; i < s.history.length; i++) {
      if (s.history[i].year > s.history[i - 1].year)
        errs.push(`${v.shortName} history 年份未降序`)
    }
  }
})

// 7. 会议必需字段（editions 事件流模型）
venues.conferences.forEach(c => {
  if (!c.submission) errs.push(`${c.shortName} 缺 submission`)
  if (!c.valuesNote) warns.push(`${c.shortName} 缺 valuesNote（编辑解读，Profile 会显得空）`)

  // 事件流结构
  if (!c.editions?.length) { errs.push(`${c.shortName} 缺 editions（投稿周期数据）`); return }
  c.editions.forEach(ed => {
    if (!ed.year) errs.push(`${c.shortName} 某届缺 year`)
    if (!ed.timezone) warns.push(`${c.shortName} ${ed.year} 缺 timezone（CCFDDL 惯例字段，影响 deadline 理解）`)
    const hasSub = ed.submissions?.length || ed.timeline?.length
    if (!hasSub) errs.push(`${c.shortName} ${ed.year} 届既无 submissions 也无 timeline`)
    // 日期格式
    ;(ed.timeline || []).forEach(ev => {
      if (ev.date && !/^\d{4}-\d{2}-\d{2}$/.test(ev.date))
        errs.push(`${c.shortName} ${ed.year} timeline 事件 ${ev.type} 日期格式错误: ${ev.date}`)
      if (ev.type && !['abstract', 'paper', 'rebuttal', 'notification', 'camera', 'conference'].includes(ev.type))
        warns.push(`${c.shortName} 未知事件类型: ${ev.type}`)
    })
    ;(ed.submissions || []).forEach(s => {
      for (const k of ['abstract', 'paper', 'rebuttal', 'notification']) {
        if (s[k] && !/^\d{4}-\d{2}-\d{2}$/.test(s[k]))
          errs.push(`${c.shortName} ${ed.year} ${s.round || ''} ${k} 日期格式错误: ${s[k]}`)
      }
    })
  })
  // 未来截稿应该来自 editions，不允许再有推算字段
  if (c.deadlines) warns.push(`${c.shortName} 仍有旧 deadlines 字段，应迁移到 editions[].submissions`)
  if (c.history) warns.push(`${c.shortName} 仍有旧 history 字段，应迁移到 editions`)
})

// 7b. relations 三分法
ALL.forEach(v => {
  const rel = v.relations
  if (!rel) { warns.push(`${v.shortName} 缺relations（similar/alternative/related）`); return }
  for (const key of ['similar', 'alternative', 'related']) {
    const list = rel[key] || []
    list.forEach(item => {
      if (!ids.has(item.id)) errs.push(`${v.shortName}.relations.${key} 指向不存在的 "${item.id}"`)
      if (item.id === v.id) errs.push(`${v.shortName}.relations.${key} 指向了自己`)
      if (!item.why || item.why.length < 5) warns.push(`${v.shortName} → ${item.id} 缺 why 说明`)
    })
  }
})

// 7c. Data Completeness 四态
const STATUS = ['complete', 'partial', 'missing', 'none']
ALL.forEach(v => {
  const s = v.acceptanceStats
  if (!s?.status) { errs.push(`${v.shortName} 缺 acceptanceStats.status（四态）`); return }
  if (!STATUS.includes(s.status)) { errs.push(`${v.shortName} status 非法: ${s.status}`); return }
  const h = s.history || []
  if (h.length && !s.coverage) errs.push(`${v.shortName} 有 history 但缺 coverage`)
  if (!h.length && s.coverage) errs.push(`${v.shortName} 无 history 却有 coverage`)
  if ((s.status === 'missing' || s.status === 'none') && !s.lastChecked)
    warns.push(`${v.shortName} 标为 ${s.status} 但缺 lastChecked（应说明何时核对过）`)
})

// 8. 战报引用
reports.reports.forEach(r => {
  if (r.venueId && !ids.has(r.venueId)) errs.push(`战报 ${r.id} 指向不存在的 venue "${r.venueId}"`)
})

// 9. 非 ASCII 污染（西里尔字母等）
const checkRaw = (name, obj) => {
  const raw = JSON.stringify(obj)
  const bad = [...raw].filter(ch => {
    const c = ch.codePointAt(0)
    return (c >= 0x0400 && c <= 0x04FF) || (c >= 0x0370 && c <= 0x03FF)
  })
  if (bad.length) errs.push(`${name} 含西里尔/希腊字母: ${[...new Set(bad)].join(' ')}`)
}
checkRaw('venues.json', venues)
checkRaw('areas.json', areasData)
checkRaw('reports.json', reports)

// 10. ID 与 shortName 一致性（避免 TWC/tws 这类问题）
ALL.forEach(v => {
  if (!v.id || !v.shortName) errs.push('存在缺 id 或 shortName 的条目')
  const idLower = v.id.toLowerCase()
  const snLower = v.shortName.toLowerCase().replace(/[^a-z]/g, '')
  if (snLower.length >= 3 && !idLower.includes(snLower.slice(0, 3)))
    warns.push(`${v.shortName} 的 id "${v.id}" 与缩写不符，检查是否写错`)
})

// 11. 孤立venue：未被任何领域引用（页面上难以被发现）
const usedByArea = new Set(areasData.areas.flatMap(a => a.venueIds))
ALL.forEach(v => {
  if (!usedByArea.has(v.id)) errs.push(`${v.shortName} 未被任何研究领域关联，页面上无法从领域入口找到`)
})

// 12. 领域内应至少有一个会议（纯期刊的领域在投稿决策上意义有限）
areasData.areas.forEach(a => {
  const confIds = new Set(venues.conferences.map(c => c.id))
  const n = a.venueIds.filter(id => confIds.has(id)).length
  if (n === 0) warns.push(`领域「${a.name}」没有关联任何会议，只有期刊`)
})

// 13. id 命名陷阱：同名不同类型（如 imwut 会议 vs imwut-j 期刊）
const shortNames = {}
ALL.forEach(v => {
  const k = v.shortName.toLowerCase()
  ;(shortNames[k] = shortNames[k] || []).push(v)
})
Object.entries(shortNames).forEach(([k, list]) => {
  if (list.length > 1) {
    const types = list.map(x => x.type).join('+')
    // 同名不同 id 是正常的（会议版+期刊版），但要在文档里能分辨
    if (!list.every(x => x.id.includes('j') || x.type === list[0].type)) {
      warns.push(`${list.map(x => x.shortName).join(' / ')} 同名但 id 无区分标记（当前 ${types}）`)
    }
  }
})

// 输出
console.log('='.repeat(52))
console.log('数据校验结果')
console.log('='.repeat(52))
console.log(`会议 ${venues.conferences.length} · 期刊 ${venues.journals.length} · 领域 ${areasData.areas.length} · 标签 ${(venues.tags || []).length} · 战报 ${reports.reports.length}`)

if (warns.length) {
  console.log(`\n⚠ 提醒 ${warns.length} 条：`)
  warns.forEach(w => console.log('  ⚠', w))
}
if (errs.length) {
  console.log(`\n✗ 错误 ${errs.length} 条：`)
  errs.forEach(e => console.log('  ✗', e))
  process.exit(1)
}
console.log('\n✓ 全部校验通过')
