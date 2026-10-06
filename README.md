# 组内会议 / 期刊投稿知识库

**研究方向：无线感知 / 普适计算**

把散落在群聊和师兄师姐脑子里的投稿信息，沉淀成一个组内可查、可持续更新的站点。

线上地址：https://xiuliangwu.github.io/scoop/

## 快速开始

```bash
npm install
npm run dev      # 本地预览，默认 http://localhost:5173
npm run build    # 构建到 dist/
```

## 目录结构

```
scoop/
├── data/
│   ├── venues.json      # 会议 + 期刊 + 领域标签（核心数据）
│   └── reports.json     # 论文战报
├── src/
│   ├── main.js          # 页面逻辑与渲染
│   └── style.css        # 样式
└── .github/workflows/
    └── deploy.yml       # GitHub Pages 自动部署
```

## 收录范围

**会议**（8）：UbiComp(A) / PerCom(B) / IPSN(B) / SenSys(B) / MobiSys(B) / IMWUT(B) / MASS(C) / NDSS(A)

**期刊**（6）：TOSN(B,一区) / IMWUT(B,一区) / TMC(A,二区) / TWC(A,一区) / IEEE Sensors J(二区) / TCADH(三区)

**领域标签**（11）：WiFi 感知、毫米波雷达、无设备感知、活动识别、定位追踪、普适计算、移动系统、物联网感知、无线网络、信号处理、嵌入式

更完整的设计思路和投稿路线图见 [DESIGN.md](./DESIGN.md)。

## 四个页面

| 页面 | 作用 |
|---|---|
| 看板 | 未来截稿窗口（真实日期优先、推算日期作参考）、投稿概览、最近战报 |
| 会议与期刊 | 支持按领域标签筛选和关键词搜索的完整档案 |
| 论文战报 | 每篇投稿的审稿意见和经验总结 |
| 投稿指南 | 如何添加数据、字段规范、通用注意事项 |

## 核心设计决策

**1. 截稿日期分两种来源**

- **真实日期**（绿色标签）：写在 `deadlines` 数组里，来自官网确认，排序时永远优先
- **预计截稿**（灰色标签）：由 `history` 中的往年真实日期推算，用作提前规划

看板会明确区分两者。不能把推算值当成确定信息用 —— 这是刻意的，手动抄的日期半年后必然全错，推算值至少能保证趋势正确。

**2. 战报隐私双层开关**

战报条目和审稿意见条目各有独立的 `public` 字段，默认全为 `false`。公开部署时：

- `public: false` 的战报完全不展示
- 战报公开时，`reviews[].public: false` 的意见仍折叠且不渲染内容

做到「结果公开、意见可控」。审稿意见是未公开评审内容，由记录本人决定是否公开。

战报板块目前只保留了数据结构和功能，内容待组内逐步补充。`data/reports.json` 里的 `_template` 是可直接复制的填写模板，追加到 `reports` 数组即可；字段含义见同文件的 `_fieldNote`。

**3. 领域标签控制在 12 个以内**

标签是投稿决策的主要筛选维度，超过 12 个会丧失筛选意义。新增标签前先想想能不能归到现有标签下。

## 添加内容的流程

1. 改 `data/` 下的 JSON
2. `npm run dev` 本地确认
3. 提交 PR，说明改了什么、日期来源是哪个官网
4. 合并后 GitHub Actions 自动部署

字段规范见站内「投稿指南」页，或直接看 `data/venues.json` 现有记录。

## 部署到 GitHub Pages

本仓库即GitHub Pages 源，推送后自动部署。若需重新建仓库：

```bash
git init
git add .
git commit -m "init: 组内投稿知识库"
git branch -M main
git remote add origin https://github.com/xiuliangwu/scoop.git
git push -u origin main
```

然后在仓库 Settings → Pages → Source 选 `GitHub Actions`。首次推送后约 1-2 分钟上线。

用 `/scoop/` 这种子路径访问也没问题，`vite.config.js` 里 `base: './'` 已处理。

## 后续可以加的东西

- **日历视图**：把 `deadlines` 铺成月历，一眼看出哪个月扎堆投稿
- **投递建议**：基于 tags 匹配度，首页提示「你的工作可能适合这几个会」
- **历史统计**：按年份统计各会议投稿量和命中率，找出组里的强项会议
- **CSV 导出**：导出成表格方便组会汇报

## 维护提醒

数据里的分区、影响因子（IF）每年更新（中科院分区通常年末调整）。每年年初集中更新一次即可，页面上已经标注了 `lastUpdated`。