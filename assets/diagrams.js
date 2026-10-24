/* ============================================================
   Agentic AI Productivity & Enterprise ROI Framework — Diagrams
   Rough.js hand-drawn style with solid cards, crisp typography,
   zero text clipping, and bilingual EN/ZH support.
   ============================================================ */
(function () {
  const COL = {
    ink: "#141413",
    slate: "#4a4940",
    blue: "#0284c7",
    teal: "#0d9488",
    green: "#16a34a",
    yellow: "#d97706",
    orange: "#ea580c",
    red: "#dc2626",
    purple: "#7c3aed",
    grape: "#9333ea",
    paper: "#fdfcf9",
    cardBg: "#ffffff"
  };

  function hex(color, alpha) {
    if (color.startsWith("#") && color.length === 7) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return color;
  }

  function isZh() {
    return !!(window.AGENT_SEC_I18N && window.AGENT_SEC_I18N.isZh());
  }

  const NS = "http://www.w3.org/2000/svg";
  const TEXT_SCALE = 1.5;

  function scene(host, w, h) {
    host.innerHTML = "";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.maxWidth = `${w}px`;
    svg.style.display = "block";
    svg.style.margin = "0 auto";
    host.appendChild(svg);
    const rc = rough.svg(svg);
    return { svg, rc, w, h };
  }

  function addNode(s, n) {
    s.svg.appendChild(n);
  }

  function rect(s, x, y, w, h, opts = {}) {
    const o = Object.assign({ roughness: 0.6, stroke: COL.ink, strokeWidth: 1.5 }, opts);
    const n = s.rc.rectangle(x, y, w, h, o);
    addNode(s, n);
    return n;
  }

  function chip(s, x, y, w, h, text, color, opts = {}) {
    const fillStyle = opts.fillStyle || "solid";
    const fill = opts.fill || "#ffffff";
    const strokeW = opts.strokeWidth || 1.8;
    rect(s, x, y, w, h, { fill, fillStyle, stroke: color, strokeWidth: strokeW });
    if (text) {
      txt(s, x + w / 2, y + h / 2, text, {
        anchor: "middle",
        weight: opts.weight || 700,
        size: opts.size || 12,
        col: color
      });
    }
  }

  function arrow(s, x1, y1, x2, y2, opts = {}) {
    const o = Object.assign({ stroke: COL.ink, strokeWidth: 1.8, roughness: 0.5 }, opts);
    addNode(s, s.rc.line(x1, y1, x2, y2, o));
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headLen = opts.headLen || 9;
    const p1x = x2 - headLen * Math.cos(angle - Math.PI / 6);
    const p1y = y2 - headLen * Math.sin(angle - Math.PI / 6);
    const p2x = x2 - headLen * Math.cos(angle + Math.PI / 6);
    const p2y = y2 - headLen * Math.sin(angle + Math.PI / 6);
    const headPath = `M ${p1x} ${p1y} L ${x2} ${y2} L ${p2x} ${p2y}`;
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", headPath);
    p.setAttribute("stroke", o.stroke);
    p.setAttribute("stroke-width", o.strokeWidth);
    p.setAttribute("fill", "none");
    addNode(s, p);
  }

  function txt(s, x, y, str, opts = {}) {
    const t = document.createElementNS(NS, "text");
    t.setAttribute("x", x);
    t.setAttribute("y", y);
    t.setAttribute("fill", opts.col || COL.ink);
    t.setAttribute("font-family", opts.family || "'Inter', system-ui, -apple-system, sans-serif");
    const fs = (opts.size || 12) * TEXT_SCALE;
    t.setAttribute("font-size", fs);
    t.setAttribute("font-weight", opts.weight || 500);
    if (opts.anchor) t.setAttribute("text-anchor", opts.anchor);

    const lines = String(str).split("\n");
    if (lines.length === 1) {
      t.textContent = str;
      if (opts.anchor === "middle") {
        t.setAttribute("dominant-baseline", "central");
      }
    } else {
      const lineH = fs * 1.3;
      const startY = y - ((lines.length - 1) * lineH) / 2;
      lines.forEach((lineStr, lIdx) => {
        const span = document.createElementNS(NS, "tspan");
        span.setAttribute("x", x);
        span.setAttribute("y", startY + lIdx * lineH);
        span.setAttribute("dominant-baseline", "central");
        span.textContent = lineStr;
        t.appendChild(span);
      });
    }

    addNode(s, t);
    return t;
  }

  // -------------------------------------------------------------
  // Agenda: Three Parts
  // -------------------------------------------------------------
  function drawAgendaThreeParts(host) {
    const s = scene(host, 960, 440);
    const zh = isZh();
    const parts = [
      { t: zh ? "Part 1\n业务价值" : "Part 1\nValue", d: zh ? "四类投资桶" : "4 IT buckets", c: COL.blue },
      { t: zh ? "Part 2\n风险管理" : "Part 2\nRisk", d: zh ? "NIST RMF 映射" : "NIST RMF", c: COL.orange },
      { t: zh ? "Part 3\n七项控制" : "Part 3\nControls", d: zh ? "战术控制" : "7 tactical", c: COL.green }
    ];
    const cardW = 280;
    const gap = 36;
    const startX = 24;
    parts.forEach((p, i) => {
      const x = startX + i * (cardW + gap);
      rect(s, x, 24, cardW, 392, { fill: "#ffffff", fillStyle: "solid", stroke: p.c, strokeWidth: 2.4 });
      txt(s, x + cardW / 2, 120, p.t, { anchor: "middle", weight: 800, col: p.c, size: 15 });
      txt(s, x + cardW / 2, 230, p.d, { anchor: "middle", weight: 600, col: COL.ink, size: 13 });
      txt(s, x + cardW / 2, 350, zh ? `第 ${i + 1} 步` : `Step ${i + 1}`, { anchor: "middle", weight: 700, col: p.c, size: 13 });
      if (i < 2) {
        const ax = x + cardW + 6;
        arrow(s, ax, 220, ax + gap - 14, 220, { stroke: COL.ink, strokeWidth: 2.2 });
      }
    });
  }

  // -------------------------------------------------------------
  // Part 1: Four IT System Buckets
  // -------------------------------------------------------------
  function drawFourBuckets(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();
    const buckets = [
      { n: "1", t: zh ? "无需智能体" : "Leave alone", d: zh ? "运行良好" : "Works fine", c: COL.slate },
      { n: "2", t: zh ? "叠加智能体" : "Leverage", d: zh ? "价值+生产力" : "Value + productivity", c: COL.blue },
      { n: "3", t: zh ? "重塑平台" : "Re-platform", d: zh ? "遗留阻塞 ROI" : "Legacy blocks ROI", c: COL.orange },
      { n: "4", t: zh ? "原生新建" : "Agent-native", d: zh ? "绿地新建" : "Greenfield native", c: COL.green }
    ];
    buckets.forEach((b, i) => {
      const y = 18 + i * 84;
      rect(s, 20, y, 620, 74, { fill: "#ffffff", fillStyle: "solid", stroke: b.c, strokeWidth: 2 });
      chip(s, 35, y + 14, 52, 46, b.n, b.c, { size: 16, weight: 800, fill: "#ffffff" });
      txt(s, 110, y + 30, b.t, { weight: 800, col: b.c, size: 14 });
      txt(s, 110, y + 54, b.d, { weight: 500, col: COL.ink, size: 12 });
    });
  }

  // -------------------------------------------------------------
  // Part 2: NIST AI RMF ← CSA / AIVSS mapping
  // -------------------------------------------------------------
  function drawRiskRmfMapping(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();
    const rows = [
      {
        fn: "Govern",
        art: zh ? "CSA AI 组织责任白皮书" : "CSA AI Org. Responsibility Papers",
        c: COL.blue
      },
      {
        fn: "Map",
        art: zh ? "MAESTRO" : "MAESTRO",
        c: COL.grape
      },
      {
        fn: "Measure",
        art: zh ? "AIVSS" : "AIVSS",
        c: COL.orange
      },
      {
        fn: "Manage",
        art: zh ? "CSA AICM + 红队指南" : "CSA AICM + Red Teaming Guide",
        c: COL.green
      }
    ];
    txt(s, 330, 28, zh ? "NIST AI RMF ← CSA / AIVSS" : "NIST AI RMF ← CSA / AIVSS", {
      anchor: "middle", weight: 800, col: COL.ink, size: 13
    });
    rows.forEach((r, i) => {
      const y = 48 + i * 76;
      chip(s, 20, y, 150, 60, r.fn, r.c, { size: 14, weight: 800, fill: "#ffffff" });
      arrow(s, 180, y + 30, 230, y + 30, { stroke: COL.ink, strokeWidth: 2 });
      chip(s, 240, y, 400, 60, r.art, r.c, { size: 12, weight: 700, fill: "#ffffff" });
    });
  }

  // -------------------------------------------------------------
  // Part 3 intro: Seven controls
  // -------------------------------------------------------------
  function drawSevenControls(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();
    const ctrls = zh
      ? ["1 自主边界", "2 意图 IBAC", "3 记忆卫生", "4 轨迹观测", "5 运行引导", "6 ROI 评估", "7 模型经济"]
      : ["1 Autonomy", "2 IBAC", "3 Memory", "4 Observe", "5 Steer", "6 Evaluate", "7 Model Econ"];
    const colors = [COL.blue, COL.grape, COL.teal, COL.orange, COL.green, COL.yellow, COL.purple];
    ctrls.forEach((lab, i) => {
      const col = i < 4 ? 0 : 1;
      const row = i < 4 ? i : i - 4;
      const x = 30 + col * 310;
      const y = 30 + row * 80;
      chip(s, x, y, 290, 60, lab, colors[i], { size: 14, fill: "#ffffff", weight: 700 });
    });
  }

  // -------------------------------------------------------------
  // Slide 4 Diagram: Pillar 1: Levels of Autonomy & Tool Governance
  // -------------------------------------------------------------
  function drawAutonomyGovernance(host) {
    const s = scene(host, 960, 460);
    const zh = isZh();

    // Left Column: LoA spectrum
    rect(s, 16, 14, 400, 432, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 2.2 });
    txt(s, 216, 46, zh ? "自主权等级 (LoA)" : "Levels of Autonomy", { anchor: "middle", weight: 800, col: COL.blue, size: 13 });

    const tiers = [
      { l: zh ? "LoA 0: 只读" : "LoA 0: Read-Only", c: COL.slate },
      { l: zh ? "LoA 1: 草稿" : "LoA 1: Draft + Human", c: COL.blue },
      { l: zh ? "LoA 2: 沙箱 $50" : "LoA 2: Sandbox $50", c: COL.teal },
      { l: zh ? "LoA 3: 监督全自动" : "LoA 3: Supervised", c: COL.yellow },
      { l: zh ? "LoA 4: 有界全自主" : "LoA 4: Bounded Auto", c: COL.green }
    ];

    tiers.forEach((t, i) => {
      chip(s, 36, 70 + i * 62, 360, 52, t.l, t.c, { size: 12, fill: "#ffffff", weight: 700 });
    });
    txt(s, 216, 420, zh ? "按级限制工具" : "Tool allowlists per tier", { anchor: "middle", size: 11, col: COL.slate, weight: 600 });

    arrow(s, 428, 230, 478, 230, { stroke: COL.ink, strokeWidth: 2.4 });

    // Right Column: Gateways
    rect(s, 490, 14, 454, 432, { fill: "#ffffff", fillStyle: "solid", stroke: COL.orange, strokeWidth: 2.2 });
    txt(s, 717, 46, zh ? "门限与降级网关" : "Threshold Gateways", { anchor: "middle", weight: 800, col: COL.orange, size: 13 });

    const gates = [
      { l: zh ? "1. 工具风险分级" : "1. Tool risk tiering", c: COL.teal },
      { l: zh ? "2. 花费/速率上限" : "2. Spend & rate caps", c: COL.blue },
      { l: zh ? "3. 漂移自动降级" : "3. Auto LoA step-down", c: COL.yellow },
      { l: zh ? "4. 硬熔断器" : "4. Circuit breaker", c: COL.red }
    ];
    gates.forEach((g, i) => {
      chip(s, 512, 76 + i * 72, 410, 58, g.l, g.c, { size: 12, fill: "#ffffff", weight: 700 });
    });
    txt(s, 717, 420, zh ? "✓ 控成本 · 控爆炸半径" : "✓ Cap cost · Cap blast radius", { anchor: "middle", size: 11, col: COL.green, weight: 700 });
  }

  // -------------------------------------------------------------
  // Slide 5 Diagram: Pillar 2: Domain Ontology & IBAC
  // -------------------------------------------------------------
  function drawIBACArchitecture(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // Natural Language Input (Wider box, no text cut)
    chip(s, 15, 35, 195, 75, zh ? "模糊自然语言输入\n(\"清理旧缓存并重构权限\")" : "Fuzzy User Prompt\n(\"Prune caches & fix auth\")", COL.red, { size: 12, fill: "#ffffff" });

    arrow(s, 215, 72, 240, 72, { stroke: COL.ink, strokeWidth: 2 });

    // Formal Domain Ontology Engine
    rect(s, 240, 20, 220, 315, { fill: "#ffffff", fillStyle: "solid", stroke: COL.grape, strokeWidth: 2 });
    txt(s, 350, 45, zh ? "领域本体语义图谱引擎" : "Domain Ontology Engine", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });

    chip(s, 252, 65, 196, 36, zh ? "概念实体 (Entity / Scope)" : "Entities (File / Scope)", COL.grape, { size: 11.5, fill: "#ffffff" });
    chip(s, 252, 108, 196, 36, zh ? "原子动作 (Action Primitives)" : "Action Primitives (Patch)", COL.blue, { size: 11.5, fill: "#ffffff" });
    chip(s, 252, 151, 196, 36, zh ? "前后置不变量约束 (Invariants)" : "Invariants (No Network)", COL.orange, { size: 11.5, fill: "#ffffff" });
    chip(s, 252, 194, 196, 36, zh ? "状态迁移状态机 (State Graph)" : "State Machine Graph", COL.teal, { size: 11.5, fill: "#ffffff" });
    chip(s, 252, 237, 196, 42, zh ? "消歧与注入清洗\n(Injection Filter)" : "Disambiguation &\nSanitizer", COL.green, { size: 11.5, fill: "#ffffff" });
    txt(s, 350, 315, zh ? "终结混淆代理漏洞" : "Zero Confused Deputy", { anchor: "middle", size: 11.5, col: COL.grape, weight: 700 });

    arrow(s, 465, 72, 490, 72, { stroke: COL.green, strokeWidth: 2 });

    // Formal Intent AST & CapToken
    rect(s, 490, 20, 155, 315, { fill: "#ffffff", fillStyle: "solid", stroke: COL.teal, strokeWidth: 2 });
    txt(s, 567, 45, zh ? "细粒度能力凭据" : "Dynamic CapToken", { anchor: "middle", weight: 700, col: COL.teal, size: 12.5 });
    txt(s, 502, 75, "Action: Patch", { size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 502, 102, "Target: auth.py", { size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 502, 129, "NetAccess: None", { size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 502, 156, "TTL: 120s", { size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 502, 183, "Uses: 1 (Burn)", { size: 11.5, weight: 600, family: "'JetBrains Mono'" });
    txt(s, 502, 210, "Hash: 0x9a8f...", { size: 11.5, weight: 500, family: "'JetBrains Mono'" });

    txt(s, 502, 250, zh ? "✓ 单次使用即销毁" : "✓ Single-use only", { size: 11, col: COL.green, weight: 700 });
    txt(s, 502, 275, zh ? "✓ 零隐式环境特权" : "✓ No ambient auth", { size: 11, col: COL.green, weight: 700 });
    txt(s, 502, 300, zh ? "✓ 最小化爆炸半径" : "✓ Min blast radius", { size: 11, col: COL.green, weight: 700 });
  }

  // -------------------------------------------------------------
  // Slide 6 Diagram: Pillar 3: Context Hygiene & 3-Tier Memory
  // -------------------------------------------------------------
  function drawContextMemoryHygiene(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // Ingestion (Left Box)
    chip(s, 15, 35, 185, 70, zh ? "外部不可信信息输入\n(网页 / API / 日志)" : "Untrusted Inputs\n(Web / API / Logs)", COL.slate, { size: 12, fill: "#ffffff" });

    arrow(s, 200, 70, 225, 70, { stroke: COL.ink, strokeWidth: 2 });

    // Tier 1: Ephemeral Turn Memory
    chip(s, 225, 35, 195, 70, zh ? "Tier 1: 临时工作记忆\n(草稿本 / 任务完即销毁)" : "Tier 1: Ephemeral Memory\n(Zeroized on task end)", COL.blue, { size: 12, fill: "#ffffff" });

    arrow(s, 322, 105, 322, 130, { stroke: COL.ink, strokeWidth: 2 });

    // Tier 2: Quarantined Buffer
    rect(s, 215, 130, 215, 95, { fill: "#ffffff", fillStyle: "solid", stroke: COL.orange, strokeWidth: 2 });
    txt(s, 322, 152, zh ? "Tier 2: 隔离检验缓冲区" : "Tier 2: Quarantined Buffer", { anchor: "middle", weight: 700, col: COL.orange, size: 12.5 });
    txt(s, 322, 178, zh ? "• 密码学溯源核验 (Provenance)" : "• Provenance Signature Check", { anchor: "middle", size: 11.5, weight: 600 });
    txt(s, 322, 202, zh ? "• 冲突消除与 TTL (CRDTs)" : "• Conflict Reconciliation / TTL", { anchor: "middle", size: 11.5, weight: 600 });

    arrow(s, 322, 225, 322, 250, { stroke: COL.green, strokeWidth: 2 });

    // Tier 3: Verified Long-Term Storage
    chip(s, 225, 250, 195, 70, zh ? "Tier 3: 已验证可信长期存储\n(只追加 / 签名不可变)" : "Tier 3: Verified Long-Term\n(Immutable / Signed)", COL.green, { size: 12, fill: "#ffffff" });

    // Hygiene Rules sidebar (Right Card)
    rect(s, 440, 20, 205, 315, { fill: "#ffffff", fillStyle: "solid", stroke: COL.teal, strokeWidth: 2 });
    txt(s, 542, 45, zh ? "记忆卫生防护法则" : "Memory Invariants", { anchor: "middle", weight: 700, col: COL.teal, size: 13 });

    txt(s, 452, 75, zh ? "1. 密码学来源标签" : "1. Cryptographic Tags", { size: 12, weight: 700, col: COL.teal });
    txt(s, 452, 95, zh ? "签名者、时间戳与哈希" : "Author, timestamp, hash", { size: 11, col: COL.ink });

    txt(s, 452, 125, zh ? "2. 严格 TTL 动态过期" : "2. Strict TTL Expiry", { size: 12, weight: 700, col: COL.teal });
    txt(s, 452, 145, zh ? "报价 30 秒，凭证 15 分钟" : "Quotes 30s, tokens 15m", { size: 11, col: COL.ink });

    txt(s, 452, 175, zh ? "3. 确定性冲突仲裁" : "3. Deterministic Arb", { size: 12, weight: 700, col: COL.teal });
    txt(s, 452, 195, zh ? "领域本体优先序判别真伪" : "Ontological precedence", { size: 11, col: COL.ink });

    txt(s, 452, 225, zh ? "4. 零外部直写长期库" : "4. Zero Direct Writes", { size: 12, weight: 700, col: COL.red });
    txt(s, 452, 245, zh ? "不可信数据绝不进入长期库" : "No untrusted persistence", { size: 11, col: COL.red });

    txt(s, 452, 280, zh ? "🚀 节省 65% Token 消耗" : "🚀 65% Token Reductions", { size: 12, weight: 700, col: COL.green });
    txt(s, 452, 302, zh ? "✓ 杜绝上下文注意力稀释" : "✓ Eliminates attention drift", { size: 11, col: COL.blue, weight: 600 });
  }

  // -------------------------------------------------------------
  // Slide 7 Diagram: Pillar 4: Trajectory Observability & Drift
  // -------------------------------------------------------------
  function drawObservabilityTrace(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // Top: Step nodes in OTel DAG
    const nodes = [
      { x: 20, y: 35, l: "Thought 1\n(Goal)" },
      { x: 145, y: 35, l: "Plan Step\n(Spec)" },
      { x: 270, y: 35, l: "Tool Call\n(git_diff)" },
      { x: 395, y: 35, l: "Observe\n(Pass)" },
      { x: 520, y: 35, l: "Tool Call\n(test_run)" },
      { x: 520, y: 135, l: "Reflect\n(Coverage)" },
      { x: 395, y: 135, l: "Verify Invariant\n(No Leak)" },
      { x: 270, y: 135, l: "Commit\n(Verified)" }
    ];

    nodes.forEach(n => {
      chip(s, n.x, n.y, 115, 46, n.l, COL.blue, { size: 11 });
    });

    arrow(s, 135, 58, 145, 58, { stroke: COL.ink });
    arrow(s, 260, 58, 270, 58, { stroke: COL.ink });
    arrow(s, 385, 58, 395, 58, { stroke: COL.ink });
    arrow(s, 510, 58, 520, 58, { stroke: COL.ink });
    arrow(s, 577, 81, 577, 135, { stroke: COL.ink });
    arrow(s, 520, 158, 510, 158, { stroke: COL.ink });
    arrow(s, 395, 158, 385, 158, { stroke: COL.green });

    // Anomaly Engine Overlay Card (Bottom Solid Card)
    rect(s, 20, 215, 615, 120, { fill: "#ffffff", fillStyle: "solid", stroke: COL.orange, strokeWidth: 2 });
    txt(s, 327, 238, zh ? "OpenTelemetry GenAI 执行轨迹与异常探测引擎" : "OpenTelemetry GenAI Trajectory & Anomaly Engine", {
      anchor: "middle", weight: 700, col: COL.orange, size: 13
    });
    txt(s, 35, 266, zh ? "• 语义漂移打分：实时计算当前执行计划与岗位规范 (SJD) 之间的向量余弦距离" : "• Semantic Drift Scoring: Measures cosine distance between active plan and SJD", { size: 11.5 });
    txt(s, 35, 288, zh ? "• 循环振荡拦截：识别重复调用失败工具超过 3 次的死循环，阻断 Token 抽水" : "• Loop Interception: Flags >3 repeated tool failures, preventing token exhaustion", { size: 11.5 });
    txt(s, 35, 310, zh ? "• 隐蔽侧移检测：阻止智能体尝试访问未授权文件系统、环境变量私钥" : "• Lateral Movement Detection: Halts unauthorized file/key/env access attempts", { size: 11.5 });
  }

  // -------------------------------------------------------------
  // Slide 8 Diagram: Pillar 5: Active Runtime Steering
  // -------------------------------------------------------------
  function drawRuntimeSteering(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // 1. Left Card: Agent Reasoning Core
    rect(s, 15, 20, 185, 315, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 2 });
    txt(s, 107, 45, zh ? "🧠 智能体推理核心" : "🧠 Agent Reasoning Core", { anchor: "middle", weight: 700, col: COL.blue, size: 12.5 });

    chip(s, 25, 65, 165, 32, "Thought: Patch Auth", COL.blue, { size: 11, fill: "#ffffff" });
    chip(s, 25, 103, 165, 32, "Intent: Fix Bug #104", COL.blue, { size: 11, fill: "#ffffff" });
    chip(s, 25, 141, 165, 32, "Tool: exec_shell()", COL.grape, { size: 11, fill: "#ffffff" });
    chip(s, 25, 179, 165, 32, "Args: {cmd: rm -rf}", COL.teal, { size: 11, fill: "#ffffff" });

    chip(s, 25, 222, 165, 48, zh ? "⚠️ 待放行动作请求\n(Zero Ambient Auth)" : "⚠️ Action Request\n(Pending Gateway Check)", COL.orange, { size: 11, fill: "#ffffff" });
    txt(s, 107, 305, zh ? "零环境执行特权" : "Zero Ambient Privilege", { anchor: "middle", size: 11, col: COL.slate, weight: 600 });

    // Arrow to Gateway
    arrow(s, 200, 177, 225, 177, { stroke: COL.ink, strokeWidth: 2 });

    // 2. Center Card: Deterministic Control Gateway
    rect(s, 225, 20, 240, 315, { fill: "#ffffff", fillStyle: "solid", stroke: COL.red, strokeWidth: 2.2 });
    txt(s, 345, 45, zh ? "🛡️ 确定性运行时控制网关" : "🛡️ Deterministic Control Plane", { anchor: "middle", weight: 700, col: COL.red, size: 12.5 });

    chip(s, 235, 65, 220, 40, zh ? "1. PreToolUse 拦截核验\n(Schema / 限额 / SJD 意图)" : "1. PreToolUse Interceptor\n(Schema / Invariants / SJD)", COL.red, { size: 11.5, fill: "#ffffff" });
    chip(s, 235, 112, 220, 38, zh ? "2. 动态策略与风控仲裁\n(Policy Arbiter)" : "2. Dynamic Policy Arbiter\n(Dual-Agent / Escalation)", COL.orange, { size: 11.5, fill: "#ffffff" });
    chip(s, 235, 156, 220, 40, zh ? "3. PostToolUse 脱敏净化\n(抹除注入 / 隐藏凭据)" : "3. PostToolUse Sanitizer\n(Strip Injection Payloads)", COL.teal, { size: 11.5, fill: "#ffffff" });

    // Sub-box inside Gateway: Decision Primitives
    rect(s, 235, 204, 220, 120, { fill: "#f8fafc", fillStyle: "solid", stroke: COL.ink, strokeWidth: 1.2 });
    txt(s, 345, 222, zh ? "网关四项确定性裁决动作" : "4 Deterministic Decision Actions", { anchor: "middle", size: 11.5, weight: 700, col: COL.ink });
    txt(s, 245, 244, zh ? "• APPROVE: 放行合规请求" : "• APPROVE: Allow valid call", { size: 11, col: COL.green, weight: 700 });
    txt(s, 245, 266, zh ? "• STEER: 重写参数/注入提示" : "• STEER: Mutate / Re-prompt", { size: 11, col: COL.blue, weight: 700 });
    txt(s, 245, 288, zh ? "• SANDBOX: 重定向至沙箱" : "• SANDBOX: Divert to testbed", { size: 11, col: COL.teal, weight: 700 });
    txt(s, 245, 310, zh ? "• KILL: 吊销凭据硬熔断" : "• KILL: Circuit break & freeze", { size: 11, col: COL.red, weight: 700 });

    // 3 Arrows to Target Outcomes
    arrow(s, 465, 85, 495, 85, { stroke: COL.green, strokeWidth: 2 });
    arrow(s, 465, 175, 495, 175, { stroke: COL.teal, strokeWidth: 2 });
    arrow(s, 465, 265, 495, 265, { stroke: COL.red, strokeWidth: 2 });

    // 3. Right Column: 3 Target Outcome Cards
    chip(s, 495, 55, 155, 62, zh ? "✓ 真实生产环境\n(代码库 / 云API)" : "✓ Production Rails\n(Repo / Cloud API)", COL.green, { size: 11.5, fill: "#ffffff" });
    chip(s, 495, 145, 155, 62, zh ? "⚡ 隔离沙箱工作区\n(Worktree 影子试运行)" : "⚡ Sandbox Worktree\n(Isolated Shadow Run)", COL.teal, { size: 11.5, fill: "#ffffff" });
    chip(s, 495, 235, 155, 62, zh ? "🛑 硬熔断与冻结\n(吊销密钥 & 终止会话)" : "🛑 Hard Kill Switch\n(Revoke Token & Freeze)", COL.red, { size: 11.5, fill: "#ffffff" });
  }

  // -------------------------------------------------------------
  // Slide 9 Diagram: Pillar 6: Rigorous Evaluation & Benchmarking
  // -------------------------------------------------------------
  function drawBenchmarkMatrix(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // 4 Benchmark Metrics Quadrants
    chip(s, 20, 25, 295, 140, "", COL.blue);
    txt(s, 167, 52, zh ? "任务完成率 (TCR)" : "Task Completion Rate (TCR)", { anchor: "middle", weight: 700, col: COL.blue, size: 13 });
    txt(s, 35, 80, zh ? "• 端到端长程复杂工程任务解决比例" : "• % of complex multi-turn goals met", { size: 11.5 });
    txt(s, 35, 102, zh ? "• 跨工具编排与自动化修复成功率" : "• Cross-tool resilient problem solving", { size: 11.5 });
    txt(s, 35, 126, zh ? "• 企业级合格基线：≥ 90.0%" : "• Production Target: ≥ 90.0%", { size: 11.5, col: COL.blue, weight: 700 });

    chip(s, 345, 25, 295, 140, "", COL.red);
    txt(s, 492, 52, zh ? "成功交付单价 (CPST)" : "Cost Per Success Task (CPST)", { anchor: "middle", weight: 700, col: COL.red, size: 13 });
    txt(s, 360, 80, zh ? "• 总算力及模型费用 / 验收交付物数" : "• Total compute spend / verified tasks", { size: 11.5 });
    txt(s, 360, 102, zh ? "• 杜绝无效重试循环造成的成本失控" : "• Measures real economic unit cost", { size: 11.5 });
    txt(s, 360, 126, zh ? "• 目标：对比人工成本降至 1/10" : "• Target: <10% of human equivalent", { size: 11.5, col: COL.red, weight: 700 });

    chip(s, 20, 185, 295, 140, "", COL.green);
    txt(s, 167, 212, zh ? "Token 效能比 (TER)" : "Token Efficiency Ratio (TER)", { anchor: "middle", weight: 700, col: COL.green, size: 13 });
    txt(s, 35, 240, zh ? "• 理论最少步骤 / 实际消耗步骤" : "• Optimal steps vs actual steps taken", { size: 11.5 });
    txt(s, 35, 262, zh ? "• 上下文动态裁剪与提示词优化" : "• Pruned schemas eliminate bloat", { size: 11.5 });
    txt(s, 35, 286, zh ? "• 杜绝冗余推理，节省 70% 消耗" : "• Eliminates bloat, saves up to 70%", { size: 11.5, col: COL.green, weight: 700 });

    chip(s, 345, 185, 295, 140, "", COL.grape);
    txt(s, 492, 212, zh ? "人工精力节省度 (HER)" : "Human Effort Reduction (HER)", { anchor: "middle", weight: 700, col: COL.grape, size: 13 });
    txt(s, 360, 240, zh ? "• 高级工程师净节约时间 / 总工时" : "• Net senior dev hours reclaimed", { size: 11.5 });
    txt(s, 360, 262, zh ? "• 扣除监督看护与提示词审查精力" : "• Net of prompt review & supervision", { size: 11.5 });
    txt(s, 360, 286, zh ? "• 规模化落地达标线：≥ 80.0%" : "• Production Target: ≥ 80.0%", { size: 11.5, col: COL.grape, weight: 700 });
  }

  // -------------------------------------------------------------
  // Slide 10 Diagram: Pillar 7: Mixed-Model Cascaded Routing
  // -------------------------------------------------------------
  function drawMixedModelRouting(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // Left Box: Inbound Requests
    chip(s, 15, 130, 155, 75, zh ? "多智能体任务请求\n(用户 / 自动化工作流)" : "Agent Task Requests\n(Users / Workflows)", COL.ink, { size: 11.5, fill: "#ffffff" });

    arrow(s, 170, 167, 195, 167, { stroke: COL.ink, strokeWidth: 2 });

    // Center Card: Complexity & Security Classifier
    rect(s, 195, 30, 185, 295, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 2 });
    txt(s, 287, 55, zh ? "智能级联路由网关" : "Cascaded Task Router", { anchor: "middle", weight: 700, col: COL.blue, size: 12.5 });
    chip(s, 205, 75, 165, 42, zh ? "任务难度分类器\n(Complexity Filter)" : "Complexity Classifier\n(Rule & AST Check)", COL.blue, { size: 11, fill: "#ffffff" });
    chip(s, 205, 128, 165, 42, zh ? "数据敏感度分级\n(Privacy Boundary)" : "Privacy Classifier\n(Local vs Cloud)", COL.teal, { size: 11, fill: "#ffffff" });
    chip(s, 205, 181, 165, 42, zh ? "输出前置浓缩\n(Distillation)" : "Distillation Engine\n(Prune Verbose Output)", COL.orange, { size: 11, fill: "#ffffff" });
    chip(s, 205, 234, 165, 42, zh ? "失败自动升级\n(Escalation Gate)" : "Auto-Escalation\n(On test failure)", COL.grape, { size: 11, fill: "#ffffff" });
    txt(s, 287, 305, zh ? "削减 75%–85% 推理费" : "75%–85% Cost Savings", { anchor: "middle", size: 11.5, col: COL.green, weight: 700 });

    // 3 Arrows to the Right
    arrow(s, 380, 80, 420, 60, { stroke: COL.green, strokeWidth: 2 });
    arrow(s, 380, 167, 420, 167, { stroke: COL.teal, strokeWidth: 2 });
    arrow(s, 380, 255, 420, 275, { stroke: COL.purple, strokeWidth: 2 });

    // Right Column: 3 Model Tiers
    // Tier 1: Local / Edge
    chip(s, 420, 25, 225, 75, zh ? "Tier 1: 本地端侧开源模型 ($0)\n(Qwen 2.5 7B / Llama 3.2 on Ollama)\n正则抽取 · JSON校验 · AST Lint" : "Tier 1: Local / Edge ($0/M)\n(Qwen 2.5 7B / Llama 3.2 Ollama)\nRegex · JSON Parsing · Linting", COL.green, { size: 11, fill: "#ffffff" });

    // Tier 2: Hosted Open-Weights
    chip(s, 420, 130, 225, 75, zh ? "Tier 2: 托管开源主力 ($0.25–$1.00/M)\n(DeepSeek-V3 / Llama 3.3 70B)\n代码草稿 · 单元测试 · 文档撰写" : "Tier 2: Open-Weights ($0.25–$1.00/M)\n(DeepSeek-V3 / Llama 3.3 70B)\nDrafting · Unit Tests · Docstrings", COL.teal, { size: 11, fill: "#ffffff" });

    // Tier 3: Frontier Models
    chip(s, 420, 235, 225, 75, zh ? "Tier 3: 前沿大模型 ($3–$15/M)\n(Claude 3.7 Sonnet / GPT-4.5)\n架构拆解 · 疑难审计 · 最终把关" : "Tier 3: Frontier Models ($3–$15/M)\n(Claude 3.7 Sonnet / GPT-4.5)\nArchitecture · Audit · Final Pass", COL.purple, { size: 11, fill: "#ffffff" });
  }

  // -------------------------------------------------------------
  // Slide 11 Diagram: Pillar 8: Prompt Cache Optimization & Claude Code TTL
  // -------------------------------------------------------------
  function drawPromptCacheTTL(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    // Left Column: Prompt Structure & Breakpoints
    rect(s, 15, 20, 290, 315, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 2 });
    txt(s, 160, 45, zh ? "Prompt 内存布局与缓存断点" : "Prompt Token Memory Layout", { anchor: "middle", weight: 700, col: COL.blue, size: 12.5 });

    chip(s, 25, 65, 270, 36, zh ? "1. 静态系统指令 (System Prompt)" : "1. Static System Instructions", COL.blue, { size: 11, fill: "#ffffff" });
    chip(s, 25, 107, 270, 36, zh ? "2. MCP 工具描述 (Tool Schemas)" : "2. MCP Tool Manifest Schemas", COL.blue, { size: 11, fill: "#ffffff" });
    chip(s, 25, 149, 270, 36, zh ? "3. 项目全局上下文 (CLAUDE.md)" : "3. Project Memory (CLAUDE.md)", COL.teal, { size: 11, fill: "#ffffff" });

    // Breakpoint marker
    rect(s, 25, 192, 270, 34, { fill: "#f0fdf4", fillStyle: "solid", stroke: COL.green, strokeWidth: 2 });
    txt(s, 160, 209, zh ? "⚡ cache_control: {\"type\": \"ephemeral\"}" : "⚡ cache_control: {\"type\": \"ephemeral\"}", {
      anchor: "middle", size: 10.5, family: "'JetBrains Mono'", col: COL.green, weight: 700
    });

    chip(s, 25, 233, 270, 38, zh ? "4. 动态多轮增量 (User Query / Diffs)" : "4. Dynamic Conversation Tail (Diffs)", COL.orange, { size: 11, fill: "#ffffff" });

    txt(s, 160, 295, zh ? "✓ 前缀 90% 享受费用折扣" : "✓ 90% Discount on Cached Prefix", { anchor: "middle", size: 11.5, col: COL.green, weight: 700 });
    txt(s, 160, 317, zh ? "✓ 首字延迟 (TTFT) 降低 80%" : "✓ 80% Faster Time-To-First-Token", { anchor: "middle", size: 11.5, col: COL.blue, weight: 700 });

    // Arrow to Right
    arrow(s, 305, 175, 335, 175, { stroke: COL.ink, strokeWidth: 2 });

    // Right Column: Claude Code 5-Minute Cache TTL Lifecycle
    rect(s, 335, 20, 310, 315, { fill: "#ffffff", fillStyle: "solid", stroke: COL.green, strokeWidth: 2.2 });
    txt(s, 490, 45, zh ? "Claude Code 5 分钟滑动 TTL 机制" : "Claude Code 5-Min Sliding TTL", { anchor: "middle", weight: 700, col: COL.green, size: 12.5 });

    chip(s, 345, 68, 290, 48, zh ? "• 初始写入 (Cache Write)\n首轮加载静态规范并建立内存断点" : "• Initial Cache Write\nWarm static repo prefix into memory", COL.slate, { size: 11, fill: "#ffffff" });
    chip(s, 345, 126, 290, 48, zh ? "• 缓存命中 (Cache Read - 90% Off)\n5分钟内会话互动直接读取已热状态" : "• Cache Hit (90% Cost Reduction)\nSubsequent turns read pre-computed KV", COL.green, { size: 11, fill: "#ffffff" });
    chip(s, 345, 184, 290, 48, zh ? "• 滑动窗口延续 (Sliding Extension)\n每次请求成功交互自动重置 5 分钟计时" : "• Sliding TTL Window Extension\nEach turn hit resets 5-min timer", COL.teal, { size: 11, fill: "#ffffff" });
    chip(s, 345, 242, 290, 48, zh ? "• 防失效守则 (Prefix Immutability)\n切勿在头部插入动态时间戳引发全失效" : "• Guardrail: Prefix Immutability\nNever prepend timestamps or dynamic text", COL.red, { size: 11, fill: "#ffffff" });

    txt(s, 490, 315, zh ? "🚀 高频交互越持久，边际单价越便宜" : "🚀 High frequency turns = near-zero marginal cost", { anchor: "middle", size: 11.5, col: COL.green, weight: 700 });
  }

  // -------------------------------------------------------------
  // Slide 12 Diagram: Executive Synthesis & ROI Architecture
  // -------------------------------------------------------------
  function drawROISynthesis(host) {
    const s = scene(host, 660, 360);
    const zh = isZh();

    rect(s, 180, 130, 300, 90, { fill: "#ffffff", fillStyle: "solid", stroke: COL.blue, strokeWidth: 2.5 });
    txt(s, 330, 165, zh ? "🛡️ 智能体生产力 ROI" : "🛡️ AGENTIC PRODUCTIVITY ROI", { anchor: "middle", weight: 800, col: COL.blue, size: 14 });
    txt(s, 330, 195, zh ? "价值 · 风险 · 七项战术控制" : "Value · Risk · 7 Tactical Controls", { anchor: "middle", size: 12, col: COL.slate });

    chip(s, 40, 35, 180, 55, zh ? "Part 1\n四类投资桶" : "Part 1\n4 Investment Buckets", COL.blue, { size: 12.5, fill: "#ffffff" });
    arrow(s, 220, 62, 250, 140, { stroke: COL.blue });

    chip(s, 240, 35, 180, 55, zh ? "Part 2\nNIST RMF 映射" : "Part 2\nNIST RMF Mapping", COL.orange, { size: 12.5, fill: "#ffffff" });
    arrow(s, 330, 90, 330, 130, { stroke: COL.orange });

    chip(s, 440, 35, 180, 55, zh ? "Part 3\n七项战术控制" : "Part 3\n7 Tactical Controls", COL.green, { size: 12.5, fill: "#ffffff" });
    arrow(s, 440, 62, 410, 140, { stroke: COL.green });

    const bottom = zh
      ? ["自主 / IBAC / 记忆", "观测 / 引导", "评估 / 模型经济"]
      : ["Autonomy / IBAC / Memory", "Observe / Steer", "Eval / Model Econ"];
    const bcols = [COL.grape, COL.teal, COL.purple];
    bottom.forEach((lab, i) => {
      chip(s, 40 + i * 210, 250, 190, 48, lab, bcols[i], { size: 12, fill: "#ffffff" });
    });

    rect(s, 20, 315, 620, 34, { fill: "#f0fdf4", fillStyle: "solid", stroke: COL.green, strokeWidth: 1.8 });
    txt(s, 330, 332, zh ? "✓ 正确投资 · 可控风险 · 可证明单位经济效益" : "✓ Right bets · Managed risk · Provable unit economics", {
      anchor: "middle", size: 12, col: COL.green, weight: 700
    });
  }

  // -------------------------------------------------------------
  // Router for slide diagram rendering
  // -------------------------------------------------------------
  const RENDERERS = {
    "agenda-three-parts": drawAgendaThreeParts,
    "four-buckets": drawFourBuckets,
    "risk-rmf-mapping": drawRiskRmfMapping,
    "seven-controls": drawSevenControls,
    "autonomy-governance": drawAutonomyGovernance,
    "domain-ibac": drawIBACArchitecture,
    "context-memory": drawContextMemoryHygiene,
    "observability-trace": drawObservabilityTrace,
    "runtime-steering": drawRuntimeSteering,
    "benchmark-matrix": drawBenchmarkMatrix,
    "mixed-model-routing": drawMixedModelRouting,
    "prompt-cache-ttl": drawPromptCacheTTL,
    "summary-roi": drawROISynthesis,
    3: drawAgendaThreeParts,
    4: drawFourBuckets,
    5: drawRiskRmfMapping,
    6: drawSevenControls,
    7: drawAutonomyGovernance,
    8: drawIBACArchitecture,
    9: drawContextMemoryHygiene,
    10: drawObservabilityTrace,
    11: drawRuntimeSteering,
    12: drawBenchmarkMatrix,
    13: drawMixedModelRouting,
    14: drawROISynthesis
  };

  window.renderAllDiagrams = function () {
    document.querySelectorAll(".draw[data-fig]").forEach(el => {
      const fig = el.dataset.fig;
      if (RENDERERS[fig]) {
        RENDERERS[fig](el);
      }
    });
  };

  window.renderDiagramForSlide = function (slideNum) {
    const slide = document.getElementById("s" + slideNum);
    if (!slide) return;
    slide.querySelectorAll(".draw[data-fig]").forEach(el => {
      const fig = el.dataset.fig;
      if (RENDERERS[fig]) {
        RENDERERS[fig](el);
      }
    });
    const host = document.getElementById(`diagram-s${slideNum}`);
    if (host && host.children.length === 0 && RENDERERS[slideNum]) {
      RENDERERS[slideNum](host);
    }
  };

  // Re-render current slide diagram on language switch
  document.addEventListener("agentsec:lang", () => {
    const activeSlide = document.querySelector(".slide.is-active");
    if (activeSlide) {
      const num = parseInt(activeSlide.dataset.slide, 10);
      window.renderDiagramForSlide(num);
    }
  });

  // Render on initial load
  window.addEventListener("DOMContentLoaded", () => {
    window.renderAllDiagrams();
  });
})();
