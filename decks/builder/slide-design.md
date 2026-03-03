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
- **Reuse from main deck**: darkSlide helper (dark bg + subtle glow oval), bigNum helper, hero helper, breatherSlide helper, wrongRight helper, sectionDivider helper, twoCol helper.

## Slide Plan

---

### SITUATION (Slides 1-6) — Keep as-is

---

### Slide 1: Title
**Layout**: Standard title (dark)
**Content**:
- "The Builder's Playbook" — Georgia 64pt white bold centered
- "How to ship production systems with AI coding agents" — Calibri 22pt muted italic centered
**Speaker notes**: Let the title sit. This deck is the Builder persona — the expert-level companion to the main AI Best Practices deck. The audience may be engineers who've seen the main deck, or senior engineers arriving fresh. No assumption of Claude Code familiarity.

### Slide 2: Spectrum — Builder highlighted
**Layout**: Custom horizontal progression
**Content**:
- 7 persona boxes: Skeptic → Explorer → Whisperer → Strategist → Operator → Orchestrator → Builder
- Skeptic through Orchestrator dimmed/muted. **Builder** highlighted with solid cyan fill and white text.
- Below spectrum: "The main deck takes you here." (left, pointing to Orchestrator) and "This deck is here." (right, pointing to Builder)
**Speaker notes**: Callback to the main deck's spectrum. The audience should recognize the progression. Everything before Builder is covered in the main deck. This deck goes deep on what the Builder persona actually looks like in practice.

### Slide 3: "41%"
**Layout**: Big number (bigNum helper)
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
**Layout**: Breather (breatherSlide helper)
**Content**:
- "So what's the problem?" — Georgia 28pt cyan italic centered
**Speaker notes**: Pause. The audience is nodding — they know this reality. Now flip it. Transition to the complication.

---

### COMPLICATION (Slides 7-16) — Keep as-is

---

