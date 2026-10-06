import './style.css'
import venuesRaw from '../data/venues.json'
import reportsRaw from '../data/reports.json'

const VENUES = [...venuesRaw.conferences, ...venuesRaw.journals]
const TAGS = venuesRaw.tags
const REPORTS = reportsRaw.reports
const META = venuesRaw._meta

const TAG_MAP = Object.fromEntries(TAGS.map(t => [t.id, t]))
const tagName = id => TAG_MAP[id]?.name || id
const tagBadge = id => {
  const t = TAG_MAP[id]
  return `<span class="badge b-${t?.color || 'gray'}">${tagName(id)}</span>`
}

const DAY = 86400000
const daysUntil = dateStr => {
  const [y, m, d] = dateStr.split('-').map(Number)
  return Math.round((new Date(y, m - 1, d) - new Date()) / DAY)
}
const fmt = d => (d ? d.replace(/-/g, '.') : '—')

const state = { tab: 'home', tag: 'all', q: '', showPrivate: false }

const app = document.getElementById('app')

/* ---------- upstream deadlines ---------- */
// 用往年真实截稿日期推算下一届，仅作规划参考，页面已标注需核对官网
function upcomingDeadlines() {
  const out = []
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  for (const c of venuesRaw.conferences) {
    if (!c.timeline?.cycle || !c.history?.length) continue
    const latest = [...c.history]
      .filter(h => h.paper)
      .sort((a, b) => b.year - a.year)[0]
    if (!latest?.paper) continue

    // yearStep: 1 = 每年，2 = 隔年（如 ICCV 只在奇数年举办）
    const step = c.timeline.yearStep || 1
    const [baseYear, pm, pd] = latest.paper.split('-').map(Number)
    if (!pm || !pd) continue

    // 基准取 paper 日期自身的年份，而不是 history 里的 year 字段。
    // history.year 表示「哪一届」（会议当年），paper 则是前一年投的，
    // 两者差一，用 year 会把推算结果整体后移一年。
    // 从基准年起按yearStep 递增，找到下一个尚未过去的日期。
    let year = baseYear
    for (let i = 0; i < 12; i++) {
      year += step
      if (shiftMonth(year, pm, pd) >= today) break
      if (year > now.getFullYear() + 4) break
    }

    // 往前留一个提前规划缓冲，避免刚过完就立刻提醒下一次。
    // 注意：判断「是否过期」要在减完buffer 之后做。真实截稿日可能就在
    // 近期（如 SAM 去年 10-15 截稿），减掉 1 个月缓冲后会落回过去，
    // 此时应继续往后推一年，而不是把已过去的日期显示成「已过」。
    const buffer = c.timeline.bufferMonths || 1
    let est = shiftMonth(year, pm - buffer, pd)
    if (est < today) {
      est = shiftMonth(year + step, pm - buffer, pd)
    }

    const d = daysUntil(localISO(est))
    if (d < -30 || d > 400) continue
    out.push({ venue: c, date: localISO(est), days: d, est: true })
  }
  return out.sort((a, b) => a.days - b.days)
}

// 把日期平移到目标月份。若该月没有 day 号（如 3-31 往前推一个月），
// 落到目标月最后一天，而不是让 Date 静默进位到下个月。
function shiftMonth(year, month1, day) {
  const first = new Date(year, month1 - 1, 1)
  const lastDay = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate()
  return new Date(year, month1 - 1, Math.min(day, lastDay))
}

