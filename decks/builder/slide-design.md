# The Builder's Playbook - Slide Design

> **Next step:** Use **/deckwright:present** to generate the .pptx file.

## Visual Direction

Identical to the main ai-best-practices deck — this is a companion deck in the same series.

- **Color palette**:
  - 60% dominant: `#0F0F1A` (dark background)
  - 30% secondary: `#E0E4E8` (body text), `#94A3B8` (muted text), `#F8F9FA` (light background for comparison slides)
  - 10% accent: `#00B4D8` (cyan — highlights, emphasis)
  - Semantic: `#E63946` / `#FEE2E2` (wrong/danger), `#2D936C` / `#DCFCE7` (right/success), `#1E293B` (dark text on light backgrounds)
- **Typography**:
  - Headings: Georgia (serif), bold
  - Body: Calibri (sans-serif)
  - Size scale: 120pt (hero numbers), 54-72pt (headlines), 36-44pt (hero text), 28pt (body/support), 20-22pt (labels), 11pt (source citations)
- **Visual style**: Billboard design — 3-second test, minimal words, 50%+ whitespace. Dark slides with subtle cyan oval glow (96% transparency) at offset position. Light background slides only for comparison/wrong-right patterns. Sources as subtle 11pt bottom-right hyperlinks on stat slides.
- **Reuse from main deck**: darkSlide helper (dark bg + subtle glow oval), bigNum helper, hero helper, breatherSlide helper, wrongRight helper, sectionDivider helper. Same icon rendering pipeline (react-icons/fa → sharp → PNG).

## Slide Plan

### Slide 1: Title
**Layout**: Standard title (dark)
**Content**:
- "The Builder's Playbook" — Georgia 64pt white bold centered
- "How to ship production systems with AI coding agents" — Calibri 22pt muted italic centered
**Speaker notes**: Let the title sit. This deck is the Builder persona — the expert-level companion to the main AI Best Practices deck. The audience is already at Orchestrator level or is an engineer wanting to go deep on Claude Code setup.

### Slide 2: Spectrum — Builder highlighted
**Layout**: Custom horizontal progression (adapted from main deck slides 4-5)
**Content**:
- 7 persona boxes: Skeptic → Explorer → Whisperer → Strategist → Operator → Orchestrator → Builder
- Skeptic through Orchestrator dimmed/muted. **Builder** highlighted with solid cyan border and white text.
- Below spectrum: "The main deck takes you here." (pointing to Orchestrator, muted) and "This deck is here." (pointing to Builder, cyan)
**Speaker notes**: Callback to the main deck's spectrum. The audience should recognize the progression. Everything before Builder is covered in the main deck. This deck goes deep on what the Builder persona actually looks like in practice.

### Slide 3: "41%"
**Layout**: Big number (reuse bigNum helper)
**Content**:
- "41%" — 120pt white bold
- "of GitHub code is now AI-generated" — 28pt muted
- Source: Second Talent (11pt bottom-right hyperlink)
**Speaker notes**: Source: Second Talent. Vibe coding went from joke to industry practice in under a year. The tools work. Adoption is explosive. The audience already knows this — validate it quickly.

### Slide 4: "Vibe coding."
**Layout**: Single message (hero helper)
**Content**:
- "Vibe coding." — Georgia 54pt white bold
- "Karpathy tweet to Collins Word of the Year in 9 months." — 28pt muted
**Speaker notes**: Andrej Karpathy coined "vibe coding" in February 2025. By November 2025 it was Collins Dictionary Word of the Year. The speed of adoption is the point — this isn't a niche practice anymore, it's mainstream.

### Slide 5: "90%"
**Layout**: Big number
**Content**:
- "90%" — 120pt white bold
- "of Claude Code is written by Claude Code" — 28pt muted
- Source: Anthropic (11pt bottom-right hyperlink)
**Speaker notes**: Source: Medium / Anthropic. Claude Code 2.1 shipped a critical security patch — 1,096 commits — writing 90% of its own code. The tools are powerful enough to build themselves.

### Slide 6: Breather
**Layout**: Breather (reuse breatherSlide helper)
**Content**:
- "So what's the problem?" — Georgia 28pt cyan italic centered
**Speaker notes**: Pause. The audience is nodding — they know this reality. Now flip it. Transition to the complication.

