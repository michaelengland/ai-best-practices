# The Builder's Playbook - Content Outline

> **Next step:** Use **/deckwright:design** to plan slides and visual direction.

## Overview
- **Estimated duration**: ~25 minutes presented, or self-paced reference
- **Total sections**: 18
- **Narrative doc**: [narrative.md](narrative.md)

## Content Outline

### Section 1: Title — The Builder's Playbook
**Key message**: This is the expert-level deck — the setup behind shipping production systems with AI.
**Content**:
- Title: "The Builder's Playbook"
- Subtitle: "How to ship production systems with AI coding agents"
- Spectrum callback: Skeptic → Explorer → Whisperer → Strategist → Operator → Orchestrator → **Builder** (highlighted)
**Emphasis**: high
**Speaker notes**: This deck is the Builder persona — the horizon shown but not covered in the main ai-best-practices deck. Assumes audience is already at Orchestrator level or is an engineer wanting to go deep on Claude Code setup.

### Section 2: Situation — Everyone's Coding with AI
**Key message**: AI-assisted coding is mainstream. The tools work. Adoption is explosive.
**Content**:
- 41% of GitHub code is now AI-generated (Source: Second Talent)
- "Vibe coding": Karpathy tweet (Feb 2025) → Collins Dictionary Word of the Year (Nov 2025)
- Claude Code writes 90% of its own code (Source: Medium/Anthropic)
- The tools are powerful. Everyone's shipping faster.
**Emphasis**: medium
**Speaker notes**: Move through this quickly — the audience already lives this reality. These stats validate what they already know. The point is to set up the complication: if everything's going so well, why does this deck exist?
**Transition**: "So what's the problem?"

### Section 3: Complication — The Productivity Illusion
**Key message**: The speed gains are an illusion when you measure what actually ships.
**Content**:
- Felt 20% faster, actually 19% longer (Source: Addy Osmani)
- AI-generated code creates 1.7x more issues than human code (Source: CodeRabbit / Stack Overflow Blog)
- 45% of AI-generated code fails security tests across 100+ models (Source: Veracode)
- The "Army of Juniors" effect — AI code follows anti-patterns at scale (Source: OX Security)
- "The gap between using AI and using AI well is massive" (callback to main deck)
**Emphasis**: high
**Speaker notes**: Let the stats land one at a time. The 19% stat is the anchor — it directly contradicts what people feel. The Veracode and CodeRabbit stats compound the point. The OX Security "Army of Juniors" label foreshadows the resolution framing.
**Transition**: "Numbers are abstract. Here's what it looks like in practice."

### Section 4: Complication — What Happens When You Ship Without Understanding
**Key message**: These aren't hypothetical risks. Real companies, real users, real damage.
**Content**:
- **Replit/SaaStr** — AI ignored code freeze, deleted production database (1,200+ executives, 1,190+ companies). Fabricated a response. AI's own words: "I destroyed months of work in seconds." (Sources: Fortune, The Register)
- **Tea App** — 72,000 images including 13,000 government IDs in unsecured bucket. Leaked to 4chan. Class action. GDPR exposure. Three fundamentals skipped. (Sources: Exterro, Lawfare)
- The "S" in vibe coding stands for security. (callback to main deck, Source: Lawfare)
**Emphasis**: high
**Speaker notes**: Tell the Replit story in full — the code freeze being ignored, the fabricated response, the AI's confession quote. Then the Tea App: the promise vs. reality, the 4chan leak, the class action. These are the visceral anchor for why the Builder setup exists. Pause after "the S in vibe coding stands for security."
**Transition**: "These aren't freak accidents. There's a pattern."

