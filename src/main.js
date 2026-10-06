import './style.css'
import venuesRaw from '../data/venues.json'
import reportsRaw from '../data/reports.json'
import areasRaw from '../data/areas.json'

const VENUES = [...venuesRaw.conferences, ...venuesRaw.journals]
const CONFS = venuesRaw.conferences
const JOURNALS = venuesRaw.journals
const TAGS = venuesRaw.tags
const AREAS = areasRaw.areas
const REPORTS = reportsRaw.reports
const META = venuesRaw._meta
const SOURCES = venuesRaw.sources

const BY_ID = Object.fromEntries(VENUES.map(v => [v.id, v]))
const AREA_MAP = Object.fromEntries(AREAS.map(a => [a.id, a]))
const TAG_MAP = Object.fromEntries(TAGS.map(t => [t.id, t]))
const tagName = id => TAG_MAP[id]?.name || id
const tagBadge = id => {
  const t = TAG_MAP[id]
  return `<span class="badge b-${t?.color || 'gray'}">${tagName(id)}</span>`
}

// 价值维度：编辑解读，非官方数据
const DIMS = [
  ['hci', 'HCI / 以人为中心'],
  ['sensing', '感知贡献'],
  ['systems', '系统实现'],
  ['mobile', '移动场景'],
  ['hardware', '硬件实现'],
  ['theory', '理论创新']
]

// 分级：必须标注体系与年份，因为评价体系本身会变
const rankBadges = v => {
  const list = v.ccfByYear || []
  if (!list.length) return '<span class="badge b-gray">未收录 CCF</span>'
  return list.map(r => `<span class="badge b-teal">${esc(r.system)} ${r.year}: ${esc(r.rank)}</span>`).join(' ')
}
const rankText = v => {
  const list = v.ccfByYear || []
  if (!list.length) return '未收录'
  return list.map(r => r.system + ' ' + r.year + ': ' + r.rank).join(' / ')
}

const DAY = 86400000
const daysUntil = dateStr => {
  const [y, m, d] = dateStr.split('-').map(Number)
  return Math.round((new Date(y, m - 1, d) - new Date()) / DAY)
}
const fmt = d => (d ? d.replace(/-/g, '.') : '—')
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

// 数据来源标注：始终区分「事实」与「编辑判断」
// status 四态：complete完整 / partial部分 / missing查过没有 / none不公开
const srcNote = (stats, extra) => {
  if (!stats) return ''
  const srcName = stats.source ? (SOURCES[stats.source]?.name || stats.source) : '—'
  const confLabel = { high: '高置信', medium: '中等置信', low: '低置信' }[stats.confidence] || '—'
  const statusLabel = {
    complete: '数据完整', partial: '部分年份', missing: '未收录', none: '不公开'
  }[stats.status] || ''
  // missing / none 也要显示核对日期，让人知道这是查过的结论
  if (stats.status === 'missing' || stats.status === 'none') {
    return '<div class="src-note">' +
      '<span class="conf conf-none"><span class="conf-dot"></span>' + statusLabel + '</span>' +
      (stats.lastChecked ? '<span>核对于 ' + esc(stats.lastChecked) + '</span>' : '') +
      (extra ? '<span>' + esc(extra) + '</span>' : '') +
      '</div>'
  }
  return '<div class="src-note">' +
    '<span class="conf conf-' + stats.confidence + '"><span class="conf-dot"></span>' + confLabel + '</span>' +
    '<span>来源：' + esc(srcName) + '</span>' +
    (stats.lastVerified ? '<span>核对于 ' + esc(stats.lastVerified) + '</span>' : '') +
    (extra ? '<span>' + esc(extra) + '</span>' : '') +
    '</div>'
}

const state = {
  tab: 'explore',
  area: null,
  venue: null,
  tag: 'all',
  q: '',
  showPrivate: false,
  view: 'table',
  cmp: ['sensys', 'ubicomp', 'ipsn']
}

const app = document.getElementById('app')

/* ---------- upstream deadlines ---------- */
// 收集未来的截稿日期。两种来源：
//   1. deadlines 数组 = 官网确认的真实日期，优先展示
//   2. 由往年 history 推算 = 规划参考，标注「推算」
// 从 editions 事件流收集所有未来 deadline（借鉴 CCFDDL 的事件流模型）
// 每个节点标注：来源 edition、轮次、时区、事件类型
const EVENT_LABEL = {
  abstract: '摘要', paper: '全文', rebuttal: 'Rebuttal',
  notification: '结果', camera: '终稿', conference: '召开'
}
const EVENT_COLOR = {
  abstract: 'b-teal', paper: 'b-blue', rebuttal: 'b-amber',
  notification: 'b-green', camera: 'b-gray', conference: 'b-purple'
}

function upcomingDeadlines() {
  const out = []
  for (const c of venuesRaw.conferences) {
    for (const ed of c.editions || []) {
      // timeline 事件（通知、召开等）
      for (const ev of ed.timeline || []) {
        if (!ev.date) continue
        const d = daysUntil(ev.date)
        if (d < -7 || d > 400) continue
        out.push({
          venue: c, date: ev.date, days: d,
          label: EVENT_LABEL[ev.type] || ev.type,
          color: EVENT_COLOR[ev.type] || 'b-gray',
          round: '', tz: ed.timezone || ''
        })
      }
      // submissions 里的 abstract / paper / rebuttal
      for (const sub of ed.submissions || []) {
        for (const key of ['abstract', 'paper', 'rebuttal']) {
          if (!sub[key]) continue
          const d = daysUntil(sub[key])
          if (d < -7 || d > 400) continue
          out.push({
            venue: c, date: sub[key], days: d,
            label: EVENT_LABEL[key] || key,
            color: EVENT_COLOR[key] || 'b-gray',
            round: sub.round || '', tz: ed.timezone || ''
          })
        }
        if (sub.notification) {
          const d = daysUntil(sub.notification)
          if (d >= -7 && d <= 400) {
            out.push({
              venue: c, date: sub.notification, days: d,
              label: EVENT_LABEL.notification,
              color: EVENT_COLOR.notification,
              round: sub.round || '', tz: ed.timezone || ''
            })
          }
        }
      }
    }
  }
  // 论文类事件优先（abstract/paper），其次其他
  const paperFirst = e => (e.label === '全文' || e.label === '摘要' ? 0 : 1)
  return out.sort((a, b) => (paperFirst(a) - paperFirst(b) || a.days - b.days))
}

const deadlineRow = d => {
  const cls = d.days < 0 ? 'urgent' : d.days <= 30 ? 'urgent' : d.days <= 90 ? 'soon' : 'normal'
  const left = d.days < 0 ? '已过' : d.days === 0 ? '今天' : `${d.days} 天`
  return '<div class="cd-row">' +
    '<span class="cd-name">' + esc(d.venue.shortName) +
      '<span class="badge ' + (d.color || 'b-gray') + '">' + esc(d.label) + '</span>' +
      (d.round ? '<span class="badge b-gray">' + esc(d.round) + '</span>' : '') +
    '</span>' +
    '<span class="cd-date">' + fmt(d.date) +
      (d.tz ? '<span class="tz">' + esc(d.tz) + '</span>' : '') +
    '</span>' +
    '<span class="cd-left ' + cls + '">' + left + '</span>' +
  '</div>'
}

/* ---------- 领域卡片（首页与领域页共用） ---------- */
function areaCardHtml(a) {
  const vs = a.venueIds.map(id => BY_ID[id]).filter(Boolean)
  const confs = vs.filter(v => v.type === 'conference')
  const jnls = vs.filter(v => v.type === 'journal')
  const withRate = vs.filter(v => v.acceptanceStats && v.acceptanceStats.history &&
    v.acceptanceStats.history.length).length
  // 该领域最近的一个截稿
  let soonest = null
  for (const v of confs) {
    for (const ed of v.editions || []) {
      for (const sub of ed.submissions || []) {
        for (const k of ['paper', 'abstract']) {
          if (!sub[k]) continue
          const d = daysUntil(sub[k])
          if (d < 0 || d > 400) continue
          if (!soonest || d < soonest.d) soonest = { d, name: v.shortName, date: sub[k] }
        }
      }
    }
  }
  return '<div class="area-card b-' + a.color + '" data-area="' + a.id + '">' +
    '<h3>' + esc(a.name) + '</h3>' +
    '<div class="en">' + esc(a.enName) + '</div>' +
    '<p>' + esc(a.summary) + '</p>' +
    '<div class="area-stats">' +
      '<span>' + a.topics.length + ' 子主题</span>' +
      '<span>' + confs.length + ' 会议 · ' + jnls.length + ' 期刊</span>' +
      '<span>' + withRate + '/' + vs.length + ' 有录用率数据</span>' +
      (soonest ? '<span>最近截稿 ' + esc(soonest.name) + ' ' + fmt(soonest.date) +
        '（' + soonest.d + ' 天）</span>' : '') +
    '</div></div>'
}

/* ---------- Explore: 研究领域导航 ---------- */
function exploreView() {
  if (state.area) return areaView(state.area)

  const cards = AREAS.map(areaCardHtml).join('')

  return `
  <div class="page-head">
    <h1>研究领域</h1>
    <p>${META.field || ''} · 从你的研究方向出发，看这个领域主要往哪些会议和期刊投稿</p>
  </div>
  <div class="banner">
    <b>数据更新于 ${META.lastUpdated}</b>
    <span>录用率等数据均标注来源与置信度。价值维度评分是编辑解读，不是官方数据。</span>
  </div>
  <div class="area-grid">${cards}</div>`
}

