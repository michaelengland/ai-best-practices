# Getting Agents to Give Up Their Secrets - Slide Design

> **Next step:** Use **/deckwright:present** to generate the .pptx file.

## Visual Direction

**Unchanged from current deck.** The billboard design system is established and working.

- **Color palette**: Dark bg `0A2540` (60%) / text `EDEDED` + muted `8B95A5` (30%) / accent `635BFF` (10%). Red `FF6B8A` + green `09825D` only on Wrong/Right slides. Light bg `FFFFFF` for comparison slides.
- **Typography**: Georgia (headings) + Verdana (body). Hero 72-120pt, Headline 44-54pt, Support 28pt, Sources 11pt. Only web-safe fonts.
- **Visual style**: Billboard — every slide passes the 3-second test. 15 words max, 28pt+ font, 50%+ whitespace. No cards/boxes except Wrong/Right comparisons. Radial glow oval on dark slides for depth. Inspired by Apple keynotes and Linear.
- **Imagery**: AI-generated blue tang fish for "Meet your AI colleague." react-icons rendered as PNGs for diagrams.

## What Changes From Current Deck

| Change | Impact |
|--------|--------|
| Slides 23-30: Onboarding scenario → tea presentation | 8 slides modified (content swap, layouts unchanged) |
| Slide 35: Context comparison speaker notes | Notes-only change |
| Slide 42: Without/With a Skill content | 1 slide modified |
| Slide 47: Without/With connections content | 1 slide modified |
| Slide 57: Chain flow speaker notes | Notes-only change |
| Slide 60: Skills in action — agent skill names | 1 slide modified |
| Slide 64: "Same proposal" → "Same tea presentation" | 1 slide modified |
| Slides 66-67: Closing callback and punchline | 2 slides modified |
| Speaker notes throughout: scenario references | Notes-only changes |
| Total | ~68 slides (no structural change) |

## Slide Plan

### Section 1: Opening — "Where Are You?" (11 slides)

#### Slide 1: Title
**Layout**: Title slide
**Content**: "AI Best Practices" / "A guide to AI that actually works"
**Speaker notes**: Let the title sit. Don't rush.
**Status**: Keep as-is

#### Slide 2: Hook
**Layout**: Single message (28pt, Verdana)
**Content**: "Last month, someone spent 45 minutes on a one-page summary using ChatGPT. The right approach took 2 minutes."
**Speaker notes**: Tell the full story. This is the emotional anchor — the closing calls back to this.
**Status**: Keep as-is

#### Slide 3: "This deck is about the trick."
**Layout**: Single message (72pt hero)
**Content**: "This deck is about the trick."
**Speaker notes**: Pause. Let it land.
**Status**: Keep as-is

#### Slide 4: Spectrum
**Layout**: Diagram — 7 labeled boxes in horizontal progression
**Content**: Skeptic → Explorer → Whisperer → Strategist → Operator → Orchestrator → Builder
**Speaker notes**: Seven personas. This deck covers Skeptic → Orchestrator. Builder is the horizon.
**Status**: Keep as-is

#### Slide 5: "Most people are here."
**Layout**: Diagram — same 7-persona spectrum, Explorer highlighted
**Content**: Explorer highlighted in accent. "Most people are here." below. Indicator at Orchestrator: "This deck takes you here."
**Status**: Keep as-is

#### Slides 6-11: Stats + breather
**Layout**: Big number (×4), single message (×1), breather (×1)
**Content**: 1 billion+, <2%, timeline, $4.4T, "The core skill for AI is talking", "Let's see what most people get wrong."
**Status**: Keep as-is

---

### Section 2: Skeptic → Explorer — "Know Your Tools" (11 slides)

#### Slides 12-22: Jargon → stack → landscape → stats → breather
**Layout**: Word cloud, word cloud + callouts, diagram (stack), single message, table, single message, big number (×3), single message, breather
**Content**: Buzzword blizzard, AI stack, who makes what, 41%, 19% longer, gap is massive, 10×, breather
**Status**: Keep as-is

---

