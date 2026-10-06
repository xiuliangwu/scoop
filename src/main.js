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

/* ---------- Explore: 研究领域导航 ---------- */
function exploreView() {
  if (state.area) return areaView(state.area)

  const cards = AREAS.map(a => {
    const vs = a.venueIds.map(id => BY_ID[id]).filter(Boolean)
    const confs = vs.filter(v => v.type === 'conference').length
    return `<div class="area-card b-${a.color}" data-area="${a.id}">
      <h3>${esc(a.name)}</h3>
      <div class="en">${esc(a.enName)}</div>
      <p>${esc(a.summary)}</p>
      <div style="display:flex;gap:5px;flex-wrap:wrap">
        <span class="badge b-gray">${a.topics.length} 个子主题</span>
        <span class="badge b-gray">${confs} 会议 · ${vs.length - confs} 期刊</span>
      </div>
    </div>`
  }).join('')

  return `
  <div class="page-head">
    <h1>研究领域导航</h1>
    <p>${META.field || ''} · 从研究问题出发，找到相关的会议与期刊</p>
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
    <p>并排比较，绿色高亮为该行最高值</p>
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

  const areaCards = AREAS.map(a => {
    const vs = a.venueIds.map(id => BY_ID[id]).filter(Boolean)
    const confs = vs.filter(v => v.type === 'conference').length
    return '<div class="area-card b-' + a.color + '" data-area="' + a.id + '">' +
      '<h3>' + esc(a.name) + '</h3>' +
      '<div class="en">' + esc(a.enName) + '</div>' +
      '<p>' + esc(a.summary) + '</p>' +
      '<div style="display:flex;gap:5px;flex-wrap:wrap">' +
        '<span class="badge b-gray">' + a.topics.length + ' 子主题</span>' +
        '<span class="badge b-gray">' + confs + ' 会议 · ' + (vs.length - confs) + ' 期刊</span>' +
      '</div></div>'
  }).join('')

  return `
  <div class="hero">
    <h1>Research Venue Navigator</h1>
    <p>${esc(META.field || '')} · 理解会议期刊定位，比较投稿目标</p>
    <input type="search" class="search-lg" id="hero-q" placeholder="搜索会议、期刊、主题或标签，例如：毫米波、无设备感知、UbiComp" />
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
    <p>共 ${VENUES.length} 条记录 · ${state.view === 'table' ? '表格视图适合快速查找' : '卡片视图适合了解详情'}</p>
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
      <p class="empty-desc">战报记录每一次投稿的审稿意见和经验总结，是组里最难得的经验沉淀。</p>
      <p class="empty-desc">添加方式：复制 <code>data/reports.json</code> 里的 <code>_template</code> 结构，追加到 <code>reports</code> 数组，提交 PR 即可。</p>
      ${REPORTS.length === 0 ? '<p class="empty-desc">哪怕只是写一条刚投过的记录，也是有价值的起点。</p>' : '<p class="empty-desc">切换到「包含私有记录」可查看尚未公开的内容。</p>'}
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
    <p>每一次投稿的完整记录，包括审稿意见和经验总结</p>
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
  ['explore', '研究领域'],
  ['venues', '会议与期刊'],
  ['compare', '对比'],
  ['home', '看板'],
  ['reports', '论文战报'],
  ['guide', '投稿指南']
]

function render() {
  const views = {
    explore: exploreView,
    profile: () => profileView(state.venue),
    venues: venuesView,
    compare: compareView,
    home: homeView,
    reports: reportsPage,
    guide: guideView
  }
  const body = views[state.tab]()
  const activeTab = state.tab === 'explore' && state.venue ? 'venues' : state.tab
  app.innerHTML = `
    <header>
      <div class="wrap header-in">
        <div class="logo">投稿知识库<span>Research Venue Navigator</span></div>
        <nav>${TABS.map(([k, l]) => `<button class="${activeTab === k ? 'on' : ''}" data-tab="${k}">${l}</button>`).join('')}</nav>
      </div>
    </header>
    <main class="wrap">${body}</main>
    <footer><div class="wrap">
      数据更新于 ${META.lastUpdated} · 维护者：${META.maintainers.join('、')} ·
      录用率数据来自 ${esc(SOURCES.openaccept.name)} 等公开来源，价值维度为编辑解读 ·
      投稿决策请以各会议官网信息为准
    </div></footer>`

  bind()
}

function bind() {
  app.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => {
    state.tab = b.dataset.tab
    state.area = null
    state.venue = null
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