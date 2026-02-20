# Getting Agents to Give Up Their Secrets - Slide Design

> **Next step:** Use **/deck-flow:present** to generate the .pptx file.

## Visual Direction

**Unchanged from current deck.** The billboard design system is established and working.

- **Color palette**: Dark bg `0F0F1A` (60%) / text `E0E4E8` + muted `94A3B8` (30%) / teal accent `00B4D8` (10%). Red `E63946` + green `2D936C` only on Wrong/Right slides. Light bg `F8F9FA` for comparison slides.
- **Typography**: Georgia (headings) + Calibri (body). Hero 72-120pt, Headline 44-54pt, Support 28pt, Sources 11pt. Only web-safe fonts.
- **Visual style**: Billboard — every slide passes the 3-second test. 15 words max, 28pt+ font, 50%+ whitespace. No cards/boxes except Wrong/Right comparisons. Radial glow oval on dark slides for depth. Inspired by Apple keynotes and Linear.
- **Imagery**: AI-generated blue tang fish for "Meet your AI colleague." react-icons rendered as PNGs for diagrams.

## What Changes From Current Deck

| Change | Impact |
|--------|--------|
| Spectrum slides 4-5: 4 personas → 7 | 2 slides modified |
| Strategist section: skills relocated here | 3 slides added (1 new, 2 relocated) |
| Strategist breather: new wording | 1 slide modified |
| Orchestrator section: skills intro removed | 3 slides removed |
| Speaker notes throughout: persona names | Notes-only changes |
| Total | ~68 slides (net zero change) |

## Slide Plan

### Section 1: Opening — "Where Are You?" (11 slides)

#### Slide 1: Title
**Layout**: Title slide
**Content**: "Getting Agents to Give Up Their Secrets" / "A guide to AI that actually works"
**Speaker notes**: Let the title sit. Don't rush.
**Status**: Keep as-is

#### Slide 2: Hook
**Layout**: Single message (28pt, Calibri)
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
**Speaker notes**: Seven personas. This deck covers Skeptic → Orchestrator. Builder is the horizon — visible but beyond scope. "Find yourself on this spectrum."
**Status**: MODIFY — was 4 personas, now 7. Boxes need to be narrower. Font ~18pt. Builder box dimmed/greyed.

#### Slide 5: "Most people are here."
**Layout**: Diagram — same 7-persona spectrum, Explorer highlighted
**Content**: Explorer highlighted in teal. "Most people are here." below. Subtle indicator at Orchestrator: "This deck takes you here."
**Speaker notes**: Most readers will self-identify at Explorer. They've tried ChatGPT, maybe heard of prompt engineering.
**Status**: MODIFY — was Questioner highlighted, now Explorer. Add "This deck takes you here" indicator.

#### Slides 6-11: Stats + breather
**Layout**: Big number (×4), single message (×1), breather (×1)
**Content**: 1 billion+, <2%, timeline, $4.4T, "The core skill for AI is talking", "Let's see what most people get wrong."
**Status**: Keep as-is

---

### Section 2: Skeptic → Explorer — "Know Your Tools" (11 slides)

#### Slides 12-22: Jargon → stack → landscape → stats → breather
**Layout**: Word cloud, word cloud + callouts, diagram (stack), single message, table, single message, big number (×3), single message, breather
**Content**: Buzzword blizzard, AI stack, who makes what, 41%, 19% longer, gap is massive, 10×, breather
**Status**: Keep as-is. Speaker notes updated: "Skeptic → Explorer" at transition.

---

### Section 3: Explorer → Whisperer — "Talk to AI Properly" (11 slides)

#### Slides 23-33: Section divider → prompt iterations → before/after → cliffhanger → breather
**Layout**: Section divider, chat bubble, wrong/right (×5), two-column, single message (×2), breather
**Content**: Prompt Engineering divider, baseline prompt, 5 iterations (Role, Specificity, One Task, Keywords, Output), before/after, "Just better words", "But we never changed what the AI knew", breather
**Status**: Keep as-is. Speaker notes updated: "Explorer → Whisperer" at transition.

---

### Section 4: Whisperer → Strategist — "Feed AI Smarter" (11 slides)

#### Slide 34: "Same prompt. Different information."
**Layout**: Single message + sub text
**Content**: "Same prompt. Different information." / "Dramatically different result."
**Status**: Keep as-is

#### Slide 35: Context comparison
**Layout**: Two-column (light bg)
**Content**: Left: "Plausible but generic" / "Could be for any company." Right: "Sounds like someone who works here" / "Same prompt + your context."
**Status**: Keep as-is

#### Slide 36: Meet your AI colleague
**Layout**: Image + text (blue tang left, text right)
**Content**: Blue tang image + "Meet your AI colleague."
**Status**: Keep as-is

#### Slide 37: "Brilliant. Helpful. Remembers nothing."
**Layout**: Single message (60pt hero)
**Status**: Keep as-is

#### Slide 38: Attention problem
**Layout**: Single message + sub
**Content**: "Too much. Contradictory. Too broad." / "Three ways to confuse your AI."
**Status**: Keep as-is

#### Slide 39: "Let AI tell you what it needs."
**Layout**: Single message + sub
**Content**: "Let AI tell you what it needs." / '"Before you start, ask me clarifying questions."'
**Status**: Keep as-is

#### Slide 40: Goldilocks
**Layout**: Single message + sub
**Content**: "Not too much. Not too little." / "The right context at the right time."
**Status**: Keep as-is

#### Slide 41: "But you're doing this from scratch every time."
**Layout**: Single message (hero, 44pt)
**Content**: "You've mastered context. But you're providing it from scratch every time."
**Speaker notes**: The natural question after context engineering: "Do I have to feed all this context every time?" This slide plants the seed. Skills are the answer.
**Status**: NEW

