# Getting Agents to Give Up Their Secrets - Deck Plan (v2)

> **Next step:** Use **/deck-flow:present** to generate the presentation.

## Overview
- **Total slides**: 47
- **Estimated duration**: Self-paced reference document (no fixed duration)
- **Narrative doc**: [2026-02-18-ai-best-practices-narrative-v2.md](2026-02-18-ai-best-practices-narrative-v2.md)

### What changed from v1
- **47 slides** (was 50): Removed dedicated MCP slide (folded inline), removed "Different Department, Same Pattern" x2 (redundant)
- **Levels 3-5 reordered**: Context proof first → Dory → Agents → Guardrails → Chains + Skills
- **Skills reframed**: Now introduced within chaining section as "every chef's playbook"
- **Onboarding thread tightened**: Same running example throughout, no switching
- **Personas as milestones**: Four personas (Skeptic → Questioner → Viber → AI-First) are journey markers; levels are the steps between them
- **Phase 0 smell test**: New practical tip added to prompt chaining

---

## Slide Plan

### Level 0: "Where Are You?" (Slides 1-6)

---

### Slide 1: "Getting Agents to Give Up Their Secrets"
**Layout**: Bold statement title
**Content**:
- Title: **"Getting Agents to Give Up Their Secrets"**
- Subtitle: *A guide to AI that actually works — from confused to in control*
- Hook story in callout/speech-bubble: *"Last month, I watched someone spend 45 minutes going back and forth with ChatGPT trying to write a one-page summary. Copy, paste, 'no that's not right', copy, paste, 'closer but...' The same task took 2 minutes once they knew the trick. This deck is about the trick."*
**Speaker notes**: Let the hook land. This is the emotional anchor — the entire closing (slide 46) calls back to this person. Pause after "This deck is about the trick."
**Transition**: The story creates the question: "What's the trick?" The rest of the deck answers it.

---

### Slide 2: "Where Are You on the Spectrum?"
**Layout**: Steps (horizontal 4-stage progression)
**Content**:
- Headline: **"Where Are You on the Spectrum?"**
- 4-stage horizontal progression, each with icon + label + one-liner:
  - **AI Skeptic** — Avoids AI or refuses to engage
  - **AI Questioner** — Has ChatGPT, uses it like a search engine
  - **AI Viber** — Uses AI tools, then fixes output by hand
  - **AI-First** — Everything through AI; focused on context, agents, and workflows
- No judgment framing — soft highlight on stages 1-2 ("most people are here").
- Below spectrum: *"These are your milestones. This deck's levels are the steps that move you to the right. Find yourself — by the end, we'll have moved you."*
**Speaker notes**: Most readers will self-identify at Questioner. The personas are identity milestones — the deck's levels are the how. This framing pays off at slide 43 when we come full circle.
**Transition**: Establishes the personal dimension. Next slide adds the data dimension.

---

### Slide 3: "Most People Are Still in the Shallow End"
**Layout**: Big number
**Content**:
- Hero stat: **1 billion+** people use AI tools monthly
- Sub-stat: **Fewer than 2%** pay for premium
- Label: *AI has mass reach — but almost nobody is going deep.*
- Source footnotes: DataReportal 2026; Reuters
**Speaker notes**: Two points: 1) AI is already everywhere — you're not early, 2) almost nobody is using it seriously. The opportunity gap is enormous.
**Transition**: "We've seen this exact pattern before..."

---

### Slide 4: "We've Seen This Movie Before"
**Layout**: Timeline
**Content**:
- Headline: **"We've Seen This Movie Before"**
- 4-era horizontal timeline with one key stat each:
  - **PCs (1980s)**: US productivity growth doubled (0.6% → 1.0%/yr) — *Fed Reserve*
  - **Internet (1990s)**: Global business online 7% → 30% — *Visual Capitalist*
  - **Smartphones (2010s)**: *(icon only, no stat — let the pattern speak)*
  - **AI (Now)**: $7T projected GDP impact over 10 years — *Goldman Sachs*
- Small footer: *"The famous 'world market for maybe five computers' quote? Debunked myth."* — De Programmatica Ipsum
**Speaker notes**: Don't dwell on individual stats. The point is the pattern: every era had skeptics, every era punished those who waited.
**Transition**: The past is pattern. The next slide is "now."

---

### Slide 5: "The AI Moment Is Now"
**Layout**: Three column (three big numbers)
**Content**:
- Headline: **"The AI Moment Is Now"**
- Three columns:
  - **80%** of Fortune 500 use active AI agents — *Microsoft Security Blog, Feb 2026*
  - **$2.6–4.4T** annually in added value — *McKinsey Global Institute*
  - **Only 31%** of prioritized AI use cases in full production — *ServiceNow*
- Footer: *"This isn't coming. It's here. But most people aren't using it well yet. That gap is your opportunity."*
**Speaker notes**: The third stat is the killer. The gap between "we have AI" and "we're using AI well" is enormous.
**Transition**: "So if this is so important, what's stopping people?"

---

