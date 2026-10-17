"use strict";

const UI = {
  "en": {
    "pageTitle": "Awesome Reverse Engineering Anything",
    "collectionTitle": 'Awesome Reverse<br class="mobile-title-break"> Engineering Anything<span class="title-dot" aria-hidden="true">.</span>',
    "languageSelection": "Language",
    "homeLabel": "AwesomeREA.org home",
    "skip": "Skip to the collection",
    "mainNav": "Main navigation",
    "submitResource": "Submit resource",
    "collectionEyebrow": "AN OPEN RESOURCE COLLECTION",
    "pageDescription": "Tools, projects, case studies and resources for reverse engineering websites, games, apps, binaries, firmware and communication protocols.",
    "collectionDescription": "A collection of reverse-engineering tools, projects, case studies and research papers.",
    "directoryNav": "Collection directories",
    "directoryRepositories": "repositories",
    "directoryCurated": "curated resources",
    "directoryPapers": "research papers",
    "directoryAbout": "About the collection ↗",
    "directoryScanned": "READMEs scanned · curated entries and papers reviewed against public sources.",
    "browseCollection": "Browse the collection",
    "indexModeLabel": "Collection",
    "sourceMode": "Repositories",
    "curatedMode": "Curated resources",
    "sourceSearchLabel": "Search repositories, descriptions and topics",
    "sourceSearchPlaceholder": "Search repositories, tools, topics…",
    "targetFilterLabel": "Target",
    "targetAll": "All",
    "targetWebsite": "Website",
    "targetGame": "Game",
    "targetApp": "App",
    "targetBinary": "Binary",
    "targetFirmware": "Firmware",
    "targetProtocol": "Protocol",
    "sourceTopicLabel": "Topic",
    "sourceAnyTopic": "All topics",
    "sourceSortLabel": "Sort",
    "sourceSortRelevance": "Automatic relevance",
    "sourceSortStars": "Most stars",
    "sourceSortPushed": "Recently pushed",
    "sourceSortName": "Repository name",
    "sourceIntro": "Automatically indexed from upstream.",
    "aboutCollection": "About this index",
    "sourceDisclosure": "READMEs were fetched automatically. These entries have not been manually reviewed or executed; target labels are inferred and do not establish REA compatibility.",
    "sourceLanguageNote": "Repository descriptions are available in English and Chinese. Translations are AI-assisted; original descriptions remain in the downloadable data.",
    "sourceLoading": "Loading repositories…",
    "clearFilters": "Clear filters ×",
    "emptyTitle": "No matching resources.",
    "sourceEmptyDescription": "Try another search term or broaden your filters.",
    "resetFilters": "Reset filters",
    "sourceErrorTitle": "Repositories couldn’t load.",
    "sourceErrorDescription": "Curated resources are still available. Try again.",
    "retry": "Try again",
    "sourceLoadMore": "Show more repositories",
    "searchLabel": "Search curated resources",
    "searchPlaceholder": "Search tools, projects, case studies…",
    "kindLabel": "Type",
    "allKinds": "All types",
    "categoryLabel": "Category",
    "allCategories": "All categories",
    "reviewNote": "Selected resources with concise descriptions and links to original sources.",
    "aboutCurated": "Collection notes ↗",
    "loading": "Loading resources…",
    "emptyDescription": "Try another search term or broaden your filters.",
    "errorTitle": "The collection couldn’t load.",
    "errorDescription": "Please try again, or browse the collection on GitHub.",
    "loadMore": "Show more resources",
    "footerDescription": "An independent resource collection, updated in public.",
    "contributeButton": "Contribute ↗",
    "downloadSourceData": "Repository index JSON ↓",
    "browseDirectory": "Browse by category ↗",
    "downloadCuratedData": "Curated catalog JSON ↓",
    "viewSource": "GitHub ↗",
    "footerLicense": "Original content: MIT. Linked projects keep their own licenses.",
    "readSource": "Source",
    "requirements": "Details & requirements",
    "reviewed": "Reviewed",
    "sourceReviewed": "Source-reviewed",
    "sourceNotRecorded": "Not recorded",
    "sourceStars": "stars",
    "sourceStarsTitle": "GitHub stars at metadata collection time; not a live count.",
    "sourceNoDescription": "No description supplied by the upstream repository.",
    "sourceOmittedDescription": "Upstream description omitted because it exceeds the collection’s length limit.",
    "sourceRelatedResearch": "Related research",
    "sourceCuratedDetails": "Curated details",
    "sourceTopicHint": "Filter by this topic",
    "sourceLicenseUnknown": "License not identified",
    "sourceScanDetails": "Details",
    "indexStatusLabel": "Index status",
    "sourceScanStatus": "README scanned",
    "sourceRequirementsLabel": "Requirements",
    "sourceRequirements": "Check the upstream README for prerequisites; these have not been manually reviewed.",
    "sourcePushedAt": "Last pushed",
    "sourceReadmeAt": "README fetched",
    "sourceMetadataAt": "Metadata observed",
    "sourceHash": "README SHA-256",
    "sourceRevision": "Advertised README Git SHA",
    "sourceReadmeSize": "README bytes",
  },
  "zh": {
    "pageTitle": "逆向工程资源合集 · Awesome Reverse Engineering Anything",
    "collectionTitle": '逆向工程资源合集<span class="title-dot" aria-hidden="true">.</span>',
    "languageSelection": "语言",
    "homeLabel": "AwesomeREA.org 首页",
    "skip": "跳到资源集合",
    "mainNav": "主导航",
    "submitResource": "提交资源",
    "collectionEyebrow": "开放的逆向工程资源集合",
    "pageDescription": "收集面向网站、游戏、应用、二进制、固件及通信协议逆向工程的工具、项目、案例与资料。",
    "collectionDescription": "收集逆向工程工具、项目、案例与研究论文。",
    "directoryNav": "资源目录",
    "directoryRepositories": "个项目仓库",
    "directoryCurated": "项精选资源",
    "directoryPapers": "篇研究论文",
    "directoryAbout": "关于合集 ↗",
    "directoryScanned": "份 README 已扫描 · 精选条目与论文均依据公开来源复核。",
    "browseCollection": "浏览资源集合",
    "indexModeLabel": "资源集合",
    "sourceMode": "项目仓库",
    "curatedMode": "精选资源",
    "sourceSearchLabel": "搜索仓库、项目简介和主题",
    "sourceSearchPlaceholder": "搜索仓库、工具或主题…",
    "targetFilterLabel": "领域",
    "targetAll": "全部",
    "targetWebsite": "网站",
    "targetGame": "游戏",
    "targetApp": "应用",
    "targetBinary": "二进制",
    "targetFirmware": "固件",
    "targetProtocol": "协议",
    "sourceTopicLabel": "主题",
    "sourceAnyTopic": "所有主题",
    "sourceSortLabel": "排序",
    "sourceSortRelevance": "自动相关性",
    "sourceSortStars": "星标最多",
    "sourceSortPushed": "最近推送",
    "sourceSortName": "仓库名称",
    "sourceIntro": "自动索引，简介与主题来自上游。",
    "aboutCollection": "关于此索引",
    "sourceDisclosure": "索引通过自动读取 README 建立，未逐项人工审阅或执行测试；目标标签为自动分类，不表示已验证 REA 兼容性。",
    "sourceLanguageNote": "项目简介提供中英双语，翻译由 AI 辅助完成；下载数据中保留上游原文。",
    "sourceLoading": "正在加载仓库…",
    "clearFilters": "清除筛选 ×",
    "emptyTitle": "没有匹配的资源。",
    "sourceEmptyDescription": "换一个关键词，或扩大筛选范围。",
    "resetFilters": "重置筛选",
    "sourceErrorTitle": "项目仓库暂时未能加载。",
    "sourceErrorDescription": "精选资源仍可使用，请重新加载仓库。",
    "retry": "重新加载",
    "sourceLoadMore": "加载更多仓库",
    "searchLabel": "搜索精选资源",
    "searchPlaceholder": "搜索工具、项目、案例…",
    "kindLabel": "类型",
    "allKinds": "所有类型",
    "categoryLabel": "类别",
    "allCategories": "所有类别",
    "reviewNote": "精选资源附简短介绍及原始来源链接。",
    "aboutCurated": "收录说明 ↗",
    "loading": "正在加载资源…",
    "emptyDescription": "换一个关键词，或扩大筛选范围。",
    "errorTitle": "资源集合暂时未能加载。",
    "errorDescription": "请重试，或在 GitHub 浏览资源集合。",
    "loadMore": "加载更多资源",
    "footerDescription": "独立的资源集合，在公开协作中持续更新。",
    "contributeButton": "参与贡献 ↗",
    "downloadSourceData": "仓库索引 JSON ↓",
    "browseDirectory": "按分类浏览 ↗",
    "downloadCuratedData": "精选目录 JSON ↓",
    "viewSource": "GitHub ↗",
    "footerLicense": "原创内容采用 MIT 许可。链接项目保留各自的许可。",
    "readSource": "来源",
    "requirements": "详情与使用条件",
    "reviewed": "复核于",
    "sourceReviewed": "资料已复核",
    "sourceNotRecorded": "未记录",
    "sourceStars": "星标",
    "sourceStarsTitle": "元数据采集时的 GitHub 星标快照，不是实时数量。",
    "sourceNoDescription": "上游仓库未提供项目简介。",
    "sourceOmittedDescription": "上游简介超过合集长度限制，未展示原文。",
    "sourceRelatedResearch": "相关研究",
    "sourceCuratedDetails": "精选资料",
    "sourceTopicHint": "按此主题筛选",
    "sourceLicenseUnknown": "许可证未识别",
    "sourceScanDetails": "详情",
    "indexStatusLabel": "索引状态",
    "sourceScanStatus": "已读取 README",
    "sourceRequirementsLabel": "使用条件",
    "sourceRequirements": "请阅读上游 README 中的前置条件；这些条件尚未人工复核。",
    "sourcePushedAt": "最近推送时间",
    "sourceReadmeAt": "README 读取时间",
    "sourceMetadataAt": "元数据采集时间",
    "sourceHash": "README SHA-256",
    "sourceRevision": "上游声明的 README Git SHA",
    "sourceReadmeSize": "README 字节数",
  }
};

