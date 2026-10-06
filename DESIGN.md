# scoop 设计方案 v2

**Research Venue Navigator** —— 无线感知 / 普适计算方向的会议期刊认知与决策平台

线上：https://xiuliangwu.github.io/scoop/

---

## 0. 本版设计来源

参考了 **会伴（Conference Partner）** 与 **CCFDDL** 两个平台的实际产品逻辑，取其精华并加强数据可信度建设：

| 来源 | 借鉴内容 |
|---|---|
| **会伴** | Research Area 组织方式、Venue Profile 信息分层、相关 venue 逻辑、Compare 最多 4 个 |
| **CCFDDL** | Deadline 事件流（abstract/paper/rebuttal/decision）、timezone 独立字段、多轮投稿、倒计时优先级、表格列表 |
| **本项目加强** | Source / Confidence / Coverage、Data Completeness 四态、事实与编辑判断分离 |

### 核心分工

```
会伴      → Understand / Compare（理解和发现）
CCFDDL    → Deadline / Planning（时间和行动）
本项目    → Submission Fit（为什么我的研究该投这里）
```

### 明确不做的事

- **不做 CP-I 类似的综合总分**。数据完整 ≠ 学术质量，综合分会误导决策。改为拆解维度展示
- **不做 Estimated 录用率**。社区流传的数字未经核实，一律不展示
- **不做 Topic Evolution**。数据量不够时画出来的趋势图是漂亮但不可靠的

---

## 1. 产品逻辑

```
                RESEARCH
                    │
                    ▼
            Research Fields ────► 领域 → 子主题 → Venue
                    │
                    ▼
                 Venues
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
  Understand    Compare     Deadline
      │             │             │
      └─────────────┼─────────────┘
                    ▼
           Submission Fit
                    │
                    ▼
          My Candidate Venues
```

---

## 2. 数据模型（核心变更）

### 2.1 Edition + 事件流（借鉴 CCFDDL）

**问题**：现有 `history: [{year, paper, notification}]` 太平坦，无法表达多轮投稿，也无法表达 rebuttal / camera-ready。

**新结构**：

```jsonc
{
  "id": "sensys",
  "shortName": "SenSys",

  // 静态信息
  "founded": 2003,
  "organizer": "ACM/IEEE",
  "rank": { "ccf": [{ "year": 2022, "rank": "B" }, { "year": 2026, "rank": "B" }] },
  "dblpKey": "sensys",

  // 逐届数据
  "editions": [
    {
      "year": 2027,
      "link": "https://sensys.org/2027/",
      "accepted": true,              // 是否仍在征稿
      "timezone": "AoE",             // 独立字段，关键！
      "place": "USA",
      "conferenceDate": "May 17-20, 2027",

      "timeline": [                  // 事件流
        { "type": "paper",     "date": "2026-11-06", "comment": "全文截稿" },
        { "type": "notification","date": "2027-02-17" },
        { "type": "conference","date": "2027-05-17" }
      ],

      "submissions": [               // 多轮投稿
        { "round": "R1", "abstract": "2026-10-02", "paper": "2026-10-23" },
        { "round": "R2", "abstract": "2027-01-15", "paper": "2027-02-05" }
      ],

      "stats": {                     // 该届统计
        "submitted": null,
        "accepted": null,
        "rate": null
      }
    }
  ]
}
```

### 2.2 Deadline 事件类型

固定六种，构成完整投稿周期：

| type | 含义 | 页面显示 |
|---|---|---|
| `abstract` | 摘要截稿 | 摘要 |
| `paper` | 全文截稿 | 全文 |
| `rebuttal` |  rebuttal 期限 | rebuttal |
| `notification` | 结果通知 | 结果 |
| `camera` | 终稿 | 终稿 |
| `conference` | 会议召开 | 召开 |

### 2.3 Data Completeness 四态

**问题**：现在 IPSN / IMWUT / MASS / PerCom 录用率缺失，页面显示「—」，看不出是「没查」还是「查了没有」。

**方案**：

```jsonc
"acceptanceStats": {
  "status": "missing",              // complete | partial | missing | none
  "coverage": { "from": 2017, "to": 2025, "years": 8 },
  "source": "openaccept",
  "confidence": "high",
  "lastChecked": "2026-10-06",
  "note": "OpenAccept 未收录此会议"
}
```

| status | 页面显示 |
|---|---|
| `complete` | 完整数据 + 覆盖率说明 |
| `partial` | 部分年份 + **明确指出缺哪几年** |
| `missing` | 「未找到可靠公开统计」+ 上次检查日期 |
| `none` | 「未收录」+ 说明原因（如「期刊录用率通常不公开」） |

**关键**：即使是 `missing`，也要显示 `lastChecked` —— 让人知道这是查过的结论，不是没查。

### 2.4 Venue 关系三分法（借鉴会伴但升级）

