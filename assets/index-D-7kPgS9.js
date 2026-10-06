(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();const ee={lastUpdated:"2026-10-06",field:"无线感知 / 普适计算",maintainers:["xiuliangwu"],dataPolicy:"无法核实的数据宁可不填，也不用估算。留空会在页面上显示为「暂无核实数据」。"},se={openaccept:{name:"OpenAccept",url:"https://openaccept.org/",tier:3,desc:"社区维护的录用率数据库，收录年份较全"},official:{name:"会议官网",tier:1,desc:"CFP、征稿说明、官方统计"},acm:{name:"ACM Digital Library",url:"https://dl.acm.org/",tier:2,desc:"官方论文集与录用统计"},ccf:{name:"CCF 推荐目录",url:"https://www.ccf.org.cn/Academic_Evaluation/By_category/",tier:2,desc:"中国计算机学会推荐国际会议期刊目录"},wiki:{name:"Wikipedia",tier:3,desc:"成立年份等背景事实"},editor:{name:"编辑判断",tier:4,desc:"基于征稿范围和历年录用论文的解读，非官方数据"}},te=[{id:"wifi-sensing",name:"WiFi 感知",color:"blue"},{id:"mmwave-radar",name:"毫米波雷达",color:"blue"},{id:"device-free",name:"无设备感知",color:"teal"},{id:"har",name:"活动识别",color:"teal"},{id:"localization",name:"定位追踪",color:"green"},{id:"ubiquitous",name:"普适计算",color:"purple"},{id:"mobile-systems",name:"移动系统",color:"amber"},{id:"iot-sensing",name:"物联网感知",color:"coral"},{id:"wireless-network",name:"无线网络",color:"pink"},{id:"signal-processing",name:"信号处理",color:"gray"},{id:"embedded",name:"嵌入式",color:"gray"},{id:"wearable",name:"可穿戴",color:"pink"},{id:"privacy",name:"感知隐私",color:"red"}],ae=[{id:"ubicomp",name:"ACM International Joint Conference on Pervasive and Ubiquitous Computing",shortName:"UbiComp",type:"conference",rank:"领域旗舰",tags:["ubiquitous","har","mobile-systems"],link:"https://www.ubicomp.org/",dblp:"https://dblp.uni-trier.de/db/conf/ubicomp/",founded:2003,frequency:"每年（与 ISWC 联合）",organizer:"ACM（CMU 主导）",ccf:"A",description:"普适计算领域最核心的会议，UbiComp / ISWC 联合举办，另有 SEASONAL 独立分会场。学术影响力在这个领域内最高。",values:{hci:5,sensing:4,systems:3,mobile:4,hardware:2,theory:3},valuesNote:"UbiComp 以「人」为中心，强调技术与社会体验的结合。HCI 属性远强于系统工程，纯系统部署类工作竞争力较弱。",timeline:{cycle:"每年 10-11 月",months:"提前 5 个月征稿",bufferMonths:1},submission:{pageLimit:"主会 10 页 + 1 页参考文献",reviewModel:"double-blind",rebuttal:"有",tracks:["Wearable Computing","Sensing","HCI & Wellbeing","Ubiquitous Computing"],extra:"三轮滚动征稿（2月/ 5 月 / 11 月）"},acceptanceStats:{source:"openaccept",confidence:"medium",lastVerified:"2026-10-06",note:"OpenAccept 数据止于 2020 年，近 years 需查官网",history:[{year:2020,submitted:600,accepted:121,rate:20.17},{year:2019,submitted:700,accepted:176,rate:25.14},{year:2018,submitted:757,accepted:207,rate:27.34},{year:2017,submitted:568,accepted:120,rate:21.13},{year:2016,submitted:389,accepted:100,rate:25.71},{year:2015,submitted:394,accepted:101,rate:25.63}],status:"complete",coverage:{from:2015,to:2020,years:6}},tips:"三轮中第一轮通常竞争最小。Sensing track 对无线感知类工作最对口。审稿周期约 5-6 个月，要留足等待时间。",ccfByYear:[{system:"CCF",year:2022,rank:"A"},{system:"CCF",year:2026,rank:"A"}],editions:[{year:2026,link:"https://www.ubicomp.org/ubicomp-iswc-2026",accepted:!0,timezone:"AoE",place:"China, Shanghai",conferenceDate:"October 11-15, 2026",submissions:[{round:"R1",abstract:"2026-02-01",paper:"2026-02-02",notification:"2026-07-26"},{round:"R2",abstract:"2026-05-01",paper:"2026-05-02",notification:"2026-07-26"}],timeline:[{type:"conference",date:"2026-10-11",comment:"会议召开"}]},{year:2025,link:"https://www.ubicomp.org/ubicomp-iswc-2025",accepted:!1,timezone:"AoE",place:"China",conferenceDate:"October 2025",submissions:[{round:"R1",paper:"2025-02-01",notification:"2025-07-15"}],timeline:[]}],relations:{similar:[{id:"imwut",why:"同属 UbiComp 旗下，主题几乎一致"}],alternative:[{id:"percom",why:"普适计算主题重叠，PerCom 偏通信与无设备感知"},{id:"mobisys",why:"移动感知议题相近，MobiSys 偏系统性能"}],related:[{id:"ndss",why:"感知隐私方向的出口"},{id:"imwut-j",why:"同源期刊版"}]}},{id:"percom",name:"IEEE International Conference on Pervasive Computing and Communication",shortName:"PerCom",type:"conference",rank:"领域旗舰",tags:["ubiquitous","device-free","localization"],link:"https://percom.org/",dblp:"https://dblp.uni-trier.de/db/conf/percom/",founded:2002,frequency:"每年 3 月",organizer:"IEEE",ccf:"B",description:"普适计算与通信交叉的经典会议，已办 25 届。设备无关感知（device-free sensing）是其传统强项，定位与追踪议题也很活跃。",values:{hci:3,sensing:5,systems:4,mobile:3,hardware:4,theory:3},valuesNote:"强调「无处不在」的通信与感知基础设施，device-free sensing 是其标志性议题。强制线下报告这一点对时间成本影响很大。",timeline:{cycle:"每年 3 月",months:"提前 6 个月征稿",bufferMonths:1},submission:{pageLimit:"9 页正文 + 1 页参考文献",reviewModel:"double-blind",rebuttal:"有（11 月下旬收到早期拒稿通知或 rebuttal 邀请）",tracks:["WIP","PhD Forum","Workshops","Tutorials"],extra:"**强制线下报告**：无签证/健康等特殊情况豁免，论文需至少一位作者注册并到场，否则不进 IEEE Digital Library"},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 与 CCFDDL 均未收录此会议的公开录用统计",status:"missing",lastChecked:"2026-10-06"},tips:"强制线下是最大的隐性成本，申签证要留出时间。接受率约 15%（社区数据，未核实）。有 rebuttal 环节，被拒的论文有二次机会。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2027,link:"https://percom2027.hotcrp.com/",accepted:!0,timezone:"AoE",place:"Goa, India",conferenceDate:"March 08-12, 2027",submissions:[{round:"注册",abstract:"2026-09-04",paper:"2026-09-11"},{round:"Rebuttal",paper:"2026-11-27"}],timeline:[{type:"notification",date:"2026-12-18",comment:"最终通知"},{type:"conference",date:"2027-03-08",comment:"会议召开"}]}],relations:{similar:[{id:"ubicomp",why:"普适计算领域双旗舰"}],alternative:[{id:"sensys",why:"无设备感知可投两者，PerCom 偏通信基础设施"},{id:"imwut",why:"主题重叠，IMWUT 周期更短"}],related:[]}},{id:"ipsn",name:"ACM/IEEE International Conference on Information Processing in Sensor Networks",shortName:"IPSN",type:"conference",rank:"领域重要",tags:["iot-sensing","embedded","wireless-network"],link:"https://ipsn.acm.org/",dblp:"https://dblp.uni-trier.de/db/conf/ipsn/",founded:2004,frequency:"每年 5 月",organizer:"ACM/IEEE",ccf:"B",description:"传感器网络方向最顶的会议。偏底层网络算法与分布式设计，理论性强的论文更受青睐。",values:{hci:1,sensing:4,systems:5,mobile:2,hardware:4,theory:5},valuesNote:"与 SenSys 互补：IPSN 偏「算法与网络」，SenSys 偏「系统与部署」。纯感知应用类工作在这里竞争力弱。",timeline:{cycle:"每年 5 月",months:"提前 7 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Main Track","Workshop","Demo"],extra:""},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 与 CCFDDL 均未收录此会议的公开录用统计",status:"missing",lastChecked:"2026-10-06"},tips:"与 SenSys 征稿期接近，注意不要撞期。分布式算法、路由协议类创新是加分项。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2026,link:"https://ipsn.acm.org/2026/",accepted:!1,timezone:"AoE",place:"待定",conferenceDate:"May 2026",submissions:[{round:"全文",paper:"2025-10-03"}],timeline:[{type:"notification",date:"2026-02-18"}]}],relations:{similar:[{id:"sensys",why:"同为传感器系统旗舰，SenSys 偏系统部署"},{id:"mass",why:"同偏网络与定位算法"}],alternative:[{id:"percom",why:"无设备感知议题相近，PerCom 更强调普适通信"}],related:[{id:"tosn",why:"传感器网络顶刊，理论工作常见出口"}]}},{id:"sensys",name:"ACM Conference on Embedded Networked Sensor Systems",shortName:"SenSys",type:"conference",rank:"领域重要",tags:["iot-sensing","embedded","device-free"],link:"https://sensys.org/",dblp:"https://dblp.uni-trier.de/db/conf/sensys/",founded:2003,frequency:"每年 5/11 月",organizer:"ACM/IEEE",ccf:"B",description:"传感器系统方向旗舰，与 IPSN 并列。偏系统实现与真实部署，强调场景价值而非纯实验室指标。",values:{hci:2,sensing:5,systems:5,mobile:3,hardware:5,theory:3},valuesNote:"系统与硬件取向明显，实验室原型需要说明实际部署价值。2019 年后加入 IPSN-W 等分会场。",timeline:{cycle:"每年 5 月",months:"提前 6-7 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Main Track","Workshop","Demo"],extra:""},acceptanceStats:{source:"openaccept",confidence:"high",lastVerified:"2026-10-06",note:"主赛道数据，2025 年 45/235。整体录用率（含 workshop）也是 20%",history:[{year:2025,submitted:235,accepted:45,rate:19.15},{year:2023,submitted:179,accepted:35,rate:19.55},{year:2022,submitted:209,accepted:52,rate:24.88},{year:2021,submitted:139,accepted:25,rate:17.99},{year:2020,submitted:203,accepted:43,rate:21.18},{year:2019,submitted:144,accepted:28,rate:19.44},{year:2018,submitted:147,accepted:23,rate:15.65},{year:2017,submitted:152,accepted:26,rate:17.11}],status:"complete",coverage:{from:2017,to:2025,years:8}},tips:"录用率多年稳定在 17-25%，是本领域相对稳定的会议。系统类工作需要真实部署论证，评审会追问实际场景价值。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2027,link:"https://sensys.acm.org/2027/",accepted:!0,timezone:"AoE",place:"USA",conferenceDate:"May 17-20, 2027",submissions:[{round:"全文",paper:"2026-11-06"}],timeline:[{type:"conference",date:"2027-05-17",comment:"会议召开"}],statsNote:"上一届（2025）主赛道 45/235 = 19.1%"},{year:2025,link:"https://sensys.org/2025/",accepted:!1,timezone:"AoE",place:"Irvine, CA, USA",conferenceDate:"May 6-9, 2025",submissions:[{round:"全文",paper:"2025-05-28"}],timeline:[{type:"notification",date:"2025-09-08"}],stats:{submitted:235,accepted:45,rate:19.15}}],relations:{similar:[{id:"ipsn",why:"同属传感器系统，IPSN 更偏底层网络算法与理论"},{id:"mobisys",why:"同强调系统实现，SenSys 更聚焦传感"}],alternative:[{id:"ubicomp",why:"无设备感知等议题重叠，但 UbiComp 以人为中心"},{id:"imwut",why:"同属 UbiComp 系，IMWUT 评审周期短一半"}],related:[{id:"tosn",why:"SenSys 优秀论文的常见扩展出口"},{id:"tmc",why:"移动计算方向技术交叉"}]}},{id:"mobisys",name:"ACM International Conference on Mobile Systems, Applications, and Services",shortName:"MobiSys",type:"conference",rank:"领域重要",tags:["mobile-systems","ubiquitous","embedded"],link:"https://mobsys.org/",dblp:"https://dblp.uni-trier.de/db/conf/mobisys/",founded:2003,frequency:"每年 6 月",organizer:"ACM",ccf:"B",description:"移动系统方向重要会议。感知工作若强调移动场景下的系统设计（如端侧实时推理）适合投这里。",values:{hci:3,sensing:3,systems:5,mobile:5,hardware:4,theory:3},valuesNote:"系统实现和性能评估是硬要求，纯算法工作偏弱。需要真实设备上的端到端实验数据。",timeline:{cycle:"每年 6 月",months:"提前 7 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Full Paper","Short Paper","Poster","Workshop","Demonstration"],extra:"Short Paper 篇幅较短，适合系统原型类工作"},acceptanceStats:{source:"openaccept",confidence:"high",lastVerified:"2026-10-06",note:"主赛道数据",history:[{year:2025,submitted:233,accepted:42,rate:18.03},{year:2024,submitted:263,accepted:43,rate:16.35},{year:2023,submitted:198,accepted:41,rate:20.71},{year:2022,submitted:176,accepted:38,rate:21.59},{year:2021,submitted:166,accepted:36,rate:21.69},{year:2020,submitted:175,accepted:34,rate:19.43},{year:2019,submitted:172,accepted:39,rate:22.67},{year:2018,submitted:138,accepted:37,rate:26.81}],status:"complete",coverage:{from:2018,to:2025,years:8}},tips:"录用率近 8 年从 27% 降到 16%，趋势明显收紧。投之前要看清跟组里工作的匹配度。Short Paper 是性价比选择。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2026,link:"https://mobsys.org/2026/",accepted:!1,timezone:"AoE",place:"USA",conferenceDate:"June 2026",submissions:[{round:"全文",paper:"2025-12-20"}],timeline:[{type:"notification",date:"2026-03-20"}],stats:{submitted:233,accepted:42,rate:18.03}}],relations:{similar:[{id:"sensys",why:"系统实现导向相近"}],alternative:[{id:"imwut",why:"移动感知议题相近，IMWUT 评审更快"},{id:"percom",why:"移动普适感知可投两者"}],related:[{id:"tmc",why:"TMC 是 MobiSys 优秀论文的扩展出口"}]}},{id:"imwut",name:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",shortName:"IMWUT",type:"conference",rank:"领域重要",tags:["ubiquitous","har","wearable"],link:"https://dl.acm.org/journal/imwut",dblp:"https://dblp.uni-trier.de/db/journals/imwut/",founded:2017,frequency:"每年 4 期（季刊式会议）",organizer:"ACM",ccf:"B",description:"UbiComp 旗下面向所有议题的期刊式会议，季刊模式。评审周期比主会短，适合需要更快反馈或已中会议想扩展的场景。",values:{hci:5,sensing:4,systems:3,mobile:4,hardware:3,theory:3},valuesNote:"主题与 UbiComp 高度重合，但评审机制不同：逐期评审，首轮决定快（约 2-3 个月）。",timeline:{cycle:"每年 4 期",months:"全年滚动",bufferMonths:0},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Covers all UbiComp topics"],extra:"可先投会议版，再扩展投此刊"},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 与 CCFDDL 均未收录此会议的公开录用统计",status:"missing",lastChecked:"2026-10-06"},tips:"首轮决定约 2-3 个月，比 UbiComp 主会快很多。时间紧的时候是好选择。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}],editions:[{year:2026,link:"https://dl.acm.org/journal/imwut",accepted:!0,timezone:"AoE",place:"Online",conferenceDate:"2026",submissions:[{round:"R1",paper:"2026-02-01"},{round:"R2",paper:"2026-05-01"},{round:"R3",paper:"2026-11-01",notification:"2027-02-01"}],timeline:[{type:"notification",date:"2026-07-26"}]}],relations:{similar:[{id:"ubicomp",why:"同属 UbiComp 系"}],alternative:[{id:"mobisys",why:"移动感知可投两者，IMWUT 周期短"}],related:[{id:"imwut-j",why:"同源期刊版"}]}},{id:"mass",name:"IEEE International Conference on Mobile Ad Hoc and Sensor Networks",shortName:"MASS",type:"conference",rank:"领域重要",tags:["wireless-network","localization","iot-sensing"],link:"https://www.ieee-mass.org/",dblp:"https://dblp.uni-trier.de/db/conf/mass/",founded:2004,frequency:"每年 10 月",organizer:"IEEE",ccf:"C",description:"移动自组织与传感器网络会议，网络侧视角较强，定位与路由类工作适合。CCF C 但在领域内认可度不错。",values:{hci:1,sensing:4,systems:4,mobile:4,hardware:3,theory:4},valuesNote:"网络协议与定位算法导向。纯感知信号处理类工作匹配度一般，适合有网络侧创新的工作。",timeline:{cycle:"每年 10 月",months:"提前 6 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Main Track","Workshop","Poster"],extra:""},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 与 CCFDDL 均未收录此会议的公开录用统计",status:"missing",lastChecked:"2026-10-06"},tips:"CCF C 但领域内认可度可以，定位算法类工作在上面认可度不错。适合作为 IPSN/SenSys 之外的备选。",ccfByYear:[{system:"CCF",year:2022,rank:"C"},{system:"CCF",year:2026,rank:"C"}],editions:[{year:2026,link:"https://www.ieee-mass.org/2026/",accepted:!1,timezone:"AoE",place:"待定",conferenceDate:"October 2026",submissions:[{round:"全文",paper:"2026-05-10"}],timeline:[{type:"notification",date:"2026-07-18"}]}],relations:{similar:[{id:"ipsn",why:"同偏网络与定位算法"}],alternative:[{id:"sensys",why:"同为传感器系统，SenSys 影响力更大"}],related:[{id:"twc",why:"理论工作可扩展投 TWC"}]}},{id:"ndss",name:"Network and Distributed System Security Symposium",shortName:"NDSS",type:"conference",rank:"领域重要",tags:["privacy","ubiquitous"],link:"https://www.ndss-symposium.org/",dblp:"https://dblp.uni-trier.de/db/conf/ndss/",founded:1994,frequency:"每年 2 月",organizer:"Internet Society (ISOC)",ccf:"A",description:"CCF A 网络安全顶会。无线感知涉及隐私泄露、侧信道攻击时，投这里影响力极大。",values:{hci:1,sensing:2,systems:4,mobile:2,hardware:3,theory:5},valuesNote:"安全视角。无线感知是近年热点方向——CSI 侧信道、无设备感知的隐私风险是活跃议题。纯感知算法工作不适合。",timeline:{cycle:"每年 2 月",months:"提前 7 个月征稿",bufferMonths:1},submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"有",tracks:["Main Track","Workshops"],extra:"两个轮次提交，间隔约 4 个月"},acceptanceStats:{source:"openaccept",confidence:"high",lastVerified:"2026-10-06",note:"2025 投稿量翻倍（1311 vs 2024 的 682），竞争明显加剧",history:[{year:2025,submitted:1311,accepted:211,rate:16.09},{year:2024,submitted:682,accepted:140,rate:20.53},{year:2023,submitted:574,accepted:94,rate:16.38},{year:2022,submitted:513,accepted:83,rate:16.18},{year:2021,submitted:573,accepted:87,rate:15.18},{year:2020,submitted:506,accepted:88,rate:17.39}],status:"complete",coverage:{from:2020,to:2025,years:6}},tips:"如果工作涉及用 CSI 做隐私推断、或感知系统的攻击面，这是主要出口。2025 年投稿量翻倍是重要信号——这个方向正在变热。",ccfByYear:[{system:"CCF",year:2022,rank:"A"},{system:"CCF",year:2026,rank:"A"}],editions:[{year:2026,link:"https://www.ndss-symposium.org/2026/",accepted:!1,timezone:"AoE",place:"USA",conferenceDate:"Feb 2026",submissions:[{round:"全文",paper:"2025-07-25"}],timeline:[{type:"notification",date:"2025-12-15"}],stats:{submitted:1311,accepted:211,rate:16.09}}],relations:{similar:[],alternative:[],related:[{id:"ubicomp",why:"感知隐私是UbiComp 近年活跃议题"}]}}],ne=[{id:"tosn",name:"ACM Transactions on Sensor Networks",shortName:"TOSN",type:"journal",rank:"领域顶刊",tags:["iot-sensing","wireless-network","localization"],link:"https://dl.acm.org/journal/tosn",dblp:"https://dblp.uni-trier.de/db/journals/tosn/",publisher:"ACM",ccf:"B",cas:"一区",if:"4.6",openAccess:"hybrid",apc:"约 2600 美元",reviewCycle:"首次决定约 3-6 个月",frequency:"每年 8 期",values:{hci:1,sensing:5,systems:4,mobile:2,hardware:4,theory:5},valuesNote:"传感器网络的理论和方法论出口。SenSys/IPSN 的优秀工作常被邀请扩展投这里。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},tips:"与 SenSys / IPSN 有紧密关系。会议优秀工作被邀请扩展是常见路径。",ccfByYear:[{system:"CCF",year:2022,rank:"B"}],relations:{similar:[{id:"twc",why:"无线与传感交叉，同为 CCF A/B顶刊"},{id:"tmc",why:"移动与传感方向顶刊"}],alternative:[],related:[{id:"sensys",why:"SenSys 优秀论文常被邀请扩展投TOSN"},{id:"ipsn",why:"IPSN 理论工作常见扩展出口"}]}},{id:"imwut-j",name:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",shortName:"IMWUT",type:"journal",rank:"领域顶刊",tags:["ubiquitous","har","wifi-sensing"],link:"https://dl.acm.org/journal/imwut",dblp:"https://dblp.uni-trier.de/db/journals/imwut/",publisher:"ACM",ccf:"B",cas:"一区",if:"4.6",openAccess:"hybrid",apc:"约 2600 美元",reviewCycle:"首轮决定约 2-3 个月",frequency:"每年 4 期",values:{hci:5,sensing:4,systems:3,mobile:4,hardware:3,theory:3},valuesNote:"与 UbiComp 同一出版方，主题一致但评审独立。对无线感知的容忍度和接受度都较高。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},related:["ubicomp","imwut"],tips:"首轮 2-3 个月是本领域最快的反馈周期之一。时间紧时优先考虑。",ccfByYear:[{system:"CCF",year:2022,rank:"B"}],relations:{similar:[{id:"imwut",why:"同源会议版与期刊版"}],related:[{id:"tcadh",why:"群体感知方向"}]}},{id:"tmc",name:"IEEE Transactions on Mobile Computing",shortName:"TMC",type:"journal",rank:"领域顶刊",tags:["mobile-systems","ubiquitous","embedded"],link:"https://www.computer.org/csdl/journal/tm",dblp:"https://dblp.uni-trier.de/db/journals/tmc/",publisher:"IEEE",ccf:"A",cas:"二区",if:"5.4",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 5-8 个月",frequency:"每年 12 期",values:{hci:2,sensing:3,systems:5,mobile:5,hardware:3,theory:4},valuesNote:"移动计算顶刊。系统与算法结合的完整工作更有竞争力，纯感知应用偏弱。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},tips:"审稿周期长（5-8 个月），要做被拒后转投的时间规划。CCF A 但中科院二区。",ccfByYear:[{system:"CCF",year:2022,rank:"A"}],relations:{similar:[{id:"twc",why:"同为 CCF A 顶刊"}],alternative:[{id:"mobisys",why:"移动系统工作可投两者"}],related:[{id:"tosn",why:"传感与移动交叉"}]}},{id:"twc",name:"IEEE Transactions on Wireless Communications",shortName:"TWC",type:"journal",rank:"领域顶刊",tags:["wireless-network","signal-processing","localization"],link:"https://www.comsoc.org/publications/journals/twc",dblp:"https://dblp.uni-trier.de/db/journals/twc/",publisher:"IEEE",ccf:"A",cas:"一区",if:"5.2",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 4-6 个月",frequency:"每年 12 期",values:{hci:1,sensing:2,systems:3,mobile:3,hardware:3,theory:5},valuesNote:"偏通信理论。纯应用型感知工作命中率低，需要有通信侧创新（波形设计、资源分配等）。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},related:["ipsn","mass"],tips:"CCF A + 中科院一区，是无线感知方向理论工作的天花板。但要求通信侧的理论创新，纯感知应用不合适。",ccfByYear:[{system:"CCF",year:2022,rank:"A"}],relations:{similar:[{id:"tmc",why:"同为 CCF A 顶刊"},{id:"tosn",why:"传感器网络顶刊，理论工作出口"}],alternative:[{id:"jsen",why:"传感器应用类工作可投此刊"}],related:[{id:"mass",why:"理论工作来源"}]}},{id:"jsen",name:"IEEE Sensors Journal",shortName:"IEEE Sensors J",type:"journal",rank:"主流期刊",tags:["mmwave-radar","signal-processing","embedded"],link:"https://ieee-sensors.org/ieee-sensors-journal/",dblp:"https://dblp.uni-trier.de/db/journals/sensj/",publisher:"IEEE",ccf:null,cas:"二区",if:"4.3",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 3-5 个月",frequency:"每月15 期",values:{hci:1,sensing:5,systems:3,mobile:2,hardware:5,theory:2},valuesNote:"传感器领域务实取向。毫米波雷达实测类工作接受度高，系统创新不如算法创新看重。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},tips:"组内投稿最稳妥的期刊。实测数据完整的话命中率较高，需提前确认版面费预算。",ccfByYear:[],relations:{similar:[{id:"twc",why:"同为传感器方向，可作理论升级出口"}],alternative:[],related:[]}},{id:"tcadh",name:"IEEE Transactions on Computational Social Systems",shortName:"TCADH",type:"journal",rank:"主流期刊",tags:["har","ubiquitous"],link:"https://www.computer.org/csdl/journal/sc",dblp:"https://dblp.uni-trier.de/db/journals/tcadh/",publisher:"IEEE",ccf:null,cas:"三区",if:"2.5",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 2-4 个月",frequency:"每年 4 期",values:{hci:4,sensing:3,systems:2,mobile:2,hardware:1,theory:3},valuesNote:"社交与群体行为计算方向。涉及群体活动感知、社交计算类工作时可考虑。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开，此处不做估算",status:"none",lastChecked:"2026-10-06"},tips:"分区偏低，适合作为毕业前的时间兜底，不适合作为主要成果。审稿 2-4 个月较快。",ccfByYear:[],relations:{similar:[],alternative:[{id:"imwut-j",why:"群体行为感知类工作可投此刊"}],related:[{id:"imwut-j",why:"同为群体感知方向"}]}}],x={_meta:ee,sources:se,tags:te,conferences:ae,journals:ne},ie=[],oe={reports:ie},ce=[{id:"wireless-sensing",name:"无线感知",enName:"Wireless Sensing",color:"blue",summary:"用射频信号感知物理世界与人体状态，不依赖佩戴设备或摄像头。",topics:[{id:"wifi-sensing",name:"WiFi / CSI 感知",desc:"利用 WiFi 信道状态信息做无设备人体感知"},{id:"mmwave-radar",name:"毫米波雷达感知",desc:"FMCW 雷达点云、雷达微多普勒、雷达感知呼吸心跳"},{id:"device-free",name:"无设备感知",desc:"设备无关的被动感知，PerCom 的传统强项"},{id:"rf-sensing",name:"通用射频感知",desc:"UWB、RFID、LoRa 等其他射频媒介的感知应用"},{id:"localization",name:"定位与追踪",desc:"室内定位、人员追踪、目标定位"}],venueIds:["percom","sensys","ipsn","ubicomp","imwut","tmc","tosn","mass"]},{id:"ubiquitous-computing",name:"普适计算",enName:"Ubiquitous Computing",color:"purple",summary:"计算隐入环境，设备从显式工具变为随时可用的基础设施。",topics:[{id:"context-awareness",name:"情境感知",desc:"环境与用户状态的建模、推理与自适应"},{id:"smart-environment",name:"智能环境",desc:"智能家居、智能空间、环境感知系统"},{id:"wearable",name:"可穿戴计算",desc:"智能手表、穿戴设备、纺织与柔性电子"},{id:"health-sensing",name:"健康感知",desc:"非接触生理监测、慢病管理、心理状态识别"},{id:"privacy",name:"感知隐私",desc:"侧信道、隐私泄露攻击与防护"}],venueIds:["ubicomp","imwut","percom","ndss","tmc"]},{id:"mobile-systems",name:"移动系统",enName:"Mobile Systems",color:"amber",summary:"移动设备上的系统级设计，关注性能、能耗与真实部署。",topics:[{id:"on-device-ai",name:"端侧智能",desc:"在手机和嵌入式设备上部署推理模型"},{id:"system-design",name:"系统设计",desc:"移动系统的架构与性能优化"},{id:"cross-device",name:"跨设备协同",desc:"多设备联动与群体感知"}],venueIds:["mobisys","ubicomp","imwut","percom","tmc"]},{id:"iot-systems",name:"物联网与传感系统",enName:"IoT & Sensor Systems",color:"coral",summary:"传感器网络与物联网的系统实现，强调真实部署与长期运行。",topics:[{id:"sensor-network",name:"传感器网络",desc:"网络协议、路由、能量管理"},{id:"edge-inference",name:"边缘推理",desc:"感知任务的端侧与边缘侧计算"},{id:"real-deployment",name:"真实部署",desc:"实际环境中的系统落地与验证"},{id:"embedded",name:"嵌入式实现",desc:"软硬件协同、实时性、平台适配"}],venueIds:["sensys","ipsn","mass","tosn","jsen"]},{id:"signal-processing",name:"信号处理",enName:"Signal Processing",color:"gray",summary:"感知信号的理论与方法基础，跨无线感知和雷达系统的公共底座。",topics:[{id:"radar-dsp",name:"雷达信号处理",desc:"点云处理、目标检测、杂波抑制"},{id:"estimation",name:"参数估计",desc:"到达时间、角度、距离估计"},{id:"waveform",name:"波形设计",desc:"FMCW 参数优化、波形与资源联合设计"}],venueIds:["twc","jsen","tmc","tosn"]}],re={areas:ce},F=[...x.conferences,...x.journals],K=x.tags,B=re.areas,z=oe.reports,j=x._meta,I=x.sources,A=Object.fromEntries(F.map(i=>[i.id,i])),de=Object.fromEntries(B.map(i=>[i.id,i])),Q=Object.fromEntries(K.map(i=>[i.id,i])),X=i=>{var e;return((e=Q[i])==null?void 0:e.name)||i},W=i=>{const e=Q[i];return`<span class="badge b-${(e==null?void 0:e.color)||"gray"}">${X(i)}</span>`},O=[["hci","HCI / 以人为中心"],["sensing","感知贡献"],["systems","系统实现"],["mobile","移动场景"],["hardware","硬件实现"],["theory","理论创新"]],Z=i=>{const e=i.ccfByYear||[];return e.length?e.map(t=>`<span class="badge b-teal">${n(t.system)} ${t.year}: ${n(t.rank)}</span>`).join(" "):'<span class="badge b-gray">未收录 CCF</span>'},E=i=>{const e=i.ccfByYear||[];return e.length?e.map(t=>t.system+" "+t.year+": "+t.rank).join(" / "):"未收录"},le=864e5,U=i=>{const[e,t,r]=i.split("-").map(Number);return Math.round((new Date(e,t-1,r)-new Date)/le)},C=i=>i?i.replace(/-/g,"."):"—",n=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),pe=(i,e)=>{var c;if(!i)return"";const t=i.source?((c=I[i.source])==null?void 0:c.name)||i.source:"—",r={high:"高置信",medium:"中等置信",low:"低置信"}[i.confidence]||"—",s={complete:"数据完整",partial:"部分年份",missing:"未收录",none:"不公开"}[i.status]||"";return i.status==="missing"||i.status==="none"?'<div class="src-note"><span class="conf conf-none"><span class="conf-dot"></span>'+s+"</span>"+(i.lastChecked?"<span>核对于 "+n(i.lastChecked)+"</span>":"")+(e?"<span>"+n(e)+"</span>":"")+"</div>":'<div class="src-note"><span class="conf conf-'+i.confidence+'"><span class="conf-dot"></span>'+r+"</span><span>来源："+n(t)+"</span>"+(i.lastVerified?"<span>核对于 "+n(i.lastVerified)+"</span>":"")+(e?"<span>"+n(e)+"</span>":"")+"</div>"},d={tab:"explore",area:null,venue:null,tag:"all",q:"",showPrivate:!1,view:"table",cmp:["sensys","ubicomp","ipsn"]},w=document.getElementById("app"),L={abstract:"摘要",paper:"全文",rebuttal:"Rebuttal",notification:"结果",camera:"终稿",conference:"召开"},R={abstract:"b-teal",paper:"b-blue",rebuttal:"b-amber",notification:"b-green",camera:"b-gray",conference:"b-purple"};function me(){const i=[];for(const t of x.conferences)for(const r of t.editions||[]){for(const s of r.timeline||[]){if(!s.date)continue;const c=U(s.date);c<-7||c>400||i.push({venue:t,date:s.date,days:c,label:L[s.type]||s.type,color:R[s.type]||"b-gray",round:"",tz:r.timezone||""})}for(const s of r.submissions||[]){for(const c of["abstract","paper","rebuttal"]){if(!s[c])continue;const o=U(s[c]);o<-7||o>400||i.push({venue:t,date:s[c],days:o,label:L[c]||c,color:R[c]||"b-gray",round:s.round||"",tz:r.timezone||""})}if(s.notification){const c=U(s.notification);c>=-7&&c<=400&&i.push({venue:t,date:s.notification,days:c,label:L.notification,color:R.notification,round:s.round||"",tz:r.timezone||""})}}}const e=t=>t.label==="全文"||t.label==="摘要"?0:1;return i.sort((t,r)=>e(t)-e(r)||t.days-r.days)}function V(){if(d.area)return ue(d.area);const i=B.map(e=>{const t=e.venueIds.map(s=>A[s]).filter(Boolean),r=t.filter(s=>s.type==="conference").length;return`<div class="area-card b-${e.color}" data-area="${e.id}">
      <h3>${n(e.name)}</h3>
      <div class="en">${n(e.enName)}</div>
      <p>${n(e.summary)}</p>
      <div style="display:flex;gap:5px;flex-wrap:wrap">
        <span class="badge b-gray">${e.topics.length} 个子主题</span>
        <span class="badge b-gray">${r} 会议 · ${t.length-r} 期刊</span>
      </div>
    </div>`}).join("");return`
  <div class="page-head">
    <h1>研究领域导航</h1>
    <p>${j.field} · 从研究问题出发，找到相关的会议与期刊</p>
  </div>
  <div class="banner">
    <b>数据更新于 ${j.lastUpdated}</b>
    <span>录用率等数据均标注来源与置信度。价值维度评分是编辑解读，不是官方数据。</span>
  </div>
  <div class="area-grid">${i}</div>`}function ue(i){const e=de[i];if(!e)return d.area=null,V();const t=e.venueIds.map(a=>A[a]).filter(Boolean),r=t.filter(a=>a.type==="conference"),s=t.filter(a=>a.type==="journal"),c=e.topics.map(a=>{const l=t.filter(u=>{var h;return(h=u.tags)==null?void 0:h.some(g=>a.id.includes(g)||g.includes(a.id.split("-")[0]))});return`<div class="topic-item">
      <div><b>${n(a.name)}</b><div style="font-size:11.5px;color:var(--text-3);margin-top:1px">${n(a.desc)}</div></div>
      <span>${l.length?l.length+" 个相关 venue":"—"}</span>
    </div>`}).join(""),o=a=>{var h;const l=a.acceptanceStats,u=(h=l==null?void 0:l.history)==null?void 0:h[0];return`<div class="rel-card" data-venue="${a.id}">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px">
        <span class="n">${n(a.shortName)}</span>
        <span class="badge b-gray">${a.type==="conference"?"会议":"期刊"}</span>
      </div>
      <div class="d">${E(a)}${a.cas?" · 中科院"+a.cas:""}</div>
      <div class="d">${u?`近年录用率 ${u.rate}%`:"录用率暂无核实数据"}</div>
    </div>`};return`
  <button class="back-link" data-back="areas">← 返回研究领域</button>
  <div class="page-head">
    <h1>${n(e.name)}</h1>
    <p>${n(e.enName)} · ${n(e.summary)}</p>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>子主题</h2><span class="hint">${e.topics.length} 个</span></div>
    <div class="topic-list">${c}</div>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>相关会议</h2><span class="hint">${r.length} 个 · 点击查看详情</span></div>
    ${r.length?`<div class="rel-grid">${r.map(o).join("")}</div>`:'<p class="no-data">暂无</p>'}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>相关期刊</h2><span class="hint">${s.length} 本</span></div>
    ${s.length?`<div class="rel-grid">${s.map(o).join("")}</div>`:'<p class="no-data">暂无</p>'}
  </div>`}function he(i){var M,q,P,k,D,Y,_,H;const e=A[i];if(!e)return d.venue=null,V();const t=e.type==="conference",r=e.acceptanceStats||{},s=(r.history||[]).slice().sort((p,y)=>p.year-y.year),c=(()=>{const p=r.coverage;if(!p||!s.length)return"";const y=s.map(m=>m.year),b=[];for(let m=p.from;m<=p.to;m++)y.includes(m)||b.push(m);let f="覆盖 "+p.from+"–"+p.to+"（"+p.years+" 年）";return b.length&&(f+="，缺 "+b.join("/")),p.to<new Date().getFullYear()-1&&(f+=" · 数据可能滞后"),f})(),o=[["类型",t?"会议":"期刊"],["主办",t?e.organizer:e.publisher],["成立年份",e.founded||"—"],["周期",e.frequency||"—"],["分级",E(e)],t?["页数限制",((M=e.submission)==null?void 0:M.pageLimit)||"—"]:["中科院分区",e.cas||"—"],t?["评审模式",((q=e.submission)==null?void 0:q.reviewModel)||"—"]:["影响因子",e.if||"—"],t?["Rebuttal",((P=e.submission)==null?void 0:P.rebuttal)||"—"]:["审稿周期",e.reviewCycle||"—"]],a=(()=>{if(!s.length)return"";const p=Math.max.apply(null,s.map(b=>b.submitted));return'<div class="trend">'+s.map(function(b){const f=Math.max(4,Math.round(b.submitted/p*56)),m=Math.max(3,Math.round(b.accepted/p*56));return'<div class="trend-col"><div class="trend-bars" title="'+(b.year+" 投稿 "+b.submitted+"，录用 "+b.accepted)+'"><span class="tb sub" style="height:'+f+'px"></span><span class="tb" style="height:'+m+'px"></span></div><span class="trend-x">'+String(b.year).slice(2)+"</span></div>"}).join("")+"</div>"})(),l=s.slice().reverse().map(p=>"<tr><td>"+p.year+'</td><td class="num">'+p.submitted+'</td><td class="num">'+p.accepted+'</td><td class="num">'+p.rate+"%</td></tr>").join(""),u=s.length?'<table class="data"><thead><tr><th>年份</th><th class="num">投稿</th><th class="num">录用</th><th class="num">录用率</th></tr></thead><tbody>'+l+"</tbody></table>":"",h=t?(()=>{const p=(e.editions||[]).slice().sort((y,b)=>b.year-y.year);return p.length?p.map(function(y){const b=[];for(const m of y.submissions||[]){const T=m.round?"<b>"+n(m.round)+"</b>":"—";b.push("<tr><td>"+T+"</td><td>"+(m.abstract?C(m.abstract):"—")+"</td><td>"+(m.paper?C(m.paper):"—")+"</td><td>"+(m.rebuttal?C(m.rebuttal):"—")+"</td><td>"+(m.notification?C(m.notification):"—")+"</td></tr>")}const f=(y.timeline||[]).map(function(m){return'<span class="tl-ev"><span class="badge '+(R[m.type]||"b-gray")+'">'+n(L[m.type]||m.type)+"</span>"+C(m.date)+(m.comment?' <span style="color:var(--text-3)">'+n(m.comment)+"</span>":"")+"</span>"}).join("");return'<div class="edition"><div class="ed-head"><span class="ed-year">'+y.year+" 届"+(y.accepted?'<span class="badge b-green">征稿中</span>':"")+'</span><span class="ed-meta">'+(y.place?n(y.place)+" · ":"")+(y.timezone?"时区 "+n(y.timezone):"")+(y.conferenceDate?" · "+n(y.conferenceDate):"")+"</span></div>"+(b.length?'<table class="data"><thead><tr><th>轮次</th><th>摘要</th><th>全文</th><th>Rebuttal</th><th>结果</th></tr></thead><tbody>'+b.join("")+"</tbody></table>":"")+(f?'<div class="tl">'+f+"</div>":"")+(y.statsNote?'<div class="src-note" style="margin-top:6px">'+n(y.statsNote)+"</div>":"")+(y.link?'<div class="src-note" style="margin-top:6px"><a href="'+y.link+'" target="_blank" rel="noopener">该届官网 ↗</a></div>':"")+"</div>"}).join(""):'<p class="no-data">暂无投稿周期数据</p>'})():"",g={similar:{title:"Similar",desc:"领域和贡献模式相近，可作为同类替代"},alternative:{title:"Alternative",desc:"研究问题类似但投稿侧重点不同，值得换个角度考虑"},related:{title:"Related",desc:"技术或研究社区存在交叉"}},v=(()=>{const p=e.relations||{},y=[];for(const b of["similar","alternative","related"]){const f=p[b]||[];if(!f.length)continue;const m=g[b],T=f.map(function(J){const S=A[J.id];if(!S)return"";const G=S.acceptanceStats&&S.acceptanceStats.history&&S.acceptanceStats.history[0];return'<div class="rel-card" data-venue="'+S.id+'"><div class="n">'+n(S.shortName)+'</div><div class="d">'+E(S)+(S.cas?" · 中科院"+S.cas:"")+'</div><div class="d">'+(G?"录用率 "+G.rate+"%":"录用率未核实")+'</div><div class="why">'+n(J.why)+"</div></div>"}).join("");y.push('<div class="rel-group"><div class="rel-head"><span class="rel-title">'+m.title+'</span><span class="rel-desc">'+m.desc+'</span></div><div class="rel-grid">'+T+"</div></div>")}return y.length?y.join(""):'<p class="no-data">暂无关联 venue</p>'})(),N=B.filter(p=>p.venueIds.includes(e.id));return`
  <button class="back-link" data-back="venues">← 返回会议与期刊列表</button>
  <div class="profile-head">
    <h1>${n(e.shortName)}</h1>
    <div class="full">${n(e.name)}</div>
    <div class="profile-badges">
      <span class="badge ${t?"b-blue":"b-purple"}">${t?"会议":"期刊"}</span>
      ${Z(e)}
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
    <div class="facts">${o.map(([p,y])=>`<div class="fact"><div class="k">${n(p)}</div><div class="v">${n(y)}</div></div>`).join("")}</div>
    <p style="margin-top:14px">${n(e.description)}</p>
  </div>

  <div class="mod">
    <div class="mod-head">
      <h2>这个 venue 看重什么</h2>
      <span class="hint">编辑解读 · 非官方数据</span>
    </div>
    ${O.map(([p,y])=>{var f;const b=((f=e.values)==null?void 0:f[p])||0;return`<div class="rating-row">
        <span class="dim">${n(y)}</span>
        <span class="stars">${[1,2,3,4,5].map(m=>`<span class="star ${m<=b?"on":""}"></span>`).join("")}</span>
        <span class="val">${b}/5</span>
      </div>`}).join("")}
    ${e.valuesNote?`<div class="editor-note">${n(e.valuesNote)}</div>`:""}
    ${N.length?`<div class="src-note" style="margin-top:10px">所属领域：${N.map(p=>n(p.name)).join("、")}</div>`:""}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>数据来源</h2><span class="hint">每个字段的可信度</span></div>
    <table class="data">
      <thead><tr><th>字段</th><th>值</th><th>来源</th><th>置信度</th></tr></thead>
      <tbody>
        <tr>
          <td>CCF 分级</td>
          <td>${n(E(e))}</td>
          <td>${n(I.ccf.name)}</td>
          <td><span class="conf conf-high"><span class="conf-dot"></span>高</span></td>
        </tr>
        ${e.cas?`<tr>
          <td>中科院分区</td><td>${n(e.cas)}</td>
          <td>${n(I.ccf.name)}</td>
          <td><span class="conf conf-medium"><span class="conf-dot"></span>中（每年调整）</span></td>
        </tr>`:""}
        ${e.if?`<tr>
          <td>影响因子</td><td>${n(e.if)}</td>
          <td>期刊官网</td>
          <td><span class="conf conf-medium"><span class="conf-dot"></span>中（每年更新）</span></td>
        </tr>`:""}
        <tr>
          <td>价值维度评分</td><td>6 项× 1-5 星</td>
          <td>${n(I.editor.name)}</td>
          <td><span class="conf conf-low"><span class="conf-dot"></span>编辑解读</span></td>
        </tr>
        <tr>
          <td>录用率</td>
          <td>${(k=r.history)!=null&&k.length?r.history.length+" 年数据":"暂无"}</td>
          <td>${r.source?n(((D=I[r.source])==null?void 0:D.name)||r.source):"—"}</td>
          <td><span class="conf conf-${r.confidence||"none"}"><span class="conf-dot"></span">${{high:"高",medium:"中",low:"低",none:"无数据"}[r.confidence||"none"]}</span></td>
        </tr>
        <tr>
          <td>投稿要求</td><td>见投稿流程模块</td>
          <td>${n(e.organizer||e.publisher||"官网")}</td>
          <td><span class="conf conf-none"><span class="conf-dot"></span>请以官网为准</span></td>
        </tr>
      </tbody>
    </table>
    <div class="src-note" style="margin-top:10px">${n(j.dataPolicy)}</div>
  </div>

  ${t?`<div class="mod">
    <div class="mod-head"><h2>投稿周期（历届）</h2><span class="hint">时区与轮次均按官方标注</span></div>
    ${h}
    ${(_=(Y=e.submission)==null?void 0:Y.tracks)!=null&&_.length?`<div style="margin-top:12px">
      <div style="font-size:11.5px;color:var(--text-3);margin-bottom:4px">Track / 投稿类型</div>
      <div style="display:flex;gap:5px;flex-wrap:wrap">${e.submission.tracks.map(p=>`<span class="badge b-gray">${n(p)}</span>`).join("")}</div>
    </div>`:""}
    ${(H=e.submission)!=null&&H.extra?`<div class="editor-note">${n(e.submission.extra)}</div>`:""}
    <div class="src-note" style="margin-top:10px">投稿要求以${n(e.organizer||e.publisher)}官网为准，此处仅作速查</div>
  </div>`:""}

  <div class="mod">
    <div class="mod-head">
      <h2>${t?"录用率与竞争程度":"审稿周期"}</h2>
      <span class="hint">${r.status==="none"?"该刊不公开录用数据":s.length?c:"未找到公开数据"}</span>
    </div>
    ${s.length?`${a}
      <div style="display:flex;gap:14px;font-size:11.5px;color:var(--text-3);margin:6px 0 14px">
        <span><span style="display:inline-block;width:8px;height:8px;background:var(--border-strong);border-radius:2px;margin-right:4px"></span>投稿数</span>
        <span><span style="display:inline-block;width:8px;height:8px;background:var(--accent);border-radius:2px;margin-right:4px"></span>录用数</span>
      </div>
      ${u}
    `:`<div class="missing-data">
        <div class="md-title">${r.status==="none"?"该刊录用率通常不公开":"未找到可靠公开录用统计"}</div>
        <div class="md-note">${n(r.note||"")}</div>
        <div class="md-check">上次核对：${n(r.lastChecked||j.lastUpdated)}</div>
      </div>`}
    ${pe(r,s.length?c:"")}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>关联 venue</h2><span class="hint">按关系类型分组</span></div>
    ${v}
  </div>

  ${e.tips?`<div class="mod">
    <div class="mod-head"><h2>组内经验</h2><span class="hint">来自组内投稿记录</span></div>
    <p>${n(e.tips)}</p>
  </div>`:""}`}function ye(){const i=d.cmp.map(s=>A[s]).filter(Boolean),e=F.map(s=>`<button class="chip ${d.cmp.includes(s.id)?"on":""}" data-cmp="${s.id}">${n(s.shortName)}</button>`).join("");if(i.length<2)return`
    <div class="page-head">
      <h1>Venue 对比</h1>
      <p>并排比较多个 venue，看清它们的区别</p>
    </div>
    <div class="banner"><b>至少选择 2 个</b><span>当前已选 ${i.length} 个</span></div>
    <div class="cmp-picker">${e}</div>
    <div class="empty" style="margin-top:16px">再选几个就能看到对比表</div>`;const t=(s,c,o)=>{const a=i.map(c);return`<tr>
      <td style="color:var(--text-2)">${n(s)}</td>
      ${a.map((l,u)=>`<td class="num">${l??"—"}</td>`).join("")}
    </tr>`},r=O.map(([s,c])=>{const o=i.map(l=>{var u;return((u=l.values)==null?void 0:u[s])||0}),a=Math.max(...o);return`<tr>
      <td style="color:var(--text-2)">${n(c)}</td>
      ${o.map(l=>`<td class="num ${l===a?"cmp-best":""}">${l}/5</td>`).join("")}
    </tr>`}).join("");return i.map(s=>{var o,a;const c=(a=(o=s.acceptanceStats)==null?void 0:o.history)==null?void 0:a[0];return c?c.rate:null}),`
  <div class="page-head">
    <h1>Venue 对比</h1>
    <p>并排比较，绿色高亮为该行最高值</p>
  </div>
  <div class="cmp-picker" style="margin-bottom:16px">${e}</div>

  <div class="mod cmp-table">
    <table class="data">
      <thead><tr>
        <th>维度</th>
        ${i.map(s=>`<th class="num cmp-name" data-venue="${s.id}">${n(s.shortName)}</th>`).join("")}
      </tr></thead>
      <tbody>
        <tr><td style="color:var(--text-3)">类型</td>${i.map(s=>`<td class="num">${s.type==="conference"?"会议":"期刊"}</td>`).join("")}</tr>
        <tr><td style="color:var(--text-3)">分级</td>${i.map(s=>`<td class="num">${E(s)}</td>`).join("")}</tr>
        <tr><td style="color:var(--text-3)">中科院</td>${i.map(s=>`<td class="num">${s.cas||"—"}</td>`).join("")}</tr>
        <tr style="background:var(--surface-2)"><td colspan="${i.length+1}" style="font-size:11.5px;color:var(--text-3)">价值取向（编辑解读）</td></tr>
        ${r}
        <tr style="background:var(--surface-2)"><td colspan="${i.length+1}" style="font-size:11.5px;color:var(--text-3)">投稿事实</td></tr>
        ${t("录用率（最新）",s=>{const c=s.acceptanceStats&&s.acceptanceStats.history&&s.acceptanceStats.history[0];return c?c.rate+"%（"+c.year+"）":null})}
        ${t("数据覆盖",s=>{const c=s.acceptanceStats&&s.acceptanceStats.coverage;return c?c.from+"–"+c.to+"（"+c.years+"年）":null})}
        ${t("页数/篇幅",s=>{var c;return s.type==="conference"?(((c=s.submission)==null?void 0:c.pageLimit)||"").replace(/以官网为准/,"见官网").slice(0,22):`${s.reviewCycle||"—"}`})}
        ${t("Rebuttal",s=>{var c,o;return s.type==="conference"&&(o=(c=s.submission)==null?void 0:c.rebuttal)!=null&&o.startsWith("有")?"有":"—"})}
        <tr><td style="color:var(--text-3)">数据置信</td>${i.map(s=>{const c=s.acceptanceStats||{},o=c.confidence||"none",a={high:"高置信",medium:"中置信",low:"低置信",none:"—"}[o],l={complete:"完整",partial:"部分",missing:"未收录",none:"不公开"}[c.status]||"—";return'<td class="num"><span class="conf conf-'+o+'"><span class="conf-dot"></span>'+a+'</span><div style="font-size:11px;color:var(--text-3)">'+l+"</div></td>"}).join("")}</tr>
      </tbody>
    </table>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>关键差异</h2><span class="hint">编辑解读</span></div>
    ${i.map(s=>`<div style="padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="font-weight:500;font-size:13.5px">${n(s.shortName)}</div>
      <div style="font-size:12.5px;color:var(--text-2);margin-top:2px">${n(s.valuesNote||s.description)}</div>
    </div>`).join("")}
  </div>`}function be(){const i=me(),e=i.filter(o=>o.label==="全文"||o.label==="摘要").slice(0,10),t=i.filter(o=>o.label!=="全文"&&o.label!=="摘要").slice(0,4),r=z.filter(o=>o.status==="accepted").length,s=o=>{const a=o.days<0||o.days<=30?"urgent":o.days<=90?"soon":"normal",l=o.days<0?"已过":o.days===0?"今天":o.days+" 天";return'<tr><td><span class="venue-link" data-venue="'+o.venue.id+'"><b>'+n(o.venue.shortName)+'</b></span></td><td style="font-size:12px">'+E(o.venue)+'</td><td><span class="badge '+(o.color||"b-gray")+'">'+n(o.label)+"</span>"+(o.round?' <span style="font-size:11px;color:var(--text-3)">'+n(o.round)+"</span>":"")+'</td><td style="font-size:12.5px">'+C(o.date)+(o.tz?' <span class="tz">'+n(o.tz)+"</span>":"")+'</td><td class="num '+a+'">'+l+"</td></tr>"},c=B.map(o=>{const a=o.venueIds.map(u=>A[u]).filter(Boolean),l=a.filter(u=>u.type==="conference").length;return'<div class="area-card b-'+o.color+'" data-area="'+o.id+'"><h3>'+n(o.name)+'</h3><div class="en">'+n(o.enName)+"</div><p>"+n(o.summary)+'</p><div style="display:flex;gap:5px;flex-wrap:wrap"><span class="badge b-gray">'+o.topics.length+' 子主题</span><span class="badge b-gray">'+l+" 会议 · "+(a.length-l)+" 期刊</span></div></div>"}).join("");return`
  <div class="hero">
    <h1>Research Venue Navigator</h1>
    <p>${n(j.field)} · 理解会议期刊定位，比较投稿目标</p>
    <input type="search" class="search-lg" id="hero-q" placeholder="搜索会议、期刊、主题或标签，例如：毫米波、无设备感知、UbiComp" />
  </div>

  <section>
    <div class="sec-head">
      <h2>即将到来的截稿</h2>
      <span class="hint">论文类事件优先 · 数据更新于 ${j.lastUpdated}</span>
    </div>
    ${e.length?'<div class="mod cmp-table" style="padding:0"><table class="data"><thead><tr><th>Venue</th><th>分级</th><th>类型</th><th>日期</th><th class="num">剩余</th></tr></thead><tbody>'+e.map(s).join("")+"</tbody></table></div>":'<div class="empty">近期没有已确认的截稿日期</div>'}
    ${t.length?'<div style="margin-top:12px"><div style="font-size:11.5px;color:var(--text-3);margin-bottom:6px">其他节点（rebuttal / 结果 / 召开）</div><div class="flow">'+t.map(o=>'<span class="flow-step">'+n(o.venue.shortName)+' <span class="badge '+(o.color||"b-gray")+'">'+n(o.label)+"</span> "+C(o.date)+' <b style="color:var(--text-2)">'+(o.days>=0?o.days+"天":"已过")+"</b></span>").join("")+"</div></div>":""}
  </section>

  <section>
    <div class="sec-head">
      <h2>研究领域</h2>
      <span class="hint">从研究问题出发找venue</span>
    </div>
    <div class="area-grid">${c}</div>
  </section>

  <section>
    <div class="sec-head">
      <h2>快速对比</h2>
      <span class="hint">最多 4 个，最多 4 个维度并排</span>
    </div>
    <div class="mod">
      <div class="cmp-picker" style="margin-bottom:12px">
        ${F.slice(0,10).map(o=>'<button class="chip '+(d.cmp.includes(o.id)?"on":"")+'" data-cmp="'+o.id+'">'+n(o.shortName)+"</button>").join("")}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <span style="font-size:12.5px;color:var(--text-2)">已选 ${d.cmp.length} 个：</span>
        ${d.cmp.map(o=>{const a=A[o];return a?'<span class="badge b-blue">'+n(a.shortName)+"</span>":""}).join("")}
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
      <div class="card"><div class="card-meta">会议</div><div class="card-name">${x.conferences.length} 个</div></div>
      <div class="card"><div class="card-meta">期刊</div><div class="card-name">${x.journals.length} 本</div></div>
      <div class="card">
        <div class="card-meta">组内投稿记录</div>
        <div class="card-name">${z.length?z.length+" 条 · 命中 "+r:"待补充"}</div>
      </div>
    </div>
  </section>`}function ve(){const i={};for(const a of B)for(const l of a.topics)i[l.id]={name:l.name,desc:l.desc,area:a.name},i[l.name]={name:l.name,desc:l.desc,area:a.name};const e=F.filter(a=>{if(d.tag!=="all"&&!(a.tags||[]).includes(d.tag))return!1;if(d.q){const l=d.q.toLowerCase();if(![a.shortName,a.name,a.description,(a.tags||[]).map(h=>X(h)).join(" "),(a.tags||[]).map(h=>i[h]?i[h].name:"").join(" "),(a.tags||[]).map(h=>i[h]?i[h].desc:"").join(" ")].join(" ").toLowerCase().includes(l))return!1}return!0}),t='<div class="filters"><input type="search" id="q" placeholder="搜索会议、期刊、标签…" value="'+n(d.q)+'" /><button class="chip '+(d.tag==="all"?"on":"")+'" data-tag="all">全部</button>'+K.map(a=>'<button class="chip '+(d.tag===a.id?"on":"")+'" data-tag="'+a.id+'">'+n(a.name)+"</button>").join("")+'<div style="margin-left:auto" class="view-switch"><button class="'+(d.view==="table"?"on":"")+'" data-view="table">表格</button><button class="'+(d.view==="card"?"on":"")+'" data-view="card">卡片</button></div></div>',r=a=>{if(a.type!=="conference")return null;let l=null;for(const u of a.editions||[])for(const h of u.submissions||[])for(const g of["abstract","paper"]){if(!h[g])continue;const v=U(h[g]);v<0||v>400||(!l||v<l.days)&&(l={days:v,date:h[g],round:h.round||"",type:g})}return l},c='<div class="mod cmp-table" style="padding:0"><table class="data"><thead><tr><th>Venue</th><th>分级</th><th class="num">录用率</th><th>数据覆盖</th><th>下一截稿</th><th>标签</th></tr></thead><tbody>'+e.map(a=>{const l=a.acceptanceStats||{},u=l.history&&l.history[l.history.length-1],h=l.coverage,g=u?"<b>"+u.rate+'%</b><div style="font-size:11px;color:var(--text-3)">'+u.year+" 年</div>":'<span style="color:var(--text-3)">'+(l.status==="none"?"不公开":"未收录")+"</span>",v=r(a),N=v?C(v.date)+'<div style="font-size:11px;color:var(--text-3)">'+n(v.type==="paper"?"全文":"摘要")+(v.round?" · "+n(v.round):"")+(v.days<=30?' · <b style="color:var(--red)">'+v.days+"天</b>":" · "+v.days+"天")+"</div>":'<span style="color:var(--text-3)">—</span>',M=h?h.from+"–"+h.to+'<div style="font-size:11px;color:var(--text-3)">'+h.years+" 年数据</div>":'<span style="color:var(--text-3)">—</span>';return'<tr><td><span class="venue-link" data-venue="'+a.id+'"><b>'+n(a.shortName)+'</b></span><div style="font-size:11px;color:var(--text-3)">'+(a.type==="conference"?"会议":"期刊")+'</div></td><td style="font-size:12px">'+E(a)+(a.cas?'<div style="font-size:11px;color:var(--text-3)">中科院'+n(a.cas)+"</div>":"")+'</td><td class="num">'+g+'</td><td style="font-size:12px">'+M+'</td><td style="font-size:12px">'+N+'</td><td style="font-size:11.5px">'+(a.tags||[]).slice(0,2).map(W).join(" ")+"</td></tr>"}).join("")+"</tbody></table></div>",o='<div class="grid c3">'+e.map(function(a){const l=a.type==="journal",u=a.acceptanceStats||{},h=u.history&&u.history[u.history.length-1],g=u.coverage,v='<span class="badge b-'+(l?"purple":"blue")+'">'+n(a.rank)+"</span>"+Z(a)+(a.cas?'<span class="badge b-coral">中科院'+a.cas+"</span>":"")+(a.if?'<span class="badge b-amber">IF '+a.if+"</span>":""),N=h?"<span>录用率 <b>"+h.rate+"%</b>（"+h.year+'）</span><span class="conf conf-'+u.confidence+'"><span class="conf-dot"></span>'+({high:"高置信",medium:"中置信",low:"低置信"}[u.confidence]||"")+"</span>":'<span style="color:var(--text-3)">'+(u.status==="none"?"录用率不公开":"录用率未收录")+"</span>"+(g?"":'<span class="conf conf-none"><span class="conf-dot"></span>已核对</span>'),M=O.map(k=>({label:k[1],v:a.values?a.values[k[0]]:0})).sort((k,D)=>D.v-k.v).slice(0,2).map(k=>"<span>"+n(k.label.split(" / ")[0])+" "+k.v+"/5</span>").join(""),q=r(a),P=l?"<span>"+n(a.publisher)+"</span><span>"+n(a.reviewCycle||"")+"</span>":q?"<span>下一截稿 "+C(q.date)+"</span>":"<span>"+n(a.frequency||"")+"</span>";return'<div class="card" data-venue="'+a.id+'"><div class="card-top"><div><div class="card-name">'+n(a.shortName)+'</div><div class="card-meta">'+n(a.name)+"</div></div></div><div>"+v+'</div><div class="card-desc">'+n(a.description)+"</div><div>"+(a.tags||[]).map(W).join(" ")+'</div><div class="card-foot">'+N+M+P+"</div></div>"}).join("")+"</div>";return`
  <div class="page-head">
    <h1>会议与期刊</h1>
    <p>共 ${F.length} 条记录 · ${d.view==="table"?"表格视图适合快速查找":"卡片视图适合了解详情"}</p>
  </div>
  ${t}
  ${e.length?d.view==="table"?c:o:'<div class="empty">没有匹配的记录</div>'}