const CATEGORY = {
  "protocol-analysis": ["Protocol analysis", "协议分析"],
  "jvm": ["JVM bytecode", "JVM 字节码"], "reconstruction-cases": ["Reconstruction cases", "重建案例"], "core": ["REA essentials", "REA 核心"], "workflow-guides": ["Workflow guides", "工作流指南"], "official-case-studies": ["Upstream case studies", "官方案例"], "community-case-studies": ["Community case studies", "社区案例"], "community-integrations": ["REA community integrations", "REA 社区集成"], "community-labs": ["Community labs", "社区实验"], "related-lists": ["Companion collections", "相关目录"], "agent-mcp": ["MCP servers", "MCP 服务"], "agent-workflows": ["Agent workflows", "智能体工作流"], "native-analysis": ["Native analysis", "原生二进制分析"], "dynamic-analysis": ["Runtime & debugging", "运行时与调试"], "android": ["Android", "Android"], "dotnet": [".NET", ".NET"], "javascript-electron": ["JavaScript & Electron", "JavaScript 与 Electron"], "webassembly": ["WebAssembly", "WebAssembly"], "firmware": ["Firmware", "固件"], "binary-libraries": ["Binary analysis libraries", "二进制分析库"], "binary-diffing": ["Binary diffing", "二进制差异分析"], "learning": ["Learning", "学习资源"], "game-analysis": ["Game analysis", "游戏分析"], "games": ["Games", "游戏"], "game-tools": ["Game tools", "游戏工具"], "web-analysis": ["Website & browser analysis", "网站与浏览器分析"]
};
const RELATION = {
  "independent-reconstruction": ["INDEPENDENT · RECONSTRUCTION", "独立 · 重建项目"], "official-core": ["REA · OFFICIAL", "REA · 官方核心"], "official-skill": ["REA · OFFICIAL SKILL", "REA · 官方技能"], "official-documentation": ["REA · DOCUMENTATION", "REA · 官方文档"], "official-guide": ["REA · GUIDE", "REA · 官方指南"], "official-case-study": ["REA · CASE STUDY", "REA · 官方案例"], "community-integration": ["REA · COMMUNITY", "REA · 社区集成"], "community-reported-mixed-workflow": ["COMMUNITY · MIXED WORKFLOW", "社区 · 混合工作流"], "community-learning-resource": ["COMMUNITY · LEARNING", "社区 · 学习资源"], "upstream-maintainer-companion-list": ["COMPANION COLLECTION", "相关资源目录"], "independent-agent-integration": ["INDEPENDENT · AGENT", "独立 · 智能体集成"], "foundation": ["FOUNDATION TOOL", "基础工具"], "learning": ["LEARNING RESOURCE", "学习资源"]
};
const params = new URLSearchParams(location.search);
// Keep the bare homepage English; shared links explicitly select another language.
const state = { lang: params.get("lang") === "zh" ? "zh" : "en", q: params.get("q") || "", group: params.get("group") || "all", category: params.get("category") || "all", kind: params.get("kind") || "all", target: params.get("target") || "all", visible: 15, topicLabels: {}, records: [], loaded: false, error: false };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const t = (key) => UI[state.lang][key] || UI.en[key] || key;
function targetSearchLabels(target) { const key = "target" + target[0].toUpperCase() + target.slice(1); return [target, UI.en[key] || "", UI.zh[key] || ""]; }
function dataURL(filename) { const url = new URL(filename, document.baseURI); const revision = document.documentElement.dataset.catalogRevision; if (revision) url.searchParams.set("v", revision); return url; }
const label = (map, key) => map[key] ? map[key][state.lang === "zh" ? 1 : 0] : key.replaceAll("-", " ");
const node = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text !== undefined) el.textContent = text; return el; };
function icon(name, small = false) { if (document.documentElement.dataset.iconSet === "fontawesome") { const span = node("span", "icon fa-symbol fa-" + name + (small ? " icon-small" : "")); span.setAttribute("aria-hidden", "true"); return span; } const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("class", "icon" + (small ? " icon-small" : "")); svg.setAttribute("aria-hidden", "true"); const use = document.createElementNS("http://www.w3.org/2000/svg", "use"); use.setAttribute("href", "#i-" + name); svg.append(use); return svg; }
function external(href, className, text) { const link = node("a", className, text); link.href = href; link.target = "_blank"; link.rel = "noopener noreferrer"; return link; }
function updateURL() { const next = new URL(location.href); ["q", "group", "category", "kind", "target", "lang"].forEach(key => { const value = state[key]; if (value && value !== "all") next.searchParams.set(key, value); else next.searchParams.delete(key); }); history.replaceState(null, "", next); }
function applyLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.title = t("pageTitle");
  $("#browse-directory").href = state.lang === "zh" ? "/zh/browse/" : "/browse/";
  $$('[data-locale-path]').forEach(el => { el.href = `${state.lang === "zh" ? "/zh" : ""}/${el.dataset.localePath}/`; });
  $('meta[property="og:image:alt"]')?.setAttribute("content", t("pageTitle"));
  $("#language-select").value = state.lang;
  for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) $(selector)?.setAttribute("content", t("pageDescription"));
  for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) $(selector)?.setAttribute("content", t("pageTitle"));
  $('meta[property="og:locale"]')?.setAttribute("content", state.lang === "zh" ? "zh_CN" : "en_US");
  $$('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

  renderCategories(); if (state.loaded) render();
  if (state.error) $("#results-status").textContent = t("errorTitle");
  if (sourceState.loaded) { syncTopicInput(); renderSources(); }
  if (sourceState.error) $("#source-status").textContent = t("sourceErrorTitle");
}
function renderCategories() {
  const select = $("#category-select"); select.replaceChildren(); const first = node("option", "", t("allCategories")); first.value = "all"; select.append(first);
  [...new Set(state.records.map(r => r.category))].sort((a,b) => label(CATEGORY,a).localeCompare(label(CATEGORY,b), state.lang === "zh" ? "zh-CN" : "en")).forEach(category => { const option = node("option", "", label(CATEGORY, category)); option.value = category; select.append(option); });
  if (state.loaded && ![...select.options].some(o => o.value === state.category)) state.category = "all"; select.value = [...select.options].some(o => o.value === state.category) ? state.category : "all"; renderKinds();
}
const KIND = {"project":["Project","项目"],"tool":["Tool","工具"],"integration":["Integration","集成"],"case-study":["Case study","案例"],"collection":["Collection","合集"],"documentation":["Documentation","文档"],"learning-resource":["Learning resource","学习资料"],"research":["Research","研究"]};
const FEATURED = ["rea-upstream","chrome-devtools-mcp","renderdoc","jadx-ai-mcp","ghidra","webcrack","assetripper","ilspy","awesome-rea-cases","rea-dxball-case","mitmproxy","rea-notion-case","hex-rays-ida-mcp","picoprint-rea-investigation","morluto-awesome-re"];
function renderKinds() { const select=$("#kind-select"); select.replaceChildren(); const all=node("option","",t("allKinds")); all.value="all"; select.append(all); [...new Set(state.records.map(r=>r.kind).filter(Boolean))].sort((a,b)=>label(KIND,a).localeCompare(label(KIND,b))).forEach(kind=>{const option=node("option","",label(KIND,kind));option.value=kind;select.append(option);});if(state.loaded&&![...select.options].some(o=>o.value===state.kind))state.kind="all";select.value=[...select.options].some(o=>o.value===state.kind)?state.kind:"all"; }
function card(record) {
  const article=node("article","resource-card");article.dataset.recordId=record.id;const head=node("div","card-heading");const h3=node("h3");const title=external(record.url,"card-title-link",state.lang==="zh"?(record.name_zh||record.name):record.name);title.append(icon("external",true));h3.append(title);head.append(h3);article.append(head);
  const meta=node("div","card-meta");meta.append(node("span","kind-pill",label(KIND,record.kind||"")),node("span","category-pill",label(CATEGORY,record.category)),node("span","relation-pill",label(RELATION,record.relation||"")));article.append(meta);
  const desc=node("p","card-description",state.lang==="zh"?(record.description_zh||record.description):record.description);article.append(desc);
  if (record.requirements) { const req=node("details","requirements"); const summary=node("summary");summary.append(icon("info",true),node("span","",t("requirements")));req.append(summary);req.append(node("p","",record.requirements));article.append(req); }
  const foot=node("div","card-footer");foot.append(external(record.url,"source-link",t("readSource")),node("span","reviewed",`${t("reviewed")} ${record.reviewed||t("sourceNotRecorded")}`));article.append(foot);return article;
}
function render() {
  const q=state.q.toLocaleLowerCase().trim(); const records=state.records.filter(r=> {
    if (state.group!=="all"&&r.group!==state.group) return false;
    if (state.category!=="all"&&r.category!==state.category) return false;
    if (state.kind!=="all"&&r.kind!==state.kind) return false;
    if (state.target!=="all"&&!(r.targets||[]).includes(state.target)) return false;
    if (!q) return true;
    const hay=[r.name,r.name_zh,r.description,r.description_zh,r.category,r.kind,r.relation,...(r.targets||[]).flatMap(targetSearchLabels)].filter(Boolean).join(" ").toLocaleLowerCase();
    return hay.includes(q);
  }).sort((a,b)=> {
    const fa=FEATURED.indexOf(a.id), fb=FEATURED.indexOf(b.id);
    if (fa>=0&&fb>=0) return fa-fb; if (fa>=0) return -1; if (fb>=0) return 1;
    return (state.lang==="zh"?(a.name_zh||a.name):a.name).localeCompare(state.lang==="zh"?(b.name_zh||b.name):b.name, state.lang==="zh"?"zh-CN":"en");
  });
  const visible=records.slice(0,state.visible);
  const grid=$("#resource-grid"); grid.replaceChildren(...visible.map(card));
  grid.setAttribute("aria-busy","false");
  $("#results-status").textContent=`${records.length} ${t("directoryCurated")}`;
  $("#empty-state").hidden=records.length>0||state.error;
  $("#error-state").hidden=!state.error;
  $("#load-more-row").hidden=records.length<=state.visible||state.error;
  $("#load-more").textContent=t("loadMore");
}
function reset() { state.q=""; state.group="all"; state.category="all"; state.kind="all"; state.target="all"; state.visible=15; $("#search-input").value=""; $("#kind-select").value="all"; $("#category-select").value="all"; $$('[data-group]').forEach(el=>el.classList.toggle("active",el.dataset.group==="all")); $$('[data-target]').forEach(el=>el.classList.toggle("active",el.dataset.target==="all")); updateURL(); if(state.loaded)render(); }
async function load() {
  try {
    const response=await fetch(dataURL("catalog.json")); if(!response.ok) throw new Error(response.status);
    const data=await response.json(); state.records=data.records||[]; state.topicLabels=data.topic_labels||{};
    if (!["all","website","game","app","binary","firmware","protocol"].includes(state.target)) state.target = "all";
    $$('[data-count]').forEach(el => el.textContent = el.dataset.count === "all" ? state.records.length : state.records.filter(r => r.group === el.dataset.count).length);
    $$('[data-repo-path]').forEach(el => el.href = data.meta.repository_url + (el.dataset.repoPath ? "/" + el.dataset.repoPath : ""));
    state.loaded = true; renderCategories(); render(); configureSourceIndex(data.meta.source_index);
  } catch (error) { state.error = true; state.loaded = false; $("#resource-grid").replaceChildren(); $("#resource-grid").setAttribute("aria-busy", "false"); $("#results-status").textContent = t("errorTitle"); $("#error-state").hidden = false; $("#empty-state").hidden = true; $("#load-more-row").hidden = true; }
}
$("#search-input").value = state.q;
$("#search-input").addEventListener("input", event => { state.q = event.target.value; state.visible = 15; updateURL(); if (state.loaded) render(); });
$("#kind-select").addEventListener("change", event => { state.kind=event.target.value; state.visible=15; updateURL(); if(state.loaded)render(); });
$("#category-select").addEventListener("change", event => { state.category = event.target.value; state.visible = 15; updateURL(); if (state.loaded) render(); });
$$('[data-group]').forEach(el => el.addEventListener("click", () => { state.group = el.dataset.group; state.visible = 15; updateURL(); if (state.loaded) render(); }));
$$('[data-target]').forEach(el => el.addEventListener("click", () => { state.target = el.dataset.target; state.visible = 15; updateURL(); if (state.loaded) render(); }));
$("#language-select").addEventListener("change", event => { state.lang = event.target.value === "zh" ? "zh" : "en"; updateURL(); applyLanguage(); });
$("#clear-filters").addEventListener("click",reset); $("#empty-reset").addEventListener("click", () => { reset(); $("#search-input").focus(); }); $("#retry-load").addEventListener("click",load);
$("#load-more").addEventListener("click", () => { const previous = state.visible; state.visible += 15; render(); const next = $$(".card-title-link")[previous]; if (next) next.focus({preventScroll:true}); });
document.addEventListener("keydown", event => { if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey && !["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) { event.preventDefault(); const search = sourceState.mode === "source-index" ? $("#source-search") : $("#search-input"); search.focus();
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  search.scrollIntoView({block:"center", behavior: prefersReducedMotion ? "auto" : "smooth"}); } });

