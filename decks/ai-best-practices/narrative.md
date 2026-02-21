# Getting Agents to Give Up Their Secrets - Narrative

> **Next step:** Use **/deck-flow:craft** to structure this narrative into a content outline.

## Overview

- **Audience**: Mixed roles, all levels — engineers, PMs, designers, managers, execs at a large company. Varying technical depth. Must be accessible without being patronizing to technical folks.
- **Purpose**: Behavior change — "I've been using AI wrong, I need to change my approach." Also serves as a standalone reference document (readable without a presenter).
- **Key message**: You're already capable of using AI powerfully — you just need to learn how.
- **Framework**: Seven personas on a spectrum (Skeptic → Explorer → Whisperer → Strategist → Operator → Orchestrator → Builder). The deck covers five crossings (Skeptic → Orchestrator). Builder is shown as the horizon. Each section IS one persona crossing. No level numbers.
- **Tone**: Playful and fun throughout. Serious content, not-serious delivery. Memorable analogies (Dory/blue tang AI colleague), provocative framings, and practical examples over corporate jargon.
- **Format**: ~68 slides, billboard design (3-second test, 15 words max per slide, 28pt+ font). Self-contained and readable as PDF without a presenter. Sources cited on stat slides.

## Persona Spectrum

| Persona | Behavior | How you get here |
|---------|----------|-----------------|
| **Skeptic** | Avoids AI or doesn't see the point | Starting position |
| **Explorer** | Tries AI, asks it questions, learning the landscape | Understanding what AI is |
| **Whisperer** | Knows how to talk to AI — prompts well, gets good results | Mastering prompt engineering |
| **Strategist** | Curates what AI knows — context, persistent instructions, skills | Mastering context engineering + skills |
| **Operator** | Sets up agents, connects tools, lets AI do the work | Letting agents drive |
| **Orchestrator** | Chains agents together, each with focused skills that compound | Coordinating agent teams |
| **Builder** | Creates plugins, MCP servers, custom tools for others | Beyond this deck |

The deck takes you **Skeptic → Orchestrator**. Builder is visible on the spectrum as the horizon — "there's further to go."

---

## Narrative Arc

### Opening: "Where Are You?" (Hook + Spectrum + Stakes)

**Job: Create urgency and self-awareness. Make it personal.**

#### Hook
- Title: "Getting Agents to Give Up Their Secrets"
- Emotional anchor: "Last month, someone spent 45 minutes on a one-page summary using ChatGPT. The right approach took 2 minutes."
- "This deck is about the trick."
- The closing (slide ~66) calls back to this moment.

#### Spectrum
- Show all 7 personas on a horizontal progression: Skeptic → Explorer → Whisperer → Strategist → Operator → Orchestrator → Builder
- "Most people are here" highlights Explorer
- "This deck takes you here" indicates Orchestrator
- Builder is dimmed — visible but explicitly beyond scope
- No descriptions on screen — just the names. Aspirational, not explanatory.

#### Stakes
- 1 billion+ use AI tools monthly (Source: DataReportal 2026)
- < 2% pay for premium (Source: Reuters)
- Technology adoption pattern: PCs → Internet → Smartphones → AI
- $4.4T in annual value, only 31% in full production (Source: McKinsey, ServiceNow)
- "The core skill for AI is talking. You already have it."

**Transition:** *"Let's see what most people get wrong."*

---

### Skeptic → Explorer: "Know Your Tools"

**Job: Demystify AI. Turn confusion into curiosity.**