### Slide 6: "The Barrier to Entry Is a Conversation"
**Layout**: Single message
**Content**:
- Bold centered: **"The core skill for AI is talking — and you already have it."**
- Below: *"You're not missing the skill. You're just using it wrong."*
- Footer: *"This deck is your walkthrough. Each section levels you up — each level moves you closer to AI-First."*
**Speaker notes**: The permission-granting moment. AI's interface is natural language. The audience already has the prerequisite.
**Transition**: *"Level 1: Let's start by understanding what we're actually dealing with..."*

---

### Level 1: "Know Your Tools" (Slides 7-13)

---

### Slide 7: "The Buzzword Blizzard"
**Layout**: Full-bleed image (word cloud)
**Content**:
- No headline — the word cloud IS the slide
- Dense, visually overwhelming word cloud: LLM, GPT, ChatGPT, Claude, Gemini, MCP, tokens, agents, RAG, fine-tuning, embeddings, prompts, copilot, AGI, transformer, neural network, deep learning, Anthropic, OpenAI, Google DeepMind, Llama, open-source, API, inference, training, parameters, context window, hallucination, grounding, retrieval, vector database...
- Small text at bottom: *"Yeah. Exactly."*
**Speaker notes**: Makes the reader feel validated. The overwhelm is real. Don't explain anything yet.
**Transition**: The chaos sets up the need for clarity.

---

### Slide 8: "Let's Answer Some of These"
**Layout**: Full-bleed image (same word cloud, with callouts)
**Content**:
- Same word cloud with 4 question callouts:
  - "What's the difference between ChatGPT and GPT?"
  - "Is Claude the same as ChatGPT?"
  - "What even is an agent?"
  - "Do I need to know what a token is?"
- Footer: *"We're going to make this simple."*
**Speaker notes**: The questions represent common confusions. The audience should feel like someone is finally asking their questions.
**Transition**: "Here's the simple version."

---

### Slide 9: "The AI Stack, Simply"
**Layout**: Steps (vertical 4-layer stack diagram)
**Content**:
- Headline: **"The AI Stack, Simply"**
- 4 stacked layers, bottom-up:
  - **LLM** (the brain) — A massive AI model trained on text. You never touch this directly.
  - **API** (the phone line) — How software talks to the brain. You don't need to know this exists.
  - **Agent** (the worker) — The brain + tools. The brain has ideas; the agent has hands.
  - **App** (the thing you use) — ChatGPT, Claude, Copilot. This is what you interact with.
- Arrow summary: *You use apps → apps use agents → agents call APIs → APIs talk to LLMs*
**Speaker notes**: Most people only need the top two layers (app and agent). The bottom two are for developers. Knowing the stack prevents terminology confusion.
**Transition**: "Let's see who plays where."

---

### Slide 10: "Who Makes What"
**Layout**: Comparison table
**Content**:
- Headline: **"Who Makes What"**
- 4-column table:

| Company | LLM | Agent/App | You Know Them As |
|---------|-----|-----------|-----------------|
| OpenAI | GPT | ChatGPT | The one everyone uses |
| Anthropic | Claude | Claude.ai, Claude Code | The "thinking" one |
| Google | Gemini | Gemini in Workspace, Android | The one in your Google apps |
| Microsoft | *(uses OpenAI's)* | Copilot across Office, GitHub | The one in your work tools |

**Speaker notes**: Microsoft doesn't make the brain — they build tools around someone else's. This is why the agent/app layer matters more for most people.
**Transition**: "So which layer actually matters for innovation?"

---

### Slide 11: "Where the Real Action Is"
**Layout**: Two column
**Content**:
- Headline: **"Where the Real Action Is"**
- Left column — **LLM Side** (muted/grey):
  - Costs $billions to train
  - Takes months per model
  - Only ~5 companies can do it
  - Innovation is slow and expensive
- Right column — **Agent/App Side** (highlighted/bold):
  - This is just software
  - Innovation has exploded
  - Anyone can build agents and apps
  - New tools appear weekly
- Footer: *"Don't be fooled into thinking the needle only moves when a new model drops. The real action is in how models are used — and that's where you come in."*
**Speaker notes**: Reframes the AI news cycle. The biggest user-facing improvements come from better agents, apps, and workflows — built on existing models.
**Transition**: "And this agent/app explosion already transformed one industry..."

---

### Slide 12: "Software Engineering Was First"
**Layout**: Two column (stat + twist)
**Content**:
- Headline: **"Software Engineering Was First"**
- Left column — **The headline:**
  - Big number: **41%** of all code is now AI-generated
  - Sub-line: *"Vibe coding" went from joke to industry practice in under a year*
  - Sources: Second Talent; Karpathy coined "vibe coding" Feb 2025
- Right column — **The twist:**
  - Stat: Developers who *felt* 20% faster actually took **19% longer** once debugging and cleanup were included
  - *"The gap between 'uses AI tools' and 'uses AI tools well' is massive."*
  - Source: Addy Osmani
- Footer: *"Engineers went first, made all the mistakes, and learned what actually works. This deck teaches you those lessons."*
**Speaker notes**: The twist stat is the most important. It reframes the deck's purpose: using AI badly gives the illusion of productivity while actually slowing you down.
**Transition**: "But this isn't just an engineering story anymore."

---

### Slide 13: "Your Job Is Next"
**Layout**: Big number + visual
**Content**:
- Headline: **"Your Job Is Next"**
- Hero stat: Microsoft 365 Copilot DAU increased **10x** year-over-year (Q2 2026)
- Grid of 4-6 product screenshots/icons: Copilot in Excel/Word/PowerPoint, Gemini in Sheets/Docs, Claude in workflows
- Footer: *"Engineering was the canary in the coal mine. The same transformation is coming to every role."*
**Speaker notes**: The 10x DAU growth shows the hockey stick is happening NOW in non-engineering tools.

**Persona milestone**: If you were a **Skeptic**, you're now a **Questioner** — you know what AI is and you're ready to use it.

**Transition**: *"You know what the tools are. Now let's learn how to actually talk to them..."*

---

### Level 2: "Talk to AI Properly" (Slides 14-21)

---

### Slide 14: "Prompt Engineering: How to Stop Getting Useless Answers"
**Layout**: Section divider (text)
**Content**:
- Large: **"Prompt Engineering"**
- Subtitle: *"or, How to Stop Getting Useless Answers"*
- Small: *"Most people type something vague, get something generic, and blame the AI. Let's fix that."*
**Speaker notes**: Mental-model shift. The audience likely thinks output quality is about the AI. This section proves it's about the input.
**Transition**: Sets up the task that runs through all five iterations.

---

### Slide 15: "The Task"
**Layout**: Two column (prompt + output)
**Content**:
- Headline: **"The Task"**
- Context: *"You need to write a project proposal for reducing new hire onboarding time. Let's see how changing only the words you use transforms the output."*
- Left — **The prompt:** Chat bubble: *"Write me a proposal for improving our onboarding process."*
- Right — **The output** (muted/grey): Truncated generic output — bland headers, placeholder content. Enough to see it's shallow.
- Footer: *"Sound familiar?"*
**Speaker notes**: The output should look recognizably mediocre. Don't dwell on it — establish the baseline. This same task carries through the entire deck.
**Transition**: "Let's fix this. Same task, five upgrades."

---

### Slide 16: "Assign a Role" (Iteration 1)
**Layout**: Two column (wrong → right)
**Content**:
- Headline: **"Assign a Role"** — subtitle: *vs. talking to a stranger*
- Left — **The wrong way** (red/muted):
  - The baseline prompt. The AI responds as a generic assistant — competent but surface-level.
  - Label: Like asking a random person on the street to write your proposal.
- Right — **The fix** (green/highlighted):
  - *"You are a senior HR operations consultant who specializes in onboarding optimization for mid-to-large companies. Write me a proposal for improving our onboarding process."*
  - Label: More relevant frameworks, industry terminology, realistic timelines — just from telling the AI *who it is*.
- Footer: *"A role frames everything that follows. Always start here."*
**Speaker notes**: The same vague request produces noticeably different output. The role sets the AI's default tone, depth, and perspective.
**Transition**: "Good start. Now let's be more specific about what we want."

---

### Slide 17: "Be Specific" (Iteration 2)
**Layout**: Two column (wrong → right)
**Content**:
- Headline: **"Be Specific"** — subtitle: *vs. the vague ask*
- Left — **The wrong way** (red/muted):
  - *"Write me a proposal for improving our onboarding process."*
  - Label: No audience, no constraints, no direction. The AI guesses everything.
- Right — **The fix** (green/highlighted):
  - *"Write a proposal for reducing new hire onboarding time from 4 weeks to 2 weeks, aimed at the VP of People, in a format suitable for a leadership review meeting. Keep it under 2 pages."*
  - Label: Same information. Dramatically different result.
- Footer: *"Treat it like briefing a colleague, not searching Google."*
**Speaker notes**: Specificity in the request = specificity in the output.
**Transition**: "Better. But what if the task is bigger than one ask?"

---

### Slide 18: "One Task at a Time" (Iteration 3)
**Layout**: Two column (wrong → right)
**Content**:
- Headline: **"One Task at a Time"** — subtitle: *vs. the kitchen sink*
- Left — **The wrong way** (red/muted):
  - *"Write the proposal, also draft an email to the team about it, and create a budget spreadsheet, and summarize the key risks, and..."*
  - Label: Five requests tangled together. Tries everything, nails nothing.
- Right — **The fix** (green/highlighted):
  - *"Structure the proposal with: (1) Problem statement, (2) Proposed solution, (3) Expected outcomes, (4) Resource requirements, (5) Timeline."*
  - Label: One task. Clear structure. The AI mirrors your organization.
- Footer: *"Structured asks produce structured outputs."*
- Source: CodeSignal
**Speaker notes**: The kitchen-sink prompt is one of the most common mistakes. If you have 5 tasks, send 5 prompts.
**Transition**: "Now the prompt is specific and structured. But are we getting honest answers?"

---

### Slide 19: "Power Keywords" (Iteration 4)
**Layout**: Two column (wrong → right)
**Content**:
- Headline: **"Power Keywords"** — subtitle: *vs. leading the witness*
- Left — **The wrong way** (red/muted):
  - *"Don't you think reducing onboarding to 2 weeks would be great for the company?"*
  - Label: Leading question → sycophantic agreement. Echo chamber.
- Right — **The fix** (green/highlighted):
  - Add: *"Be radically honest about potential challenges. Think step by step. Challenge my assumptions if they seem flawed. If you're uncertain about any claim, flag it explicitly."*
  - Label: The AI pushes back on a weak assumption and flags an uncertain statistic.
- Footer: *"Permit uncertainty — an AI that says 'I'm not sure' is more useful than one that confidently makes things up."*
- Sources: OpenAI; DigitalOcean
**Speaker notes**: "Radically honest," "think step by step," "challenge my assumptions," and "flag uncertainty" are four of the highest-leverage keyword modifiers.
**Transition**: "Almost there. One more upgrade."

---

### Slide 20: "Define the Output" (Iteration 5)
**Layout**: Two column (wrong → right)
**Content**:
- Headline: **"Define the Output"** — subtitle: *vs. hoping for the best*
- Left — **The wrong way** (red/muted):
  - No format guidance → random format. 5-page essay when you needed bullets. 20 minutes reformatting.
- Right — **The fix** (green/highlighted):
  - *"Write this as a one-page executive brief with bullet points. Use data-driven language. Assume the reader has 2 minutes and no prior context."*
  - For extra precision, include a short example of what good output looks like.
- Footer: *"You wouldn't ask a designer for 'something nice.' A quick example beats a long description."*
**Speaker notes**: Defining format, tone, length, and audience assumptions produces immediately usable output. Every iteration changed *wording*. We never changed what the AI *knew*. That's the setup for Level 3.
**Transition**: "Now look at how far we've come..."

---

### Slide 21: "The 5x Prompt"
**Layout**: Two column (before → after)
**Content**:
- Headline: **"The 5x Prompt"**
- Left — **Slide 15's prompt** (muted): *"Write me a proposal for improving our onboarding process."*
- Right — **Final prompt** (highlighted): Full combined prompt with role + specificity + structure + keywords + output definition
- Below: *"Same task. Same background information. Dramatically different result — purely from how the request was phrased."*
- Footer callout: *"You just leveled up. But notice: every improvement was about wording. We never changed what the AI actually knew. What if we did?"*
**Speaker notes**: This is the hinge of the deck. Celebrate the progress, then plant the seed that there's a bigger lever. The transition should feel like a cliffhanger.
**Transition**: *"Every iteration above kept the same information and changed the words. But the biggest unlock isn't how you ask — it's what the AI knows when it answers..."*

---

### Level 3: "Feed AI Smarter" (Slides 22-26)

**v2 change**: This section now LEADS with proof (same prompt, different context) before introducing Dory. The reader sees the quality jump first, then gets the mental model for why. Skills have been moved to Level 5.

---

### Slide 22: "Same Prompt, Different Context"
**Layout**: Two column (before → after)
**Content**:
- Headline: **"Same Prompt, Different Context"**
- Left — **Level 2 result** (muted): Same well-crafted prompt from Slide 21. Output is "plausible but generic."
- Right — **With context** (highlighted): Same prompt + background info (current onboarding stats, company size, existing pain points, what's been tried before, relevant policies). Output "sounds like it was written by someone who works here."
- Footer: *"Same prompt. Different information. Dramatically different result."*
- Sources: Elastic; KDnuggets
**Speaker notes**: The clearest Level 2/3 boundary demonstration. The prompt didn't change. The context did. This is the "aha" — it's not about the words, it's about what the AI knows.
**Transition**: "Why does this happen? Meet your AI colleague..."

---

### Slide 23: "Meet Your AI Colleague"
**Layout**: Image + text (Dory visual left, text right)
**Content**:
- Headline: **"Meet Your AI Colleague"**
- Dory image/illustration (~40%)
- *"Your AI is like Dory: incredibly smart, genuinely wants to help, remembers absolutely nothing between conversations."*
- *"In Level 2, we got better at asking. But Dory's biggest problem isn't that she doesn't understand what you're saying — it's that she doesn't know what you know."*
- *"The proof from slide 22 makes this land: you already SAW context transform output. Dory explains WHY."*
**Speaker notes**: NOW the Dory metaphor has a reason. The reader just saw what context does; Dory explains the mechanism. First of five Dory touchpoints.
**Transition**: "And Dory has a few specific problems we need to understand..."

---

### Slide 24: "The Attention Problem"
**Layout**: Three column (three failure modes)
**Content**:
- Headline: **"The Attention Problem"**
- Three columns:
  - **Too much context** — Dory gets lost (buries important stuff in noise)
  - **Contradictory info** — Dory gets confused (tries to satisfy everything)
  - **Broad instructions** — Dory wanders off (loses focus partway through)
- Stat: 57% of orgs have AI agents in production, but 32% cite quality as top barrier — most failures traced to poor context. *Source: Sombra*
- Footer: *"The problem isn't that AI is dumb. The problem is that we're feeding it wrong."*
**Speaker notes**: Reframes "AI gives bad answers." It's almost never the model — it's the context.
**Transition**: "So how do you know what context to provide?"

---

### Slide 25: "Let AI Tell You What It Needs"
**Layout**: Two column (prompt + AI response)
**Content**:
- Headline: **"Let AI Tell You What It Needs"**
- Left — **The prompt:** *"Before you start, ask me clarifying questions about anything you'd need to know to write an excellent proposal."*
- Right — **AI's questions** (highlighted): Budget constraints? Timeline? Stakeholder concerns? Success metrics? Previous failed attempts?
- Footer: *"The single highest-leverage technique: let AI close its own context gaps."*
- Source: Anthropic/Claude
**Speaker notes**: The AI does context engineering for you. This slide directly addresses the attention problem from slide 24 — instead of guessing what context to provide, let AI tell you.
**Transition**: "Now we know context matters. But how much?"

---

### Slide 26: "The Goldilocks Principle"
**Layout**: Single message
**Content**:
- Bold centered: **"Not too much. Not too little. The right context at the right time."**
- Below: *"Prompt engineering tweaks the question. Context engineering builds the knowledge base."*
- Source: CIO
**Speaker notes**: Crystallizes Level 3. Bridges attention problem (too much/wrong context fails) with the technique (let AI identify what it needs).

**Persona milestone**: You've outgrown **Questioner**. You prompt well, you understand context, you get good results. You're a **Viber** — but you're still doing all the work manually.

**Transition**: *"So you know what to feed AI. But who's doing the feeding? Right now, it's still you — copy-pasting, finding files, assembling context by hand. What if Dory could do that herself?"*

---

### Level 4: "Let AI Drive" (Slides 27-32)

**v2 change**: Guardrails (Trust But Verify, Hands on Wheel) now come at the END of this section instead of at the end of Level 3. MCP deep-dive removed — buzzword referenced inline in Connections slide. The reader should feel uneasy about handing AI the keys BEFORE we address trust.

---

### Slide 27: "The Copy-Paste Trap"
**Layout**: Steps (vertical 4-step flow)
**Content**:
- Headline: **"The Copy-Paste Trap"**
- 4-step manual workflow with "you" icon:
  1. You decide which documents to provide
  2. You copy-paste into the AI chat
  3. You read the output
  4. You manually apply it
- Problems: You're the bottleneck / You don't know what context AI needs / You're doing grunt work
- Footer: *"You're using a Ferrari to carry groceries."*
**Speaker notes**: The copy-paste cycle is so universal it's invisible. Drawing it as a diagram makes people see it.
**Transition**: "What if we flipped this?"

---

### Slide 28: "Hand Dory the Keys"
**Layout**: Steps (same 4-step flow, agent-driven)
**Content**:
- Headline: **"Hand Dory the Keys"**
- Redesigned flow — agent drives:
  1. Agent retrieves its own context
  2. Agent identifies gaps, goes back for more
  3. Agent creates/edits outputs directly
  4. You review and approve
- *"Same Dory. Same memory issues. But now she has hands, eyes, and a to-do list."*
- Chef intro: *"One great chef who finds ingredients, preps, cooks, and plates. You taste-test at the end."*
**Speaker notes**: Visual contrast with slide 27 is the whole point. Human moved from "operator at every step" to "reviewer at the end." Chef metaphor sets up Level 5.
**Transition**: "But an agent can only work with what it can reach..."

---

### Slide 29: "Connections Are Everything"
**Layout**: Bullet list with icons
**Content**:
- Headline: **"Connections Are Everything"**
- Each connection with icon:
  - Web search/fetch — research and fact-check
  - Email access — read context, draft responses
  - Document access — policies, templates, past work
  - Database access — query real data
  - Calendar access — scheduling context
  - Custom connections — anything you can imagine *(via an emerging standard called MCP — think "USB-C for AI." One connector works with every tool.)*
- Footer: *"Think of connections like giving Dory a phone, a filing cabinet, and a library card."*
**Speaker notes**: MCP gets a single-line mention here rather than a dedicated slide — enough for the non-technical audience to know the buzzword, not so much that it breaks the flow. Full MCP detail available in appendix for Q&A.
**Transition**: "Let's see what this changes for our proposal."

---

### Slide 30: "The Proposal — With Connections"
**Layout**: Two column (without → with)
**Content**:
- Headline: **"The Proposal — With Connections"**
- Left — **Without** (red/muted):
  - Copy-paste HR handbook, survey results, team structure
  - Forget the budget memo
  - Proposal misses cost constraints
  - VP asks about it — too late
- Right — **With** (green/highlighted):
  - Agent reads HR system directly
  - Pulls survey data automatically
  - Finds the budget memo you forgot
  - Flags a policy constraint you didn't know existed
- Footer: *"The agent found context you wouldn't have thought to provide."*
**Speaker notes**: The forgotten budget memo is the killer detail. Everyone has this story. The agent doesn't forget — it searches systematically.
**Transition**: "Powerful. But can we trust it with all that access?"

---

### Slide 31: "Trust, But Verify"
**Layout**: Bullet list (three rules)
**Content**:
- Headline: **"Trust, But Verify"**
- Three rules:
  1. **Never trust numbers you didn't provide.** If it can't cite a source, it made it up.
  2. **Verify claims against sources.** AI output = first draft, not final answer.
  3. **Use AI for drafts, not decisions.** Your judgment is the last step.
- Footer: *"Dory is brilliant and helpful. Dory also sometimes remembers things that never happened. Love Dory. Fact-check Dory."*
**Speaker notes**: NOW this slide lands. The reader just watched us hand AI the keys to documents, databases, and workflows. They should be feeling "Wait, can I trust it with all that?" This addresses the unease at exactly the moment it's felt.
**Transition**: "And here's when to be especially careful..."

---

### Slide 32: "When to Keep Your Hands on the Wheel"
**Layout**: Bullet list (four situations)
**Content**:
- Headline: **"When to Keep Your Hands on the Wheel"**
- Four situations:
  - Sensitive/confidential data — only approved/enterprise tools
  - Final legal/compliance language — AI drafts, humans approve
  - Anything where being wrong has serious consequences
  - When the AI's answer "feels right" but you can't verify it — *the most dangerous moment*
- Footer: *"AI is a power tool, not autopilot. You're still the pilot."*
- Closer: *"Surgeons trust scalpels. They still look where they cut."*
**Speaker notes**: The fourth bullet matters most — the "feels right" trap. AI outputs are polished and confident by default.

**Persona milestone**: You're no longer a **Viber** — you've let go of the wheel. You're approaching **AI-First**, but you're still working with a single agent. One last leap.

**Transition**: *"One agent doing one task is powerful. But real work has multiple steps. What if you had a whole team of Dorys?"*

---

### Level 5: "Orchestrate" (Slides 33-40)

**v2 change**: Skills (previously in Level 3) are now introduced WITHIN the chaining section as "every chef's playbook." The onboarding proposal is the running example throughout — no switching to other use cases. Phase 0 smell test added.

---

### Slide 33: "One Chef vs. A Kitchen Brigade"
**Layout**: Two column (comparison visual)
**Content**:
- Headline: **"One Chef vs. A Kitchen Brigade"**
- Left — **Level 4: One Chef:** Single chef, everything solo. *"Works for single tasks. But a 10-course dinner alone = burnout, mistakes, forgotten appetizer."*
- Right — **Level 5: Kitchen Brigade:** Multiple chefs at stations. *"A classroom of Dorys, each doing one focused step. Each fresh, focused, brilliant at one thing."*
- Footer: *"The trick isn't making one AI smarter. It's making many AIs work together."*
**Speaker notes**: LLMs are bad at long chains but excellent at focused tasks. Kitchen brigade leverages the strength. Third Dory touchpoint.
**Transition**: "Here's how that works with our proposal..."

---

### Slide 34: "Prompt Chaining"
**Layout**: Steps (horizontal 4-phase flow)
**Content**:
- Headline: **"Prompt Chaining"**
- Back to the onboarding proposal — the chain visualized:
  - **Agent 1 (Research):** reads HR handbook, pulls survey data, finds budget memo, gathers stats → *Output: structured brief*
  - **Agent 2 (Draft):** receives only the brief (not every raw document). Writes the proposal → *Output: polished proposal*
  - **Agent 3 (Review):** receives the draft + company policies. Checks compliance, flags gaps → *Output: final draft + notes*
  - **You:** review, judge, approve
- Key principles below:
  - Each link has a single, clear job
  - Context is filtered between steps (not everything passes through)
  - Quality compounds — each step builds on verified output
- Callout box: **Smell test:** *"If your initial prompt and context are getting long and complex, that's a signal you need a Phase 0 — an agent whose only job is to figure out what the rest of the chain needs."*
**Speaker notes**: The onboarding proposal is now broken into focused steps. Each agent gets only the context it needs. The Phase 0 tip is a practical takeaway — complexity of setup = indicator you should be chaining.
**Transition**: "The key rule..."

---

### Slide 35: "The Chain Rule"
**Layout**: Single message
**Content**:
- Bold centered: **"Break big tasks into focused steps. Pass results forward. Filter context between each."**
- Below: *"Each agent does one thing well. The chain does everything well."*
**Speaker notes**: Distilled principle. The "write this down" moment.
**Transition**: "But how does each agent in the brigade know what to do?"

---

### Slide 36: "Skills: Every Chef's Playbook"
**Layout**: Single message with visual
**Content**:
- Headline: **"Skills: Every Chef's Playbook"**
- *"How does each Dory in the brigade know what to do?"*
- Definition: *"Predefined rules, instructions, templates, and context packages — injected into the AI's context only when relevant. Think of them as the specialized training manual each chef at each station receives."*
- The connection to chains: *"Agent 1 (Research) gets the 'Research Standards' skill. Agent 3 (Review) gets the 'Leadership Proposals' and 'Compliance Policy' skills."*
- *"Write once, use forever. Every time the chain runs, each agent already knows its specialty."*
- Stat: Organizations investing in context architecture see 50% faster responses and 40% higher quality outputs. *Source: CodeConductor*
**Speaker notes**: Skills are introduced HERE — after the reader understands chains and the kitchen brigade. The framing is "how you program each Dory," not an abstract concept. Much more motivating than v1's standalone introduction.
**Transition**: "Let's see skills loaded onto our onboarding chain..."

---

### Slide 37: "Skills in Action"
**Layout**: Three column (three agents with skills)
**Content**:
- Headline: **"Skills in Action"**
- Back to the onboarding chain — skills loaded at each station:
  - **Agent 1 (Research)** + "Research Standards" skill: where to look, what data to prioritize, how to structure the brief. Already knows the company's data sources.
  - **Agent 2 (Draft)** + "Leadership Proposals" skill: the VP's preferred format, tone, level of detail, how to frame costs. Every proposal sounds like it was written for this audience.
  - **Agent 3 (Review)** + "Compliance Policy" skill: regulations, required disclaimers, approval workflows. Catches policy gaps you didn't know existed.
- Footer: *"Without skills, each agent starts from scratch. With skills, each agent already knows its specialty before the chain even begins."*
**Speaker notes**: Same onboarding chain from slide 34, now upgraded with skills. The audience sees the concrete difference — not abstract, but the actual playbooks their agents would use.
**Transition**: "Why does this matter so much?"

---

### Slide 38: "Why Skills Change Everything"
**Layout**: Bullet list
**Content**:
- Headline: **"Why Skills Change Everything"**
- Four bullets:
  - **Reusable** — write once, use forever
  - **Consistent** — every interaction gets the same quality context
  - **Scalable** — works for 1 person or 10,000
  - **Focused** — only loads what's relevant, keeping each Dory's attention on track
- Footer: *"And they compound. Your feedback from each chain run becomes new skills. The brigade gets smarter every time."*
**Speaker notes**: The four properties are what make skills transformative vs. just helpful. The compounding beat sets up the payoff in slide 42.
**Transition**: "And these exist everywhere — they just have different names."

---

### Slide 39: "Same Concept, Many Names"
**Layout**: Single message
**Content**:
- Headline: **"Same Concept, Many Names"**
- Visual showing equivalences: "Custom instructions" = "System prompts" = "Rules" = "Skills"
- *"Whether triggered by you, the app, or the AI itself differs across tools. The principle is identical."*
- *"If your tool has a way to save reusable instructions, use it. That's a skill."*
**Speaker notes**: Prevents thinking skills only exist in one tool. ChatGPT custom instructions, Claude Project rules, system prompts — all skills.
**Transition**: "Let's zoom out on what just happened..."

---

### Slide 40: "GPS, Not Directions"
**Layout**: Two column (comparison metaphor)
**Content**:
- Headline: **"GPS, Not Directions"**
- Left — **Prompt Engineering:** Giving directions for each individual trip. Effort every time.
- Right — **Context Engineering + Skills:** Programming a GPS with home, office, preferences, traffic. Gets smarter the more you invest. Skills = the saved locations AND the instruction manual for each chef in the kitchen brigade.
- Footer: *"Level 2 made you better at asking. Level 3 made AI better at understanding. Level 4 let AI drive. Level 5 put a whole team on the road — and skills are the map each driver follows."*
**Speaker notes**: Crystallizes the full journey. Each level built on the last. The GPS metaphor ties all five together.
**Transition**: *"Let's see the full journey for our running example..."*

---

### The Payoff (Slides 41-43)

---

### Slide 41: "The Manual Way: 1.5 Hours of You"
**Layout**: Steps (7-step flow with times)
**Content**:
- Headline: **"The Manual Way: 1.5 Hours of You"**
- 7 steps with time per step:
  1. Search for onboarding docs and survey data (20 min)
  2. Copy-paste into AI, ask for draft (10 min)
  3. Read output, realize it's missing budget context (5 min)
  4. Find budget data, re-prompt (15 min)
  5. Reformat to leadership template (20 min)
  6. Ask AI to review draft (10 min)
  7. Manually apply suggestions (15 min)
- Total: **~1.5 hours of you being the bottleneck**
**Speaker notes**: This is the manual workflow the audience has watched evolve through the entire deck. Now it's at full scale and the pain is vivid.
**Transition**: "Now the chained version..."

---

### Slide 42: "The Chained Way: 15 Minutes of Judgment"
**Layout**: Steps (4-step flow with prompt snippets)
**Content**:
- Headline: **"The Chained Way: 15 Minutes of Judgment"**
- 4 steps with actual prompt snippets:
  1. **Agent 1 — Research:** *"Research our onboarding process. Pull metrics from HR, read the last 3 surveys, summarize pain points."* → Research brief
  2. **Agent 2 — Draft:** *"Using this brief, draft a proposal to reduce onboarding from 4 to 2 weeks. One-page exec brief for VP of People. Be radically honest."* → Polished proposal
  3. **Agent 3 — Review:** *"Review against our leadership template and compliance policy. Flag gaps, format correctly, list items needing human judgment."* → Final draft + notes
  4. **You:** Review, adjust, approve. **~15 minutes** — the part only humans can do: judgment.
- Footer: *"Same proposal. 15 minutes of judgment instead of 1.5 hours of grunt work."*
- Skills compounding beat: *"And next time? Your feedback becomes skills. The VP's format → 'Leadership Proposals' skill. Compliance gaps → updated 'Compliance Policy' skill. The chain gets smarter every time — even though Dory won't remember, the skills will."*
**Speaker notes**: Emotional climax. The audience watched this proposal evolve from slide 15's vague prompt through five iterations, context engineering, connections — now a fully automated chain with skills. The skills compounding beat is the final Dory touchpoint.
**Transition**: "Let's zoom all the way out..."

---

### Slide 43: "From Asking to Orchestrating"
**Layout**: Steps (horizontal 4-stage evolution)
**Content**:
- Headline: **"From Asking to Orchestrating"**
- Return to the spectrum from slide 2. Personas as milestones, levels as steps:
  - **AI Skeptic** → *Levels 0-1 got you past this:* you now know what AI is and why it matters
  - **AI Questioner** → *Levels 2-3 got you past this:* you prompt well, you understand context, you get good results
  - **AI Viber** → *Level 4 got you past this:* you let agents drive, you connected them to your world
  - **AI-First** → *Level 5 brought you here:* you orchestrate chains, skills compound, humans judge
- Footer: *"You walked in as a Questioner. This deck just showed you the path to AI-First."*
**Speaker notes**: Full-circle moment. The spectrum from slide 2, but now each persona is bridged to the levels that got you past it. Don't rush this — let the audience see how far they've come.
**Transition**: *"Now let's make it real..."*

---

### "Level Up" (Slides 44-45)

---

### Slide 44: "Your AI Toolkit"
**Layout**: Comparison table
**Content**:
- Headline: **"Your AI Toolkit"**

| Category | Tools | Notes |
|----------|-------|-------|
| **General purpose** | ChatGPT, Claude, Gemini | Start here. Free tiers available |
| **In your workflow** | Microsoft Copilot, Gemini in Workspace | Already in your work tools |
| **For developers** | GitHub Copilot, Cursor, Claude Code | AI-first coding |
| **For connections** | MCP servers, Zapier AI, custom integrations | Level 4-5 territory |

**Speaker notes**: Practical, not exhaustive. The audience should know which tool to try first for their role.
**Transition**: "Now pick one task and try it..."

---

### Slide 45: "The 30-Day Challenge"
**Layout**: Timeline (4 weeks horizontal)
**Content**:
- Headline: **"The 30-Day Challenge"**
- Subhead: *"One task. Four weeks. Four persona crossings."*
- Timeline:
  - **Week 1 — Become a better Questioner (Level 2):** Specific, structured prompt. Compare to manual. Notice the phrasing difference.
  - **Week 2 — Cross into Viber (Level 3):** Add context. Ask AI to ask clarifying questions. Notice the jump.
  - **Week 3 — Start going AI-First (Level 4):** Agent with connections. Let it pull context itself. Notice what it finds.
  - **Week 4 — Full AI-First (Level 5):** Break into phases. Chain them. Compare to Week 1. *You're orchestrating now.*
- Note: *"Weeks 3-4 may require new tools — the toolkit slide has starting points."*
- Footer: *"Four weeks. One task. Same journey this deck just took you on."*
**Speaker notes**: Most actionable takeaway. Same task across four weeks mirrors the deck's progression. Now framed as persona crossings for motivation.

---

### Closing (Slides 46-47)

---

### Slide 46: "Full Circle"
**Layout**: Single message with callback
**Content**:
- Headline: **"Full Circle"**
- *"Remember the person spending 45 minutes copy-pasting into ChatGPT?"*
- Four lines:
  - They learned to prompt with specificity — became a **Viber** *(Levels 2-3)*
  - They let the agent find what it needed — started going **AI-First** *(Level 4)*
  - They chained the whole workflow — full **AI-First** *(Level 5)*
  - They were a **Questioner** who became **AI-First**
- Bold: **"The same task. Two minutes. That's the trick. Now you know it too."**
**Speaker notes**: Emotional close. The callback lands the entire arc. Persona language makes it concrete — the person from slide 1 went from Questioner to AI-First. Pause after "Now you know it too."

---

### Slide 47: "Now Go Try It"
**Layout**: Call to action
**Content**:
- Bold centered: **"The secret was never in the AI. It was in knowing how to work with it."**
- Below: **"Now go try it — start with one task, this week."**
- Contact information / resources / QR code
**Speaker notes**: Clean exit. One task, this week — not "transform everything."

---

## Visual Notes

- **Color palette**: TBD during design. Suggest a professional palette with clear contrast for wrong/right comparisons (muted red vs. highlighted green throughout Level 2).
- **Imagery style**: Clean diagrams and illustrations over stock photos. Dory references should use stylized illustrations, not screenshots from the movie (copyright). Word cloud (slides 7-8) should feel overwhelming on purpose.
- **Custom visuals required**:
  - AI Adoption Spectrum with persona labels (slides 2, 43, 46) — horizontal 4-stage progression, reused as full-circle callback
  - Word cloud (slides 7-8) — dense buzzword cloud with question callout variant
  - AI Stack diagram (slide 9) — vertical 4-layer stack
  - Prompt iteration comparisons (slides 16-20) — consistent wrong/right two-column layout
  - Prompt chaining flow with onboarding agents (slide 34) — horizontal 4-phase diagram with agent labels
  - Manual vs. chained workflow (slides 41-42) — step-by-step comparison
  - Kitchen brigade visual (slide 33) — one chef vs. multiple stations
  - Skills overlay on chain (slide 37) — same chain from slide 34 with skill labels added
  - Dory illustration (slides 23, 28, 33, 42) — consistent character across four touchpoints
- **Layout consistency**: Level 2 iterations all use the same two-column wrong→right layout for visual rhythm. Level 4-5 comparisons also use consistent before→after layouts.
- **Persona milestone markers**: Consider a subtle visual cue (e.g., the spectrum from slide 2 as a small progress bar) at section transitions showing which persona crossing just happened.
- **Brand requirements**: None specified yet. Check with company brand guidelines before design.
