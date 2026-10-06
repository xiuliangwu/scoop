(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const se={lastUpdated:"2026-10-06",field:"无线感知 / 普适计算",maintainers:["xiuliangwu"],dataPolicy:"无法核实的数据宁可不填，也不用估算。留空会在页面上显示为「暂无核实数据」。"},ae={openaccept:{name:"OpenAccept",url:"https://openaccept.org/",tier:3,desc:"社区维护的录用率数据库，收录年份较全"},official:{name:"会议官网",tier:1,desc:"CFP、征稿说明、官方统计"},acm:{name:"ACM Digital Library",url:"https://dl.acm.org/",tier:2,desc:"官方论文集与录用统计"},ccf:{name:"CCF 推荐目录",url:"https://www.ccf.org.cn/Academic_Evaluation/By_category/",tier:2,desc:"中国计算机学会推荐国际会议期刊目录"},wiki:{name:"Wikipedia",tier:3,desc:"成立年份等背景事实"},editor:{name:"编辑判断",tier:4,desc:"基于征稿范围和历年录用论文的解读，非官方数据"}},ne=[{id:"wifi-sensing",name:"WiFi 感知",color:"blue"},{id:"mmwave-radar",name:"毫米波雷达",color:"blue"},{id:"device-free",name:"无设备感知",color:"teal"},{id:"localization",name:"定位追踪",color:"green"},{id:"ubiquitous",name:"普适计算",color:"purple"},{id:"mobile-systems",name:"移动系统",color:"amber"},{id:"iot-sensing",name:"物联网感知",color:"coral"},{id:"wireless-network",name:"无线网络",color:"pink"},{id:"signal-processing",name:"信号处理",color:"gray"},{id:"embedded",name:"嵌入式",color:"gray"},{id:"har",name:"活动识别",color:"teal"},{id:"wearable",name:"可穿戴",color:"pink"},{id:"privacy",name:"感知隐私",color:"red"}],ie=[{id:"ubicomp",name:"ACM International Joint Conference on Pervasive and Ubiquitous Computing",shortName:"UbiComp",type:"conference",rank:"领域旗舰",tags:["ubiquitous","har","mobile-systems"],link:"https://www.ubicomp.org/",dblp:"https://dblp.uni-trier.de/db/conf/ubicomp/",founded:2003,frequency:"每年（与 ISWC 联合）",organizer:"ACM（CMU 主导）",ccf:"A",description:"普适计算领域最核心的会议，UbiComp / ISWC 联合举办，另有 SEASONAL 独立分会场。学术影响力在这个领域内最高。",values:{hci:5,sensing:4,systems:3,mobile:4,hardware:2,theory:3},valuesNote:"UbiComp 以「人」为中心，强调技术与社会体验的结合。HCI 属性远强于系统工程，纯系统部署类工作竞争力较弱。",timeline:{cycle:"每年 10-11 月",months:"提前 5 个月征稿",bufferMonths:1},submission:{pageLimit:"主会 10 页 + 1 页参考文献",reviewModel:"double-blind",rebuttal:"有",tracks:["Wearable Computing","Sensing","HCI & Wellbeing","Ubiquitous Computing"],extra:"三轮滚动征稿（2月/ 5 月 / 11 月）"},acceptanceStats:{source:"openaccept",confidence:"medium",lastVerified:"2026-10-06",note:"OpenAccept 数据止于 2020 年，近 years 需查官网",history:[{year:2020,submitted:600,accepted:121,rate:20.17},{year:2019,submitted:700,accepted:176,rate:25.14},{year:2018,submitted:757,accepted:207,rate:27.34},{year:2017,submitted:568,accepted:120,rate:21.13},{year:2016,submitted:389,accepted:100,rate:25.71},{year:2015,submitted:394,accepted:101,rate:25.63}],status:"complete",coverage:{from:2015,to:2020,years:6}},tips:"三轮中第一轮通常竞争最小。Sensing track 对无线感知类工作最对口。审稿周期约 5-6 个月，要留足等待时间。",ccfByYear:[{system:"CCF",year:2022,rank:"A"},{system:"CCF",year:2026,rank:"A"}],editions:[{year:2026,link:"https://www.ubicomp.org/ubicomp-iswc-2026",accepted:!0,timezone:"AoE",place:"China, Shanghai",conferenceDate:"October 11-15, 2026",submissions:[{round:"R1",abstract:"2026-02-01",paper:"2026-02-02",notification:"2026-07-26"},{round:"R2",abstract:"2026-05-01",paper:"2026-05-02",notification:"2026-07-26"}],timeline:[{type:"conference",date:"2026-10-11",comment:"会议召开"}]},{year:2025,link:"https://www.ubicomp.org/ubicomp-iswc-2025",accepted:!1,timezone:"AoE",place:"China",conferenceDate:"October 2025",submissions:[{round:"R1",paper:"2025-02-01",notification:"2025-07-15"}],timeline:[]}],relations:{similar:[{id:"imwut",why:"同属 UbiComp 旗下，主题几乎一致"}],alternative:[{id:"percom",why:"普适计算主题重叠，PerCom 偏通信与无设备感知"},{id:"mobisys",why:"移动感知议题相近，MobiSys 偏系统性能"}],related:[{id:"ndss",why:"感知隐私方向的出口"},{id:"imwut-j",why:"同源期刊版"}]}},{id:"percom",name:"IEEE International Conference on Pervasive Computing and Communication",shortName:"PerCom",type:"conference",rank:"领域旗舰",tags:["ubiquitous","device-free","localization"],link:"https://percom.org/",dblp:"https://dblp.uni-trier.de/db/conf/percom/",founded:2002,frequency:"每年 3 月",organizer:"IEEE",ccf:"B",description:"普适计算与通信交叉的经典会议，已办 25 届。设备无关感知（device-free sensing）是其传统强项，定位与追踪议题也很活跃。",values:{hci:3,sensing:5,systems:4,mobile:3,hardware:4,theory:3},valuesNote:"强调「无处不在」的通信与感知基础设施，device-free sensing 是其标志性议题。强制线下报告这一点对时间成本影响很大。",timeline:{cycle:"每年 3 月",months:"提前 6 个月征稿",bufferMonths:1},submission:{pageLimit:"9 页正文 + 1 页参考文献",reviewModel:"double-blind",rebuttal:"有（11 月下旬收到早期拒稿通知或 rebuttal 邀请）",tracks:["WIP","PhD Forum","Workshops","Tutorials"],extra:"**强制线下报告**：无签证/健康等特殊情况豁免，论文需至少一位作者注册并到场，否则不进 IEEE Digital Library"},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 与 CCFDDL 均未收录此会议的公开录用统计",status:"missing",lastChecked:"2026-10-06"},tips:"强制线下是最大的隐性成本，申签证要留出时间。接受率约 15%（社区数据，未核实）。有 rebuttal 环节，被拒的论文有二次机会。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2027,link:"https://percom2027.hotcrp.com/",accepted:!0,timezone:"AoE",place:"Goa, India",conferenceDate:"March 08-12, 2027",submissions:[{round:"注册",abstract:"2026-09-04",paper:"2026-09-11"},{round:"Rebuttal",paper:"2026-11-27"}],timeline:[{type:"notification",date:"2026-12-18",comment:"最终通知"},{type:"conference",date:"2027-03-08",comment:"会议召开"}]}],relations:{similar:[{id:"ubicomp",why:"普适计算领域双旗舰"}],alternative:[{id:"sensys",why:"无设备感知可投两者，PerCom 偏通信基础设施"},{id:"imwut",why:"主题重叠，IMWUT 周期更短"}],related:[]}},{id:"ipsn",name:"ACM/IEEE International Conference on Information Processing in Sensor Networks",shortName:"IPSN",type:"conference",rank:"领域重要",tags:["iot-sensing","embedded","wireless-network"],link:"https://ipsn.acm.org/",dblp:"https://dblp.uni-trier.de/db/conf/ipsn/",founded:2004,frequency:"每年 5 月",organizer:"ACM/IEEE",ccf:"B",description:"传感器网络方向最顶的会议。偏底层网络算法与分布式设计，理论性强的论文更受青睐。",values:{hci:1,sensing:4,systems:5,mobile:2,hardware:4,theory:5},valuesNote:"与 SenSys 互补：IPSN 偏「算法与网络」，SenSys 偏「系统与部署」。纯感知应用类工作在这里竞争力弱。",timeline:{cycle:"每年 5 月",months:"提前 7 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Main Track","Workshop","Demo"],extra:""},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 与 CCFDDL 均未收录此会议的公开录用统计",status:"missing",lastChecked:"2026-10-06"},tips:"与 SenSys 征稿期接近，注意不要撞期。分布式算法、路由协议类创新是加分项。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2026,link:"https://ipsn.acm.org/2026/",accepted:!1,timezone:"AoE",place:"待定",conferenceDate:"May 2026",submissions:[{round:"全文",paper:"2025-10-03"}],timeline:[{type:"notification",date:"2026-02-18"}]}],relations:{similar:[{id:"sensys",why:"同为传感器系统旗舰，SenSys 偏系统部署"},{id:"mass",why:"同偏网络与定位算法"}],alternative:[{id:"percom",why:"无设备感知议题相近，PerCom 更强调普适通信"}],related:[{id:"tosn",why:"传感器网络顶刊，理论工作常见出口"}]}},{id:"sensys",name:"ACM Conference on Embedded Networked Sensor Systems",shortName:"SenSys",type:"conference",rank:"领域重要",tags:["iot-sensing","embedded","device-free"],link:"https://sensys.org/",dblp:"https://dblp.uni-trier.de/db/conf/sensys/",founded:2003,frequency:"每年 5/11 月",organizer:"ACM/IEEE",ccf:"B",description:"传感器系统方向旗舰，与 IPSN 并列。偏系统实现与真实部署，强调场景价值而非纯实验室指标。",values:{hci:2,sensing:5,systems:5,mobile:3,hardware:5,theory:3},valuesNote:"系统与硬件取向明显，实验室原型需要说明实际部署价值。2019 年后加入 IPSN-W 等分会场。",timeline:{cycle:"每年 5 月",months:"提前 6-7 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Main Track","Workshop","Demo"],extra:""},acceptanceStats:{source:"openaccept",confidence:"high",lastVerified:"2026-10-06",note:"主赛道数据，2025 年 45/235。整体录用率（含 workshop）也是 20%",history:[{year:2025,submitted:235,accepted:45,rate:19.15},{year:2023,submitted:179,accepted:35,rate:19.55},{year:2022,submitted:209,accepted:52,rate:24.88},{year:2021,submitted:139,accepted:25,rate:17.99},{year:2020,submitted:203,accepted:43,rate:21.18},{year:2019,submitted:144,accepted:28,rate:19.44},{year:2018,submitted:147,accepted:23,rate:15.65},{year:2017,submitted:152,accepted:26,rate:17.11}],status:"complete",coverage:{from:2017,to:2025,years:8}},tips:"录用率多年稳定在 17-25%，是本领域相对稳定的会议。系统类工作需要真实部署论证，评审会追问实际场景价值。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2027,link:"https://sensys.acm.org/2027/",accepted:!0,timezone:"AoE",place:"USA",conferenceDate:"May 17-20, 2027",submissions:[{round:"全文",paper:"2026-11-06"}],timeline:[{type:"conference",date:"2027-05-17",comment:"会议召开"}],statsNote:"上一届（2025）主赛道 45/235 = 19.1%"},{year:2025,link:"https://sensys.org/2025/",accepted:!1,timezone:"AoE",place:"Irvine, CA, USA",conferenceDate:"May 6-9, 2025",submissions:[{round:"全文",paper:"2025-05-28"}],timeline:[{type:"notification",date:"2025-09-08"}],stats:{submitted:235,accepted:45,rate:19.15}}],relations:{similar:[{id:"ipsn",why:"同属传感器系统，IPSN 更偏底层网络算法与理论"},{id:"mobisys",why:"同强调系统实现，SenSys 更聚焦传感"}],alternative:[{id:"ubicomp",why:"无设备感知等议题重叠，但 UbiComp 以人为中心"},{id:"imwut",why:"同属 UbiComp 系，IMWUT 评审周期短一半"}],related:[{id:"tosn",why:"SenSys 优秀论文的常见扩展出口"},{id:"tmc",why:"移动计算方向技术交叉"}]}},{id:"mobisys",name:"ACM International Conference on Mobile Systems, Applications, and Services",shortName:"MobiSys",type:"conference",rank:"领域重要",tags:["mobile-systems","ubiquitous","embedded"],link:"https://mobsys.org/",dblp:"https://dblp.uni-trier.de/db/conf/mobisys/",founded:2003,frequency:"每年 6 月",organizer:"ACM",ccf:"B",description:"移动系统方向重要会议。感知工作若强调移动场景下的系统设计（如端侧实时推理）适合投这里。",values:{hci:3,sensing:3,systems:5,mobile:5,hardware:4,theory:3},valuesNote:"系统实现和性能评估是硬要求，纯算法工作偏弱。需要真实设备上的端到端实验数据。",timeline:{cycle:"每年 6 月",months:"提前 7 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Full Paper","Short Paper","Poster","Workshop","Demonstration"],extra:"Short Paper 篇幅较短，适合系统原型类工作"},acceptanceStats:{source:"openaccept",confidence:"high",lastVerified:"2026-10-06",note:"主赛道数据",history:[{year:2025,submitted:233,accepted:42,rate:18.03},{year:2024,submitted:263,accepted:43,rate:16.35},{year:2023,submitted:198,accepted:41,rate:20.71},{year:2022,submitted:176,accepted:38,rate:21.59},{year:2021,submitted:166,accepted:36,rate:21.69},{year:2020,submitted:175,accepted:34,rate:19.43},{year:2019,submitted:172,accepted:39,rate:22.67},{year:2018,submitted:138,accepted:37,rate:26.81}],status:"complete",coverage:{from:2018,to:2025,years:8}},tips:"录用率近 8 年从 27% 降到 16%，趋势明显收紧。投之前要看清跟组里工作的匹配度。Short Paper 是性价比选择。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2026,link:"https://mobsys.org/2026/",accepted:!1,timezone:"AoE",place:"USA",conferenceDate:"June 2026",submissions:[{round:"全文",paper:"2025-12-20"}],timeline:[{type:"notification",date:"2026-03-20"}],stats:{submitted:233,accepted:42,rate:18.03}}],relations:{similar:[{id:"sensys",why:"系统实现导向相近"}],alternative:[{id:"imwut",why:"移动感知议题相近，IMWUT 评审更快"},{id:"percom",why:"移动普适感知可投两者"}],related:[{id:"tmc",why:"TMC 是 MobiSys 优秀论文的扩展出口"}]}},{id:"imwut",name:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",shortName:"IMWUT",type:"conference",rank:"领域重要",tags:["ubiquitous","har","wearable"],link:"https://dl.acm.org/journal/imwut",dblp:"https://dblp.uni-trier.de/db/journals/imwut/",founded:2017,frequency:"每年 4 期（季刊式会议）",organizer:"ACM",ccf:"B",description:"UbiComp 旗下面向所有议题的期刊式会议，季刊模式。评审周期比主会短，适合需要更快反馈或已中会议想扩展的场景。",values:{hci:5,sensing:4,systems:3,mobile:4,hardware:3,theory:3},valuesNote:"主题与 UbiComp 高度重合，但评审机制不同：逐期评审，首轮决定快（约 2-3 个月）。",timeline:{cycle:"每年 4 期",months:"全年滚动",bufferMonths:0},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Covers all UbiComp topics"],extra:"可先投会议版，再扩展投此刊"},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 与 CCFDDL 均未收录此会议的公开录用统计",status:"missing",lastChecked:"2026-10-06"},tips:"首轮决定约 2-3 个月，比 UbiComp 主会快很多。时间紧的时候是好选择。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2026,link:"https://dl.acm.org/journal/imwut",accepted:!0,timezone:"AoE",place:"Online",conferenceDate:"2026",submissions:[{round:"R1",paper:"2026-02-01"},{round:"R2",paper:"2026-05-01"},{round:"R3",paper:"2026-11-01",notification:"2027-02-01"}],timeline:[{type:"notification",date:"2026-07-26"}]}],relations:{similar:[{id:"ubicomp",why:"同属 UbiComp 系"}],alternative:[{id:"mobisys",why:"移动感知可投两者，IMWUT 周期短"}],related:[{id:"imwut-j",why:"同源期刊版"}]}},{id:"mass",name:"IEEE International Conference on Mobile Ad Hoc and Sensor Networks",shortName:"MASS",type:"conference",rank:"领域重要",tags:["wireless-network","localization","iot-sensing"],link:"https://www.ieee-mass.org/",dblp:"https://dblp.uni-trier.de/db/conf/mass/",founded:2004,frequency:"每年 10 月",organizer:"IEEE",ccf:"C",description:"移动自组织与传感器网络会议，网络侧视角较强，定位与路由类工作适合。CCF C 但在领域内认可度不错。",values:{hci:1,sensing:4,systems:4,mobile:4,hardware:3,theory:4},valuesNote:"网络协议与定位算法导向。纯感知信号处理类工作匹配度一般，适合有网络侧创新的工作。",timeline:{cycle:"每年 10 月",months:"提前 6 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Main Track","Workshop","Poster"],extra:""},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 与 CCFDDL 均未收录此会议的公开录用统计",status:"missing",lastChecked:"2026-10-06"},tips:"CCF C 但领域内认可度可以，定位算法类工作在上面认可度不错。适合作为 IPSN/SenSys 之外的备选。",ccfByYear:[{system:"CCF",year:2022,rank:"C"},{system:"CCF",year:2026,rank:"C"}],editions:[{year:2026,link:"https://www.ieee-mass.org/2026/",accepted:!1,timezone:"AoE",place:"待定",conferenceDate:"October 2026",submissions:[{round:"全文",paper:"2026-05-10"}],timeline:[{type:"notification",date:"2026-07-18"}]}],relations:{similar:[{id:"ipsn",why:"同偏网络与定位算法"}],alternative:[{id:"sensys",why:"同为传感器系统，SenSys 影响力更大"}],related:[{id:"twc",why:"理论工作可扩展投 TWC"}]}},{id:"ndss",name:"Network and Distributed System Security Symposium",shortName:"NDSS",type:"conference",rank:"领域重要",tags:["privacy","ubiquitous"],link:"https://www.ndss-symposium.org/",dblp:"https://dblp.uni-trier.de/db/conf/ndss/",founded:1994,frequency:"每年 2 月",organizer:"Internet Society (ISOC)",ccf:"A",description:"CCF A 网络安全顶会。无线感知涉及隐私泄露、侧信道攻击时，投这里影响力极大。",values:{hci:1,sensing:2,systems:4,mobile:2,hardware:3,theory:5},valuesNote:"安全视角。无线感知是近年热点方向——CSI 侧信道、无设备感知的隐私风险是活跃议题。纯感知算法工作不适合。",timeline:{cycle:"每年 2 月",months:"提前 7 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"有",tracks:["Main Track","Workshops"],extra:"两个轮次提交，间隔约 4 个月"},acceptanceStats:{source:"openaccept",confidence:"high",lastVerified:"2026-10-06",note:"2025 投稿量翻倍（1311 vs 2024 的 682），竞争明显加剧",history:[{year:2025,submitted:1311,accepted:211,rate:16.09},{year:2024,submitted:682,accepted:140,rate:20.53},{year:2023,submitted:574,accepted:94,rate:16.38},{year:2022,submitted:513,accepted:83,rate:16.18},{year:2021,submitted:573,accepted:87,rate:15.18},{year:2020,submitted:506,accepted:88,rate:17.39}],status:"complete",coverage:{from:2020,to:2025,years:6}},tips:"如果工作涉及用 CSI 做隐私推断、或感知系统的攻击面，这是主要出口。2025 年投稿量翻倍是重要信号——这个方向正在变热。",ccfByYear:[{system:"CCF",year:2022,rank:"A"},{system:"CCF",year:2026,rank:"A"}],editions:[{year:2026,link:"https://www.ndss-symposium.org/2026/",accepted:!1,timezone:"AoE",place:"USA",conferenceDate:"Feb 2026",submissions:[{round:"全文",paper:"2025-07-25"}],timeline:[{type:"notification",date:"2025-12-15"}],stats:{submitted:1311,accepted:211,rate:16.09}}],relations:{similar:[],alternative:[],related:[{id:"ubicomp",why:"感知隐私是UbiComp 近年活跃议题"}]}}],oe=[{id:"tosn",name:"ACM Transactions on Sensor Networks",shortName:"TOSN",type:"journal",rank:"领域顶刊",tags:["iot-sensing","wireless-network","localization"],link:"https://dl.acm.org/journal/tosn",dblp:"https://dblp.uni-trier.de/db/journals/tosn/",publisher:"ACM",ccf:"B",cas:"一区",if:"4.6",openAccess:"hybrid",apc:"约 2600 美元",reviewCycle:"首次决定约 3-6 个月",frequency:"每年 6 期（双月刊）",values:{hci:1,sensing:5,systems:4,mobile:2,hardware:4,theory:5},valuesNote:"传感器网络的理论和方法论出口。SenSys/IPSN 的优秀工作常被邀请扩展投这里。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},tips:"与 SenSys / IPSN 有紧密关系。会议优秀工作被邀请扩展是常见路径。",ccfByYear:[{system:"CCF",year:2022,rank:"B"}],relations:{similar:[{id:"twc",why:"无线与传感交叉，同为 CCF A/B顶刊"},{id:"tmc",why:"移动与传感方向顶刊"}],alternative:[],related:[{id:"sensys",why:"SenSys 优秀论文常被邀请扩展投TOSN"},{id:"ipsn",why:"IPSN 理论工作常见扩展出口"}]},founded:2005,pageLimit:"无页数限制，按需撰写",topicsNote:"覆盖传感器网络全栈：应用、数据存储与查询、分布式信号处理、能源管理、容错、传感网基础理论、网内处理、定位服务、低功耗硬件、网络协议、编程模型、传感融合、安全隐私等"},{id:"imwut-j",name:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",shortName:"IMWUT",type:"journal",rank:"领域顶刊",tags:["ubiquitous","har","wifi-sensing"],link:"https://dl.acm.org/journal/imwut",dblp:"https://dblp.uni-trier.de/db/journals/imwut/",publisher:"ACM",ccf:"B",cas:"一区",if:"4.6",openAccess:"hybrid",apc:"约 2600 美元",reviewCycle:"首轮决定约 2-3 个月",frequency:"每年 4 期（季刊）",values:{hci:5,sensing:4,systems:3,mobile:4,hardware:3,theory:3},valuesNote:"与 UbiComp 同一出版方，主题一致但评审独立。对无线感知的容忍度和接受度都较高。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},related:["ubicomp","imwut"],tips:"首轮 2-3 个月是本领域最快的反馈周期之一。时间紧时优先考虑。",ccfByYear:[{system:"CCF",year:2022,rank:"B"}],relations:{similar:[{id:"imwut",why:"同源会议版与期刊版"}],related:[{id:"tcadh",why:"群体感知方向"}]},founded:2017,pageLimit:"以官网为准",topicsNote:"与 UbiComp 主会同主题：可穿戴、移动系统、情境感知、健康监测、隐私、交互设计等"},{id:"tmc",name:"IEEE Transactions on Mobile Computing",shortName:"TMC",type:"journal",rank:"领域顶刊",tags:["mobile-systems","ubiquitous","embedded"],link:"https://www.computer.org/csdl/journal/tm",dblp:"https://dblp.uni-trier.de/db/journals/tmc/",publisher:"IEEE",ccf:"A",cas:"二区",if:"5.4",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 5-8 个月",frequency:"每年 12 期（月刊）",values:{hci:2,sensing:3,systems:5,mobile:5,hardware:3,theory:4},valuesNote:"移动计算顶刊。系统与算法结合的完整工作更有竞争力，纯感知应用偏弱。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},tips:"审稿周期长（5-8 个月），要做被拒后转投的时间规划。CCF A 但中科院二区。",ccfByYear:[{system:"CCF",year:2022,rank:"A"}],relations:{similar:[{id:"twc",why:"同为 CCF A 顶刊"}],alternative:[{id:"mobisys",why:"移动系统工作可投两者"}],related:[{id:"tosn",why:"传感与移动交叉"}]},founded:2002,pageLimit:"IEEE 模板常规长度",topicsNote:"移动计算系统全栈：架构、移动系统与应用、无线网络、移动感知、位置服务"},{id:"twc",name:"IEEE Transactions on Wireless Communications",shortName:"TWC",type:"journal",rank:"领域顶刊",tags:["wireless-network","signal-processing","localization"],link:"https://www.comsoc.org/publications/journals/twc",dblp:"https://dblp.uni-trier.de/db/journals/twc/",publisher:"IEEE",ccf:"A",cas:"一区",if:"5.2",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 4-6 个月",frequency:"每年 12 期（月刊）",values:{hci:1,sensing:2,systems:3,mobile:3,hardware:3,theory:5},valuesNote:"偏通信理论。纯应用型感知工作命中率低，需要有通信侧创新（波形设计、资源分配等）。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},related:["ipsn","mass"],tips:"CCF A + 中科院一区，是无线感知方向理论工作的天花板。但要求通信侧的理论创新，纯感知应用不合适。",ccfByYear:[{system:"CCF",year:2022,rank:"A"}],relations:{similar:[{id:"tmc",why:"同为 CCF A 顶刊"},{id:"tosn",why:"传感器网络顶刊，理论工作出口"}],alternative:[{id:"jsen",why:"传感器应用类工作可投此刊"}],related:[{id:"mass",why:"理论工作来源"}]},founded:2002,pageLimit:"IEEE 模板常规长度",topicsNote:"无线通信理论：波形设计与优化、资源分配、编码、MIMO、感知与通信交叉、无线网络理论"},{id:"jsen",name:"IEEE Sensors Journal",shortName:"IEEE Sensors J",type:"journal",rank:"主流期刊",tags:["mmwave-radar","signal-processing","embedded"],link:"https://ieee-sensors.org/ieee-sensors-journal/",dblp:"https://dblp.uni-trier.de/db/journals/sensj/",publisher:"IEEE",ccf:null,cas:"二区",if:"4.3",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 3-5 个月",frequency:"每年 24 期（半月刊）",values:{hci:1,sensing:5,systems:3,mobile:2,hardware:5,theory:2},valuesNote:"传感器领域务实取向。毫米波雷达实测类工作接受度高，系统创新不如算法创新看重。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},tips:"组内投稿最稳妥的期刊。实测数据完整的话命中率较高，需提前确认版面费预算。",ccfByYear:[],relations:{similar:[{id:"twc",why:"同为传感器方向，可作理论升级出口"}],alternative:[],related:[]},founded:2001,pageLimit:"IEEE 模板，常规 8–12 页",topicsNote:"传感器与测量：物理传感器、RF/毫米波传感、生物传感、传感系统实现与标定"},{id:"tcadh",name:"IEEE Transactions on Computational Social Systems",shortName:"TCADH",type:"journal",rank:"主流期刊",tags:["har","ubiquitous"],link:"https://www.computer.org/csdl/journal/sc",dblp:"https://dblp.uni-trier.de/db/journals/tcadh/",publisher:"IEEE",ccf:null,cas:"三区",if:"2.5",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 2-4 个月",frequency:"每年 4 期（季刊）",values:{hci:4,sensing:3,systems:2,mobile:2,hardware:1,theory:3},valuesNote:"社交与群体行为计算方向。涉及群体活动感知、社交计算类工作时可考虑。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},tips:"分区偏低，适合作为毕业前的时间兜底，不适合作为主要成果。审稿 2-4 个月较快。",ccfByYear:[],relations:{similar:[],alternative:[{id:"imwut-j",why:"群体行为感知类工作可投此刊"}],related:[{id:"imwut-j",why:"同为群体感知方向"}]},founded:2014,pageLimit:"IEEE 模板常规长度",topicsNote:"计算社会科学：群体行为建模、社交媒体分析、群体感知、隐私与公平性"}],$={_meta:se,sources:ae,tags:ne,conferences:ie,journals:oe},ce=[],re={reports:ce},le=[{id:"wireless-sensing",name:"无线感知",enName:"Wireless Sensing",color:"blue",summary:"用射频信号感知物理世界与人体状态，不依赖佩戴设备或摄像头。",topics:[{id:"wifi-sensing",name:"WiFi / CSI 感知",desc:"利用 WiFi 信道状态信息做无设备人体感知"},{id:"mmwave-radar",name:"毫米波雷达感知",desc:"FMCW 雷达点云、雷达微多普勒、雷达感知呼吸心跳"},{id:"device-free",name:"无设备感知",desc:"设备无关的被动感知，PerCom 的传统强项"},{id:"rf-sensing",name:"通用射频感知",desc:"UWB、RFID、LoRa 等其他射频媒介的感知应用"},{id:"localization",name:"定位与追踪",desc:"室内定位、人员追踪、目标定位"}],venueIds:["imwut","imwut-j","ipsn","mass","percom","sensys","tmc","tosn","ubicomp"]},{id:"ubiquitous-computing",name:"普适计算",enName:"Ubiquitous Computing",color:"purple",summary:"计算隐入环境，设备从显式工具变为随时可用的基础设施。",topics:[{id:"context-awareness",name:"情境感知",desc:"环境与用户状态的建模、推理与自适应"},{id:"smart-environment",name:"智能环境",desc:"智能家居、智能空间、环境感知系统"},{id:"wearable",name:"可穿戴计算",desc:"智能手表、穿戴设备、纺织与柔性电子"},{id:"health-sensing",name:"健康感知",desc:"非接触生理监测、慢病管理、心理状态识别"},{id:"privacy",name:"感知隐私",desc:"侧信道、隐私泄露攻击与防护"}],venueIds:["imwut","imwut-j","ndss","percom","tcadh","tmc","ubicomp"]},{id:"mobile-systems",name:"移动系统",enName:"Mobile Systems",color:"amber",summary:"移动设备上的系统级设计，关注性能、能耗与真实部署。",topics:[{id:"on-device-ai",name:"端侧智能",desc:"在手机和嵌入式设备上部署推理模型"},{id:"system-design",name:"系统设计",desc:"移动系统的架构与性能优化"},{id:"cross-device",name:"跨设备协同",desc:"多设备联动与群体感知"}],venueIds:["imwut","imwut-j","mobisys","percom","tmc","ubicomp"]},{id:"iot-systems",name:"物联网与传感系统",enName:"IoT & Sensor Systems",color:"coral",summary:"传感器网络与物联网的系统实现，强调真实部署与长期运行。",topics:[{id:"sensor-network",name:"传感器网络",desc:"网络协议、路由、能量管理"},{id:"edge-inference",name:"边缘推理",desc:"感知任务的端侧与边缘侧计算"},{id:"real-deployment",name:"真实部署",desc:"实际环境中的系统落地与验证"},{id:"embedded",name:"嵌入式实现",desc:"软硬件协同、实时性、平台适配"}],venueIds:["sensys","ipsn","mass","tosn","jsen"]},{id:"signal-processing",name:"信号处理",enName:"Signal Processing",color:"gray",summary:"感知信号的理论与方法基础，跨无线感知和雷达系统的公共底座。",topics:[{id:"radar-dsp",name:"雷达信号处理",desc:"点云处理、目标检测、杂波抑制"},{id:"estimation",name:"参数估计",desc:"到达时间、角度、距离估计"},{id:"waveform",name:"波形设计",desc:"FMCW 参数优化、波形与资源联合设计"}],venueIds:["imwut","imwut-j","jsen","tmc","tosn","twc"]}],de={areas:le},z=[...$.conferences,...$.journals],X=$.conferences,Q=$.tags,B=de.areas,F=re.reports,x=$._meta,M=$.sources,I=Object.fromEntries(z.map(i=>[i.id,i])),pe=Object.fromEntries(B.map(i=>[i.id,i])),K=Object.fromEntries(Q.map(i=>[i.id,i])),Z=i=>{var e;return((e=K[i])==null?void 0:e.name)||i},W=i=>{const e=K[i];return`<span class="badge b-${(e==null?void 0:e.color)||"gray"}">${Z(i)}</span>`},O=[["hci","HCI / 以人为中心"],["sensing","感知贡献"],["systems","系统实现"],["mobile","移动场景"],["hardware","硬件实现"],["theory","理论创新"]],ee=i=>{const e=i.ccfByYear||[];return e.length?e.map(c=>`<span class="badge b-teal">${n(c.system)} ${c.year}: ${n(c.rank)}</span>`).join(" "):'<span class="badge b-gray">未收录 CCF</span>'},j=i=>{const e=i.ccfByYear||[];return e.length?e.map(c=>c.system+" "+c.year+": "+c.rank).join(" / "):"未收录"},ue=864e5,P=i=>{const[e,c,d]=i.split("-").map(Number);return Math.round((new Date(e,c-1,d)-new Date)/ue)},k=i=>i?i.replace(/-/g,"."):"—",n=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),me=(i,e)=>{var o;if(!i)return"";const c=i.source?((o=M[i.source])==null?void 0:o.name)||i.source:"—",d={high:"高置信",medium:"中等置信",low:"低置信"}[i.confidence]||"—",t={complete:"数据完整",partial:"部分年份",missing:"未收录",none:"不公开"}[i.status]||"";return i.status==="missing"||i.status==="none"?'<div class="src-note"><span class="conf conf-none"><span class="conf-dot"></span>'+t+"</span>"+(i.lastChecked?"<span>核对于 "+n(i.lastChecked)+"</span>":"")+(e?"<span>"+n(e)+"</span>":"")+"</div>":'<div class="src-note"><span class="conf conf-'+i.confidence+'"><span class="conf-dot"></span>'+d+"</span><span>来源："+n(c)+"</span>"+(i.lastVerified?"<span>核对于 "+n(i.lastVerified)+"</span>":"")+(e?"<span>"+n(e)+"</span>":"")+"</div>"},l={tab:"explore",area:null,venue:null,tag:"all",q:"",showPrivate:!1,view:"table",cmp:["sensys","ubicomp","ipsn"]},g=document.getElementById("app"),U={abstract:"摘要",paper:"全文",rebuttal:"Rebuttal",notification:"结果",camera:"终稿",conference:"召开"},T={abstract:"b-teal",paper:"b-blue",rebuttal:"b-amber",notification:"b-green",camera:"b-gray",conference:"b-purple"};function he(){const i=[];for(const c of $.conferences)for(const d of c.editions||[]){for(const t of d.timeline||[]){if(!t.date)continue;const o=P(t.date);o<-7||o>400||i.push({venue:c,date:t.date,days:o,label:U[t.type]||t.type,color:T[t.type]||"b-gray",round:"",tz:d.timezone||""})}for(const t of d.submissions||[]){for(const o of["abstract","paper","rebuttal"]){if(!t[o])continue;const s=P(t[o]);s<-7||s>400||i.push({venue:c,date:t[o],days:s,label:U[o]||o,color:T[o]||"b-gray",round:t.round||"",tz:d.timezone||""})}if(t.notification){const o=P(t.notification);o>=-7&&o<=400&&i.push({venue:c,date:t.notification,days:o,label:U.notification,color:T.notification,round:t.round||"",tz:d.timezone||""})}}}const e=c=>c.label==="全文"||c.label==="摘要"?0:1;return i.sort((c,d)=>e(c)-e(d)||c.days-d.days)}function te(i){const e=i.venueIds.map(s=>I[s]).filter(Boolean),c=e.filter(s=>s.type==="conference"),d=e.filter(s=>s.type==="journal"),t=e.filter(s=>s.acceptanceStats&&s.acceptanceStats.history&&s.acceptanceStats.history.length).length;let o=null;for(const s of c)for(const a of s.editions||[])for(const r of a.submissions||[])for(const u of["paper","abstract"]){if(!r[u])continue;const p=P(r[u]);p<0||p>400||(!o||p<o.d)&&(o={d:p,name:s.shortName,date:r[u]})}return'<div class="area-card b-'+i.color+'" data-area="'+i.id+'"><h3>'+n(i.name)+'</h3><div class="en">'+n(i.enName)+"</div><p>"+n(i.summary)+'</p><div class="area-stats"><span>'+i.topics.length+" 子主题</span><span>"+c.length+" 会议 · "+d.length+" 期刊</span><span>"+t+"/"+e.length+" 有录用率数据</span>"+(o?"<span>最近截稿 "+n(o.name)+" "+k(o.date)+"（"+o.d+" 天）</span>":"")+"</div></div>"}function V(){if(l.area)return be(l.area);const i=B.map(te).join("");return`
  <div class="page-head">
    <h1>研究领域</h1>
    <p>${x.field} · 从你的研究方向出发，看这个领域主要往哪些会议和期刊投稿</p>
  </div>
  <div class="banner">
    <b>数据更新于 ${x.lastUpdated}</b>
    <span>录用率等数据均标注来源与置信度。价值维度评分是编辑解读，不是官方数据。</span>
  </div>
  <div class="area-grid">${i}</div>`}function be(i){const e=pe[i];if(!e)return l.area=null,V();const c=e.venueIds.map(a=>I[a]).filter(Boolean),d=c.filter(a=>a.type==="conference"),t=c.filter(a=>a.type==="journal"),o=e.topics.map(a=>{const r=c.filter(u=>{var p;return(p=u.tags)==null?void 0:p.some(f=>a.id.includes(f)||f.includes(a.id.split("-")[0]))});return`<div class="topic-item">
      <div><b>${n(a.name)}</b><div style="font-size:11.5px;color:var(--text-3);margin-top:1px">${n(a.desc)}</div></div>
      <span>${r.length?r.length+" 个相关 venue":"—"}</span>
    </div>`}).join(""),s=a=>{var p;const r=a.acceptanceStats,u=(p=r==null?void 0:r.history)==null?void 0:p[0];return`<div class="rel-card" data-venue="${a.id}">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px">
        <span class="n">${n(a.shortName)}</span>
        <span class="badge b-gray">${a.type==="conference"?"会议":"期刊"}</span>
      </div>
      <div class="d">${j(a)}${a.cas?" · 中科院"+a.cas:""}</div>
      <div class="d">${u?`近年录用率 ${u.rate}%`:"录用率暂无核实数据"}</div>
    </div>`};return`
  <button class="back-link" data-back="areas">← 返回研究领域</button>
  <div class="page-head">
    <h1>${n(e.name)}</h1>
    <p>${n(e.enName)} · ${n(e.summary)}</p>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>子主题</h2><span class="hint">${e.topics.length} 个</span></div>
    <div class="topic-list">${o}</div>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>相关会议</h2><span class="hint">${d.length} 个 · 点击查看详情</span></div>
    ${d.length?`<div class="rel-grid">${d.map(s).join("")}</div>`:'<p class="no-data">暂无</p>'}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>相关期刊</h2><span class="hint">${t.length} 本</span></div>
    ${t.length?`<div class="rel-grid">${t.map(s).join("")}</div>`:'<p class="no-data">暂无</p>'}
  </div>`}function ye(i){var N,q,D,S,L,Y,_,H;const e=I[i];if(!e)return l.venue=null,V();const c=e.type==="conference",d=e.acceptanceStats||{},t=(d.history||[]).slice().sort((m,b)=>m.year-b.year),o=(()=>{const m=d.coverage;if(!m||!t.length)return"";const b=t.map(h=>h.year),y=[];for(let h=m.from;h<=m.to;h++)b.includes(h)||y.push(h);let w="覆盖 "+m.from+"–"+m.to+"（"+m.years+" 年）";return y.length&&(w+="，缺 "+y.join("/")),m.to<new Date().getFullYear()-1&&(w+=" · 数据可能滞后"),w})(),s=[["类型",c?"会议":"期刊"],["主办",c?e.organizer:e.publisher],["成立年份",e.founded||"—"],["周期",e.frequency||"—"],["分级",j(e)],c?["页数限制",((N=e.submission)==null?void 0:N.pageLimit)||"—"]:["中科院分区",e.cas||"—"],c?["评审模式",((q=e.submission)==null?void 0:q.reviewModel)||"—"]:["影响因子",e.if||"—"],c?["Rebuttal",((D=e.submission)==null?void 0:D.rebuttal)||"—"]:["审稿周期",e.reviewCycle||"—"]],a=(()=>{if(!t.length)return"";const m=Math.max.apply(null,t.map(y=>y.submitted));return'<div class="trend">'+t.map(function(y){const w=Math.max(4,Math.round(y.submitted/m*56)),h=Math.max(3,Math.round(y.accepted/m*56));return'<div class="trend-col"><div class="trend-bars" title="'+(y.year+" 投稿 "+y.submitted+"，录用 "+y.accepted)+'"><span class="tb sub" style="height:'+w+'px"></span><span class="tb" style="height:'+h+'px"></span></div><span class="trend-x">'+String(y.year).slice(2)+"</span></div>"}).join("")+"</div>"})(),r=t.slice().reverse().map(m=>"<tr><td>"+m.year+'</td><td class="num">'+m.submitted+'</td><td class="num">'+m.accepted+'</td><td class="num">'+m.rate+"%</td></tr>").join(""),u=t.length?'<table class="data"><thead><tr><th>年份</th><th class="num">投稿</th><th class="num">录用</th><th class="num">录用率</th></tr></thead><tbody>'+r+"</tbody></table>":"",p=c?(()=>{const m=(e.editions||[]).slice().sort((b,y)=>y.year-b.year);return m.length?m.map(function(b){const y=[];for(const h of b.submissions||[]){const R=h.round?"<b>"+n(h.round)+"</b>":"—";y.push("<tr><td>"+R+"</td><td>"+(h.abstract?k(h.abstract):"—")+"</td><td>"+(h.paper?k(h.paper):"—")+"</td><td>"+(h.rebuttal?k(h.rebuttal):"—")+"</td><td>"+(h.notification?k(h.notification):"—")+"</td></tr>")}const w=(b.timeline||[]).map(function(h){return'<span class="tl-ev"><span class="badge '+(T[h.type]||"b-gray")+'">'+n(U[h.type]||h.type)+"</span>"+k(h.date)+(h.comment?' <span style="color:var(--text-3)">'+n(h.comment)+"</span>":"")+"</span>"}).join("");return'<div class="edition"><div class="ed-head"><span class="ed-year">'+b.year+" 届"+(b.accepted?'<span class="badge b-green">征稿中</span>':"")+'</span><span class="ed-meta">'+(b.place?n(b.place)+" · ":"")+(b.timezone?"时区 "+n(b.timezone):"")+(b.conferenceDate?" · "+n(b.conferenceDate):"")+"</span></div>"+(y.length?'<table class="data"><thead><tr><th>轮次</th><th>摘要</th><th>全文</th><th>Rebuttal</th><th>结果</th></tr></thead><tbody>'+y.join("")+"</tbody></table>":"")+(w?'<div class="tl">'+w+"</div>":"")+(b.statsNote?'<div class="src-note" style="margin-top:6px">'+n(b.statsNote)+"</div>":"")+(b.link?'<div class="src-note" style="margin-top:6px"><a href="'+b.link+'" target="_blank" rel="noopener">该届官网 ↗</a></div>':"")+"</div>"}).join(""):'<p class="no-data">暂无投稿周期数据</p>'})():"",f={similar:{title:"Similar",desc:"领域和贡献模式相近，可作为同类替代"},alternative:{title:"Alternative",desc:"研究问题类似但投稿侧重点不同，值得换个角度考虑"},related:{title:"Related",desc:"技术或研究社区存在交叉"}},v=(()=>{const m=e.relations||{},b=[];for(const y of["similar","alternative","related"]){const w=m[y]||[];if(!w.length)continue;const h=f[y],R=w.map(function(G){const E=I[G.id];if(!E)return"";const J=E.acceptanceStats&&E.acceptanceStats.history&&E.acceptanceStats.history[0];return'<div class="rel-card" data-venue="'+E.id+'"><div class="n">'+n(E.shortName)+'</div><div class="d">'+j(E)+(E.cas?" · 中科院"+E.cas:"")+'</div><div class="d">'+(J?"录用率 "+J.rate+"%":"录用率未核实")+'</div><div class="why">'+n(G.why)+"</div></div>"}).join("");b.push('<div class="rel-group"><div class="rel-head"><span class="rel-title">'+h.title+'</span><span class="rel-desc">'+h.desc+'</span></div><div class="rel-grid">'+R+"</div></div>")}return b.length?b.join(""):'<p class="no-data">暂无关联 venue</p>'})(),A=B.filter(m=>m.venueIds.includes(e.id));return`
  <button class="back-link" data-back="venues">← 返回会议与期刊列表</button>
  <div class="profile-head">
    <h1>${n(e.shortName)}</h1>
    <div class="full">${n(e.name)}</div>
    <div class="profile-badges">
      <span class="badge ${c?"b-blue":"b-purple"}">${c?"会议":"期刊"}</span>
      ${ee(e)}
      ${e.cas?`<span class="badge b-coral">中科院${e.cas}</span>`:""}
      <span class="badge b-gray">${n(e.rank)}</span>
      ${e.if?`<span class="badge b-amber">IF ${e.if}</span>`:""}
    </div>
    <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
      ${(e.tags||[]).map(W).join("")}
    </div>
    <div style="margin-top:12px;display:flex;gap:14px;flex-wrap:wrap;font-size:12.5px">
      <a href="${e.link}" target="_blank" rel="noopener">官网 ↗</a>
      ${e.dblp?`<a href="${e.dblp}" target="_blank" rel="noopener">DBLP ↗</a>`:""}
      ${e.apc?`<span style="color:var(--text-3)">版面费 ${n(e.apc)}</span>`:""}
    </div>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>基本信息</h2></div>
    <div class="facts">${s.map(([m,b])=>`<div class="fact"><div class="k">${n(m)}</div><div class="v">${n(b)}</div></div>`).join("")}</div>
    <p style="margin-top:14px">${n(e.description)}</p>
    ${e.topicsNote?`<div style="margin-top:12px">
      <div style="font-size:11.5px;color:var(--text-3);margin-bottom:4px">征稿范围</div>
      <p style="font-size:12.5px">${n(e.topicsNote)}</p>
    </div>`:""}
  </div>

  <div class="mod">
    <div class="mod-head">
      <h2>这个 venue 看重什么</h2>
      <span class="hint">编辑解读 · 非官方数据</span>
    </div>
    ${O.map(([m,b])=>{var w;const y=((w=e.values)==null?void 0:w[m])||0;return`<div class="rating-row">
        <span class="dim">${n(b)}</span>
        <span class="stars">${[1,2,3,4,5].map(h=>`<span class="star ${h<=y?"on":""}"></span>`).join("")}</span>
        <span class="val">${y}/5</span>
      </div>`}).join("")}
    ${e.valuesNote?`<div class="editor-note">${n(e.valuesNote)}</div>`:""}
    ${A.length?`<div class="src-note" style="margin-top:10px">所属领域：${A.map(m=>n(m.name)).join("、")}</div>`:""}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>数据来源</h2><span class="hint">每个字段的可信度</span></div>
    <table class="data">
      <thead><tr><th>字段</th><th>值</th><th>来源</th><th>置信度</th></tr></thead>
      <tbody>
        <tr>
          <td>CCF 分级</td>
          <td>${n(j(e))}</td>
          <td>${n(M.ccf.name)}</td>
          <td><span class="conf conf-high"><span class="conf-dot"></span>高</span></td>
        </tr>
        ${e.cas?`<tr>
          <td>中科院分区</td><td>${n(e.cas)}</td>
          <td>${n(M.ccf.name)}</td>
          <td><span class="conf conf-medium"><span class="conf-dot"></span>中（每年调整）</span></td>
        </tr>`:""}
        ${e.if?`<tr>
          <td>影响因子</td><td>${n(e.if)}</td>
          <td>期刊官网</td>
          <td><span class="conf conf-medium"><span class="conf-dot"></span>中（每年更新）</span></td>
        </tr>`:""}
        <tr>
          <td>价值维度评分</td><td>6 项× 1-5 星</td>
          <td>${n(M.editor.name)}</td>
          <td><span class="conf conf-low"><span class="conf-dot"></span>编辑解读</span></td>
        </tr>
        <tr>
          <td>录用率</td>
          <td>${(S=d.history)!=null&&S.length?d.history.length+" 年数据":"暂无"}</td>
          <td>${d.source?n(((L=M[d.source])==null?void 0:L.name)||d.source):"—"}</td>
          <td><span class="conf conf-${d.confidence||"none"}"><span class="conf-dot"></span">${{high:"高",medium:"中",low:"低",none:"无数据"}[d.confidence||"none"]}</span></td>
        </tr>
        <tr>
          <td>投稿要求</td><td>见投稿流程模块</td>
          <td>${n(e.organizer||e.publisher||"官网")}</td>
          <td><span class="conf conf-none"><span class="conf-dot"></span>请以官网为准</span></td>
        </tr>
      </tbody>
    </table>
    <div class="src-note" style="margin-top:10px">${n(x.dataPolicy)}</div>
  </div>

  ${c?`<div class="mod">
    <div class="mod-head"><h2>投稿周期（历届）</h2><span class="hint">时区与轮次均按官方标注</span></div>
    ${p}
    ${(_=(Y=e.submission)==null?void 0:Y.tracks)!=null&&_.length?`<div style="margin-top:12px">
      <div style="font-size:11.5px;color:var(--text-3);margin-bottom:4px">Track / 投稿类型</div>
      <div style="display:flex;gap:5px;flex-wrap:wrap">${e.submission.tracks.map(m=>`<span class="badge b-gray">${n(m)}</span>`).join("")}</div>
    </div>`:""}
    ${(H=e.submission)!=null&&H.extra?`<div class="editor-note">${n(e.submission.extra)}</div>`:""}
    <div class="src-note" style="margin-top:10px">投稿要求以${n(e.organizer||e.publisher)}官网为准，此处仅作速查</div>
  </div>`:""}

  <div class="mod">
    <div class="mod-head">
      <h2>${c?"录用率与竞争程度":"审稿周期"}</h2>
      <span class="hint">${d.status==="none"?"该刊不公开录用数据":t.length?o:"未找到公开数据"}</span>
    </div>
    ${t.length?`${a}
      <div style="display:flex;gap:14px;font-size:11.5px;color:var(--text-3);margin:6px 0 14px">
        <span><span style="display:inline-block;width:8px;height:8px;background:var(--border-strong);border-radius:2px;margin-right:4px"></span>投稿数</span>
        <span><span style="display:inline-block;width:8px;height:8px;background:var(--accent);border-radius:2px;margin-right:4px"></span>录用数</span>
      </div>
      ${u}
    `:`<div class="missing-data">
        <div class="md-title">${d.status==="none"?"该刊录用率通常不公开":"未找到可靠公开录用统计"}</div>
        <div class="md-note">${n(d.note||"")}</div>
        <div class="md-check">上次核对：${n(d.lastChecked||x.lastUpdated)}</div>
      </div>`}
    ${me(d,t.length?o:"")}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>关联 venue</h2><span class="hint">按关系类型分组</span></div>
    ${v}
  </div>

  ${e.tips?`<div class="mod">
    <div class="mod-head"><h2>组内经验</h2><span class="hint">来自组内投稿记录</span></div>
    <p>${n(e.tips)}</p>
  </div>`:""}`}function ve(){const i=[{n:1,when:"投稿前 2–3 个月",title:"明确投稿目标",lead:"决定「投哪里」是投稿流程里最关键的一步，决定了后面所有时间安排。",body:`
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
</ul>`},{n:2,when:"投稿前 1 个月",title:"注册与账号",lead:"各会议的投稿系统不同，多数在截稿前 1–2 周才开放注册。",body:`
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
</ul>`},{n:3,when:"投稿前 1 周",title:"格式与模板",lead:"格式问题最容易被忽略，也最容易因为格式被 desk reject。",body:`
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
<p>下方表格列出已核实的部分。其余会议请见各 Venue 页或官网 CFP。</p>`},{n:4,when:"截稿日前",title:"提交",lead:"截稿时间看的是服务器接收时间，不是你的完成时间。",body:`
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
</ul>`},{n:5,when:"投稿后 1–6 个月",title:"审稿周期与等待",lead:"不同会议的评审周期差异很大，影响后续时间安排。",body:`
<p>下方表格列出已核实的首轮决定周期。各会议完整时间线见对应 Venue 页的「投稿周期」模块。</p>
<h4>等待期间该做什么</h4>
<ul>
<li><b>不要空等</b> —— 同步推进下一篇工作，这是审稿周期长的会议不亏的原因</li>
<li>组会定期汇报进展，保持节奏</li>
<li>如果超过预计时间 2 周仍无消息，可礼貌询问 TPC chair</li>
</ul>`},{n:6,when:"收到意见后 1 周内",title:"评审意见与 Rebuttal",lead:"拒稿是常态。UbiComp、SenSys 录用率长期在 20% 左右，被拒不代表做得差。",body:`
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
<h4>PerCom 的早期拒稿机制</h4>
<div class="editor-note">PerCom 会对没有正面评审的论文提前发出拒稿通知（early reject），此时可以立刻改投其他会议，不必等完整周期。这是好事 —— 意味着提前止损而非浪费半年。</div>`},{n:7,when:"录用后",title:"结果通知与后续",lead:"录用邮件之后还有几步，漏了任何一步都可能导致撤稿。",body:`
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
</ol>`}],e=X.map(t=>{var a,r,u,p,f,v;const o=((a=t.submission)==null?void 0:a.pageLimit)||"",s=o&&!o.includes("官网");return'<tr><td><span class="venue-link" data-venue="'+t.id+'">'+n(t.shortName)+'</span></td><td class="num">'+(s?n(o):'<span style="color:var(--text-3)">见官网</span>')+"</td><td>"+n(((r=t.submission)==null?void 0:r.reviewModel)==="double-blind"?"双盲":((u=t.submission)==null?void 0:u.reviewModel)||"—")+"</td><td>"+((f=(p=t.submission)==null?void 0:p.rebuttal)!=null&&f.startsWith("有")?'<span style="color:var(--green)">有</span>':'<span style="color:var(--text-3)">'+((v=t.submission)!=null&&v.rebuttal?"特殊":"—")+"</span>")+"</td></tr>"}).join(""),c=[{name:"UbiComp",cycle:"5–6 个月",rebuttal:!0,note:"三轮滚动征稿"},{name:"PerCom",cycle:"约 3 个月",rebuttal:!0,note:"有早期拒稿机制"},{name:"MobiSys",cycle:"约 3 个月",rebuttal:!1,note:"近年录用率收紧"},{name:"SenSys",cycle:"3–4 个月",rebuttal:!1,note:"录用率稳定"},{name:"IPSN",cycle:"待核实",rebuttal:!1,note:""},{name:"IMWUT",cycle:"约 2–3 个月",rebuttal:!1,note:"季刊模式，周期最短"},{name:"MASS",cycle:"待核实",rebuttal:!1,note:""},{name:"NDSS",cycle:"4–5 个月",rebuttal:!0,note:"两轮投稿"}].map(t=>'<tr><td><span class="venue-link" data-venue="'+(X.find(o=>o.shortName===t.name)||{}).id+'">'+n(t.name)+'</span></td><td class="num">'+(t.cycle==="待核实"?'<span style="color:var(--text-3)">待核实</span>':n(t.cycle))+"</td><td>"+(t.rebuttal?'<span style="color:var(--green)">有</span>':'<span style="color:var(--text-3)">—</span>')+'</td><td style="font-size:11.5px;color:var(--text-3)">'+n(t.note)+"</td></tr>").join(""),d=[["我是第一次投这个方向，应该先投哪个？","优先看「组内经验」里提到历史投稿的会议。没有记录时，建议先用中等档次的会议练手，拿到审稿意见后再冲旗舰会。"],["CCF B 的会议值得投吗？","值得。B 类会议（SenSys、IPSN、MobiSys）在领域内认可度不错，评审质量高，竞争比 A 类温和。见刊周期也更可预测。"],["工作看起来适合多个会议，怎么选？","用「对比」页并排看，重点看两点：评审偏好是否匹配你的贡献类型、时间线是否允许。如果时间都赶得上，优先投更对口的。"],["录用率会不会有水分？","会。不同年份、不同 track 差异很大，有些数字是社区整理的。本站已标注每个数字的来源和核对日期，请结合自己的判断。"],["站上的信息多久更新一次？","截稿日期每季度核对，CCF 分级每年更新（中科院分区通常年末调整），录用率不定期补充。页脚显示最后更新时间。"],["为什么某些会议显示「未收录」？","表示已核对但未找到可靠的公开录用统计。不同来源数据冲突时我们不展示，宁可留空也不用估算值。"],["组内 review 一般提前多久？","建议投稿前至少 5 天把完整稿发给导师和两位同门，留出改稿时间。详见「领域」页的组内协作说明。"],["我发现的信息有错怎么办？","直接在 GitHub 仓库提 PR 即可，或发给维护者。发现错就改，这是共建。"]];return`
  <div class="page-head">
    <h1>新手指南</h1>
    <p>从零开始的一次完整投稿流程 —— 覆盖从准备到提交再到审稿的全程</p>
  </div>

  <div class="banner">
    <b>使用建议</b>
    <span>首次投稿建议按顺序读一遍；已有经验可直接跳到关心的步骤。数据更新于 ${x.lastUpdated}，具体要求以各会议官网 CFP 为准。</span>
  </div>

  <section>
    <div class="sec-head">
      <h2>投稿全流程</h2>
      <span class="hint">点击展开对应步骤</span>
    </div>
    <div class="steps">
      ${i.map((t,o)=>`
      <details class="step" ${o===0?"open":""}>
        <summary>
          <span class="step-n">${t.n}</span>
          <span class="step-t">
            <b>${n(t.title)}</b>
            <span class="step-when">${n(t.when)}</span>
          </span>
          <span class="step-lead">${n(t.lead)}</span>
        </summary>
        <div class="step-body">
          ${t.body}
          ${t.n===3?'<div class="mod" style="margin:14px 0 0;padding:0;border:0"><table class="data"><thead><tr><th>会议</th><th class="num">页数限制</th><th>评审</th><th>Rebuttal</th></tr></thead><tbody>'+e+'</tbody></table><div class="src-note" style="margin-top:8px">仅列出已核实的会议，其余见各 Venue 页。页数规则以官网 CFP 为准。</div></div>':""}
          ${t.n===5?'<div class="mod" style="margin:14px 0 0;padding:0;border:0"><table class="data"><thead><tr><th>会议</th><th class="num">首轮决定</th><th>Rebuttal</th><th>备注</th></tr></thead><tbody>'+c+'</tbody></table><div class="src-note" style="margin-top:8px">审稿周期为社区观察值，个体差异较大。「待核实」表示未找到可靠公开信息。</div></div>':""}
        </div>
      </details>`).join("")}
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
      <span class="hint">${d.length} 条</span>
    </div>
    <div class="mod">
      ${d.map(([t,o],s)=>`
      <details class="faq">
        <summary><span class="faq-q">${n(t)}</span></summary>
        <div class="step-body" style="padding-left:0">${n(o)}</div>
      </details>`).join("")}
    </div>
  </section>`}function fe(){const i=l.cmp.map(t=>I[t]).filter(Boolean),e=z.map(t=>`<button class="chip ${l.cmp.includes(t.id)?"on":""}" data-cmp="${t.id}">${n(t.shortName)}</button>`).join("");if(i.length<2)return`
    <div class="page-head">
      <h1>Venue 对比</h1>
      <p>并排比较多个 venue，看清它们的区别</p>
    </div>
    <div class="banner"><b>至少选择 2 个</b><span>当前已选 ${i.length} 个</span></div>
    <div class="cmp-picker">${e}</div>
    <div class="empty" style="margin-top:16px">再选几个就能看到对比表</div>`;const c=(t,o,s)=>{const a=i.map(o);return`<tr>
      <td style="color:var(--text-2)">${n(t)}</td>
      ${a.map((r,u)=>`<td class="num">${r??"—"}</td>`).join("")}
    </tr>`},d=O.map(([t,o])=>{const s=i.map(r=>{var u;return((u=r.values)==null?void 0:u[t])||0}),a=Math.max(...s);return`<tr>
      <td style="color:var(--text-2)">${n(o)}</td>
      ${s.map(r=>`<td class="num ${r===a?"cmp-best":""}">${r}/5</td>`).join("")}
    </tr>`}).join("");return i.map(t=>{var s,a;const o=(a=(s=t.acceptanceStats)==null?void 0:s.history)==null?void 0:a[0];return o?o.rate:null}),`
  <div class="page-head">
    <h1>Venue 对比</h1>
    <p>挑 2–4 个候选并排看，找出它们真正的区别。绿色高亮为该行最高值</p>
  </div>
  <div class="cmp-picker" style="margin-bottom:16px">${e}</div>

  <div class="mod cmp-table">
    <table class="data">
      <thead><tr>
        <th>维度</th>
        ${i.map(t=>`<th class="num cmp-name" data-venue="${t.id}">${n(t.shortName)}</th>`).join("")}
      </tr></thead>
      <tbody>
        <tr><td style="color:var(--text-3)">类型</td>${i.map(t=>`<td class="num">${t.type==="conference"?"会议":"期刊"}</td>`).join("")}</tr>
        <tr><td style="color:var(--text-3)">分级</td>${i.map(t=>`<td class="num">${j(t)}</td>`).join("")}</tr>
        <tr><td style="color:var(--text-3)">中科院</td>${i.map(t=>`<td class="num">${t.cas||"—"}</td>`).join("")}</tr>
        <tr style="background:var(--surface-2)"><td colspan="${i.length+1}" style="font-size:11.5px;color:var(--text-3)">价值取向（编辑解读）</td></tr>
        ${d}
        <tr style="background:var(--surface-2)"><td colspan="${i.length+1}" style="font-size:11.5px;color:var(--text-3)">投稿事实</td></tr>
        ${c("录用率（最新）",t=>{const o=t.acceptanceStats&&t.acceptanceStats.history&&t.acceptanceStats.history[0];return o?o.rate+"%（"+o.year+"）":null})}
        ${c("数据覆盖",t=>{const o=t.acceptanceStats&&t.acceptanceStats.coverage;return o?o.from+"–"+o.to+"（"+o.years+"年）":null})}
        ${c("页数/篇幅",t=>{var o;return t.type==="conference"?(((o=t.submission)==null?void 0:o.pageLimit)||"").replace(/以官网为准/,"见官网").slice(0,22):`${t.reviewCycle||"—"}`})}
        ${c("Rebuttal",t=>{var o,s;return t.type==="conference"&&(s=(o=t.submission)==null?void 0:o.rebuttal)!=null&&s.startsWith("有")?"有":"—"})}
        <tr><td style="color:var(--text-3)">数据置信</td>${i.map(t=>{const o=t.acceptanceStats||{},s=o.confidence||"none",a={high:"高置信",medium:"中置信",low:"低置信",none:"—"}[s],r={complete:"完整",partial:"部分",missing:"未收录",none:"不公开"}[o.status]||"—";return'<td class="num"><span class="conf conf-'+s+'"><span class="conf-dot"></span>'+a+'</span><div style="font-size:11px;color:var(--text-3)">'+r+"</div></td>"}).join("")}</tr>
      </tbody>
    </table>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>关键差异</h2><span class="hint">编辑解读</span></div>
    ${i.map(t=>`<div style="padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="font-weight:500;font-size:13.5px">${n(t.shortName)}</div>
      <div style="font-size:12.5px;color:var(--text-2);margin-top:2px">${n(t.valuesNote||t.description)}</div>
    </div>`).join("")}
  </div>`}function ge(){const i=he(),e=i.filter(s=>s.label==="全文"||s.label==="摘要").slice(0,10),c=i.filter(s=>s.label!=="全文"&&s.label!=="摘要").slice(0,4),d=F.filter(s=>s.status==="accepted").length,t=s=>{const a=s.days<0||s.days<=30?"urgent":s.days<=90?"soon":"normal",r=s.days<0?"已过":s.days===0?"今天":s.days+" 天";return'<tr><td><span class="venue-link" data-venue="'+s.venue.id+'"><b>'+n(s.venue.shortName)+'</b></span></td><td style="font-size:12px">'+j(s.venue)+'</td><td><span class="badge '+(s.color||"b-gray")+'">'+n(s.label)+"</span>"+(s.round?' <span style="font-size:11px;color:var(--text-3)">'+n(s.round)+"</span>":"")+'</td><td style="font-size:12.5px">'+k(s.date)+(s.tz?' <span class="tz">'+n(s.tz)+"</span>":"")+'</td><td class="num '+a+'">'+r+"</td></tr>"},o=B.map(te).join("");return`
  <div class="hero">
    <h1>Research Venue Navigator</h1>
    <p>${n(x.field)} · 理解会议期刊定位，比较投稿目标</p>
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
        <li>${$.conferences.length} 个会议 + ${$.journals.length} 本期刊的定位对比</li>
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
      <span class="hint">论文类事件优先 · 数据更新于 ${x.lastUpdated}</span>
    </div>
    ${e.length?'<div class="mod cmp-table" style="padding:0"><table class="data"><thead><tr><th>Venue</th><th>分级</th><th>类型</th><th>日期</th><th class="num">剩余</th></tr></thead><tbody>'+e.map(t).join("")+"</tbody></table></div>":'<div class="empty">近期没有已确认的截稿日期</div>'}
    ${c.length?'<div style="margin-top:12px"><div style="font-size:11.5px;color:var(--text-3);margin-bottom:6px">其他节点（rebuttal / 结果 / 召开）</div><div class="flow">'+c.map(s=>'<span class="flow-step">'+n(s.venue.shortName)+' <span class="badge '+(s.color||"b-gray")+'">'+n(s.label)+"</span> "+k(s.date)+' <b style="color:var(--text-2)">'+(s.days>=0?s.days+"天":"已过")+"</b></span>").join("")+"</div></div>":""}
  </section>

  <section>
    <div class="sec-head">
      <h2>研究领域</h2>
      <span class="hint">从研究问题出发找venue</span>
    </div>
    <div class="area-grid">${o}</div>
  </section>

  <section>
    <div class="sec-head">
      <h2>快速对比</h2>
      <span class="hint">最多 4 个，最多 4 个维度并排</span>
    </div>
    <div class="mod">
      <div class="cmp-picker" style="margin-bottom:12px">
        ${z.slice(0,10).map(s=>'<button class="chip '+(l.cmp.includes(s.id)?"on":"")+'" data-cmp="'+s.id+'">'+n(s.shortName)+"</button>").join("")}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <span style="font-size:12.5px;color:var(--text-2)">已选 ${l.cmp.length} 个：</span>
        ${l.cmp.map(s=>{const a=I[s];return a?'<span class="badge b-blue">'+n(a.shortName)+"</span>":""}).join("")}
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
      <div class="card"><div class="card-meta">会议</div><div class="card-name">${$.conferences.length} 个</div></div>
      <div class="card"><div class="card-meta">期刊</div><div class="card-name">${$.journals.length} 本</div></div>
      <div class="card">
        <div class="card-meta">组内投稿记录</div>
        <div class="card-name">${F.length?F.length+" 条 · 命中 "+d:"待补充"}</div>
      </div>
    </div>
  </section>`}function we(){const i={};for(const a of B)for(const r of a.topics)i[r.id]={name:r.name,desc:r.desc,area:a.name},i[r.name]={name:r.name,desc:r.desc,area:a.name};const e=z.filter(a=>{if(l.tag!=="all"&&!(a.tags||[]).includes(l.tag))return!1;if(l.q){const r=l.q.toLowerCase();if(![a.shortName,a.name,a.description,(a.tags||[]).map(p=>Z(p)).join(" "),(a.tags||[]).map(p=>i[p]?i[p].name:"").join(" "),(a.tags||[]).map(p=>i[p]?i[p].desc:"").join(" ")].join(" ").toLowerCase().includes(r))return!1}return!0}),c='<div class="filters"><input type="search" id="q" placeholder="搜索会议、期刊、标签…" value="'+n(l.q)+'" /><button class="chip '+(l.tag==="all"?"on":"")+'" data-tag="all">全部</button>'+Q.map(a=>'<button class="chip '+(l.tag===a.id?"on":"")+'" data-tag="'+a.id+'">'+n(a.name)+"</button>").join("")+'<div style="margin-left:auto" class="view-switch"><button class="'+(l.view==="table"?"on":"")+'" data-view="table">表格</button><button class="'+(l.view==="card"?"on":"")+'" data-view="card">卡片</button></div></div>',d=a=>{if(a.type!=="conference")return null;let r=null;for(const u of a.editions||[])for(const p of u.submissions||[])for(const f of["abstract","paper"]){if(!p[f])continue;const v=P(p[f]);v<0||v>400||(!r||v<r.days)&&(r={days:v,date:p[f],round:p.round||"",type:f})}return r},o='<div class="mod cmp-table" style="padding:0"><table class="data"><thead><tr><th>Venue</th><th>分级</th><th class="num">录用率</th><th>数据覆盖</th><th>下一截稿</th><th>标签</th></tr></thead><tbody>'+e.map(a=>{const r=a.acceptanceStats||{},u=r.history&&r.history[r.history.length-1],p=r.coverage,f=u?"<b>"+u.rate+'%</b><div style="font-size:11px;color:var(--text-3)">'+u.year+" 年</div>":'<span style="color:var(--text-3)">'+(r.status==="none"?"不公开":"未收录")+"</span>",v=d(a),A=v?k(v.date)+'<div style="font-size:11px;color:var(--text-3)">'+n(v.type==="paper"?"全文":"摘要")+(v.round?" · "+n(v.round):"")+(v.days<=30?' · <b style="color:var(--red)">'+v.days+"天</b>":" · "+v.days+"天")+"</div>":'<span style="color:var(--text-3)">—</span>',N=p?p.from+"–"+p.to+'<div style="font-size:11px;color:var(--text-3)">'+p.years+" 年数据</div>":'<span style="color:var(--text-3)">—</span>';return'<tr><td><span class="venue-link" data-venue="'+a.id+'"><b>'+n(a.shortName)+'</b></span><div style="font-size:11px;color:var(--text-3)">'+(a.type==="conference"?"会议":"期刊")+'</div></td><td style="font-size:12px">'+j(a)+(a.cas?'<div style="font-size:11px;color:var(--text-3)">中科院'+n(a.cas)+"</div>":"")+'</td><td class="num">'+f+'</td><td style="font-size:12px">'+N+'</td><td style="font-size:12px">'+A+'</td><td style="font-size:11.5px">'+(a.tags||[]).slice(0,2).map(W).join(" ")+"</td></tr>"}).join("")+"</tbody></table></div>",s='<div class="grid c3">'+e.map(function(a){const r=a.type==="journal",u=a.acceptanceStats||{},p=u.history&&u.history[u.history.length-1],f=u.coverage,v='<span class="badge b-'+(r?"purple":"blue")+'">'+n(a.rank)+"</span>"+ee(a)+(a.cas?'<span class="badge b-coral">中科院'+a.cas+"</span>":"")+(a.if?'<span class="badge b-amber">IF '+a.if+"</span>":""),A=p?"<span>录用率 <b>"+p.rate+"%</b>（"+p.year+'）</span><span class="conf conf-'+u.confidence+'"><span class="conf-dot"></span>'+({high:"高置信",medium:"中置信",low:"低置信"}[u.confidence]||"")+"</span>":'<span style="color:var(--text-3)">'+(u.status==="none"?"录用率不公开":"录用率未收录")+"</span>"+(f?"":'<span class="conf conf-none"><span class="conf-dot"></span>已核对</span>'),N=O.map(S=>({label:S[1],v:a.values?a.values[S[0]]:0})).sort((S,L)=>L.v-S.v).slice(0,2).map(S=>"<span>"+n(S.label.split(" / ")[0])+" "+S.v+"/5</span>").join(""),q=d(a),D=r?"<span>"+n(a.publisher)+"</span><span>"+n(a.reviewCycle||"")+"</span>":q?"<span>下一截稿 "+k(q.date)+"</span>":"<span>"+n(a.frequency||"")+"</span>";return'<div class="card" data-venue="'+a.id+'"><div class="card-top"><div><div class="card-name">'+n(a.shortName)+'</div><div class="card-meta">'+n(a.name)+"</div></div></div><div>"+v+'</div><div class="card-desc">'+n(a.description)+"</div><div>"+(a.tags||[]).map(W).join(" ")+'</div><div class="card-foot">'+A+N+D+"</div></div>"}).join("")+"</div>";return`
  <div class="page-head">
    <h1>会议与期刊</h1>
    <p>${z.length} 个投稿目标的完整档案：定位、录用率、投稿周期、组内经验</p>
  </div>
  ${c}
  ${e.length?l.view==="table"?o:s:'<div class="empty">没有匹配的记录</div>'}