function areaView(areaId) {
  const a = AREA_MAP[areaId]
  if (!a) { state.area = null; return exploreView() }
  const vs = a.venueIds.map(id => BY_ID[id]).filter(Boolean)
  const confs = vs.filter(v => v.type === 'conference')
  const jnls = vs.filter(v => v.type === 'journal')

  const topics = a.topics.map(t => {
    // 该子主题下关联的 venue：标签或领域名匹配
    const matched = vs.filter(v =>
      v.tags?.some(tag => t.id.includes(tag) || tag.includes(t.id.split('-')[0]))
    )
    return `<div class="topic-item">
      <div><b>${esc(t.name)}</b><div style="font-size:11.5px;color:var(--text-3);margin-top:1px">${esc(t.desc)}</div></div>
      <span>${matched.length ? matched.length + ' 个相关 venue' : '—'}</span>
    </div>`
  }).join('')

  const venueCard = v => {
    const st = v.acceptanceStats
    const latest = st?.history?.[0]
    return `<div class="rel-card" data-venue="${v.id}">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px">
        <span class="n">${esc(v.shortName)}</span>
        <span class="badge b-gray">${v.type === 'conference' ? '会议' : '期刊'}</span>
      </div>
      <div class="d">${rankText(v)}${v.cas ? ' · 中科院' + v.cas : ''}</div>
      <div class="d">${latest ? `近年录用率 ${latest.rate}%` : '录用率暂无核实数据'}</div>
    </div>`
  }

  return `
  <button class="back-link" data-back="areas">← 返回研究领域</button>
  <div class="page-head">
    <h1>${esc(a.name)}</h1>
    <p>${esc(a.enName)} · ${esc(a.summary)}</p>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>子主题</h2><span class="hint">${a.topics.length} 个</span></div>
    <div class="topic-list">${topics}</div>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>相关会议</h2><span class="hint">${confs.length} 个 · 点击查看详情</span></div>
    ${confs.length ? `<div class="rel-grid">${confs.map(venueCard).join('')}</div>` : '<p class="no-data">暂无</p>'}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>相关期刊</h2><span class="hint">${jnls.length} 本</span></div>
    ${jnls.length ? `<div class="rel-grid">${jnls.map(venueCard).join('')}</div>` : '<p class="no-data">暂无</p>'}
  </div>`
}