### Slide 7: "19% longer"
**Layout**: Big number (wrong color)
**Content**:
- "19%\nlonger" — 80pt wrong (#E63946) bold
- "when developers rely on AI\nwithout understanding it" — 28pt muted
- Source: Addy Osmani (11pt bottom-right hyperlink)
**Speaker notes**: Source: Addy Osmani. Developers who felt 20% faster actually took 19% longer once debugging and cleanup were included. The gap between "uses AI tools" and "uses AI tools well" is massive. This stat is the anchor — it directly contradicts what people feel.

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
**Speaker notes**: Source: Veracode 2025 GenAI Code Security Report. Tested 100+ AI models across Java, Python, C#, JavaScript. Java had the highest failure rate at 72%. Newer models did not improve security outcomes.

### Slide 10: "Army of Juniors"
**Layout**: Single message (hero helper)
**Content**:
- "The 'Army of Juniors' effect." — Georgia 44pt white bold
- "AI code follows anti-patterns at scale." — 28pt muted
- Source: OX Security (11pt bottom-right hyperlink)
**Speaker notes**: Source: OX Security. Analyzed 300+ repos. AI tools generate code with excessive commenting, over-specification, monolithic architecture — contradicting established engineering practices. They independently coined the same "Army of Juniors" metaphor.

### Slide 11: "The gap is massive."
**Layout**: Single message (hero helper)
**Content**:
- "The gap between using AI\nand using AI well\nis massive." — Georgia 44pt white bold
**Speaker notes**: Callback to main deck. Let it land. The three stats paint the picture. The audience should feel the tension.

### Slide 12: Replit quote
**Layout**: Centered quote
**Content**:
- "\u201CI destroyed months of work\nin seconds.\u201D" — Georgia 44pt white bold italic centered
- "— Replit AI agent, July 2025" — Calibri 22pt muted italic centered
- Source footnotes: Fortune, The Register (11pt bottom-right hyperlinks)
**Speaker notes**: The Replit/SaaStr incident, July 2025: Jason Lemkin was vibe coding with Replit's AI agent. He put the system in an explicit code freeze. The AI ignored it. Deleted his live production database — 1,200+ executives, 1,190+ companies wiped. Then it fabricated a response claiming rollback was impossible. Replit CEO responded publicly and implemented new safeguards.

### Slide 13: "The 'S' in vibe coding stands for security."
**Layout**: Single message (hero helper, accent color)
**Content**:
- "The 'S' in vibe coding\nstands for security." — Georgia 44pt cyan bold
- Source: Lawfare (11pt bottom-right hyperlink)
**Speaker notes**: The Tea App incident, July 2025: A women-only dating safety app built with rapid AI-assisted development. Promised users government ID photos deleted immediately after verification. Instead, 72,000 images including 13,000 government IDs sat in an unsecured cloud bucket. Leaked to 4chan. Class action lawsuit filed. GDPR exposure. Three fundamentals skipped: no data inventory, no data minimization, didn't follow their own policies. Sources: Exterro, Lawfare.

### Slide 14: Expertise table
**Layout**: Comparison table (light background)
**Content**:
- Headline: "Expertise determines what you can ship" — Georgia 40pt darkText bold
- 3-row table:
  - "Vibe coder" (wrong color) | "Prototypes, demos" | "Can't review output"
  - "Developer + AI" (muted) | "POCs, internal tools" | "Catches obvious issues"
  - "Engineer + AI" (right/green) | "Production systems" | "Verifies every stage"
**Speaker notes**: The table is the key visual. Let the audience self-identify. The point isn't gatekeeping — it's that expertise is the prerequisite for trust. Only an expert can catch edge cases, compliance gaps, architectural problems.

### Slide 15: "Vibe coding production is negligence."
**Layout**: Single message (hero helper)
**Content**:
- "Vibe coding prototypes is fine.\nVibe coding production\nis negligence." — Georgia 40pt white bold
**Speaker notes**: Let this land. This is the sharpest version of the thesis. Transition: so what does the alternative look like?

### Slide 16: Breather
**Layout**: Breather
**Content**:
- "So how do you actually do this?" — Georgia 28pt cyan italic
**Speaker notes**: Transition from complication to resolution. The audience is primed. Everything from here is the answer.

---

### RESOLUTION: OPINIONATED STANCE + WHY CLAUDE (Slides 17-22) — New

---

### Slide 17: "This is my opinionated best practice."
**Layout**: Single message (hero helper)
**Content**:
- "This is my opinionated\nbest practice." — Georgia 44pt white bold
**Speaker notes**: Plant the flag. Not the only way. Not a framework. A working setup from daily production use — what I've arrived at after going all-in on AI-assisted development. The principles transfer everywhere. The specific tools are what works best right now, and "right now" changes fast.

### Slide 18: "Be mercenaries with tooling."
**Layout**: Single message (hero helper)
**Content**:
- "Be mercenaries\nwith tooling." — Georgia 44pt white bold
- "Best tool. Best model. Always." — 28pt muted
**Speaker notes**: No vendor lock-in. Always pick the best tool for the job. Use what's best today, switch when something better arrives. This preempts the "are you just selling Claude?" objection. The honest framing earns trust for everything that follows. Cost is secondary to capability right now — the ROI on frontier models pays for itself many times over.

### Slide 19: "Best frontier model for coding."
**Layout**: Single message (hero helper)
**Content**:
- "Best frontier model\nfor coding." — Georgia 44pt white bold
- "Benchmark reality, not brand loyalty." — 28pt muted
**Speaker notes**: Claude (Opus/Sonnet) is the best frontier model for coding. SWE-bench, agentic coding tasks, tool use, extended thinking. When the model is doing 90%+ of the work, model quality isn't a nice-to-have — it's the bottleneck. This is the first of three reasons: model quality.

### Slide 20: "Agentic-first, not copilot-adapted."
**Layout**: Single message (hero helper)
**Content**:
- "Agentic-first,\nnot copilot-adapted." — Georgia 44pt white bold
- "Terminal-native. Tool use, not autocomplete." — 28pt muted
**Speaker notes**: Claude Code is built as an agent from the ground up — not a copilot retrofitted with agent capabilities. Terminal-native. Built around tool use, not autocomplete. The architecture matters: it plans, then executes, then verifies — which maps directly to the gated workflow. This is the second reason: agent architecture.

### Slide 21: "The richest context engineering system."
**Layout**: Single message (hero helper)
**Content**:
- "The richest context\nengineering system." — Georgia 44pt white bold
- "MCP, rules, skills, hooks. Core design." — 28pt muted
**Speaker notes**: Claude Code has the richest context engineering system available — MCP servers, rules, skills, hooks. These aren't bolted on after the fact. They're the core design. The model is great, but the model inside this system is transformative. This is the third reason: infrastructure. The honest caveat: if something better arrives tomorrow, switch. The principles are tool-agnostic. These tools are the best implementation right now.

### Slide 22: Architecture Map
**Layout**: Custom visual (dark background)
**Content**:
- Top row: Single box "Gated Workflow" — labeled "the approach" — cyan border, prominent
- Bottom row: Three boxes side by side — "Rules", "MCP Servers", "Skills" — labeled "the tools" — muted border
- Arrow or visual flow from bottom to top suggesting the tools support the approach
- No definitions — just labels. Each gets explained in its own section.
**Speaker notes**: This is the map. Point to each label briefly: "Rules tell the agent how to behave. MCP servers give it new capabilities. Skills are workflows loaded on demand. And the gated workflow — the approach that sits on top — is how we keep everything in stages." Don't linger — the audience will get the detail in each section. We'll explain the tools first, then how they combine in the gated workflow.

---

### RESOLUTION: CHANGED ROLE + THESIS (Slides 23-30) — Keep as-is, renumbered

---

### Slide 23: "An army of eager juniors."
**Layout**: Single message (hero helper)
**Content**:
- "An army of\neager juniors." — Georgia 54pt white bold
**Speaker notes**: Reframe the OX Security "Army of Juniors" from problem to operating model. Coding agents ARE an army of eager juniors. The question is: who's managing them?

### Slide 24: Manager + Tech Lead
**Layout**: Two column (twoCol helper, dark)
**Content**:
- Left: "Manager" (cyan) / "Improve the process\nBuild skills & workflows\nInvest in infrastructure"
- Right: "Tech Lead" (white) / "Verify each stage\nReview architecture\nCatch what agents miss"
**Speaker notes**: Two hats, worn simultaneously. As engineering manager: improve the system agents work within. As tech lead: verify output at each stage. You never write code. You manage and verify code.

### Slide 25: Forbes quote
**Layout**: Centered quote
**Content**:
- "\u201CCode production has become cheap.\nSystem composition and judgment\nare now the critical skills.\u201D" — Georgia 36pt white bold italic
- "— Forbes Tech Council, Feb 2026" — Calibri 22pt muted italic
**Speaker notes**: Source: Forbes Tech Council. HBR (Dec 2025) adds: "Every AI change should be double-checked with automatic checks, tests that confirm things still work, and at least one human review." The industry is converging on this view.

### Slide 26: "We never write code manually."
**Layout**: Single message (hero helper)
**Content**:
- "We never write a single\nline of code manually." — Georgia 44pt white bold
- "This forces the investment." — 28pt muted
**Speaker notes**: By refusing to write code manually, you force yourself to invest in the infrastructure that makes AI output reliable. The constraint creates the discipline.

### Slide 27: Quality OR Speed
**Layout**: Wrong/right (light bg — wrong side emphasized)
**Content**:
- Headline: "The old trade-off"
- Wrong card: "Quality OR speed\n\nPick one.\n\nEvery engineering decision\nwas a compromise."
- Right card: "?\n\n\n\nThe answer was always\n'it depends.'"
**Speaker notes**: The audience knows this trade-off intimately. Ship fast and fix later, or build it right and ship slow. This was the fundamental constraint for decades.

### Slide 28: Quality AND Speed
**Layout**: Wrong/right (light bg — right side emphasized)
**Content**:
- Headline: "The new reality"
- Wrong card: "Speed alone\n\n= catastrophic\nquality drop\n\n19% slower. 1.7× issues.\n45% fail security."
- Right card: "Quality AND speed\n\nCI/CD, linting, tests,\nPR gates\n\nThe same best practices\n— enforced."
**Speaker notes**: The old trade-off is dead — but only with investment. Without infrastructure: speed + catastrophe. With infrastructure: the same best practices there always were, enforced automatically.

### Slide 29: Three Principles
**Layout**: Three column (dark background)
**Content**:
- "Perfect Context" / "Not too little.\nNot too much."
- "Always Grounded" / "Live data.\nNo silent gaps."
- "Gated Workflow" / "Stages, not yolo.\nTwo layers of verification."
**Speaker notes**: These three principles are the lens for everything that follows. "Always Grounded" is the one that needs most explanation — it covers two failure modes with the same root cause: the agent quietly working from wrong information. Stale training data (the API changed, the AI doesn't know) and silent retrieval failure (WebFetch rejected, HTML truncated) are the same problem. Context7 and Firecrawl are the two-part solution. The gated workflow gets its own deep-dive after the tools.

### Slide 30: Breather
**Layout**: Breather
**Content**:
- "Let's start with the tools." — Georgia 28pt cyan italic
**Speaker notes**: Transition into the tool sections. The audience has the three principles. Now they learn the instruments.

---

### RESOLUTION: MCP SERVERS (Slides 31-35) — Modified

---

### Slide 31: Section divider — MCP Servers
**Layout**: Section divider (sectionDivider helper)
**Content**:
- "MCP Servers" — Georgia 54pt white bold centered
- "New capabilities for the agent" — Calibri 28pt cyan italic centered
**Speaker notes**: MCP servers provide capabilities the agent needs constant, low-level access to. Always available, not loaded on demand.

### Slide 32: "What are MCP servers?"
**Layout**: Single message (hero helper)
**Content**:
- "Rules tell the agent\nhow to behave.\nMCP servers give it\nnew capabilities." — Georgia 36pt white bold
**Speaker notes**: The audience may not know what MCP is. This is the key distinction: rules are instructions (how to behave), MCP servers are capabilities (things it can DO). Connect an MCP server and the agent gains new tools — fetch live docs, navigate code with compiler-level precision, scrape the web reliably. They give the agent new senses and hands. Three are always loaded because the agent always needs them.

### Slide 33: Context7
**Layout**: Single message with principle tag
**Content**:
- "Context7" — Georgia 44pt white bold
- "Live docs at prompt time.\nNo hallucinated APIs." — Calibri 28pt muted
- Principle tag bottom-right: "always grounded" — 16pt cyan italic
**Speaker notes**: Context7 fetches live, version-specific library documentation and injects it into context at prompt time. Instead of relying on stale training data, the agent works from real, current docs. Prevents hallucinated APIs, outdated patterns, wrong-version code. This is the first half of "always grounded" — live data, not training data.

### Slide 34: Language Server MCPs
**Layout**: Single message with principle tag
**Content**:
- "Language Servers" — Georgia 44pt white bold
- "Compiler-level code navigation.\nNot grep." — Calibri 28pt muted
- Principle tag bottom-right: "perfect context" — 16pt cyan italic
**Speaker notes**: Language Server MCPs (pyright, typescript-language-server, gopls) give the agent IDE-level semantic understanding: go-to-definition, find-references, diagnostics. Compiler-level navigation instead of grepping through files.

### Slide 35: Firecrawl
**Layout**: Single message with principle tag
**Content**:
- "Firecrawl" — Georgia 44pt white bold
- "Reliable web access.\nNo silent gaps." — Calibri 28pt muted
- Principle tag bottom-right: "always grounded" — 16pt cyan italic
**Speaker notes**: WebFetch gets rejected by sites, pages are too large and get truncated, content gets summarized in ways that lose critical detail — and none of this is obvious. Firecrawl handles all of this reliably. This is the second half of "always grounded" — reliable retrieval, not silent failure. Note: both Context7 and Firecrawl share this tag. They're solving the same root problem from two directions.

---

### RESOLUTION: RULES (Slides 36-40) — Modified

---

### Slide 36: Section divider — Rules
**Layout**: Section divider
**Content**:
- "Rules" — Georgia 54pt white bold centered
- "Standing instructions, enforced automatically" — Calibri 28pt cyan italic centered
**Speaker notes**: Rules are standing instructions the agent follows on every task. Your engineering standards, written as files, enforced automatically.

### Slide 37: "What are rules?"
**Layout**: Single message (hero helper)
**Content**:
- "Linter rules,\nbut for the agent's\nentire behavior." — Georgia 40pt white bold
**Speaker notes**: Rules are standing instructions the agent follows — how to write code, communicate, use git — written as files, enforced automatically. You write them once, the agent follows them forever. Think of linter rules, but for the agent's entire behavior, not just code style. If you've used a CLAUDE.md file, rules are the modular evolution — instead of one file with everything, each concern gets its own file that declares when it activates.

### Slide 38: Rule Categories
**Layout**: Bullet points (dark background)
**Content**:
- Headline: "Five rule files. Five concerns." — Georgia 36pt white bold
- Bullets with cyan headers and muted descriptions:
  - "Tool usage — fetch docs first, never WebFetch"
  - "Communication — radically honest, never guess"
  - "Coding — TDD, SOLID, self-describing code"
  - "Git workflow — branch naming, PR closes issue"
  - "Language-specific — filtered by file extension"
**Speaker notes**: Each category is a separate file. Tool usage enforces "always grounded" — fetch live docs, use Firecrawl not WebFetch. Communication enforces honesty. Coding enforces quality. Git workflow enforces process. Language-specific rules activate only for that language's files.

### Slide 39: "Filtered by extension."
**Layout**: Single message (hero helper)
**Content**:
- "Python rules load\nfor Python files.\nNothing else." — Georgia 40pt white bold
**Speaker notes**: The key insight: activation scoping. The agent doesn't load Python rules when editing TypeScript. Each file is small, focused, defines its own trigger. Not too little, not too much.

### Slide 40: "Perfect context through modularization."
**Layout**: Single message (hero helper, accent color)
**Content**:
- "Perfect context\nthrough modularization." — Georgia 44pt cyan bold
**Speaker notes**: Summary of the rules section. Modular files, activation scoping, right context for the right task. No bloat, no missing context.

---

### RESOLUTION: SKILLS (Slides 41-47) — Modified

---

### Slide 41: Section divider — Skills
**Layout**: Section divider
**Content**:
- "Skills" — Georgia 54pt white bold centered
- "Learned workflows, loaded when needed" — Calibri 28pt cyan italic centered
**Speaker notes**: Skills are for higher-level workflows that would clutter context if always loaded. Pulled in on demand — progressive disclosure.

### Slide 42: "What are skills?"
**Layout**: Single message (hero helper)
**Content**:
- "Rules are 'always do this.'\nSkills are 'here's how,\nwhen the time comes.'" — Georgia 36pt white bold
**Speaker notes**: The agent carries a catalog of available skills. When your request matches one — either because you called it by name or the agent recognized the fit — it loads the full playbook for that task. Skills stay out of context until needed, because carrying every workflow at all times would be like reading every runbook before starting your day.

### Slide 43: MCP vs Skills
**Layout**: Two column (twoCol helper, dark)
**Content**:
- Left: "MCP" (cyan) / "Always available\nLow-level access\nDocs, navigation, web"
- Right: "Skills" (white) / "On-demand\nHigher-level workflows\nLoaded when needed"
**Speaker notes**: The split is about context economy. MCP servers are always loaded. Skills are loaded on demand. An MCP server like Notion loads its entire tool surface. A skill wrapping a CLI is a fraction of that.

### Slide 44: "Skill wrapping a CLI."
**Layout**: Single message (hero helper)
**Content**:
- "A skill teaching a CLI\nbeats an MCP with 50 tools." — Georgia 40pt white bold
**Speaker notes**: For focused operations, prefer a skill that teaches the agent to call a CLI over loading a full MCP server. A skill wrapping `gh` is far leaner than the full Linear MCP.

### Slide 45: "10%"
**Layout**: Big number
**Content**:
- "10%" — 120pt white bold
- "of your time building skills\nfrom today's pain points" — 28pt muted
**Speaker notes**: The 10% rule: ~1 hour per day building and improving skills based on where the agent got stuck. This isn't optional polish — it's the compounding mechanism.

### Slide 46: What becomes a skill
**Layout**: Bullet points (dark background)
**Content**:
- Headline: "Every wall becomes a skill." — Georgia 36pt white bold
- Bullets:
  - "Agent circled on docker postgres → skill"
  - "Connected to test GCP service → skill"
  - "Pulled a feature ticket via CLI → skill"
  - "Analyzed a crash log → skill"
**Speaker notes**: Real examples. Each was a task where the agent circled. After the session, each pain point became a skill. Next time: no circling.

### Slide 47: "Each day's pain becomes tomorrow's skill."
**Layout**: Single message (hero helper, accent color)
**Content**:
- "Each day's pain\nbecomes tomorrow's skill." — Georgia 44pt cyan bold
**Speaker notes**: The compounding engine. Without 10% investment, you hit the same walls daily. With it, every wall becomes a skill. The investment pays off exponentially.

---

### RESOLUTION: GATED WORKFLOW (Slides 48-52) — New section

---

### Slide 48: Section divider — Gated Workflow
**Layout**: Section divider
**Content**:
- "Gated Workflow" — Georgia 54pt white bold centered
- "How it all comes together" — Calibri 28pt cyan italic centered
**Speaker notes**: The approach that sits on top of the tools. Now that the audience understands MCP, Rules, and Skills, they can see how the gated workflow uses all three.

### Slide 49: Gated Workflow flow
**Layout**: Steps / horizontal flow (dark background)
**Content**:
- 4 phases in horizontal flow with arrows: "Brainstorm" → "Plan" → "Implement" → "Review"
- Each phase in a minimal box with cyan border
- Below: "Each stage produces an artifact.\nEach artifact gets validated."
**Speaker notes**: The gated workflow prevents the agent from yoloing straight into code. Brainstorm produces requirements. Plan produces architecture. Implement produces code + tests. Review validates against requirements. No stage is skipped. Rules enforce standards at every stage. MCP servers provide context during each stage. Skills like Superpowers define the workflow itself.

### Slide 50: Two-Layer Verification
**Layout**: Two column (twoCol helper, dark)
**Content**:
- Left: "Agent verifies" (cyan) / "Runs tests\nChecks linting\nIterates until passing"
- Right: "You verify" (white) / "Solves the problem?\nMeets requirements?\nArchitecturally sound?"
**Speaker notes**: Two layers, not one. The agent catches mechanical errors — runs the tests, checks the linting, iterates. You catch design errors — does this actually solve the problem? Neither layer alone is sufficient.

### Slide 51: Superpowers
**Layout**: Single message with principle tag
**Content**:
- "Superpowers" — Georgia 44pt white bold
- "The gated workflow, as a plugin." — Calibri 28pt muted
- Principle tag bottom-right: "gated workflow" — 16pt cyan italic
**Speaker notes**: Superpowers is an opinionated agentic workflow plugin — a skill, not an MCP server. It enforces TDD (red-green-refactor), systematic debugging (investigate root cause before guessing), verification-before-completion. The gated workflow as code. The agent can't skip steps because the skill defines the process.

### Slide 52: "The approach that uses all three."
**Layout**: Single message (hero helper, accent color)
**Content**:
- "Rules enforce standards.\nMCP provides context.\nSkills define the workflow.\nThe approach connects them." — Georgia 32pt cyan bold
**Speaker notes**: Tie it together. Rules enforce quality at every stage. MCP servers provide the context and capabilities the agent needs during each stage. Skills — especially Superpowers — define the staged workflow itself. The gated workflow is the approach that sits on top and uses all three tool layers. The audience should now see the full picture.

---

### RESOLUTION: ENVIRONMENT (Slides 53-60) — Keep as-is, renumbered

---

### Slide 53: Section divider — Development Environment
**Layout**: Section divider
**Content**:
- "Development Environment" — Georgia 54pt white bold centered
- "Parallel. Isolated. Full visibility." — Calibri 28pt cyan italic centered
**Speaker notes**: The tools and workflow are set. Now the environment they run in.

### Slide 54: Parallel Sessions
**Layout**: Custom (dark background — 3-column vertical flow)
**Content**:
- 3 columns, each showing: "Tab" → "Worktree" → "Containers + DB"
- Labels: "Feature A", "Feature B", "Feature C"
- Below: "3 sessions. 3 databases. Zero interference."
**Speaker notes**: The manager/tech lead role creates downtime. Fill it by opening another session on another feature via git worktree. Each session: own containers, own database, fully isolated.

### Slide 55: "One repo = one context boundary."
**Layout**: Single message (hero helper)
**Content**:
- "One repo =\none context boundary." — Georgia 54pt white bold
**Speaker notes**: Monorepo means full visibility across services, infrastructure, shared code. The agent can trace a feature end-to-end without switching repos.

### Slide 56: "30%"
**Layout**: Big number
**Content**:
- "30%" — 120pt white bold
- "productivity gains for AI agents\nin monorepos" — 28pt muted
- Source: Nx Blog (11pt bottom-right hyperlink)
**Speaker notes**: Source: Nx Blog, January 2026. IaC alongside application code — modify a Lambda, its IAM role, and the frontend, all in one session.

### Slide 57: "Lock the environment, not the agent."
**Layout**: Single message (hero helper)
**Content**:
- "Lock the environment,\nnot the agent." — Georgia 44pt white bold
**Speaker notes**: Bypass all permissions by default for general coding. You're not removing safety, you're moving it. GCP CLI not logged into prod. AWS credentials scoped to dev. The agent physically cannot touch production. Exception: PII sessions — no bypass, managed tool calls.

### Slide 58: CLI + Tabs
**Layout**: Two column (twoCol helper, dark)
**Content**:
- Left: "CLI" (cyan) / "Latest features.\nAlways ahead\nof the plugin."
- Right: "Tabs" (cyan) / "Parallel sessions.\nOne tab\nper worktree."
**Speaker notes**: CLI, not the VSCode extension — always ahead. Tabs, not sidebar — parallel sessions.

### Slide 59: "90 / 10"
**Layout**: Big number (split display)
**Content**:
- "90 / 10" — 100pt (90 white, / muted, 10 cyan)
- "product engineering / building the machine" — 28pt muted
**Speaker notes**: Most of the day: product engineering across multiple features. End of day: ~1 hour turning pain points into skills. The compounding engine.

### Slide 60: Compliance — Two Paths
**Layout**: Two column (light background)
**Content**:
- Left: "Default" (cyan) / "Claude Code via Anthropic\nLatest models, best features\nAll general coding"
- Right: "PII" (wrong/red) / "Claude Code via GCP\nEU region models\nManaged tool calls\nProduction logs, user data"
**Speaker notes**: You can't get Builder-level speed while also having access to PII. Default path: fast, full-featured, bypass permissions. PII path: GCP, EU region models, managed tool calls, no bypass. The decision is per-task, not per-project.

### Slide 61: "Compliance is architectural."
**Layout**: Single message (hero helper, accent color)
**Content**:
- "Compliance is architectural,\nnot an afterthought." — Georgia 44pt cyan bold
**Speaker notes**: The Tea App is what happens when compliance is an afterthought. The Builder approach makes it a first-class architectural decision.

---

### CLOSING (Slides 62-66) — Modified recap, rest keep as-is

---

### Slide 62: Breather
**Layout**: Breather
**Content**:
- "That's the full system.\nHere's how it connects." — Georgia 28pt cyan italic
**Speaker notes**: Pause before the closing. The audience has absorbed the full setup. Now tie it together.

### Slide 63: Three Principles Recap
**Layout**: Bullet points (dark background — rapid-fire mapping)
**Content**:
- Headline: "Every piece. Three principles." — Georgia 36pt white bold
- Bullets (principle in cyan, tools in muted):
  - "Perfect context → Language Servers, Rules, Monorepo"
  - "Always grounded → Context7, Firecrawl, Tool usage rules"
  - "Gated workflow → Superpowers, Two-layer verification, CI/CD"
**Speaker notes**: Rapid-fire recap. Each tool maps to a principle. "Always grounded" now groups Context7 and Firecrawl together — both prevent the agent from working on wrong information, from two directions. The gated workflow is the approach on top — powered by Superpowers, enforced through two-layer verification, backstopped by CI/CD.

### Slide 64: "The Builder's job isn't writing code."
**Layout**: Single message (hero helper)
**Content**:
- "The Builder's job\nisn't writing code." — Georgia 54pt white bold
**Speaker notes**: Pause. Let it land. This is the emotional climax.

### Slide 65: "It's building the machine that writes code well."
**Layout**: Single message (hero helper, accent color)
**Content**:
- "It's building the machine\nthat writes code well." — Georgia 54pt cyan bold
**Speaker notes**: The closing line. Quality AND speed — but only with the investment. The old trade-off is dead. The Builder's job is building the machine. Pause. Let it sit.

---

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
| 11 | AI-Generated Code Violates Engineering Best Practices ("Army of Juniors") — OX Security | https://www.prnewswire.com/news-releases/ox-report-ai-generated-code-violates-engineering-best-practices-undermining-software-security-at-scale-302592642.html | 10, 23 |
| 12 | AI in Software Development: Productivity at the Cost of Code Quality? — DevOps.com | https://devops.com/ai-in-software-development-productivity-at-the-cost-of-code-quality-2/ | 10 |
| 13 | Replit AI agent wiped database — Fortune | https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/ | 12 |
| 14 | Replit/SaaStr vibe coding incident — The Register | https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/ | 12 |
| 15 | Tea App Data Breach — Exterro | https://www.exterro.com/resources/data-privacy-alerts/data-privacy-alert-tea-app-data-breach-exposes-legacy-user-verification-photos-and-private-messages | 13 |
| 16 | When the Vibes Are Off: Security Risks of AI-Generated Code — Lawfare | https://www.lawfaremedia.org/article/when-the-vibe-are-off--the-security-risks-of-ai-generated-code | 13 |
| 17 | Not all AI-assisted programming is vibe coding — Simon Willison | https://simonwillison.net/2025/Mar/19/vibe-coding/ | 14 |
| 18 | Software Engineering In The Age Of AI: From Capacity To Judgment — Forbes Tech Council | https://www.forbes.com/councils/forbestechcouncil/2026/02/20/software-engineering-in-the-age-of-ai-from-capacity-to-judgment/ | 25 |
| 19 | AI Tools Make Coders More Important, Not Less — Harvard Business Review | https://hbr.org/2025/12/ai-tools-make-coders-more-important-not-less | 25 |
| 20 | Shopify CEO: prove AI can't do jobs before asking for headcount — CNBC | https://www.cnbc.com/2025/04/07/shopify-ceo-prove-ai-cant-do-jobs-before-asking-for-more-headcount.html | 25 |
| 21 | Effective Context Engineering for AI Agents — Anthropic | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | 29 |
| 22 | Context engineering vs prompt engineering — Karpathy (via X) | https://x.com/karpathy/status/1937902205765607626 | 29 |
| 23 | Context engineering — Tobi Lutke (via X) | https://x.com/tobi/status/1935533422589399127 | 29 |
| 24 | Context Engineering: Improving AI by Moving Beyond the Prompt — CIO | https://www.cio.com/article/4080592/context-engineering-improving-ai-by-moving-beyond-the-prompt.html | 29 |
| 25 | Will AI Turn 2026 Into the Year of the Monorepo? — Spectro Cloud | https://www.spectrocloud.com/blog/will-ai-turn-2026-into-the-year-of-the-monorepo | 56 |
| 26 | The Missing Multiplier for AI Agent Productivity — Nx Blog | https://nx.dev/blog/the-missing-multiplier-for-ai-agent-productivity | 56 |
| 27 | The State of MCP — Adoption, Security & Production Readiness — Zuplo | https://zuplo.com/mcp-report | 31 |
| 28 | The Model Context Protocol's Impact on 2025 — Thoughtworks | https://www.thoughtworks.com/en-us/insights/blog/generative-ai/model-context-protocol-mcp-impact-2025 | 31 |
| 29 | Claude Code Shows How Far AI Coding Tools Have Come — Built In | https://builtin.com/articles/anthropic-claude-code-tool | 5 |
| 30 | Enabling Claude Code to work more autonomously — Anthropic | https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously | 21 |
