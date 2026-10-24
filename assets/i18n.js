/* ============================================================
   Agentic AI Productivity & Enterprise ROI Framework — i18n
   Bilingual English / Simplified Chinese translations
   ============================================================ */
(function () {
  const DICT = {
    en: {
      "brand.title": "Agentic AI Productivity & ROI",
      "ui.fullscreen": "Full Screen",
      "ui.exitFull": "Exit Full Screen",
      "ui.prev": "‹ Prev",
      "ui.next": "Next ›",
      "ui.launch": "DistributedApps ↗",
      "ui.repo": "GitHub Repo ↗",

      "slide.1.title": "Agentic AI Productivity & Enterprise ROI",
      "slide.2.title": "About the Instructor: Ken Huang, CISSP",
      "slide.3.title": "Three-Part Framework Agenda",
      "slide.4.title": "Part 1: Four IT System Buckets for Agentic AI Value",
      "slide.5.title": "Part 2: NIST AI RMF Mapped to CSA & AIVSS",
      "slide.6.title": "Part 3: Seven Tactical Controls for ROI",
      "slide.7.title": "Control 1: Autonomy & Bounded Tool Governance",
      "slide.8.title": "Control 2: Intent-Based Access Control (IBAC)",
      "slide.9.title": "Control 3: Memory Hygiene for Token ROI",
      "slide.10.title": "Control 4: Trajectory Observability",
      "slide.11.title": "Control 5: Active Runtime Steering",
      "slide.12.title": "Control 6: Evaluation & ROI Benchmarks",
      "slide.13.title": "Control 7: Model Economics — Routing & Caching",
      "slide.14.title": "Executive Synthesis & Next Steps",

      "hero.eyebrow": "Productivity · Value · ROI",
      "hero.title": "AGENTIC AI PRODUCTIVITY & ENTERPRISE ROI",
      "hero.acronym": "<b>Part 1</b> Value · <b>Part 2</b> Risk · <b>Part 3</b> 7 Controls",
      "hero.sub": "Fund the right systems. Map risk to NIST. Apply <strong>7 controls for ROI</strong>.",
      "hero.by": "Presented by <strong>Ken Huang, CISSP</strong><br/>Adjunct Professor, USF · CSA AI Safety Co-Chair · CEO, DistributedApps.ai",
      "hero.start": "Start Presentation ➔",
      "hero.spec": "MAESTRO Framework ↗",

      "about.kicker": "Instructor",
      "about.h2": "Ken Huang, CISSP",
      "about.b1": "🎓 Adjunct Professor, USF · AI author (Springer, Cambridge, Wiley, Packt)",
      "about.b2": "🛡️ CSA Fellow (MAESTRO, AICM) · OWASP AIVSS Lead",
      "about.b3": "🚀 CEO, DistributedApps.ai",

      "s3.kicker": "Agenda",
      "s3.h2": "Value · Risk · 7 Controls",
      "s3.lead": "Skip value, risk, or controls and Agentic ROI fails.",
      "s3.col1_t": "Decide in order",
      "s3.c1_1": "• Part 1 — Classify IT into 4 investment buckets.",
      "s3.c1_2": "• Part 2 — Map CSA/AIVSS onto NIST Govern/Map/Measure/Manage.",
      "s3.c1_3": "• Part 3 — Seven controls for productivity and unit cost.",

      "s4.kicker": "Part 1 · Business Value",
      "s4.h2": "Four IT Investment Buckets",
      "s4.lead": "Classify each system before spending on agents.",
      "s4.col1_t": "Decide before you build",
      "s4.c1_1": "• Buckets 1–2: leave alone, or overlay agents where value rises.",
      "s4.c1_2": "• Bucket 3: re-platform when legacy blocks agent ROI.",
      "s4.c1_3": "• Bucket 4: build new systems Agentic-native.",

      "s5.kicker": "Part 2 · NIST AI RMF",
      "s5.h2": "NIST RMF ← CSA / AIVSS Map",
      "s5.lead": "NIST Govern/Map/Measure/Manage (+ EU AI Act tiers). Map CSA/OWASP onto each function.",
      "s5.col1_t": "RMF → artifacts",
      "s5.c1_1": "• Govern → CSA AI Org. Responsibility White Papers.",
      "s5.c1_2": "• Map → MAESTRO · Measure → AIVSS.",
      "s5.c1_3": "• Manage → CSA AICM + Red Teaming Guide.",

      "s6.kicker": "Part 3 · Controls",
      "s6.h2": "Seven Controls for ROI",
      "s6.lead": "Convert autonomy into productivity and lower unit cost.",
      "s6.col1_t": "What each buys",
      "s6.c1_1": "• Scope: Autonomy, IBAC, Memory.",
      "s6.c1_2": "• Runtime: Observability, Steering.",
      "s6.c1_3": "• Economics: Eval + routing/cache.",

      "s7.kicker": "Control 1",
      "s7.h2": "Autonomy & Tool Bounds",
      "s7.lead": "Match LoA and tool allowlists to the task.",
      "s7.col1_t": "Three rules",
      "s7.c1_1": "• LoA 0–1 read/draft; 2–3 sandbox/supervise; 4 with kill switches.",
      "s7.c1_2": "• Least-privilege tools until CapToken justifies more.",
      "s7.c1_3": "• Cap tool rate and spend to stop retry loops.",

      "s8.kicker": "Control 2",
      "s8.h2": "Intent-Based Access (IBAC)",
      "s8.lead": "Bound tools to verified intent, not ambient roles.",
      "s8.col1_t": "Three points",
      "s8.c1_1": "• Confused Deputy: injection + broad roles.",
      "s8.c1_2": "• Ontology + Intent AST before tools run.",
      "s8.c1_3": "• Single-use CapTokens shrink blast radius.",

      "s9.kicker": "Control 3",
      "s9.h2": "Memory Hygiene",
      "s9.lead": "Context bloat drives token cost and weak reasoning.",
      "s9.col1_t": "Three tiers",
      "s9.c1_1": "• Tier 1 ephemeral — zeroize at end.",
      "s9.c1_2": "• Tier 2 quarantine + TTL.",
      "s9.c1_3": "• Tier 3 signed rules only (~65% token cut).",

      "s10.kicker": "Control 4",
      "s10.h2": "Trajectory Observability",
      "s10.lead": "OTel catches drift and waste while the run is recoverable.",
      "s10.col1_t": "Three must-haves",
      "s10.c1_1": "• Thought → Plan → Tool → Observation DAG.",
      "s10.c1_2": "• Per-step latency and token cost.",
      "s10.c1_3": "• Halt after 3 identical tool failures.",

      "s11.kicker": "Control 5",
      "s11.h2": "Runtime Steering",
      "s11.lead": "Intercept before side effects—not after the bill.",
      "s11.col1_t": "Three actions",
      "s11.c1_1": "• PreToolUse: schema, budget, CapToken.",
      "s11.c1_2": "• PostToolUse: scrub secrets and injection.",
      "s11.c1_3": "• APPROVE · STEER · SANDBOX · KILL.",

      "s12.kicker": "Control 6",
      "s12.h2": "ROI Benchmarks",
      "s12.lead": "Fund TCR, CPST, HER—not vanity LLM scores.",
      "s12.col1_t": "Three metrics",
      "s12.c1_1": "• TCR ≥90% without human repair.",
      "s12.c1_2": "• CPST = spend ÷ verified deliverables.",
      "s12.c1_3": "• HER = hours saved − oversight; keep red-team gates.",

      "s13.kicker": "Control 7",
      "s13.h2": "Model Economics",
      "s13.lead": "Routing + cache cuts inference cost 70–85%.",
      "s13.col1_t": "Three levers",
      "s13.c1_1": "• Local → open-weights → frontier only when hard.",
      "s13.c1_2": "• ~65% of sub-tasks off frontier price.",
      "s13.c1_3": "• Prompt cache + sliding TTL (~90% input discount).",

      "s14.kicker": "Synthesis",
      "s14.h2": "Three Moves for Agentic ROI",
      "s14.lead": "Buckets + NIST map + seven controls beat a bigger model alone.",
      "s14.col1_t": "Remember",
      "s14.c1_1": "• Part 1: Four buckets before funding.",
      "s14.c1_2": "• Part 2: Org papers / MAESTRO / AIVSS / AICM+Red Team → NIST.",
      "s14.c1_3": "• Part 3: Enforce the seven controls.",
      "s14.qa_title": "Discuss:",
      "s14.q1": "Bucket 2 vs 3?",
      "s14.q2": "Which RMF function is missing its artifact?",
      "s14.q3": "Fastest control ROI win?"

    },

    zh: {
      "brand.title": "智能体生产力与企业 ROI",
      "ui.fullscreen": "全屏演示",
      "ui.exitFull": "退出全屏",
      "ui.prev": "‹ 上一页",
      "ui.next": "下一页 ›",
      "ui.launch": "DistributedApps ↗",
      "ui.repo": "GitHub 代码仓 ↗",

      "slide.1.title": "智能体 AI 生产力与企业 ROI",
      "slide.2.title": "关于讲师：黄连金 (Ken Huang), CISSP",
      "slide.3.title": "三部分框架议程",
      "slide.4.title": "第一部分：IT 系统四类投资桶",
      "slide.5.title": "第二部分：NIST AI RMF 映射到 CSA 与 AIVSS",
      "slide.6.title": "第三部分：提升 ROI 的七项战术控制",
      "slide.7.title": "控制一：自主权边界与工具治理",
      "slide.8.title": "控制二：基于意图的访问控制 (IBAC)",
      "slide.9.title": "控制三：记忆卫生与 Token ROI",
      "slide.10.title": "控制四：执行轨迹可观测性",
      "slide.11.title": "控制五：主动运行时引导",
      "slide.12.title": "控制六：评估与 ROI 基准",
      "slide.13.title": "控制七：模型经济——路由与缓存",
      "slide.14.title": "高管总结与下一步",

      "hero.eyebrow": "生产力 · 价值 · ROI",
      "hero.title": "智能体 AI 生产力与企业 ROI",
      "hero.acronym": "<b>第一部分</b> 价值 · <b>第二部分</b> 风险 · <b>第三部分</b> 七项控制",
      "hero.sub": "投对系统。映射 NIST 风险。落地<strong>七项控制保 ROI</strong>。",
      "hero.by": "主讲人：<strong>黄连金 (Ken Huang), CISSP</strong><br/>旧金山大学客座教授 · CSA AI 安全联合主席 · DistributedApps.ai CEO",
      "hero.start": "开始演示 ➔",
      "hero.spec": "MAESTRO 框架 ↗",

      "about.kicker": "讲师",
      "about.h2": "黄连金 (Ken Huang), CISSP",
      "about.b1": "🎓 旧金山大学客座教授 · AI 著作作者",
      "about.b2": "🛡️ CSA Fellow（MAESTRO、AICM）· OWASP AIVSS 负责人",
      "about.b3": "🚀 DistributedApps.ai CEO",

      "s3.kicker": "议程",
      "s3.h2": "价值 · 风险 · 七项控制",
      "s3.lead": "跳过价值、风险或控制，智能体 ROI 就会失败。",
      "s3.col1_t": "按序决策",
      "s3.c1_1": "• 第一部分——IT 归入四类投资桶。",
      "s3.c1_2": "• 第二部分——CSA/AIVSS 映射到 NIST Govern/Map/Measure/Manage。",
      "s3.c1_3": "• 第三部分——七项控制提升生产力并保护单位成本。",

      "s4.kicker": "第一部分 · 业务价值",
      "s4.h2": "四类 IT 投资桶",
      "s4.lead": "投入智能体前先分类每个系统。",
      "s4.col1_t": "先决策再建",
      "s4.c1_1": "• 桶 1–2：维持现状，或仅在价值提升处叠加智能体。",
      "s4.c1_2": "• 桶 3：遗留阻塞 ROI 时重塑平台。",
      "s4.c1_3": "• 桶 4：新系统按 Agentic Native 建设。",

      "s5.kicker": "第二部分 · NIST AI RMF",
      "s5.h2": "NIST RMF ← CSA / AIVSS 映射",
      "s5.lead": "以 NIST Govern/Map/Measure/Manage 为脊梁（含欧盟 AI 法案分级），映射 CSA/OWASP 工件。",
      "s5.col1_t": "RMF → 工件",
      "s5.c1_1": "• Govern → CSA AI 组织责任白皮书。",
      "s5.c1_2": "• Map → MAESTRO · Measure → AIVSS。",
      "s5.c1_3": "• Manage → CSA AICM + 红队指南。",

      "s6.kicker": "第三部分 · 控制",
      "s6.h2": "提升 ROI 的七项控制",
      "s6.lead": "把自主转化为生产力与更低单位成本。",
      "s6.col1_t": "各控制换来什么",
      "s6.c1_1": "• 范围：自主、IBAC、记忆。",
      "s6.c1_2": "• 运行：可观测、引导。",
      "s6.c1_3": "• 经济：评估 + 路由/缓存。",

      "s7.kicker": "控制一",
      "s7.h2": "自主权与工具边界",
      "s7.lead": "将 LoA 与工具白名单匹配到任务。",
      "s7.col1_t": "三条规则",
      "s7.c1_1": "• LoA 0–1 只读/草稿；2–3 沙箱/监督；4 配熔断。",
      "s7.c1_2": "• CapToken 证明前保持最小特权工具。",
      "s7.c1_3": "• 限制调用速率与花费，阻断重试循环。",

      "s8.kicker": "控制二",
      "s8.h2": "意图访问控制 (IBAC)",
      "s8.lead": "工具受限于已验证意图，而非环境角色。",
      "s8.col1_t": "三点",
      "s8.c1_1": "• 混淆代理：注入 + 过高角色。",
      "s8.c1_2": "• 工具前完成本体 + 意图 AST。",
      "s8.c1_3": "• 单次 CapToken 压缩爆炸半径。",

      "s9.kicker": "控制三",
      "s9.h2": "记忆卫生",
      "s9.lead": "上下文膨胀推高 Token 成本并削弱推理。",
      "s9.col1_t": "三层",
      "s9.c1_1": "• Tier 1 临时——结束即清空。",
      "s9.c1_2": "• Tier 2 隔离 + TTL。",
      "s9.c1_3": "• Tier 3 仅签名规则（约省 65% Token）。",

      "s10.kicker": "控制四",
      "s10.h2": "轨迹可观测",
      "s10.lead": "OTel 在仍可挽回时捕捉漂移与浪费。",
      "s10.col1_t": "三项必备",
      "s10.c1_1": "• Thought → Plan → Tool → Observation DAG。",
      "s10.c1_2": "• 逐步延迟与 Token 成本。",
      "s10.c1_3": "• 相同工具失败 3 次即熔断。",

      "s11.kicker": "控制五",
      "s11.h2": "运行时引导",
      "s11.lead": "副作用前拦截——不要等账单后再看日志。",
      "s11.col1_t": "三项动作",
      "s11.c1_1": "• PreToolUse：Schema、预算、CapToken。",
      "s11.c1_2": "• PostToolUse：清洗密钥与注入。",
      "s11.c1_3": "• APPROVE · STEER · SANDBOX · KILL。",

      "s12.kicker": "控制六",
      "s12.h2": "ROI 基准",
      "s12.lead": "用 TCR、CPST、HER 决策——不用虚荣分数。",
      "s12.col1_t": "三项指标",
      "s12.c1_1": "• TCR ≥90%，无需人工修复。",
      "s12.c1_2": "• CPST = 花费 ÷ 已验证交付物。",
      "s12.c1_3": "• HER = 节省工时 − 监督；保留红队门控。",

      "s13.kicker": "控制七",
      "s13.h2": "模型经济",
      "s13.lead": "路由 + 缓存削减推理成本 70–85%。",
      "s13.col1_t": "三个杠杆",
      "s13.c1_1": "• 本地 → 开源 → 仅困难任务用前沿。",
      "s13.c1_2": "• 约 65% 子任务避开前沿定价。",
      "s13.c1_3": "• Prompt 缓存 + 滑动 TTL（约 90% 输入折扣）。",

      "s14.kicker": "总结",
      "s14.h2": "放大 ROI 的三步",
      "s14.lead": "投资桶 + NIST 映射 + 七项控制，胜过单纯更大模型。",
      "s14.col1_t": "记住",
      "s14.c1_1": "• 第一部分：资助前完成四类桶分类。",
      "s14.c1_2": "• 第二部分：组织白皮书 / MAESTRO / AIVSS / AICM+红队 → NIST。",
      "s14.c1_3": "• 第三部分：强制七项控制。",
      "s14.qa_title": "讨论：",
      "s14.q1": "桶 2 还是桶 3？",
      "s14.q2": "哪项 RMF 职能缺工件？",
      "s14.q3": "哪项控制 ROI 最快？"

    }
  };

  let currentLang = "en";

  function setLang(lang) {
    if (!DICT[lang]) return;
    currentLang = lang;
    document.documentElement.lang = (lang === "zh" ? "zh-CN" : "en");
    document.body.classList.toggle("is-zh", lang === "zh");

    document.querySelectorAll(".lang__btn").forEach(btn => {
      btn.classList.toggle("is-on", btn.dataset.lang === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (DICT[lang][key] && !el.hasAttribute("data-i18n-html")) {
        el.textContent = DICT[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18n;
      if (DICT[lang][key]) {
        el.innerHTML = DICT[lang][key];
      }
    });

    document.dispatchEvent(new CustomEvent("agentsec:lang", { detail: { lang } }));
  }

  window.AGENT_SEC_I18N = {
    t: (key) => (DICT[currentLang] && DICT[currentLang][key]) || key,
    getSlideTitle: (idx) => (DICT[currentLang] && DICT[currentLang][`slide.${idx + 1}.title`]) || "",
    isZh: () => currentLang === "zh",
    setLang: setLang
  };

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang__btn").forEach(btn => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.lang);
      });
    });

    const params = new URLSearchParams(window.location.search);
    const qLang = params.get("lang");
    if (qLang && DICT[qLang]) {
      setLang(qLang);
    } else {
      setLang("en");
    }
  });
})();