/* ---------- Venue Profile ---------- */
function profileView(venueId) {
  const v = BY_ID[venueId]
  if (!v) { state.venue = null; return exploreView() }
  const isConf = v.type === 'conference'
  const st = v.acceptanceStats || {}
  const hist = (st.history || []).slice().sort((a, b) => a.year - b.year)

  // Data Coverage：明确说明覆盖哪些年份，让缺失可感知
  const coverageText = (() => {
    const cov = st.coverage
    if (!cov || !hist.length) return ''
    const years = hist.map(h => h.year)
    const gaps = []
    for (let y = cov.from; y <= cov.to; y++) if (!years.includes(y)) gaps.push(y)
    let t = '覆盖 ' + cov.from + '–' + cov.to + '（' + cov.years + ' 年）'
    if (gaps.length) t += '，缺 ' + gaps.join('/')
    if (cov.to < new Date().getFullYear() - 1) t += ' · 数据可能滞后'
    return t
  })()

  // Identity
  const facts = [
    ['类型', isConf ? '会议' : '期刊'],
    ['主办', isConf ? v.organizer : v.publisher],
    ['成立年份', v.founded || '—'],
    ['周期', v.frequency || '—'],
    ['分级', rankText(v)],
    isConf ? ['页数限制', v.submission?.pageLimit || '—'] : ['中科院分区', v.cas || '—'],
    isConf ? ['评审模式', v.submission?.reviewModel || '—'] : ['影响因子', v.if || '—'],
    isConf ? ['Rebuttal', v.submission?.rebuttal || '—'] : ['审稿周期', v.reviewCycle || '—']
  ]

  // 录用率趋势图
  const trend = (() => {
    if (!hist.length) return ''
    const maxSub = Math.max.apply(null, hist.map(h => h.submitted))
    const cols = hist.map(function (h) {
      const sh = Math.max(4, Math.round(h.submitted / maxSub * 56))
      const ah = Math.max(3, Math.round(h.accepted / maxSub * 56))
      const tip = h.year + ' 投稿 ' + h.submitted + '，录用 ' + h.accepted
      return '<div class="trend-col"><div class="trend-bars" title="' + tip + '">' +
        '<span class="tb sub" style="height:' + sh + 'px"></span>' +
        '<span class="tb" style="height:' + ah + 'px"></span></div>' +
        '<span class="trend-x">' + String(h.year).slice(2) + '</span></div>'
    })
    return '<div class="trend">' + cols.join('') + '</div>'
  })()

  const statsRows = hist.slice().reverse().map(h =>
    '<tr><td>' + h.year + '</td><td class="num">' + h.submitted +
    '</td><td class="num">' + h.accepted + '</td><td class="num">' + h.rate + '%</td></tr>'
  ).join('')
  const statsTable = hist.length
    ? '<table class="data"><thead><tr><th>年份</th><th class="num">投稿</th>' +
      '<th class="num">录用</th><th class="num">录用率</th></tr></thead><tbody>' +
      statsRows + '</tbody></table>'
    : ''

  // 投稿周期：按 edition 事件流渲染（借鉴 CCFDDL）
  const flow = isConf ? (() => {
    const eds = (v.editions || []).slice().sort((a, b) => b.year - a.year)
    if (!eds.length) return '<p class="no-data">暂无投稿周期数据</p>'
    return eds.map(function (ed) {
      const rows = []
      for (const sub of ed.submissions || []) {
        const rd = sub.round ? '<b>' + esc(sub.round) + '</b>' : '—'
        rows.push('<tr><td>' + rd + '</td>' +
          '<td>' + (sub.abstract ? fmt(sub.abstract) : '—') + '</td>' +
          '<td>' + (sub.paper ? fmt(sub.paper) : '—') + '</td>' +
          '<td>' + (sub.rebuttal ? fmt(sub.rebuttal) : '—') + '</td>' +
          '<td>' + (sub.notification ? fmt(sub.notification) : '—') + '</td></tr>')
      }
      const tl = (ed.timeline || []).map(function (ev) {
        return '<span class="tl-ev"><span class="badge ' + (EVENT_COLOR[ev.type] || 'b-gray') + '">' +
          esc(EVENT_LABEL[ev.type] || ev.type) + '</span>' + fmt(ev.date) +
          (ev.comment ? ' <span style="color:var(--text-3)">' + esc(ev.comment) + '</span>' : '') +
          '</span>'
      }).join('')
      return '<div class="edition">' +
        '<div class="ed-head">' +
          '<span class="ed-year">' + ed.year + ' 届' +
          (ed.accepted ? '<span class="badge b-green">征稿中</span>' : '') + '</span>' +
          '<span class="ed-meta">' +
            (ed.place ? esc(ed.place) + ' · ' : '') +
            (ed.timezone ? '时区 ' + esc(ed.timezone) : '') +
            (ed.conferenceDate ? ' · ' + esc(ed.conferenceDate) : '') +
          '</span>' +
        '</div>' +
        (rows.length ? '<table class="data"><thead><tr><th>轮次</th><th>摘要</th><th>全文</th><th>Rebuttal</th><th>结果</th></tr></thead><tbody>' +
          rows.join('') + '</tbody></table>' : '') +
        (tl ? '<div class="tl">' + tl + '</div>' : '') +
        (ed.statsNote ? '<div class="src-note" style="margin-top:6px">' + esc(ed.statsNote) + '</div>' : '') +
        (ed.link ? '<div class="src-note" style="margin-top:6px"><a href="' + ed.link + '" target="_blank" rel="noopener">该届官网 ↗</a></div>' : '') +
      '</div>'
    }).join('')
  })() : ''

  // 关系三分法：similar / alternative / related
  const REL_META = {
    similar: { title: 'Similar', desc: '领域和贡献模式相近，可作为同类替代' },
    alternative: { title: 'Alternative', desc: '研究问题类似但投稿侧重点不同，值得换个角度考虑' },
    related: { title: 'Related', desc: '技术或研究社区存在交叉' }
  }
  const relSection = (() => {
    const rel = v.relations || {}
    const blocks = []
    for (const key of ['similar', 'alternative', 'related']) {
      const list = rel[key] || []
      if (!list.length) continue
      const m = REL_META[key]
      const cards = list.map(function (item) {
        const r = BY_ID[item.id]
        if (!r) return ''
        const rl = r.acceptanceStats && r.acceptanceStats.history && r.acceptanceStats.history[0]
        return '<div class="rel-card" data-venue="' + r.id + '">' +
          '<div class="n">' + esc(r.shortName) + '</div>' +
          '<div class="d">' + rankText(r) + (r.cas ? ' · 中科院' + r.cas : '') + '</div>' +
          '<div class="d">' + (rl ? '录用率 ' + rl.rate + '%' : '录用率未核实') + '</div>' +
          '<div class="why">' + esc(item.why) + '</div></div>'
      }).join('')
      blocks.push('<div class="rel-group">' +
        '<div class="rel-head"><span class="rel-title">' + m.title + '</span>' +
        '<span class="rel-desc">' + m.desc + '</span></div>' +
        '<div class="rel-grid">' + cards + '</div></div>')
    }
    return blocks.length ? blocks.join('') : '<p class="no-data">暂无关联 venue</p>'
  })()
  const areas = AREAS.filter(a => a.venueIds.includes(v.id))

  return `
  <button class="back-link" data-back="venues">← 返回会议与期刊列表</button>
  <div class="profile-head">
    <h1>${esc(v.shortName)}</h1>
    <div class="full">${esc(v.name)}</div>
    <div class="profile-badges">
      <span class="badge ${isConf ? 'b-blue' : 'b-purple'}">${isConf ? '会议' : '期刊'}</span>
      ${rankBadges(v)}
      ${v.cas ? `<span class="badge b-coral">中科院${v.cas}</span>` : ''}
      <span class="badge b-gray">${esc(v.rank)}</span>
      ${v.if ? `<span class="badge b-amber">IF ${v.if}</span>` : ''}
    </div>
    <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
      ${(v.tags || []).map(tagBadge).join('')}
    </div>
    <div style="margin-top:12px;display:flex;gap:14px;flex-wrap:wrap;font-size:12.5px">
      <a href="${v.link}" target="_blank" rel="noopener">官网 ↗</a>
      ${v.dblp ? `<a href="${v.dblp}" target="_blank" rel="noopener">DBLP ↗</a>` : ''}
      ${v.apc ? `<span style="color:var(--text-3)">版面费 ${esc(v.apc)}</span>` : ''}
    </div>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>基本信息</h2></div>
    <div class="facts">${facts.map(([k, val]) =>
      `<div class="fact"><div class="k">${esc(k)}</div><div class="v">${esc(val)}</div></div>`
    ).join('')}</div>
    <p style="margin-top:14px">${esc(v.description)}</p>
    ${v.topicsNote ? `<div style="margin-top:12px">
      <div style="font-size:11.5px;color:var(--text-3);margin-bottom:4px">征稿范围</div>
      <p style="font-size:12.5px">${esc(v.topicsNote)}</p>
    </div>` : ''}
  </div>

  <div class="mod">
    <div class="mod-head">
      <h2>这个 venue 看重什么</h2>
      <span class="hint">编辑解读 · 非官方数据</span>
    </div>
    ${DIMS.map(([k, label]) => {
      const n = v.values?.[k] || 0
      return `<div class="rating-row">
        <span class="dim">${esc(label)}</span>
        <span class="stars">${[1, 2, 3, 4, 5].map(i => `<span class="star ${i <= n ? 'on' : ''}"></span>`).join('')}</span>
        <span class="val">${n}/5</span>
      </div>`
    }).join('')}
    ${v.valuesNote ? `<div class="editor-note">${esc(v.valuesNote)}</div>` : ''}
    ${areas.length ? `<div class="src-note" style="margin-top:10px">所属领域：${areas.map(a => esc(a.name)).join('、')}</div>` : ''}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>数据来源</h2><span class="hint">每个字段的可信度</span></div>
    <table class="data">
      <thead><tr><th>字段</th><th>值</th><th>来源</th><th>置信度</th></tr></thead>
      <tbody>
        <tr>
          <td>CCF 分级</td>
          <td>${esc(rankText(v))}</td>
          <td>${esc(SOURCES.ccf.name)}</td>
          <td><span class="conf conf-high"><span class="conf-dot"></span>高</span></td>
        </tr>
        ${v.cas ? `<tr>
          <td>中科院分区</td><td>${esc(v.cas)}</td>
          <td>${esc(SOURCES.ccf.name)}</td>
          <td><span class="conf conf-medium"><span class="conf-dot"></span>中（每年调整）</span></td>
        </tr>` : ''}
        ${v.if ? `<tr>
          <td>影响因子</td><td>${esc(v.if)}</td>
          <td>期刊官网</td>
          <td><span class="conf conf-medium"><span class="conf-dot"></span>中（每年更新）</span></td>
        </tr>` : ''}
        <tr>
          <td>价值维度评分</td><td>6 项× 1-5 星</td>
          <td>${esc(SOURCES.editor.name)}</td>
          <td><span class="conf conf-low"><span class="conf-dot"></span>编辑解读</span></td>
        </tr>
        <tr>
          <td>录用率</td>
          <td>${st.history?.length ? st.history.length + ' 年数据' : '暂无'}</td>
          <td>${st.source ? esc(SOURCES[st.source]?.name || st.source) : '—'}</td>
          <td><span class="conf conf-${st.confidence || 'none'}"><span class="conf-dot"></span">${
            ({ high: '高', medium: '中', low: '低', none: '无数据' }[st.confidence || 'none'])}</span></td>
        </tr>
        <tr>
          <td>投稿要求</td><td>见投稿流程模块</td>
          <td>${esc(v.organizer || v.publisher || '官网')}</td>
          <td><span class="conf conf-none"><span class="conf-dot"></span>请以官网为准</span></td>
        </tr>
      </tbody>
    </table>
    <div class="src-note" style="margin-top:10px">${esc(META.dataPolicy || '')}</div>
  </div>

  ${isConf ? `<div class="mod">
    <div class="mod-head"><h2>投稿周期（历届）</h2><span class="hint">时区与轮次均按官方标注</span></div>
    ${flow}
    ${v.submission?.tracks?.length ? `<div style="margin-top:12px">
      <div style="font-size:11.5px;color:var(--text-3);margin-bottom:4px">Track / 投稿类型</div>
      <div style="display:flex;gap:5px;flex-wrap:wrap">${v.submission.tracks.map(t => `<span class="badge b-gray">${esc(t)}</span>`).join('')}</div>
    </div>` : ''}
    ${v.submission?.extra ? `<div class="editor-note">${esc(v.submission.extra)}</div>` : ''}
    <div class="src-note" style="margin-top:10px">投稿要求以${esc(v.organizer || v.publisher)}官网为准，此处仅作速查</div>
  </div>` : ''}

  <div class="mod">
    <div class="mod-head">
      <h2>${isConf ? '录用率与竞争程度' : '审稿周期'}</h2>
      <span class="hint">${st.status === 'none' ? '该刊不公开录用数据' : hist.length ? coverageText : '未找到公开数据'}</span>
    </div>
    ${hist.length ? `${trend}
      <div style="display:flex;gap:14px;font-size:11.5px;color:var(--text-3);margin:6px 0 14px">
        <span><span style="display:inline-block;width:8px;height:8px;background:var(--border-strong);border-radius:2px;margin-right:4px"></span>投稿数</span>
        <span><span style="display:inline-block;width:8px;height:8px;background:var(--accent);border-radius:2px;margin-right:4px"></span>录用数</span>
      </div>
      ${statsTable}
    ` : `<div class="missing-data">
        <div class="md-title">${st.status === 'none' ? '该刊录用率通常不公开' : '未找到可靠公开录用统计'}</div>
        <div class="md-note">${esc(st.note || '')}</div>
        <div class="md-check">上次核对：${esc(st.lastChecked || META.lastUpdated)}</div>
      </div>`}
    ${srcNote(st, hist.length ? coverageText : '')}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>关联 venue</h2><span class="hint">按关系类型分组</span></div>
    ${relSection}
  </div>

  ${v.tips ? `<div class="mod">
    <div class="mod-head"><h2>组内经验</h2><span class="hint">来自组内投稿记录</span></div>
    <p>${esc(v.tips)}</p>
  </div>` : ''}`
}