```jsonc
"relations": {
  "similar": [
    { "id": "ipsn",   "why": "同属传感器系统方向，但更偏底层网络算法" },
    { "id": "mobisys","why": "同强调系统实现，SenSys 更聚焦传感" }
  ],
  "alternative": [
    { "id": "ubicomp","why": "研究问题类似（无设备感知），但 UbiComp 以人为中心" },
    { "id": "imwut",  "why": "同主题，但 IMWUT 评审周期短一半" }
  ],
  "related": [
    { "id": "tosn",   "why": "TOSN 是 SenSys 优秀论文的常见扩展出口" },
    { "id": "tmc",    "why": "移动计算方向的技术交叉" }
  ]
}
```

| 关系 | 含义 | 决策价值 |
|---|---|---|
| **Similar** | 领域和贡献模式相近 | 「同类替代」 |
| **Alternative** | 研究问题类似，投稿侧重点不同 | 「换个角度投」 |
| **Related** | 技术或社区交叉 | 「顺带看看」 |

**必须写 `why`** —— 没有理由的关系列表价值很低。

### 2.5 Rank 拆解（不做综合分）

```jsonc
"rank": {
  "ccf":  [{ "year": 2022, "rank": "B" }, { "year": 2026, "rank": "B" }],
  "core": [{ "year": 2023, "rank": "A*" }],
  "cas":  [{ "year": 2025, "rank": "二区" }],
  "if":   [{ "year": 2025, "value": "4.3" }]
}
```

每个维度独立展示 + 标注年份，**不给总分**。

---

## 3. 页面结构

```
研究领域（Explore）
    ↓
Venue列表 ←──→ [表格 | 卡片] 双视图
    ↓
Venue Profile（Tab 分区）
    ↓
对比（Compare，最多 4 个）
```

### 3.1 首页：工具型（借鉴 CCFDDL）

用户进来立刻看到能用的东西，不做产品介绍。

```
┌─────────────────────────────────────────┐
│ Research Venue Navigator                 │
│ [ 搜索会议、期刊、主题…            ]     │
└─────────────────────────────────────────┘

即将到来的截稿──────────────────────────
Venue      分级    类型      截稿      剩余
UbiComp    CCF A   第3轮11-02    27 天   ← 突出
SenSys     CCF B   全文    11-06    31 天
IPSN       CCF B   全文    02-20   137 天

研究领域 ──────────────────────────────
[无线感知] [普适计算] [移动系统] [物联网] [信号处理]

快速对比 ──────────────────────────────
[ SenSys ] [ UbiComp ] [ IPSN ]  → 开始对比
```

### 3.2 列表页：表格 + 卡片双视图

三种任务对应三种视图：

| 视图 | 用途 | 布局 |
|---|---|---|
| **表格** | 查（快速筛选比较） | Venue \| 分级 \| 录用率 \| 下一截稿 \| 领域 |
| **卡片** | 理解（初次了解） | 简介 + 价值取向 + 标签 |
| **日历** | 规划（未来版块） | 月历 |

第一版做表格 + 卡片，日历留到 P2。

### 3.3 Venue Profile：Tab 分区（借鉴会伴）

避免单页太长，用顶部锚点导航。

```
SenSys  ACM/IEEE Conference on Embedded AI and Sensing
CCF 2022: B / CCF 2026: B · 2003 年成立 · 每年 5 月

下一截稿  31 天  全文  2026-11-06  AoE
─────────────────────────────────────────
[概览] [投稿] [竞争] [数据来源]

概览
  WHAT IS THIS VENUE —— 一段话说清它是什么
  RESEARCH POSITION —— 6 维度评分（编辑解读）
  SIMILAR / ALTERNATIVE / RELATED —— 三类关联

投稿
  SUBMISSION CYCLE —— 事件流时间轴
  Abstract → Paper → Rebuttal → Notification → Camera → Conference
  多轮投稿逐轮列出
  TRACKS / 评审模式 / 页数

竞争
  ACCEPTANCE RATE —— 趋势图 + 逐年表格
  DATA COVERAGE —— 明确说明覆盖年份和缺失年份

数据来源
  每个字段的值 / 来源 / 年份 / 置信度/ 上次核对
```

### 3.4 Compare：最多 4 个

```
[ SenSys ] [ UbiComp ] [ IPSN ] [ MobiSys ]

               SenSys  UbiComp  IPSN  MobiSys
类型            会议    会议    会议   会议
CCF          B(22/26)  A(22/26)  B(22/26) B(22/26)
感知          ★★★★★   ★★★★☆  ★★★★☆  ★★★☆☆
系统          ★★★★★   ★★★☆☆  ★★★★★  ★★★★★
HCI           ★★☆☆☆   ★★★★★  ★★☆☆☆  ★★★☆☆
移动          ★★★☆☆   ★★★★☆  ★★★☆☆  ★★★★★
硬件          ★★★★★   ★★★☆☆  ★★★★☆  ★★★★☆☆
理论          ★★★☆☆   ★★★☆☆  ★★★★★  ★★★☆☆
─────────────  ──────  ──────  ─────  ──────
录用率        19.1%    20.2%    数据缺失  18.0%
                              (2020止)  ↓趋势收紧
截稿          11-06    11-02    02-20    12-20
页数          见官网   10页     见官网   见官网

WHY THEY ARE DIFFERENT
  每个 venue 一句话说明差异
```

