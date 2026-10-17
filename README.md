# Agentic AI Productivity & Enterprise ROI Framework

A publication-grade, self-contained, GitHub Pages-ready **12-slide interactive presentation deck** on Agentic AI Productivity, Unit Economics, Levels of Autonomy, Domain Ontology & Intent-Based Access Control (IBAC), Context Window Hygiene, Trajectory Observability, Active Runtime Steering, Mixed-Model Cascaded Routing, and Claude Prompt Cache TTL Optimization.

Modeled on the architecture and visual design system of [MAESTRO](https://kenhuangus.github.io/maestro-site/).

Presented by **黄连金 (Ken Huang), CISSP** — Adjunct Professor, University of San Francisco (USF); CSA Fellow & Co-Chair of CSA AI Safety Working Groups; OWASP AIVSS Project Lead; CEO of DistributedApps.ai.

---

## 12 Slides Overview

1. **Title Cover / Hero**: Architectural overview of Agentic AI Productivity & Enterprise ROI Framework.
2. **About the Instructor & Academic Foundation**: Credentials, university posts, and 7 published AI & Security books (Springer, Cambridge, Wiley, Packt).
3. **The Enterprise Agentic ROI Equation & Hidden Tax**: Why naive agents destroy ROI (runaway token churn, context bloat, confused deputy attacks, monolithic model tax) vs. the engineered ROI multipliers.
4. **Pillar 1: Agent Autonomy & Bounded Tool Governance**: 6-tier operational taxonomy (LoA 0 to LoA 4), least-privilege tool allowlists, spend velocity caps, and automated step-down triggers.
5. **Pillar 2: Domain Ontology & Intent-Based Access Control (IBAC)**: Mitigating Confused Deputy vulnerabilities and shrinking blast radius through ontology grounding and ephemeral single-use capability tokens (`CapToken`).
6. **Pillar 3: Context Hygiene & Hierarchical Memory for Token ROI**: The quadratic cost penalty of context bloat, and the 3-tier memory model (Ephemeral Turn, Quarantined Buffer, Verified Long-Term) delivering 65% token savings.
7. **Pillar 4: Behavioral Observability & Trajectory Monitoring**: OpenTelemetry (OTel) GenAI semantic DAG tracing, real-time cosine semantic drift scoring, cognitive oscillation interception, and lateral movement detection.
8. **Pillar 5: Active Runtime Steering & Control Plane**: Deterministic out-of-band PreToolUse/PostToolUse interceptors, dynamic argument mutation, and 4 decision primitives (`APPROVE`, `STEER`, `SANDBOX`, `KILL`).
9. **Pillar 6: Rigorous Evaluation & Enterprise ROI Benchmarking**: The 4 enterprise ROI metrics (Task Completion Rate [TCR], Cost Per Successful Task [CPST], Token Efficiency Ratio [TER], Human Effort Reduction [HER]) and anti-regression pipelines.
10. **Pillar 7: Mixed-Model Cascaded Routing Architecture**: 3-tier hierarchy (Tier 1 Local/Edge on Ollama/vLLM [$0], Tier 2 Hosted Open-Weights [$0.25–$1/M], Tier 3 Frontier Models [$3–$15/M]) yielding 75–85% inference cost reductions.
11. **Pillar 8: Prompt Cache Optimization & Claude Code Cache TTL**: Claude API 90% input token discount, sub-second TTFT, strategic cache breakpoint layout, and Claude Code 5-minute sliding TTL session economics.
12. **Executive Synthesis, ROI Implementation Blueprint & Open Q/A**: Executive synthesis of the 8 ROI accelerators, 6-week adoption roadmap, strategic discussion prompts, and author contact.

---

## Interactive Navigation Controls

- **Next Slide:** `→` (Arrow Right) / `Space` / `PageDown` / Click `Next ›`
- **Previous Slide:** `←` (Arrow Left) / `PageUp` / Click `‹ Prev`
- **Jump to Start / End:** `Home` / `End`
- **Fullscreen Mode:** `F` or click `Full Screen`
- **Language Switcher:** Click `EN` or `中文` in the header bar
- **Hash Deep Linking:** Link directly to any slide via URL hash (e.g. `#1` to `#12`)
- **Swipe / Wheel:** Touch swipe on mobile or debounced scroll wheel on desktop

---

## Local Development & Viewing

```bash
cd C:\Users\kenhu\agent-productivity-roi-site
python -m http.server 8000
# Open http://localhost:8000
```