/* ---------- 新手指南 ---------- */
function startView() {
  // 可折叠步骤：默认展开第1 步，其余收起
  const steps = [
    {
      n: 1,
      when: '投稿前 2–3 个月',
      title: '明确投稿目标',
      lead: '决定「投哪里」是投稿流程里最关键的一步，决定了后面所有时间安排。',
      body: `
<h4>要回答的三个问题</h4>
<ul>
<li>你的工作属于哪一类？—— 算法创新 / 系统实现 / 实测工程 / 人机交互</li>
<li>这个方向的主会有哪些？备选是哪些？</li>
<li>时间线是否允许？如果今年赶不上，下一个窗口是什么时候？</li>
</ul>
<h4>怎么做</h4>
<ol>
<li>从「领域」页进入你的研究方向，列出该领域主要投稿目标</li>
<li>逐个查看 Venue 页的「价值维度」与「组内经验」，判断匹配度</li>
<li>用「对比」页挑 2–4 个候选并排看，找出真正适合你的</li>
<li>到「截止」页确认下一届时间，倒推自己的内部 deadline</li>
</ol>
<h4>常见误区</h4>
<ul>
<li><b>只按 CCF 等级选会</b> —— A 类会议里也有不适合自己工作的，评审口味差异比等级更重要</li>
<li><b>只盯录用率高低</b> —— 20% 录用的会议可能比25% 的更对口，方向错了再高的录用率也没用</li>
<li><b>忽略评审周期</b> —— 有的会从投稿到出结果要 6 个月，直接影响下一篇的时间安排</li>
<li><b>忽略 track 选择</b> —— 同一个会议不同 track 的审稿人不同，选错等于投给了错误的人</li>
</ul>`
    },
    {
      n: 2,
      when: '投稿前 1 个月',
      title: '注册与账号',
      lead: '各会议的投稿系统不同，多数在截稿前 1–2 周才开放注册。',
      body: `
<h4>需要准备</h4>
<ul>
<li>常用邮箱（Gmail / QQ 均可，审稿通知会发到这里）</li>
<li>所有作者的真实姓名与机构信息</li>
<li>ORCID（部分会议推荐填写）</li>
<li>通讯作者的确认（需能代表全体作者提交）</li>
</ul>
<h4>注册入口</h4>
<p>ACM DL / IEEE Xplore 的 HotCRP 或 CMT 系统，各会议不同 —— 见各 Venue 页的官网链接。</p>
<h4>注意事项</h4>
<ul>
<li>一位作者在同一会议只能有一份投稿，不要重复注册</li>
<li>组内投稿建议用密码管理器共享账号，不要明文写在文档里</li>
<li>确认邮箱能正常接收邮件（垃圾箱也会收），这是接收评审通知的唯一渠道</li>
</ul>`
    },
    {
      n: 3,
      when: '投稿前 1 周',
      title: '格式与模板',
      lead: '格式问题最容易被忽略，也最容易因为格式被 desk reject。',
      body: `
<h4>必须逐项检查</h4>
<ul>
<li><b>模板版本</b> —— 用会议指定的 LaTeX / Word 模板，不要用自己以前那份</li>
<li><b>页数限制</b> —— 确认正文页数与参考文献是否分开算</li>
<li><b>匿名要求</b> —— 双盲会议需移除作者姓名、机构、致谢；单盲只需移除致谢</li>
<li><b>图表位置</b> —— 部分会议要求图表嵌在正文内，不能放附录</li>
<li><b>引用格式</b> —— 用模板自带的 BibTeX 样式，不要手改</li>
<li><b>字体嵌入</b> —— 中文字体未嵌入会导致评审打开异常</li>
<li><b>文件大小</b> —— 常有 1–10 MB 限制</li>
</ul>
<h4>本站收录的格式信息</h4>
<p>下方表格列出已核实的部分。其余会议请见各 Venue 页或官网 CFP。</p>`
    },
    {
      n: 4,
      when: '截稿日前',
      title: '提交',
      lead: '截稿时间看的是服务器接收时间，不是你的完成时间。',
      body: `
<h4>提交步骤</h4>
<ol>
<li>在 HotCRP / CMT 创建 submission</li>
<li>填标题、摘要、作者列表（顺序须与最终版一致）</li>
<li><b>选投稿 track</b> —— 这一步最容易出错</li>
<li>上传 PDF</li>
<li>声明 conflicts（与你有合作或同单位的人需回避评审）</li>
<li>勾选版权与道德声明</li>
<li>点击 Submit 确认，保存confirmation 邮件</li>
</ol>
<h4>track 选择为什么关键</h4>
<p>同一会议不同 track 的审稿人不同、录用率不同。UbiComp 的 Sensing track 与 HCI track 审稿口味完全不同 —— 选错 track 相当于把稿子投给了不合适的评审。</p>
<h4>提交后立刻做</h4>
<ul>
<li>保存 confirmation 邮件</li>
<li>在「战报」板块记录一条（会议、轮次、日期、track），避免组内撞车</li>
</ul>
<h4>关于临界时间</h4>
<ul>
<li>时区务必看清 —— 本站已标注，多数会议用 <b>AoE（UTC-12）</b></li>
<li>建议提前 2–3 天完成提交，避开最后几小时的系统拥堵</li>
</ul>`
    },
    {
      n: 5,
      when: '投稿后 1–6 个月',
      title: '审稿周期与等待',
      lead: '不同会议的评审周期差异很大，影响后续时间安排。',
      body: `
<p>下方表格列出已核实的首轮决定周期。各会议完整时间线见对应 Venue 页的「投稿周期」模块。</p>
<h4>等待期间该做什么</h4>
<ul>
<li><b>不要空等</b> —— 同步推进下一篇工作，这是审稿周期长的会议不亏的原因</li>
<li>组会定期汇报进展，保持节奏</li>
<li>如果超过预计时间 2 周仍无消息，可礼貌询问 TPC chair</li>
</ul>`
    },
    {
      n: 6,
      when: '收到意见后 1 周内',
      title: '评审意见与 Rebuttal',
      lead: '拒稿是常态。UbiComp、SenSys 录用率长期在 20% 左右，被拒不代表做得差。',
      body: `
<h4>读意见的心态</h4>
<ul>
<li>审稿人也是人，会有理解偏差</li>
<li><b>客观意见要重视</b>（比如实验不足、对比不公平），主观意见可以选择性回应</li>
<li>把每条意见记入「战报」，下次遇到同类问题能提前规避</li>
</ul>
<h4>Rebuttal 写作要点</h4>
<ul>
<li><b>只回应具体质疑</b>，不要在rebuttal 里重写论文</li>
<li><b>承认合理缺陷</b>，不要强辩 —— 评审通常有多人，强行辩护会失分</li>
<li><b>有新实验就补数据</b>，没有就说明原因和时间限制</li>
<li>控制篇幅，多数会议有字数限制</li>
<li>语气专业，避免情绪化</li>
</ul>
<h4>几个特殊机制，投稿前务必确认</h4>
<div class="editor-note"><b>PerCom</b> 会对没有正面评审的论文提前发出拒稿通知（early reject），此时可以立刻改投其他会议，不必等完整周期。这是好事 —— 意味着提前止损而非浪费半年。</div>
<div class="editor-note"><b>MobiCom</b> 的 rebuttal 只有 500 词上限，且<b>明确禁止补新实验、新数据或新图</b>，只能澄清评审中的事实错误和回答提问。所以实验必须在投稿前做扎实 —— 指望 rebuttal 阶段补数据是行不通的。另外 MobiCom 2023 起改为双周期（Summer / Winter），被拒后 <b>11 个月内不能重投</b> MobiCom。</div>
<div class="editor-note"><b>UbiComp</b> 三轮截稿的第一轮通常竞争最小，且有Sensing track 对无线感知类工作更包容 —— 注意选对 track。</div>`
    },
    {
      n: 7,
      when: '录用后',
      title: '结果通知与后续',
      lead: '录用邮件之后还有几步，漏了任何一步都可能导致撤稿。',
      body: `
<h4>收到录用后</h4>
<ul>
<li><b>核对作者列表与顺序</b> —— 发现错误立刻联系组织者，过期难改</li>
<li>确认终稿截止日期（camera-ready 通常比通知晚 1–2 个月）</li>
<li>准备终稿：加致谢、修正审稿人指出的问题</li>
<li><b>完成会议注册并确认到场</b> —— 部分会议不注册即视为撤稿，PerCom 尤其严格（不进 IEEE 库）</li>
<li>制作报告材料</li>
</ul>
<h4>被拒后怎么办</h4>
<ol>
<li>先看「战报」板块有没有类似经历 —— 别人的意见往往能帮你看清问题</li>
<li>区分「工作本身的问题」和「时机 / 运气问题」</li>
<li>按审稿意见改稿，两周内投下一个目标，不要空转</li>
<li>组内做一次复盘，把经验记入战报</li>
</ol>`
    }
  ]

  // 格式速查表（只列已核实的）
  const fmtRows = CONFS.map(c => {
    const pl = c.submission?.pageLimit || ''
    const known = pl && !pl.includes('官网')
    return '<tr>' +
      '<td><span class="venue-link" data-venue="' + c.id + '">' + esc(c.shortName) + '</span></td>' +
      '<td class="num">' + (known ? esc(pl) : '<span style="color:var(--text-3)">见官网</span>') + '</td>' +
      '<td>' + esc(c.submission?.reviewModel === 'double-blind' ? '双盲' : (c.submission?.reviewModel || '—')) + '</td>' +
      '<td>' + (c.submission?.rebuttal?.startsWith('有')
        ? '<span style="color:var(--green)">有</span>'
        : '<span style="color:var(--text-3)">' + (c.submission?.rebuttal ? '特殊' : '—') + '</span>') + '</td>' +
    '</tr>'
  }).join('')

  const cycleRows = [
    { name: 'UbiComp', cycle: '5–6 个月', rebuttal: true, note: '三轮滚动征稿' },
    { name: 'PerCom', cycle: '约 3 个月', rebuttal: true, note: '有早期拒稿机制' },
    { name: 'MobiCom', cycle: '约 2.5 个月（含 rebuttal）', rebuttal: true, note: '双周期，禁补实验' },
    { name: 'MobiSys', cycle: '约 3 个月', rebuttal: false, note: '近年录用率收紧' },
    { name: 'SenSys', cycle: '3–4 个月', rebuttal: false, note: '录用率稳定' },
    { name: 'IPSN', cycle: '待核实', rebuttal: false, note: '' },
    { name: 'IMWUT', cycle: '约 2–3 个月', rebuttal: false, note: '季刊模式，周期最短' },
    { name: 'MASS', cycle: '待核实', rebuttal: false, note: '' },
    { name: 'NDSS', cycle: '4–5 个月', rebuttal: true, note: '两轮投稿' }
  ].map(r => '<tr>' +
    '<td><span class="venue-link" data-venue="' +
      (CONFS.find(c => c.shortName === r.name) || {}).id + '">' + esc(r.name) + '</span></td>' +
    '<td class="num">' + (r.cycle === '待核实'
      ? '<span style="color:var(--text-3)">待核实</span>' : esc(r.cycle)) + '</td>' +
    '<td>' + (r.rebuttal ? '<span style="color:var(--green)">有</span>' : '<span style="color:var(--text-3)">—</span>') + '</td>' +
    '<td style="font-size:11.5px;color:var(--text-3)">' + esc(r.note) + '</td>' +
  '</tr>').join('')

  const faqs = [
    ['我是第一次投这个方向，应该先投哪个？',
     '优先看「组内经验」里提到历史投稿的会议。没有记录时，建议先用中等档次的会议练手，拿到审稿意见后再冲旗舰会。'],
    ['CCF B 的会议值得投吗？',
     '值得。B 类会议（SenSys、IPSN、MobiSys）在领域内认可度不错，评审质量高，竞争比 A 类温和。见刊周期也更可预测。'],
    ['工作看起来适合多个会议，怎么选？',
     '用「对比」页并排看，重点看两点：评审偏好是否匹配你的贡献类型、时间线是否允许。如果时间都赶得上，优先投更对口的。'],
    ['录用率会不会有水分？',
     '会。不同年份、不同 track 差异很大，有些数字是社区整理的。本站已标注每个数字的来源和核对日期，请结合自己的判断。'],
    ['站上的信息多久更新一次？',
     '截稿日期每季度核对，CCF 分级每年更新（中科院分区通常年末调整），录用率不定期补充。页脚显示最后更新时间。'],
    ['为什么某些会议显示「未收录」？',
     '表示已核对但未找到可靠的公开录用统计。不同来源数据冲突时我们不展示，宁可留空也不用估算值。'],
    ['组内 review 一般提前多久？',
     '建议投稿前至少 5 天把完整稿发给导师和两位同门，留出改稿时间。详见「领域」页的组内协作说明。'],
    ['我发现的信息有错怎么办？',
     '直接在 GitHub 仓库提 PR 即可，或发给维护者。发现错就改，这是共建。']
  ]

  return `
  <div class="page-head">
    <h1>新手指南</h1>
    <p>从零开始的一次完整投稿流程 —— 覆盖从准备到提交再到审稿的全程</p>
  </div>

  <div class="banner">
    <b>使用建议</b>
    <span>首次投稿建议按顺序读一遍；已有经验可直接跳到关心的步骤。数据更新于 ${META.lastUpdated}，具体要求以各会议官网 CFP 为准。</span>
  </div>

  <section>
    <div class="sec-head">
      <h2>投稿全流程</h2>
      <span class="hint">点击展开对应步骤</span>
    </div>
    <div class="steps">
      ${steps.map((s, i) => `
      <details class="step" ${i === 0 ? 'open' : ''}>
        <summary>
          <span class="step-n">${s.n}</span>
          <span class="step-t">
            <b>${esc(s.title)}</b>
            <span class="step-when">${esc(s.when)}</span>
          </span>
          <span class="step-lead">${esc(s.lead)}</span>
        </summary>
        <div class="step-body">
          ${s.body}
          ${s.n === 3 ? '<div class="mod" style="margin:14px 0 0;padding:0;border:0"><table class="data"><thead><tr><th>会议</th><th class="num">页数限制</th><th>评审</th><th>Rebuttal</th></tr></thead><tbody>' + fmtRows + '</tbody></table><div class="src-note" style="margin-top:8px">仅列出已核实的会议，其余见各 Venue 页。页数规则以官网 CFP 为准。</div></div>' : ''}
          ${s.n === 5 ? '<div class="mod" style="margin:14px 0 0;padding:0;border:0"><table class="data"><thead><tr><th>会议</th><th class="num">首轮决定</th><th>Rebuttal</th><th>备注</th></tr></thead><tbody>' + cycleRows + '</tbody></table><div class="src-note" style="margin-top:8px">审稿周期为社区观察值，个体差异较大。「待核实」表示未找到可靠公开信息。</div></div>' : ''}
        </div>
      </details>`).join('')}
    </div>
  </section>

  <section>
    <div class="sec-head">
      <h2>组内协作</h2>
      <span class="hint">投稿不是一个人的事</span>
    </div>
    <div class="grid c2">
      <div class="mod">
        <div class="mod-head"><h2>时间安排</h2></div>
        <ol class="timeline-list">
          <li><b>组内讨论</b><span>确定拟投会议后一周内，组会汇报选题与实验计划</span></li>
          <li><b>内部 review</b><span>投稿前至少提前 5 天，把完整稿发给导师和两位同门</span></li>
          <li><b>格式检查</b><span>投稿前 2 天，检查模板、页数、匿名要求、引用格式</span></li>
          <li><b>投稿登记</b><span>投出后在「战报」板块记录，注明会议、轮次、日期</span></li>
        </ol>
        <div class="editor-note">无线感知方向的会议（UbiComp、SenSys、IPSN）截稿期集中在每年 2–5 月和 9–11 月。同一时期多个会议开放投稿，容易撞车。提前在战报登记，组内可以错开安排。</div>
      </div>
      <div class="mod">
        <div class="mod-head"><h2>内部 review 看什么</h2></div>
        <ol class="check-list">
          <li>研究问题是否清晰，是否值得该会议/期刊的读者关心</li>
          <li>贡献是否明确 —— 能用一句话说清相对已有工作的增量</li>
          <li>实验是否支撑结论：基线够强、对比覆盖最新方法、消融充分</li>
          <li>可复现性：参数、数据、评测协议是否交代清楚</li>
          <li>表达：结构、图表、术语是否符合该 venue 的审稿口味</li>
        </ol>
        <div class="src-note" style="margin-top:10px">以上为建议流程，可根据组内实际情况调整。</div>
      </div>
    </div>
  </section>

  <section>
    <div class="sec-head">
      <h2>常见问题</h2>
      <span class="hint">${faqs.length} 条</span>
    </div>
    <div class="mod">
      ${faqs.map(([q, a], i) => `
      <details class="faq">
        <summary><span class="faq-q">${esc(q)}</span></summary>
        <div class="step-body" style="padding-left:0">${esc(a)}</div>
      </details>`).join('')}
    </div>
  </section>`
}