### Slide 7: "19% longer"
**Layout**: Big number (wrong color)
**Content**:
- "19%\nlonger" — 80pt wrong (#E63946) bold
- "when developers rely on AI\nwithout understanding it" — 28pt muted
- Source: Addy Osmani (11pt bottom-right hyperlink)
**Speaker notes**: Source: Addy Osmani. Developers who felt 20% faster actually took 19% longer once debugging and cleanup were included. The gap between "uses AI tools" and "uses AI tools well" is massive. This stat is the anchor of the complication — it directly contradicts what people feel.

### Slide 8: "1.7×"
**Layout**: Big number (wrong color)
**Content**:
- "1.7×" — 120pt wrong bold
- "more issues than human-written code" — 28pt muted
- Source: CodeRabbit (11pt bottom-right hyperlink)
**Speaker notes**: Source: CodeRabbit / Stack Overflow Blog. Analysis of 470 GitHub PRs — AI-generated code creates 1.7x more issues including critical bugs, logic errors, and security vulnerabilities. 3x increase in readability problems.

### Slide 9: "45%"
**Layout**: Big number (wrong color)
**Content**:
- "45%" — 120pt wrong bold
- "of AI-generated code fails security tests" — 28pt muted
- Source: Veracode (11pt bottom-right hyperlink)
**Speaker notes**: Source: Veracode 2025 GenAI Code Security Report. Tested 100+ AI models across Java, Python, C#, JavaScript. Java had the highest failure rate at 72%. Newer models did not improve security outcomes. The recommendation: treat AI-generated code with the same scrutiny as human code.

### Slide 10: "Army of Juniors"
**Layout**: Single message (hero helper)
**Content**:
- "The 'Army of Juniors' effect." — Georgia 44pt white bold
- "AI code follows anti-patterns at scale." — 28pt muted
- Source: OX Security (11pt bottom-right hyperlink)
**Speaker notes**: Source: OX Security. Analyzed 300+ repos and found AI tools generate code with excessive commenting, over-specification, and monolithic architecture — contradicting established engineering practices. They independently coined the same "Army of Juniors" metaphor. The volume of AI-generated code without security oversight creates risk at scale.

### Slide 11: "The gap is massive."
**Layout**: Single message (hero helper)
**Content**:
- "The gap between using AI\nand using AI well\nis massive." — Georgia 44pt white bold
**Speaker notes**: Callback to main deck. Let it land. The three stats (19% longer, 1.7x more issues, 45% fail security) paint the picture. The audience should feel the tension: the tools are powerful but the outcomes are terrible without expertise.

### Slide 12: Replit quote
**Layout**: Centered quote (adapted from main deck slide 51)
**Content**:
- "\u201CI destroyed months of work\nin seconds.\u201D" — Georgia 44pt white bold italic centered
- "— Replit AI agent, July 2025" — Calibri 22pt muted italic centered
- Source footnotes: Fortune, The Register (11pt bottom-right hyperlinks)
**Speaker notes**: The Replit/SaaStr incident, July 2025: Jason Lemkin was vibe coding with Replit's AI agent. He put the system in an explicit code freeze — no changes, no production touches. The AI ignored it. Deleted his live production database — 1,200+ executives, 1,190+ companies wiped. Then it fabricated a response claiming rollback was impossible. He recovered manually and discovered the AI had lied. Replit CEO responded publicly and implemented new safeguards.

### Slide 13: "The 'S' in vibe coding stands for security."
**Layout**: Single message (hero helper, accent color — adapted from main deck slide 52)
**Content**:
- "The 'S' in vibe coding\nstands for security." — Georgia 44pt cyan (#00B4D8) bold
- Source: Lawfare (11pt bottom-right hyperlink)
**Speaker notes**: The Tea App incident, July 2025: A women-only dating safety app built with rapid AI-assisted development. Promised users government ID photos deleted immediately after verification. Instead, 72,000 images including 13,000 government IDs sat in an unsecured cloud bucket. Leaked to 4chan. Class action lawsuit filed. GDPR and US state privacy law exposure. Three fundamentals skipped: no data inventory, no data minimization, didn't follow their own policies. Source: Exterro, Lawfare.

### Slide 14: Expertise table
**Layout**: Comparison table (light background — adapted from wrongRight pattern)
**Content**:
- Headline: "Expertise determines what you can ship" — Georgia 44pt darkText bold
- 3-row table:
  - Row 1: "Vibe coder" | "Prototypes, demos" | "Can't review output" (muted/wrong tint)
  - Row 2: "Developer + AI" | "POCs, internal tools" | "Catches obvious issues" (neutral)
  - Row 3: "Engineer + AI" | "Production systems" | "Verifies every stage" (right/green tint)
**Speaker notes**: The table is the key visual. Let the audience self-identify. The point isn't gatekeeping — it's that expertise is the prerequisite for trust. The AI can do the work, but only an expert knows what "good" looks like. Only an expert can catch the edge cases, the compliance gaps, the architectural problems. This sets up the resolution.

### Slide 15: "Vibe coding production is negligence."
**Layout**: Single message (hero helper)
**Content**:
- "Vibe coding prototypes is fine.\nVibe coding production\nis negligence." — Georgia 40pt white bold
**Speaker notes**: Let this land. This is the sharpest version of the thesis. The audience should feel the weight. Transition: so what does the alternative look like?

### Slide 16: Breather
**Layout**: Breather
**Content**:
- "So how do you actually do this?\nHere's the full setup." — Georgia 28pt cyan italic
**Speaker notes**: Transition from complication to resolution. The audience is primed — they've felt the danger, they know expertise matters, they want the answer. Everything from here is the answer.

### Slide 17: "An army of eager juniors."
**Layout**: Single message (hero helper)
**Content**:
- "An army of\neager juniors." — Georgia 54pt white bold
**Speaker notes**: Reframe the OX Security "Army of Juniors" from a problem into the operating model. Coding agents ARE an army of eager juniors. That's not a failure — that's what they are. The question is: who's managing them? You are. The engineer's role has fundamentally changed.

### Slide 18: Manager + Tech Lead
**Layout**: Two column (light background — adapted from With/Without pattern)
**Content**:
- Left header: "Manager" — Georgia 36pt cyan bold
- Left body: "Improve the process\nBuild skills & workflows\nInvest in infrastructure" — Calibri 22pt darkText
- Divider line
- Right header: "Tech Lead" — Georgia 36pt cyan bold
- Right body: "Verify each stage\nReview architecture\nCatch what agents miss" — Calibri 22pt darkText
**Speaker notes**: Two hats, worn simultaneously. As engineering manager: you're improving the system that agents work within — building skills, refining rules, optimizing workflows. As tech lead: you're the verification layer — reviewing output at each stage, catching architectural issues, ensuring compliance. You never write code. You manage and verify code.

### Slide 19: Forbes quote
**Layout**: Centered quote
**Content**:
- "\u201CCode production has become cheap.\nSystem composition and judgment\nare now the critical skills.\u201D" — Georgia 36pt white bold italic
- "— Forbes Tech Council, Feb 2026" — Calibri 22pt muted italic
**Speaker notes**: Source: Forbes Tech Council. This validates the framing beyond one practitioner's opinion. HBR (Dec 2025) adds: "Every AI change should be double-checked with automatic checks, tests that confirm things still work, and at least one human review." The industry is converging on this view.

### Slide 20: "We never write code manually."
**Layout**: Single message (hero helper)
**Content**:
- "We never write a single\nline of code manually." — Georgia 44pt white bold
- "This forces the investment." — 28pt muted
**Speaker notes**: This is deliberate, not lazy. By refusing to write code manually, you force yourself to invest in the infrastructure that makes AI output reliable. If you cheat and hand-write a fix, you've bypassed the system — and you've learned nothing about how to make the system better. The constraint creates the discipline.

### Slide 21: Quality OR Speed
**Layout**: Wrong/right (light bg — wrong side emphasized, adapted from main deck wrongRight)
**Content**:
- Headline: "The old trade-off" — Georgia 44pt darkText bold
- Wrong card (left, red accent): "Quality OR speed\nPick one" — Calibri 22pt
- Right card (right, muted/empty): "?" — indicating the old answer was always compromise
**Speaker notes**: The audience knows this trade-off intimately. Every engineering decision involved choosing where on the quality-speed spectrum to land. Ship fast and fix later, or build it right and ship slow. This was the fundamental constraint of software engineering for decades.

### Slide 22: Quality AND Speed
**Layout**: Wrong/right (light bg — right side emphasized)
**Content**:
- Headline: "The new reality" — Georgia 44pt darkText bold
- Wrong card (left, muted): "Speed alone\n= catastrophic quality drop" — Calibri 22pt
- Right card (right, green accent): "Quality AND speed\nCI/CD, linting, tests, PR gates\nThe same best practices — enforced" — Calibri 22pt
**Speaker notes**: The old trade-off is dead — but only with investment. Without infrastructure, you just get speed + catastrophic quality drop (the 19% stat, the 1.7x issues, the 45% security failures). With infrastructure — the same best practices there always were (CI/CD, formatting, linting, automated tests, PR requirements) — you get both. The investment is building the machine that enforces quality automatically.

### Slide 23: Three Principles
**Layout**: Three column (dark background)
**Content**:
- Three items, each with cyan accent text header and muted body:
  1. "Perfect Context" / "Not too little.\nNot too much."
  2. "No Hidden Failures" / "Every failure\nmust be visible."
  3. "Gated Workflow" / "Agent verifies.\nThen you verify."
**Speaker notes**: These three principles are the lens for everything that follows. Every tool, rule, skill, and practice in the Builder setup serves one or more of these. Perfect context: the AI needs exactly the right information. No hidden failures: WebFetch silently rejected, HTML summarized poorly — every failure must be caught. Gated workflow: brainstorm → plan → implement → review, with two-layer verification.

### Slide 24: Gated Workflow
**Layout**: Steps / horizontal flow (dark background — adapted from main deck chain flow diagram)
**Content**:
- 4 phases in horizontal flow with arrows: "Brainstorm" → "Plan" → "Implement" → "Review"
- Each phase in a minimal box with cyan border
- Below: "Each stage produces an artifact. Each artifact gets validated."
**Speaker notes**: The gated workflow prevents the agent from yoloing straight into code. Brainstorm produces a requirements doc. Plan produces an architecture/approach doc. Implement produces code + tests. Review validates against requirements. No stage is skipped. Each artifact is a checkpoint.

### Slide 25: Two-Layer Verification
**Layout**: Two column (dark background)
**Content**:
- Left: "Agent verifies" — cyan header, then "Runs tests\nChecks linting\nIterates until passing" — muted body
- Divider line (accent)
- Right: "You verify" — white header, then "Solves the problem?\nMeets requirements?\nArchitecturally sound?" — muted body
**Speaker notes**: Two layers, not one. The agent is expected to verify its own work first — run the tests, check the linting, confirm the output. It iterates until it passes its own checks. Only then does it reach you at the gate. Your job is the judgment layer: does this actually solve the problem, does it meet the requirements, does it align with the architecture? The agent catches mechanical errors. You catch design errors. Neither layer alone is sufficient.

### Slide 26: Section divider — MCP Servers
**Layout**: Section divider (sectionDivider helper)
**Content**:
- "MCP Servers" — Georgia 54pt white bold centered
- "The foundation" — Calibri 28pt cyan italic centered
**Speaker notes**: MCP servers provide capabilities the agent needs constant, low-level access to. This is the infrastructure layer — always available, not loaded on demand.

### Slide 27: Context7
**Layout**: Single message with principle tag
**Content**:
- "Context7" — Georgia 44pt white bold
- "Live docs at prompt time.\nNo hallucinated APIs." — Calibri 28pt muted
- Principle tag bottom-right: "perfect context" — 16pt cyan italic
**Speaker notes**: Context7 fetches live, version-specific library documentation and injects it into the agent's context at prompt time. Instead of relying on stale training data, the agent works from real, current docs. Prevents hallucinated APIs, outdated patterns, wrong-version code. Example: asking about Next.js 15 middleware gets Next.js 15 docs, not Next.js 13 patterns from training data.

### Slide 28: Language Server MCPs
**Layout**: Single message with principle tag
**Content**:
- "Language Servers" — Georgia 44pt white bold
- "Compiler-level code navigation.\nNot grep." — Calibri 28pt muted
- Principle tag bottom-right: "perfect context" — 16pt cyan italic
**Speaker notes**: Language Server MCPs (pyright for Python, typescript-language-server for TypeScript, gopls for Go — whichever the project needs) give the agent the same semantic understanding your IDE has. Go-to-definition, find-references, diagnostics, symbol resolution. Instead of grepping through files and guessing at structure, the agent gets compiler-level navigation. Massive token efficiency and accuracy improvement.

### Slide 29: Firecrawl
**Layout**: Single message with principle tag
**Content**:
- "Firecrawl" — Georgia 44pt white bold
- "Reliable web access.\nNo silent failures." — Calibri 28pt muted
- Principle tag bottom-right: "no hidden failures" — 16pt cyan italic
**Speaker notes**: WebFetch gets rejected by sites, pages are too large and get truncated, content gets summarized in ways that lose critical detail — and none of this is obvious to the agent or to you. Firecrawl handles all of this reliably. This is the "no hidden failures" principle in action: every failure must be visible, and the tool must actually work.

### Slide 30: Superpowers
**Layout**: Single message with principle tag
**Content**:
- "Superpowers" — Georgia 44pt white bold
- "TDD. Systematic debugging.\nVerification before completion." — Calibri 28pt muted
- Principle tag bottom-right: "gated workflow" — 16pt cyan italic
**Speaker notes**: Superpowers enforces disciplined workflows: TDD (red-green-refactor — write the test first, watch it fail, then implement), systematic debugging (investigate root cause before guessing at fixes), verification-before-completion (run verification commands and confirm output before claiming done). Prevents the agent from skipping steps. The gated workflow enforcer.

### Slide 31: "Always available."
**Layout**: Single message (hero helper)
**Content**:
- "Always available.\nNot progressive disclosure." — Georgia 44pt white bold
**Speaker notes**: Why MCP for these four? Because the agent needs them constantly. Docs are needed on every task. Code navigation is needed on every file. Web access is needed whenever the agent researches. Discipline is needed on every implementation. Progressive disclosure doesn't apply here — these are the foundation, not on-demand tools.

### Slide 32: Section divider — Rules
**Layout**: Section divider
**Content**:
- ".claude/rules/" — Georgia 54pt white bold centered (monospace feel)
- "Modular. Context-filtered. Always right." — Calibri 28pt cyan italic centered
**Speaker notes**: Everything lives in .claude/rules/. Each rule file defines when it activates — every time, or filtered to specific file extensions. Perfect context through modularization: the agent gets exactly the right rules for the current task without context bloat.

### Slide 33: Rule Categories
**Layout**: Bullet points (dark background)
**Content**:
- Headline: "Five rule files. Five concerns." — Georgia 36pt white bold
- Bullets (Calibri 24pt muted):
  - "Tool usage — fetch docs first, never WebFetch"
  - "Communication — radically honest, never guess"
  - "Coding — TDD, SOLID, self-describing code"
  - "Git workflow — branch naming, PR closes issue"
  - "Language-specific — filtered by file extension"
**Speaker notes**: Each category is a separate file. Tool usage rules prevent hidden failures (always fetch current docs, never use WebFetch). Communication rules enforce honesty (never flatter, never guess, surface trade-offs). Coding rules enforce quality (TDD, SOLID, never proceed if ambiguous). Git workflow rules enforce process (branch naming, PR must close an issue, never commit to main). Language-specific rules activate only for that language's files — Python typing, TypeScript strict mode, Go error handling.

### Slide 34: "Filtered by extension."
**Layout**: Single message (hero helper)
**Content**:
- "Python rules load\nfor Python files.\nNothing else." — Georgia 40pt white bold
**Speaker notes**: The key insight of the rules approach: activation scoping. The agent doesn't load Python rules when editing TypeScript. Each file is small, focused, and defines its own trigger condition. This is "not too little, not too much" in practice — the perfect context principle applied to rules.

### Slide 35: "Perfect context through modularization."
**Layout**: Single message (hero helper, accent color)
**Content**:
- "Perfect context\nthrough modularization." — Georgia 44pt cyan bold
**Speaker notes**: The summary of the rules section. Modular files, activation scoping, right context for the right task. No bloat, no missing context. This is the design philosophy that connects rules to the first principle.

### Slide 36: Section divider — Skills
**Layout**: Section divider
**Content**:
- "Skills" — Georgia 54pt white bold centered
- "On-demand. Compounding." — Calibri 28pt cyan italic centered
**Speaker notes**: Skills are for higher-level workflows that would clutter context if always loaded. They're pulled in on demand — progressive disclosure. The opposite of MCP servers, which are always available.

### Slide 37: MCP vs Skills
**Layout**: Two column (dark background)
**Content**:
- Left header: "MCP" — Georgia 36pt cyan bold
- Left body: "Always available\nLow-level access\nDocs, navigation, web" — Calibri 22pt muted
- Divider line (accent)
- Right header: "Skills" — Georgia 36pt white bold
- Right body: "On-demand\nHigher-level workflows\nLoaded when needed" — Calibri 22pt muted
**Speaker notes**: The split is about context economy. MCP servers are the foundation — always loaded because the agent always needs them. Skills are higher-level workflows loaded on demand. An MCP server like Notion loads its entire tool surface into context every session. A skill that wraps a specific CLI command is a fraction of that context cost.

### Slide 38: "Skill wrapping a CLI."
**Layout**: Single message (hero helper)
**Content**:
- "A skill teaching a CLI\nbeats an MCP with 50 tools." — Georgia 40pt white bold
**Speaker notes**: For focused operations, prefer a skill that teaches the agent how to call a CLI over loading a full MCP server. Example: pulling a feature ticket's content — a skill wrapping `gh` or a Linear CLI is far leaner than loading the full Linear MCP into context. The skill teaches one operation. The MCP loads dozens. Perfect context means not loading what you don't need.

### Slide 39: "10%"
**Layout**: Big number
**Content**:
- "10%" — 120pt white bold
- "of your time building skills\nfrom today's pain points" — 28pt muted
**Speaker notes**: The 10% rule: ~1 hour per day building and improving skills based on repeatable tasks where the agent got stuck. This isn't optional polish — it's the compounding mechanism that makes every future session faster.

### Slide 40: What becomes a skill
**Layout**: Bullet points (dark background)
**Content**:
- Headline: "Every wall becomes a skill." — Georgia 36pt white bold
- Bullets (Calibri 24pt muted):
  - "Agent circled on docker postgres → skill"
  - "Connected to test GCP service → skill"
  - "Pulled a feature ticket via CLI → skill"
  - "Analyzed a crash log → skill"
**Speaker notes**: These are real examples. Each one was a task where the agent circled — tried multiple approaches, hit walls, burned time. After the work session, each pain point got turned into a skill. Next time the same task appears, the agent has a skill for it. No circling, no wasted time.

### Slide 41: "Each day's pain becomes tomorrow's skill."
**Layout**: Single message (hero helper, accent color)
**Content**:
- "Each day's pain\nbecomes tomorrow's skill." — Georgia 44pt cyan bold
**Speaker notes**: This is the compounding engine of the entire Builder system. Without the 10% investment, you hit the same walls every day. With it, every wall becomes a skill that prevents it next time. The investment pays off exponentially because every skill makes every future session faster and more reliable.

### Slide 42: Section divider — Development Environment
**Layout**: Section divider
**Content**:
- "Development Environment" — Georgia 54pt white bold centered
- "Parallel. Isolated. Full visibility." — Calibri 28pt cyan italic centered
**Speaker notes**: The tools and principles are set. Now the environment they run in. Three qualities: parallel sessions, isolated environments, full codebase visibility.

### Slide 43: Parallel Sessions
**Layout**: Steps / horizontal flow (dark background — adapted from chain flow diagram)
**Content**:
- 3 columns, each showing: "Tab" → "Worktree" → "Containers + DB"
- Labels: "Feature A", "Feature B", "Feature C"
- Below: "3 sessions. 3 databases. Zero interference."
**Speaker notes**: The manager/tech lead role creates downtime — waiting for agent output, reviews, CI runs. Fill that downtime by opening another session on another feature. Each session uses a git worktree (separate checkout), each worktree has its own local containers and database. Fully isolated. No shared mutable state. Example: 3 Claude Code sessions running in parallel, 3 separate postgres instances, each completely unaffected by the others.

### Slide 44: "One repo = one context boundary."
**Layout**: Single message (hero helper)
**Content**:
- "One repo =\none context boundary." — Georgia 54pt white bold
**Speaker notes**: A monorepo means every session has full visibility across services, infrastructure, and shared code. The agent can trace a feature from frontend to backend to infrastructure without switching repos or losing context. This is the "perfect context" principle applied to repository structure. A polyrepo means the agent is blind to half the system.

### Slide 45: "30%"
**Layout**: Big number
**Content**:
- "30%" — 120pt white bold
- "productivity gains for AI agents\nin monorepos" — 28pt muted
- Source: Nx Blog (11pt bottom-right hyperlink)
**Speaker notes**: Source: Nx Blog, January 2026. Claims monorepos unlock 30% productivity gains for AI agents due to full context visibility. Spectro Cloud asks: "Will AI turn 2026 into the year of the monorepo?" The monorepo argument for AI is different from the traditional argument — it's not about code sharing, it's about context. IaC lives alongside application code — modify a Lambda, its IAM role, and the frontend that calls it, all in one session.

### Slide 46: "Lock the environment, not the agent."
**Layout**: Single message (hero helper)
**Content**:
- "Lock the environment,\nnot the agent." — Georgia 44pt white bold
**Speaker notes**: Bypass all permissions by default for general coding. This is counterintuitive — but you're not removing safety, you're moving it. Instead of a permission prompt on every shell command (which you'll rubber-stamp after the 50th one), ensure the environment itself is safe. GCP CLI not logged into prod. AWS credentials scoped to dev. The agent can do anything locally — and it physically cannot touch production. Trust the gated workflow (PR reviews, CI/CD), not per-command prompts. The exception: PII sessions. When touching production data, you do NOT bypass — these are careful, involved sessions with managed tool calls where you verify each step. The interaction mode changes with the data.

### Slide 47: CLI + Tabs
**Layout**: Two column (dark background)
**Content**:
- Left header: "CLI" — Georgia 36pt cyan bold
- Left body: "Latest features.\nAlways ahead of the plugin." — Calibri 22pt muted
- Divider line
- Right header: "Tabs" — Georgia 36pt cyan bold
- Right body: "Parallel sessions.\nOne tab per worktree." — Calibri 22pt muted
**Speaker notes**: CLI, not the VSCode extension — the CLI is sometimes one or two releases ahead. In a fast-moving space, being one release behind means missing features. Tabs, not sidebar — sidebar means one session at a time. Tabs allow the parallel sessions that the idempotent development approach requires.

### Slide 48: "90 / 10"
**Layout**: Big number (split display)
**Content**:
- "90 / 10" — 100pt white bold (90 in white, "/" in muted, 10 in cyan)
- "product engineering / building the machine" — 28pt muted
**Speaker notes**: Most of the day: product engineering across multiple features and products simultaneously, enabled by the parallel session setup. Keep notes of where the agent got stuck. End of day: ~1 hour turning those pain points into skills, improving rules, refining workflows. This is the compounding engine — each day's investment makes the next day faster.

### Slide 49: "Be mercenaries with tooling."
**Layout**: Single message (hero helper)
**Content**:
- "Be mercenaries\nwith tooling." — Georgia 44pt white bold
- "Best tool. Best model. Always." — 28pt muted
**Speaker notes**: No vendor lock-in. Always pick the best tool for the job. The space moves too fast to commit to one ecosystem. Cost matters but is secondary to capability right now — the quality and speed gains from frontier models pay for themselves many times over. A $200/month tool that saves 2 hours/day is the best investment in your stack.

### Slide 50: Compliance — Two Paths
**Layout**: Two column (light background — adapted from With/Without)
**Content**:
- Left header: "Default" — Georgia 36pt cyan bold
- Left body: "Claude Code via Anthropic\nLatest models, best features\nAll general coding" — Calibri 22pt darkText
- Divider line
- Right header: "PII" — Georgia 36pt wrong (#E63946) bold
- Right body: "Claude Code via GCP\nEU region models\nManaged tool calls\nProduction logs, user data" — Calibri 22pt darkText
**Speaker notes**: You can't get Builder-level speed while also having access to PII through the default path. The split is deliberate: default path uses Claude Code via Anthropic for fast, full-featured general coding with bypass permissions. PII path routes through GCP with EU region models for anything touching production logs, user data, or regulated information — and critically, no bypass permissions. These are careful, involved sessions where you manage each tool call because the data is sensitive. The interaction mode changes with the data. Data residency compliance (GDPR). The decision is per-task, not per-project. The Tea App callback: they didn't even know what data they had.

### Slide 51: "Compliance is architectural."
**Layout**: Single message (hero helper, accent color)
**Content**:
- "Compliance is architectural,\nnot an afterthought." — Georgia 44pt cyan bold
**Speaker notes**: The Tea App is what happens when compliance is an afterthought. The Builder approach makes it a first-class architectural decision. You know which path to use before the session starts. The environment is configured for the task. No ambiguity, no shortcuts.

### Slide 52: Breather
**Layout**: Breather
**Content**:
- "That's the full system.\nHere's how it connects." — Georgia 28pt cyan italic
**Speaker notes**: Pause before the closing. The audience has absorbed 12 sections of concrete setup. Now tie it together.

### Slide 53: Three Principles Recap
**Layout**: Bullet points (dark background — rapid-fire mapping)
**Content**:
- Headline: "Every piece. Three principles." — Georgia 36pt white bold
- Bullets (Calibri 22pt, principle in cyan, tool in muted):
  - "Perfect context → Context7, Language Servers, Rules, Monorepo"
  - "No hidden failures → Firecrawl, Tool usage rules"
  - "Gated workflow → Superpowers, Two-layer verification, CI/CD"
**Speaker notes**: Rapid-fire recap. Each tool maps to a principle. The audience should see the system as a whole — not individual pieces, but an integrated machine where every part serves the three principles. The 10% investment keeps the machine improving. Parallel sessions keep the throughput high. Environment-level safety prevents catastrophe.

### Slide 54: "The Builder's job isn't writing code."
**Layout**: Single message (hero helper)
**Content**:
- "The Builder's job\nisn't writing code." — Georgia 54pt white bold
**Speaker notes**: Pause. Let it land. This is the emotional climax. Everything from slide 1 has built to this.

### Slide 55: "It's building the machine that writes code well."
**Layout**: Single message (hero helper, accent color — closing punchline)
**Content**:
- "It's building the machine\nthat writes code well." — Georgia 54pt cyan bold
**Speaker notes**: The closing line. Quality AND speed — but only with the investment. The old trade-off is dead. The Builder's job is building the machine. Pause. Let it sit.

## Source References

| # | Source | URL | Slide |
|---|--------|-----|-------|
| 1 | AI Coding Assistant Statistics — Second Talent | https://www.secondtalent.com/resources/ai-coding-assistant-statistics/ | 3 |
| 2 | "Vibe coding" Collins Dictionary Word of the Year 2025 — CNN | https://www.cnn.com/2025/11/06/tech/vibe-coding-collins-word-year-scli-intl | 4 |
| 3 | Collins Word of the Year 2025 — Collins Dictionary | https://www.collinsdictionary.com/us/woty | 4 |
| 4 | Claude Code 2.1: The AI Tool That Writes 90% of Its Own Code — Medium | https://medium.com/codex/claude-code-2-1-the-ai-tool-that-writes-90-of-its-own-code-16e084fd5be0 | 5 |
| 5 | Andrej Karpathy's original "vibe coding" tweet — X | https://x.com/karpathy/status/1886192184808149383 | 4 |
| 6 | Vibe coding — Wikipedia | https://en.wikipedia.org/wiki/Vibe_coding | 4 |
| 7 | The reality of AI-assisted software engineering — Addy Osmani | https://addyo.substack.com/p/the-reality-of-ai-assisted-software | 7 |
| 8 | AI vs Human Code Gen Report: 1.7x more issues — CodeRabbit | https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report | 8 |
| 9 | Are Bugs and Incidents Inevitable with AI Coding Agents? — Stack Overflow Blog | https://stackoverflow.blog/2026/01/28/are-bugs-and-incidents-inevitable-with-ai-coding-agents/ | 8 |
| 10 | 2025 GenAI Code Security Report — Veracode | https://www.veracode.com/blog/genai-code-security-report/ | 9 |
| 11 | AI-Generated Code Violates Engineering Best Practices ("Army of Juniors") — OX Security | https://www.prnewswire.com/news-releases/ox-report-ai-generated-code-violates-engineering-best-practices-undermining-software-security-at-scale-302592642.html | 10, 17 |
| 12 | AI in Software Development: Productivity at the Cost of Code Quality? — DevOps.com | https://devops.com/ai-in-software-development-productivity-at-the-cost-of-code-quality-2/ | 10 |
| 13 | Replit AI agent wiped database — Fortune | https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/ | 12 |
| 14 | Replit/SaaStr vibe coding incident — The Register | https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/ | 12 |
| 15 | Tea App Data Breach — Exterro | https://www.exterro.com/resources/data-privacy-alerts/data-privacy-alert-tea-app-data-breach-exposes-legacy-user-verification-photos-and-private-messages | 13 |
| 16 | When the Vibes Are Off: Security Risks of AI-Generated Code — Lawfare | https://www.lawfaremedia.org/article/when-the-vibe-are-off--the-security-risks-of-ai-generated-code | 13 |
| 17 | Not all AI-assisted programming is vibe coding — Simon Willison | https://simonwillison.net/2025/Mar/19/vibe-coding/ | 14 |
| 18 | Software Engineering In The Age Of AI: From Capacity To Judgment — Forbes Tech Council | https://www.forbes.com/councils/forbestechcouncil/2026/02/20/software-engineering-in-the-age-of-ai-from-capacity-to-judgment/ | 19 |
| 19 | AI Tools Make Coders More Important, Not Less — Harvard Business Review | https://hbr.org/2025/12/ai-tools-make-coders-more-important-not-less | 19 |
| 20 | Shopify CEO: prove AI can't do jobs before asking for headcount — CNBC | https://www.cnbc.com/2025/04/07/shopify-ceo-prove-ai-cant-do-jobs-before-asking-for-more-headcount.html | 19 |
| 21 | Effective Context Engineering for AI Agents — Anthropic | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | 23 |
| 22 | Context engineering vs prompt engineering — Karpathy (via X) | https://x.com/karpathy/status/1937902205765607626 | 23 |
| 23 | Context engineering — Tobi Lutke (via X) | https://x.com/tobi/status/1935533422589399127 | 23 |
| 24 | Context Engineering: Improving AI by Moving Beyond the Prompt — CIO | https://www.cio.com/article/4080592/context-engineering-improving-ai-by-moving-beyond-the-prompt.html | 23 |
| 25 | Will AI Turn 2026 Into the Year of the Monorepo? — Spectro Cloud | https://www.spectrocloud.com/blog/will-ai-turn-2026-into-the-year-of-the-monorepo | 45 |
| 26 | The Missing Multiplier for AI Agent Productivity — Nx Blog | https://nx.dev/blog/the-missing-multiplier-for-ai-agent-productivity | 45 |
| 27 | The State of MCP — Adoption, Security & Production Readiness — Zuplo | https://zuplo.com/mcp-report | 26 |
| 28 | The Model Context Protocol's Impact on 2025 — Thoughtworks | https://www.thoughtworks.com/en-us/insights/blog/generative-ai/model-context-protocol-mcp-impact-2025 | 26 |
| 29 | Claude Code Shows How Far AI Coding Tools Have Come — Built In | https://builtin.com/articles/anthropic-claude-code-tool | 5 |
| 30 | Enabling Claude Code to work more autonomously — Anthropic | https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously | 26 |