`}function Ce(){const i=F.filter(e=>l.showPrivate||e.public);return i.length?i.map(e=>{var t;const c={accepted:["已录用","b-green"],rejected:["已拒稿","b-red"],under_review:["在审","b-amber"],"under-review":["在审","b-amber"]}[e.status]||["—","b-gray"],d=(e.reviews||[]).map(o=>{var s,a;return`
      <div class="review-line"><span class="lbl">第 ${o.round} 轮评审意见摘要</span>${o.summary}</div>
      ${(s=o.strengths)!=null&&s.length?`<div class="review-line"><span class="lbl">认可之处</span><ul class="pts">${o.strengths.map(r=>`<li>${r}</li>`).join("")}</ul></div>`:""}
      ${(a=o.weaknesses)!=null&&a.length?`<div class="review-line"><span class="lbl">主要问题</span><ul class="pts">${o.weaknesses.map(r=>`<li>${r}</li>`).join("")}</ul></div>`:""}`}).join("");return`<div class="report">
      <div class="report-head">
        <div>
          <div class="report-title">${e.title}</div>
          <div class="card-meta">${e.venueName} · ${e.year} · ${e.member}</div>
        </div>
        <span class="badge ${c[1]}">${c[0]}</span>
      </div>
      <div class="report-grid">
        <dl class="kv"><dt>投稿日期</dt><dd>${k(e.submittedAt)}</dd></dl>
        <dl class="kv"><dt>决定日期</dt><dd>${k(e.decidedAt)}</dd></dl>
        <dl class="kv"><dt>审稿轮次</dt><dd>${e.round||1}</dd></dl>
        <dl class="kv"><dt>总耗时</dt><dd>${e.daysElapsed?e.daysElapsed+" 天":"—"}</dd></dl>
      </div>
      ${(t=e.reviews)!=null&&t.length?`<details class="review"><summary>查看审稿意见</summary><div class="review-body">${d}</div></details>`:'<div class="locked">暂无审稿意见记录</div>'}
      ${e.lessons?`<div class="lesson">${e.lessons}</div>`:""}
    </div>`}).join(""):`<div class="empty">
      <div class="empty-title">${F.length===0?"这个板块还没有内容":"当前视角下没有记录"}</div>
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
    </div>`}function ke(){return`
  <div class="page-head">
    <h1>论文战报</h1>
    <p>组内同学的投稿记录：审稿意见原文、最终结果、经验总结。经本人授权后公开</p>
  </div>
  <div class="banner">
    <b>关于隐私</b>
    <span>审稿意见属未公开评审内容，默认非公开。每条战报和每条审稿意见各有独立的 public 开关，公开部署时只展示你明确设为公开的部分。</span>
  </div>
  <div class="filters">
    <button class="chip ${l.showPrivate?"":"on"}" data-priv="0">仅公开记录</button>
    <button class="chip ${l.showPrivate?"on":""}" data-priv="1">包含私有记录（本机）</button>
  </div>
  ${Ce()}`}function $e(){return`
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
  </div>`}const Se=[["home","截止"],["explore","领域"],["venues","Venue"],["compare","对比"],["start","新手指南"],["reports","战报"],["guide","指南"]],xe='<svg class="logo-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 12 L12 21" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M7.2 20.4 A10.5 10.5 0 0 1 3.6 12.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".85"/><path d="M16.8 20.4 A10.5 10.5 0 0 0 20.4 12.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".85"/><path d="M9.6 15.6 A6 6 0 0 1 8 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".55"/><path d="M14.4 15.6 A6 6 0 0 0 16 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".55"/><circle cx="12" cy="9" r="2" fill="currentColor"/></svg>';function C(){const e={home:ge,explore:V,profile:()=>ye(l.venue),venues:we,compare:fe,start:ve,reports:ke,guide:$e}[l.tab](),c=l.tab==="explore"&&l.venue?"venues":l.tab;g.innerHTML=`
    <header>
      <div class="wrap header-in">
        <div class="logo" data-logo>
          ${xe}
          <span class="logo-text"><b>投稿知识库</b><span>Research Venue Navigator</span></span>
        </div>
        <button class="nav-toggle" data-nav-toggle aria-label="打开菜单" aria-expanded="false"><span></span></button>
        <nav id="mainnav">${Se.map(([d,t])=>`<button class="${c===d?"on":""}" data-tab="${d}">${t}</button>`).join("")}</nav>
      </div>
    </header>
    <main class="wrap">${e}</main>
    <footer><div class="wrap">
      <div class="foot-cols">
        <div>
          <div class="foot-h">数据说明</div>
          <p>CCF 分级标注年份（如「CCF 2026」），分级目录会更新。录用率来自${n(M.openaccept.name)}、CCFDDL 等公开数据库，已标注来源与核对日期。</p>
          <p>「价值维度」为编辑解读，非官方数据。「未收录」表示已核对但未找到可靠公开数据，不做估算。</p>
        </div>
        <div>
          <div class="foot-h">使用提醒</div>
          <p>截稿日期以各会议官网 CFP 为准，本站数据可能滞后。投稿决策请结合自己的判断，必要时咨询导师。</p>
          <p>发现信息有误欢迎直接提 PR 修正。</p>
        </div>
        <div>
          <div class="foot-h">维护</div>
          <p>数据更新：${x.lastUpdated}</p>
          <p>维护者：${n(x.maintainers.join("、"))}</p>
          <p>${n(x.field)}</p>
        </div>
      </div>
    </div></footer>`,Ee()}function Ee(){const i=g.querySelector("#mainnav"),e=g.querySelector("[data-nav-toggle]"),c=()=>{i&&i.classList.remove("open"),e&&e.setAttribute("aria-expanded","false")};e&&i&&(e.onclick=()=>{const s=i.classList.toggle("open");e.setAttribute("aria-expanded",s?"true":"false")});const d=g.querySelector("[data-logo]");d&&(d.onclick=()=>{l.tab="home",l.area=null,l.venue=null,c(),C()}),document.onkeydown=s=>{if(s.key==="Escape"&&c(),s.key==="/"&&document.activeElement===document.body){const a=g.querySelector(".search-lg, #q");a&&(s.preventDefault(),a.focus())}},g.querySelectorAll("[data-tab]").forEach(s=>s.onclick=()=>{l.tab=s.dataset.tab,l.area=null,l.venue=null,c(),C()}),g.querySelectorAll("[data-tag]").forEach(s=>s.onclick=()=>{l.tag=s.dataset.tag,C()}),g.querySelectorAll("[data-priv]").forEach(s=>s.onclick=()=>{l.showPrivate=s.dataset.priv==="1",C()}),g.querySelectorAll("[data-area]").forEach(s=>s.onclick=()=>{l.area=s.dataset.area,C()}),g.querySelectorAll("[data-venue]").forEach(s=>s.onclick=()=>{l.venue=s.dataset.venue,l.tab="profile",C()}),g.querySelectorAll("[data-view]").forEach(s=>s.onclick=()=>{l.view=s.dataset.view,C()}),g.querySelectorAll("[data-cmp]").forEach(s=>s.onclick=()=>{const a=s.dataset.cmp,r=l.cmp.indexOf(a);r>=0?l.cmp.splice(r,1):l.cmp.push(a),C()}),g.querySelectorAll("[data-back]").forEach(s=>s.onclick=()=>{s.dataset.back==="areas"?(l.area=null,l.tab="explore"):s.dataset.back==="venues"?(l.venue=null,l.tab="venues"):(l.venue=null,l.tab="explore"),C()});const t=g.querySelector("#q");t&&(t.oninput=s=>{l.q=s.target.value;const a=s.target.selectionStart;C();const r=g.querySelector("#q");r&&(r.focus(),r.setSelectionRange(a,a))});const o=g.querySelector("#hero-q");o&&(o.oninput=s=>{l.q=s.target.value},o.onkeydown=s=>{s.key==="Enter"&&(l.tab="venues",l.area=null,l.venue=null,C())},l.q&&(o.value=l.q))}C();