#### Slide 42: GPS metaphor
**Layout**: Two-column (light bg)
**Content**: Left: "Directions every trip" / "Effort. Every. Time." (red) Right: "GPS that learns" / "Compounds permanently." (green)
**Speaker notes**: Prompt engineering = directions. Context engineering + skills = GPS. One compounds, the other doesn't.
**Status**: RELOCATED from current slide 60. Same visual, same content.

#### Slide 43: "Custom instructions = System prompts = Rules = Skills"
**Layout**: Single message (36pt, Calibri)
**Content**: '"Custom instructions" = "System prompts" = "Rules" = "Skills"'
**Speaker notes**: Same concept, many names across tools. ChatGPT custom instructions, Claude project rules, system prompts — all skills. If your tool has a way to save reusable instructions, use it.
**Status**: RELOCATED from current slide 59. Same visual, same content.

#### Slide 44: Breather
**Layout**: Breather (italic teal)
**Content**: "You talk to AI like a pro. You've set up its playbook. But who's doing all the work? Still you."
**Speaker notes**: Transition from Strategist to Operator. The audience can prompt, feed context, and set up persistent instructions. But they're still the bottleneck.
**Status**: MODIFY — new wording reflecting skills knowledge.

---

### Section 5: Strategist → Operator — "Let AI Drive" (10 slides)

#### Slides 45-54: Copy-paste trap → agent workflow → connections → trust → breather
**Layout**: Steps (×2), single message, single message + sub, icon row, two-column (light bg), single message + rules, single message (×2), breather
**Content**: 4-step manual flow, Ferrari metaphor, 4-step agent flow, "Same colleague. Now she has hands.", connections, without/with, "Trust, but verify." + 3 rules, "AI is a power tool", dangerous moment, breather
**Speaker notes**: Updated persona names: "Strategist → Operator" at transition.
**Status**: Keep as-is (content unchanged, slide numbers shift due to Strategist additions).

---

### Section 6: Operator → Orchestrator — "Orchestrate" (10 slides)

#### Slide 55: Kitchen brigade
**Layout**: Diagram — one chef vs four stations
**Content**: Left: 1 user icon + "One Chef". Right: 4 user icons at Prep/Grill/Sauce/Plate stations.
**Status**: Keep as-is

#### Slide 56: "The trick isn't making one AI smarter..."
**Layout**: Single message (40pt)
**Content**: "The trick isn't making one AI smarter. It's making many work together."
**Status**: Keep as-is

#### Slide 57: Chain flow
**Layout**: Diagram — 4 boxes in horizontal flow
**Content**: Research → Draft → Review → You
**Status**: Keep as-is

#### Slide 58: "Each agent does one thing."
**Layout**: Single message
**Content**: "Each agent does one thing. The chain does everything."
**Status**: Keep as-is

#### Slide 59: Skills per agent
**Layout**: Single message + sub (hero, 72pt)
**Content**: "Skills" / "You already know these. Now each agent gets its own."
**Speaker notes**: Brief — the audience learned skills in the Strategist section. This just connects the concept to chains: each agent in the brigade gets a focused skill set.
**Status**: REBUILD — was full skills introduction. Now a one-liner bridge.

#### Slide 60: Skills in action
**Layout**: Three-column (agent names + skill names)
**Content**: Research Agent + Research Standards, Draft Agent + Leadership Proposals, Review Agent + Compliance Policy
**Status**: Keep as-is

#### Slide 61: "Skills compound."
**Layout**: Single message (40pt)
**Content**: "Skills compound. The brigade gets smarter every time."
**Status**: Keep as-is

#### Slide 62: "1.5 hrs"
**Layout**: Big number (red)
**Content**: "1.5 hrs" / "of you being the bottleneck"
**Status**: Keep as-is

#### Slide 63: "15 min"
**Layout**: Big number (green)
**Content**: "15 min" / "of judgment — the part only humans can do"
**Status**: Keep as-is

#### Slide 64: "Same proposal."
**Layout**: Single message + sub
**Content**: "Same proposal. The chain gets smarter every time." / "Your feedback becomes skills. She won't remember, but the skills will."
**Status**: Keep as-is

---

### Section 7: Closing — "Full Circle" (4 slides)

#### Slide 65: Breather
**Layout**: Breather (italic teal)
**Content**: "Let's come back to where we started."
**Status**: Keep as-is

#### Slide 66: Callback
**Layout**: Single message (48pt)
**Content**: "Remember the 45-minute summary?"
**Speaker notes**: Callback to slide 2. They were an Explorer who became an Orchestrator. They learned to whisper, became a strategist, let agents operate, orchestrated the brigade.
**Status**: Keep as-is (notes updated for persona names)

#### Slide 67: Punchline
**Layout**: Single message (72pt hero)
**Content**: "Two minutes. That's the trick."
**Status**: Keep as-is

#### Slide 68: CTA
**Layout**: Single message + sub
**Content**: "The secret was never in the AI." / "Now go try it — one task, this week."
**Status**: Keep as-is

---

## Slide Summary

| Status | Count |
|--------|-------|
| Keep as-is | 58 |
| Modify (content/layout change) | 3 (slides 4, 5, 44) |
| Rebuild | 1 (slide 59 — skills intro simplified) |
| Relocate | 2 (GPS metaphor + "same concept many names" → Strategist) |
| New | 1 (slide 41 — "from scratch every time") |
| Remove | 1 ("Reusable. Consistent. Scalable. Focused." — covered in Strategist) |
| **Total** | **~68 slides** |

## Source References

Carried forward from content outline — see [content-outline.md](content-outline.md).
