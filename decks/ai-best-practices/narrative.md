# Getting Agents to Give Up Their Secrets - Narrative (v2)

> **Next step:** Use **/deck-flow:craft** to translate this narrative into a slide-by-slide plan.

## Overview

- **Audience**: Mixed roles, all levels - engineers, PMs, designers, managers, execs at a large company. Varying technical depth. Must be accessible without being patronizing to technical folks.
- **Purpose**: Behavior change - "I've been using AI wrong, I need to change my approach." Also serves as a standalone reference document (readable without a presenter) and source-of-truth for future targeted workshop/presentation decks.
- **Key message**: You're already capable of using AI powerfully - you just need to learn how. This deck levels you up from confused to in control.
- **Framework**: Four personas (Skeptic → Questioner → Viber → AI-First) introduced in the opening as self-identification milestones. Six teaching levels (0-5) are the steps that move you between personas. The audience identifies *where they are*, then the levels show them *how to get to the next persona*. The full circle slide bridges back: "You walked in as a Questioner. You're leaving as AI-First."
- **Tone**: Playful and fun throughout. Serious content, not-serious delivery. Memorable analogies (Dory), provocative framings, and practical examples over corporate jargon.
- **Format**: Long-form continuous deck (~50 slides), self-contained and readable without a presenter. All sources cited for stats/claims.

## What Changed (v2)

This version restructures Levels 3-5 to improve narrative flow. The content is the same; the order and framing changed.

**Problems with v1:**
- Slide 22 (Dory analogy) arrives before the reader has any reason to care about context - feels unmotivated
- Skills (27-31) are introduced as a standalone concept before agents or chains exist - the reader can't see why they matter
- Guardrails (32-33) come before Level 4 agents, but the unease they address hasn't been created yet
- The "Levels" (3: context, 4: agents, 5: chains) feel like separate topics instead of one building narrative

**v2 fixes:**
- **Show, then explain:** Prove context matters first (same prompt, different context), THEN introduce Dory as the metaphor for why
- **Agents immediately after context:** Once the reader understands context, show them what happens when AI manages its own context (agents + connections)
- **Guardrails after autonomy:** Address trust concerns at the moment the reader feels them - right after handing AI the keys
- **Skills as chain playbooks:** Introduce skills WITHIN the chaining section as "how you program each Dory in the kitchen brigade" - dramatically more powerful framing than standalone concept
- **MCP demoted to inline mention:** The dedicated MCP slide was too technical for a mixed audience. The buzzword is now referenced in the Connections slide; full detail preserved in appendix for Q&A
- **Personas as milestones, levels as steps:** The four personas (Skeptic → Questioner → Viber → AI-First) are now explicitly framed as journey milestones the audience self-identifies with. The six levels are the steps that move you between them. Section dividers and the full circle slide bridge both systems.

---

## Narrative Arc

### Level 0: "Where Are You?" (Opening + Stakes)

**Slides 1-6 | Unchanged from v1.**

The opening hook, adoption spectrum, historical pattern, current moment, and barrier-to-entry slides remain identical. These establish urgency, self-awareness, and the leveling-up framework.

- Slide 1: Title + Emotional Hook (45-minute ChatGPT story)
- Slide 2: Where Are You on the Spectrum? (Skeptic → Questioner → Viber → AI-First). These four personas are the *milestones* — the deck's levels are the steps that move you between them. "Find yourself. By the end, we'll have moved you to the right."
- Slide 3: Most People Are Still in the Shallow End (1B+ users, <2% pay)
- Slide 4: We've Seen This Movie Before (PCs → Internet → Smartphones → AI)
- Slide 5: The AI Moment Is Now (Fortune 500 stats, opportunity gap)
- Slide 6: The Barrier to Entry Is a Conversation

**Transition:** *"Level 1: Let's start by understanding what we're actually dealing with..."*

---

### Level 1: "Know Your Tools" (AI Demystified)

**Slides 7-13 | Unchanged from v1.**

Buzzword blizzard, AI stack, company landscape, where the real action is, and the engineering-first story remain identical.

- Slide 7: The Buzzword Blizzard
- Slide 8: Let's Answer Some of These
- Slide 9: The AI Stack, Simply
- Slide 10: The Company Landscape
- Slide 11: Where the Real Action Is
- Slide 12: Software Engineering Was First
- Slide 13: Your Job Is Next