/* ---------- Compare ---------- */
function compareView() {
  const picked = state.cmp.map(id => BY_ID[id]).filter(Boolean)
  const chips = VENUES.map(v =>
    `<button class="chip ${state.cmp.includes(v.id) ? 'on' : ''}" data-cmp="${v.id}">${esc(v.shortName)}</button>`
  ).join('')

  if (picked.length < 2) {
    return `
    <div class="page-head">
      <h1>Venue 对比</h1>
      <p>并排比较多个 venue，看清它们的区别</p>
    </div>
    <div class="banner"><b>至少选择 2 个</b><span>当前已选 ${picked.length} 个</span></div>
    <div class="cmp-picker">${chips}</div>
    <div class="empty" style="margin-top:16px">再选几个就能看到对比表</div>`
  }

  const row = (label, fn, bestFn) => {
    const vals = picked.map(fn)
    const best = bestFn ? Math.max(...vals.map(v => v ?? -1)) : null
    return `<tr>
      <td style="color:var(--text-2)">${esc(label)}</td>
      ${vals.map((v, i) => {
        const isBest = best !== null && v !== null && v === best && picked.length > 1
        return `<td class="${isBest ? 'num cmp-best' : 'num'}">${v ?? '—'}</td>`
      }).join('')}
    </tr>`
  }

  const dimRows = DIMS.map(([k, label]) => {
    const vals = picked.map(v => v.values?.[k] || 0)
    const best = Math.max(...vals)
    return `<tr>
      <td style="color:var(--text-2)">${esc(label)}</td>
      ${vals.map(n => `<td class="num ${n === best ? 'cmp-best' : ''}">${n}/5</td>`).join('')}
    </tr>`
  }).join('')

  const lastRates = picked.map(v => {
    const h = v.acceptanceStats?.history?.[0]
    return h ? h.rate : null
  })

  return `
  <div class="page-head">
    <h1>Venue 对比</h1>
    <p>挑 2–4 个候选并排看，找出它们真正的区别。绿色高亮为该行最高值</p>
  </div>
  <div class="cmp-picker" style="margin-bottom:16px">${chips}</div>

  <div class="mod cmp-table">
    <table class="data">
      <thead><tr>
        <th>维度</th>
        ${picked.map(v => `<th class="num cmp-name" data-venue="${v.id}">${esc(v.shortName)}</th>`).join('')}
      </tr></thead>
      <tbody>
        <tr><td style="color:var(--text-3)">类型</td>${picked.map(v => `<td class="num">${v.type === 'conference' ? '会议' : '期刊'}</td>`).join('')}</tr>
        <tr><td style="color:var(--text-3)">分级</td>${picked.map(v => `<td class="num">${rankText(v)}</td>`).join('')}</tr>
        <tr><td style="color:var(--text-3)">中科院</td>${picked.map(v => `<td class="num">${v.cas || '—'}</td>`).join('')}</tr>
        <tr style="background:var(--surface-2)"><td colspan="${picked.length + 1}" style="font-size:11.5px;color:var(--text-3)">价值取向（编辑解读）</td></tr>
        ${dimRows}
        <tr style="background:var(--surface-2)"><td colspan="${picked.length + 1}" style="font-size:11.5px;color:var(--text-3)">投稿事实</td></tr>
        ${row('录用率（最新）', v => {
          const h = v.acceptanceStats && v.acceptanceStats.history && v.acceptanceStats.history[0]
          return h ? h.rate + '%（' + h.year + '）' : null
        })}
        ${row('数据覆盖', v => {
          const c = v.acceptanceStats && v.acceptanceStats.coverage
          return c ? c.from + '–' + c.to + '（' + c.years + '年）' : null
        })}
        ${row('页数/篇幅', v => v.type === 'conference' ? (v.submission?.pageLimit || '').replace(/以官网为准/, '见官网').slice(0, 22) : `${v.reviewCycle || '—'}`)}
        ${row('Rebuttal', v => v.type === 'conference' ? (v.submission?.rebuttal?.startsWith('有') ? '有' : '—') : '—')}
        <tr><td style="color:var(--text-3)">数据置信</td>${picked.map(v => {
          const s2 = v.acceptanceStats || {}
          const conf = s2.confidence || 'none'
          const label = { high: '高置信', medium: '中置信', low: '低置信', none: '—' }[conf]
          const st2 = { complete: '完整', partial: '部分', missing: '未收录', none: '不公开' }[s2.status] || '—'
          return '<td class="num">' +
            '<span class="conf conf-' + conf + '"><span class="conf-dot"></span>' + label + '</span>' +
            '<div style="font-size:11px;color:var(--text-3)">' + st2 + '</div></td>'
        }).join('')}</tr>
      </tbody>
    </table>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>关键差异</h2><span class="hint">编辑解读</span></div>
    ${picked.map(v => `<div style="padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="font-weight:500;font-size:13.5px">${esc(v.shortName)}</div>
      <div style="font-size:12.5px;color:var(--text-2);margin-top:2px">${esc(v.valuesNote || v.description)}</div>
    </div>`).join('')}
  </div>`
}

