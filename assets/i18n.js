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
      "ui.launch": "Documentation ↗",
      "ui.repo": "GitHub Repo ↗",

      "slide.1.title": "Agentic AI Productivity & Enterprise ROI Framework",
      "slide.2.title": "About the Instructor: Ken Huang, CISSP",
      "slide.3.title": "The Enterprise Agentic ROI Equation & Hidden Tax",
      "slide.4.title": "Pillar 1: Agent Autonomy & Bounded Tool Governance",
      "slide.5.title": "Pillar 2: Domain Ontology & Intent-Based Access Control (IBAC)",
      "slide.6.title": "Pillar 3: Context Hygiene & Hierarchical Memory for Token ROI",
      "slide.7.title": "Pillar 4: Trajectory Observability & Reasoning Trace Drift",
      "slide.8.title": "Pillar 5: Active Runtime Steering & Control Plane",
      "slide.9.title": "Pillar 6: Rigorous Evaluation & Enterprise ROI Benchmarking",
      "slide.10.title": "Pillar 7: Mixed-Model Cascaded Routing Architecture",
      "slide.11.title": "Pillar 8: Prompt Cache Optimization & Claude Code Cache TTL",
      "slide.12.title": "Executive Synthesis, ROI Roadmap & Interactive Q/A",

      // Slide 1
      "hero.eyebrow": "Enterprise Autonomous Systems · Operational Unit Economics",
      "hero.title": "Agentic AI Productivity & Enterprise ROI Framework",
      "hero.acronym": "<b>A</b>utonomy · <b>I</b>ntent Control · <b>M</b>emory Hygiene · <b>O</b>bservability · <b>S</b>teering · <b>E</b>val · <b>M</b>ixed Models · <b>C</b>aching",
      "hero.sub": "Architectural principles, deterministic guardrails, and model-routing strategies to <strong>maximize business value while slashing unit token costs by 70–85%</strong>.",
      "hero.by": "Presented by <strong>Ken Huang, CISSP</strong><br/>Adjunct Professor, University of San Francisco (USF) · Fellow &amp; Co-Chair, CSA AI Safety Working Groups · CEO, DistributedApps.ai",
      "hero.start": "Start Presentation ➔",
      "hero.spec": "View Blueprint ↗",

      // Slide 2
      "about.kicker": "Authority & Academic Grounding",
      "about.title": "About the Instructor: Ken Huang, CISSP",
      "about.h2": "About the Instructor: Ken Huang, CISSP",
      "about.b1": "AI Book Author & Speaker (Harness Engineering, MAESTRO, Agentic AI)",
      "about.b2": "Adjunct Professor, University of San Francisco: https://www.usfca.edu/faculty/ken-huang",
      "about.b3": "OWASP AIVSS Project Lead",
      "about.b4": "Fellow & Co-Chair of two CSA AI Safety Working Groups",
      "about.b5": "Core Member, OWASP Top 10 for LLM Applications",
      "about.b6": "AIUC-1 Consortium Member · Grant Review Member for Schmidt Sciences",
      "about.b7": "EC-Council Instructor — Generative AI for Cyber Security",
      "about.b8": "CEO of DistributedApps.ai: https://distributedapps.ai/",
      "about.pubs": "📚 AI & Cyber Security Books (Packt, Springer, Cambridge University Press, Wiley)",
      "about.amazon": "Amazon Author Page ➔",

      // Slide 3
      "s3.kicker": "Financial Realities & Unit Economics",
      "s3.h2": "The Enterprise Agentic ROI Equation & The Hidden Cost Tax",
      "s3.lead": "Deploying autonomous agents without engineering controls leads to negative ROI: runaway token churn, catastrophic blast radius, and heavy developer rework.",
      "s3.col1_t": "Why Naive Agents Destroy Enterprise ROI",
      "s3.c1_1": "• Unbounded Tool Execution: Looping on failed terminal commands wastes thousands of tokens per task.",
      "s3.c1_2": "• Context Window Bloat: Re-sending complete repo history on every turn degrades reasoning and inflates bills.",
      "s3.c1_3": "• Confused Deputy Attacks: Over-privileged agents execute unintended actions via indirect prompt injection.",
      "s3.c1_4": "• Monolithic Frontier Model Tax: Paying $15/M tokens for trivial tasks like JSON extraction and lint checks.",
      "s3.col2_t": "The Engineered Agentic ROI Equation",
      "s3.c2_1": "• Value Velocity Multiplier: Accelerating task completion velocity by 3x–10x with zero manual code review bottlenecks.",
      "s3.c2_2": "• Unit Token Optimization: Slicing marginal inference costs by 70–85% through caching, routing, and schema pruning.",
      "s3.c2_3": "• Defensible Risk Bounds: Eliminating blast radius with formal ontology boundaries and single-use capability tokens.",

      // Slide 4
      "s4.kicker": "Pillar 1: Autonomy Governance",
      "s4.h2": "Levels of Autonomy (LoA) & Bounded Tool Governance",
      "s4.lead": "Maximizing ROI requires matching agent task complexity to explicit autonomy bounds and granular tool allowlists, avoiding costly human micromanagement and catastrophic unintended actions.",
      "s4.box1_t": "6-Tier Autonomy Operational Taxonomy",
      "s4.b1_1": "• LoA 0 (Read-Only): Query documentation, codebase search. Zero write privilege.",
      "s4.b1_2": "• LoA 1 (Draft & Propose): Write code changes to isolated diffs; human must explicitly apply.",
      "s4.b1_3": "• LoA 2 (Sandboxed Auto): Ephemeral branch execution, unit test runs, capped spend ($50).",
      "s4.b1_4": "• LoA 3 (Supervised Full): Multi-tool pipelines; production migrations require dual-agent check.",
      "s4.b1_5": "• LoA 4 (Autonomous Envelope): Self-healing deployment with strict invariant telemetry triggers.",
      "s4.box2_t": "ROI Impact of LoA Tool Scoping",
      "s4.b2_1": "• Least-Privilege Tools: Stripping shell access prevents 100% of rm -rf and lateral environment leaks.",
      "s4.b2_2": "• Spend Velocity Caps: Rate-limiting tool invocations stops infinite retry loops and budget drain.",
      "s4.b2_3": "• Automated Step-Down: Drift detection automatically demotes LoA 3 agents to LoA 1 for human sign-off.",

      // Slide 5
      "s5.kicker": "Pillar 2: Intent-Based Access Control",
      "s5.h2": "Domain Ontology & Intent-Based Access Control (IBAC)",
      "s5.lead": "Classical Role-Based Access Control (RBAC) fails in agentic systems. Grounding fuzzy intent in a domain ontology stops Confused Deputy exploits and shrinks blast radius.",
      "s5.col1_t": "The Confused Deputy Vulnerability",
      "s5.c1_1": "• The Flaw: An agent with broad admin roles is tricked by indirect prompt injection into invoking sensitive tools.",
      "s5.c1_2": "• The Result: Financial drain, unauthorized cloud provisioning, or production database drops.",
      "s5.c1_3": "• The Defense: Role privileges are irrelevant; execution must be bounded strictly to verified user intent.",
      "s5.col2_t": "Ontology-Driven CapToken Pipeline",
      "s5.c2_1": "• Domain Ontology Mapping: Resolves fuzzy natural language into explicit entities, actions, and invariant rules.",
      "s5.c2_2": "• Formal Intent AST: Compiles structured action trees (e.g., Action: PatchBug, File: auth.py, Network: False).",
      "s5.c2_3": "• Attenuated CapTokens: Issues ephemeral, single-use, cryptographic capability tokens for target APIs.",

      // Slide 6
      "s6.kicker": "Pillar 3: Context Window Engineering",
      "s6.h2": "Context Hygiene & Hierarchical Memory for Token ROI",
      "s6.lead": "Context bloat is the primary driver of runaway LLM costs and reasoning degradation. A 3-tier memory model achieves 65% token savings while maintaining high task fidelity.",
      "s6.box1_t": "The Quadratic Cost of Context Bloat",
      "s6.b1_1": "• Attention Degradation: As context expands >64k tokens, needle-in-a-haystack retrieval accuracy drops sharply.",
      "s6.b1_2": "• Compounding Token Bills: Sending 100k unpruned tokens across 30 turns consumes 3,000,000 tokens per single feature.",
      "s6.b1_3": "• Split-Brain Loops: Conflicting prompt memories induce cognitive deadlocks and repetitive tool calls.",
      "s6.box2_t": "3-Tier Defensive Memory Architecture",
      "s6.b2_1": "• Tier 1 (Ephemeral Turn): Scratchpads, subagent worktrees; zeroized immediately upon task completion.",
      "s6.b2_2": "• Tier 2 (Quarantined Buffer): CRDT conflict reconciliation, provenance tags, and strict TTL expiry (30s quotes).",
      "s6.b2_3": "• Tier 3 (Verified Long-Term): Cryptographically signed immutable rules, project contracts, zero direct writes.",

      // Slide 7
      "s7.kicker": "Pillar 4: Behavioral Observability",
      "s7.h2": "Trajectory Observability & Reasoning Trace Drift Detection",
      "s7.lead": "Effective ROI governance demands full visibility into the agent's internal cognitive trajectory. OpenTelemetry (OTel) GenAI tracing detects cognitive divergence before budget is exhausted.",
      "s7.col1_t": "OTel GenAI Trajectory Tracing",
      "s7.c1_1": "• Step-by-Step DAG: Captures Thought ➔ Plan ➔ Tool Call ➔ Environment Observation across multi-agent turns.",
      "s7.c1_2": "• Latency & Token Breakdown: Pinpoints slow tools, bloated responses, and inefficient intermediate reasoning steps.",
      "s7.c1_3": "• Audit Trail Replay: Cryptographically verifiable execution logs for enterprise compliance and post-incident review.",
      "s7.col2_t": "Real-Time Anomaly & Drift Scoring",
      "s7.c2_1": "• Semantic Drift Scoring: Measures cosine distance between active plan trajectory and the Spec-Driven Job Description.",
      "s7.c2_2": "• Loop Interception: Detects repeating tool failure oscillations (>3 retries), halting token hemorrhage immediately.",
      "s7.c2_3": "• Lateral Movement Interception: Flags unauthorized filesystem traversal or credential environment access.",

      // Slide 8
      "s8.kicker": "Pillar 5: Active Control Plane",
      "s8.h2": "Active Runtime Steering & Deterministic Control Gateway",
      "s8.lead": "Passive monitoring only produces post-mortem incident logs. Runtime steering provides out-of-band deterministic interceptors to correct errors, divert to sandboxes, or trigger kill switches.",
      "s8.box1_t": "Deterministic Interceptor Gateway",
      "s8.b1_1": "• PreToolUse Interception: Evaluates arguments against JSON schemas, budget caps, and IBAC CapTokens before invocation.",
      "s8.b1_2": "• PostToolUse Sanitizer: Scrubs tool output for prompt injection payloads, credentials, and sensitive private data.",
      "s8.b1_3": "• Dynamic Mutation: Rewrites unsafe tool arguments on-the-fly to conform to enterprise safety constraints.",
      "s8.box2_t": "4 Deterministic Decision Primitives",
      "s8.b2_1": "• APPROVE: Validated request executes immediately against production environment.",
      "s8.b2_2": "• STEER: Injects corrective prompts into agent context to guide self-correction without restarting.",
      "s8.b2_3": "• SANDBOX: Diverts unverified modifications into isolated ephemeral Git worktrees for safe testing.",
      "s8.b2_4": "• KILL: Trips automated circuit breaker, revokes ephemeral keypairs, and alerts human supervisor.",

      // Slide 9
      "s9.kicker": "Pillar 6: Rigorous Benchmarking",
      "s9.h2": "Enterprise Evaluation & ROI Benchmarking Framework",
      "s9.lead": "Measuring agent productivity requires moving beyond toy MMLU benchmarks to quantifiable engineering metrics: task completion rates, cost per successful task, and developer hours reclaimed.",
      "s9.col1_t": "The 4 Core Enterprise ROI Metrics",
      "s9.c1_1": "• Task Completion Rate (TCR): % of end-to-end multi-turn coding/ops goals completed without human repair (Target: ≥90%).",
      "s9.c1_2": "• Cost Per Successful Task (CPST): Total LLM & compute spend divided by verified completed deliverables.",
      "s9.c1_3": "• Token Efficiency Ratio (TER): Theoretical minimum token steps divided by actual steps executed.",
      "s9.c1_4": "• Human Effort Reduction (HER): Net engineering hours saved minus prompt review and oversight time.",
      "s9.col2_t": "Continuous Anti-Regression Pipelines",
      "s9.c2_1": "• Synthetic Red-Teaming: Automated test suites running 500+ adversarial injection and tool corruption challenges.",
      "s9.c2_2": "• Invariant Compliance (SICR): Zero tolerance (100% strict) for budget violations and policy bypasses.",
      "s9.c2_3": "• Telemetry Dashboards: Live executive tracking of token ROI, model latency, and developer satisfaction scores.",

      // Slide 10
      "s10.kicker": "Pillar 7: Hybrid Model Routing",
      "s10.h2": "Mixed-Model Cascaded Routing (Local / Open-Weights vs Frontier)",
      "s10.lead": "Routing every sub-task to frontier models is the single largest cause of poor agent economics. A cascaded multi-model architecture cuts overall inference expenses by 75–85%.",
      "s10.box1_t": "3-Tier Model Specialization Hierarchy",
      "s10.b1_1": "• Tier 1: Small Edge / Local Models (Qwen 2.5 7B, Llama 3.2 on Ollama/vLLM): Regex, JSON parsing, AST linting ($0 marginal cost).",
      "s10.b1_2": "• Tier 2: Hosted Open-Weights (DeepSeek-V3, Llama 3.3 70B, Qwen 2.5 Coder): Drafting, unit testing, docstring generation ($0.25–$1.00/M).",
      "s10.b1_3": "• Tier 3: Frontier Reasoning Models (Claude 3.7 Sonnet, GPT-4.5): Complex architecture decomposition, security audit ($3–$15/M).",
      "s10.box2_t": "Cascaded Dispatch Economics",
      "s10.b2_1": "• Complexity Classifier: Fast rule-based router directs 65% of subagent requests to Tier 1 and Tier 2 models.",
      "s10.b2_2": "• Pre-Filtering & Distillation: Small models summarize verbose tool outputs before passing to frontier models.",
      "s10.b2_3": "• Escalation on Failure: If an open-weight model fails verification, the task is automatically escalated to Claude 3.7 Sonnet.",

      // Slide 11
      "s11.kicker": "Pillar 8: Prompt Caching Economics",
      "s11.h2": "Prompt Cache Optimization & Claude Code Cache TTL Mechanics",
      "s11.lead": "Prompt caching provides up to a 90% discount on input tokens and cuts latency by 80%. Mastering cache breakpoint placement and the 5-minute sliding TTL is essential for production ROI.",
      "s11.col1_t": "Claude API Prompt Cache Mechanics",
      "s11.c1_1": "• 90% Input Discount: Cached prompt prefix tokens are billed at 10% of base rate, dropping repetitive costs drastically.",
      "s11.c1_2": "• Sub-Second Latency: Cached context skips initial prompt processing, reducing time-to-first-token (TTFT) by up to 80%.",
      "s11.c1_3": "• Strategic Breakpoints: Placing up to 4 cache_control breakpoints across static system prompts and MCP schemas.",
      "s11.col2_t": "Claude Code 5-Minute Cache TTL Strategy",
      "s11.c2_1": "• Sliding TTL Lifetime: Each cache hit refreshes the 5-minute validity window, keeping continuous coding sessions active.",
      "s11.c2_2": "• Prompt Layout Ordering: Static System Instructions ➔ MCP Tool Manifests ➔ Project CLAUDE.md ➔ Dynamic User Diffs.",
      "s11.c2_3": "• Invalidation Guardrails: Keeping immutable context at prompt prefixes prevents premature cache evictions and cost spikes.",

      // Slide 12
      "s12.kicker": "Executive Roadmap & Synthesis",
      "s12.h2": "Executive Synthesis, ROI Implementation Blueprint & Open Q/A",
      "s12.lead": "Achieving 10x developer productivity with defensible unit economics requires uniting bounded autonomy, intent control, memory hygiene, mixed models, and prompt caching into a disciplined harness.",
      "s12.takeaways_title": "The 8 Enterprise ROI Accelerators",
      "s12.p1_t": "Autonomy Bounds:", "s12.p1_d": "LoA 0–5 taxonomy eliminates human bottleneck while capping tool blast radius.",
      "s12.p2_t": "Domain IBAC:", "s12.p2_d": "Ontology intent grounding and single-use CapTokens neutralize Confused Deputy attacks.",
      "s12.p3_t": "Memory Hygiene:", "s12.p3_d": "3-tier storage with strict TTL prevents context bloat and token churn.",
      "s12.p4_t": "Trace Observability:", "s12.p4_d": "OTel DAG monitoring catches semantic drift and runaway execution loops early.",
      "s12.p5_t": "Runtime Steering:", "s12.p5_d": "Deterministic Pre/PostToolUse hooks correct actions without costly restarts.",
      "s12.p6_t": "ROI Benchmarks:", "s12.p6_d": "Tracking TCR, CPST, and TER continuously proves enterprise value.",
      "s12.p7_t": "Mixed-Model Routing:", "s12.p7_d": "Tiered local/open-weight delegation slashes inference bills by 75–85%.",
      "s12.p8_t": "Prompt Caching:", "s12.p8_d": "Claude 5-min TTL prompt caching secures 90% input discounts and 80% faster TTFT.",
      "s12.qa_title": "Strategic Implementation Inquiries",
      "s12.q1_t": "Cache Lifetime Maintenance:", "s12.q1_d": "How should enterprise CI/CD pipelines schedule agent bursts to maximize the 5-minute cache TTL?",
      "s12.q2_t": "Model Routing Governance:", "s12.q2_d": "What objective criteria determine when an open-weights agent task should escalate to a frontier model?",
      "s12.q3_t": "IBAC vs Fine-Grained RBAC:", "s12.q3_d": "How can teams migrate existing enterprise role policies into dynamic ontology-based CapTokens?",
      "s12.author_lead": "Instructor & Expert Advisory:",
      "s12.author_desc": "黄连金 (Ken Huang), CISSP · Adjunct Professor, University of San Francisco (USF) · Fellow & Co-Chair, CSA AI Safety Working Groups · CEO, DistributedApps.ai"
    },
    zh: {
      "brand.title": "智能体生产力与企业 ROI",
      "ui.fullscreen": "全屏演示",
      "ui.exitFull": "退出全屏",
      "ui.prev": "‹ 上一页",
      "ui.next": "下一页 ›",
      "ui.launch": "技术文档 ↗",
      "ui.repo": "GitHub 代码仓 ↗",

      "slide.1.title": "智能体 AI 生产力与企业 ROI 架构基石",
      "slide.2.title": "关于讲师：黄连金 (Ken Huang), CISSP",
      "slide.3.title": "企业级智能体 ROI 价值公式与隐性成本税",
      "slide.4.title": "支柱一：自主权分级治理与有界工具控制",
      "slide.5.title": "支柱二：领域本体与基于意图的访问控制 (IBAC)",
      "slide.6.title": "支柱三：上下文管理与分层记忆卫生",
      "slide.7.title": "支柱四：执行轨迹可观测性与推理漂移监控",
      "slide.8.title": "支柱五：主动运行时引导与确定性控制面",
      "slide.9.title": "支柱六：严谨评估体系与企业 ROI 基准测试",
      "slide.10.title": "支柱七：混合模型级联路由（本地/开源 vs 前沿模型）",
      "slide.11.title": "支柱八：Prompt 缓存命中策略与 Claude Code TTL 实战",
      "slide.12.title": "架构总结、落地蓝图与互动问答",

      // Slide 1
      "hero.eyebrow": "企业自主系统 · 边际单位经济效益",
      "hero.title": "智能体 AI 生产力与企业 ROI 架构基石",
      "hero.acronym": "<b>A</b>自主权 · <b>I</b>意图控制 · <b>M</b>记忆卫生 · <b>O</b>轨迹观测 · <b>S</b>运行时引导 · <b>E</b>效能基准 · <b>M</b>混合模型 · <b>C</b>Prompt缓存",
      "hero.sub": "通过确定性安全围栏与模型路由工程，<strong>实现业务产出最大化并削减 70–85% 单位 Token 成本</strong>。",
      "hero.by": "主讲人：<strong>黄连金 (Ken Huang), CISSP</strong><br/>旧金山大学 (USF) 客座教授 · 云安全联盟 (CSA) AI安全工作组联合主席 · DistributedApps.ai CEO",
      "hero.start": "开始演示 ➔",
      "hero.spec": "浏览规范蓝图 ↗",

      // Slide 2
      "about.kicker": "权威资质与学术基石",
      "about.title": "关于讲师：黄连金 (Ken Huang), CISSP",
      "about.h2": "关于讲师：黄连金 (Ken Huang), CISSP",
      "about.b1": "AI 著作作者与演讲嘉宾（Harness Engineering、MAESTRO、Agentic AI）",
      "about.b2": "旧金山大学 (University of San Francisco) 客座教授",
      "about.b3": "OWASP AIVSS 项目负责人",
      "about.b4": "CSA 云安全联盟两个 AI 安全工作组 Fellow 兼联合主席",
      "about.b5": "OWASP Top 10 for LLM Applications 核心成员",
      "about.b6": "AIUC-1 联盟成员 · Schmidt Sciences 基金评审委员",
      "about.b7": "EC-Council 认证讲师 —— 生成式 AI 赋能网络安全",
      "about.b8": "DistributedApps.ai 创始人兼 CEO",
      "about.pubs": "📚 AI 与网络安全专著（Packt、Springer、剑桥大学出版社、Wiley）",
      "about.amazon": "亚马逊作者主页 ➔",

      // Slide 3
      "s3.kicker": "财务真实性与单位经济学",
      "s3.h2": "企业级智能体 ROI 价值公式与隐性成本税",
      "s3.lead": "缺乏工程治理的盲目上马智能体必然导致负 ROI：无节制的 Token 消耗、灾难性误操作半径以及沉重的开发者返工负担。",
      "s3.col1_t": "原生智能体摧毁企业 ROI 的四大元凶",
      "s3.c1_1": "• 无界工具调用：死循环重试失败命令，单次任务吞噬数万 Token。",
      "s3.c1_2": "• 上下文无度膨胀：每轮全量回传代码库，注意力迅速漂移且账单暴增。",
      "s3.c1_3": "• 混淆代理攻击 (Confused Deputy)：高特权智能体遭间接注入劫持调用危险工具。",
      "s3.c1_4": "• 盲目使用前沿模型：为简单 JSON 格式化与日志清洗支付高达 $15/M 的代币费。",
      "s3.col2_t": "严谨工程化驱动的智能体 ROI 方程",
      "s3.c2_1": "• 价值速度乘数：将任务完成速度提升 3x–10x，彻底打破人工代码审查瓶颈。",
      "s3.c2_2": "• 边际成本断崖下降：通过缓存复用、多模型级联与上下文裁剪降低 70–85% 成本。",
      "s3.c2_3": "• 严格可控的爆炸半径：形式化本体意图校验与单次能力代币杜绝越权破坏。",

      // Slide 4
      "s4.kicker": "支柱一：自主权分级治理",
      "s4.h2": "自主权分级治理 (LoA) 与有界工具控制",
      "s4.lead": "实现高 ROI 的关键在于将任务复杂度与明确的自主权边界及细粒度工具白名单相匹配，既防止人工微观管理，又阻断失控越权风险。",
      "s4.box1_t": "LoA 0–5 六级自主权运行分类法",
      "s4.b1_1": "• LoA 0（只读辅助）：仅允许文档查询、代码搜索，零写特权。",
      "s4.b1_2": "• LoA 1（草稿提议）：智能体将变更写入独立补丁，必须由人工批准应用。",
      "s4.b1_3": "• LoA 2（沙箱自主）：在独立 Git Worktree 执行构建与单元测试，限额 $50。",
      "s4.b1_4": "• LoA 3（监督全自动）：多工具编排；涉及数据库写与部署需双智能体共识。",
      "s4.b1_5": "• LoA 4（有界全自主）：在严格不变量与指标监控下全自动闭环，异常自动降级。",
      "s4.box2_t": "工具范围界定对 ROI 的关键价值",
      "s4.b2_1": "• 最小特权工具集：剥离不受控的终端 Shell，100% 根绝误删与环境变量外泄。",
      "s4.b2_2": "• 速率与预算熔断：限制单位时间工具调用频次，杜绝死循环账单飙升。",
      "s4.b2_3": "• 自动降级机制：一旦遥测发现语义偏移，立即将智能体从 LoA 3 降为 LoA 1 待审。",

      // Slide 5
      "s5.kicker": "支柱二：基于意图的访问控制",
      "s5.h2": "领域本体与基于意图的访问控制 (IBAC)",
      "s5.lead": "传统基于角色的访问控制 (RBAC) 在智能体系统彻底失效。通过领域本体将模糊意图形式化，彻底瓦解混淆代理漏洞并压减影响半径。",
      "s5.col1_t": "混淆代理攻击 (Confused Deputy) 剖析",
      "s5.c1_1": "• 漏洞本质：拥有高权限角色的智能体受到恶意提示词诱导，被动调用破坏性接口。",
      "s5.c1_2": "• 破坏后果：资金转账重定向、未经授权的云资源扩容或生产数据库被毁。",
      "s5.c1_3": "• 防御原则：角色权限毫无意义，执行必须严格受限于经过验证的用户本意。",
      "s5.col2_t": "本体驱动的能力代币 (CapToken) 管道",
      "s5.c2_1": "• 领域本体语义映射：将模糊自然语言分解为概念实体、原子动作与前后置约束。",
      "s5.c2_2": "• 形式化意图树 (AST)：生成结构化执行树（动作：修复漏洞，文件：auth.py，禁外网）。",
      "s5.c2_3": "• 细粒度衰减代币：动态编译单次有效、参数精确绑定的密码学能力凭证。",

      // Slide 6
      "s6.kicker": "支柱三：上下文窗口工程",
      "s6.h2": "上下文管理与分层记忆卫生架构",
      "s6.lead": "上下文膨胀是导致 LLM 费用失控与推理能力退化的罪魁祸首。采用三层记忆模型可在维持极高任务精确度的同时削减 65% Token 消耗。",
      "s6.box1_t": "上下文膨胀的二次方成本惩罚",
      "s6.b1_1": "• 注意力稀释衰减：当上下文超过 64k Token 时，“大海捞针”检索成功率骤降。",
      "s6.b1_2": "• 累积成本滚雪球：30 轮迭代每轮发送 100k 未裁剪上下文，单个功能耗费超 300 万 Token。",
      "s6.b1_3": "• 认知脑裂死锁：记忆中的历史冲突指令诱发智能体反复重试与逻辑僵局。",
      "s6.box2_t": "三层防御型记忆分级架构",
      "s6.b2_1": "• Tier 1（临时工作记忆）：草稿本、子智能体执行区，任务结束即刻清空销毁。",
      "s6.b2_2": "• Tier 2（隔离检验缓冲）：CRDT 冲突消除引擎、密码学溯源标签与严格 TTL 寿命（报价30秒）。",
      "s6.b2_3": "• Tier 3（可信长期存储）：密码学签名的不可变事实、规范定义，严禁外部直写。",

      // Slide 7
      "s7.kicker": "支柱四：行为轨迹可观测性",
      "s7.h2": "执行轨迹可观测性与推理漂移监控",
      "s7.lead": "高效的 ROI 治理必须对智能体的内部认知轨迹了如指掌。采用 OpenTelemetry (OTel) GenAI 语义追踪，在预算耗尽前敏锐捕捉认知漂移。",
      "s7.col1_t": "OTel GenAI 语义轨迹图谱",
      "s7.c1_1": "• 逐步认知 DAG：精准记录 Thought ➔ Plan ➔ Tool ➔ Observation 的完整推理链条。",
      "s7.c1_2": "• 延迟与 Token 细粒度下钻：定位耗时工具、过大返回体及冗余中间思考步骤。",
      "s7.c1_3": "• 可审计复盘轨迹：为企业合规审计提供不可篡改的加密执行事实证据。",
      "s7.col2_t": "实时异常探测与语义漂移评分",
      "s7.c2_1": "• 语义漂移打分：实时计算当前执行计划与岗位规范 (SJD) 之间的向量余弦距离。",
      "s7.c2_2": "• 循环振荡拦截：识别重复调用失败工具超过 3 次的死循环，阻断 Token 抽水。",
      "s7.c2_3": "• 隐蔽侧移检测：拦截商业智能体尝试访问文件系统敏感路径或环境变量私钥的行为。",

      // Slide 8
      "s8.kicker": "支柱五：主动运行时控制面",
      "s8.h2": "主动运行时引导与确定性控制网关",
      "s8.lead": "被动日志无法挽回经济损失。运行时引导通过带外确定性拦截挂钩，在操作执行前校正参数、隔离至沙箱或触发紧急熔断。",
      "s8.box1_t": "确定性拦截器网关架构",
      "s8.b1_1": "• PreToolUse 拦截：在 Shell 或网络调用前，核验参数 Schema、资金限额与 CapToken。",
      "s8.b1_2": "• PostToolUse 净化：实时脱敏工具标准输出，抹除潜在的提示词注入载荷与隐私数据。",
      "s8.b1_3": "• 动态参数重写：在不中断会话的前提下，自动校正越界参数以符合安全规范。",
      "s8.box2_t": "四项确定性控制决策动作",
      "s8.b2_1": "• APPROVE（放行）：合规请求立即放行至生产环境执行。",
      "s8.b2_2": "• STEER（引导）：带外注入纠偏提示词，引导智能体自我修正而无需推倒重来。",
      "s8.b2_3": "• SANDBOX（沙箱）：将高风险修改重定向至隔离的 Git Worktree 影子运行。",
      "s8.b2_4": "• KILL（熔断）：触发自动熔断器，注销临时凭证并上报人工介入。",

      // Slide 9
      "s9.kicker": "支柱六：严谨效能评估",
      "s9.h2": "企业级效能评估体系与 ROI 基准测试",
      "s9.lead": "评估智能体生产力必须跳出玩具般的通用学术基准，聚焦量化软件工程指标：端到端完成率、单任务边际成本以及实际节省的工时。",
      "s9.col1_t": "四大核心企业级 ROI 评测指标",
      "s9.c1_1": "• 任务完成率 (TCR)：长程多步骤任务无需人工介入即可顺利交付的比例（目标：≥90%）。",
      "s9.c1_2": "• 成功交付单价 (CPST)：总模型推理与算力开销除以验证合格的交付物数量。",
      "s9.c1_3": "• Token 效能比 (TER)：达成该目标理论最少步骤与实际消耗步骤之比，揭示冗余开销。",
      "s9.c1_4": "• 人工精力节省度 (HER)：高级工程师净节约时间扣除提示词审查与监督精力后的净收益。",
      "s9.col2_t": "持续反回归防御测试管道",
      "s9.c2_1": "• 合成红蓝对抗：持续运行 500+ 项对抗性提示注入与工具破坏测试集。",
      "s9.c2_2": "• 不变量合规率 (SICR)：资金策略、安全红线实行 100% 绝对合规，零违规容忍。",
      "s9.c2_3": "• 实时遥测大盘：展示每项任务的 Token 投产比、模型延迟与开发者满意度指标。",

      // Slide 10
      "s10.kicker": "支柱七：混合模型级联路由",
      "s10.h2": "混合模型级联路由（本地 / 开源 vs 前沿模型）",
      "s10.lead": "凡事皆向前沿模型发请求是破坏智能体经济性的头号杀手。建立三层混合路由架构，可斩断 75–85% 的推理开销。",
      "s10.box1_t": "三层模型专业化分工体系",
      "s10.b1_1": "• Tier 1 本地轻量端侧（Qwen 2.5 7B, Llama 3.2 运行于 Ollama/vLLM）：负责正则、JSON 格式化、代码 Lint（$0 边际成本）。",
      "s10.b1_2": "• Tier 2 托管开源主力（DeepSeek-V3, Llama 3.3 70B, Qwen Coder）：负责代码草稿、单测编写、文档注释（$0.25–$1.00/M）。",
      "s10.b1_3": "• Tier 3 前沿推理大脑（Claude 3.7 Sonnet, GPT-4.5）：专注于顶层系统架构拆解、疑难Bug排查与安全把关（$3–$15/M）。",
      "s10.box2_t": "级联调度经济学效益",
      "s10.b2_1": "• 复杂度分类器：轻量规则路由器将 65% 的简单子任务分流至本地与开源模型。",
      "s10.b2_2": "• 输出前置浓缩：小模型对冗长的工具返回进行摘要提炼后再交给前沿模型处理。",
      "s10.b2_3": "• 失败自适应升级：当开源模型测试未通过时，任务自动升级由 Claude 3.7 接管。",

      // Slide 11
      "s11.kicker": "支柱八：Prompt 缓存深度优化",
      "s11.h2": "Prompt 缓存命中策略与 Claude Code Cache TTL 实战",
      "s11.lead": "Prompt 缓存技术提供高达 90% 的输入 Token 费用减免并降低 80% 延迟。掌握断点布局与 5 分钟滑动 TTL 机制是打赢 ROI 攻坚战的底牌。",
      "s11.col1_t": "Claude API 提示词缓存底层机理",
      "s11.c1_1": "• 90% 费用断崖优惠：命中缓存的前缀 Token 仅按基准价 10% 计费，极大降低高频迭代成本。",
      "s11.c1_2": "• 亚秒级极速响应：复用已解析的注意力 Key-Value 状态，首字生成延迟 (TTFT) 骤降 80%。",
      "s11.c1_3": "• 精准缓存断点：在静态 System Prompt 和 MCP 工具描述尾部配置 cache_control 标记。",
      "s11.col2_t": "Claude Code 5 分钟缓存 TTL 策略",
      "s11.c2_1": "• 滑动窗口延续：每次会话交互自动重置 5 分钟生命周期，确保多轮编程会话长久高命中。",
      "s11.c2_2": "• 提示词排布黄金法则：静态系统规范 ➔ MCP 工具集 ➔ 项目全局架构 ➔ 动态会话补丁。",
      "s11.c2_3": "• 防失效围栏：将不可变上下文锚定在最前，避免任何动态字符插入前缀引发全量失效。",

      // Slide 12
      "s12.kicker": "执行总结与行动纲领",
      "s12.h2": "架构总结、落地蓝图与互动问答",
      "s12.lead": "实现 10x 生产力提升与健康的单位经济效益，需要将有界自主、意图访问控制、记忆卫生、混合模型与提示词缓存铸入严密的工程缰绳之中。",
      "s12.takeaways_title": "驱动高 ROI 的八大核心引擎",
      "s12.p1_t": "自主权边界：", "s12.p1_d": "LoA 0–5 分级消除人工审批瓶颈，同时严格限制工具破坏半径。",
      "s12.p2_t": "领域 IBAC：", "s12.p2_d": "本体意图锚定与单次 CapToken 凭据，从根源粉碎混淆代理利用。",
      "s12.p3_t": "记忆卫生：", "s12.p3_d": "三层记忆架构结合严格 TTL 过期，彻底终结上下文膨胀与代币浪费。",
      "s12.p4_t": "轨迹可观测：", "s12.p4_d": "OTel DAG 端到端监控，毫秒级发现语义偏航与失控死循环。",
      "s12.p5_t": "运行时控制：", "s12.p5_d": "确定性 Pre/Post 钩子动态纠偏，避免昂贵的推倒重来成本。",
      "s12.p6_t": "ROI 基准：", "s12.p6_d": "持续追踪 TCR、CPST 和 TER 指标，让生产力提升真正见诸财务报表。",
      "s12.p7_t": "混合模型分流：", "s12.p7_d": "端侧/开源承担基础任务，前沿大模型主攻关键推理，省费 75–85%。",
      "s12.p8_t": "Prompt 缓存：", "s12.p8_d": "善用 Claude 5 分钟滑动 TTL，常态化享受 90% 输入折扣与亚秒延迟。",
      "s12.qa_title": "企业落地核心研讨题目",
      "s12.q1_t": "缓存生命周期保鲜：", "s12.q1_d": "企业 CI/CD 智能体流水线如何编排调用节奏以最大化 5 分钟缓存命中？",
      "s12.q2_t": "开源到前沿升级线：", "s12.q2_d": "如何设定客观的 AST/单测失败门槛，触发开源任务无缝升级至 Claude 3.7？",
      "s12.q3_t": "RBAC 向 IBAC 迁移：", "s12.q3_d": "企业如何将现有的静态 IAM 角色策略平滑映射为动态本体驱动的 CapTokens？",
      "s12.author_lead": "专家联络与深入合作：",
      "s12.author_desc": "黄连金 (Ken Huang), CISSP · 旧金山大学 (USF) 客座教授 · CSA AI 安全工作组 Fellow 兼联合主席 · DistributedApps.ai CEO"
    }
  };

  let currentLang = "en";

  function setLang(lang) {
    if (!DICT[lang]) return;
    currentLang = lang;
    document.documentElement.lang = (lang === "zh" ? "zh-CN" : "en");
    document.body.classList.toggle("is-zh", lang === "zh");

    // Update buttons
    document.querySelectorAll(".lang__btn").forEach(btn => {
      btn.classList.toggle("is-on", btn.dataset.lang === lang);
    });

    // Update data-i18n text
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (DICT[lang][key]) {
        el.textContent = DICT[lang][key];
      }
    });

    // Update data-i18n-html
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18n;
      if (DICT[lang][key]) {
        el.innerHTML = DICT[lang][key];
      }
    });

    // Dispatch event
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

    // Check URL or preference
    const params = new URLSearchParams(window.location.search);
    const qLang = params.get("lang");
    if (qLang && DICT[qLang]) {
      setLang(qLang);
    } else {
      setLang("en");
    }
  });
})();