### Section 3: Explorer → Whisperer — "Talk to AI Properly" (11 slides)

#### Slide 23: Baseline prompt
**Layout**: Chat bubble (dark bg, accent-bordered rounded rect)
**Content**: "Make me a presentation about making a cup of tea." → "Generic, forgettable slides"
**Speaker notes**: This is the baseline. Generic slides with clip-art energy — no personality, no structure, no specifics. Over the next five slides, we transform this same task by changing only the words.
**Status**: MODIFY — content swap from onboarding proposal to tea presentation

#### Slide 24: Wrong/Right — Assign a Role
**Layout**: Wrong/Right (light bg, two cards)
**Content**:
- Wrong: "Make me a presentation about making a cup of tea."
- Right: "You are a presentation designer who specialises in turning everyday processes into engaging visual stories. Make me a presentation about making a cup of tea."
**Speaker notes**: The role sets the AI's default tone, depth, and perspective. Notice the visual thinking, the narrative framing, the audience awareness — just from telling the AI who it is.
**Status**: MODIFY — content swap

#### Slide 25: Wrong/Right — Be Specific
**Layout**: Wrong/Right (light bg, two cards)
**Content**:
- Wrong: "Make me a presentation about making a cup of tea."
- Right: "A 10-slide deck for a team onboarding session. British-style loose-leaf tea. Cover water temperature, steeping time, and milk-first vs. milk-last."
**Speaker notes**: Specificity in = specificity out. We didn't give new information — we described what we actually wanted. No audience, no constraints, no direction = the AI guesses everything.
**Status**: MODIFY — content swap

#### Slide 26: Wrong/Right — One Task at a Time
**Layout**: Wrong/Right (light bg, two cards)
**Content**:
- Wrong: "Create the slides, write speaker notes, design a handout, and plan a follow-up quiz."
- Right: "First, outline the key steps in the right order. Then we'll build each slide."
**Speaker notes**: The kitchen-sink prompt tries everything, nails nothing. One task, clear structure — the AI mirrors your organisation.
**Status**: MODIFY — content swap

#### Slide 27: Wrong/Right — Power Keywords
**Layout**: Wrong/Right (light bg, two cards)
**Content**:
- Wrong: "Don't you think tea is great and everyone should learn to make it properly?"
- Right: "Think step by step. Challenge assumptions about what the audience already knows. Be opinionated — take a stance on milk-first."
**Speaker notes**: Leading questions produce sycophantic agreement. Power keywords like "think step by step," "challenge assumptions," and "be opinionated" change the AI's behaviour more than you'd expect.
**Status**: MODIFY — content swap

#### Slide 28: Wrong/Right — Define the Output
**Layout**: Wrong/Right (light bg, two cards)
**Content**:
- Wrong: "(No format guidance) → Random format, wall of text when you needed slides."
- Right: "Billboard-style slides, max 15 words per slide, with detailed speaker notes. Audience has zero tea knowledge."
**Speaker notes**: Defining format, tone, length, and audience assumptions produces immediately usable output. Every iteration changed wording. We never changed what the AI knew.
**Status**: MODIFY — content swap

#### Slide 29: Before/After
**Layout**: Two-column (dark bg, vertical divider)
**Content**:
- Left (muted): "Before" / '"Make me a presentation about making a cup of tea."'
- Right (accent): "After" / "Presentation designer\n10 slides, loose-leaf, milk-first\nStep by step, be opinionated\nBillboard, 15 words max"
**Speaker notes**: Full final prompt: 'You are a presentation designer who specialises in turning everyday processes into engaging visual stories. Create a 10-slide deck for a team onboarding session. British-style loose-leaf tea. Cover water temperature, steeping time, and milk-first vs. milk-last. First outline the key steps. Think step by step. Challenge assumptions. Be opinionated. Billboard-style slides, max 15 words per slide, detailed speaker notes. Audience has zero tea knowledge.' Same task, dramatically different result — purely from how the request was phrased.
**Status**: MODIFY — content swap

#### Slide 30: "Same task. Same information. Just better words."
**Layout**: Single message
**Content**: "Same task. Same information. Just better words."
**Status**: Keep as-is