/* ---------- render ---------- */
function homeView() {
  // 工具型首页（借鉴 CCFDDL）：搜索 + 倒计时 + 领域导航 + 对比入口
  const dl = upcomingDeadlines()
  const paperDl = dl.filter(d => d.label === '全文' || d.label === '摘要').slice(0, 10)
  const otherDl = dl.filter(d => d.label !== '全文' && d.label !== '摘要').slice(0, 4)
  const acc = REPORTS.filter(r => r.status === 'accepted').length

  const dlRow = d => {
    const cls = d.days < 0 ? 'urgent' : d.days <= 30 ? 'urgent' : d.days <= 90 ? 'soon' : 'normal'
    const left = d.days < 0 ? '已过' : d.days === 0 ? '今天' : d.days + ' 天'
    return '<tr>' +
      '<td><span class="venue-link" data-venue="' + d.venue.id + '"><b>' + esc(d.venue.shortName) + '</b></span></td>' +
      '<td style="font-size:12px">' + rankText(d.venue) + '</td>' +
      '<td><span class="badge ' + (d.color || 'b-gray') + '">' + esc(d.label) + '</span>' +
        (d.round ? ' <span style="font-size:11px;color:var(--text-3)">' + esc(d.round) + '</span>' : '') + '</td>' +
      '<td style="font-size:12.5px">' + fmt(d.date) + (d.tz ? ' <span class="tz">' + esc(d.tz) + '</span>' : '') + '</td>' +
      '<td class="num ' + cls + '">' + left + '</td>' +
    '</tr>'
  }

  const areaCards = AREAS.map(areaCardHtml).join('')

  return `
  <div class="hero">
    <h1>Research Venue Navigator</h1>
    <p>${esc(META.field || '')} · 理解会议期刊定位，比较投稿目标</p>
    <input type="search" class="search-lg" id="hero-q" placeholder="搜索会议、期刊、主题或标签，例如：毫米波、无设备感知、UbiComp" />
  </div>

  <div class="intro-3">
    <div class="intro-cell">
      <h3>这是什么</h3>
      <p>整理无线感知与普适计算方向的主要会议与期刊：它们各自看重什么研究贡献、历届录用率如何、下一次截稿是什么时候。目标是让组内同学在决定「投哪里」时，不必靠逐个翻官网和问学长学姐。</p>
    </div>
    <div class="intro-cell">
      <h3>面向谁</h3>
      <p>本组方向：毫米波感知、WiFi/CSI 感知、无设备感知、人体活动识别、定位追踪、边缘与嵌入式实现。</p>
      <p style="margin-top:6px">适合确定方向后准备投稿的博士生、硕士生，以及想了解领域全貌的新生。</p>
    </div>
    <div class="intro-cell">
      <h3>你能得到什么</h3>
      <ul>
        <li>${venuesRaw.conferences.length} 个会议 + ${venuesRaw.journals.length} 本期刊的定位对比</li>
        <li>历年录用率与投稿量，看清竞争程度</li>
        <li>完整投稿周期，含时区标注</li>
        <li>组内同学的审稿意见与经验（经授权后公开）</li>
        <li>会议间的相似/替代关系，缩小候选范围</li>
      </ul>
    </div>
  </div>

  <section>
    <div class="sec-head">
      <h2>即将到来的截稿</h2>
      <span class="hint">论文类事件优先 · 数据更新于 ${META.lastUpdated}</span>
    </div>
    ${paperDl.length ? '<div class="mod cmp-table" style="padding:0"><table class="data"><thead><tr>' +
      '<th>Venue</th><th>分级</th><th>类型</th><th>日期</th><th class="num">剩余</th>' +
      '</tr></thead><tbody>' + paperDl.map(dlRow).join('') + '</tbody></table></div>'
      : '<div class="empty">近期没有已确认的截稿日期</div>'}
    ${otherDl.length ? '<div style="margin-top:12px"><div style="font-size:11.5px;color:var(--text-3);margin-bottom:6px">其他节点（rebuttal / 结果 / 召开）</div>' +
      '<div class="flow">' + otherDl.map(d => '<span class="flow-step">' + esc(d.venue.shortName) +
        ' <span class="badge ' + (d.color || 'b-gray') + '">' + esc(d.label) + '</span> ' +
        fmt(d.date) + ' <b style="color:var(--text-2)">' + (d.days >= 0 ? d.days + '天' : '已过') + '</b></span>').join('') +
      '</div></div>' : ''}
  </section>

  <section>
    <div class="sec-head">
      <h2>研究领域</h2>
      <span class="hint">从研究问题出发找venue</span>
    </div>
    <div class="area-grid">${areaCards}</div>
  </section>

  <section>
    <div class="sec-head">
      <h2>快速对比</h2>
      <span class="hint">最多 4 个，最多 4 个维度并排</span>
    </div>
    <div class="mod">
      <div class="cmp-picker" style="margin-bottom:12px">
        ${VENUES.slice(0, 10).map(v => '<button class="chip ' + (state.cmp.includes(v.id) ? 'on' : '') + '" data-cmp="' + v.id + '">' + esc(v.shortName) + '</button>').join('')}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <span style="font-size:12.5px;color:var(--text-2)">已选 ${state.cmp.length} 个：</span>
        ${state.cmp.map(id => {
          const v = BY_ID[id]
          return v ? '<span class="badge b-blue">' + esc(v.shortName) + '</span>' : ''
        }).join('')}
        <button class="chip" data-tab="compare" style="margin-left:auto">开始对比 →</button>
      </div>
    </div>
  </section>

  <section>
    <div class="sec-head">
      <h2>收录情况</h2>
      <span class="hint">组内投稿记录待补充</span>
    </div>
    <div class="grid c3">
      <div class="card"><div class="card-meta">会议</div><div class="card-name">${venuesRaw.conferences.length} 个</div></div>
      <div class="card"><div class="card-meta">期刊</div><div class="card-name">${venuesRaw.journals.length} 本</div></div>
      <div class="card">
        <div class="card-meta">组内投稿记录</div>
        <div class="card-name">${REPORTS.length ? REPORTS.length + ' 条 · 命中 ' + acc : '待补充'}</div>
      </div>
    </div>
  </section>`
}

