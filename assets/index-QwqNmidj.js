(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const ce={lastUpdated:"2026-10-06",field:"无线感知 / 普适计算",maintainers:["xiuliangwu"],dataPolicy:"无法核实的数据宁可不填，也不用估算。留空会在页面上显示为「暂无核实数据」。"},re={openaccept:{name:"OpenAccept",url:"https://openaccept.org/",tier:3,desc:"社区维护的录用率数据库，收录年份较全"},official:{name:"会议官网",tier:1,desc:"CFP、征稿说明、官方统计"},acm:{name:"ACM Digital Library",url:"https://dl.acm.org/",tier:2,desc:"官方论文集与录用统计"},ccf:{name:"CCF 推荐目录",url:"https://www.ccf.org.cn/Academic_Evaluation/By_category/",tier:2,desc:"中国计算机学会推荐国际会议期刊目录"},wiki:{name:"Wikipedia",tier:3,desc:"成立年份等背景事实"},editor:{name:"编辑判断",tier:4,desc:"基于征稿范围和历年录用论文的解读，非官方数据"}},oe=[{id:"wifi-sensing",name:"WiFi 感知",color:"blue"},{id:"mmwave-radar",name:"毫米波雷达",color:"blue"},{id:"device-free",name:"无设备感知",color:"teal"},{id:"har",name:"活动识别",color:"teal"},{id:"localization",name:"定位追踪",color:"green"},{id:"ubiquitous",name:"普适计算",color:"purple"},{id:"mobile-systems",name:"移动系统",color:"amber"},{id:"iot-sensing",name:"物联网感知",color:"coral"},{id:"wireless-network",name:"无线网络",color:"pink"},{id:"signal-processing",name:"信号处理",color:"gray"},{id:"embedded",name:"嵌入式",color:"gray"},{id:"wearable",name:"可穿戴",color:"pink"},{id:"privacy",name:"感知隐私",color:"red"}],de=[{id:"ubicomp",name:"ACM International Joint Conference on Pervasive and Ubiquitous Computing",shortName:"UbiComp",type:"conference",rank:"领域旗舰",tags:["ubiquitous","har","mobile-systems"],link:"https://www.ubicomp.org/",dblp:"https://dblp.uni-trier.de/db/conf/ubicomp/",founded:2003,frequency:"每年（与 ISWC 联合）",organizer:"ACM（CMU 主导）",ccf:"A",description:"普适计算领域最核心的会议，UbiComp / ISWC 联合举办，另有 SEASONAL 独立分会场。学术影响力在这个领域内最高。",values:{hci:5,sensing:4,systems:3,mobile:4,hardware:2,theory:3},valuesNote:"UbiComp 以「人」为中心，强调技术与社会体验的结合。HCI 属性远强于系统工程，纯系统部署类工作竞争力较弱。",timeline:{cycle:"每年 10-11 月",months:"提前 5 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2026-02-01",notification:"2026-07-26"},{year:2025,paper:"2025-02-01",notification:"2025-07-15"}],deadlines:[{type:"第 3 轮",date:"2026-11-01",note:"ISWC Notes & Briefs / Workshop / Doctoral Colloquium"}],submission:{pageLimit:"主会 10 页 + 1 页参考文献",reviewModel:"double-blind",rebuttal:"有",tracks:["Wearable Computing","Sensing","HCI & Wellbeing","Ubiquitous Computing"],extra:"三轮滚动征稿（2月/ 5 月 / 11 月）"},acceptanceStats:{source:"openaccept",confidence:"medium",lastVerified:"2026-10-06",note:"OpenAccept 数据止于 2020 年，近 years 需查官网",history:[{year:2020,submitted:600,accepted:121,rate:20.17},{year:2019,submitted:700,accepted:176,rate:25.14},{year:2018,submitted:757,accepted:207,rate:27.34},{year:2017,submitted:568,accepted:120,rate:21.13},{year:2016,submitted:389,accepted:100,rate:25.71},{year:2015,submitted:394,accepted:101,rate:25.63}]},related:["imwut","percom","mobisys","ndss"],tips:"三轮中第一轮通常竞争最小。Sensing track 对无线感知类工作最对口。审稿周期约 5-6 个月，要留足等待时间。",ccfByYear:[{system:"CCF",year:2022,rank:"A"},{system:"CCF",year:2026,rank:"A"}]},{id:"percom",name:"IEEE International Conference on Pervasive Computing and Communication",shortName:"PerCom",type:"conference",rank:"领域旗舰",tags:["ubiquitous","device-free","localization"],link:"https://percom.org/",dblp:"https://dblp.uni-trier.de/db/conf/percom/",founded:2002,frequency:"每年 3 月",organizer:"IEEE",ccf:"B",description:"普适计算与通信交叉的经典会议，已办 25 届。设备无关感知（device-free sensing）是其传统强项，定位与追踪议题也很活跃。",values:{hci:3,sensing:5,systems:4,mobile:3,hardware:4,theory:3},valuesNote:"强调「无处不在」的通信与感知基础设施，device-free sensing 是其标志性议题。强制线下报告这一点对时间成本影响很大。",timeline:{cycle:"每年 3 月",months:"提前 6 个月征稿",bufferMonths:1},history:[{year:2027,paper:"2026-09-11",notification:"2026-12-18"},{year:2026,paper:"2025-09-12",notification:"2025-12-18"}],deadlines:[],submission:{pageLimit:"9 页正文 + 1 页参考文献",reviewModel:"double-blind",rebuttal:"有（11 月下旬收到早期拒稿通知或 rebuttal 邀请）",tracks:["WIP","PhD Forum","Workshops","Tutorials"],extra:"**强制线下报告**：无签证/健康等特殊情况豁免，论文需至少一位作者注册并到场，否则不进 IEEE Digital Library"},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 未收录此会议。社区数据约 15%，未经官方核实，仅供参考"},related:["ubicomp","imwut","sensys"],tips:"强制线下是最大的隐性成本，申签证要留出时间。接受率约 15%（社区数据，未核实）。有 rebuttal 环节，被拒的论文有二次机会。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}]},{id:"ipsn",name:"ACM/IEEE International Conference on Information Processing in Sensor Networks",shortName:"IPSN",type:"conference",rank:"领域重要",tags:["iot-sensing","embedded","wireless-network"],link:"https://ipsn.acm.org/",dblp:"https://dblp.uni-trier.de/db/conf/ipsn/",founded:2004,frequency:"每年 5 月",organizer:"ACM/IEEE",ccf:"B",description:"传感器网络方向最顶的会议。偏底层网络算法与分布式设计，理论性强的论文更受青睐。",values:{hci:1,sensing:4,systems:5,mobile:2,hardware:4,theory:5},valuesNote:"与 SenSys 互补：IPSN 偏「算法与网络」，SenSys 偏「系统与部署」。纯感知应用类工作在这里竞争力弱。",timeline:{cycle:"每年 5 月",months:"提前 7 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2025-10-03",notification:"2026-02-18"}],deadlines:[],submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Main Track","Workshop","Demo"],extra:""},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 未收录此会议，暂不填写以免误导"},related:["sensys","mass","tosn"],tips:"与 SenSys 征稿期接近，注意不要撞期。分布式算法、路由协议类创新是加分项。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}]},{id:"sensys",name:"ACM Conference on Embedded Networked Sensor Systems",shortName:"SenSys",type:"conference",rank:"领域重要",tags:["iot-sensing","embedded","device-free"],link:"https://sensys.org/",dblp:"https://dblp.uni-trier.de/db/conf/sensys/",founded:2003,frequency:"每年 5/11 月",organizer:"ACM/IEEE",ccf:"B",description:"传感器系统方向旗舰，与 IPSN 并列。偏系统实现与真实部署，强调场景价值而非纯实验室指标。",values:{hci:2,sensing:5,systems:5,mobile:3,hardware:5,theory:3},valuesNote:"系统与硬件取向明显，实验室原型需要说明实际部署价值。2019 年后加入 IPSN-W 等分会场。",timeline:{cycle:"每年 5 月",months:"提前 6-7 个月征稿",bufferMonths:1},history:[{year:2025,paper:"2025-05-28",notification:"2025-09-08"},{year:2024,paper:"2024-05-30",notification:"2024-09-08"}],deadlines:[],submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Main Track","Workshop","Demo"],extra:""},acceptanceStats:{source:"openaccept",confidence:"high",lastVerified:"2026-10-06",note:"主赛道数据，2025 年 45/235。整体录用率（含 workshop）也是 20%",history:[{year:2025,submitted:235,accepted:45,rate:19.15},{year:2023,submitted:179,accepted:35,rate:19.55},{year:2022,submitted:209,accepted:52,rate:24.88},{year:2021,submitted:139,accepted:25,rate:17.99},{year:2020,submitted:203,accepted:43,rate:21.18},{year:2019,submitted:144,accepted:28,rate:19.44},{year:2018,submitted:147,accepted:23,rate:15.65},{year:2017,submitted:152,accepted:26,rate:17.11}]},related:["ipsn","percom","tosn","mass"],tips:"录用率多年稳定在 17-25%，是本领域相对稳定的会议。系统类工作需要真实部署论证，评审会追问实际场景价值。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}]},{id:"mobisys",name:"ACM International Conference on Mobile Systems, Applications, and Services",shortName:"MobiSys",type:"conference",rank:"领域重要",tags:["mobile-systems","ubiquitous","embedded"],link:"https://mobsys.org/",dblp:"https://dblp.uni-trier.de/db/conf/mobisys/",founded:2003,frequency:"每年 6 月",organizer:"ACM",ccf:"B",description:"移动系统方向重要会议。感知工作若强调移动场景下的系统设计（如端侧实时推理）适合投这里。",values:{hci:3,sensing:3,systems:5,mobile:5,hardware:4,theory:3},valuesNote:"系统实现和性能评估是硬要求，纯算法工作偏弱。需要真实设备上的端到端实验数据。",timeline:{cycle:"每年 6 月",months:"提前 7 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2025-12-20",notification:"2026-03-20"},{year:2025,paper:"2024-12-20",notification:"2025-03-20"}],deadlines:[],submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Full Paper","Short Paper","Poster","Workshop","Demonstration"],extra:"Short Paper 篇幅较短，适合系统原型类工作"},acceptanceStats:{source:"openaccept",confidence:"high",lastVerified:"2026-10-06",note:"主赛道数据",history:[{year:2025,submitted:233,accepted:42,rate:18.03},{year:2024,submitted:263,accepted:43,rate:16.35},{year:2023,submitted:198,accepted:41,rate:20.71},{year:2022,submitted:176,accepted:38,rate:21.59},{year:2021,submitted:166,accepted:36,rate:21.69},{year:2020,submitted:175,accepted:34,rate:19.43},{year:2019,submitted:172,accepted:39,rate:22.67},{year:2018,submitted:138,accepted:37,rate:26.81}]},related:["ubicomp","imwut","percom"],tips:"录用率近 8 年从 27% 降到 16%，趋势明显收紧。投之前要看清跟组里工作的匹配度。Short Paper 是性价比选择。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}]},{id:"imwut",name:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",shortName:"IMWUT",type:"conference",rank:"领域重要",tags:["ubiquitous","har","wearable"],link:"https://dl.acm.org/journal/imwut",dblp:"https://dblp.uni-trier.de/db/journals/imwut/",founded:2017,frequency:"每年 4 期（季刊式会议）",organizer:"ACM",ccf:"B",description:"UbiComp 旗下面向所有议题的期刊式会议，季刊模式。评审周期比主会短，适合需要更快反馈或已中会议想扩展的场景。",values:{hci:5,sensing:4,systems:3,mobile:4,hardware:3,theory:3},valuesNote:"主题与 UbiComp 高度重合，但评审机制不同：逐期评审，首轮决定快（约 2-3 个月）。",timeline:{cycle:"每年 4 期",months:"全年滚动",bufferMonths:0},history:[{year:2026,paper:"2026-05-01",notification:"2026-07-26"}],deadlines:[],submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Covers all UbiComp topics"],extra:"可先投会议版，再扩展投此刊"},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 未收录此会议，暂不填写"},related:["ubicomp","percom","mobisys"],tips:"首轮决定约 2-3 个月，比 UbiComp 主会快很多。时间紧的时候是好选择。",ccfByYear:[{system:"CCF",year:2022,rank:"B"},{system:"CCF",year:2026,rank:"B"}]},{id:"mass",name:"IEEE International Conference on Mobile Ad Hoc and Sensor Networks",shortName:"MASS",type:"conference",rank:"领域重要",tags:["wireless-network","localization","iot-sensing"],link:"https://www.ieee-mass.org/",dblp:"https://dblp.uni-trier.de/db/conf/mass/",founded:2004,frequency:"每年 10 月",organizer:"IEEE",ccf:"C",description:"移动自组织与传感器网络会议，网络侧视角较强，定位与路由类工作适合。CCF C 但在领域内认可度不错。",values:{hci:1,sensing:4,systems:4,mobile:4,hardware:3,theory:4},valuesNote:"网络协议与定位算法导向。纯感知信号处理类工作匹配度一般，适合有网络侧创新的工作。",timeline:{cycle:"每年 10 月",months:"提前 6 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2026-05-10",notification:"2026-07-18"}],deadlines:[],submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"待核实",tracks:["Main Track","Workshop","Poster"],extra:""},acceptanceStats:{source:null,confidence:"none",note:"OpenAccept 未收录此会议，暂不填写"},related:["ipsn","sensys"],tips:"CCF C 但领域内认可度可以，定位算法类工作在上面认可度不错。适合作为 IPSN/SenSys 之外的备选。",ccfByYear:[{system:"CCF",year:2022,rank:"C"},{system:"CCF",year:2026,rank:"C"}]},{id:"ndss",name:"Network and Distributed System Security Symposium",shortName:"NDSS",type:"conference",rank:"领域重要",tags:["privacy","ubiquitous"],link:"https://www.ndss-symposium.org/",dblp:"https://dblp.uni-trier.de/db/conf/ndss/",founded:1994,frequency:"每年 2 月",organizer:"Internet Society (ISOC)",ccf:"A",description:"CCF A 网络安全顶会。无线感知涉及隐私泄露、侧信道攻击时，投这里影响力极大。",values:{hci:1,sensing:2,systems:4,mobile:2,hardware:3,theory:5},valuesNote:"安全视角。无线感知是近年热点方向——CSI 侧信道、无设备感知的隐私风险是活跃议题。纯感知算法工作不适合。",timeline:{cycle:"每年 2 月",months:"提前 7 个月征稿",bufferMonths:1},history:[{year:2026,paper:"2025-07-25",notification:"2025-12-15"}],deadlines:[],submission:{pageLimit:"以官网为准",reviewModel:"double-blind",rebuttal:"有",tracks:["Main Track","Workshops"],extra:"两个轮次提交，间隔约 4 个月"},acceptanceStats:{source:"openaccept",confidence:"high",lastVerified:"2026-10-06",note:"2025 投稿量翻倍（1311 vs 2024 的 682），竞争明显加剧",history:[{year:2025,submitted:1311,accepted:211,rate:16.09},{year:2024,submitted:682,accepted:140,rate:20.53},{year:2023,submitted:574,accepted:94,rate:16.38},{year:2022,submitted:513,accepted:83,rate:16.18},{year:2021,submitted:573,accepted:87,rate:15.18},{year:2020,submitted:506,accepted:88,rate:17.39}]},related:["ubicomp","percom"],tips:"如果工作涉及用 CSI 做隐私推断、或感知系统的攻击面，这是主要出口。2025 年投稿量翻倍是重要信号——这个方向正在变热。",ccfByYear:[{system:"CCF",year:2022,rank:"A"},{system:"CCF",year:2026,rank:"A"}]}],le=[{id:"tosn",name:"ACM Transactions on Sensor Networks",shortName:"TOSN",type:"journal",rank:"领域顶刊",tags:["iot-sensing","wireless-network","localization"],link:"https://dl.acm.org/journal/tosn",dblp:"https://dblp.uni-trier.de/db/journals/tosn/",publisher:"ACM",ccf:"B",cas:"一区",if:"4.6",openAccess:"hybrid",apc:"约 2600 美元",reviewCycle:"首次决定约 3-6 个月",frequency:"每年 8 期",values:{hci:1,sensing:5,systems:4,mobile:2,hardware:4,theory:5},valuesNote:"传感器网络的理论和方法论出口。SenSys/IPSN 的优秀工作常被邀请扩展投这里。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开"},related:["sensys","ipsn","tmc"],tips:"与 SenSys / IPSN 有紧密关系。会议优秀工作被邀请扩展是常见路径。",ccfByYear:[{system:"CCF",year:2022,rank:"B"}]},{id:"imwut-j",name:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",shortName:"IMWUT",type:"journal",rank:"领域顶刊",tags:["ubiquitous","har","wifi-sensing"],link:"https://dl.acm.org/journal/imwut",dblp:"https://dblp.uni-trier.de/db/journals/imwut/",publisher:"ACM",ccf:"B",cas:"一区",if:"4.6",openAccess:"hybrid",apc:"约 2600 美元",reviewCycle:"首轮决定约 2-3 个月",frequency:"每年 4 期",values:{hci:5,sensing:4,systems:3,mobile:4,hardware:3,theory:3},valuesNote:"与 UbiComp 同一出版方，主题一致但评审独立。对无线感知的容忍度和接受度都较高。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开"},related:["ubicomp","imwut"],tips:"首轮 2-3 个月是本领域最快的反馈周期之一。时间紧时优先考虑。",ccfByYear:[{system:"CCF",year:2022,rank:"B"}]},{id:"tmc",name:"IEEE Transactions on Mobile Computing",shortName:"TMC",type:"journal",rank:"领域顶刊",tags:["mobile-systems","ubiquitous","embedded"],link:"https://www.computer.org/csdl/journal/tm",dblp:"https://dblp.uni-trier.de/db/journals/tmc/",publisher:"IEEE",ccf:"A",cas:"二区",if:"5.4",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 5-8 个月",frequency:"每年 12 期",values:{hci:2,sensing:3,systems:5,mobile:5,hardware:3,theory:4},valuesNote:"移动计算顶刊。系统与算法结合的完整工作更有竞争力，纯感知应用偏弱。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开"},related:["mobisys","imwut-j","tosn"],tips:"审稿周期长（5-8 个月），要做被拒后转投的时间规划。CCF A 但中科院二区。",ccfByYear:[{system:"CCF",year:2022,rank:"A"}]},{id:"twc",name:"IEEE Transactions on Wireless Communications",shortName:"TWC",type:"journal",rank:"领域顶刊",tags:["wireless-network","signal-processing","localization"],link:"https://www.comsoc.org/publications/journals/twc",dblp:"https://dblp.uni-trier.de/db/journals/twc/",publisher:"IEEE",ccf:"A",cas:"一区",if:"5.2",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 4-6 个月",frequency:"每年 12 期",values:{hci:1,sensing:2,systems:3,mobile:3,hardware:3,theory:5},valuesNote:"偏通信理论。纯应用型感知工作命中率低，需要有通信侧创新（波形设计、资源分配等）。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开"},related:["ipsn","mass"],tips:"CCF A + 中科院一区，是无线感知方向理论工作的天花板。但要求通信侧的理论创新，纯感知应用不合适。",ccfByYear:[{system:"CCF",year:2022,rank:"A"}]},{id:"jsen",name:"IEEE Sensors Journal",shortName:"IEEE Sensors J",type:"journal",rank:"主流期刊",tags:["mmwave-radar","signal-processing","embedded"],link:"https://ieee-sensors.org/ieee-sensors-journal/",dblp:"https://dblp.uni-trier.de/db/journals/sensj/",publisher:"IEEE",ccf:null,cas:"二区",if:"4.3",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 3-5 个月",frequency:"每月15 期",values:{hci:1,sensing:5,systems:3,mobile:2,hardware:5,theory:2},valuesNote:"传感器领域务实取向。毫米波雷达实测类工作接受度高，系统创新不如算法创新看重。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开"},related:["twc","tmc"],tips:"组内投稿最稳妥的期刊。实测数据完整的话命中率较高，需提前确认版面费预算。",ccfByYear:[]},{id:"tcadh",name:"IEEE Transactions on Computational Social Systems",shortName:"TCADH",type:"journal",rank:"主流期刊",tags:["har","ubiquitous"],link:"https://www.computer.org/csdl/journal/sc",dblp:"https://dblp.uni-trier.de/db/journals/tcadh/",publisher:"IEEE",ccf:null,cas:"三区",if:"2.5",openAccess:"hybrid",apc:"约 2400 美元",reviewCycle:"首次决定约 2-4 个月",frequency:"每年 4 期",values:{hci:4,sensing:3,systems:2,mobile:2,hardware:1,theory:3},valuesNote:"社交与群体行为计算方向。涉及群体活动感知、社交计算类工作时可考虑。",acceptanceStats:{source:null,confidence:"none",note:"期刊录用率通常不公开"},related:["ubicomp"],tips:"分区偏低，适合作为毕业前的时间兜底，不适合作为主要成果。审稿 2-4 个月较快。",ccfByYear:[]}],j={_meta:ce,sources:re,tags:oe,conferences:de,journals:le},pe=[],ue={reports:pe},me=[{id:"wireless-sensing",name:"无线感知",enName:"Wireless Sensing",color:"blue",summary:"用射频信号感知物理世界与人体状态，不依赖佩戴设备或摄像头。",topics:[{id:"wifi-sensing",name:"WiFi / CSI 感知",desc:"利用 WiFi 信道状态信息做无设备人体感知"},{id:"mmwave-radar",name:"毫米波雷达感知",desc:"FMCW 雷达点云、雷达微多普勒、雷达感知呼吸心跳"},{id:"device-free",name:"无设备感知",desc:"设备无关的被动感知，PerCom 的传统强项"},{id:"rf-sensing",name:"通用射频感知",desc:"UWB、RFID、LoRa 等其他射频媒介的感知应用"},{id:"localization",name:"定位与追踪",desc:"室内定位、人员追踪、目标定位"}],venueIds:["percom","sensys","ipsn","ubicomp","imwut","tmc","tosn","mass"]},{id:"ubiquitous-computing",name:"普适计算",enName:"Ubiquitous Computing",color:"purple",summary:"计算隐入环境，设备从显式工具变为随时可用的基础设施。",topics:[{id:"context-awareness",name:"情境感知",desc:"环境与用户状态的建模、推理与自适应"},{id:"smart-environment",name:"智能环境",desc:"智能家居、智能空间、环境感知系统"},{id:"wearable",name:"可穿戴计算",desc:"智能手表、穿戴设备、纺织与柔性电子"},{id:"health-sensing",name:"健康感知",desc:"非接触生理监测、慢病管理、心理状态识别"},{id:"privacy",name:"感知隐私",desc:"侧信道、隐私泄露攻击与防护"}],venueIds:["ubicomp","imwut","percom","ndss","tmc"]},{id:"mobile-systems",name:"移动系统",enName:"Mobile Systems",color:"amber",summary:"移动设备上的系统级设计，关注性能、能耗与真实部署。",topics:[{id:"on-device-ai",name:"端侧智能",desc:"在手机和嵌入式设备上部署推理模型"},{id:"system-design",name:"系统设计",desc:"移动系统的架构与性能优化"},{id:"cross-device",name:"跨设备协同",desc:"多设备联动与群体感知"}],venueIds:["mobisys","ubicomp","imwut","percom","tmc"]},{id:"iot-systems",name:"物联网与传感系统",enName:"IoT & Sensor Systems",color:"coral",summary:"传感器网络与物联网的系统实现，强调真实部署与长期运行。",topics:[{id:"sensor-network",name:"传感器网络",desc:"网络协议、路由、能量管理"},{id:"edge-inference",name:"边缘推理",desc:"感知任务的端侧与边缘侧计算"},{id:"real-deployment",name:"真实部署",desc:"实际环境中的系统落地与验证"},{id:"embedded",name:"嵌入式实现",desc:"软硬件协同、实时性、平台适配"}],venueIds:["sensys","ipsn","mass","tosn","jsen"]},{id:"signal-processing",name:"信号处理",enName:"Signal Processing",color:"gray",summary:"感知信号的理论与方法基础，跨无线感知和雷达系统的公共底座。",topics:[{id:"radar-dsp",name:"雷达信号处理",desc:"点云处理、目标检测、杂波抑制"},{id:"estimation",name:"参数估计",desc:"到达时间、角度、距离估计"},{id:"waveform",name:"波形设计",desc:"FMCW 参数优化、波形与资源联合设计"}],venueIds:["twc","jsen","tmc","tosn"]}],he={areas:me},B=[...j.conferences,...j.journals],se=j.tags,D=he.areas,k=ue.reports,N=j._meta,A=j.sources,q=Object.fromEntries(B.map(s=>[s.id,s])),be=Object.fromEntries(D.map(s=>[s.id,s])),te=Object.fromEntries(se.map(s=>[s.id,s])),ye=s=>{var e;return((e=te[s])==null?void 0:e.name)||s},ae=s=>{const e=te[s];return`<span class="badge b-${(e==null?void 0:e.color)||"gray"}">${ye(s)}</span>`},T=[["hci","HCI / 以人为中心"],["sensing","感知贡献"],["systems","系统实现"],["mobile","移动场景"],["hardware","硬件实现"],["theory","理论创新"]],W=s=>{const e=s.ccfByYear||[];return e.length?e.map(i=>`<span class="badge b-teal">${c(i.system)} ${i.year}: ${c(i.rank)}</span>`).join(" "):'<span class="badge b-gray">未收录 CCF</span>'},I=s=>{const e=s.ccfByYear||[];return e.length?e.map(i=>i.system+" "+i.year+": "+i.rank).join(" / "):"未收录"},ve=864e5,Z=s=>{const[e,i,a]=s.split("-").map(Number);return Math.round((new Date(e,i-1,a)-new Date)/ve)},M=s=>s?s.replace(/-/g,"."):"—",c=s=>String(s??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),fe=(s,e)=>{var t;if(!s||s.confidence==="none")return'<div class="src-note"><span class="conf conf-none"><span class="conf-dot"></span>暂无核实数据</span></div>';const i=((t=A[s.source])==null?void 0:t.name)||s.source,a={high:"高置信",medium:"中等置信",low:"低置信"}[s.confidence]||s.confidence;return`<div class="src-note">
    <span class="conf conf-${s.confidence}"><span class="conf-dot"></span>${a}</span>
    <span>来源：${c(i)}</span>
    ${s.lastVerified?`<span>核对于 ${s.lastVerified}</span>`:""}
    
  </div>`},d={tab:"explore",area:null,venue:null,tag:"all",q:"",showPrivate:!1,cmp:["sensys","ubicomp","ipsn"]},g=document.getElementById("app");function ge(){var a,t;const s=[],e=new Date,i=new Date(e.getFullYear(),e.getMonth(),e.getDate());for(const n of j.conferences){for(const b of n.deadlines||[]){if(!b.date)continue;const S=Z(b.date);S<-30||S>400||s.push({venue:n,date:b.date,days:S,label:b.type||"截稿",est:!1})}if(!((a=n.timeline)!=null&&a.cycle)||!((t=n.history)!=null&&t.length))continue;const o=[...n.history].filter(b=>b.paper).sort((b,S)=>S.year-b.year)[0];if(!(o!=null&&o.paper))continue;const r=n.timeline.yearStep||1,[p,u,m]=o.paper.split("-").map(Number);if(!u||!m)continue;let v=p;for(let b=0;b<12&&(v+=r,!(P(v,u,m)>=i||v>e.getFullYear()+4));b++);const y=n.timeline.bufferMonths||1;let $=P(v,u-y,m);$<i&&($=P(v+r,u-y,m));const E=Z(ee($));E<-30||E>400||s.push({venue:n,date:ee($),days:E,label:"预计截稿",est:!0})}return s.sort((n,o)=>n.est===o.est?n.days-o.days:n.est?1:-1)}function P(s,e,i){const a=new Date(s,e-1,1),t=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();return new Date(s,e-1,Math.min(i,t))}function ee(s){const e=i=>String(i).padStart(2,"0");return`${s.getFullYear()}-${e(s.getMonth()+1)}-${e(s.getDate())}`}const $e=s=>{const e=s.days<0||s.days<=30?"urgent":s.days<=90?"soon":"normal",i=s.days<0?"已过":s.days===0?"今天":`${s.days} 天`;return`<div class="cd-row">
    <span class="cd-name">${s.venue.shortName}<span class="badge ${s.est?"b-gray":"b-green"}">${s.label}</span></span>
    <span class="cd-date">${M(s.date)}</span>
    <span class="cd-left ${e}">${i}</span>
  </div>`};function z(){if(d.area)return we(d.area);const s=D.map(e=>{const i=e.venueIds.map(t=>q[t]).filter(Boolean),a=i.filter(t=>t.type==="conference").length;return`<div class="area-card b-${e.color}" data-area="${e.id}">
      <h3>${c(e.name)}</h3>
      <div class="en">${c(e.enName)}</div>
      <p>${c(e.summary)}</p>
      <div style="display:flex;gap:5px;flex-wrap:wrap">
        <span class="badge b-gray">${e.topics.length} 个子主题</span>
        <span class="badge b-gray">${a} 会议 · ${i.length-a} 期刊</span>
      </div>
    </div>`}).join("");return`
  <div class="page-head">
    <h1>研究领域导航</h1>
    <p>${N.field} · 从研究问题出发，找到相关的会议与期刊</p>
  </div>
  <div class="banner">
    <b>数据更新于 ${N.lastUpdated}</b>
    <span>录用率等数据均标注来源与置信度。价值维度评分是编辑解读，不是官方数据。</span>
  </div>
  <div class="area-grid">${s}</div>`}function we(s){const e=be[s];if(!e)return d.area=null,z();const i=e.venueIds.map(r=>q[r]).filter(Boolean),a=i.filter(r=>r.type==="conference"),t=i.filter(r=>r.type==="journal"),n=e.topics.map(r=>{const p=i.filter(u=>{var m;return(m=u.tags)==null?void 0:m.some(v=>r.id.includes(v)||v.includes(r.id.split("-")[0]))});return`<div class="topic-item">
      <div><b>${c(r.name)}</b><div style="font-size:11.5px;color:var(--text-3);margin-top:1px">${c(r.desc)}</div></div>
      <span>${p.length?p.length+" 个相关 venue":"—"}</span>
    </div>`}).join(""),o=r=>{var m;const p=r.acceptanceStats,u=(m=p==null?void 0:p.history)==null?void 0:m[0];return`<div class="rel-card" data-venue="${r.id}">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px">
        <span class="n">${c(r.shortName)}</span>
        <span class="badge b-gray">${r.type==="conference"?"会议":"期刊"}</span>
      </div>
      <div class="d">${I(r)}${r.cas?" · 中科院"+r.cas:""}</div>
      <div class="d">${u?`近年录用率 ${u.rate}%`:"录用率暂无核实数据"}</div>
    </div>`};return`
  <button class="back-link" data-back="areas">← 返回研究领域</button>
  <div class="page-head">
    <h1>${c(e.name)}</h1>
    <p>${c(e.enName)} · ${c(e.summary)}</p>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>子主题</h2><span class="hint">${e.topics.length} 个</span></div>
    <div class="topic-list">${n}</div>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>相关会议</h2><span class="hint">${a.length} 个 · 点击查看详情</span></div>
    ${a.length?`<div class="rel-grid">${a.map(o).join("")}</div>`:'<p class="no-data">暂无</p>'}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>相关期刊</h2><span class="hint">${t.length} 本</span></div>
    ${t.length?`<div class="rel-grid">${t.map(o).join("")}</div>`:'<p class="no-data">暂无</p>'}
  </div>`}function Ce(s){var E,b,S,L,U,Y,O,R,V;const e=q[s];if(!e)return d.venue=null,z();const i=e.type==="conference",a=e.acceptanceStats||{},t=(a.history||[]).slice().sort((l,f)=>l.year-f.year),n=[["类型",i?"会议":"期刊"],["主办",i?e.organizer:e.publisher],["成立年份",e.founded||"—"],["周期",e.frequency||"—"],["分级",I(e)],i?["页数限制",((E=e.submission)==null?void 0:E.pageLimit)||"—"]:["中科院分区",e.cas||"—"],i?["评审模式",((b=e.submission)==null?void 0:b.reviewModel)||"—"]:["影响因子",e.if||"—"],i?["Rebuttal",((S=e.submission)==null?void 0:S.rebuttal)||"—"]:["审稿周期",e.reviewCycle||"—"]],o=(()=>{if(!t.length)return"";const l=Math.max.apply(null,t.map(h=>h.submitted));return'<div class="trend">'+t.map(function(h){const w=Math.max(4,Math.round(h.submitted/l*56)),x=Math.max(3,Math.round(h.accepted/l*56));return'<div class="trend-col"><div class="trend-bars" title="'+(h.year+" 投稿 "+h.submitted+"，录用 "+h.accepted)+'"><span class="tb sub" style="height:'+w+'px"></span><span class="tb" style="height:'+x+'px"></span></div><span class="trend-x">'+String(h.year).slice(2)+"</span></div>"}).join("")+"</div>"})(),r=t.slice().reverse().map(l=>"<tr><td>"+l.year+'</td><td class="num">'+l.submitted+'</td><td class="num">'+l.accepted+'</td><td class="num">'+l.rate+"%</td></tr>").join(""),p=t.length?'<table class="data"><thead><tr><th>年份</th><th class="num">投稿</th><th class="num">录用</th><th class="num">录用率</th></tr></thead><tbody>'+r+"</tbody></table>":"",u=i?(()=>{var h,w,x,F,_,H,J,G,K,Q;const l=[["CFP",(w=(h=e.submission)==null?void 0:h.extra)!=null&&w.includes("强制")?"见官网":"征稿开始"],["Abstract",(x=e.deadlines)!=null&&x[0]?M(e.deadlines[0].date):"见官网"],["Full Paper",(_=(F=e.history)==null?void 0:F[0])!=null&&_.paper?M(e.history[0].paper)+" ("+e.history[0].year+")":"见官网"],["Review","评审"],["Rebuttal",(J=(H=e.submission)==null?void 0:H.rebuttal)!=null&&J.startsWith("有")?"有":"—"],["Notification",(K=(G=e.history)==null?void 0:G[0])!=null&&K.notification?M(e.history[0].notification):"见官网"],["Conference",((Q=e.timeline)==null?void 0:Q.cycle)||"—"]];return'<div class="flow">'+l.map((X,ie)=>'<span class="flow-step">'+c(X[0])+'<span style="color:var(--text-3)"> '+c(X[1])+"</span></span>"+(ie<l.length-1?'<span class="flow-arrow">→</span>':"")).join("")+"</div>"})():"",m=(e.related||[]).map(function(l){return q[l]}).filter(Boolean),v=m.map(function(l){const f=l.acceptanceStats&&l.acceptanceStats.history&&l.acceptanceStats.history[0],h=I(l),w=l.cas?" · "+l.cas:"",x=f?"录用率 "+f.rate+"%":"录用率未核实";return'<div class="rel-card" data-venue="'+l.id+'"><div class="n">'+c(l.shortName)+'</div><div class="d">'+h+w+'</div><div class="d">'+x+"</div></div>"}),y=m.length?v.join(""):'<p class="no-data">暂无关联 venue</p>',$=D.filter(l=>l.venueIds.includes(e.id));return`
  <button class="back-link" data-back="venues">← 返回会议与期刊列表</button>
  <div class="profile-head">
    <h1>${c(e.shortName)}</h1>
    <div class="full">${c(e.name)}</div>
    <div class="profile-badges">
      <span class="badge ${i?"b-blue":"b-purple"}">${i?"会议":"期刊"}</span>
      ${W(e)}
      ${e.cas?`<span class="badge b-coral">中科院${e.cas}</span>`:""}
      <span class="badge b-gray">${c(e.rank)}</span>
      ${e.if?`<span class="badge b-amber">IF ${e.if}</span>`:""}
    </div>
    <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
      ${(e.tags||[]).map(ae).join("")}
    </div>
    <div style="margin-top:12px;display:flex;gap:14px;flex-wrap:wrap;font-size:12.5px">
      <a href="${e.link}" target="_blank" rel="noopener">官网 ↗</a>
      ${e.dblp?`<a href="${e.dblp}" target="_blank" rel="noopener">DBLP ↗</a>`:""}
      ${e.apc?`<span style="color:var(--text-3)">版面费 ${c(e.apc)}</span>`:""}
    </div>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>基本信息</h2></div>
    <div class="facts">${n.map(([l,f])=>`<div class="fact"><div class="k">${c(l)}</div><div class="v">${c(f)}</div></div>`).join("")}</div>
    <p style="margin-top:14px">${c(e.description)}</p>
  </div>

  <div class="mod">
    <div class="mod-head">
      <h2>这个 venue 看重什么</h2>
      <span class="hint">编辑解读 · 非官方数据</span>
    </div>
    ${T.map(([l,f])=>{var w;const h=((w=e.values)==null?void 0:w[l])||0;return`<div class="rating-row">
        <span class="dim">${c(f)}</span>
        <span class="stars">${[1,2,3,4,5].map(x=>`<span class="star ${x<=h?"on":""}"></span>`).join("")}</span>
        <span class="val">${h}/5</span>
      </div>`}).join("")}
    ${e.valuesNote?`<div class="editor-note">${c(e.valuesNote)}</div>`:""}
    ${$.length?`<div class="src-note" style="margin-top:10px">所属领域：${$.map(l=>c(l.name)).join("、")}</div>`:""}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>数据来源</h2><span class="hint">每个字段的可信度</span></div>
    <table class="data">
      <thead><tr><th>字段</th><th>值</th><th>来源</th><th>置信度</th></tr></thead>
      <tbody>
        <tr>
          <td>CCF 分级</td>
          <td>${c(I(e))}</td>
          <td>${c(A.ccf.name)}</td>
          <td><span class="conf conf-high"><span class="conf-dot"></span>高</span></td>
        </tr>
        ${e.cas?`<tr>
          <td>中科院分区</td><td>${c(e.cas)}</td>
          <td>${c(A.ccf.name)}</td>
          <td><span class="conf conf-medium"><span class="conf-dot"></span>中（每年调整）</span></td>
        </tr>`:""}
        ${e.if?`<tr>
          <td>影响因子</td><td>${c(e.if)}</td>
          <td>期刊官网</td>
          <td><span class="conf conf-medium"><span class="conf-dot"></span>中（每年更新）</span></td>
        </tr>`:""}
        <tr>
          <td>价值维度评分</td><td>6 项× 1-5 星</td>
          <td>${c(A.editor.name)}</td>
          <td><span class="conf conf-low"><span class="conf-dot"></span>编辑解读</span></td>
        </tr>
        <tr>
          <td>录用率</td>
          <td>${(L=a.history)!=null&&L.length?a.history.length+" 年数据":"暂无"}</td>
          <td>${a.source?c(((U=A[a.source])==null?void 0:U.name)||a.source):"—"}</td>
          <td><span class="conf conf-${a.confidence||"none"}"><span class="conf-dot"></span">${{high:"高",medium:"中",low:"低",none:"无数据"}[a.confidence||"none"]}</span></td>
        </tr>
        <tr>
          <td>投稿要求</td><td>见投稿流程模块</td>
          <td>${c(e.organizer||e.publisher||"官网")}</td>
          <td><span class="conf conf-none"><span class="conf-dot"></span>请以官网为准</span></td>
        </tr>
      </tbody>
    </table>
    <div class="src-note" style="margin-top:10px">${c(N.dataPolicy)}</div>
  </div>

  ${i?`<div class="mod">
    <div class="mod-head"><h2>投稿流程与时间线</h2><span class="hint">日期来源见各项标注</span></div>
    ${u}
    ${(O=(Y=e.submission)==null?void 0:Y.tracks)!=null&&O.length?`<div style="margin-top:10px">
      <div style="font-size:11.5px;color:var(--text-3);margin-bottom:4px">Track / 投稿类型</div>
      <div style="display:flex;gap:5px;flex-wrap:wrap">${e.submission.tracks.map(l=>`<span class="badge b-gray">${c(l)}</span>`).join("")}</div>
    </div>`:""}
    ${(R=e.submission)!=null&&R.extra?`<div class="editor-note">${c(e.submission.extra)}</div>`:""}
    <div class="src-note" style="margin-top:10px">投稿要求以${c(e.organizer||e.publisher)}官网为准，此处仅作速查</div>
  </div>`:""}

  <div class="mod">
    <div class="mod-head">
      <h2>${i?"录用率":"审稿与录用"}</h2>
      <span class="hint">${t.length?t.length+" 年数据":"暂无数据"}</span>
    </div>
    ${t.length?`${o}
      <div style="display:flex;gap:14px;font-size:11.5px;color:var(--text-3);margin:6px 0 14px">
        <span><span style="display:inline-block;width:8px;height:8px;background:var(--border-strong);border-radius:2px;margin-right:4px"></span>投稿数</span>
        <span><span style="display:inline-block;width:8px;height:8px;background:var(--accent);border-radius:2px;margin-right:4px"></span>录用数</span>
      </div>
      ${p}
      ${(V=e.acceptanceStats)!=null&&V.note?`<div class="src-note" style="margin-top:10px">${c(e.acceptanceStats.note)}</div>`:""}
    `:`<p class="no-data">${c(a.note||"暂无核实数据")}</p>`}
    ${fe(a)}
  </div>

  <div class="mod">
    <div class="mod-head"><h2>相似与相关 venue</h2><span class="hint">${m.length} 个</span></div>
    <div class="rel-grid">${y}</div>
  </div>

  ${e.tips?`<div class="mod">
    <div class="mod-head"><h2>组内经验</h2><span class="hint">来自组内投稿记录</span></div>
    <p>${c(e.tips)}</p>
  </div>`:""}`}function ke(){const s=d.cmp.map(t=>q[t]).filter(Boolean),e=B.map(t=>`<button class="chip ${d.cmp.includes(t.id)?"on":""}" data-cmp="${t.id}">${c(t.shortName)}</button>`).join("");if(s.length<2)return`
    <div class="page-head">
      <h1>Venue 对比</h1>
      <p>并排比较多个 venue，看清它们的区别</p>
    </div>
    <div class="banner"><b>至少选择 2 个</b><span>当前已选 ${s.length} 个</span></div>
    <div class="cmp-picker">${e}</div>
    <div class="empty" style="margin-top:16px">再选几个就能看到对比表</div>`;const i=(t,n,o)=>{const r=s.map(n);return`<tr>
      <td style="color:var(--text-2)">${c(t)}</td>
      ${r.map((p,u)=>`<td class="num">${p??"—"}</td>`).join("")}
    </tr>`},a=T.map(([t,n])=>{const o=s.map(p=>{var u;return((u=p.values)==null?void 0:u[t])||0}),r=Math.max(...o);return`<tr>
      <td style="color:var(--text-2)">${c(n)}</td>
      ${o.map(p=>`<td class="num ${p===r?"cmp-best":""}">${p}/5</td>`).join("")}
    </tr>`}).join("");return s.map(t=>{var o,r;const n=(r=(o=t.acceptanceStats)==null?void 0:o.history)==null?void 0:r[0];return n?n.rate:null}),`
  <div class="page-head">
    <h1>Venue 对比</h1>
    <p>并排比较，绿色高亮为该行最高值</p>
  </div>
  <div class="cmp-picker" style="margin-bottom:16px">${e}</div>

  <div class="mod cmp-table">
    <table class="data">
      <thead><tr>
        <th>维度</th>
        ${s.map(t=>`<th class="num cmp-name" data-venue="${t.id}">${c(t.shortName)}</th>`).join("")}
      </tr></thead>
      <tbody>
        <tr><td style="color:var(--text-3)">类型</td>${s.map(t=>`<td class="num">${t.type==="conference"?"会议":"期刊"}</td>`).join("")}</tr>
        <tr><td style="color:var(--text-3)">分级</td>${s.map(t=>`<td class="num">${I(t)}</td>`).join("")}</tr>
        <tr><td style="color:var(--text-3)">中科院</td>${s.map(t=>`<td class="num">${t.cas||"—"}</td>`).join("")}</tr>
        <tr style="background:var(--surface-2)"><td colspan="${s.length+1}" style="font-size:11.5px;color:var(--text-3)">价值取向（编辑解读）</td></tr>
        ${a}
        <tr style="background:var(--surface-2)"><td colspan="${s.length+1}" style="font-size:11.5px;color:var(--text-3)">投稿事实</td></tr>
        ${i("录用率（最新）",t=>{var o,r;const n=(r=(o=t.acceptanceStats)==null?void 0:o.history)==null?void 0:r[0];return n?n.rate+"%":null})}
        ${i("投稿数（最新）",t=>{var n,o,r;return((r=(o=(n=t.acceptanceStats)==null?void 0:n.history)==null?void 0:o[0])==null?void 0:r.submitted)??null})}
        ${i("页数/篇幅",t=>{var n;return t.type==="conference"?(((n=t.submission)==null?void 0:n.pageLimit)||"").replace(/以官网为准/,"见官网").slice(0,22):`${t.reviewCycle||"—"}`})}
        ${i("Rebuttal",t=>{var n,o;return t.type==="conference"&&(o=(n=t.submission)==null?void 0:n.rebuttal)!=null&&o.startsWith("有")?"有":"—"})}
        <tr><td style="color:var(--text-3)">数据置信</td>${s.map(t=>{var r;const n=((r=t.acceptanceStats)==null?void 0:r.confidence)||"none",o={high:"高",medium:"中",low:"低",none:"无数据"}[n];return`<td class="num"><span class="conf conf-${n}"><span class="conf-dot"></span>${o}</span></td>`}).join("")}</tr>
      </tbody>
    </table>
  </div>

  <div class="mod">
    <div class="mod-head"><h2>关键差异</h2><span class="hint">编辑解读</span></div>
    ${s.map(t=>`<div style="padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="font-weight:500;font-size:13.5px">${c(t.shortName)}</div>
      <div style="font-size:12.5px;color:var(--text-2);margin-top:2px">${c(t.valuesNote||t.description)}</div>
    </div>`).join("")}
  </div>`}function Se(){const e=ge().slice(0,8),i=k.filter(n=>n.status==="accepted").length,a=k.filter(n=>n.status==="under-review").length,t=k.filter(n=>n.status==="rejected").length;return`
  <div class="page-head">
    <h1>投稿信息看板</h1>
    <p>${N.field} · 组内会议与期刊的截止时间、投稿经验和历史记录</p>
  </div>
  <div class="banner">
    <b>数据更新于 ${N.lastUpdated}</b>
    <span>标注「预计截稿」的日期由往年周期估算，仅作规划参考；实际日期请以官网 CFP 为准。</span>
  </div>

  <section>
    <div class="sec-head">
      <h2>未来截稿窗口</h2>
      <span class="hint">按预计截稿时间排序，覆盖约未来 12 个月</span>
    </div>
    ${e.length?e.map($e).join(""):'<div class="empty">暂无数据</div>'}
  </section>

  <section>
    <div class="sec-head"><h2>投稿概览</h2></div>
    <div class="grid c3">
      <div class="card"><div class="card-meta">已收录会议</div><div class="card-name">${j.conferences.length} 个</div></div>
      <div class="card"><div class="card-meta">已收录期刊</div><div class="card-name">${j.journals.length} 本</div></div>
      <div class="card">
        <div class="card-meta">组内投稿记录</div>
        <div class="card-name">${k.length?`${k.length} 条 · 命中 ${i}`:"待补充"}</div>
      </div>
    </div>
  </section>

  <section>
    <div class="sec-head">
      <h2>最近战报</h2>
      ${k.length?`<span class="hint">${a} 条在审 · ${t} 条已拒</span>`:'<span class="hint">暂无记录</span>'}
    </div>
    ${ne()}
  </section>`}function xe(){const s=B.filter(a=>!(d.tag!=="all"&&!(a.tags||[]).includes(d.tag)||d.q&&!(a.shortName+a.name+a.description).toLowerCase().includes(d.q.toLowerCase()))),e=`<div class="filters">
    <input type="search" id="q" placeholder="搜索会议或期刊…" value="${d.q}" />
    <button class="chip ${d.tag==="all"?"on":""}" data-tag="all">全部</button>
    ${se.map(a=>`<button class="chip ${d.tag===a.id?"on":""}" data-tag="${a.id}">${a.name}</button>`).join("")}
  </div>`,i=s.map(function(a){const t=a.type==="journal",n=a.acceptanceStats||{},o=n.history||[],r=o[o.length-1],p=t?'<span class="badge b-purple">'+c(a.rank)+"</span>"+W(a)+(a.cas?'<span class="badge b-coral">中科院'+a.cas+"</span>":"")+(a.if?'<span class="badge b-amber">IF '+a.if+"</span>":""):'<span class="badge b-blue">'+c(a.rank)+"</span>"+W(a)+'<span class="badge b-gray">'+c(a.timeline?a.timeline.cycle:"")+"</span>",u=r?"<span>录用率 "+r.year+" 年<b>"+r.rate+'%</b></span><span class="conf conf-'+n.confidence+'"><span class="conf-dot"></span>'+({high:"高置信",medium:"中置信",low:"低置信"}[n.confidence]||"")+"</span>":'<span style="color:var(--text-3)">录用率暂无核实数据</span>',m=T.map(function(y){return{n:y[0],label:y[1],v:a.values?a.values[y[0]]:0}}).sort(function(y,$){return $.v-y.v}).slice(0,2).map(function(y){return"<span>"+y.label.split(" / ")[0]+" "+y.v+"/5</span>"}).join(""),v=t?"<span>"+c(a.publisher)+"</span><span>"+c(a.reviewCycle||"")+"</span>":"<span>"+c(a.timeline?a.timeline.months:"")+"</span>";return'<div class="card" data-venue="'+a.id+'"><div class="card-top"><div><div class="card-name">'+c(a.shortName)+'</div><div class="card-meta">'+c(a.name)+"</div></div></div><div>"+p+'</div><div class="card-desc">'+c(a.description)+"</div><div>"+(a.tags||[]).map(ae).join(" ")+'</div><div class="card-foot">'+u+m+v+"</div></div>"}).join("");return`
  <div class="page-head">
    <h1>会议与期刊</h1>
    <p>共 ${B.length} 条记录 · 点击卡片查看详情（含录用率、价值取向、投稿流程）</p>
  </div>
  ${e}
  ${s.length?`<div class="grid c3">${i}</div>`:'<div class="empty">没有匹配的记录</div>'}`}function ne(){const s=k.filter(e=>d.showPrivate||e.public);return s.length?s.map(e=>{var t;const i={accepted:["已录用","b-green"],rejected:["已拒稿","b-red"],under_review:["在审","b-amber"],"under-review":["在审","b-amber"]}[e.status]||["—","b-gray"],a=(e.reviews||[]).map(n=>{var o,r;return`
      <div class="review-line"><span class="lbl">第 ${n.round} 轮评审意见摘要</span>${n.summary}</div>
      ${(o=n.strengths)!=null&&o.length?`<div class="review-line"><span class="lbl">认可之处</span><ul class="pts">${n.strengths.map(p=>`<li>${p}</li>`).join("")}</ul></div>`:""}
      ${(r=n.weaknesses)!=null&&r.length?`<div class="review-line"><span class="lbl">主要问题</span><ul class="pts">${n.weaknesses.map(p=>`<li>${p}</li>`).join("")}</ul></div>`:""}`}).join("");return`<div class="report">
      <div class="report-head">
        <div>
          <div class="report-title">${e.title}</div>
          <div class="card-meta">${e.venueName} · ${e.year} · ${e.member}</div>
        </div>
        <span class="badge ${i[1]}">${i[0]}</span>
      </div>
      <div class="report-grid">
        <dl class="kv"><dt>投稿日期</dt><dd>${M(e.submittedAt)}</dd></dl>
        <dl class="kv"><dt>决定日期</dt><dd>${M(e.decidedAt)}</dd></dl>
        <dl class="kv"><dt>审稿轮次</dt><dd>${e.round||1}</dd></dl>
        <dl class="kv"><dt>总耗时</dt><dd>${e.daysElapsed?e.daysElapsed+" 天":"—"}</dd></dl>
      </div>
      ${(t=e.reviews)!=null&&t.length?`<details class="review"><summary>查看审稿意见</summary><div class="review-body">${a}</div></details>`:'<div class="locked">暂无审稿意见记录</div>'}
      ${e.lessons?`<div class="lesson">${e.lessons}</div>`:""}
    </div>`}).join(""):`<div class="empty">
      <div class="empty-title">${k.length===0?"这个板块还没有内容":"当前视角下没有记录"}</div>
      <p class="empty-desc">战报记录每一次投稿的审稿意见和经验总结，是组里最难得的经验沉淀。</p>
      <p class="empty-desc">添加方式：复制 <code>data/reports.json</code> 里的 <code>_template</code> 结构，追加到 <code>reports</code> 数组，提交 PR 即可。</p>
      ${k.length===0?'<p class="empty-desc">哪怕只是写一条刚投过的记录，也是有价值的起点。</p>':'<p class="empty-desc">切换到「包含私有记录」可查看尚未公开的内容。</p>'}
    </div>`}function je(){return`
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
  ${ne()}`}function Ne(){return`
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
  </div>`}const Ee=[["explore","研究领域"],["venues","会议与期刊"],["compare","对比"],["home","看板"],["reports","论文战报"],["guide","投稿指南"]];function C(){const e={explore:z,profile:()=>Ce(d.venue),venues:xe,compare:ke,home:Se,reports:je,guide:Ne}[d.tab](),i=d.tab==="explore"&&d.venue?"venues":d.tab;g.innerHTML=`
    <header>
      <div class="wrap header-in">
        <div class="logo">投稿知识库<span>Research Venue Navigator</span></div>
        <nav>${Ee.map(([a,t])=>`<button class="${i===a?"on":""}" data-tab="${a}">${t}</button>`).join("")}</nav>
      </div>
    </header>
    <main class="wrap">${e}</main>
    <footer><div class="wrap">
      数据更新于 ${N.lastUpdated} · 维护者：${N.maintainers.join("、")} ·
      录用率数据来自 ${c(A.openaccept.name)} 等公开来源，价值维度为编辑解读 ·
      投稿决策请以各会议官网信息为准
    </div></footer>`,Ae()}function Ae(){g.querySelectorAll("[data-tab]").forEach(e=>e.onclick=()=>{d.tab=e.dataset.tab,d.area=null,d.venue=null,C()}),g.querySelectorAll("[data-tag]").forEach(e=>e.onclick=()=>{d.tag=e.dataset.tag,C()}),g.querySelectorAll("[data-priv]").forEach(e=>e.onclick=()=>{d.showPrivate=e.dataset.priv==="1",C()}),g.querySelectorAll("[data-area]").forEach(e=>e.onclick=()=>{d.area=e.dataset.area,C()}),g.querySelectorAll("[data-venue]").forEach(e=>e.onclick=()=>{d.venue=e.dataset.venue,d.tab="profile",C()}),g.querySelectorAll("[data-cmp]").forEach(e=>e.onclick=()=>{const i=e.dataset.cmp,a=d.cmp.indexOf(i);a>=0?d.cmp.splice(a,1):d.cmp.push(i),C()}),g.querySelectorAll("[data-back]").forEach(e=>e.onclick=()=>{e.dataset.back==="areas"?(d.area=null,d.tab="explore"):e.dataset.back==="venues"?(d.venue=null,d.tab="venues"):(d.venue=null,d.tab="explore"),C()});const s=g.querySelector("#q");s&&(s.oninput=e=>{d.q=e.target.value;const i=e.target.selectionStart;C();const a=g.querySelector("#q");a&&(a.focus(),a.setSelectionRange(i,i))})}C();
