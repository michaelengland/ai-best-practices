# Getting Agents to Give Up Their Secrets - Narrative

## Overview

- **Audience**: Mixed roles, all levels - engineers, PMs, designers, managers, execs at a large company. Varying technical depth. Must be accessible without being patronizing to technical folks.
- **Purpose**: Behavior change - "I've been using AI wrong, I need to change my approach." Also serves as a standalone reference document (readable without a presenter) and source-of-truth for future targeted workshop/presentation decks.
- **Key message**: You're already capable of using AI powerfully - you just need to learn how. This deck levels you up from confused to in control.
- **Framework**: Progressive leveling-up journey (Level 0 -> Level 5 -> Level Up). Each section corresponds to a level on the AI adoption spectrum introduced in the opening. The reader literally levels up through the deck.
- **Tone**: Playful and fun throughout. Serious content, not-serious delivery. Memorable analogies (Dory), provocative framings, and practical examples over corporate jargon.
- **Format**: Long-form continuous deck (~50-60 slides), self-contained and readable without a presenter. All sources cited for stats/claims.

---

## Narrative Arc

### Level 0: "Where Are You?" (Opening + Stakes)

**~5-6 slides | Job: Create urgency and self-awareness. Make it personal.**

#### Slide 1: Title + Emotional Hook

- **"Getting Agents to Give Up Their Secrets"**
- Subtitle: *A guide to AI that actually works - from confused to in control*
- The title works as a destination promise: by the end, you'll know how to get agents to work for you. The journey there is the deck.
- **Open with a human moment** before anything else. Example framing: "Last month, I watched someone spend 45 minutes going back and forth with ChatGPT trying to write a one-page summary. Copy, paste, 'no that's not right', copy, paste, 'closer but...', copy, paste. The same task took 2 minutes once they knew the trick. This deck is about the trick."
- The hook should be a specific, relatable frustration that makes the audience think "that's me." It sets the emotional stakes before the intellectual framework arrives.

#### Slides 2-3: The AI Adoption Spectrum

- Visual showing levels of AI adoption (individual-focused, not organizational):
  - **AI Skeptic** - afraid of it or refuses to engage
  - **AI Questioner** - has ChatGPT, asks it questions like a search engine
  - **AI Viber** - uses AI tools for tasks, then fixes/applies output by hand
  - **AI-First** - everything through AI, focused on context, agents, and workflows
