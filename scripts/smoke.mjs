// 本地渲染冒烟测试：加载 dist/index.html，验证六个页签都能渲染出真实 DOM
import { JSDOM, VirtualConsole } from 'jsdom'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = dirname(fileURLToPath(import.meta.url))
const distIndex = resolve(root, '../dist/index.html')
const jsFile = readFileSync(resolve(root, '../dist/assets/' +
  readFileSync(distIndex, 'utf8').match(/assets\/index-[\w-]+\.js/)[0].split('/').pop()), 'utf8')
const cssFile = readFileSync(resolve(root, '../dist/assets/' +
  readFileSync(distIndex, 'utf8').match(/assets\/index-[\w-]+\.css/)[0].split('/').pop()), 'utf8')

const errors = []
const vc = new VirtualConsole()
vc.on('jsdomError', e => errors.push('jsdomError: ' + e.message))

const dom = new JSDOM(readFileSync(distIndex, 'utf8'), {
  runScripts: 'outside-only',
  pretendToBeVisual: true,
  virtualConsole: vc
})
const { window } = dom
const { document } = window

// 手动注入 CSS 与 JS（jsdom 不加载外部资源）
const style = document.createElement('style')
style.textContent = cssFile
document.head.appendChild(style)
window.eval(jsFile)

const q = s => document.querySelector(s)
const qa = s => [...document.querySelectorAll(s)]

function probe(label) {
  const text = document.body.textContent.replace(/\s+/g, ' ')
  return {
    label,
    title: q('.page-head h1, .profile-head h1, .hero h1')?.textContent.trim() || '(无标题)',
    textLen: text.length,
    areas: qa('.area-card').length,
    mods: qa('.mod').length,
    stars: qa('.star.on').length,
    rows: qa('table.data tbody tr').length,
    cards: qa('.rel-card').length,
    chips: qa('.chip').length
  }
}

const results = []
const tabs = qa('header nav button')
console.log('页签:', tabs.map(t => t.textContent.trim()).join(' | '))
console.log('')

// 1. Explore（默认）
results.push(probe('研究领域'))

// 2. 点第一个领域卡→ 领域详情
const areaCard = q('.area-card')
if (areaCard) {
  areaCard.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
  results.push(probe('领域详情'))
  // 3. 点第一个 venue → Profile
  const vc2 = q('.rel-card')
  if (vc2) {
    vc2.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
    results.push(probe('Venue Profile'))
  }
}

// 4. 对比页
const startTab = tabs.find(t => t.textContent.trim() === '新手指南')
if (startTab) {
  startTab.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
  results.push(probe('新手指南'))
}

const cmpTab = tabs.find(t => t.textContent.trim() === '对比')
if (cmpTab) {
  cmpTab.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
  results.push(probe('对比'))
}

// 5. 会议与期刊
const vTab = tabs.find(t => t.textContent.trim() === 'Venue')
if (vTab) {
  vTab.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
  results.push(probe('会议与期刊'))
}

// 6. 看板
const hTab = tabs.find(t => t.textContent.trim() === '截止')
if (hTab) {
  hTab.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
  results.push(probe('看板'))
}

// 7. 战报（空态）
const rTab = tabs.find(t => t.textContent.trim() === '战报')
if (rTab) {
  rTab.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
  results.push(probe('论文战报'))
}

console.log('页面'.padEnd(14), '标题'.padEnd(20), '文本长'.padStart(6), '领域卡'.padStart(6), '模块'.padStart(5), '星标'.padStart(5), '表行'.padStart(5), '卡'.padStart(5))
for (const r of results) {
  console.log(
    r.label.padEnd(14),
    r.title.slice(0, 18).padEnd(20),
    String(r.textLen).padStart(6),
    String(r.areas).padStart(6),
    String(r.mods).padStart(5),
    String(r.stars).padStart(5),
    String(r.rows).padStart(5),
    String(r.cards).padStart(5)
  )
}

// 新手指南专项检查
const guideTab = [...document.querySelectorAll('header nav button')]
  .find(t => t.textContent.trim() === '新手指南')
if (guideTab) {
  guideTab.dispatchEvent(new window.MouseEvent('click', { bubbles: true }))
  console.log('')
  console.log('=== 新手指南专项 ===')
  console.log('可折叠步骤数:', document.querySelectorAll('details.step').length)
  console.log('默认展开数  :', document.querySelectorAll('details.step[open]').length)
  console.log('FAQ 条目数  :', document.querySelectorAll('details.faq').length)
  console.log('格式速查表行:', document.querySelectorAll('table.data tbody tr').length)
  console.log('时间线节点  :', document.querySelectorAll('.timeline-list li').length)
  console.log('review 清单 :', document.querySelectorAll('.check-list li').length)
  // 快速上手
  console.log('上手卡片    :', document.querySelectorAll('.ob-card').length)
  console.log('  带跳转按钮:', document.querySelectorAll('.ob-go').length)
  // 术语速查
  console.log('术语分组    :', document.querySelectorAll('.term-group').length)
  const tCount = document.querySelectorAll('.term').length
  console.log('术语条目    :', tCount)
  document.querySelectorAll('details.term-group').forEach(d => { d.open = true })
  const termLen = [...document.querySelectorAll('.term dd')]
    .map(d => d.textContent.replace(/\s+/g, ' ').trim().length)
  console.log('术语最短/最长:', Math.min(...termLen), '/', Math.max(...termLen))
  const noWhere = [...document.querySelectorAll('.term')]
    .filter(t => !t.querySelector('.term-where')).length
  console.log('缺位置提示  :', noWhere, noWhere > 0 ? '✗' : '✓')
  const shortTerm = termLen.filter(n => n < 25).length
  console.log('定义过短    :', shortTerm, shortTerm === 0 ? '✓' : '✗')
  console.log('粗体渲染    :', document.querySelectorAll('.term dd b, .step-body b').length, '处')
  // 展开所有步骤看内容是否完整
  document.querySelectorAll('details.step').forEach(d => { d.open = true })
  const bodyLen = [...document.querySelectorAll('details.step .step-body')]
    .map(b => b.textContent.trim().length)
  console.log('各步骤正文字数:', bodyLen.join(', '))
  const emptyStep = bodyLen.filter(n => n < 150).length
  console.log('内容过短的步骤:', emptyStep === 0 ? '无' : emptyStep + ' 个')
}

console.log('')
console.log('执行错误:', errors.length === 0 ? '无' : errors.length + ' 条')
errors.slice(0, 3).forEach(e => console.log('  !', e.slice(0, 160)))

// 判定：每页标题非空 + 文本长度足够
const bad = results.filter(r => !r.title || r.title === '(无标题)' || r.textLen < 200)
console.log('六页均正常渲染:', bad.length === 0 ? '是' : '否 → ' + bad.map(b => b.label).join(', '))
process.exit(bad.length === 0 && errors.length === 0 ? 0 : 1)