`}function fe(){const i=z.filter(e=>d.showPrivate||e.public);return i.length?i.map(e=>{var s;const t={accepted:["已录用","b-green"],rejected:["已拒稿","b-red"],under_review:["在审","b-amber"],"under-review":["在审","b-amber"]}[e.status]||["—","b-gray"],r=(e.reviews||[]).map(c=>{var o,a;return`
      <div class="review-line"><span class="lbl">第 ${c.round} 轮评审意见摘要</span>${c.summary}</div>
      ${(o=c.strengths)!=null&&o.length?`<div class="review-line"><span class="lbl">认可之处</span><ul class="pts">${c.strengths.map(l=>`<li>${l}</li>`).join("")}</ul></div>`:""}
      ${(a=c.weaknesses)!=null&&a.length?`<div class="review-line"><span class="lbl">主要问题</span><ul class="pts">${c.weaknesses.map(l=>`<li>${l}</li>`).join("")}</ul></div>`:""}`}).join("");return`<div class="report">
      <div class="report-head">
        <div>
          <div class="report-title">${e.title}</div>
          <div class="card-meta">${e.venueName} · ${e.year} · ${e.member}</div>
        </div>
        <span class="badge ${t[1]}">${t[0]}</span>
      </div>
      <div class="report-grid">
        <dl class="kv"><dt>投稿日期</dt><dd>${C(e.submittedAt)}</dd></dl>
        <dl class="kv"><dt>决定日期</dt><dd>${C(e.decidedAt)}</dd></dl>
        <dl class="kv"><dt>审稿轮次</dt><dd>${e.round||1}</dd></dl>
        <dl class="kv"><dt>总耗时</dt><dd>${e.daysElapsed?e.daysElapsed+" 天":"—"}</dd></dl>
      </div>
      ${(s=e.reviews)!=null&&s.length?`<details class="review"><summary>查看审稿意见</summary><div class="review-body">${r}</div></details>`:'<div class="locked">暂无审稿意见记录</div>'}
      ${e.lessons?`<div class="lesson">${e.lessons}</div>`:""}
    </div>`}).join(""):`<div class="empty">
      <div class="empty-title">${z.length===0?"这个板块还没有内容":"当前视角下没有记录"}</div>
      <p class="empty-desc">战报记录每一次投稿的审稿意见和经验总结，是组里最难得的经验沉淀。</p>
      <p class="empty-desc">添加方式：复制 <code>data/reports.json</code> 里的 <code>_template</code> 结构，追加到 <code>reports</code> 数组，提交 PR 即可。</p>
      ${z.length===0?'<p class="empty-desc">哪怕只是写一条刚投过的记录，也是有价值的起点。</p>':'<p class="empty-desc">切换到「包含私有记录」可查看尚未公开的内容。</p>'}
    </div>`}function ge(){return`
  <div class="page-head">
    <h1>论文战报</h1>
    <p>每一次投稿的完整记录，包括审稿意见和经验总结</p>
  </div>
  <div class="banner">
    <b>关于隐私</b>
    <span>审稿意见属未公开评审内容，默认非公开。每条战报和每条审稿意见各有独立的 public 开关，公开部署时只展示你明确设为公开的部分。</span>
  </div>
  <div class="filters">
    <button class="chip ${d.showPrivate?"":"on"}" data-priv="0">仅公开记录</button>
    <button class="chip ${d.showPrivate?"on":""}" data-priv="1">包含私有记录（本机）</button>
  </div>
  ${fe()}`}function we(){return`
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
  </div>`}const $e=[["explore","研究领域"],["venues","会议与期刊"],["compare","对比"],["home","看板"],["reports","论文战报"],["guide","投稿指南"]];function $(){const e={explore:V,profile:()=>he(d.venue),venues:ve,compare:ye,home:be,reports:ge,guide:we}[d.tab](),t=d.tab==="explore"&&d.venue?"venues":d.tab;w.innerHTML=`
    <header>
      <div class="wrap header-in">
        <div class="logo">投稿知识库<span>Research Venue Navigator</span></div>
        <nav>${$e.map(([r,s])=>`<button class="${t===r?"on":""}" data-tab="${r}">${s}</button>`).join("")}</nav>
      </div>
    </header>
    <main class="wrap">${e}</main>
    <footer><div class="wrap">
      数据更新于 ${j.lastUpdated} · 维护者：${j.maintainers.join("、")} ·
      录用率数据来自 ${n(I.openaccept.name)} 等公开来源，价值维度为编辑解读 ·
      投稿决策请以各会议官网信息为准
    </div></footer>`,Ce()}function Ce(){w.querySelectorAll("[data-tab]").forEach(t=>t.onclick=()=>{d.tab=t.dataset.tab,d.area=null,d.venue=null,$()}),w.querySelectorAll("[data-tag]").forEach(t=>t.onclick=()=>{d.tag=t.dataset.tag,$()}),w.querySelectorAll("[data-priv]").forEach(t=>t.onclick=()=>{d.showPrivate=t.dataset.priv==="1",$()}),w.querySelectorAll("[data-area]").forEach(t=>t.onclick=()=>{d.area=t.dataset.area,$()}),w.querySelectorAll("[data-venue]").forEach(t=>t.onclick=()=>{d.venue=t.dataset.venue,d.tab="profile",$()}),w.querySelectorAll("[data-view]").forEach(t=>t.onclick=()=>{d.view=t.dataset.view,$()}),w.querySelectorAll("[data-cmp]").forEach(t=>t.onclick=()=>{const r=t.dataset.cmp,s=d.cmp.indexOf(r);s>=0?d.cmp.splice(s,1):d.cmp.push(r),$()}),w.querySelectorAll("[data-back]").forEach(t=>t.onclick=()=>{t.dataset.back==="areas"?(d.area=null,d.tab="explore"):t.dataset.back==="venues"?(d.venue=null,d.tab="venues"):(d.venue=null,d.tab="explore"),$()});const i=w.querySelector("#q");i&&(i.oninput=t=>{d.q=t.target.value;const r=t.target.selectionStart;$();const s=w.querySelector("#q");s&&(s.focus(),s.setSelectionRange(r,r))});const e=w.querySelector("#hero-q");e&&(e.oninput=t=>{d.q=t.target.value},e.onkeydown=t=>{t.key==="Enter"&&(d.tab="venues",d.area=null,d.venue=null,$())},d.q&&(e.value=d.q))}$();
