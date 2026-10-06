# 组内会议 / 期刊投稿知识库

把散落在群聊和师兄师姐脑子里的投稿信息，沉淀成一个组内可查、可持续更新的站点。

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

## 四个页面

| 页面 | 作用 |
|---|---|
| 看板 | 未来截稿窗口（含推算日期）、投稿概览、最近战报 |
| 会议与期刊 | 支持按领域标签筛选和关键词搜索的完整档案 |
| 论文战报 | 每篇投稿的审稿意见和经验总结 |
| 投稿指南 | 如何添加数据、字段规范、通用注意事项 |

## 核心设计决策

**1. 截稿日期分两种来源**

- **推算**（灰色标签）：由 `timeline.cycle` 和往年 `history` 中的真实日期自动推算下一届时间，用作提前规划
- **真实**：直接写入 `deadlines` 数组的日期

看板会明确标注「推算」，避免有人把估算值当成确定信息用。这是刻意的——手动抄日期半年后必然全错。

**2. 战报隐私双层开关**

`reports` 条目和 `reviews` 条目各有独立的 `public` 字段。公开部署时：
- `public: false` 的战报完全不展示
- `public: true` 的战报展示结果，但 `reviews[].public: false` 的意见折叠且不渲染

做到「结果公开、意见可控」。审稿意见是未公开评审内容，由记录本人决定是否公开。

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