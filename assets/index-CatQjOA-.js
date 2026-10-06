(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const q={lastUpdated:"2026-10-06",field:"无线感知 / 普适计算",maintainers:["xiuliangwu"]},P=[{id:"wifi-sensing",name:"WiFi 感知",color:"blue"},{id:"mmwave-radar",name:"毫米波雷达",color:"blue"},{id:"device-free",name:"无设备感知",color:"teal"},{id:"har",name:"活动识别",color:"teal"},{id:"localization",name:"定位追踪",color:"green"},{id:"ubiquitous",name:"普适计算",color:"purple"},{id:"mobile-systems",name:"移动系统",color:"amber"},{id:"iot-sensing",name:"物联网感知",color:"coral"},{id:"wireless-network",name:"无线网络",color:"pink"},{id:"signal-processing",name:"信号处理",color:"gray"},{id:"embedded",name:"嵌入式",color:"gray"}],U=[{id:"ubicomp",name:"ACM International Joint Conference on Pervasive and Ubiquitous Computing",shortName:"UbiComp",fullName:"ACM UbiComp",rank:"领域旗舰",ccf:"A",type:"conference",tags:["ubiquitous","har","mobile-systems"],description:"普适计算领域最核心的会议，UbiComp / ISWC / UbiComp-SEASONAL 联合。CMU 主导，学术影响力在这个领域内最高。接受率约 15%。",link:"https://www.ubicomp.org/",timeline:{cycle:"每年 9-10 月",months:"提前 5 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2026-02-01",notification:"2026-07-26"},{year:2025,paper:"2025-02-01",notification:"2025-07-15"}],deadlines:[{type:"第 1 轮",date:"2026-11-01",note:"ISWC Notes & Briefs / Workshop / Doctoral Colloquium"}],tips:"三轮滚动征稿（2 月 / 5 月 / 11 月），第一轮通常最宽松。审稿周期约 5-6 个月。Wearable Computing 和 Sensing 都有专门 track，毫米波感知类工作投 Sensing track 较对口。"},{id:"percom",name:"IEEE International Conference on Pervasive Computing and Communication",shortName:"PerCom",fullName:"IEEE PerCom",rank:"领域旗舰",ccf:"B",type:"conference",tags:["ubiquitous","wifi-sensing","localization"],description:"普适计算与通信交叉的经典会议，已办 25 届。设备无关感知（device-free sensing）是其传统强项。接受率约 15%。",link:"https://percom.org/",timeline:{cycle:"每年 3 月",months:"提前 6 个月征稿",bufferMonths:1},history:[{year:2027,paper:"2026-09-11",notification:"2026-12-18"},{year:2026,paper:"2025-09-12",notification:"2025-12-18"}],deadlines:[],tips:"强制线下报告（除非签证/健康原因），论文需至少一位作者注册并到场，否则不进 IEEE 库。有 rebuttal 环节：11 月下旬收到早期拒稿通知或 rebuttal 邀请。9 页正文 + 1 页参考文献。"},{id:"ipsn",name:"ACM/IEEE International Conference on Information Processing in Sensor Networks",shortName:"IPSN",fullName:"IPSN",rank:"领域重要",ccf:"B",type:"conference",tags:["iot-sensing","embedded","wireless-network"],description:"传感器网络方向最顶的会议，近年与 IPSN-W、SenSys 并列为感知系统三大会议。偏底层网络与分布式算法。",link:"https://ipsn.acm.org/",timeline:{cycle:"每年 5 月",months:"提前 7 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2025-10-03",notification:"2026-02-18"}],deadlines:[],tips:"与 SenSys 交替或同年举办，投稿时注意是否撞期。理论性强的分布式算法工作更受青睐，纯感知应用偏少。"},{id:"sensys",name:"ACM Conference on Embedded Networked Sensor Systems",shortName:"SenSys",fullName:"ACM SenSys",rank:"领域重要",ccf:"B",type:"conference",tags:["iot-sensing","embedded","mobile-systems"],description:"传感器系统方向旗舰，偏系统实现与部署。强调真实部署的可行性，实验室原型需说明实际场景价值。",link:"https://sensys.org/",timeline:{cycle:"每年 11 月",months:"提前 6-7 个月征稿",bufferMonths:1},history:[{year:2025,paper:"2025-05-28",notification:"2025-09-08"}],deadlines:[],tips:"系统类工作需要对真实部署负责，只有实验室数据的稿件容易被质疑。无线感知 + 边缘部署的组合比较契合。"},{id:"mobisys",name:"ACM International Conference on Mobile Systems, Applications, and Services",shortName:"MobiSys",fullName:"ACM MobiSys",rank:"领域重要",ccf:"B",type:"conference",tags:["mobile-systems","ubiquitous","embedded"],description:"移动系统方向重要会议。感知工作若强调移动场景下的系统设计（如手机端实时推理）适合投这里。",link:"https://mobsys.org/",timeline:{cycle:"每年 6 月",months:"提前 7 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2025-12-20",notification:"2026-03-20"}],deadlines:[],tips:"系统实现和性能评估是硬要求。纯算法工作偏弱，需要有真实设备上的端到端实验。"},{id:"imwut",name:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",shortName:"IMWUT",fullName:"ACM IMWUT",rank:"领域重要",ccf:"B",type:"conference",tags:["ubiquitous","har","wifi-sensing"],description:"UbiComp 旗下面向所有议题的期刊式会议，季刊模式，适合工作坊成果或需要更长评审周期的深挖工作。CCF B。",link:"https://dl.acm.org/journal/imwut",timeline:{cycle:"每年四季",months:"全年滚动",bufferMonths:0},history:[{year:2026,paper:"2026-05-01",notification:"2026-07-26"}],deadlines:[],tips:"与 UbiComp 主会共享征稿节奏，接受后可在 UbiComp 现场报告，是曝光度很高的途径。适合把UbiComp 的工作做深一版。"},{id:"mass",name:"IEEE International Conference on Mobile Ad Hoc and Sensor Networks",shortName:"MASS",fullName:"IEEE MASS",rank:"领域重要",ccf:"C",type:"conference",tags:["wireless-network","iot-sensing","localization"],description:"移动自组织与传感器网络会议，网络侧视角较强，定位与路由类工作适合。CCF C 但在领域内认可度不错。",link:"https://www.ieee-mass.org/",timeline:{cycle:"每年 10 月",months:"提前 6 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2026-05-10",notification:"2026-07-18"}],deadlines:[],tips:"适合有网络协议或定位算法创新的工作，纯感知信号处理类工作匹配度一般。"},{id:"ndss",name:"Network and Distributed System Security Symposium",shortName:"NDSS",fullName:"NDSS",rank:"领域重要",ccf:"A",type:"conference",tags:["ubiquitous","iot-sensing"],description:"CCF A 网络安全顶会。无线感知涉及隐私泄露、侧信道攻击时，投这里影响力极大。",link:"https://www.ndss-symposium.org/",timeline:{cycle:"每年 2 月",months:"提前 7 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2025-07-25",notification:"2025-12-15"}],deadlines:[],tips:"如果工作涉及用 CSI 做隐私推断、或感知系统的攻击面，这是主要出口。纯感知算法工作不适合。"}],T=[{id:"tosn",name:"ACM Transactions on Sensor Networks",shortName:"TOSN",publisher:"ACM",rank:"领域顶刊",ccf:"B",cas:"一区",if:"4.6",tags:["iot-sensing","wireless-network","localization"],openAccess:"hybrid",apc:"约 2600 美元",reviewCycle:"首次决定约 3-6 个月",description:"传感器网络领域顶级期刊，CCF B。传感器系统的理论和方法论工作主要出口。",link:"https://dl.acm.org/journal/tosn",history:[],deadlines:[],tips:"注意该刊与 SenSys/IPSN 有紧密关系，部分会议优秀工作会被邀请扩展投这里。"},{id:"imwut-j",name:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (Journal)",shortName:"IMWUT",publisher:"ACM",rank:"领域顶刊",ccf:"B",cas:"一区",if:"4.6",tags:["ubiquitous","har","wifi-sensing"],openAccess:"hybrid",apc:"约 2600 美元",reviewCycle:"首轮决定约 2-3 个月",description:"UbiComp 的期刊形态，季刊。对无线感知、人体活动识别这类工作的容忍度和接受度都很高。",link:"https://dl.acm.org/journal/imwut",history:[],deadlines:[],tips:"评审相对快（2-3 个月首轮），适合需要较快反馈的场景。也可先投会议版再扩展投此刊。"},{id:"tmc",name:"IEEE Transactions on Mobile Computing",shortName:"TMC",publisher:"IEEE",rank:"领域顶刊",ccf:"A",cas:"二区",if:"5.4",tags:["mobile-systems","ubiquitous","embedded"],openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 5-8 个月",description:"移动计算领域顶级期刊，CCF A。移动感知系统与算法结合的工作适合。",link:"https://www.computer.org/csdl/journal/tm",history:[],deadlines:[],tips:"审稿周期长，做好被拒后转投其他刊的时间规划。系统+算法的完整工作更有竞争力。"},{id:"tws",name:"IEEE Transactions on Wireless Communications",shortName:"TWC",publisher:"IEEE",rank:"领域顶刊",ccf:"A",cas:"一区",if:"5.2",tags:["wireless-network","signal-processing","localization"],openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 4-6 个月",description:"无线通信领域顶级期刊，CCF A。涉及无线感知信号处理理论创新的工作适合投这里。",link:"https://www.comsoc.org/publications/journals/twc",history:[],deadlines:[],tips:"偏通信理论，纯应用型感知工作命中率低。需要有通信侧的创新点（如波形设计、资源分配）。"},{id:"jsen",name:"IEEE Sensors Journal",shortName:"IEEE Sensors J",publisher:"IEEE",rank:"主流期刊",ccf:null,cas:"二区",if:"4.3",tags:["mmwave-radar","signal-processing","embedded"],openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 3-5 个月",description:"传感器领域主流期刊，毫米波雷达实测类工作接受度高，审稿务实。",link:"https://ieee-sensors.org/ieee-sensors-journal/",history:[],deadlines:[],tips:"组内投稿最稳妥的期刊选择。实测数据完整的话命中率较高，注意版面费预算。"},{id:"tcadh",name:"IEEE Transactions on Computational Social Systems",shortName:"TCADH",publisher:"IEEE",rank:"主流期刊",ccf:null,cas:"三区",if:"2.5",tags:["har","ubiquitous"],openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 2-4 个月",description:"计算社交系统方向期刊，涉及群体行为感知、社交计算类工作时可考虑。",link:"https://www.computer.org/csdl/journal/sc",history:[],deadlines:[],tips:"分区偏低，适合作为毕业前的时间兜底选项，不适合作为主要成果。"}],u={_meta:q,tags:P,conferences:U,journals:T},D=[],F={reports:D},k=[...u.conferences,...u.journals],M=u.tags,d=F.reports,w=u._meta,I=Object.fromEntries(M.map(s=>[s.id,s])),B=s=>{var e;return((e=I[s])==null?void 0:e.name)||s},W=s=>{const e=I[s];return`<span class="badge b-${(e==null?void 0:e.color)||"gray"}">${B(s)}</span>`},O=864e5,A=s=>{const[e,n,t]=s.split("-").map(Number);return Math.round((new Date(e,n-1,t)-new Date)/O)},S=s=>s?s.replace(/-/g,"."):"—",c={tab:"home",tag:"all",q:"",showPrivate:!1},m=document.getElementById("app");function L(){var t,a;const s=[],e=new Date,n=new Date(e.getFullYear(),e.getMonth(),e.getDate());for(const i of u.conferences){for(const r of i.deadlines||[]){if(!r.date)continue;const f=A(r.date);f<-30||f>400||s.push({venue:i,date:r.date,days:f,label:r.type||"截稿",est:!1})}if(!((t=i.timeline)!=null&&t.cycle)||!((a=i.history)!=null&&a.length))continue;const o=[...i.history].filter(r=>r.paper).sort((r,f)=>f.year-r.year)[0];if(!(o!=null&&o.paper))continue;const l=i.timeline.yearStep||1,[p,b,y]=o.paper.split("-").map(Number);if(!b||!y)continue;let h=p;for(let r=0;r<12&&(h+=l,!(C(h,b,y)>=n||h>e.getFullYear()+4));r++);const E=i.timeline.bufferMonths||1;let v=C(h,b-E,y);v<n&&(v=C(h+l,b-E,y));const $=A(N(v));$<-30||$>400||s.push({venue:i,date:N(v),days:$,label:"预计截稿",est:!0})}return s.sort((i,o)=>i.est===o.est?i.days-o.days:i.est?1:-1)}function C(s,e,n){const t=new Date(s,e-1,1),a=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();return new Date(s,e-1,Math.min(n,a))}function N(s){const e=n=>String(n).padStart(2,"0");return`${s.getFullYear()}-${e(s.getMonth()+1)}-${e(s.getDate())}`}const _=s=>{const e=s.days<0||s.days<=30?"urgent":s.days<=90?"soon":"normal",n=s.days<0?"已过":s.days===0?"今天":`${s.days} 天`;return`<div class="cd-row">
    <span class="cd-name">${s.venue.shortName}<span class="badge ${s.est?"b-gray":"b-green"}">${s.label}</span></span>
    <span class="cd-date">${S(s.date)}</span>
    <span class="cd-left ${e}">${n}</span>
  </div>`};function R(){const e=L().slice(0,8),n=d.filter(i=>i.status==="accepted").length,t=d.filter(i=>i.status==="under-review").length,a=d.filter(i=>i.status==="rejected").length;return`
  <div class="page-head">
    <h1>投稿信息看板</h1>
    <p>${w.field} · 组内会议与期刊的截止时间、投稿经验和历史记录</p>
  </div>
  <div class="banner">
    <b>数据更新于 ${w.lastUpdated}</b>
    <span>标注「预计截稿」的日期由往年周期估算，仅作规划参考；实际日期请以官网 CFP 为准。</span>
  </div>

  <section>
    <div class="sec-head">
      <h2>未来截稿窗口</h2>
      <span class="hint">按预计截稿时间排序，覆盖约未来 12 个月</span>
    </div>
    ${e.length?e.map(_).join(""):'<div class="empty">暂无数据</div>'}
  </section>

  <section>
    <div class="sec-head"><h2>投稿概览</h2></div>
    <div class="grid c3">
      <div class="card"><div class="card-meta">已收录会议</div><div class="card-name">${u.conferences.length} 个</div></div>
      <div class="card"><div class="card-meta">已收录期刊</div><div class="card-name">${u.journals.length} 本</div></div>
      <div class="card">
        <div class="card-meta">组内投稿记录</div>
        <div class="card-name">${d.length?`${d.length} 条 · 命中 ${n}`:"待补充"}</div>
      </div>
    </div>
  </section>

  <section>
    <div class="sec-head">
      <h2>最近战报</h2>
      ${d.length?`<span class="hint">${t} 条在审 · ${a} 条已拒</span>`:'<span class="hint">暂无记录</span>'}
    </div>
    ${j()}
  </section>`}function J(){const s=k.filter(t=>!(c.tag!=="all"&&!(t.tags||[]).includes(c.tag)||c.q&&!(t.shortName+t.name+t.description).toLowerCase().includes(c.q.toLowerCase()))),e=`<div class="filters">
    <input type="search" id="q" placeholder="搜索会议或期刊…" value="${c.q}" />
    <button class="chip ${c.tag==="all"?"on":""}" data-tag="all">全部</button>
    ${M.map(t=>`<button class="chip ${c.tag===t.id?"on":""}" data-tag="${t.id}">${t.name}</button>`).join("")}
  </div>`,n=s.map(t=>{var l,p;const a=t.type==="journal",i=a?`<span class="badge b-purple">${t.rank}</span>${t.ccf?`<span class="badge b-blue">CCF ${t.ccf}</span>`:""}<span class="badge b-coral">中科院${t.cas}</span><span class="badge b-gray">IF ${t.if}</span>`:`<span class="badge b-blue">${t.rank}</span>${t.ccf?`<span class="badge b-teal">CCF ${t.ccf}</span>`:""}<span class="badge b-gray">${((l=t.timeline)==null?void 0:l.cycle)||""}</span>`,o=a?`<span>${t.publisher}</span><span>${t.reviewCycle}</span>`:`<span>${((p=t.timeline)==null?void 0:p.months)||""}</span>`;return`<div class="card">
      <div class="card-top">
        <div>
          <div class="card-name"><a href="${t.link}" target="_blank" rel="noopener">${t.shortName}</a></div>
          <div class="card-meta">${t.name}</div>
        </div>
      </div>
      <div>${i}</div>
      <div class="card-desc">${t.description}</div>
      <div>${(t.tags||[]).map(W).join(" ")}</div>
      <div class="card-foot">${o}</div>
      ${t.tips?`<details class="review"><summary>组内经验</summary><div class="review-body"><div class="review-line" style="color:var(--text-2)">${t.tips}</div></div></details>`:""}
    </div>`}).join("");return`
  <div class="page-head">
    <h1>会议与期刊</h1>
    <p>共 ${k.length} 条记录 · 点击名称跳转官网</p>
  </div>
  ${e}
  ${s.length?`<div class="grid c3">${n}</div>`:'<div class="empty">没有匹配的记录</div>'}`}function j(){const s=d.filter(e=>c.showPrivate||e.public);return s.length?s.map(e=>{var a;const n={accepted:["已录用","b-green"],rejected:["已拒稿","b-red"],under_review:["在审","b-amber"],"under-review":["在审","b-amber"]}[e.status]||["—","b-gray"],t=(e.reviews||[]).map(i=>{var o,l;return`
      <div class="review-line"><span class="lbl">第 ${i.round} 轮评审意见摘要</span>${i.summary}</div>
      ${(o=i.strengths)!=null&&o.length?`<div class="review-line"><span class="lbl">认可之处</span><ul class="pts">${i.strengths.map(p=>`<li>${p}</li>`).join("")}</ul></div>`:""}
      ${(l=i.weaknesses)!=null&&l.length?`<div class="review-line"><span class="lbl">主要问题</span><ul class="pts">${i.weaknesses.map(p=>`<li>${p}</li>`).join("")}</ul></div>`:""}`}).join("");return`<div class="report">
      <div class="report-head">
        <div>
          <div class="report-title">${e.title}</div>
          <div class="card-meta">${e.venueName} · ${e.year} · ${e.member}</div>
        </div>
        <span class="badge ${n[1]}">${n[0]}</span>
      </div>
      <div class="report-grid">
        <dl class="kv"><dt>投稿日期</dt><dd>${S(e.submittedAt)}</dd></dl>
        <dl class="kv"><dt>决定日期</dt><dd>${S(e.decidedAt)}</dd></dl>
        <dl class="kv"><dt>审稿轮次</dt><dd>${e.round||1}</dd></dl>
        <dl class="kv"><dt>总耗时</dt><dd>${e.daysElapsed?e.daysElapsed+" 天":"—"}</dd></dl>
      </div>
      ${(a=e.reviews)!=null&&a.length?`<details class="review"><summary>查看审稿意见</summary><div class="review-body">${t}</div></details>`:'<div class="locked">暂无审稿意见记录</div>'}
      ${e.lessons?`<div class="lesson">${e.lessons}</div>`:""}
    </div>`}).join(""):`<div class="empty">
      <div class="empty-title">${d.length===0?"这个板块还没有内容":"当前视角下没有记录"}</div>
      <p class="empty-desc">战报记录每一次投稿的审稿意见和经验总结，是组里最难得的经验沉淀。</p>
      <p class="empty-desc">添加方式：复制 <code>data/reports.json</code> 里的 <code>_template</code> 结构，追加到 <code>reports</code> 数组，提交 PR 即可。</p>
      ${d.length===0?'<p class="empty-desc">哪怕只是写一条刚投过的记录，也是有价值的起点。</p>':'<p class="empty-desc">切换到「包含私有记录」可查看尚未公开的内容。</p>'}
    </div>`}function Y(){return`
  <div class="page-head">
    <h1>论文战报</h1>
    <p>每一次投稿的完整记录，包括审稿意见和经验总结</p>
  </div>
  <div class="banner">
    <b>关于隐私</b>
    <span>审稿意见属未公开评审内容，默认非公开。每条战报和每条审稿意见各有独立的 public 开关，公开部署时只展示你明确设为公开的部分。</span>
  </div>
  <div class="filters">
    <button class="chip ${c.showPrivate?"":"on"}" data-priv="0">仅公开记录</button>
    <button class="chip ${c.showPrivate?"on":""}" data-priv="1">包含私有记录（本机）</button>
  </div>
  ${j()}`}function z(){return`
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
  </div>`}const V=[["home","看板"],["venues","会议与期刊"],["reports","论文战报"],["guide","投稿指南"]];function g(){const s={home:R,venues:J,reports:Y,guide:z}[c.tab]();m.innerHTML=`
    <header>
      <div class="wrap header-in">
        <div class="logo">投稿知识库<span>Conference &amp; Journal Hub</span></div>
        <nav>${V.map(([e,n])=>`<button class="${c.tab===e?"on":""}" data-tab="${e}">${n}</button>`).join("")}</nav>
      </div>
    </header>
    <main class="wrap">${s}</main>
    <footer><div class="wrap">
      数据更新于 ${w.lastUpdated} · 维护者：${w.maintainers.join("、")} · 站点仅供组内参考，投稿决策请以各会议官网信息为准
    </div></footer>`,x()}function x(){m.querySelectorAll("[data-tab]").forEach(e=>e.onclick=()=>{c.tab=e.dataset.tab,g()}),m.querySelectorAll("[data-tag]").forEach(e=>e.onclick=()=>{c.tag=e.dataset.tag,g()}),m.querySelectorAll("[data-priv]").forEach(e=>e.onclick=()=>{c.showPrivate=e.dataset.priv==="1",g()});const s=m.querySelector("#q");s&&(s.oninput=e=>{c.q=e.target.value;const n=e.target.selectionStart;g();const t=m.querySelector("#q");t&&(t.focus(),t.setSelectionRange(n,n))})}g();