function venuesView() {
  // 领域与子主题建索引，让首页搜索「毫米波」能命中
  const topicIndex = {}
  for (const a of AREAS) {
    for (const t of a.topics) {
      topicIndex[t.id] = { name: t.name, desc: t.desc, area: a.name }
      topicIndex[t.name] = { name: t.name, desc: t.desc, area: a.name }
    }
  }
  const list = VENUES.filter(v => {
    if (state.tag !== 'all' && !(v.tags || []).includes(state.tag)) return false
    if (state.q) {
      const kw = state.q.toLowerCase()
      const hay = [
        v.shortName, v.name, v.description,
        (v.tags || []).map(t => tagName(t)).join(' '),
        (v.tags || []).map(t => topicIndex[t] ? topicIndex[t].name : '').join(' '),
        (v.tags || []).map(t => topicIndex[t] ? topicIndex[t].desc : '').join(' ')
      ].join(' ').toLowerCase()
      if (!hay.includes(kw)) return false
    }
    return true
  })

  const chips = '<div class="filters">' +
    '<input type="search" id="q" placeholder="搜索会议、期刊、标签…" value="' + esc(state.q) + '" />' +
    '<button class="chip ' + (state.tag === 'all' ? 'on' : '') + '" data-tag="all">全部</button>' +
    TAGS.map(t => '<button class="chip ' + (state.tag === t.id ? 'on' : '') + '" data-tag="' + t.id + '">' + esc(t.name) + '</button>').join('') +
    '<div style="margin-left:auto" class="view-switch">' +
      '<button class="' + (state.view === 'table' ? 'on' : '') + '" data-view="table">表格</button>' +
      '<button class="' + (state.view === 'card' ? 'on' : '') + '" data-view="card">卡片</button>' +
    '</div>' +
  '</div>'

  // 取每个 venue 的下一截稿（供表格用）
  const nextDeadline = v => {
    if (v.type !== 'conference') return null
    let best = null
    for (const ed of v.editions || []) {
      for (const sub of ed.submissions || []) {
        for (const k of ['abstract', 'paper']) {
          if (!sub[k]) continue
          const d = daysUntil(sub[k])
          if (d < 0 || d > 400) continue
          if (!best || d < best.days) best = { days: d, date: sub[k], round: sub.round || '', type: k }
        }
      }
    }
    return best
  }

  // ---- 表格视图：信息密度高，适合查 ----
  const tableRows = list.map(v => {
    const st = v.acceptanceStats || {}
    const h = st.history && st.history[st.history.length - 1]
    const cov = st.coverage
    const rateCell = h
      ? '<b>' + h.rate + '%</b><div style="font-size:11px;color:var(--text-3)">' + h.year + ' 年</div>'
      : '<span style="color:var(--text-3)">' +
        (st.status === 'none' ? '不公开' : '未收录') + '</span>'
    const dl = nextDeadline(v)
    const dlCell = dl
      ? fmt(dl.date) + '<div style="font-size:11px;color:var(--text-3)">' +
        esc(dl.type === 'paper' ? '全文' : '摘要') + (dl.round ? ' · ' + esc(dl.round) : '') +
        (dl.days <= 30 ? ' · <b style="color:var(--red)">' + dl.days + '天</b>' : ' · ' + dl.days + '天') + '</div>'
      : '<span style="color:var(--text-3)">—</span>'
    const covCell = cov
      ? cov.from + '–' + cov.to + '<div style="font-size:11px;color:var(--text-3)">' + cov.years + ' 年数据</div>'
      : '<span style="color:var(--text-3)">—</span>'
    return '<tr>' +
      '<td><span class="venue-link" data-venue="' + v.id + '"><b>' + esc(v.shortName) + '</b></span>' +
        '<div style="font-size:11px;color:var(--text-3)">' + (v.type === 'conference' ? '会议' : '期刊') + '</div></td>' +
      '<td style="font-size:12px">' + rankText(v) + (v.cas ? '<div style="font-size:11px;color:var(--text-3)">中科院' + esc(v.cas) + '</div>' : '') + '</td>' +
      '<td class="num">' + rateCell + '</td>' +
      '<td style="font-size:12px">' + covCell + '</td>' +
      '<td style="font-size:12px">' + dlCell + '</td>' +
      '<td style="font-size:11.5px">' + (v.tags || []).slice(0, 2).map(tagBadge).join(' ') + '</td>' +
    '</tr>'
  }).join('')

  const tableView =
    '<div class="mod cmp-table" style="padding:0"><table class="data"><thead><tr>' +
      '<th>Venue</th><th>分级</th><th class="num">录用率</th><th>数据覆盖</th><th>下一截稿</th><th>标签</th>' +
    '</tr></thead><tbody>' + tableRows + '</tbody></table></div>'

  // ---- 卡片视图：适合理解 ----
  const cardView = '<div class="grid c3">' + list.map(function (v) {
    const isJ = v.type === 'journal'
    const st = v.acceptanceStats || {}
    const h = st.history && st.history[st.history.length - 1]
    const cov = st.coverage
    const rankBadge = '<span class="badge b-' + (isJ ? 'purple' : 'blue') + '">' + esc(v.rank) + '</span>' +
      rankBadges(v) +
      (v.cas ? '<span class="badge b-coral">中科院' + v.cas + '</span>' : '') +
      (v.if ? '<span class="badge b-amber">IF ' + v.if + '</span>' : '')
    const rateLine = h
      ? '<span>录用率 <b>' + h.rate + '%</b>（' + h.year + '）</span>' +
        '<span class="conf conf-' + st.confidence + '"><span class="conf-dot"></span>' +
        ({ high: '高置信', medium: '中置信', low: '低置信' }[st.confidence] || '') + '</span>'
      : '<span style="color:var(--text-3)">' + (st.status === 'none' ? '录用率不公开' : '录用率未收录') + '</span>' +
        (cov ? '' : '<span class="conf conf-none"><span class="conf-dot"></span>已核对</span>')
    const topDims = DIMS
      .map(d => ({ label: d[1], v: v.values ? v.values[d[0]] : 0 }))
      .sort((a, b) => b.v - a.v)
      .slice(0, 2)
      .map(d => '<span>' + esc(d.label.split(' / ')[0]) + ' ' + d.v + '/5</span>')
      .join('')
    const dl = nextDeadline(v)
    const extra = isJ
      ? '<span>' + esc(v.publisher) + '</span><span>' + esc(v.reviewCycle || '') + '</span>'
      : (dl ? '<span>下一截稿 ' + fmt(dl.date) + '</span>' : '<span>' + esc(v.frequency || '') + '</span>')
    return '<div class="card" data-venue="' + v.id + '">' +
      '<div class="card-top"><div>' +
        '<div class="card-name">' + esc(v.shortName) + '</div>' +
        '<div class="card-meta">' + esc(v.name) + '</div>' +
      '</div></div>' +
      '<div>' + rankBadge + '</div>' +
      '<div class="card-desc">' + esc(v.description) + '</div>' +
      '<div>' + (v.tags || []).map(tagBadge).join(' ') + '</div>' +
      '<div class="card-foot">' + rateLine + topDims + extra + '</div>' +
    '</div>'
  }).join('') + '</div>'

  return `
  <div class="page-head">
    <h1>会议与期刊</h1>
    <p>${VENUES.length} 个投稿目标的完整档案：定位、录用率、投稿周期、组内经验</p>
  </div>
  ${chips}
  ${list.length ? (state.view === 'table' ? tableView : cardView) : '<div class="empty">没有匹配的记录</div>'}
`
}

function reportsView() {
  const list = REPORTS.filter(r => state.showPrivate || r.public)
  if (!list.length) {
    return `<div class="empty">
      <div class="empty-title">${REPORTS.length === 0 ? '这个板块还没有内容' : '当前视角下没有记录'}</div>
      <p class="empty-desc">审稿意见是免费的高质量咨询，记录下来能帮后面的人少走弯路。哪怕只写「投了哪个会议、结果如何、耗时多久」，也是有价值的起点。</p>
      <div class="why-record">
        <div class="wr-title">战报能提供什么</div>
        <ul>
          <li><b>真实的评审意见</b> —— 知道评审具体会挑什么毛病，而不只是「被拒了」</li>
          <li><b>时间预期</b> —— 从投稿到出结果要多久，影响下一篇的规划</li>
          <li><b>命中率参考</b> —— 组里在哪个会议更容易成功</li>
          <li><b>格式与流程坑</b> —— 模板、页数、track 选择的具体教训</li>
        </ul>
        <div class="wr-title" style="margin-top:12px">怎么添加</div>
        <p class="empty-desc">复制 <code>data/reports.json</code> 里的 <code>_template</code> 结构，追加到 <code>reports</code> 数组，提交 PR 即可。<code>public</code> 默认为 false，只有你主动改为 true 才会公开。</p>
      </div>
    </div>`
  }
  return list.map(r => {
    const st = { accepted: ['已录用', 'b-green'], rejected: ['已拒稿', 'b-red'], under_review: ['在审', 'b-amber'], 'under-review': ['在审', 'b-amber'] }[r.status] || ['—', 'b-gray']
    const rv = (r.reviews || []).map(v => `
      <div class="review-line"><span class="lbl">第 ${v.round} 轮评审意见摘要</span>${v.summary}</div>
      ${v.strengths?.length ? `<div class="review-line"><span class="lbl">认可之处</span><ul class="pts">${v.strengths.map(s => `<li>${s}</li>`).join('')}</ul></div>` : ''}
      ${v.weaknesses?.length ? `<div class="review-line"><span class="lbl">主要问题</span><ul class="pts">${v.weaknesses.map(s => `<li>${s}</li>`).join('')}</ul></div>` : ''}`).join('')
    return `<div class="report">
      <div class="report-head">
        <div>
          <div class="report-title">${r.title}</div>
          <div class="card-meta">${r.venueName} · ${r.year} · ${r.member}</div>
        </div>
        <span class="badge ${st[1]}">${st[0]}</span>
      </div>
      <div class="report-grid">
        <dl class="kv"><dt>投稿日期</dt><dd>${fmt(r.submittedAt)}</dd></dl>
        <dl class="kv"><dt>决定日期</dt><dd>${fmt(r.decidedAt)}</dd></dl>
        <dl class="kv"><dt>审稿轮次</dt><dd>${r.round || 1}</dd></dl>
        <dl class="kv"><dt>总耗时</dt><dd>${r.daysElapsed ? r.daysElapsed + ' 天' : '—'}</dd></dl>
      </div>
      ${r.reviews?.length
        ? `<details class="review"><summary>查看审稿意见</summary><div class="review-body">${rv}</div></details>`
        : '<div class="locked">暂无审稿意见记录</div>'}
      ${r.lessons ? `<div class="lesson">${r.lessons}</div>` : ''}
    </div>`
  }).join('')
}

function reportsPage() {
  return `
  <div class="page-head">
    <h1>论文战报</h1>
    <p>组内同学的投稿记录：审稿意见原文、最终结果、经验总结。经本人授权后公开</p>
  </div>
  <div class="banner">
    <b>关于隐私</b>
    <span>审稿意见属未公开评审内容，默认非公开。每条战报和每条审稿意见各有独立的 public 开关，公开部署时只展示你明确设为公开的部分。</span>
  </div>
  <div class="filters">
    <button class="chip ${!state.showPrivate ? 'on' : ''}" data-priv="0">仅公开记录</button>
    <button class="chip ${state.showPrivate ? 'on' : ''}" data-priv="1">包含私有记录（本机）</button>
  </div>
  ${reportsView()}`
}