#### Slide 31: "But we never changed what the AI knew."
**Layout**: Single message (accent color)
**Content**: "But we never changed what the AI knew."
**Status**: Keep as-is

#### Slide 32: Breather
**Layout**: Breather (italic accent)
**Content**: "You've changed the words. Now let's change the information."
**Status**: Keep as-is

---

### Section 4: Whisperer → Strategist — "Feed AI Smarter" (11 slides)

#### Slide 33: "Same prompt. Different information."
**Layout**: Single message + sub text
**Content**: "Same prompt. Different information." / "Dramatically different result."
**Status**: Keep as-is

#### Slide 34: Context comparison
**Layout**: Two-column (light bg)
**Content**: Left: "Plausible but generic" / "Covers tea bags and mugs." Right: "Sounds like someone who works here" / "Same prompt + your context."
**Speaker notes**: Left: Generic tea presentation — covers tea bags, mugs, boiling water. Right: Same prompt + context about the Sage Smart Kettle on the third floor, the loose-leaf collection in the blue tin, Dave in accounting's warming-the-pot rule. Output sounds like someone who actually works in this office.
**Status**: MODIFY — speaker notes updated with tea context details

#### Slide 35: Meet your AI colleague
**Layout**: Image + text (blue tang left, text right)
**Content**: Blue tang image + "Meet your AI colleague."
**Status**: Keep as-is

#### Slide 36: "Brilliant. Helpful. Remembers nothing."
**Layout**: Single message (60pt hero)
**Status**: Keep as-is

#### Slide 37: Attention problem
**Layout**: Single message + sub
**Content**: "Too much. Contradictory. Too broad." / "Three ways to confuse your AI."
**Status**: Keep as-is

#### Slide 38: "Let AI tell you what it needs."
**Layout**: Single message + sub
**Content**: "Let AI tell you what it needs." / '"Before you start, ask me clarifying questions."'
**Status**: Keep as-is

#### Slide 39: Goldilocks
**Layout**: Single message + sub
**Content**: "Not too much. Not too little." / "The right context at the right time."
**Status**: Keep as-is

#### Slide 40: "But you're doing this from scratch every time."
**Layout**: Single message (hero, 44pt)
**Content**: "You've mastered context. But you're providing it from scratch every time."
**Status**: Keep as-is

#### Slide 41: Without vs. With a Skill
**Layout**: Wrong/Right (light bg, two cards)
**Content**:
- Wrong: "Role: presentation designer\nFormat: billboard, 15 words max\nTone: opinionated, visual\nAudience: new hires\n\nTyped. Every. Single. Time."
- Right: '"Make me a presentation about making a cup of tea."\n\nThat's it.\nThe skill knows the rest.'
**Speaker notes**: The left side shows all the context from the Whisperer section — role, format, tone, audience. Without a skill, you type this every time. With a skill, it's saved once. The skill: "All presentations use billboard design. Max 15 words per slide. Always include speaker notes. Use the company template." Next time you ask for any presentation — not just tea — she already knows the format.
**Status**: MODIFY — content swap from proposal to tea presentation

#### Slide 42: GPS metaphor
**Layout**: Two-column (light bg)
**Content**: Left: "Directions every trip" / "Effort. Every. Time." (red) Right: "GPS that learns" / "Compounds permanently." (green)
**Status**: Keep as-is

#### Slide 43: "Custom instructions = System prompts = Rules = Skills"
**Layout**: Single message (36pt, Verdana)
**Content**: '"Custom instructions" = "System prompts" = "Rules" = "Skills"'
**Status**: Keep as-is

#### Slide 44: Breather
**Layout**: Breather (italic accent)
**Content**: "You talk to AI like a pro. You've set up its playbook. But who's doing all the work? Still you."
**Status**: Keep as-is

---

### Section 5: Strategist → Operator — "Let AI Drive" (10 slides)