const sourceState = { available: false, loaded: false, loading: false, error: false, mode: "curated", records: [], meta: {}, q: params.get("sourceq") || "", target: params.get("source-target") || "all", topic: params.get("topic") || "", sort: params.get("sort") || "relevance", visible: 24, topicIDs: new Set(), topicCounts: [] };
function sourceURL() { const next = new URL(location.href); if (sourceState.mode === "source-index") next.searchParams.set("view", "source-index"); else next.searchParams.set("view", "curated"); for (const [key,value] of [["sourceq",sourceState.q],["source-target",sourceState.target],["topic",sourceState.topic],["sort",sourceState.sort]]) { if (value && value !== "all" && value !== "relevance") next.searchParams.set(key,value); else next.searchParams.delete(key); } history.replaceState(null,"",next); }
function configureSourceIndex(meta) {
  const count=Number(meta?.resource_count||0);sourceState.available=count>0;$("#mode-sources").hidden=!sourceState.available;$("#mode-source-count").textContent=count?count.toLocaleString():"";$("#mode-curated-count").textContent=state.records.length;
  $("#download-source-index").hidden = !sourceState.available;
  const query=new URLSearchParams(location.search);const requested=query.get("view");const legacyCurated=["q","group","category","kind","target"].some(key=>query.has(key));setIndexMode(sourceState.available&&(requested==="source-index"||requested==="repositories"||(!requested&&!legacyCurated))?"source-index":"curated");
}
function setIndexMode(mode) {
  if (mode === "source-index" && !sourceState.available) return; sourceState.mode = mode; const isSource = mode === "source-index"; $("#curated-view").hidden = isSource; $("#source-view").hidden = !isSource;
  for (const [id,active] of [["#mode-curated",!isSource],["#mode-sources",isSource]]) { $(id).classList.toggle("active",active); $(id).setAttribute("aria-pressed",String(active)); }
  sourceURL(); if (isSource && !sourceState.loaded) loadSources(); else if (isSource) renderSources();
}
function topicLabel(topic) { return state.topicLabels[topic]?.[state.lang] || topic; }
function topicSearch(topic) { const entry = state.topicLabels[topic]; return [topic, entry?.en || "", entry?.zh || ""].join(" ").toLocaleLowerCase(); }
function topicDisplay(topic) { const translated = topicLabel(topic); return translated === topic ? topic : `${translated} · ${topic}`; }
function canonicalTopic(value) { const trimmed=value.trim().toLocaleLowerCase(); const match=Object.entries(state.topicLabels).find(([key, entry]) => [key, `${entry.en} · ${key}`, `${entry.zh} · ${key}`].some(label=>label.toLocaleLowerCase()===trimmed)); return match ? match[0] : value; }
function indexSourceTopics() {
  const topicCounts = new Map(); sourceState.records.forEach(r => r.topics.forEach(topic => topicCounts.set(topic,(topicCounts.get(topic)||0)+1)));
  sourceState.topicIDs = new Set(topicCounts.keys());
  sourceState.topicCounts = [...topicCounts].sort((a,b) => b[1]-a[1] || a[0].localeCompare(b[0]));
}
function topicSuggestions(value = "") {
  const query = canonicalTopic(value).toLocaleLowerCase().trim();
  const matches = sourceState.topicCounts.filter(([topic]) => !query || topicSearch(topic).includes(query));
  const exact = matches.findIndex(([topic]) => topic === query);
  if (exact > 0) matches.unshift(...matches.splice(exact,1));
  return matches.slice(0,150);
}
function renderTopicOptions(value = $("#source-topic").value) {
  const options = document.createDocumentFragment(); topicSuggestions(value).forEach(([topic,count]) => { const option = node("option","",`${topic} (${count})`); option.value=topicDisplay(topic); options.append(option); });
  $("#source-topic-options").replaceChildren(options);
}
function syncTopicInput() {
  const input=$("#source-topic"); const current=input.value; renderTopicOptions(current);
  if (current && !sourceState.topicIDs.has(canonicalTopic(current))) { /* keep free-text */ }
}
function sourceCard(record) {
  const article=node("article","source-card"); const head=node("div","card-heading"); const h3=node("h3");
  const title=external(record.html_url,"card-title-link",record.full_name); title.append(icon("external",true)); h3.append(title); head.append(h3); article.append(head);
  const meta=node("div","card-meta"); meta.append(node("span","stars",`${record.stargazers_count||0} ${t("sourceStars")}`), node("span","language",record.language||"")); article.append(meta);
  const descText = state.lang==="zh" ? (record.description_zh || record.description || t("sourceNoDescription")) : (record.description || t("sourceNoDescription"));
  article.append(node("p","card-description",descText));
  if (record.topics?.length) { const topics=node("div","topics"); record.topics.slice(0,8).forEach(topic => topics.append(node("span","topic-pill",topic))); article.append(topics); }
  const foot=node("div","card-footer"); foot.append(node("span","pushed",`${t("sourcePushedAt")} ${record.pushed_at?.slice(0,10)||""}`)); article.append(foot); return article;
}
function renderSources() {
  const q=sourceState.q.toLocaleLowerCase().trim(); const topic=canonicalTopic(sourceState.topic);
  const records=sourceState.records.filter(r => {
    if (sourceState.target!=="all" && !(r.targets||[]).includes(sourceState.target)) return false;
    if (topic && !(r.topics||[]).includes(topic)) return false;
    if (!q) return true;
    const hay=[r.full_name, r.description, r.description_zh, ...(r.topics||[])].filter(Boolean).join(" ").toLocaleLowerCase();
    return hay.includes(q);
  }).sort((a,b) => {
    if (sourceState.sort==="stars") return (b.stargazers_count||0)-(a.stargazers_count||0);
    if (sourceState.sort==="pushed") return (b.pushed_at||"").localeCompare(a.pushed_at||"");
    if (sourceState.sort==="name") return a.full_name.localeCompare(b.full_name);
    return 0;
  });
  const visible=records.slice(0,sourceState.visible);
  const grid=$("#source-grid"); grid.replaceChildren(...visible.map(sourceCard));
  grid.setAttribute("aria-busy","false");
  $("#source-status").textContent=`${records.length} ${t("directoryRepositories")}`;
  $("#source-empty").hidden=records.length>0||sourceState.error;
  $("#source-error").hidden=!sourceState.error;
  $("#source-load-more-row").hidden=records.length<=sourceState.visible||sourceState.error;
}
async function loadSources() {
  if (sourceState.loading) return; sourceState.loading=true; $("#source-status").textContent=t("sourceLoading");
  try {
    const response=await fetch(dataURL("source-index.json")); if(!response.ok) throw new Error(response.status);
    const data=await response.json(); sourceState.records=data.records||[]; sourceState.meta=data.meta||{}; indexSourceTopics(); sourceState.loaded=true; sourceState.error=false;
    renderSources(); syncTopicInput();
  } catch (error) { sourceState.error=true; sourceState.loaded=false; $("#source-status").textContent=t("sourceErrorTitle"); $("#source-error").hidden=false; $("#source-empty").hidden=true; } finally { sourceState.loading=false; }
}
$("#source-search").value = sourceState.q;
$("#source-search").addEventListener("input", event => { sourceState.q = event.target.value; sourceState.visible = 24; sourceURL(); if (sourceState.loaded) renderSources(); });
$$('[data-source-target]').forEach(el => el.addEventListener("click", () => { sourceState.target = el.dataset.sourceTarget; sourceState.visible = 24; sourceURL(); if (sourceState.loaded) renderSources(); }));
$("#source-topic").addEventListener("input", event => { sourceState.topic = canonicalTopic(event.target.value); sourceState.visible = 24; sourceURL(); renderTopicOptions(event.target.value); if (sourceState.loaded) renderSources(); });
$("#source-sort").addEventListener("change", event => { sourceState.sort = event.target.value; sourceURL(); if (sourceState.loaded) renderSources(); });
$("#source-clear").addEventListener("click", () => { sourceState.q=""; sourceState.target="all"; sourceState.topic=""; sourceState.sort="relevance"; sourceState.visible=24; $("#source-search").value=""; $("#source-topic").value=""; $("#source-sort").value="relevance"; $$('[data-source-target]').forEach(el=>el.classList.toggle("active",el.dataset.sourceTarget==="all")); sourceURL(); if(sourceState.loaded)renderSources(); });
$("#source-load-more").addEventListener("click", () => { sourceState.visible += 24; renderSources(); });
$("#mode-curated").addEventListener("click", () => setIndexMode("curated"));
$("#mode-sources").addEventListener("click", () => setIndexMode("source-index"));
$("#download-source-index").href = dataURL("source-index.json");
$("#download-curated-catalog").href = dataURL("catalog.json");
applyLanguage(); load();