**Persona milestone:** If you were a **Skeptic**, you're now a **Questioner** — you know what AI is and you're ready to use it.

**Transition:** *"You know what the tools are. Now let's learn how to actually talk to them..."*

---

### Level 2: "Talk to AI Properly" (Prompt Engineering)

**Slides 14-21 | Unchanged from v1.**

The running example (onboarding proposal) through five prompt iterations, ending with the before/after comparison. Every iteration changes wording only - never changes what the AI knows.

- Slide 14: Section Header ("How to Stop Getting Useless Answers")
- Slide 15: The Task (baseline vague prompt)
- Slide 16: Iteration 1 - Assign a Role
- Slide 17: Iteration 2 - Be Specific
- Slide 18: Iteration 3 - One Task at a Time
- Slide 19: Iteration 4 - Power Keywords
- Slide 20: Iteration 5 - Define the Output
- Slide 21: The 5x Prompt (before/after comparison)

**Transition:** *"Every iteration above kept the same information and changed the words. But the biggest unlock isn't how you ask - it's what the AI knows when it answers..."*

---

### Level 3: "Feed AI Smarter" (Context Engineering)

**5 slides | Job: The big "aha" - it's not about the prompt, it's about what the AI knows when it answers.**

**Key change from v1:** This section now LEADS with the proof (same prompt, different context) before introducing the Dory metaphor. The reader sees the dramatic quality jump first, then gets the mental model for why. This section is also shorter - skills have been moved to Level 5 where they belong.

#### Slide 22: "Same Prompt, Different Context" (was slide 24)

