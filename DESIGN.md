# scoop 设计方案

**Research Venue Navigator** —— 无线感知 / 普适计算方向的会议期刊认知平台

线上：https://xiuliangwu.github.io/scoop/

---

## 一、产品定位

> 帮助研究者从「我的研究是什么」出发，理解相关会议/期刊的定位、研究范围、竞争程度、投稿规则，并辅助选择投稿目标。

与现有平台的区别：

| 平台 | 回答的问题 |
|---|---|
| CCF / CORE | 哪个等级？ |
| CSRankings | 哪些是顶级 venue？ |
| OpenAccept | 难不难投？ |
| Deadline sites | 什么时候投？ |
| DBLP | 发表了什么？ |
| **scoop** | **这个 venue 到底是什么？我的工作适合吗？** |

---

## 二、三个核心能力

1. **Understand** —— 讲清一个会议/期刊是什么
2. **Compare** —— 讲清几个相似 venue 的区别
3. **Decide** —— 形成投稿候选

第一版聚焦 Understand 和 Compare，Decide 靠标签筛选 + 对比表辅助。

---

## 三、页面结构

```
研究领域（Explore）
    ↓  领域 → 子主题 → Venue
Venue Profile          对比（Compare）
    ↓
论文战报 · 看板 · 投稿指南
```

### Explore · 研究领域导航

`data/areas.json` 定义三层结构：**领域 → 子主题 → 关联 venue**

| 领域 | 子主题数 | 关联 venue |
|---|---|---|
| 无线感知 | 5 | 8 |
| 普适计算 | 5 | 5 |
| 移动系统 | 3 | 5 |
| 物联网与传感系统 | 4 | 5 |
| 信号处理 | 3 | 4 |

进入领域后展示子主题清单 + 相关会议/期刊卡片，点击进入 Profile。

### Venue Profile · 7 个模块

1. **基本信息** —— 类型、主办方、成立年份、周期、分级、页数、评审模式
2. **这个 venue 看重什么** —— 6 维度评分（编辑解读）+ 文字说明
3. **投稿流程与时间线** —— CFP → Abstract → Paper → Review → Rebuttal → Notification → Conference
4. **录用率** —— 趋势图（投稿数+录用数双柱）+ 逐年表格 + 置信度标注
5. **相似与相关 venue** —— 带录用率的关联卡片
6. **组内经验** —— tips 字段
7. **数据来源** —— 每个字段的值、来源、置信度

### Compare · 对比

选中多个 venue 并排对比，价值维度行自动高亮最优项。下方附「关键差异」文字说明。

---

## 四、领域地图

### 会议（8）

| 会议 | CCF | 定位 | 录用率 | 适配|
|---|---|---|---|---|
| **UbiComp** | A | 领域旗舰 | ~20% | 以人为中心，HCI 属性强 |
| **PerCom** | B | 领域旗舰 | ~15%(未核实) | device-free sensing 传统强项 |
| **IPSN** | B | 重要 | 暂无数据 | 偏底层网络算法 |
| **SenSys** | B | 重要 | 19.15%(2025) | 系统实现与真实部署 |
| **MobiSys** | B | 重要 | 18.03%(2025) | 移动场景系统设计 |
| **IMWUT** | B | 重要 | 暂无数据 | 季刊模式，首轮快 |
| **MASS** | C | 重要 | 暂无数据 | 定位算法、网络协议 |
| **NDSS** | A | 重要 | 16.09%(2025) | 感知隐私、侧信道 |

### 期刊（6）

| 期刊 | CCF | 中科院 | IF | 审稿周期 |
|---|---|---|---|---|
| TOSN | B | 一区 | 4.6 | 3-6 月 |
| IMWUT | B | 一区 | 4.6 | 2-3 月 |
| TMC | A | 二区 | 5.4 | 5-8 月 |
| TWC | A | 一区 | 5.2 | 4-6 月 |
| IEEE Sensors J | — | 二区 | 4.3 | 3-5 月 |
| TCADH | — | 三区 | 2.5 | 2-4 月 |

### 领域标签（13）

```
WiFi 感知    毫米波雷达   无设备感知  活动识别
定位追踪     普适计算     移动系统    物联网感知
无线网络     信号处理     嵌入式      可穿戴      感知隐私
```

---

## 五、数据可信度原则

这是本项目最重要的设计约束。

### 事实与编辑判断严格分离

| 类型 | 标识 | 例子 |
|---|---|---|
| **事实数据** | 标注来源 + 置信度 | 录用率、投稿数、CCF 等级 |
| **编辑判断** | 明确标注「编辑解读，非官方数据」 | 6 维度价值评分 |

### 每个字段都要能回答「从哪来的」

```json
"acceptanceStats": {
  "source": "openaccept",
  "confidence": "high",
  "lastVerified": "2026-10-06",
  "note": "主赛道数据",
  "history": [{ "year": 2025, "submitted": 235, "accepted": 45, "rate": 19.15 }]
}
```

置信度分级：
- `high` —— 官方或权威数据库直接可查
- `medium` —— 社区整理但数据可信
- `none` —— **不填数据**，页面显示「暂无核实数据」

### 不填估算值

无法核实的字段一律留空并说明原因。这比填一个看起来合理的数字更有价值 —— 后者会误导投稿决策。

### 分级必须带年份

```json
"ccfByYear": [
  { "system": "CCF", "year": 2022, "rank": "A" },
  { "system": "CCF", "year": 2026, "rank": "A" }
]
```