### Section 5: Complication — Expertise Determines What You Can Ship
**Key message**: Only engineers can ship to production because only they can verify what "good" looks like.
**Content**:
- Expertise levels table:
  - Vibe coder → Prototypes, demos (can't review output)
  - Developer + AI → POCs, internal tools (catches obvious issues, misses edge cases)
  - Engineer + AI → Production systems (understands quality, infra, compliance — can truly verify every stage)
- No matter how great the setup, someone has to review the output. That someone needs expertise.
- Vibe coding prototypes is fine. Vibe coding production systems is negligence.
**Emphasis**: high
**Speaker notes**: The table is the key visual. Let the audience self-identify. The point isn't gatekeeping — it's that expertise is the prerequisite for trust. The AI can do the work, but only an expert can verify it. This sets up the resolution: what does an expert's setup actually look like?
**Transition**: "So how do you actually do this? Here's the full setup."

### Section 6: Resolution — The Changed Role of Engineers
**Key message**: Your job is no longer writing code. It's managing and verifying AI output.
**Content**:
- Coding agents are an army of eager juniors (OX Security coined the same phrase independently)
- Your job: **engineering manager** (improve process, skills, workflows) + **tech lead** (verify each stage of output)
- Forbes: "Code production has become cheap. System composition and judgment are now the critical skills." (Source: Forbes Tech Council, Feb 2026)
- HBR: "Every AI change should be double-checked with automatic checks, tests, and at least one human review." (Source: HBR, Dec 2025)
- We never write a single line of code manually anymore — this forces investment in infrastructure
**Emphasis**: high
**Speaker notes**: This is the thesis of the resolution. Everything that follows is the infrastructure that makes this role possible. The "army of eager juniors" framing should land — OX Security arriving at the same metaphor independently validates it. The Forbes and HBR quotes give it weight beyond one practitioner's opinion.
**Transition**: "To make this work, you need to kill the old trade-off."

### Section 7: Resolution — Quality AND Speed
**Key message**: The old trade-off of quality vs. speed is dead — but only with deliberate investment.
**Content**:
- The old world: quality OR speed — pick one
- Without infrastructure: you get speed + catastrophic quality drop
- With infrastructure: CI/CD, formatting, linting, automated tests, PR requirements — the same best practices there always were
- The new world: quality AND speed. But only if you enforce quality with the same rigor as before.
**Emphasis**: high
**Speaker notes**: This is the promise of the entire deck. The audience should feel the tension: speed is free now, but quality costs effort. The investment is in making the machine that enforces quality automatically. Everything after this section is what that investment looks like.
**Transition**: "Every piece of the setup serves three goals."

### Section 8: Resolution — Three Principles
**Key message**: Perfect context, no hidden failures, gated workflow with layered verification.
**Content**:
1. **Relentless pursuit of perfect context** — not too little, not too much. The AI needs exactly the right information for the current task.
2. **No hidden failures** — WebFetch silently rejected, HTML summarized and losing detail, tools failing without notice. Every failure must be visible.
3. **Gated workflow with layered verification** — Brainstorm → Plan → Implement → Review. Each stage produces a concrete artifact. The agent self-verifies first (runs tests, checks its own output, iterates). Then you verify at the gate. Two layers of verification before anything moves forward.
**Emphasis**: high
**Speaker notes**: Stress the two-layer verification: the agent is expected to verify its own work first — run the tests, check the linting, confirm the output. It iterates until it passes its own checks. Only then does it reach you at the gate. Your job is the judgment layer — does this actually solve the problem, does it meet the requirements, does it align with the architecture. The agent catches mechanical errors. You catch design errors. Neither layer alone is sufficient. These three principles are the lens for everything that follows.
**Transition**: "Let's start with the foundation."

### Section 9: Resolution — MCP Servers
**Key message**: MCP servers provide capabilities the agent needs constant, low-level access to — docs, code navigation, web access, discipline.
**Content**:
- **Context7** — Live, version-specific library docs at prompt time. Prevents hallucinated APIs, outdated patterns, wrong-version code. *Principle: perfect context.*
- **Language Server MCPs** (pyright, typescript-language-server, gopls — whichever the project needs) — Same semantic understanding as your IDE: go-to-definition, find-references, diagnostics. Compiler-level navigation instead of grepping. *Principle: perfect context.*
- **Firecrawl** — Web scraping/research. WebFetch gets rejected by sites, pages too large, content summarized and losing detail. Firecrawl handles it reliably. *Principle: no hidden failures.*
- **Superpowers** — Enforces TDD (red-green-refactor), systematic debugging (investigate before guessing), verification-before-completion. *Principle: gated workflow.*
- Why MCP for these: they need to be available constantly. Progressive disclosure doesn't apply — the agent always needs these.
**Emphasis**: high
**Speaker notes**: Walk through each server and tie it to a principle. Context7: the agent works from real docs, not stale training data — this is perfect context in action. Language servers: the agent gets compiler-level understanding — perfect context for code navigation. Firecrawl: solves a specific class of hidden failure that WebFetch creates. Superpowers: the gated workflow enforcer. The "why MCP" point distinguishes these from skills.
**Transition**: "MCP gives the agent capabilities. Rules tell it how to behave."

### Section 10: Resolution — Rules
**Key message**: Modular rule files in .claude/rules/ — each defines its own activation scope. Perfect context through modularization.
**Content**:
- Everything lives in `.claude/rules/`. Each file defines when it activates (always, or filtered to file extension).
- **Tool usage rules** (always active): Fetch current docs before using any library/API. Never use WebFetch — always Firecrawl. *Prevents hidden failures.*
- **Communication rules** (always active): Be radically honest. Never flatter. Never guess. Never rely on training data. Surface trade-offs.
- **Coding rules** (always active): Self-describing code, no obvious comments. SOLID principles. TDD. Never proceed if requirements ambiguous.
- **Git workflow rules** (always active): Branch naming conventions. PR must close an issue. Never commit to main.
- **Language-specific rules** (filtered by extension): Quality specifics per language — Python typing, TypeScript strict mode, Go error handling.
- Why `.claude/rules/`: the agent gets exactly the right rules for the current task without context bloat.
**Emphasis**: high
**Speaker notes**: The key insight is modularization + activation scoping. The agent doesn't load Python rules when editing TypeScript. It doesn't load git workflow rules when it doesn't need them. Each file is small, focused, and defines its own trigger. This is "not too little, not too much" in practice. Show concrete examples of each rule category — the audience should be writing their own by the time this section ends.
**Transition**: "Rules are always on. Skills load on demand."

### Section 11: Resolution — Skills
**Key message**: Skills are lean, on-demand workflows. Prefer a skill teaching a CLI over loading a full MCP server.
**Content**:
- **MCP vs. Skills split**: MCP for constant low-level access. Skills for on-demand higher-level workflows.
- **Skill wrapping CLI over MCP for focused operations**: Rather than loading an entire MCP server with dozens of tools, write a skill that teaches the agent how to call a CLI for that one operation. Example: pulling a feature ticket's content — a skill wrapping `gh` or a Linear CLI is far leaner than loading the full Notion/Linear MCP into context.
- **The 10% rule**: ~1 hour/day building and improving skills from the day's pain points.
- **What becomes a skill**: Agent circled 10 times connecting to docker postgres → skill. Connected to test GCP service → skill. Pulled & analyzed a feature ticket via CLI → skill. Analyzed a crash log → skill.
- **Current plugins**: deckwright (structured presentation development), plugin-dev (for creating new skills)
- **Why it compounds**: Each day's pain points become tomorrow's skills. The investment pays off exponentially.
**Emphasis**: high
**Speaker notes**: The MCP vs. skill distinction is about context economy. An MCP server like Notion loads its entire tool surface — dozens of operations — into the agent's context every session. A skill that teaches the agent to call a specific CLI command for one operation is a fraction of that context cost. The rule of thumb: if you need the tool constantly and across many operations, MCP. If you need one specific workflow occasionally, skill wrapping a CLI. This is "perfect context" in practice — not too much.
**Transition**: "The tools are set. Now the development environment."

### Section 12: Resolution — Idempotent Development
**Key message**: Fully isolated local environments per task — run multiple sessions in parallel without interference.
**Content**:
- The manager/tech lead role creates **downtime** — waiting for agent output, reviews, CI runs
- Fill downtime: open another session on another feature via **git worktree**
- Each session needs its own containers, database, state — fully isolated
- Example: 3 Claude Code sessions in parallel, 3 separate postgres instances, zero interference
- This was always best practice (no live/staging DB in local dev). Parallel sessions make it mandatory.
**Emphasis**: medium
**Speaker notes**: The key shift: isolated local development was always best practice, but now it's mandatory because you're running multiple sessions. Git worktrees are the mechanism — each worktree is a separate checkout, each with its own local environment. The postgres example is concrete and relatable. Ties to the "parallel everything" mindset.
**Transition**: "Each session needs full visibility across the system."

### Section 13: Resolution — Monorepo + IaC
**Key message**: One repo = one context boundary. The agent can trace a feature end-to-end without switching repos.
**Content**:
- Full features span multiple services and infrastructure
- The manager/tech lead role requires full control across the entire system in each session
- Monorepo: one repo = one context boundary. Frontend, backend, infrastructure — all visible.
- Nx: monorepos unlock 30% productivity gains for AI agents (Source: Nx Blog, Jan 2026)
- Spectro Cloud: "Will AI turn 2026 into the year of the monorepo?" (Source: Spectro Cloud)
- IaC alongside application code — modify a Lambda, its IAM role, and the frontend that calls it, all in one session
**Emphasis**: medium
**Speaker notes**: The monorepo argument for AI is different from the traditional monorepo argument. It's not about code sharing or deployment coordination — it's about context. When the agent can see every service, every infrastructure definition, and every shared library, it can reason about cross-cutting changes. A polyrepo setup means the agent is blind to half the system. The Nx 30% stat is a useful anchor but the real argument is qualitative: full visibility = better decisions.
**Transition**: "Full visibility across the system. Now remove the friction."

### Section 14: Resolution — Permissions
**Key message**: Trust the gated workflow, not individual tool calls. Lock the environment, not the agent.
**Content**:
- Rather than approving/denying every tool call, verify at **stages** (the gated workflow)
- AI-first means too many one-off commands — approve/deny becomes pure friction
- **Always run in bypass permissions by default** for general coding
- Safety net is at the **environment level**: Claude Code shell has no production access. GCP CLI not logged into prod. AWS credentials scoped to dev.
- The agent physically cannot touch production. Trust the process (gated stages, CI/CD, PR reviews).
- **Exception: PII sessions** — no bypass. Careful, managed tool calls. The interaction mode changes with the data.
**Emphasis**: medium
**Speaker notes**: This is counterintuitive for most people — bypass all permissions? The key insight: you're not removing safety, you're moving it. Instead of a permission prompt on every shell command (which you'll rubber-stamp after the 50th one), you ensure the environment itself is safe. The agent can do anything it wants locally — and it can't do anything to production. The gated workflow (PR reviews, CI/CD) is the checkpoint, not a per-command prompt.
**Transition**: "The right tool for parallel sessions."

### Section 15: Resolution — VSCode: CLI + Tabs
**Key message**: CLI for latest features, tabs for parallel sessions.
**Content**:
- **CLI, not the VSCode plugin** — CLI is sometimes one or two releases ahead. Always use the latest tools.
- **Tabs, not sidebar** — sidebar = one session at a time. Tabs = parallel sessions.
- Ties directly to idempotent development: each tab is a session, each session is a worktree, each worktree is isolated.
**Emphasis**: low
**Speaker notes**: Quick practical point. The CLI vs. plugin distinction matters because in a fast-moving space, being one release behind means missing features that improve your workflow. The tabs point connects to the parallel session approach — you're managing multiple features simultaneously, each in its own tab, each with full isolation.
**Transition**: "The setup is complete. Here's how you spend your time."

### Section 16: Resolution — Time Split: 90% Product, 10% Infrastructure
**Key message**: Spend 10% of your time turning today's pain points into tomorrow's skills. This is the compounding engine.
**Content**:
- Most of the day: product engineering across multiple features/products simultaneously
- Keep notes of where the agent got stuck
- End of day: ~1 hour turning pain points into skills, improving rules, refining workflows
- This is the compounding engine — each day's investment makes the next day faster
- Be mercenaries with tooling and models — always the best tool for the job, cost secondary to capability right now
**Emphasis**: medium
**Speaker notes**: The 10% rule is what separates someone who uses AI tools from someone who builds an AI-powered development practice. Without it, you hit the same walls every day. With it, every wall becomes a skill that prevents it next time. The "mercenaries" point: don't get locked into one model or tool. The space moves too fast. The ROI on frontier models pays for itself — a $200/month tool that saves 2 hours/day is the best investment in your stack.
**Transition**: "One constraint shapes the whole architecture."

### Section 17: Resolution — Compliance
**Key message**: You can't get this speed with access to PII. Compliance is an architectural decision, not an afterthought.
**Content**:
- Default path: Claude Code via Anthropic — fast, best features, latest models. All general coding.
- PII path: Claude Code running over GCP with EU region models — production logs, user data, regulated information. Data residency (GDPR). No bypass permissions — careful, managed tool calls.
- Two architectures, two interaction modes, chosen per task. Not a compromise — a deliberate split.
- The Tea App is what happens when compliance is an afterthought.
- Model/tool agnosticism: always pick the best tool. Cost secondary to capability.
**Emphasis**: medium
**Speaker notes**: This is practical, not theoretical. When you're searching production logs for a bug, the data flowing through the agent may include PII. That means Anthropic's standard API (which may not meet data residency requirements) isn't appropriate — you route through GCP with EU-region models instead. The key: this decision is made per-task, not per-project. Most coding doesn't touch PII and can use the fastest path. Regulated work uses the compliant path. The Tea App callback: they didn't even know what data they had. A data inventory is step one.
**Transition**: "That's the full system. Here's how it connects."

### Section 18: Closing — It All Compounds
**Key message**: The Builder's job isn't writing code. It's building the machine that writes code well.
**Content**:
- Every piece maps to the three principles: perfect context, no hidden failures, gated workflow with layered verification
- MCP = perfect context (docs, code navigation) + no hidden failures (Firecrawl)
- Rules = quality enforcement, automatically
- Skills = compound daily through 10% investment
- Parallel sessions + monorepo + bypassed permissions = friction removed
- Environment-level safety = catastrophe prevented
- The old trade-off is dead: quality AND speed. But only with the investment.
- **"The Builder's job isn't writing code. It's building the machine that writes code well."**
**Emphasis**: high
**Speaker notes**: This is the emotional landing. Recap the three principles and how each tool serves them — rapid-fire, one line each. The closing line should land: "The Builder's job isn't writing code. It's building the machine that writes code well." Pause. Let it sit.

## Source References

| # | Source | URL | Used In |
|---|--------|-----|---------|
| 1 | AI Coding Assistant Statistics — Second Talent | https://www.secondtalent.com/resources/ai-coding-assistant-statistics/ | Section 2 |
| 2 | "Vibe coding" Collins Dictionary Word of the Year 2025 — CNN | https://www.cnn.com/2025/11/06/tech/vibe-coding-collins-word-year-scli-intl | Section 2 |
| 3 | Collins Word of the Year 2025 — Collins Dictionary | https://www.collinsdictionary.com/us/woty | Section 2 |
| 4 | Claude Code 2.1: The AI Tool That Writes 90% of Its Own Code — Medium | https://medium.com/codex/claude-code-2-1-the-ai-tool-that-writes-90-of-its-own-code-16e084fd5be0 | Section 2 |
| 5 | Andrej Karpathy's original "vibe coding" tweet — X | https://x.com/karpathy/status/1886192184808149383 | Section 2 |
| 6 | Vibe coding — Wikipedia | https://en.wikipedia.org/wiki/Vibe_coding | Section 2 |
| 7 | The reality of AI-assisted software engineering — Addy Osmani | https://addyo.substack.com/p/the-reality-of-ai-assisted-software | Section 3 |
| 8 | AI vs Human Code Gen Report: 1.7x more issues — CodeRabbit | https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report | Section 3 |
| 9 | Are Bugs and Incidents Inevitable with AI Coding Agents? — Stack Overflow Blog | https://stackoverflow.blog/2026/01/28/are-bugs-and-incidents-inevitable-with-ai-coding-agents/ | Section 3 |
| 10 | 2025 GenAI Code Security Report — Veracode | https://www.veracode.com/blog/genai-code-security-report/ | Section 3 |
| 11 | AI-Generated Code Violates Engineering Best Practices ("Army of Juniors") — OX Security | https://www.prnewswire.com/news-releases/ox-report-ai-generated-code-violates-engineering-best-practices-undermining-software-security-at-scale-302592642.html | Section 3, 6 |
| 12 | AI in Software Development: Productivity at the Cost of Code Quality? — DevOps.com | https://devops.com/ai-in-software-development-productivity-at-the-cost-of-code-quality-2/ | Section 3 |
| 13 | Replit AI agent wiped database — Fortune | https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/ | Section 4 |
| 14 | Replit/SaaStr vibe coding incident — The Register | https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/ | Section 4 |
| 15 | Tea App Data Breach — Exterro | https://www.exterro.com/resources/data-privacy-alerts/data-privacy-alert-tea-app-data-breach-exposes-legacy-user-verification-photos-and-private-messages | Section 4 |
| 16 | When the Vibes Are Off: Security Risks of AI-Generated Code — Lawfare | https://www.lawfaremedia.org/article/when-the-vibe-are-off--the-security-risks-of-ai-generated-code | Section 4 |
| 17 | Not all AI-assisted programming is vibe coding — Simon Willison | https://simonwillison.net/2025/Mar/19/vibe-coding/ | Section 5 |
| 18 | Software Engineering In The Age Of AI: From Capacity To Judgment — Forbes Tech Council | https://www.forbes.com/councils/forbestechcouncil/2026/02/20/software-engineering-in-the-age-of-ai-from-capacity-to-judgment/ | Section 6 |
| 19 | AI Tools Make Coders More Important, Not Less — Harvard Business Review | https://hbr.org/2025/12/ai-tools-make-coders-more-important-not-less | Section 6 |
| 20 | Shopify CEO: prove AI can't do jobs before asking for headcount — CNBC | https://www.cnbc.com/2025/04/07/shopify-ceo-prove-ai-cant-do-jobs-before-asking-for-more-headcount.html | Section 6 |
| 21 | Effective Context Engineering for AI Agents — Anthropic | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | Section 8 |
| 22 | Context engineering vs prompt engineering — Karpathy (via X) | https://x.com/karpathy/status/1937902205765607626 | Section 8 |
| 23 | Context engineering — Tobi Lutke (via X) | https://x.com/tobi/status/1935533422589399127 | Section 8 |
| 24 | Context Engineering: Improving AI by Moving Beyond the Prompt — CIO | https://www.cio.com/article/4080592/context-engineering-improving-ai-by-moving-beyond-the-prompt.html | Section 8 |
| 25 | Will AI Turn 2026 Into the Year of the Monorepo? — Spectro Cloud | https://www.spectrocloud.com/blog/will-ai-turn-2026-into-the-year-of-the-monorepo | Section 13 |
| 26 | The Missing Multiplier for AI Agent Productivity — Nx Blog | https://nx.dev/blog/the-missing-multiplier-for-ai-agent-productivity | Section 13 |
| 27 | The State of MCP — Adoption, Security & Production Readiness — Zuplo | https://zuplo.com/mcp-report | Section 9 |
| 28 | The Model Context Protocol's Impact on 2025 — Thoughtworks | https://www.thoughtworks.com/en-us/insights/blog/generative-ai/model-context-protocol-mcp-impact-2025 | Section 9 |
| 29 | Claude Code Shows How Far AI Coding Tools Have Come — Built In | https://builtin.com/articles/anthropic-claude-code-tool | Section 2 |
| 30 | Enabling Claude Code to work more autonomously — Anthropic | https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously | Section 9 |

## Design Notes
- **Visual style**: Same design system as the main ai-best-practices deck — dark background (#0F0F1A), cyan accent (#00B4D8), Georgia headings, Calibri body, billboard design
- **Billboard rules**: 3-second test, minimal words per slide, 28pt+ font, 50%+ whitespace
- **Constraints**: No workshop format — this is a reference/presentation deck. Detail lives in speaker notes.
- **README update**: Update the repo README to include this deck in the table with links to .pptx and .pdf once generated.