- Not judgmental, just honest. Most people will self-identify as level 1-2.
- Note: Existing maturity models (MITRE, Gartner) are organizational, not individual-focused. This individual-level framing is intentionally novel.
- Stat: AI tools now reach 378 million users globally, but only 3% pay for premium services - most are still in the shallow end.
  - Source: [AI Adoption Statistics 2026 - Netguru](https://www.netguru.com/blog/ai-adoption-statistics)
- The deck promises to move them to the right on this spectrum.

#### Slide 4: "We've Seen This Movie Before"

- Timeline visual: PCs (1980s) -> Internet (1990s) -> Smartphones (2010s) -> AI (now)
- Each era had skeptics. Each era punished those who waited.
- **One key stat per era** (don't overload - let the visual do the work):
  - PCs: US productivity growth doubled during adoption (0.6% -> 1.0%/year)
    - Source: [AI and Productivity Growth - Federal Reserve Bank of St. Louis](https://www.stlouisfed.org/on-the-economy/2024/apr/ai-productivity-growth-evidence-historical-development-other-technologies)
  - Internet: Global business online grew from ~7% to ~30%
    - Source: [Rising Speed of Technological Adoption - Visual Capitalist](https://www.visualcapitalist.com/rising-speed-technological-adoption/)
  - AI: Goldman Sachs projects $7 trillion (7%) added to global GDP over 10 years
    - Source: [Generative AI could raise global GDP by 7% - Goldman Sachs](https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent)
- Playful angle: The famous "world market for maybe five computers" and "no reason for home computers" quotes are actually debunked myths - even the skeptic quotes about technology were wrong.
  - Source: [Five Computers - De Programmatica Ipsum](https://deprogrammaticaipsum.com/five-computers/)

#### Slide 5: "The AI Moment Is Now"

- Focus on the *current* moment, not more historical stats:
- 80% of Fortune 500 now use active AI agents
  - Source: [Microsoft Security Blog - Feb 2026](https://www.microsoft.com/en-us/security/blog/2026/02/10/80-of-fortune-500-use-active-ai-agents-observability-governance-and-security-shape-the-new-frontier/)
- McKinsey: $2.6-4.4 trillion annually in added value from AI
  - Source: [McKinsey Global Institute - The economic potential of generative AI](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier)
- But only 31% of prioritized AI use cases have reached full production - the opportunity gap is enormous
  - Source: [Enterprise AI Maturity Index 2025 - ServiceNow](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/white-paper/wp-enterprise-ai-maturity-index-2025.pdf)
- The message: this isn't coming. It's here. But most people aren't using it well yet. That gap is your opportunity.

**Additional stats (for appendix / speaker notes, not on slides):**
- Firms investing in digital tech saw productivity growth ~1pp higher than non-adopters (2015-2018)
  - Source: [Digital technologies and productivity - ScienceDirect](https://www.sciencedirect.com/science/article/pii/S026499932300336X)

#### Slide 6: "The Barrier to Entry Is a Conversation"

- Unlike previous revolutions (learn to code, build a website, develop an app), AI just requires you to talk.
- You already have the primary skill. You're just using it wrong.
- "This deck is your walkthrough" - each section levels you up.

**Transition:** *"Level 1: Let's start by understanding what we're actually dealing with..."*

---

### Level 1: "Know Your Tools" (AI Demystified)

**~7-8 slides | Job: Eliminate confusion. Make the landscape simple.**

#### Slide 7: "The Buzzword Blizzard"

- Word cloud, visually overwhelming on purpose: LLM, GPT, ChatGPT, Claude, Gemini, MCP, tokens, agents, RAG, fine-tuning, embeddings, prompts, copilot, AGI, transformer, neural network, deep learning, Anthropic, OpenAI, Google DeepMind, Llama, open-source, API, inference, training, parameters, context window, hallucination, grounding, retrieval, vector database...
- Reader reaction should be: "yeah, exactly - this is overwhelming."
- Validates the feeling that everyone is supposed to understand all of this, when in reality there's a lot of noise.

#### Slide 8: "Let's Answer Some of These"

- Same word cloud with question callouts:
  - "What's the difference between ChatGPT and GPT?"
  - "Is Claude the same as ChatGPT?"
  - "What even is an agent?"
  - "Do I need to know what a token is?"
- Transitions from overwhelm to "we're going to make this simple."

#### Slides 9-10: "The AI Stack, Simply"

- Clean 4-layer diagram with non-technical language:
  - **LLM** (the brain) - A massive AI model trained on text. Made by companies like OpenAI (GPT), Anthropic (Claude), Google (Gemini). You never interact with this directly.
  - **API** (the phone line) - How software talks to the brain. Developers use this to build things. You don't need to know this exists.
  - **Agent** (the worker) - Software that uses the brain PLUS tools (internet, files, email, etc.) to actually do tasks. The brain has ideas; the agent has hands.
  - **App** (the thing you use) - ChatGPT, Claude, Microsoft Copilot, Cursor. This is what you interact with. Each app connects to one or more brains through agents.
- Key insight: *You interact with apps. Apps use agents. Agents call APIs. APIs talk to LLMs.*
- Examples mapped to each layer:
  - OpenAI: makes GPT (LLM) -> exposes via API -> builds ChatGPT (app)
  - Anthropic: makes Claude (LLM) -> exposes via API -> builds Claude.ai, Claude Code (apps)
  - Microsoft: uses OpenAI's LLMs -> builds Copilot (app/agent) across Office, GitHub, etc.
  - Google: makes Gemini (LLM) -> builds Gemini in Workspace, Android, etc.

#### Slide 11: "Where the Real Action Is"

- Split visual: LLM/API side vs. Agent/App side
- LLM side: costs $billions, takes months to train, requires massive compute. Innovation is slow and expensive. Only a handful of companies can do this.
- Agent/App side: this is ultimately just software. Innovation has exploded. Anyone can build agents and apps. New tools appear weekly.
- Key message: Don't be fooled into thinking the needle only moves when a new model drops. The real action is in how these models are used - and that's where you come in.

#### Slides 12-13: "Software Engineering Was First. Your Job Is Next."

- The 2025 story: software engineering went from "vibe coding" (casual AI-assisted coding, term coined by Andrej Karpathy, Feb 2025) to AI-first practices.
  - Source: [Vibe Coding in 2025 - Plausible Futures](https://plausiblefutures.substack.com/p/vibe-coding-in-2025-a-technical-guide)
- The headline stats:
  - 41% of all code is now AI-generated or AI-assisted
    - Source: [AI Coding Assistant Statistics 2025 - Second Talent](https://www.secondtalent.com/resources/ai-coding-assistant-statistics/)
  - 84% of developers using or planning to use AI tools (Stack Overflow 2025)
    - Source: [AI Coding Assistant Statistics 2025 - Second Talent](https://www.secondtalent.com/resources/ai-coding-assistant-statistics/)
  - GitHub Copilot users complete 126% more projects/week
    - Source: [Top 10 Vibe Coding Tools 2026 - Nucamp](https://www.nucamp.co/blog/top-10-vibe-coding-tools-in-2026-cursor-copilot-claude-code-more)
- **But here's the thing most people miss:** these numbers came from tooling that was being invented at the same time it was being adopted. Engineers were learning to use tools that were themselves changing month-to-month. And most are *still* bad at it:
  - Developers who felt 20% faster with AI actually took 19% longer when debugging and cleanup were included
    - Source: [The reality of AI-Assisted software engineering productivity - Addy Osmani](https://addyo.substack.com/p/the-reality-of-ai-assisted-software)
  - The gap between "uses AI tools" and "uses AI tools well" is massive - even among the earliest adopters with the most practice
- **Why this matters for you:** Engineers went first, made all the mistakes, and learned (painfully) what actually works. The rest of this deck teaches you those lessons so you can skip the painful discovery phase. You get to leapfrog.
- But it's not just engineering anymore:
  - Microsoft Copilot: 100M+ monthly active users, 15M paid seats (160% YoY), 70% of Fortune 500
    - Source: [Microsoft Copilot Statistics - ElectroIQ](https://electroiq.com/stats/microsoft-copilot-statistics/)
    - Source: [Microsoft 2025 Annual Report](https://www.microsoft.com/investor/reports/ar25/index.html)
    - Source: [Microsoft Copilot Revenue and Usage Statistics 2026 - Business of Apps](https://www.businessofapps.com/data/microsoft-copilot-statistics/)
  - Microsoft 365 Copilot daily active users increased 10x year-over-year (Q2 2026)
    - Source: [Microsoft Q2 2026 - Neowin](https://www.neowin.net/news/microsoft-q2-2026-key-figures-include-copilot-windows-11-and-record-xbox-growth/)
  - GitHub Copilot: 15M+ users by early 2025 (4x increase from previous year)
    - Source: [GitHub Copilot Statistics - Second Talent](https://www.secondtalent.com/resources/github-copilot-statistics/)
  - Show: Claude in workflows, Copilot in Excel/Word/PowerPoint, Gemini in Sheets/Docs
- Message: Engineering was the canary in the coal mine. The same transformation is coming to every role.

**Transition:** *"OK, you know what the tools are. Level 2: let's learn how to actually talk to them..."*

---

### Level 2: "Talk to AI Properly" (Prompt Engineering)

**~8-10 slides | Job: Teach how the WORDS you choose transform the output. Strictly about phrasing, structure, and discipline - not about what information you feed in (that's Level 3).**

**Narrative thread:** One business task - writing a project proposal - improved through iterations. Each iteration shows the anti-pattern FIRST (what most people do), then the upgrade (what to do instead). The reader feels the pain before the relief - ending each slide on a high note. The prompt gets progressively better across iterations.

**Key boundary rule:** This section is about how you *phrase the request*. Level 3 is about what *information the AI has access to*. Every iteration here keeps the same background information - only the prompt wording changes.

#### Slide 14: Section Header

- "Prompt Engineering: or, How to Stop Getting Useless Answers"
- "Most people type something vague, get something generic, and blame the AI. Let's fix that."

#### Slide 15: "The Task"

- Establish the scenario: "You need to write a project proposal for reducing new hire onboarding time. Let's see how changing *only the words you use* transforms the output."
- Show the baseline vague prompt: "Write me a proposal for improving our onboarding process."
- Show its mediocre, generic output alongside. "Sound familiar?"

#### Slide 16: Iteration 1 - "Be Specific" (vs. the vague ask)

- **The wrong way first:** "Make this better" / "Write me a proposal for improving our onboarding process." -> generic, shallow output. No clear audience, no constraints, no direction. The AI guesses at everything and nails nothing.
- **The fix:** "Write a proposal for reducing new hire onboarding time from 4 weeks to 2 weeks, aimed at the VP of People, in a format suitable for a leadership review meeting. Keep it under 2 pages."
- Show the output improvement side by side. Same information available, dramatically better result purely from phrasing.
- **Lesson:** Specificity in your request = specificity in the output. Treat it like briefing a colleague, not searching Google.

#### Slide 17: Iteration 2 - "Structure Your Ask" (vs. the kitchen sink)

- **The wrong way first:** Same task but with 5 different requests crammed in: "Write the proposal, also draft an email to the team about it, and create a budget spreadsheet, and summarize the key risks..." -> confused, shallow output that tries everything and nails nothing.
- **The fix:** One task, clearly structured: "Structure the proposal with: (1) Problem statement, (2) Proposed solution, (3) Expected outcomes, (4) Resource requirements, (5) Timeline."
- Show how structured asks produce structured outputs. The AI mirrors your organization back to you.
- **Lesson:** One clear task with clear structure beats multiple tangled requests every time.
  - Source: [Prompt Engineering Best Practices 2025 - CodeSignal](https://codesignal.com/blog/prompt-engineering-best-practices-2025/)

#### Slide 18: Iteration 3 - "Power Keywords" (vs. leading the witness)

- **The wrong way first:** "Don't you think reducing onboarding to 2 weeks would be great for the company?" -> sycophantic agreement, no critical thinking, no pushback. Leading questions get you an echo chamber. The AI tells you what you want to hear, not what you need to hear.
- **The fix:** Add modifiers: "Be radically honest about potential challenges," "Think step by step," "Challenge my assumptions if they seem flawed."
- Show the output gaining depth, honesty, and nuance. The AI pushes back on a weak assumption in the brief - exactly what you need.
- **Lesson:** Small keyword modifiers = big quality shifts. Build a personal library of power phrases. And never lead the witness.
  - Source: [OpenAI Best Practices for Prompt Engineering](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
  - Source: [Prompt Engineering Best Practices - DigitalOcean](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices)

#### Slide 19: Iteration 4 - "Define the Output" (vs. hoping for the best)

- **The wrong way first:** No format guidance -> the AI picks a random format. Maybe a 5-page essay when you needed bullets. Maybe bullet points when you needed a narrative. You spend 20 minutes reformatting something the AI could have gotten right the first time.
- **The fix:** "Write this as a one-page executive brief with bullet points. Use data-driven language. Assume the reader has 2 minutes and no prior context on this initiative."
- Show how defining the *shape* of the output (format, tone, length, audience assumptions) produces something immediately usable.
- **Lesson:** Tell it what the finished product looks like. You wouldn't ask a designer for "something nice" - don't ask AI for "something good."

#### Slide 20: "The 4x Prompt"

- Side-by-side: the original vague prompt vs. the final refined prompt. Same task, same background information, dramatically different result - purely from how the request was phrased.
- "You just leveled up. But notice something: every improvement so far was about *wording*. We never changed what the AI actually *knew*. What if we did?"

**Transition:** *"Every iteration above kept the same information and changed the words. But the biggest unlock isn't how you ask - it's what the AI knows when it answers. That's a different game entirely..."*

---

### Level 3: "Feed AI Smarter" (Context Engineering)

**~9-10 slides | Job: The big "aha" - it's not about the prompt, it's about what the AI knows when it answers. This section absorbs the "add context" and "ask AI to ask you questions" concepts that are fundamentally about *information*, not *phrasing*.**

#### Slide 21: "Meet Your AI Colleague"

- Dory from Finding Nemo reference.
- "Your AI is like Dory: incredibly smart, genuinely wants to help, remembers absolutely nothing between conversations. Every chat starts from scratch."
- "In Level 2, we got better at *asking*. But Dory's biggest problem isn't that she doesn't understand what you're saying - it's that she doesn't know what you know."

#### Slide 22: "The Attention Problem"

- Too much context -> Dory gets lost (buries important stuff in noise)
- Contradictory information -> Dory gets confused (tries to satisfy everything, satisfies nothing)
- Broad instructions -> Dory wanders off course (loses focus partway through)
- Stat: 57% of orgs have AI agents in production, but 32% cite quality as top barrier - most failures traced to poor context management, not LLM capability.
  - Source: [AI Context Engineering Guide - Sombra](https://sombrainc.com/blog/ai-context-engineering-guide)
- "The problem isn't that AI is dumb. The problem is that we're feeding it wrong."

#### Slide 23: "Back to Our Proposal - With Context"

- Return to the same onboarding proposal from Level 2. Same well-structured prompt from Slide 20. But now add background information: current onboarding stats, company size, existing pain points, what's been tried before, relevant policies.
- Show the dramatic jump in output quality. The proposal goes from "plausible but generic" to "sounds like it was written by someone who works here."
- **Lesson:** The biggest quality leap doesn't come from rewording - it comes from giving the AI the information it needs to actually be relevant.
  - Source: [Context Engineering vs Prompt Engineering - Elastic](https://www.elastic.co/search-labs/blog/context-engineering-vs-prompt-engineering)
  - Source: [Context Engineering is the New Prompt Engineering - KDnuggets](https://www.kdnuggets.com/context-engineering-is-the-new-prompt-engineering)

#### Slide 24: "Let AI Tell You What It Needs"

- Add to the prompt: "Before you start, ask me clarifying questions about anything you'd need to know to write an excellent proposal."
- Show the AI surfacing things the user hadn't considered: budget constraints? timeline? stakeholder concerns? success metrics? Previous failed attempts?
- The AI is essentially doing context engineering for you - identifying the gaps in its own knowledge.
- **Lesson:** This is the single highest-leverage technique. Let AI close its own context gaps instead of guessing what it needs.
  - Source: [Prompt Engineering Best Practices - Anthropic/Claude](https://claude.com/blog/best-practices-for-prompt-engineering)

#### Slide 25: "The Goldilocks Principle"

- Not too much, not too little - the right context at the right time.
- The minimum information needed to get the right answer.
- "Prompt engineering tweaks the question. Context engineering builds the knowledge base."
  - Source: [Context Engineering: Improving AI by Moving Beyond the Prompt - CIO](https://www.cio.com/article/4080592/context-engineering-improving-ai-by-moving-beyond-the-prompt.html)

#### Slides 26-29: "Skills: The Real Superpower"

- Expanded section - core insight of Level 3. This is where context engineering moves from "manual" to "systematic."
- **What skills are:** Predefined rules, instructions, templates, and context packages injected into the AI's context only when relevant to the current task. Think of them as "briefing documents" you hand Dory right before she needs to do a specific task.
- **Three concrete examples across roles:**
  - **Marketing - "Brand Voice" skill:** Contains your company's tone guidelines, target audience personas, approved terminology, and examples of good/bad copy. When anyone on the team asks AI to write content, this skill loads automatically. Result: every piece of AI-generated copy sounds like your brand, not generic ChatGPT output. Without it: you'd need to paste the style guide into every conversation manually.
  - **Engineering - "Code Review Standards" skill:** Contains your team's coding conventions, architecture principles, common anti-patterns to flag, and security checklist. Loads when AI reviews pull requests. Result: consistent code reviews that catch the things your team actually cares about. Without it: the AI gives generic "best practice" advice that may contradict your team's actual patterns.
  - **Operations/Legal - "Compliance Policy" skill:** Contains relevant regulatory requirements, internal approval workflows, required disclaimers, and escalation criteria. Loads when AI drafts contracts, policies, or customer communications. Result: outputs that are compliant by default instead of needing legal review for basic compliance. Without it: the AI doesn't know your regulatory context and produces content that needs heavy manual review.
- **Why this is powerful:**
  - Reusable: write once, use forever
  - Consistent: every interaction gets the same quality context
  - Scalable: works for 1 person or 10,000
  - Focused: only loads what's relevant, keeping Dory's attention on track
- **Current implementations vary:** whether skills are triggered by the human, the app, or the AI itself differs across tools right now. But the concept is the same everywhere. Some tools call them "custom instructions," "system prompts," "rules," or "skills" - the principle is identical.
- **Real impact:** Organizations investing in context architecture see 50% faster responses and 40% higher quality outputs.
  - Source: [Context Engineering Complete Guide - CodeConductor](https://codeconductor.ai/blog/context-engineering/)

#### Slide 30: "GPS, Not Directions"

- The metaphor:
  - Prompt engineering = giving directions for each individual trip
  - Context engineering = programming a GPS with your home, office, preferences, and traffic data
  - Skills = the GPS's saved locations, traffic preferences, and route history
  - One requires effort every time. The other gets smarter the more you invest.
- "Level 2 made you better at asking. Level 3 makes AI better at understanding you - and the difference is permanent."

**Transition:** *"Now you know how to talk to AI and what to feed it. Level 4: what if you stopped driving and let AI drive instead?"*

---

### Level 4: "Let AI Drive" (The Agentic Approach)

**~5-6 slides | Job: Shift the mental model from "I use AI" to "AI works for me." Level 4 is about a single agent doing a single task autonomously - like having one smart assistant handle something end-to-end. Level 5 (next) is about multiple agents working together in sequence - like a kitchen brigade where each station handles one course.**

#### Slide 31: "The Copy-Paste Trap"

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

#### Slide 32: "Hand Dory the Keys"

- Same task, but the agent drives:
  - Agent retrieves its own context (reads documents, searches for information)
  - Agent identifies gaps and goes back for more when needed
  - Agent creates/edits outputs directly (writes the document, updates the spreadsheet, drafts the email)
  - You review and approve instead of operate
- "Same Dory. Same memory issues. But now she has hands, eyes, and a to-do list."
- **Key framing for Level 4 vs 5:** This is like having one great chef who can cook an entire meal. They find the ingredients, prep, cook, and plate. You just say what you want and taste-test at the end. (Level 5 will introduce the kitchen brigade.)

#### Slides 33-34: "Connections Are Everything"

- An agent is only as useful as what it can reach. Each connection = new capability:
  - Web search / fetch -> can research and fact-check
  - Email access -> can read context and draft responses
  - Document access -> can reference policies, templates, past work
  - Database access -> can query real data
  - Calendar access -> can understand scheduling context
  - Custom connections -> anything you can imagine
- "Think of connections like giving Dory a phone, a filing cabinet, and a library card."

#### Slide 35: "MCP: USB-C for AI"

- The Model Context Protocol, explained simply:
  - Before MCP: every AI tool needed a custom connector to every data source. N tools x M sources = explosion of custom integrations.
  - MCP: one standard protocol that works everywhere. Build a connector once, it works with every AI tool.
  - "USB-C ended the cable drawer problem. MCP is doing the same for AI connections."
- Current state:
  - Released by Anthropic November 2024, now open standard under Linux Foundation
    - Source: [Donating MCP to Agentic AI Foundation - Anthropic](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
  - 10,000+ public MCP servers
  - Adopted by ChatGPT, Cursor, Gemini, VS Code, Microsoft Copilot
  - 97M+ monthly SDK downloads
  - Backed by Anthropic, OpenAI, Google, Microsoft, AWS, Cloudflare, Bloomberg
    - Source: [A Year of MCP - Pento](https://www.pento.ai/blog/a-year-of-mcp-2025-review)
    - Source: [Model Context Protocol - Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol)
    - Source: [Why the Model Context Protocol Won - The New Stack](https://thenewstack.io/why-the-model-context-protocol-won/)

#### Slide 36: "The Connection Inventory"

- What's available today across common tools (matrix view)
- What's possible with custom MCP setup
- The "art of the possible" slide - shows the audience the ceiling is much higher than they thought

**Transition:** *"One agent doing one task is powerful. But real work has multiple steps. Final level..."*

---

### Level 5: "Orchestrate" (Agentic Workflows)

**~7-8 slides | Job: The payoff. The destination the whole deck has been building toward. Level 4 was one chef cooking one meal. Level 5 is a kitchen brigade: a head chef (you) orchestrating specialists (agents) who each handle one station. The result is a full menu, not just one dish.**

#### Slide 37: "One Chef vs. A Kitchen Brigade"

- Level 4 gave you one great chef (agent) who handles a task end-to-end. That works for single tasks.
- But what about complex, multi-step work? One chef doing a 10-course dinner alone will burn out, make mistakes, and forget the appetizer by the time they're plating dessert.
- **Callback to Dory:** A classroom of Dorys, each doing one focused step? That's a kitchen brigade of brilliance. Each Dory is fresh, focused, and working on exactly one thing.
- LLMs are genuinely bad at long multi-step chains. But they're excellent at focused, well-defined tasks.
- "The trick isn't making one AI smarter. It's making many AIs work together."

#### Slides 38-39: "Prompt Chaining, Visually"

- Clear diagram:
  - Big Task -> Phase 1 -> output -> Phase 2 -> output -> Phase 3 -> result
  - Each phase has its own focused prompt and only the context it needs
  - Output from Phase 1 becomes input context for Phase 2
  - Output from Phase 2 becomes input context for Phase 3
- Key principles:
  - Each link in the chain has a single, clear job
  - Context is filtered between steps (not everything passes through)
  - Quality compounds - each step builds on verified output from the last

#### Slides 40-41: "Real Example #1: Quarterly Business Review"

- Walk through a concrete multi-step task everyone recognizes.
- **Manual flow (painful):**
  1. Pull data from 3 different systems (30 min)
  2. Paste into AI, ask for analysis (10 min)
  3. Read output, realize it's missing context (5 min)
  4. Go back, get more data, re-prompt (20 min)
  5. Manually format into slides (45 min)
  6. Ask AI to check your work (10 min)
  7. Manually apply suggestions (20 min)
  - Total: ~2.5 hours of you being the bottleneck
- **Chained agent flow:**
  1. Agent 1: Connects to data systems, pulls relevant metrics, identifies trends
  2. Agent 2: Takes the data, generates analysis with context from company goals/OKRs
  3. Agent 3: Formats into presentation with company template, flags areas needing human judgment
  4. You: Review, adjust, approve
  - Total: ~20 minutes of your time, most of it reviewing
- "Same quality. 10x faster. And you did the part only humans can do: judgment."

#### Slides 42-43: "Real Example #2: Customer Research Synthesis"

- Different department, different workflow, same pattern.
- **Manual:** read 50 customer interviews, manually tag themes, write synthesis, create recommendations
- **Chained:** Agent 1 reads and tags themes -> Agent 2 cross-references with product roadmap -> Agent 3 drafts recommendation memo with evidence
- Shows universality of the pattern across roles.

#### Slide 44: "From Asking to Orchestrating"

- Full evolution in one visual, mapping back to the spectrum from Level 0:
  - **AI Skeptic:** doesn't use AI at all
  - **AI Questioner:** types a question, gets an answer (single prompt)
  - **AI Viber:** better prompts, more context, fixes output by hand (Level 2-3)
  - **AI-First:** agents drive the work, chains handle complexity, humans handle judgment (Level 4-5)
- "This is the journey this deck just took you on."

**Transition:** *"You've just gone from Level 0 to Level 5. Now let's make it real..."*

---

### "Level Up" (Your Toolkit & First Steps)

**~4-5 slides | Job: Convert understanding into action.**

#### Slide 45: "Your AI Toolkit"

- Concrete tools available now, organized by category:
  - **General purpose:** ChatGPT, Claude, Gemini
  - **In your workflow:** Microsoft Copilot (Office), Gemini (Workspace), Claude integrations
  - **For developers:** GitHub Copilot, Cursor, Claude Code
  - **For building connections:** MCP servers, Zapier AI, custom integrations
- What's free, what's paid, what the company already has access to (placeholder for company-specific info)

#### Slide 46: "Start Here: By Role"

- 2-3 immediate, specific actions for different audiences:
  - **Non-technical role:** Try [specific tool] for [specific weekly task]. Apply Level 2 prompting. Notice the difference.
  - **Technical role:** Set up [specific agent tool]. Connect it to your codebase. Try a chained workflow.
  - **Leadership:** Ask your team which AI tools they use and how. Look for the gap between "has access" and "uses effectively."
- (Customized per company/audience for targeted decks)

#### Slide 47: "The 30-Day Challenge"

- Progressive challenge mirroring the deck's levels:
  - **Week 1 (Level 1-2):** Use one AI tool for one real task. Apply prompting principles.
  - **Week 2 (Level 3):** Same task, experiment with context. Provide background. Ask AI to ask you questions first.
  - **Week 3 (Level 4):** Try an agentic tool. Let AI access files/email/data instead of copy-pasting.
  - **Week 4 (Level 5):** Break a multi-step task into phases. Chain them. Compare to manual.

#### Slide 48: "Where to Go Deeper"

- Pointers to future workshop decks (built from this source deck)
- Internal resources and communities (placeholder for company-specific info)
- External resources: Anthropic's prompt engineering guide, OpenAI's best practices

---

### Closing

**~2 slides**

#### Slide 49: Callback to the Spectrum

- Return to the AI Adoption Spectrum from Slides 2-3.
- "You started at Level 0. You now understand what agents are, how to prompt effectively, why context beats cleverness, and how to chain workflows."
- "The only question is: will you use it?"

#### Slide 50: Close

- "Getting agents to give up their secrets isn't about torture. It's about knowing how to ask, what to feed them, and when to let them drive."
- Contact information / resources / QR code
- Company-specific AI channels/support (placeholder)

---

## Sources Index

All sources referenced in the narrative, for citation in the final presentation:

| # | Source | URL | Used In |
|---|--------|-----|---------|
| 1 | AI Adoption Statistics 2026 - Netguru | https://www.netguru.com/blog/ai-adoption-statistics | Level 0 |
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
| 22 | AI Context Engineering Guide - Sombra | https://sombrainc.com/blog/ai-context-engineering-guide | Level 3 |
| 23 | Context Engineering vs Prompt Engineering - Elastic | https://www.elastic.co/search-labs/blog/context-engineering-vs-prompt-engineering | Level 3 |
| 24 | Context Engineering is the New Prompt Engineering - KDnuggets | https://www.kdnuggets.com/context-engineering-is-the-new-prompt-engineering | Level 3 |
| 25 | Context Engineering: Improving AI by Moving Beyond the Prompt - CIO | https://www.cio.com/article/4080592/context-engineering-improving-ai-by-moving-beyond-the-prompt.html | Level 3 |
| 26 | Context Engineering Complete Guide - CodeConductor | https://codeconductor.ai/blog/context-engineering/ | Level 3 |
| 27 | Prompt Engineering Best Practices - Anthropic/Claude | https://claude.com/blog/best-practices-for-prompt-engineering | Level 3 |
| 28 | Donating MCP to Agentic AI Foundation - Anthropic | https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation | Level 4 |
| 29 | A Year of MCP - Pento | https://www.pento.ai/blog/a-year-of-mcp-2025-review | Level 4 |
| 30 | Model Context Protocol - Wikipedia | https://en.wikipedia.org/wiki/Model_Context_Protocol | Level 4 |
| 31 | Why the Model Context Protocol Won - The New Stack | https://thenewstack.io/why-the-model-context-protocol-won/ | Level 4 |

---

## Notes

- **Slide count estimate:** ~50 slides. Higher end for a single deck but appropriate for a comprehensive reference document.
- **Company-specific placeholders:** Slides 44-47 and 49 contain placeholders for company-specific tools, resources, and channels. Customized per deployment.
- **Image/visual needs:** Several slides require custom visuals: adoption spectrum, AI stack diagram, word cloud, prompt chaining diagram, manual vs. agent workflow comparison. Designed during craft phase.
- **Real examples for Level 5:** The two workflow examples (quarterly business review, customer research synthesis) are proposals - may be swapped for scenarios more relevant to the specific company.
- **Prompt engineering iterations:** The specific prompt examples in Level 2 should be written out fully during craft phase using the project proposal scenario.
- **Dory analogy usage:** Appears in Level 3 (introduction + attention problem), Level 4 (callback - "Hand Dory the keys" + "giving Dory a phone and filing cabinet"), and Level 5 (callback - "kitchen brigade of Dorys"). Three sections, each adding a new dimension: Level 3 = Dory's limitations, Level 4 = Dory gets tools, Level 5 = many Dorys working together.
- **Title refinement:** Working title is "Getting Agents to Give Up Their Secrets" with subtitle "A guide to AI that actually works - from confused to in control." May refine during craft phase.
- **Future deck extraction points:**
  - Level 0 alone = "Why AI Matters" executive briefing (~5 slides)
  - Level 0 + Level 1 = "AI 101" intro session (~13 slides)
  - Level 2 alone = "Prompt Engineering Workshop" (~10 slides)
  - Level 3 alone = "Context Engineering Deep Dive" (~8 slides)
  - Level 4 + 5 = "Agentic AI Workshop" (~13 slides)
  - Level Up alone = "Getting Started with AI" practical session (~5 slides)