评价体系本身会变。CCF 目录已出 2026 版，页面上应显示 `CCF 2022: A / CCF 2026: A` 而不是笼统的「CCF A」。

---

## 六、数据模型

```
data/
├── areas.json       研究领域 → 子主题 → venue 关联
├── venues.json      会议 + 期刊完整档案
└── reports.json     论文战报
```

### venues.json 结构

```jsonc
{
  "id": "sensys",
  "shortName": "SenSys",
  "type": "conference",
  "founded": 2003,
  "organizer": "ACM/IEEE",
  "ccfByYear": [{ "system": "CCF", "year": 2022, "rank": "B" }],
  "tags": ["iot-sensing", "embedded"],

  // 价值取向：编辑解读
  "values": { "hci": 2, "sensing": 5, "systems": 5, "mobile": 3, "hardware": 5, "theory": 3 },
  "valuesNote": "系统与硬件取向明显，实验室原型需要说明实际部署价值。",

  // 截稿推算依赖
  "timeline": { "cycle": "每年 5 月", "bufferMonths": 1, "yearStep": 1 },
  "history": [{ "year": 2025, "paper": "2025-05-28", "notification": "2025-09-08" }],
  "deadlines": [{ "type": "第 3 轮", "date": "2026-11-01" }],

  "submission": {
    "pageLimit": "9 页正文 + 1 页参考文献",
    "reviewModel": "double-blind",
    "rebuttal": "有",
    "tracks": ["Main Track", "Workshop"]
  },

  "acceptanceStats": { "source": "openaccept", "confidence": "high", "history": [...] },
  "related": ["ipsn", "percom", "tosn", "mass"],
  "tips": "录用率多年稳定在 17-25%。"
}
```

### 关键字段

- `history[].paper` —— 推算下一届截稿的依据，**必须填往年真实日期**
- `bufferMonths` —— 规划缓冲，0 = 无缓冲（全年滚动），1 = 提前 1 个月
- `yearStep` —— 隔年会议填 2
- `values` —— 6 维度 1-5 分，编辑解读

---

## 七、投稿路线图

```
工作类型 ─┬─ 偏系统实现 ──────→ SenSys / MobiSys
          ├─ 偏算法理论 ──────→ IPSN / TWC
          ├─ 偏隐私安全 ──────→ NDSS
          ├─ 偏应用/体验 ─────→ UbiComp / IMWUT
          └─ 偏实测工程 ──────→ IEEE Sensors J
```

### 价值维度速查

| | HCI | 感知 | 系统 | 移动 | 硬件 | 理论 |
|---|---|---|---|---|---|---|
| UbiComp | 5 | 4 | 3 | 4 | 2 | 3 |
| PerCom | 3 | 5 | 4 | 3 | 4 | 3 |
| SenSys | 2 | 5 | 5 | 3 | 5 | 3 |
| MobiSys | 3 | 3 | 5 | 5 | 4 | 3 |
| NDSS | 1 | 2 | 4 | 2 | 3 | 5 |
| TWC | 1 | 2 | 3 | 3 | 3 | 5 |

---

## 八、工程保障

```bash
npm run validate   # 数据完整性校验（10 类）
npm run smoke      # 构建 + jsdom 渲染测试
npm run check      # 全部跑一遍
```

### validate.mjs 校验项

1. id 唯一性
2. 引用完整性（related / venueIds / tags）
3. **算式校验**（录用数 ÷ 投稿数 = 标注的 rate）
4. 边界范围（录用数 ≤ 投稿数、维度分1-5）
5. 年份降序
6. 语义自洽（confidence=none 却有数据）
7. **非 ASCII 污染**（西里尔字母）
8. id 与 shortName 一致性
9. values 六维度完整性
10. 会议必需字段（submission / timeline / history）

### smoke.mjs 渲染测试

jsdom 加载构建产物，点一遍 7 个页面，断言标题和文本长度。这是唯一能抓到「点击后才暴露」的错误的方式。

---

## 九、待办

### P0：数据补充

- [ ] **IPSN / IMWUT / MASS / PerCom 的录用率** —— OpenAccept 未收录，需从官网或社区数据补充
- [ ] **UbiComp 2021-2025 数据** —— OpenAccept 只到 2020
- [ ] **各会议 2026/2027 截稿日期** —— 补进 `deadlines` 数组
- [ ] 组内实际常投的会议（现在是领域通用选择）
- [ ] 各会议的 tracks 完整列表、rebuttal 政策

### P1：战报破冰

- [ ] 组内每人填一条投稿记录
- [ ] 至少 5 条，页面才有内容

### P2：功能

- [ ] 论文库（从 DBLP 抓各会议历年录用论文，统计主题分布）
- [ ] Topic Evolution 趋势（需要多年论文数据支撑）
- [ ] Find Your Venue 匹配器（需要积累组内投稿数据才能校准）
- [ ] 日历视图

**判断标准**：现在的问题是**数据不够**，不是功能不够。P0 完成前不要做 P2。

---

## 十、技术债

### 隐私控制的局限

`public: false` 只能控制页面展示，**控制不了 git 历史**。审稿意见一旦推送到公开仓库就永久可翻出来。审稿意见要记录就得另建私有仓库。

### 录用率数据滞后

OpenAccept 收录有延迟（UbiComp 停在 2020）。趋势图上要注意最新年份可能不是去年。

### 价值维度评分的维护

`values` 是编辑解读，会随会议定位变化而过期。目前靠人工更新，建议每年检查一次。