function guideView() {
  return `
  <div class="page-head">
    <h1>投稿指南</h1>
    <p>如何往这个站点里添加内容，以及投稿流程中的通用注意事项</p>
  </div>
  <div class="guide">
    <h3>站点信息架构</h3>
    <p>五个模块：会议追踪（截止时间）、会议档案（主题与官网）、期刊指南（分区与审稿周期）、投稿决策（匹配与提醒）、论文战报（经验沉淀）。第一版只做了前三块加上战报，投递决策靠标签筛选实现。</p>

    <h3>如何添加一个会议</h3>
    <p>编辑 <code>data/venues.json</code>，在 <code>conferences</code> 数组里加一条。必填字段：</p>
    <pre><code>{
  "id": "唯一英文标识",
  "name": "会议全称",
  "shortName": "缩写",
  "rank": "顶会 | 主流会议 | 行业会议",
  "ccf": "A | B | C | null",
  "tags": ["radar-sensing", "signal-processing"],
  "description": "一句话说明会议定位和适合什么样的工作",
  "link": "官网链接",
  "timeline": { "cycle": "举办周期", "months": "提前多久征稿" },
  "history": [{ "year": 2026, "abstract": "...", "paper": "...", "notification": "..." }],
  "tips": "组内经验"
}</code></pre>
    <p><code>history</code> 里的 <code>paper</code> 字段用于推算下一届截稿时间，务必填往年真实日期。</p>

    <h3>领域标签怎么加</h3>
    <p>在 <code>tags</code> 数组里加新条目，给一个 <code>id</code>、中文名和配色。配色可选：blue / teal / amber / coral / green / purple / pink / gray。注意控制总数，建议不超过 12 个，太多反而不好选。</p>

    <h3>如何添加一条战报</h3>
    <p>编辑 <code>data/reports.json</code>，复制其中的 <code>_template</code> 结构，追加到 <code>reports</code> 数组末尾即可。字段含义见同文件的 <code>_fieldNote</code>。</p>
    <pre><code>{
  "id": "r-001",
  "member": "填写人姓名",
  "venueName": "ICASSP",
  "year": 2026,
  "status": "accepted | rejected | under-review",
  "submittedAt": "2025-09-24",
  "decidedAt": "2026-02-20",
  "daysElapsed": 138,
  "title": "论文标题",
  "reviews": [{
    "round": 1,
    "summary": "评审意见摘要",
    "strengths": ["评审认可的优点"],
    "weaknesses": ["评审指出的主要问题"],
    "public": false
  }],
  "lessons": "这次投稿学到了什么",
  "public": false
}</code></pre>
    <p><code>status</code> 三种取值：<code>accepted</code> 已录用 / <code>rejected</code> 已拒稿 / <code>under-review</code> 在审。在审时 <code>decidedAt</code> 和 <code>daysElapsed</code> 填 <code>null</code>。</p>
    <p><code>public</code> 是双层开关：<code>public: false</code> 的战报在公开部署下完全不展示；即使战报公开，<code>reviews[].public: false</code> 的审稿意见仍然折叠且不渲染内容。审稿意见是未公开评审内容，默认关闭，想公开再单独打开。</p>

    <h3>提交流程</h3>
    <ol>
      <li>改数据文件</li>
      <li>本地预览：<code>npm run dev</code></li>
      <li>提交 PR，写清改了什么、日期来源是哪</li>
      <li>合并后自动部署</li>
    </ol>

    <h3>投稿通用注意事项</h3>
    <ul>
      <li>任何会议截稿日期每年都可能调整，务必以官网 CFP 为最终依据</li>
      <li>短文会议（4 页）不要把长文砍半，方法完整性优先</li>
      <li>实验对比要覆盖最新方法，审稿人几乎必问</li>
      <li>版面费预算提前确认，避免中稿后卡在付费环节</li>
      <li>审稿意见是宝贵的免费咨询，认真读完再决定是否改投</li>
    </ul>
  </div>`
}

/* ---------- shell ---------- */
const TABS = [
  ['home', '截止'],
  ['explore', '领域'],
  ['venues', 'Venue'],
  ['compare', '对比'],
  ['start', '新手指南'],
  ['reports', '战报'],
  ['guide', '指南']
]

// Logo 图形：同心弧 + 刻度，表示「观测范围」，中性且有仪器感
const LOGO_SVG = '<svg class="logo-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
  '<path d="M12 12 L12 21" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
  '<path d="M7.2 20.4 A10.5 10.5 0 0 1 3.6 12.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".85"/>' +
  '<path d="M16.8 20.4 A10.5 10.5 0 0 0 20.4 12.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".85"/>' +
  '<path d="M9.6 15.6 A6 6 0 0 1 8 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>' +
  '<path d="M14.4 15.6 A6 6 0 0 0 16 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>' +
  '<circle cx="12" cy="9" r="2" fill="currentColor"/>' +
  '</svg>'

function render() {
  const views = {
    home: homeView,
    explore: exploreView,
    profile: () => profileView(state.venue),
    venues: venuesView,
    compare: compareView,
    start: startView,
    reports: reportsPage,
    guide: guideView
  }
  const body = views[state.tab]()
  const activeTab = state.tab === 'explore' && state.venue ? 'venues' : state.tab
  app.innerHTML = `
    <header>
      <div class="wrap header-in">
        <div class="logo" data-logo>
          ${LOGO_SVG}
          <span class="logo-text"><b>投稿知识库</b><span>Research Venue Navigator</span></span>
        </div>
        <button class="nav-toggle" data-nav-toggle aria-label="打开菜单" aria-expanded="false"><span></span></button>
        <nav id="mainnav">${TABS.map(([k, l]) => `<button class="${activeTab === k ? 'on' : ''}" data-tab="${k}">${l}</button>`).join('')}</nav>
      </div>
    </header>
    <main class="wrap">${body}</main>
    <footer><div class="wrap">
      <div class="foot-cols">
        <div>
          <div class="foot-h">数据说明</div>
          <p>CCF 分级标注年份（如「CCF 2026」），分级目录会更新。录用率来自${esc(SOURCES.openaccept.name)}、CCFDDL 等公开数据库，已标注来源与核对日期。</p>
          <p>「价值维度」为编辑解读，非官方数据。「未收录」表示已核对但未找到可靠公开数据，不做估算。</p>
        </div>
        <div>
          <div class="foot-h">使用提醒</div>
          <p>截稿日期以各会议官网 CFP 为准，本站数据可能滞后。投稿决策请结合自己的判断，必要时咨询导师。</p>
          <p>发现信息有误欢迎直接提 PR 修正。</p>
        </div>
        <div>
          <div class="foot-h">维护</div>
          <p>数据更新：${META.lastUpdated}</p>
          <p>维护者：${esc(META.maintainers.join('、'))}</p>
          <p>${esc(META.field || '')}</p>
        </div>
      </div>
    </div></footer>`

  bind()
}

function bind() {
  // 移动端菜单
  const navEl = app.querySelector('#mainnav')
  const toggle = app.querySelector('[data-nav-toggle]')
  const closeNav = () => {
    if (navEl) navEl.classList.remove('open')
    if (toggle) toggle.setAttribute('aria-expanded', 'false')
  }
  if (toggle && navEl) {
    toggle.onclick = () => {
      const open = navEl.classList.toggle('open')
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    }
  }
  const logoEl = app.querySelector('[data-logo]')
  if (logoEl) logoEl.onclick = () => {
    state.tab = 'home'; state.area = null; state.venue = null; closeNav(); render()
  }
  document.onkeydown = e => {
    if (e.key === 'Escape') closeNav()
    if (e.key === '/' && document.activeElement === document.body) {
      const s = app.querySelector('.search-lg, #q')
      if (s) { e.preventDefault(); s.focus() }
    }
  }

  app.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => {
    state.tab = b.dataset.tab
    state.area = null
    state.venue = null
    closeNav()
    render()
  })
  app.querySelectorAll('[data-tag]').forEach(b => b.onclick = () => { state.tag = b.dataset.tag; render() })
  app.querySelectorAll('[data-priv]').forEach(b => b.onclick = () => { state.showPrivate = b.dataset.priv === '1'; render() })
  app.querySelectorAll('[data-area]').forEach(el => el.onclick = () => { state.area = el.dataset.area; render() })
  app.querySelectorAll('[data-venue]').forEach(el => el.onclick = () => {
    state.venue = el.dataset.venue
    state.tab = 'profile'
    render()
  })
  app.querySelectorAll('[data-view]').forEach(b => b.onclick = () => {
    state.view = b.dataset.view
    render()
  })
  app.querySelectorAll('[data-cmp]').forEach(b => b.onclick = () => {
    const id = b.dataset.cmp
    const i = state.cmp.indexOf(id)
    if (i >= 0) state.cmp.splice(i, 1)
    else state.cmp.push(id)
    render()
  })
  app.querySelectorAll('[data-back]').forEach(b => b.onclick = () => {
    if (b.dataset.back === 'areas') { state.area = null; state.tab = 'explore' }
    else if (b.dataset.back === 'venues') { state.venue = null; state.tab = 'venues' }
    else { state.venue = null; state.tab = 'explore' }
    render()
  })
  const q = app.querySelector('#q')
  if (q) {
    q.oninput = e => {
      state.q = e.target.value
      const pos = e.target.selectionStart
      render()
      const nq = app.querySelector('#q')
      if (nq) { nq.focus(); nq.setSelectionRange(pos, pos) }
    }
  }

  // 首页大搜索框：回车或输入后跳到列表页并带上关键词
  const hero = app.querySelector('#hero-q')
  if (hero) {
    hero.oninput = e => { state.q = e.target.value }
    hero.onkeydown = e => {
      if (e.key === 'Enter') {
        state.tab = 'venues'
        state.area = null
        state.venue = null
        render()
      }
    }
    if (state.q) { hero.value = state.q }
  }
}

render()