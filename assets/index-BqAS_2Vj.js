(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const j={lastUpdated:"2026-10-06",maintainers:["xiuliangwu"]},T=[{id:"radar-sensing",name:"雷达感知",color:"blue"},{id:"point-cloud",name:"点云处理",color:"blue"},{id:"signal-processing",name:"信号处理",color:"teal"},{id:"embedded",name:"嵌入式系统",color:"amber"},{id:"hardware",name:"电路与硬件",color:"coral"},{id:"wireless",name:"无线通信",color:"purple"},{id:"machine-learning",name:"机器学习",color:"pink"},{id:"autonomous",name:"自动驾驶",color:"green"}],q=[{id:"iccv",name:"IEEE/CVF International Conference on Computer Vision",shortName:"ICCV",rank:"顶会",ccf:"A",type:"conference",tags:["machine-learning","autonomous"],description:"计算机视觉领域三大顶会之一，逢奇数年举办。偏算法创新，对 novelty 要求极高。",link:"https://iccv.thecvf.com/",timeline:{cycle:"奇数年",months:"提前 7-8 个月征稿",yearStep:2,bufferMonths:1},history:[{year:2025,abstract:"2025-03-01",paper:"2025-03-08",notification:"2025-07-22"}],deadlines:[],tips:"组内历史上以 track + 强 baseline 对比 + 充分的消融实验投稿。缺点的 novelty 很难过。"},{id:"cvpr",name:"IEEE/CVF Conference on Computer Vision and Pattern Recognition",shortName:"CVPR",rank:"顶会",ccf:"A",type:"conference",tags:["machine-learning","autonomous"],description:"计算机视觉领域最大年会，录用率约 20-25%，竞争激烈但影响力最大。",link:"https://cvpr.thecvf.com/",timeline:{cycle:"每年 6 月",months:"提前 7-8 个月征稿"},history:[{year:2026,abstract:"2026-03-06",paper:"2026-03-13",notification:"2026-07-13"},{year:2025,abstract:"2025-03-07",paper:"2025-03-14",notification:"2025-07-14"}],deadlines:[],tips:"投稿量最大的 CV 会议，审稿人普遍期待强baseline 表格，缺一条强对比容易被直接拒。"},{id:"neurips",name:"Conference on Neural Information Processing Systems",shortName:"NeurIPS",rank:"顶会",ccf:"A",type:"conference",tags:["machine-learning"],description:"机器学习与神经科学交叉的顶级会议，理论扎实的工作很受青睐。",link:"https://neurips.cc/",timeline:{cycle:"每年 12 月",months:"提前 8 个月征稿"},history:[{year:2026,abstract:"2026-05-06",paper:"2026-05-11",notification:"2026-09-22"}],deadlines:[],tips:"对理论严谨度要求高，仅有实验提升很难录用。建议实验+理论证明双线准备。"},{id:"icassp",name:"IEEE International Conference on Acoustics, Speech, and Signal Processing",shortName:"ICASSP",rank:"主流会议",ccf:"B",type:"conference",tags:["signal-processing","radar-sensing"],description:"信号处理领域规模最大的会议，录用率约 40-50%，是信号处理方向的高性价比选择。",link:"https://icassp2026.ieee.org/",timeline:{cycle:"每年 5 月",months:"提前 6 个月征稿"},history:[{year:2026,paper:"2025-09-24",notification:"2026-02-20"},{year:2025,paper:"2024-09-24",notification:"2025-02-21"}],deadlines:[],tips:"四页短文，对工程贡献友好。适合组内有完整系统、但理论创新有限的工作。"},{id:"sam",name:"IEEE International Symposium on Antennas and Propagation",shortName:"IEEE SAM",rank:"主流会议",ccf:null,type:"conference",tags:["radar-sensing","wireless"],description:"天线与传播领域重要会议，毫米波、阵列天线方向常用。",link:"https://ieeeaps.org/publications/apsn/",timeline:{cycle:"每年 6 月",months:"提前 5-6 个月征稿"},history:[{year:2026,paper:"2025-10-15",notification:"2026-03-15"}],deadlines:[],tips:"重视实测数据，纯仿真结果竞争力弱。"},{id:"icra",name:"IEEE International Conference on Robotics and Automation",shortName:"ICRA",rank:"主流会议",ccf:"B",type:"conference",tags:["autonomous","embedded"],description:"机器人领域顶会，硬件在环验证要求高，现场演示是加分项。",link:"https://www.ieee-icra.org/",timeline:{cycle:"每年 5 月",months:"提前 6-7 个月征稿"},history:[{year:2026,paper:"2025-09-15",notification:"2026-02-20"}],deadlines:[],tips:"系统稳定性是隐性门槛，现场 demo 翻车会直接影响评分。"},{id:"embedded-world",name:"Embedded World",shortName:"embedded world",rank:"行业会议",ccf:null,type:"conference",tags:["embedded","hardware"],description:"纽伦堡全球嵌入式系统展，兼具学术与产业侧重，适合工程实现类工作。",link:"https://www.embedded-world.de/",timeline:{cycle:"每年 3 月",months:"提前 5-6 个月征稿"},history:[{year:2026,paper:"2025-08-15",notification:"2025-11-20"}],deadlines:[],tips:"接受短文和 demo，适合作为研究生首次参会练手，评审相对宽松。"},{id:"icee",name:"IEEE International Conference on Electronic Information Technology",shortName:"ICEIT",rank:"行业会议",ccf:null,type:"conference",tags:["radar-sensing","embedded"],description:"电子信息领域国际会议，雷达与电子系统方向接受度较高，审稿周期较短。",link:"https://www.iceit.org/",timeline:{cycle:"每年 4-5 月",months:"提前 4-5 个月征稿"},history:[{year:2026,paper:"2025-12-01",notification:"2026-02-20"}],deadlines:[],tips:"投稿门槛友好，适合作为组内练手会议，评审意见质量一般但可作为初次投稿训练。"},{id:"apec",name:"IEEE International Conference on Applied Perception and Cognition",shortName:"APEC",rank:"行业会议",ccf:null,type:"conference",tags:["machine-learning","autonomous"],description:"应用感知与认知方向会议，涵盖视觉、认知、机器人交叉，周期快。",link:"https://apec-conf.org/",timeline:{cycle:"每年 6 月",months:"提前 3-4 个月征稿"},history:[{year:2026,paper:"2026-03-15",notification:"2026-05-20"}],deadlines:[],tips:"周期短适合快速发文章，但影响力有限，适合作为毕业凑数选项。"}],M=[{id:"tsp",name:"IEEE Transactions on Signal Processing",shortName:"TSP",publisher:"IEEE",rank:"顶刊",ccf:"A",cas:"一区",if:"3.2",tags:["signal-processing"],openAccess:"hybrid",apc:"约 2400 美元（超页另收）",reviewCycle:"首次决定约 6-9 个月",description:"信号处理领域最顶级期刊，要求理论创新与方法论贡献，纯系统实现不足。",link:"https://www.ieee-tstp.org/",history:[],deadlines:[],tips:"投 TSP 必须有清晰的理论框架和收敛性/性能分析，纯实验论文基本会被拒。"},{id:"tgrs",name:"IEEE Transactions on Geoscience and Remote Sensing",shortName:"TGRS",publisher:"IEEE",rank:"顶刊",ccf:"A",cas:"一区",if:"7.2",tags:["radar-sensing","point-cloud","machine-learning"],openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 4-6 个月",description:"遥感与雷达领域顶级期刊，点云、目标检测方向投稿量大，需注意区分 incremental 与 novel。",link:"https://www.ieee-tgrs.org/",history:[],deadlines:[],tips:"审稿严格但意见专业性强。注意区分「改进已有方法」和「提出新方法」的写法差异。"},{id:"jsen",name:"IEEE Sensors Journal",shortName:"JSEN",publisher:"IEEE",rank:"主流期刊",ccf:null,cas:"二区",if:"4.3",tags:["radar-sensing","embedded"],openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 3-5 个月",description:"传感器领域主流期刊，雷达传感系统实测类工作接受度高，审稿相对务实。",link:"https://ieee-sensors.org/ieee-sensors-journal/",history:[],deadlines:[],tips:"组内投稿最稳妥的期刊选择，实测数据完整的话命中率较高。注意版面费预算。"},{id:"tmc",name:"IEEE Transactions on Mobile Computing",shortName:"TMC",publisher:"IEEE",rank:"主流期刊",ccf:"A",cas:"二区",if:"5.4",tags:["embedded","wireless"],openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 5-8 个月",description:"移动计算领域顶级期刊，适合系统与算法结合的工作，审稿周期偏长。",link:"https://www.computer.org/csdl/journal/tm",history:[],deadlines:[],tips:"审稿周期长，做好被拒后转投其他刊的时间规划。"},{id:"jsat",name:"Journal of Signal and Image Processing",shortName:"JSIP",publisher:"Springer",rank:"主流期刊",ccf:null,cas:"三区",if:"2.3",tags:["point-cloud","machine-learning"],openAccess:"hybrid",apc:"约 2200 美元",reviewCycle:"首次决定约 2-4 个月",description:"Springer 旗下信号图像处理期刊，审稿较快，适合作为毕业前的兜底期刊。",link:"https://link.springer.com/journal/11220",history:[],deadlines:[],tips:"审稿快，适合赶毕业时间线。但分区偏低，不适合作为主要成果。"}],l={_meta:j,tags:T,conferences:q,journals:M},D=[{id:"r-001",member:"待填写",venueId:"jsen",venueName:"IEEE Sensors Journal",year:2025,status:"accepted",round:1,daysElapsed:132,submittedAt:"2025-01-20",decidedAt:"2025-06-01",title:"（示例）毫米波雷达点云目标检测的实测与优化",reviews:[{round:1,summary:"评审认为工作工程实现完整，但创新性有限，建议加强与最新方法的对比。",strengths:["实测数据详实","系统实现完整","消融实验充分"],weaknesses:["与 2024 年后新方法对比不足","缺少跨数据集验证"],public:!1}],lessons:"实测类论文要尽早规划对比实验，审稿人几乎一定会问「和最新的比怎么样」。",public:!1},{id:"r-002",member:"待填写",venueId:"icassp",venueName:"ICASSP",year:2025,status:"rejected",round:1,daysElapsed:138,submittedAt:"2024-09-25",decidedAt:"2025-02-20",title:"（示例）四页短文的信号处理改进方法",reviews:[{round:1,summary:"四页篇幅下方法描述过于简略，评审无法判断技术细节与可复现性。",strengths:["问题定义清晰"],weaknesses:["方法描述不充分","缺少与 SOTA 的定量对比","参考文献不足"],public:!1}],lessons:"ICASSP 只有四页，别把论文写成八页砍一半——方法细节必须完整，实验对比要挤进去。",public:!1},{id:"r-003",member:"待填写",venueId:"iceit",venueName:"ICEIT",year:2026,status:"under-review",round:1,daysElapsed:null,submittedAt:"2025-12-05",decidedAt:null,title:"（示例）嵌入式平台上的雷达信号实时处理",reviews:[],lessons:"练手会议，审稿意见质量一般，主要价值是走通一遍投稿流程。",public:!1}],R={reports:D},I=[...l.conferences,...l.journals],A=l.tags,h=R.reports,w=l._meta,C=Object.fromEntries(A.map(n=>[n.id,n])),F=n=>{var e;return((e=C[n])==null?void 0:e.name)||n},V=n=>{const e=C[n];return`<span class="badge b-${(e==null?void 0:e.color)||"gray"}">${F(n)}</span>`},O=864e5,L=n=>{const[e,i,s]=n.split("-").map(Number);return Math.round((new Date(e,i-1,s)-new Date)/O)},E=n=>n?n.replace(/-/g,"."):"—",r={tab:"home",tag:"all",q:"",showPrivate:!1},u=document.getElementById("app");function B(){var s,t;const n=[],e=new Date,i=new Date(e.getFullYear(),e.getMonth(),e.getDate());for(const a of l.conferences){if(!((s=a.timeline)!=null&&s.cycle)||!((t=a.history)!=null&&t.length))continue;const c=[...a.history].filter(p=>p.paper).sort((p,P)=>P.year-p.year)[0];if(!(c!=null&&c.paper))continue;const o=a.timeline.yearStep||1,[d,f,v]=c.paper.split("-").map(Number);if(!f||!v)continue;let m=d;for(let p=0;p<12&&(m+=o,!($(m,f,v)>=i||m>e.getFullYear()+4));p++);const k=a.timeline.bufferMonths||1;let y=$(m,f-k,v);y<i&&(y=$(m+o,f-k,v));const b=L(S(y));b<-30||b>400||n.push({venue:a,date:S(y),days:b,est:!0})}return n.sort((a,c)=>a.days-c.days)}function $(n,e,i){const s=new Date(n,e-1,1),t=new Date(s.getFullYear(),s.getMonth()+1,0).getDate();return new Date(n,e-1,Math.min(i,t))}function S(n){const e=i=>String(i).padStart(2,"0");return`${n.getFullYear()}-${e(n.getMonth()+1)}-${e(n.getDate())}`}const J=n=>{const e=n.days<0||n.days<=30?"urgent":n.days<=90?"soon":"normal",i=n.days<0?"已过":n.days===0?"今天":`${n.days} 天`;return`<div class="cd-row">
    <span class="cd-name">${n.venue.shortName}${n.est?' <span class="badge b-gray">推算</span>':""}</span>
    <span class="cd-date">${E(n.date)}</span>
    <span class="cd-left ${e}">${i}</span>
  </div>`};function Y(){const e=B().slice(0,8),i=h.filter(a=>a.status==="accepted").length,s=h.filter(a=>a.status==="under-review").length,t=h.filter(a=>a.status==="rejected").length;return`
  <div class="page-head">
    <h1>投稿信息看板</h1>
    <p>组内会议与期刊的截止时间、投稿经验和历史记录</p>
  </div>
  <div class="banner">
    <b>数据更新于 ${w.lastUpdated}</b>
    <span>标注「推算」的截止日期由往年周期估算，实际日期请以官网 CFP 为准。</span>
  </div>

  <section>
    <div class="sec-head">
      <h2>未来截稿窗口</h2>
      <span class="hint">按预计截稿时间排序，覆盖约未来 12 个月</span>
    </div>
    ${e.length?e.map(J).join(""):'<div class="empty">暂无数据</div>'}
  </section>

  <section>
    <div class="sec-head"><h2>投稿概览</h2></div>
    <div class="grid c3">
      <div class="card"><div class="card-meta">已收录会议</div><div class="card-name">${l.conferences.length} 个</div></div>
      <div class="card"><div class="card-meta">已收录期刊</div><div class="card-name">${l.journals.length} 本</div></div>
      <div class="card"><div class="card-meta">组内投稿记录</div><div class="card-name">${h.length} 条 · 命中 ${i}</div></div>
    </div>
  </section>

  <section>
    <div class="sec-head">
      <h2>最近战报</h2>
      <span class="hint">${s} 条在审 · ${t} 条已拒</span>
    </div>
    ${N()}
  </section>`}function _(){const n=I.filter(s=>!(r.tag!=="all"&&!(s.tags||[]).includes(r.tag)||r.q&&!(s.shortName+s.name+s.description).toLowerCase().includes(r.q.toLowerCase()))),e=`<div class="filters">
    <input type="search" id="q" placeholder="搜索会议或期刊…" value="${r.q}" />
    <button class="chip ${r.tag==="all"?"on":""}" data-tag="all">全部</button>
    ${A.map(s=>`<button class="chip ${r.tag===s.id?"on":""}" data-tag="${s.id}">${s.name}</button>`).join("")}
  </div>`,i=n.map(s=>{var o,d;const t=s.type==="journal",a=t?`<span class="badge b-purple">${s.rank}</span>${s.ccf?`<span class="badge b-blue">CCF ${s.ccf}</span>`:""}<span class="badge b-coral">中科院${s.cas}</span><span class="badge b-gray">IF ${s.if}</span>`:`<span class="badge b-blue">${s.rank}</span>${s.ccf?`<span class="badge b-teal">CCF ${s.ccf}</span>`:""}<span class="badge b-gray">${((o=s.timeline)==null?void 0:o.cycle)||""}</span>`,c=t?`<span>${s.publisher}</span><span>${s.reviewCycle}</span>`:`<span>${((d=s.timeline)==null?void 0:d.months)||""}</span>`;return`<div class="card">
      <div class="card-top">
        <div>
          <div class="card-name"><a href="${s.link}" target="_blank" rel="noopener">${s.shortName}</a></div>
          <div class="card-meta">${s.name}</div>
        </div>
      </div>
      <div>${a}</div>
      <div class="card-desc">${s.description}</div>
      <div>${(s.tags||[]).map(V).join(" ")}</div>
      <div class="card-foot">${c}</div>
      ${s.tips?`<details class="review"><summary>组内经验</summary><div class="review-body"><div class="review-line" style="color:var(--text-2)">${s.tips}</div></div></details>`:""}
    </div>`}).join("");return`
  <div class="page-head">
    <h1>会议与期刊</h1>
    <p>共 ${I.length} 条记录 · 点击名称跳转官网</p>
  </div>
  ${e}
  ${n.length?`<div class="grid c3">${i}</div>`:'<div class="empty">没有匹配的记录</div>'}`}function N(){const n=h.filter(e=>r.showPrivate||e.public);return n.length?n.map(e=>{var t;const i={accepted:["已录用","b-green"],rejected:["已拒稿","b-red"],under_review:["在审","b-amber"],"under-review":["在审","b-amber"]}[e.status]||["—","b-gray"],s=(e.reviews||[]).map(a=>{var c,o;return`
      <div class="review-line"><span class="lbl">第 ${a.round} 轮评审意见摘要</span>${a.summary}</div>
      ${(c=a.strengths)!=null&&c.length?`<div class="review-line"><span class="lbl">认可之处</span><ul class="pts">${a.strengths.map(d=>`<li>${d}</li>`).join("")}</ul></div>`:""}
      ${(o=a.weaknesses)!=null&&o.length?`<div class="review-line"><span class="lbl">主要问题</span><ul class="pts">${a.weaknesses.map(d=>`<li>${d}</li>`).join("")}</ul></div>`:""}`}).join("");return`<div class="report">
      <div class="report-head">
        <div>
          <div class="report-title">${e.title}</div>
          <div class="card-meta">${e.venueName} · ${e.year} · ${e.member}</div>
        </div>
        <span class="badge ${i[1]}">${i[0]}</span>
      </div>
      <div class="report-grid">
        <dl class="kv"><dt>投稿日期</dt><dd>${E(e.submittedAt)}</dd></dl>
        <dl class="kv"><dt>决定日期</dt><dd>${E(e.decidedAt)}</dd></dl>
        <dl class="kv"><dt>审稿轮次</dt><dd>${e.round||1}</dd></dl>
        <dl class="kv"><dt>总耗时</dt><dd>${e.daysElapsed?e.daysElapsed+" 天":"—"}</dd></dl>
      </div>
      ${(t=e.reviews)!=null&&t.length?`<details class="review"><summary>查看审稿意见</summary><div class="review-body">${s}</div></details>`:'<div class="locked">暂无审稿意见记录</div>'}
      ${e.lessons?`<div class="lesson">${e.lessons}</div>`:""}
    </div>`}).join(""):'<div class="empty">还没有公开的投稿记录。第一条由你来写。</div>'}function U(){return`
  <div class="page-head">
    <h1>论文战报</h1>
    <p>每一次投稿的完整记录，包括审稿意见和经验总结</p>
  </div>
  <div class="banner">
    <b>关于隐私</b>
    <span>审稿意见属未公开评审内容，默认为非公开。本页仅展示标记为公开的记录；公开部署时可在配置中关闭私有记录展示。</span>
  </div>
  <div class="filters">
    <button class="chip ${r.showPrivate?"":"on"}" data-priv="0">仅公开记录</button>
    <button class="chip ${r.showPrivate?"on":""}" data-priv="1">包含私有记录（本机）</button>
  </div>
  ${N()}`}function x(){return`
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
    <p>编辑 <code>data/reports.json</code>，在 <code>reports</code> 里追加。<code>public</code> 字段控制这条记录是否公开；<code>reviews</code> 里的每条也有独立的 <code>public</code> 开关，可以做到「结果显示但意见不公开」。</p>

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
  </div>`}const G=[["home","看板"],["venues","会议与期刊"],["reports","论文战报"],["guide","投稿指南"]];function g(){const n={home:Y,venues:_,reports:U,guide:x}[r.tab]();u.innerHTML=`
    <header>
      <div class="wrap header-in">
        <div class="logo">投稿知识库<span>Conference &amp; Journal Hub</span></div>
        <nav>${G.map(([e,i])=>`<button class="${r.tab===e?"on":""}" data-tab="${e}">${i}</button>`).join("")}</nav>
      </div>
    </header>
    <main class="wrap">${n}</main>
    <footer><div class="wrap">
      数据更新于 ${w.lastUpdated} · 维护者：${w.maintainers.join("、")} · 站点仅供组内参考，投稿决策请以各会议官网信息为准
    </div></footer>`,H()}function H(){u.querySelectorAll("[data-tab]").forEach(e=>e.onclick=()=>{r.tab=e.dataset.tab,g()}),u.querySelectorAll("[data-tag]").forEach(e=>e.onclick=()=>{r.tag=e.dataset.tag,g()}),u.querySelectorAll("[data-priv]").forEach(e=>e.onclick=()=>{r.showPrivate=e.dataset.priv==="1",g()});const n=u.querySelector("#q");n&&(n.oninput=e=>{r.q=e.target.value;const i=e.target.selectionStart;g();const s=u.querySelector("#q");s&&(s.focus(),s.setSelectionRange(i,i))})}g();