- The Buzzword Blizzard — wall of jargon, intentionally overwhelming
- Questions surface from the chaos: "What's the difference between ChatGPT and GPT?"
- The AI Stack, Simply: App → Agent → API → LLM. "You use apps. Apps use agents. Agents call APIs. APIs talk to LLMs."
- Who Makes What: OpenAI/GPT/ChatGPT, Anthropic/Claude/Claude.ai, Google/Gemini/Gemini, Microsoft/(OpenAI's)/Copilot
- "The real action is in agents and apps."
- 41% of GitHub code is now AI-generated (Source: Second Talent)
- 19% longer when developers rely on AI without understanding it (Source: Addy Osmani)
- "The gap between using AI and using AI well is massive."
- 10× Microsoft 365 Copilot daily users, year over year (Source: Microsoft Q2 2026)

**Persona crossing:** You were a **Skeptic**. Now you're an **Explorer** — you know what AI is and you're ready to use it.

**Transition:** *"You've got the basics. Now let's give you the skills."*

---

### Explorer → Whisperer: "Talk to AI Properly"

**Job: Transform how the audience communicates with AI. Five techniques, one running example.**

- Section divider: "Prompt Engineering — How to Stop Getting Useless Answers"
- The baseline: "Write me a proposal for improving our onboarding process." → generic output
- Five iterations on the same task, changing only the words:
  1. **Assign a Role** — "You are a senior HR operations consultant..."
  2. **Be Specific** — "Reducing onboarding from 4 to 2 weeks, for the VP of People..."
  3. **One Task at a Time** — Structure with numbered sections instead of kitchen-sink requests
  4. **Power Keywords** — "Be radically honest. Think step by step. Challenge my assumptions."
  5. **Define the Output** — "One-page executive brief with bullet points. Reader has 2 minutes."
- Before/after comparison showing the transformation
- "Same task. Same information. Just better words."
- **Cliffhanger:** "But we never changed what the AI knew."

Sources: CodeSignal, OpenAI, DigitalOcean

**Persona crossing:** You were an **Explorer**. Now you're a **Whisperer** — you know how to talk to AI.

**Transition:** *"You've changed the words. Now let's change the information."*

---

### Whisperer → Strategist: "Feed AI Smarter"

**Job: The big "aha" — it's not about the prompt, it's about what the AI knows. Then introduce skills as persistent context.**

#### Context Engineering
- "Same prompt. Different information. Dramatically different result."
- Side-by-side: "Plausible but generic" vs "Sounds like someone who works here" — same prompt, added context
- Meet your AI colleague (blue tang fish image) — "Brilliant. Helpful. Remembers nothing."
- The attention problem: "Too much. Contradictory. Too broad." — three ways to confuse your AI
  - 57% of orgs have AI agents in production, but 32% cite quality as top barrier (Source: Sombra)
- "Let AI tell you what it needs." — "Before you start, ask me clarifying questions."
  - Source: Anthropic/Claude
- "Not too much. Not too little. The right context at the right time."
  - Source: CIO

#### Skills as Persistent Context
- "You've mastered context. But you're providing it from scratch every time."
- Introduce custom instructions / system prompts / project rules — "Write once, the AI always knows."
- GPS metaphor: Directions every trip (effort every time) vs. GPS that learns (compounds permanently)
- "Custom instructions" = "System prompts" = "Rules" = "Skills" — same concept, many names
- "If your tool has a way to save reusable instructions, use it. That's a skill."
  - Source: CodeConductor

**Persona crossing:** You were a **Whisperer**. Now you're a **Strategist** — you don't just talk to AI well, you've set up its playbook.

**Transition:** *"You talk to AI like a pro. You've set up its playbook. But who's doing all the work? Still you."*

---

### Strategist → Operator: "Let AI Drive"

**Job: Shift from "I use AI" to "AI works for me." Introduce agent autonomy, then address trust.**

- The copy-paste trap: 1. You search → 2. You paste → 3. AI drafts → 4. You apply. "You're using a Ferrari to carry groceries."
- Agent-driven workflow: 1. Agent retrieves → 2. Agent identifies gaps → 3. Agent creates → 4. You review
- "Same colleague. Now she has hands." — eyes, a phone, and a to-do list
- Connections: Web, Email, Docs, Data, Calendar, Custom (MCP referenced inline as "USB-C for AI")
- Without connections vs. with connections — the forgotten budget memo story
- "Trust, but verify." — never trust numbers you didn't provide, verify claims, use AI for drafts not decisions
- "AI is a power tool, not autopilot."
- "When the answer 'feels right' but you can't verify it — that's the most dangerous moment."

**Persona crossing:** You were a **Strategist**. Now you're an **Operator** — you let agents work, you review.

**Transition:** *"You're managing AI well. Time to orchestrate it."*

---

### Operator → Orchestrator: "Orchestrate"

**Job: The payoff. One agent becomes a team. Skills (already known) now apply per-agent in chains.**

- Kitchen brigade: one chef doing everything solo vs. specialized stations (Prep, Grill, Sauce, Plate)
- "The trick isn't making one AI smarter. It's making many work together."
- Chain flow: Research → Draft → Review → You
- "Each agent does one thing. The chain does everything."
- **Skills per agent** (brief — the audience already knows what skills are): "You already set up skills for yourself. Now each agent gets its own." Research Agent + Research Standards, Draft Agent + Leadership Proposals, Review Agent + Compliance Policy.
- "Skills compound. The brigade gets smarter every time."
- 1.5 hrs of you being the bottleneck vs. 15 min of judgment — the part only humans can do
- "Same proposal. The chain gets smarter every time. Your feedback becomes skills. She won't remember, but the skills will."

**Persona crossing:** You were an **Operator**. Now you're an **Orchestrator**.

---

### Closing: Full Circle

- Breather: "Let's come back to where we started."
- "Remember the 45-minute summary?"
- "Two minutes. That's the trick."
- "The secret was never in the AI." / "Now go try it — one task, this week."

**Speaker notes for callback:** They were an Explorer who became an Orchestrator. They learned to whisper (prompt engineering). They became a strategist (context + skills). They let agents operate. They orchestrated the brigade.

---

## Source References

| # | Source | URL | Used In |
|---|--------|-----|---------|
| 1 | Digital 2026: more than 1 billion people use AI - DataReportal | https://datareportal.com/reports/digital-2026-one-billion-people-using-ai | Opening |
| 1b | AI investment bubble inflated by trio of dilemmas - Reuters | https://www.reuters.com/commentary/breakingviews/ai-investment-bubble-inflated-by-trio-dilemmas-2025-09-25/ | Opening |
| 2 | AI and Productivity Growth - Federal Reserve Bank of St. Louis | https://www.stlouisfed.org/on-the-economy/2024/apr/ai-productivity-growth-evidence-historical-development-other-technologies | Opening |
| 3 | Rising Speed of Technological Adoption - Visual Capitalist | https://www.visualcapitalist.com/rising-speed-technological-adoption/ | Opening |
| 4 | Generative AI could raise global GDP by 7% - Goldman Sachs | https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent | Opening |
| 5 | 80% of Fortune 500 use active AI agents - Microsoft Security Blog | https://www.microsoft.com/en-us/security/blog/2026/02/10/80-of-fortune-500-use-active-ai-agents-observability-governance-and-security-shape-the-new-frontier/ | Opening |
| 6 | The economic potential of generative AI - McKinsey | https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier | Opening |
| 7 | Enterprise AI Maturity Index 2025 - ServiceNow | https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/white-paper/wp-enterprise-ai-maturity-index-2025.pdf | Opening |
| 8 | AI Coding Assistant Statistics 2025 - Second Talent | https://www.secondtalent.com/resources/ai-coding-assistant-statistics/ | Explorer |
| 9 | The reality of AI-Assisted software engineering productivity - Addy Osmani | https://addyo.substack.com/p/the-reality-of-ai-assisted-software | Explorer |
| 10 | Microsoft Q2 2026 - Neowin | https://www.neowin.net/news/microsoft-q2-2026-key-figures-include-copilot-windows-11-and-record-xbox-growth/ | Explorer |
| 11 | Prompt Engineering Best Practices 2025 - CodeSignal | https://codesignal.com/blog/prompt-engineering-best-practices-2025/ | Whisperer |
| 12 | OpenAI Best Practices for Prompt Engineering | https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api | Whisperer |
| 13 | Prompt Engineering Best Practices - DigitalOcean | https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices | Whisperer |
| 14 | Context Engineering vs Prompt Engineering - Elastic | https://www.elastic.co/search-labs/blog/context-engineering-vs-prompt-engineering | Strategist |
| 15 | Context Engineering is the New Prompt Engineering - KDnuggets | https://www.kdnuggets.com/context-engineering-is-the-new-prompt-engineering | Strategist |
| 16 | AI Context Engineering Guide - Sombra | https://sombrainc.com/blog/ai-context-engineering-guide | Strategist |
| 17 | Prompt Engineering Best Practices - Anthropic/Claude | https://claude.com/blog/best-practices-for-prompt-engineering | Strategist |
| 18 | Context Engineering: Improving AI by Moving Beyond the Prompt - CIO | https://www.cio.com/article/4080592/context-engineering-improving-ai-by-moving-beyond-the-prompt.html | Strategist |
| 19 | Context Engineering Complete Guide - CodeConductor | https://codeconductor.ai/blog/context-engineering/ | Strategist |

## Appendix: MCP Deep-Dive (optional / for technical audiences)

Referenced inline in the Operator section (Connections slide) as "USB-C for AI." Full detail preserved for presenter Q&A:

- Before MCP: N tools × M sources = explosion of custom integrations
- MCP: one standard protocol. Build a connector once, it works with every AI tool.
- Current state: Linux Foundation, 10K+ servers, adopted by ChatGPT/Cursor/Gemini/VS Code
  - Sources: Anthropic; Pento; Wikipedia; The New Stack

## Notes

- **Slide count:** ~68 slides (billboard design). Each slide passes the 3-second test. Detail lives in speaker notes.
- **Persona system:** Seven personas, five crossings. No level numbers. Each section IS one crossing. Builder shown on spectrum but not covered.
- **Key structural change from v2:** Skills relocated from Orchestrator to Strategist section. Skills are introduced as persistent single-agent context (custom instructions), then referenced in Orchestrator as "each agent gets its own." This makes Orchestrator lighter and skills more accessible.
- **Running example thread:** Onboarding proposal flows through: Whisperer (prompt iterations) → Strategist (context proof, AI asks questions) → Operator (copy-paste trap → agent, with connections) → Orchestrator (manual vs chained, 1.5hrs vs 15min).
- **Dory/AI colleague analogy:** Blue tang fish image (AI-generated, copyright-clean). On-screen references use "your AI colleague" and "she" — "Dory" only in speaker notes for presenter context. Touchpoints: Strategist (introduction + attention problem), Operator (same colleague + connections + trust), Orchestrator (kitchen brigade + skills compound).
- **Billboard design rules:** Max 15 words on screen, 28pt+ font, 50%+ whitespace, no cards/boxes (except Wrong/Right comparisons), sources as subtle 11pt bottom-right citations on stat slides.
- **Closing:** No toolkit table, no 30-day challenge, no spectrum recap. Straight from Orchestrator climax → breather → callback → punchline → CTA. Tight emotional landing.