- Return to the same onboarding proposal from Level 2. Same well-structured prompt from Slide 20. But now add background information: current onboarding stats, company size, existing pain points, what's been tried before, relevant policies.
- Show the dramatic jump in output quality. The proposal goes from "plausible but generic" to "sounds like it was written by someone who works here."
- **Lesson:** The biggest quality leap doesn't come from rewording - it comes from giving the AI the information it needs to actually be relevant.
  - Source: [Context Engineering vs Prompt Engineering - Elastic](https://www.elastic.co/search-labs/blog/context-engineering-vs-prompt-engineering)
  - Source: [Context Engineering is the New Prompt Engineering - KDnuggets](https://www.kdnuggets.com/context-engineering-is-the-new-prompt-engineering)

#### Slide 23: "Meet Your AI Colleague" (was slide 22)

- Dory from Finding Nemo reference - NOW the metaphor has a reason. The reader just saw what context does; now they get the mental model for why.
- "Your AI is like Dory: incredibly smart, genuinely wants to help, remembers absolutely nothing between conversations. Every chat starts from scratch."
- "In Level 2, we got better at *asking*. But Dory's biggest problem isn't that she doesn't understand what you're saying - it's that she doesn't know what you know."
- The proof from slide 22 makes this land: the reader already SAW context transform output. Dory explains WHY.

#### Slide 24: "The Attention Problem" (was slide 23)

- Too much context → Dory gets lost (buries important stuff in noise)
- Contradictory information → Dory gets confused (tries to satisfy everything, satisfies nothing)
- Broad instructions → Dory wanders off course (loses focus partway through)
- Stat: 57% of orgs have AI agents in production, but 32% cite quality as top barrier - most failures traced to poor context management, not LLM capability.
  - Source: [AI Context Engineering Guide - Sombra](https://sombrainc.com/blog/ai-context-engineering-guide)
- "The problem isn't that AI is dumb. The problem is that we're feeding it wrong."

#### Slide 25: "Let AI Tell You What It Needs" (unchanged)

- Add to the prompt: "Before you start, ask me clarifying questions about anything you'd need to know to write an excellent proposal."
- Show the AI surfacing things the user hadn't considered: budget constraints? timeline? stakeholder concerns?
- The AI is essentially doing context engineering for you - identifying the gaps in its own knowledge.
- **Lesson:** This is the single highest-leverage technique. Let AI close its own context gaps instead of guessing what it needs.
  - Source: [Prompt Engineering Best Practices - Anthropic/Claude](https://claude.com/blog/best-practices-for-prompt-engineering)

#### Slide 26: "The Goldilocks Principle" (unchanged)

- Not too much, not too little - the right context at the right time.
- Bridges the gap: slide 24 showed the attention problem (too much/wrong context fails), slide 25 showed AI can help identify what it needs. This slide crystallizes the principle.
- "Prompt engineering tweaks the question. Context engineering builds the knowledge base."
  - Source: [Context Engineering: Improving AI by Moving Beyond the Prompt - CIO](https://www.cio.com/article/4080592/context-engineering-improving-ai-by-moving-beyond-the-prompt.html)

**Persona milestone:** You've outgrown **Questioner**. You prompt well, you understand context, you get good results. You're a **Viber** — but you're still doing all the work manually.

**Transition:** *"So you know what to feed AI. But who's doing the feeding? Right now, it's still you - copy-pasting, finding files, assembling context by hand. What if Dory could do that herself?"*

---

### Level 4: "Let AI Drive" (Agents, Connections & Trust)

**6 slides | Job: Shift the mental model from "I use AI" to "AI works for me." Introduces agent autonomy, then immediately addresses the trust concerns that autonomy creates.**

**Key change from v1:** Guardrails (Trust But Verify, Hands on Wheel) now come at the END of this section instead of at the end of Level 3. This is more emotionally honest - the reader should feel uneasy about handing AI the keys BEFORE we address trust. In v1, we addressed trust before the reader had any reason to be uneasy.

#### Slide 27: "The Copy-Paste Trap" (was slide 34)

- Visual of the manual workflow most people use today:
  1. Human decides which documents/data to provide
  2. Human copies/pastes into AI chat
  3. Human reads the output
  4. Human manually applies it to their situation
- Problems:
  - Time-consuming - you're the bottleneck at every step
  - You don't know what context the AI actually needs - you either overwhelm or starve it
  - You're doing the grunt work while the AI waits
- "You're using a Ferrari to carry groceries."

#### Slide 28: "Hand Dory the Keys" (was slide 35)

- Same task, but the agent drives:
  - Agent retrieves its own context (reads documents, searches for information)
  - Agent identifies gaps and goes back for more when needed
  - Agent creates/edits outputs directly
  - You review and approve instead of operate
- "Same Dory. Same memory issues. But now she has hands, eyes, and a to-do list."

#### Slide 29: "Connections Are Everything" (was slide 36)

- An agent is only as useful as what it can reach. Each connection = new capability:
  - Web search / fetch → can research and fact-check
  - Email access → can read context and draft responses
  - Document access → can reference policies, templates, past work
  - Database access → can query real data
  - Calendar access → can understand scheduling context
  - Custom connections → anything you can imagine (via an emerging standard called MCP — think "USB-C for AI." One connector works with every tool.)
- "Think of connections like giving Dory a phone, a filing cabinet, and a library card."

#### Slide 30: "The Proposal — With Connections" (was slide 37)

- Back to the running example:
  - *Without connections:* You copy-paste the HR handbook, the latest survey results, and the team structure doc into the chat. You forget the budget memo. The proposal misses cost constraints entirely.
  - *With connections:* The agent reads the HR system directly, pulls survey data, finds the budget memo you forgot about, and flags a policy constraint you didn't know existed.
- "The proposal is better than what you'd have produced - because the agent found context you wouldn't have thought to provide."

#### Slide 31: "Trust, But Verify" (was slide 32)

- **NOW this slide lands.** The reader just watched us hand AI the keys to documents, databases, and workflows. They should be feeling: "Wait, can I trust it with all that?"
- Three practical rules:
  - Never trust numbers you didn't provide
  - Verify claims against sources
  - Use AI for drafts, not decisions
- "Dory is brilliant and helpful. Dory also sometimes remembers things that never happened. Love Dory. Fact-check Dory."

#### Slide 32: "When to Keep Your Hands on the Wheel" (was slide 33)

- Quick list of when to be extra cautious:
  - Sensitive/confidential data — only use approved/enterprise tools
  - Final legal/compliance language — AI drafts, humans approve
  - Anything where being wrong has serious consequences
  - When the AI's answer "feels right" but you can't verify it — the most dangerous moment
- "AI is a power tool, not autopilot. Surgeons trust scalpels. They still look where they cut."

**Persona milestone:** You're no longer a **Viber** — you've let go of the wheel. You're approaching **AI-First**, but you're still working with a single agent. One last leap.

**Transition:** *"One agent doing one task is powerful. But real work has multiple steps. What if you had a whole team of Dorys?"*

---

### Level 5: "Orchestrate" (Chains & Skills)

**8 slides for core concepts, then running examples and full circle | Job: The payoff. One chef becomes a kitchen brigade. Skills are introduced HERE as the mechanism that makes each chef excellent - the specialized instruction set each Dory in the brigade receives.**

**Key change from v1:** Skills (previously slides 27-31 in Level 3) are now introduced WITHIN the chaining section. Instead of "here's a standalone concept called skills," the framing becomes: "each Dory in the kitchen brigade gets a specialized playbook - that's what skills are." This is dramatically more motivating because the reader now understands WHY skills exist (to program agents in a chain) rather than learning skills in the abstract.

#### Slide 33: "One Chef vs. A Kitchen Brigade" (was slide 39)

- Level 4 gave you one great chef (agent) who handles a task end-to-end. That works for single tasks.
- But what about complex, multi-step work? One chef doing a 10-course dinner alone will burn out, make mistakes, and forget the appetizer by the time they're plating dessert.
- **Callback to Dory:** A classroom of Dorys, each doing one focused step? Each fresh, focused, brilliant at one thing.
- "The trick isn't making one AI smarter. It's making many AIs work together."

#### Slide 34: "Prompt Chaining" (was slide 40)

- Back to the onboarding proposal. Instead of one agent doing everything, break it into focused steps:
  - **Agent 1 (Research):** reads HR handbook, pulls survey data, finds budget memo, gathers onboarding stats. Output: structured brief.
  - **Agent 2 (Draft):** receives only the brief (not every raw document). Writes the proposal using the distilled context.
  - **Agent 3 (Review):** receives the draft + company policies. Checks compliance, flags gaps, suggests improvements.
  - **You:** review, judge, approve.
- Each agent has its own focused prompt and only the context it needs.
- Key principles:
  - Each link in the chain has a single, clear job
  - Context is filtered between steps (not everything passes through)
  - Quality compounds - each step builds on verified output
- **Practical smell test:** If your initial prompt and context are getting long and complex, that's a signal you need a "Phase 0" — an agent whose only job is to figure out what the rest of the chain needs. The complexity of your setup is a leading indicator that you should be chaining.

#### Slide 35: "The Chain Rule" (was slide 41)

- "Break big tasks into focused steps. Pass results forward. Filter context between each."
- "Each agent does one thing well. The chain does everything well."
- Distilled principle. The "write this down" moment.

#### Slide 36: "Skills: Every Chef's Playbook" (was slide 27, reframed)

- **New framing:** Now that the reader understands chains and the kitchen brigade, skills are introduced as the answer to: "How does each Dory in the brigade know what to do?"
- **What skills are:** Predefined rules, instructions, templates, and context packages injected into the AI's context only when relevant. Think of them as the specialized training manual each chef at each station receives.
- **The connection to chains:** In a chain, each agent has a focused job. Skills are what make that job excellent. Agent 1 (Research) gets the "Research Standards" skill. Agent 3 (Review) gets the "Leadership Proposals" skill and the "Compliance Policy" skill.
- Write once, use forever. Every time the chain runs, each agent already knows its specialty.
- **Real impact:** Organizations investing in context architecture see 50% faster responses and 40% higher quality outputs.
  - Source: [Context Engineering Complete Guide - CodeConductor](https://codeconductor.ai/blog/context-engineering/)

#### Slide 37: "Skills in Action" (was slide 28)

- Back to the onboarding chain — now with skills loaded at each station:
  - **Agent 1 (Research)** gets the "Research Standards" skill: where to look, what data to prioritize, how to structure the brief. It already knows the company's data sources and what a good research output looks like.
  - **Agent 2 (Draft)** gets the "Leadership Proposals" skill: the VP's preferred format, tone, level of detail, how to frame costs. Every proposal comes out sounding like it was written for this audience.
  - **Agent 3 (Review)** gets the "Compliance Policy" skill: regulations, required disclaimers, approval workflows. It catches policy gaps you didn't know existed.
- Without skills, each agent starts from scratch every time. With skills, each agent already knows its specialty before the chain even begins.
- "These aren't abstract — they're the instruction sets that make each station in the kitchen brigade excellent."

#### Slide 38: "Why Skills Change Everything" (was slide 29)

- Four properties:
  - **Reusable:** write once, use forever
  - **Consistent:** every interaction gets the same quality context
  - **Scalable:** works for 1 person or 10,000
  - **Focused:** only loads what's relevant, keeping each Dory's attention on track
- "And they compound. Your feedback from each chain run becomes new skills. The brigade gets smarter every time."

#### Slide 39: "Same Concept, Many Names" (was slide 30)

- "Custom instructions" = "System prompts" = "Rules" = "Skills"
- Whether triggered by the human, the app, or the AI itself differs across tools. The principle is identical.
- "If your tool has a way to save reusable instructions, use it. That's a skill."

#### Slide 40: "GPS, Not Directions" (was slide 31, reframed)

- The metaphor, updated for the new context:
  - Prompt engineering = giving directions for each individual trip
  - Context engineering = programming a GPS with your home, office, preferences
  - Skills = the GPS's saved locations and route preferences — AND the instruction manual for each chef in your kitchen brigade
  - One requires effort every time. The other gets smarter the more you invest.
- "Level 2 made you better at asking. Level 3 made AI better at understanding. Level 4 let AI drive. Level 5 put a whole team on the road — and skills are the map each driver follows."

**Transition:** *"Let's see the full journey for our running example..."*

---

### The Payoff (Running Examples + Full Circle)

**Slides 41-43 | Job: Show the complete journey and bring the spectrum full circle.**

**Key change from v1:** "Different Department, Same Pattern" slides removed — the running example already proves the pattern end-to-end; a second example this late delays the payoff. The skills-compounding beat in slide 42 now LANDS because the reader already understands what skills are and how they fit into chains.

#### Slides 41-42: "The Onboarding Proposal, End-to-End"

- **Manual flow (slide 41):** The 1.5-hour human-bottleneck workflow the audience has watched evolve through the entire deck.
- **Chained flow (slide 42):** Agent 1 (Research) → Agent 2 (Draft) → Agent 3 (Review) → You (Judgment). 15 minutes.
- **Skills compounding beat:** After reviewing, your feedback becomes skills. The VP's preferred format becomes a "Leadership Proposals" skill. The compliance gap Agent 3 missed gets added to "Compliance Policy." Next time the chain runs, it already knows. Each Dory in the brigade gets a better playbook.

#### Slide 43: "From Asking to Orchestrating"

- Return to the spectrum from slide 2. Show the personas as milestones and the levels as the steps between them:
  - **AI Skeptic** → *Levels 0-1 got you past this:* you now know what AI is and why it matters
  - **AI Questioner** → *Levels 2-3 got you past this:* you prompt well, you understand context, you get good results
  - **AI Viber** → *Level 4 got you past this:* you let agents drive, you connected them to your world
  - **AI-First** → *Level 5 brought you here:* you orchestrate chains, skills compound, humans judge
- "You walked in as a Questioner. This deck just showed you the path to AI-First."

**Transition:** *"Now let's make it real..."*

---

### "Level Up" (Your Toolkit & First Steps)

**Slides 44-45 | Unchanged from v1.**

- Slide 44: Your AI Toolkit (tools by category)
- Slide 45: The 30-Day Challenge (one task, four weeks, four persona crossings). Week 1: become a better Questioner (prompting). Week 2: cross into Viber (context). Week 3: start going AI-First (agents). Week 4: full AI-First (chains + skills).

---

### Closing

**Slides 46-47 | Unchanged from v1.**

- Slide 46: Full Circle (callback to the 45-minute ChatGPT person — they were a Questioner who became AI-First)
- Slide 47: Close ("The secret was never in the AI. It was in knowing how to work with it.")

---

## Source References

All sources from v1 remain valid. No new sources added. Level assignments updated to reflect new slide positions:

| # | Source | URL | Used In |
|---|--------|-----|---------|
| 1 | Digital 2026: more than 1 billion people use AI - DataReportal | https://datareportal.com/reports/digital-2026-one-billion-people-using-ai | Level 0 |
| 2 | AI and Productivity Growth - Federal Reserve Bank of St. Louis | https://www.stlouisfed.org/on-the-economy/2024/apr/ai-productivity-growth-evidence-historical-development-other-technologies | Level 0 |
| 3 | Rising Speed of Technological Adoption - Visual Capitalist | https://www.visualcapitalist.com/rising-speed-technological-adoption/ | Level 0 |
| 4 | Digital technologies and productivity - ScienceDirect | https://www.sciencedirect.com/science/article/pii/S026499932300336X | Level 0 |
| 5 | Five Computers - De Programmatica Ipsum | https://deprogrammaticaipsum.com/five-computers/ | Level 0 |
| 6 | Generative AI could raise global GDP by 7% - Goldman Sachs | https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent | Level 0 |
| 7 | 80% of Fortune 500 use active AI agents - Microsoft Security Blog | https://www.microsoft.com/en-us/security/blog/2026/02/10/80-of-fortune-500-use-active-ai-agents-observability-governance-and-security-shape-the-new-frontier/ | Level 0 |
| 8 | The economic potential of generative AI - McKinsey | https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier | Level 0 |
| 9 | Enterprise AI Maturity Index 2025 - ServiceNow | https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/white-paper/wp-enterprise-ai-maturity-index-2025.pdf | Level 0 |
| 10 | Vibe Coding in 2025 - Plausible Futures | https://plausiblefutures.substack.com/p/vibe-coding-in-2025-a-technical-guide | Level 1 |
| 11 | AI Coding Assistant Statistics 2025 - Second Talent | https://www.secondtalent.com/resources/ai-coding-assistant-statistics/ | Level 1 |
| 12 | Top 10 Vibe Coding Tools 2026 - Nucamp | https://www.nucamp.co/blog/top-10-vibe-coding-tools-in-2026-cursor-copilot-claude-code-more | Level 1 |
| 13 | The reality of AI-Assisted software engineering productivity - Addy Osmani | https://addyo.substack.com/p/the-reality-of-ai-assisted-software | Level 1 |
| 14 | Microsoft Copilot Statistics - ElectroIQ | https://electroiq.com/stats/microsoft-copilot-statistics/ | Level 1 |
| 15 | Microsoft 2025 Annual Report | https://www.microsoft.com/investor/reports/ar25/index.html | Level 1 |
| 16 | Microsoft Copilot Revenue and Usage Statistics 2026 - Business of Apps | https://www.businessofapps.com/data/microsoft-copilot-statistics/ | Level 1 |
| 17 | Microsoft Q2 2026 - Neowin | https://www.neowin.net/news/microsoft-q2-2026-key-figures-include-copilot-windows-11-and-record-xbox-growth/ | Level 1 |
| 18 | GitHub Copilot Statistics - Second Talent | https://www.secondtalent.com/resources/github-copilot-statistics/ | Level 1 |
| 19 | Prompt Engineering Best Practices 2025 - CodeSignal | https://codesignal.com/blog/prompt-engineering-best-practices-2025/ | Level 2 |
| 20 | OpenAI Best Practices for Prompt Engineering | https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api | Level 2 |
| 21 | Prompt Engineering Best Practices - DigitalOcean | https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices | Level 2 |
| 22 | Context Engineering vs Prompt Engineering - Elastic | https://www.elastic.co/search-labs/blog/context-engineering-vs-prompt-engineering | Level 3 |
| 23 | Context Engineering is the New Prompt Engineering - KDnuggets | https://www.kdnuggets.com/context-engineering-is-the-new-prompt-engineering | Level 3 |
| 24 | AI Context Engineering Guide - Sombra | https://sombrainc.com/blog/ai-context-engineering-guide | Level 3 |
| 25 | Prompt Engineering Best Practices - Anthropic/Claude | https://claude.com/blog/best-practices-for-prompt-engineering | Level 3 |
| 26 | Context Engineering: Improving AI by Moving Beyond the Prompt - CIO | https://www.cio.com/article/4080592/context-engineering-improving-ai-by-moving-beyond-the-prompt.html | Level 3 |
| 27 | Context Engineering Complete Guide - CodeConductor | https://codeconductor.ai/blog/context-engineering/ | Level 5 |
| 28 | Donating MCP to Agentic AI Foundation - Anthropic | https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation | Appendix |
| 29 | A Year of MCP - Pento | https://www.pento.ai/blog/a-year-of-mcp-2025-review | Appendix |
| 30 | Model Context Protocol - Wikipedia | https://en.wikipedia.org/wiki/Model_Context_Protocol | Appendix |
| 31 | Why the Model Context Protocol Won - The New Stack | https://thenewstack.io/why-the-model-context-protocol-won/ | Appendix |

---

## Appendix: MCP Deep-Dive (optional / for technical audiences)

Removed from the main flow (was slide 31 "MCP: USB-C for AI") — too technical for a mixed audience. The MCP buzzword is now referenced inline in the Connections slide (slide 29). This appendix preserves the detail for presenter Q&A or a follow-up technical session.

- Before MCP: every AI tool needed a custom connector to every data source. N tools × M sources = explosion of custom integrations.
- MCP: one standard protocol. Build a connector once, it works with every AI tool.
- "USB-C ended the cable drawer problem. MCP is doing the same for AI connections."
- Current state: Released Nov 2024, Linux Foundation, 10K+ servers, adopted by ChatGPT/Cursor/Gemini/VS Code, 97M+ monthly SDK downloads.
  - Sources: Anthropic; Pento; Wikipedia; The New Stack

---

## Notes

- **Slide count:** 47 slides (was 50). Removed: dedicated MCP slide (folded into Connections as inline mention), "Different Department, Same Pattern" x2 (redundant — running example already proves the pattern).
- **Running example thread:** The onboarding proposal still flows naturally: Level 2 (prompt iterations) → Level 3 slide 22 (context proof) → Level 3 slide 25 (AI asks questions) → Level 4 slides 27-28 (copy-paste trap → agent) → Level 4 slide 30 (proposal with connections) → Level 5 slides 41-42 (manual vs chained).
- **Dory analogy usage:** Now has five touchpoints: Level 3 (introduction + attention problem), Level 4 (Hand Dory the keys + connections + guardrails), Level 5 (kitchen brigade of Dorys + skills as each Dory's playbook).
- **Skills reframing:** The critical narrative change. In v1, skills were introduced abstractly in Level 3 before the reader understood agents or chains. In v2, skills arrive in Level 5 as "the instruction manual each chef in the kitchen brigade receives." This means the reader already knows what chains are, why agents need focus, and how context affects quality — making skills feel essential rather than theoretical.
- **Guardrails placement:** Moved from end of Level 3 to end of Level 4. The reader now experiences: "Here's how to let AI drive" → "Here's how to connect it to everything" → "Wait, can I trust it?" → "Yes, with these guardrails." Much more emotionally honest than addressing trust before the reader has reason to worry.
- **Level boundaries:** Level 3 is now 5 slides (was 12). Level 4 is now 6 slides (was 5 in v1). Level 5 is now 8 core concept slides + 3 payoff slides. The total across Levels 3-5 is now 17 slides (was 20).
- **Personas as milestones:** Four personas (Skeptic → Questioner → Viber → AI-First) are identity milestones the audience self-identifies with. Six levels (0-5) are the teaching steps that move you between personas. Mapping: Levels 0-1 cross Skeptic → Questioner. Levels 2-3 cross Questioner → Viber. Level 4 crosses Viber → approaching AI-First. Level 5 arrives at AI-First. Section dividers should reference which persona crossing is happening.
- **Section divider slides:** Need updating in the deck plan. Should now reference persona crossings: Level 2 divider teases "becoming a better Questioner," Level 4 divider teases "crossing from Viber to AI-First," etc.
- **30-Day Challenge (slide 45):** Now framed as persona crossings: Week 1 = better Questioner (prompting), Week 2 = cross into Viber (context), Week 3 = start going AI-First (agents), Week 4 = full AI-First (chains + skills).
- **Closing callback (slide 46):** "They were a Questioner who spent 45 minutes chatting with ChatGPT. They learned to prompt (Levels 2-3, became a Viber). They let the agent drive (Level 4). They orchestrated a brigade (Level 5). They became AI-First."
