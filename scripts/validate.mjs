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

// 4. 领域内 venue 是否真的相关（至少共享一个标签或子主题）
areasData.areas.forEach(a => {
  a.venueIds.forEach(id => {
    const v = ALL.find(x => x.id === id)
    if (!v) return
    const topicIds = a.topics.map(t => t.id)
    const hit = (v.tags || []).some(t => topicIds.includes(t)) || a.venueIds.length <= 8
    if (!hit) warns.push(`${a.name} → ${v.shortName} 标签与子主题无交集，请确认关联是否合理`)
  })
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

// 7. 会议必需字段
venues.conferences.forEach(c => {
  if (!c.submission) errs.push(`${c.shortName} 缺 submission`)
  if (!c.timeline) errs.push(`${c.shortName} 缺 timeline`)
  if (!c.history?.length) errs.push(`${c.shortName} 缺 history（截稿推算依赖它）`)
  if (!c.valuesNote) warns.push(`${c.shortName} 缺 valuesNote（编辑解读，Profile 会显得空）`)
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