---

## 4. 待补充内容清单

### P0-1：Venue 基础数据

| 字段 | 状态 | 缺口 |
|---|---|---|
| 名称/类型/官网 | ✅ 14 条齐全 | — |
| 成立年份 | ✅ 14 条 | — |
| CCF | ✅ 14 条 | CORE 等级全部缺失 |
| CORE / ICORE | ❌ 全部缺失 | **需补 14 条** |
| 主办方 | ✅ | — |
| 领域 | ✅ | — |

### P0-2：Edition 与投稿周期（最大缺口）

**现有数据全部是推算值，没有一条来自 CCFDDL 的核实数据。** 需要补：

| Venue | 缺什么 |
|---|---|
| **UbiComp** | 三轮完整日期（CCFDDL 显示 2026 截稿 11-02，我数据写11-01 **差一天**） |
| **SenSys** | 2027 届全文截稿 **2026-11-06**（CCFDDL 已有，我完全没有） |
| **PerCom** | 2027 届完整时间线（注册/摘要/全文/rebuttal/通知） |
| **IPSN** | 2027 届日期 + timezone |
| **MobiSys** | 2027 届日期 |
| **IMWUT** | 4 期各自的截稿日 |
| **MASS** | 2027 届日期 |
| **NDSS** | 两轮投稿的完整日期 |

**每条需要**：type、date、timezone、round。

### P0-3：Acceptance Rate

| Venue | 状态 | 缺口 |
|---|---|---|
| SenSys | ✅ 8 年 | 补 2026 届（CCFDDL 显示 19.1% 对应 2025 数据） |
| MobiSys | ✅ 8 年 | — |
| NDSS | ✅ 6 年 | — |
| UbiComp |⚠️ 6 年，止于 2020 | **补 2021-2025** |
| **IPSN** | ❌ 缺失 | 需查官网或社区数据 |
| **IMWUT** | ❌ 缺失 | 同上 |
| **MASS** | ❌ 缺失 | 同上 |
| **PerCom** | ❌ 缺失 | 官网或往届 proceedings |
| 6 本期刊 | ❌ 缺失 | 期刊录用率通常不公开，应标`none` |

### P0-4：Value Dimensions 的 why

现在的 6 维度评分只有数字没有依据。需要为**每个 venue × 每个维度**补一句为什么，或者至少给整体 `valuesNote` 扩充。

当前 14 个 venue 都有 `valuesNote`，但颗粒度太粗。

### P1：关系数据

- [ ] 为 14 个 venue 补全similar / alternative / related，每条写 `why`
- [ ] 建议用 3D 散点图展示 value dimensions 聚类（可选）

### P1：内容型字段

- [ ] 各venue 的 tracks 完整列表（现在只有 3-5 个，SenSys/IPSN 实际更多）
- [ ] rebuttal 政策细节（是否强制、长度限制）
- [ ] 组内经验 `tips`（现在是空的，等组内补充）
- [ ] 论文战报（完全空白）

### P2：功能

- [ ] 日历视图
- [ ] 倒计时精确到时分秒
- [ ] 论文库 + Topic Evolution（需 DBLP 数据）
- [ ] Research → Venue 匹配器（需积累投稿数据校准）
- [ ] 用户关注 / Star

---

## 5. 相比参考平台的差异化

### 做得更严谨的地方

| 项目 | 会伴 | CCFDDL | 本项目 |
|---|---|---|---|
| 综合总分 | CP-I 0-100 | — | **不做总分**，拆维度 |
| 数据缺失 | 中性基准填充 | 部分填充 | **明确标「未找到」+ 检查日期** |
| 分级展示 | CCF/CORE/QUALIS | CCF | **每项带年份**（CCF 2022 vs 2026） |
| 录用率 | 有 | 有 | **带 coverage + source + confidence** |
| 编辑判断 | 混在数据里 | — | **明确标「编辑解读」** |

### 数据来源优先级

```
1. 官方    会议 CFP、官网统计、proceedings
2. 权威库  DBLP、CCF、CORE/ICORE、ACM DL
3. 专业库  CCFDDL、OpenAccept
4. 社区    GitHub、研究者投稿
```

使用时在页面标注是哪一级。

---

## 6. 维护节奏

| 频率 | 事项 |
|---|---|
| 每年年初 | CCF/CORE 分级、中科院分区、IF |
| 每季度 | 核对下一届截稿日期（从 CCFDDL 同步可大幅降低工作量） |
| 随时 | 组内投稿后记战报 |

**建议**：CCFDDL 有公开的 GitHub 数据源，可以定期同步截稿日期和 timezone，比手工维护可靠。
