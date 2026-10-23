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
      "slide.5.title": "Part 2: NIST AI RMF & EU AI Act",
      "slide.6.title": "Part 2: MAESTRO, AIVSS, CSA Red Team & AICM",
      "slide.7.title": "Part 3: Seven Tactical Controls for ROI",
      "slide.8.title": "Control 1: Autonomy & Bounded Tool Governance",
      "slide.9.title": "Control 2: Intent-Based Access Control (IBAC)",
      "slide.10.title": "Control 3: Memory Hygiene for Token ROI",
      "slide.11.title": "Control 4: Trajectory Observability",
      "slide.12.title": "Control 5: Active Runtime Steering",
      "slide.13.title": "Control 6: Evaluation & ROI Benchmarks",
      "slide.14.title": "Control 7: Model Economics — Routing & Caching",
      "slide.15.title": "Executive Synthesis & Next Steps",

      "hero.eyebrow": "Productivity · Business Value · Defensible ROI",
      "hero.title": "AGENTIC AI PRODUCTIVITY & ENTERPRISE ROI",
      "hero.acronym": "<b>Part 1</b> Business Value · <b>Part 2</b> Risk Management · <b>Part 3</b> 7 Tactical Controls",
      "hero.sub": "Prioritize where Agentic AI creates productivity gain, govern risk with NIST / EU / MAESTRO / AIVSS / CSA, and apply <strong>seven tactical controls that protect and compound ROI</strong>.",
      "hero.by": "Presented by <strong>Ken Huang, CISSP</strong><br/>Adjunct Professor, University of San Francisco (USF) · Fellow &amp; Co-Chair, CSA AI Safety Working Groups · CEO, DistributedApps.ai",
      "hero.start": "Start Presentation ➔",
      "hero.spec": "MAESTRO Framework ↗",

      "about.kicker": "Authority & Academic Grounding",
      "about.h2": "About the Instructor: Ken Huang, CISSP",
      "about.b1": "🎓 Adjunct Professor, University of San Francisco (USF) · AI book author (Springer, Cambridge, Wiley, Packt)",
      "about.b2": "🛡️ CSA Fellow & Co-Chair (MAESTRO, AICM) · OWASP AIVSS Project Lead · OWASP LLM Top 10 Core Member",
      "about.b3": "🚀 CEO, DistributedApps.ai · Substack & LinkedIn: kenhuangus / kenhuang8",

      "s3.kicker": "Framework Overview",
      "s3.h2": "Three Parts: Value · Risk · Tactical ROI Controls",
      "s3.lead": "Enterprise Agentic AI ROI fails when teams skip prioritization, skip risk governance, or skip engineering controls. This deck sequences all three.",
      "s3.col1_t": "What Leaders Must Decide in Order",
      "s3.c1_1": "• Part 1 — Business value: classify every IT system into one of four Agentic AI investment buckets.",
      "s3.c1_2": "• Part 2 — Risk management: NIST AI RMF, EU AI Act, MAESTRO, AIVSS, CSA Agent Red Team, AICM.",
      "s3.c1_3": "• Part 3 — Seven tactical controls that raise productivity while protecting unit economics.",

      "s4.kicker": "Part 1 · Business Value & Productivity",
      "s4.h2": "Four IT System Buckets for Agentic AI Investment",
      "s4.lead": "Not every system should become agentic. Portfolio ROI depends on putting each system in the right bucket before spending on models, harnesses, or replatforming.",
      "s4.col1_t": "Decide Before You Build Agents",
      "s4.c1_1": "• Bucket 1–2 protect spend: leave stable systems alone, or add agents only where productivity and value acquisition clearly improve.",
      "s4.c1_2": "• Bucket 3 concentrates capital: re-platform only when legacy architecture blocks Agentic productivity and ROI.",
      "s4.c1_3": "• Bucket 4 is greenfield: build new capabilities as Agentic AI–native from day one.",

      "s5.kicker": "Part 2 · Risk Management · Policy Layer",
      "s5.h2": "Policy Anchors: NIST AI RMF & EU AI Act",
      "s5.lead": "Productivity gains evaporate when agents create regulatory, liability, or trust failures. Start risk management with recognized policy frameworks.",
      "s5.col1_t": "How Policy Protects ROI",
      "s5.c1_1": "• NIST AI RMF: map Govern / Map / Measure / Manage to agent lifecycle gates so risk work is continuous, not a one-time audit.",
      "s5.c1_2": "• EU AI Act: classify agent use-cases by risk tier; high-risk systems get documented controls before production spend scales.",
      "s5.c1_3": "• ROI link: early policy gating prevents costly rework, incident response, and forced shutdowns after deployment.",

      "s6.kicker": "Part 2 · Risk Management · Operational Stack",
      "s6.h2": "Operational Stack: MAESTRO · AIVSS · CSA",
      "s6.lead": "Policy alone is not enough. Agentic systems need threat modeling, vulnerability scoring, adversarial testing, and management controls that executives can run.",
      "s6.col1_t": "Four Controls, Three Executive Moves",
      "s6.c1_1": "• MAESTRO: threat-model agent architectures (tools, memory, multi-agent paths) before expanding autonomy.",
      "s6.c1_2": "• AIVSS: score AI / agent vulnerabilities so remediation spend follows severity, not anecdote.",
      "s6.c1_3": "• CSA Agent AI Red Teaming + AICM: adversarially test agents, then manage residual risk with CSA AI Controls Matrix practices.",

      "s7.kicker": "Part 3 · Tactical Controls",
      "s7.h2": "Seven Tactical Controls That Improve ROI",
      "s7.lead": "Once investment buckets and risk governance are set, these seven engineering controls convert agent autonomy into measurable productivity and lower unit cost.",
      "s7.col1_t": "What Each Control Buys You",
      "s7.c1_1": "• Safety & scope: Autonomy bounds, Intent control (IBAC), and Memory hygiene stop waste and blast-radius loss.",
      "s7.c1_2": "• Runtime discipline: Observability and Steering catch drift and loops before budgets burn.",
      "s7.c1_3": "• Economics: Evaluation metrics plus Model Economics (routing + caching) prove and compound ROI.",

      "s8.kicker": "Part 3 · Control 1",
      "s8.h2": "Autonomy Bounds & Tool Governance",
      "s8.lead": "Match task complexity to explicit Levels of Autonomy (LoA) and tool allowlists so agents raise velocity without unbounded spend or uncontrolled writes.",
      "s8.col1_t": "Three ROI Rules for Autonomy",
      "s8.c1_1": "• Tier autonomy: LoA 0–1 for read/draft; LoA 2–3 for sandboxed or supervised write; LoA 4 only with hard kill switches.",
      "s8.c1_2": "• Least-privilege tools: strip shell and production write paths until the task and CapToken justify them.",
      "s8.c1_3": "• Spend velocity caps: rate-limit tool calls and task budgets to stop infinite retry loops.",

      "s9.kicker": "Part 3 · Control 2",
      "s9.h2": "Intent-Based Access Control (IBAC)",
      "s9.lead": "RBAC fails for agents. Ground fuzzy prompts in a domain ontology and issue single-use CapTokens so execution follows verified intent, not ambient privilege.",
      "s9.col1_t": "Three Points That Protect ROI",
      "s9.c1_1": "• Confused Deputy: over-privileged agents execute injected goals; role grants alone cannot stop it.",
      "s9.c1_2": "• Ontology + Intent AST: resolve language into explicit entities, actions, and invariants before tools run.",
      "s9.c1_3": "• CapTokens: ephemeral, single-use credentials shrink blast radius and financial loss.",

      "s10.kicker": "Part 3 · Control 3",
      "s10.h2": "Memory Hygiene & Context for Token ROI",
      "s10.lead": "Context bloat is the primary driver of runaway token cost and reasoning degradation. A three-tier memory model recovers productivity and margin.",
      "s10.col1_t": "Three-Tier Discipline",
      "s10.c1_1": "• Tier 1 ephemeral: scratchpads and subagent worktrees zeroized at task end.",
      "s10.c1_2": "• Tier 2 quarantine: provenance-tagged buffer with strict TTL before promotion.",
      "s10.c1_3": "• Tier 3 verified long-term: signed immutable rules only — target ~65% token savings.",

      "s11.kicker": "Part 3 · Control 4",
      "s11.h2": "Trajectory Observability & Drift Detection",
      "s11.lead": "You cannot manage ROI you cannot see. OTel GenAI tracing exposes plan drift, token waste, and tool loops while the run is still recoverable.",
      "s11.col1_t": "Three Observability Must-Haves",
      "s11.c1_1": "• Thought → Plan → Tool → Observation DAG for every multi-turn agent run.",
      "s11.c1_2": "• Latency and token breakdown per step to find the expensive bottlenecks.",
      "s11.c1_3": "• Drift and loop scoring to halt retry oscillations before budget hemorrhage.",

      "s12.kicker": "Part 3 · Control 5",
      "s12.h2": "Active Runtime Steering & Control Gateway",
      "s12.lead": "Passive logs arrive after the money is gone. Deterministic Pre/PostToolUse interceptors approve, steer, sandbox, or kill in real time.",
      "s12.col1_t": "Three Gateway Actions That Save ROI",
      "s12.c1_1": "• PreToolUse: schema, budget, and CapToken checks before any side effect.",
      "s12.c1_2": "• PostToolUse: scrub injection, secrets, and unsafe payloads from tool output.",
      "s12.c1_3": "• Decision primitives: APPROVE · STEER · SANDBOX · KILL without full restart waste.",

      "s13.kicker": "Part 3 · Control 6",
      "s13.h2": "Evaluation & Enterprise ROI Benchmarks",
      "s13.lead": "Replace vanity LLM scores with engineering ROI metrics executives can fund: completion, cost per success, and human effort reclaimed.",
      "s13.col1_t": "Three Metrics That Matter",
      "s13.c1_1": "• TCR — Task Completion Rate without human repair (target ≥90%).",
      "s13.c1_2": "• CPST — Cost Per Successful Task (LLM + compute ÷ verified deliverables).",
      "s13.c1_3": "• HER — Human Effort Reduction net of oversight time; pair with continuous red-team regression.",

      "s14.kicker": "Part 3 · Control 7",
      "s14.h2": "Model Economics: Routing & Prompt Caching",
      "s14.lead": "Frontier models for every sub-task destroy unit economics. Cascaded routing plus prompt-cache TTL discipline routinely cuts inference cost 70–85%.",
      "s14.col1_t": "Three Levers on Unit Cost",
      "s14.c1_1": "• Tiered routing: local/edge → open-weights → frontier only for hard reasoning.",
      "s14.c1_2": "• Complexity classifier: send ~65% of sub-tasks away from frontier prices.",
      "s14.c1_3": "• Prompt cache: static prefixes + sliding TTL (e.g. Claude 5-min) for ~90% input discount and faster TTFT.",

      "s15.kicker": "Executive Synthesis",
      "s15.h2": "Three Moves That Compound Agentic ROI",
      "s15.lead": "Productivity and ROI come from portfolio selection, risk governance, and tactical engineering — not from buying a larger model alone.",
      "s15.col1_t": "Remember These Three",
      "s15.c1_1": "• Part 1: Put every IT system in one of four buckets before funding agents.",
      "s15.c1_2": "• Part 2: Run NIST AI RMF + EU AI Act with MAESTRO, AIVSS, CSA Red Team, and AICM.",
      "s15.c1_3": "• Part 3: Enforce the seven controls — autonomy, IBAC, memory, observability, steering, eval, model economics.",
      "s15.qa_title": "Open Discussion:",
      "s15.q1": "Which systems are Bucket 2 vs Bucket 3 in your estate?",
      "s15.q2": "Where is MAESTRO / AIVSS missing today?",
      "s15.q3": "Which of the seven controls is the fastest ROI win?"
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
      "slide.5.title": "第二部分：NIST AI RMF 与欧盟 AI 法案",
      "slide.6.title": "第二部分：MAESTRO、AIVSS、CSA 红队与 AICM",
      "slide.7.title": "第三部分：提升 ROI 的七项战术控制",
      "slide.8.title": "控制一：自主权边界与工具治理",
      "slide.9.title": "控制二：基于意图的访问控制 (IBAC)",
      "slide.10.title": "控制三：记忆卫生与 Token ROI",
      "slide.11.title": "控制四：执行轨迹可观测性",
      "slide.12.title": "控制五：主动运行时引导",
      "slide.13.title": "控制六：评估与 ROI 基准",
      "slide.14.title": "控制七：模型经济——路由与缓存",
      "slide.15.title": "高管总结与下一步",

      "hero.eyebrow": "生产力 · 业务价值 · 可辩护的 ROI",
      "hero.title": "智能体 AI 生产力与企业 ROI",
      "hero.acronym": "<b>第一部分</b> 业务价值 · <b>第二部分</b> 风险管理 · <b>第三部分</b> 七项战术控制",
      "hero.sub": "优先识别智能体带来生产力增益的场景，用 NIST / 欧盟 / MAESTRO / AIVSS / CSA 治理风险，并落地<strong>保护并放大 ROI 的七项战术控制</strong>。",
      "hero.by": "主讲人：<strong>黄连金 (Ken Huang), CISSP</strong><br/>旧金山大学 (USF) 客座教授 · 云安全联盟 (CSA) AI安全工作组联合主席 · DistributedApps.ai CEO",
      "hero.start": "开始演示 ➔",
      "hero.spec": "MAESTRO 框架 ↗",

      "about.kicker": "权威资质与学术基石",
      "about.h2": "关于讲师：黄连金 (Ken Huang), CISSP",
      "about.b1": "🎓 旧金山大学 (USF) 客座教授 · AI 著作作者（Springer、剑桥、Wiley、Packt）",
      "about.b2": "🛡️ CSA Fellow 兼联合主席（MAESTRO、AICM）· OWASP AIVSS 负责人 · OWASP LLM Top 10 核心成员",
      "about.b3": "🚀 DistributedApps.ai CEO · Substack / LinkedIn：kenhuangus / kenhuang8",

      "s3.kicker": "框架总览",
      "s3.h2": "三部分：价值 · 风险 · 战术 ROI 控制",
      "s3.lead": "企业智能体 ROI 失败，往往因为跳过优先级排序、跳过风险治理，或跳过工程控制。本演示按此三步展开。",
      "s3.col1_t": "领导者必须按序决策",
      "s3.c1_1": "• 第一部分——业务价值：将每个 IT 系统归入四类智能体投资桶之一。",
      "s3.c1_2": "• 第二部分——风险管理：NIST AI RMF、欧盟 AI 法案、MAESTRO、AIVSS、CSA 智能体红队、AICM。",
      "s3.c1_3": "• 第三部分——七项战术控制：在提升生产力的同时保护单位经济效益。",

      "s4.kicker": "第一部分 · 业务价值与生产力",
      "s4.h2": "智能体投资的四类 IT 系统桶",
      "s4.lead": "并非每个系统都应智能化。组合 ROI 取决于在投入模型、缰绳或重平台之前，先把系统放进正确的桶。",
      "s4.col1_t": "先决策，再建智能体",
      "s4.c1_1": "• 桶 1–2 保护开支：稳定系统维持现状；仅在生产力与价值获取明显提升处叠加智能体。",
      "s4.c1_2": "• 桶 3 集中资本：仅当遗留架构阻塞智能体生产力与 ROI 时才重塑平台。",
      "s4.c1_3": "• 桶 4 是绿地：新能力从第一天起按 Agentic AI Native 建设。",

      "s5.kicker": "第二部分 · 风险管理 · 政策层",
      "s5.h2": "政策锚点：NIST AI RMF 与欧盟 AI 法案",
      "s5.lead": "若智能体带来监管、责任或信任失败，生产力增益会迅速消失。风险管理应从公认政策框架起步。",
      "s5.col1_t": "政策如何保护 ROI",
      "s5.c1_1": "• NIST AI RMF：将 Govern / Map / Measure / Manage 映射到智能体生命周期关口，使风险工作持续而非一次性审计。",
      "s5.c1_2": "• 欧盟 AI 法案：按风险等级划分用例；高风险系统在扩大生产投入前必须具备成文控制。",
      "s5.c1_3": "• ROI 关联：早期政策门控可避免昂贵返工、事件响应与上线后强制关停。",

      "s6.kicker": "第二部分 · 风险管理 · 运营栈",
      "s6.h2": "运营栈：MAESTRO · AIVSS · CSA",
      "s6.lead": "仅有政策不够。智能体系统需要威胁建模、漏洞评分、对抗测试，以及高管可执行的管理控制。",
      "s6.col1_t": "四项能力，三项高管动作",
      "s6.c1_1": "• MAESTRO：在扩大自主权前，对工具、记忆与多智能体路径做威胁建模。",
      "s6.c1_2": "• AIVSS：对 AI / 智能体漏洞评分，使修复投入按严重度而非轶事排序。",
      "s6.c1_3": "• CSA 智能体红队 + AICM：对抗测试智能体，再用 CSA AI 控制矩阵管理残余风险。",

      "s7.kicker": "第三部分 · 战术控制",
      "s7.h2": "提升 ROI 的七项战术控制",
      "s7.lead": "投资桶与风险治理就绪后，这七项工程控制把智能体自主转化为可衡量生产力与更低单位成本。",
      "s7.col1_t": "每项控制换来什么",
      "s7.c1_1": "• 安全与范围：自主边界、意图控制 (IBAC)、记忆卫生，阻断浪费与爆炸半径损失。",
      "s7.c1_2": "• 运行纪律：可观测性与运行引导，在预算烧尽前捕捉漂移与死循环。",
      "s7.c1_3": "• 经济学：评估指标 + 模型经济（路由与缓存），证明并放大 ROI。",

      "s8.kicker": "第三部分 · 控制一",
      "s8.h2": "自主权边界与工具治理",
      "s8.lead": "将任务复杂度与明确的自主权等级 (LoA) 及工具白名单匹配，在提升速度的同时避免无界开销与失控写入。",
      "s8.col1_t": "自主权的三条 ROI 规则",
      "s8.c1_1": "• 分级自主：LoA 0–1 只读/草稿；LoA 2–3 沙箱或监督写入；LoA 4 仅配硬熔断。",
      "s8.c1_2": "• 最小特权工具：在任务与 CapToken 证明必要前，剥离 Shell 与生产写路径。",
      "s8.c1_3": "• 花费速率上限：限制工具调用与任务预算，阻断无限重试循环。",

      "s9.kicker": "第三部分 · 控制二",
      "s9.h2": "基于意图的访问控制 (IBAC)",
      "s9.lead": "RBAC 对智能体失效。用领域本体锚定模糊提示，并签发单次 CapToken，使执行跟随已验证意图而非环境特权。",
      "s9.col1_t": "保护 ROI 的三点",
      "s9.c1_1": "• 混淆代理：过高特权智能体执行注入目标；仅靠角色授权无法阻止。",
      "s9.c1_2": "• 本体 + 意图 AST：工具运行前将语言解析为明确实体、动作与不变量。",
      "s9.c1_3": "• CapToken：短暂、单次凭据，压缩爆炸半径与财务损失。",

      "s10.kicker": "第三部分 · 控制三",
      "s10.h2": "记忆卫生与上下文 Token ROI",
      "s10.lead": "上下文膨胀是 Token 成本失控与推理退化的主因。三层记忆模型可恢复生产力与利润率。",
      "s10.col1_t": "三层纪律",
      "s10.c1_1": "• Tier 1 临时：草稿本与子智能体工作区，任务结束即清空。",
      "s10.c1_2": "• Tier 2 隔离：带溯源标签与严格 TTL 的缓冲区，晋升前必检。",
      "s10.c1_3": "• Tier 3 可信长期：仅存签名不可变规则——目标约 65% Token 节省。",

      "s11.kicker": "第三部分 · 控制四",
      "s11.h2": "执行轨迹可观测性与漂移检测",
      "s11.lead": "看不见就管不好 ROI。OTel GenAI 追踪在运行仍可挽回时暴露计划漂移、Token 浪费与工具死循环。",
      "s11.col1_t": "三项可观测必备",
      "s11.c1_1": "• 每轮多智能体运行的 Thought → Plan → Tool → Observation DAG。",
      "s11.c1_2": "• 逐步延迟与 Token 分解，定位昂贵瓶颈。",
      "s11.c1_3": "• 漂移与循环评分，在预算失血前熔断重试振荡。",

      "s12.kicker": "第三部分 · 控制五",
      "s12.h2": "主动运行时引导与控制网关",
      "s12.lead": "被动日志出现时钱已经花掉。确定性 Pre/PostToolUse 拦截器实时批准、引导、沙箱或熔断。",
      "s12.col1_t": "节省 ROI 的三项网关动作",
      "s12.c1_1": "• PreToolUse：副作用前核验 Schema、预算与 CapToken。",
      "s12.c1_2": "• PostToolUse：清洗工具输出中的注入、密钥与不安全载荷。",
      "s12.c1_3": "• 决策原语：APPROVE · STEER · SANDBOX · KILL，避免全量重启浪费。",

      "s13.kicker": "第三部分 · 控制六",
      "s13.h2": "评估与企业 ROI 基准",
      "s13.lead": "用高管可资助的工程 ROI 指标替代虚荣 LLM 分数：完成率、成功单价、净回收人工。",
      "s13.col1_t": "三项关键指标",
      "s13.c1_1": "• TCR——无需人工修复的任务完成率（目标 ≥90%）。",
      "s13.c1_2": "• CPST——成功任务单价（LLM + 算力 ÷ 已验证交付物）。",
      "s13.c1_3": "• HER——扣除监督时间后的人工精力节省；配合持续红队回归。",

      "s14.kicker": "第三部分 · 控制七",
      "s14.h2": "模型经济：路由与 Prompt 缓存",
      "s14.lead": "每个子任务都用前沿模型会摧毁单位经济。级联路由加 Prompt 缓存 TTL 纪律，通常可削减 70–85% 推理成本。",
      "s14.col1_t": "单位成本的三个杠杆",
      "s14.c1_1": "• 分层路由：本地/端侧 → 开源权重 → 仅困难推理用前沿模型。",
      "s14.c1_2": "• 复杂度分类器：约 65% 子任务避开前沿模型定价。",
      "s14.c1_3": "• Prompt 缓存：静态前缀 + 滑动 TTL（如 Claude 5 分钟）≈90% 输入折扣与更快 TTFT。",

      "s15.kicker": "高管总结",
      "s15.h2": "放大智能体 ROI 的三步动作",
      "s15.lead": "生产力与 ROI 来自组合选择、风险治理与战术工程——而不是单纯买更大的模型。",
      "s15.col1_t": "记住这三点",
      "s15.c1_1": "• 第一部分：资助智能体前，将每个 IT 系统放入四类桶之一。",
      "s15.c1_2": "• 第二部分：以 NIST AI RMF + 欧盟 AI 法案运行，并叠加 MAESTRO、AIVSS、CSA 红队与 AICM。",
      "s15.c1_3": "• 第三部分：强制七项控制——自主、IBAC、记忆、可观测、引导、评估、模型经济。",
      "s15.qa_title": "开放讨论：",
      "s15.q1": "你的资产中哪些是桶 2，哪些是桶 3？",
      "s15.q2": "今天哪里还缺少 MAESTRO / AIVSS？",
      "s15.q3": "七项控制中哪一项是最快的 ROI 赢点？"
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