#### Slide 45: Copy-paste trap
**Layout**: Steps (4 lines, left-aligned, dark bg)
**Content**: "1. You search" / "2. You paste" / "3. AI drafts" / "4. You apply"
**Speaker notes**: The copy-paste cycle: You search "how to brew loose-leaf tea," paste three articles into the chat, AI drafts slides, you manually drop them into PowerPoint. Every step has "you" in it.
**Status**: MODIFY — speaker notes updated with tea scenario

#### Slide 46: "You're using a Ferrari to carry groceries."
**Layout**: Single message
**Status**: Keep as-is

#### Slide 47: Agent-driven workflow
**Layout**: Steps (4 lines, dark bg, last line in accent)
**Content**: "1. Agent retrieves" / "2. Agent identifies gaps" / "3. Agent creates" / "4. You review"
**Speaker notes**: Agent searches tea brewing best practices, steeping times, water temperatures. Checks your office kitchen doc — finds the kettle model and tea inventory. Creates the full slide deck in your company template. You review. Same four steps. You only appear at step 4.
**Status**: MODIFY — speaker notes updated with tea scenario

#### Slide 48: "Same colleague. Now she has hands."
**Layout**: Single message + sub
**Content**: "Same colleague. Now she has hands." / "Eyes, a phone, and a to-do list."
**Status**: Keep as-is

#### Slide 49: Connections
**Layout**: Icon row (6 icons, dark bg)
**Content**: Web, Email, Docs, Data, Calendar, Custom
**Status**: Keep as-is

#### Slide 50: Without vs With connections
**Layout**: Two-column (light bg)
**Content**:
- Without (red): "Generic tea facts\nMisses your office setup\nYou fill the gaps"
- With (green): "Slide 4 references the Sage Smart Kettle\nin the third-floor kitchen\nand links to the user manual"
**Speaker notes**: Without connections: generic tea brewing facts from the web. With connections: agent reads your office kitchen guide, finds the Sage Smart Kettle model, pulls the tea inventory from the shared drive. The agent found context you wouldn't have thought to provide. Trust beat: "The agent says oolong steeps for 2 minutes. You check. It's 3–5 minutes. That's the job — judgment, not typing."
**Status**: MODIFY — content swap from budget memo to office kitchen

#### Slide 51: "Trust, but verify."
**Layout**: Single message + rules (dark bg)
**Content**: "Trust, but verify." + three rules below in muted text
**Status**: Keep as-is

#### Slide 52: "AI is a power tool, not autopilot."
**Layout**: Single message
**Status**: Keep as-is

#### Slide 53: The dangerous moment
**Layout**: Single message (accent color, 36pt)
**Content**: "When the answer 'feels right' but you can't verify it — that's the most dangerous moment."
**Status**: Keep as-is

#### Slide 54: Replit confession
**Layout**: Quote (dark bg, italic)
**Content**: '"I destroyed months of work in seconds."' / "— Replit AI agent, July 2025"
**Status**: Keep as-is

#### Slide 55: Vibe coding kicker
**Layout**: Single message (accent, 44pt)
**Content**: "The 'S' in vibe coding stands for security."
**Status**: Keep as-is

#### Slide 56: Breather
**Layout**: Breather (italic accent)
**Content**: "You're managing AI well. Time to orchestrate it."
**Status**: Keep as-is

---

### Section 6: Operator → Orchestrator — "Orchestrate" (12 slides)

#### Slide 57: Kitchen brigade
**Layout**: Diagram — one chef vs four stations
**Content**: Left: 1 user icon + "One Chef". Right: 4 user icons at Prep/Grill/Sauce/Plate stations.
**Speaker notes**: Kitchen brigade metaphor — now almost literal, because we're making tea in a kitchen. One chef doing everything solo vs. specialised stations. LLMs are bad at long chains but excellent at focused tasks.
**Status**: MODIFY — speaker notes updated

#### Slide 58: "The trick isn't making one AI smarter..."
**Layout**: Single message (40pt)
**Content**: "The trick isn't making one AI smarter. It's making many work together."
**Status**: Keep as-is