// toISOString 会按 UTC 转换导致日期偏一天，本地日期一律走这个
function localISO(d) {
  const p = n => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

const deadlineRow = d => {
  const cls = d.days < 0 ? 'urgent' : d.days <= 30 ? 'urgent' : d.days <= 90 ? 'soon' : 'normal'
  const left = d.days < 0 ? '已过' : d.days === 0 ? '今天' : `${d.days} 天`
  return `<div class="cd-row">
    <span class="cd-name">${d.venue.shortName}${d.est ? ' <span class="badge b-gray">推算</span>' : ''}</span>
    <span class="cd-date">${fmt(d.date)}</span>
    <span class="cd-left ${cls}">${left}</span>
  </div>`
}

/* ---------- render ---------- */
function homeView() {
  const dl = upcomingDeadlines()
  const next = dl.slice(0, 8)
  const acc = REPORTS.filter(r => r.status === 'accepted').length
  const sub = REPORTS.filter(r => r.status === 'under-review').length
  const rej = REPORTS.filter(r => r.status === 'rejected').length

  return `
  <div class="page-head">
    <h1>投稿信息看板</h1>
    <p>组内会议与期刊的截止时间、投稿经验和历史记录</p>
  </div>
  <div class="banner">
    <b>数据更新于 ${META.lastUpdated}</b>
    <span>标注「推算」的截止日期由往年周期估算，实际日期请以官网 CFP 为准。</span>
  </div>

  <section>
    <div class="sec-head">
      <h2>未来截稿窗口</h2>
      <span class="hint">按预计截稿时间排序，覆盖约未来 12 个月</span>
    </div>
    ${next.length ? next.map(deadlineRow).join('') : '<div class="empty">暂无数据</div>'}
  </section>

  <section>
    <div class="sec-head"><h2>投稿概览</h2></div>
    <div class="grid c3">
      <div class="card"><div class="card-meta">已收录会议</div><div class="card-name">${venuesRaw.conferences.length} 个</div></div>
      <div class="card"><div class="card-meta">已收录期刊</div><div class="card-name">${venuesRaw.journals.length} 本</div></div>
      <div class="card">
        <div class="card-meta">组内投稿记录</div>
        <div class="card-name">${REPORTS.length ? `${REPORTS.length} 条 · 命中 ${acc}` : '待补充'}</div>
      </div>
    </div>
  </section>

  <section>
    <div class="sec-head">
      <h2>最近战报</h2>
      ${REPORTS.length ? `<span class="hint">${sub} 条在审 · ${rej} 条已拒</span>` : '<span class="hint">暂无记录</span>'}
    </div>
    ${reportsView()}
  </section>`
}

function venuesView() {
  const list = VENUES.filter(v => {
    if (state.tag !== 'all' && !(v.tags || []).includes(state.tag)) return false
    if (state.q) {
      const hay = (v.shortName + v.name + v.description).toLowerCase()
      if (!hay.includes(state.q.toLowerCase())) return false
    }
    return true
  })

  const chips = `<div class="filters">
    <input type="search" id="q" placeholder="搜索会议或期刊…" value="${state.q}" />
    <button class="chip ${state.tag === 'all' ? 'on' : ''}" data-tag="all">全部</button>
    ${TAGS.map(t => `<button class="chip ${state.tag === t.id ? 'on' : ''}" data-tag="${t.id}">${t.name}</button>`).join('')}
  </div>`

  const cards = list.map(v => {
    const isJ = v.type === 'journal'
    const rankBadge = isJ
      ? `<span class="badge b-purple">${v.rank}</span>${v.ccf ? `<span class="badge b-blue">CCF ${v.ccf}</span>` : ''}<span class="badge b-coral">中科院${v.cas}</span><span class="badge b-gray">IF ${v.if}</span>`
      : `<span class="badge b-blue">${v.rank}</span>${v.ccf ? `<span class="badge b-teal">CCF ${v.ccf}</span>` : ''}<span class="badge b-gray">${v.timeline?.cycle || ''}</span>`
    const extra = isJ
      ? `<span>${v.publisher}</span><span>${v.reviewCycle}</span>`
      : `<span>${v.timeline?.months || ''}</span>`
    return `<div class="card">
      <div class="card-top">
        <div>
          <div class="card-name"><a href="${v.link}" target="_blank" rel="noopener">${v.shortName}</a></div>
          <div class="card-meta">${v.name}</div>
        </div>
      </div>
      <div>${rankBadge}</div>
      <div class="card-desc">${v.description}</div>
      <div>${(v.tags || []).map(tagBadge).join(' ')}</div>
      <div class="card-foot">${extra}</div>
      ${v.tips ? `<details class="review"><summary>组内经验</summary><div class="review-body"><div class="review-line" style="color:var(--text-2)">${v.tips}</div></div></details>` : ''}
    </div>`
  }).join('')

  return `
  <div class="page-head">
    <h1>会议与期刊</h1>
    <p>共 ${VENUES.length} 条记录 · 点击名称跳转官网</p>
  </div>
  ${chips}
  ${list.length ? `<div class="grid c3">${cards}</div>` : '<div class="empty">没有匹配的记录</div>'}`
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
  ['home', '看板'],
  ['venues', '会议与期刊'],
  ['reports', '论文战报'],
  ['guide', '投稿指南']
]

function render() {
  const body = { home: homeView, venues: venuesView, reports: reportsPage, guide: guideView }[state.tab]()
  app.innerHTML = `
    <header>
      <div class="wrap header-in">
        <div class="logo">投稿知识库<span>Conference &amp; Journal Hub</span></div>
        <nav>${TABS.map(([k, l]) => `<button class="${state.tab === k ? 'on' : ''}" data-tab="${k}">${l}</button>`).join('')}</nav>
      </div>
    </header>
    <main class="wrap">${body}</main>
    <footer><div class="wrap">
      数据更新于 ${META.lastUpdated} · 维护者：${META.maintainers.join('、')} · 站点仅供组内参考，投稿决策请以各会议官网信息为准
    </div></footer>`

  bind()
}

function bind() {
  app.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { state.tab = b.dataset.tab; render() })
  app.querySelectorAll('[data-tag]').forEach(b => b.onclick = () => { state.tag = b.dataset.tag; render() })
  app.querySelectorAll('[data-priv]').forEach(b => b.onclick = () => { state.showPrivate = b.dataset.priv === '1'; render() })
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
}

render()