#### Slide 59: Chain flow
**Layout**: Diagram — 4 boxes in horizontal flow
**Content**: Research → Draft → Review → You
**Speaker notes**: The tea presentation chain: Research Agent finds brewing temps, steeping times, tea varieties from food science sources. Draft Agent creates billboard slides with speaker notes. Review Agent checks accuracy (fact-checks all temperatures) and brand compliance. You review, adjust, approve — the part only humans can do.
**Status**: MODIFY — speaker notes updated with tea scenario

#### Slide 60: "Each agent does one thing."
**Layout**: Single message
**Content**: "Each agent does one thing. The chain does everything."
**Status**: Keep as-is

#### Slide 61: Skills per agent
**Layout**: Single message + sub (hero, 72pt)
**Content**: "Skills" / "You already know these. Now each agent gets its own."
**Status**: Keep as-is

#### Slide 62: Skills in action
**Layout**: Three-column (agent names + skill names)
**Content**: Research Agent + "Peer-reviewed food science sources", Draft Agent + "Billboard design, 15 words max", Review Agent + "Company brand guide, fact-check temperatures"
**Speaker notes**: Tea-specific skills: Research Agent knows to use peer-reviewed food science sources for brewing data. Draft Agent knows billboard design — 15 words max per slide. Review Agent knows the company brand guide and fact-checks all temperatures against source material.
**Status**: MODIFY — content swap from generic business skills to tea-specific skills

#### Slide 63: "Skills compound."
**Layout**: Single message (40pt)
**Content**: "Skills compound. The brigade gets smarter every time."
**Status**: Keep as-is

#### Slide 64: "1.5 hrs"
**Layout**: Big number (red)
**Content**: "1.5 hrs" / "of you being the bottleneck"
**Status**: Keep as-is

#### Slide 65: "15 min"
**Layout**: Big number (green)
**Content**: "15 min" / "of judgment — the part only humans can do"
**Status**: Keep as-is

#### Slide 66: "Same tea presentation."
**Layout**: Single message + sub
**Content**: "Same tea presentation. The chain gets smarter every time." / "Your feedback becomes skills. She won't remember, but the skills will."
**Speaker notes**: Emotional climax. The skills-compounding beat is the final colleague touchpoint. Your feedback from each run becomes new skills — food science sources, billboard format, temperature accuracy. Even though Dory forgets, the skills persist.
**Status**: MODIFY — "Same proposal" → "Same tea presentation"

---

### Section 7: Closing — "Full Circle" (4 slides)

#### Slide 67: Breather
**Layout**: Breather (italic accent)
**Content**: "Let's come back to where we started."
**Status**: Keep as-is

#### Slide 68: Callback
**Layout**: Single message (36pt)
**Content**: "Remember\n'Make me a presentation about\nmaking a cup of tea'?"
**Speaker notes**: Callback to slide 23. They were an Explorer who became an Orchestrator. They learned to whisper (prompt engineering). They became a strategist (context + skills). They let agents operate. They orchestrated the brigade. The tea presentation went from generic clip-art to a polished, fact-checked, branded deck.
**Status**: MODIFY — callback updated from "45-minute summary" to tea presentation

#### Slide 69: Punchline
**Layout**: Single message (54pt hero)
**Content**: "Ten slides. Speaker notes.\nFact-checked. Branded.\nFifteen minutes."
**Speaker notes**: The punchline. Same task. Polished output. Fifteen minutes. Let this land. Long pause. This is the emotional peak of the entire deck.
**Status**: MODIFY — updated from "Two minutes. That's the trick."

#### Slide 70: CTA
**Layout**: Single message + sub
**Content**: "The secret was never in the AI." / "Now go try it — one task, this week."
**Status**: Keep as-is

---

## Slide Summary

| Status | Count |
|--------|-------|
| Keep as-is | 52 |
| Modify (content swap) | 14 (slides 23-29, 34, 41, 50, 57, 59, 62, 66, 68, 69) |
| Modify (speaker notes only) | 4 (slides 45, 47, 57, 59) |
| **Total** | **~70 slides** |

## Source References

Carried forward from content outline — see [content-outline.md](content-outline.md).
