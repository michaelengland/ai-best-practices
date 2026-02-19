# Billboard Redesign — Design Document

> **Next step:** Implement this design in `generate-deck.js` using the writing-plans skill.

## The Rule

Every slide must pass the **3-second billboard test**: if a viewer can't grasp the point in 3 seconds, the slide has too much on it. Everything else goes to speaker notes.

## What Changes

| Principle | Before | After |
|-----------|--------|-------|
| Words per slide | 40-80 | **6-15 max** |
| Ideas per slide | 2-4 | **1** |
| Min font size | 9pt | **28pt** |
| Cards/boxes | On ~30 slides | **Only on Wrong/Right slides (~6)** |
| Accent colors | 5+ | **2** (teal + one warm) |
| Whitespace | ~20% | **50%+** |
| Imagery | 0 | Placeholder rectangles for future images |
| Bullet points | ~15 slides | **0** (split into separate slides) |
| Takeaway strips | ~20 slides | **0** (move to notes or make it the slide) |

## Design System Changes

### Typography (only 3 treatments)

| Treatment | Font | Size | Color (dark) | Usage |
|-----------|------|------|-------------|-------|
| Hero | Georgia | 72-120pt | `FFFFFF` | The ONE thing on hero/stat slides |
| Headline | Georgia | 44pt | `E0E4E8` | Slide title (when needed) |
| Support | Calibri | 28pt | `94A3B8` | One line of context below hero text |

Nothing else appears on screen. No 15pt body. No 11pt labels. No 9pt meta.

### Colors (3 total beyond BG/text)

| Role | Hex | Usage |
|------|-----|-------|
| Accent | `00B4D8` | Teal — primary accent, subtext, highlights |
| Wrong | `E63946` | Red — only on Wrong/Right comparison slides |
| Right | `2D936C` | Green — only on Wrong/Right comparison slides |

Removed: `0891B2` (dark teal), `F59E0B` (amber), `64748B` (muted light), all card fills.

### Backgrounds

- **Dark slides** (~55): `0F0F1A` + radial glow (unchanged)
- **Light slides** (~6): `F8F9FA` — ONLY for Wrong/Right comparisons
- **No cards, no glass cards, no callout strips** — text floats in space

### Layout Rules

1. **Content occupies the center 60% of the slide** — generous margins on all sides
2. **Text is centered** by default (left-align only on Wrong/Right slides)
3. **One visual element per slide** — a number, a phrase, an image, or a simple diagram
4. **No decorative shapes** — no accent bars, no separator lines, no shadow boxes
5. **Speaker notes carry the detail** — every removed piece of text moves to notes

## Eliminated Elements

- `addDarkCard` / `addGlassCard` / `addCard` — removed entirely
- `addTakeaway` / `addFooterSep` / `addSourceCite` — removed (sources go to notes)
- `addBar` — removed
- `bulletSlide` helper — removed (bullets become separate slides)
- `threeCol` helper — removed (columns become separate slides)
- Shadow factory `sh()` — removed (no more cards)

## Kept Elements

- `darkSlide()` with radial glow — the ambient depth still works
- `breatherSlide()` — already perfect billboard design
- `singleMsg()` — already close, just needs larger fonts
- `sectionDivider()` — already close, trim subtitle text
- `wrongRight()` — kept but simplified (less text per card, larger font)

## New Slide Map

Current deck: 52 slides. New deck: ~70 slides. Each slide is faster to absorb so presentation runs same length.

### Level 0: "Where Are You?" (Slides 1-9)

| New # | Source | On-screen text | Layout |
|-------|--------|---------------|--------|
| 1 | Slide 1 (split) | **"Getting Agents to Give Up Their Secrets"** / subtitle | Title only, centered |
| 2 | Slide 1 (split) | *"Last month, someone spent 45 minutes arguing with ChatGPT. The same task took 2 minutes once they knew the trick."* | Quote on dark, 28pt italic |
| 3 | Slide 1 (split) | **"This deck is about the trick."** | Hero text, 72pt, centered |
| 4 | Slide 2 | 4 persona labels on horizontal progression | Diagram only, no descriptions |
| 5 | Slide 2 (split) | **"Most people are here."** + arrow at Questioner | Single callout on spectrum |
| 6 | Slide 3 | **"1 billion+"** / "use AI tools monthly" | Big number |
| 7 | Slide 3 (split) | **"< 2%"** / "pay for premium" | Big number |
| 8 | Slide 4 | 4-era timeline — labels only, no stats | Diagram only |
| 9 | Slide 5 (combined) | **"$4.4 trillion"** / "in annual value. Only 31% in full production." | Big number |
| 10 | Slide 6 | **"The core skill for AI is talking."** | Hero text |
| 11 | Breather | *"Let's see what most people get wrong."* | Breather |

### Level 1: "Know Your Tools" (Slides 12-22)

| New # | Source | On-screen text | Layout |
|-------|--------|---------------|--------|
| 12 | Slide 7 | Word cloud, no headline | Word cloud (unchanged) |
| 13 | Slide 8 | Word cloud + 4 question callouts | Word cloud with callouts |
| 14 | Slide 9 (split) | 4-layer stack: App → Agent → API → LLM | Diagram only, labels only |
| 15 | Slide 9 (split) | *"You use apps. Apps use agents. Agents call APIs. APIs talk to LLMs."* | 28pt centered chain |
| 16 | Slide 10 | 4-row table: company, LLM, app, tagline | Simple table, large font |
| 17 | Slide 11 (split) | **"The real action is in agents and apps."** | Hero text |
| 18 | Slide 12 (split) | **"41%"** / "of GitHub code is now AI-generated" | Big number |
| 19 | Slide 12 (split) | **"19% longer"** / "when developers rely on AI without understanding it" | Big number (red) |
| 20 | Slide 12 (split) | **"The gap between using AI and using AI well is massive."** | Hero text |
| 21 | Slide 13 | **"10×"** / "Microsoft 365 Copilot daily users, year over year" | Big number |
| 22 | Breather | *"You've got the basics. Now let's give you the skills."* | Breather |

### Level 2: "Talk to AI Properly" (Slides 23-33)

| New # | Source | On-screen text | Layout |
|-------|--------|---------------|--------|
| 23 | Slide 14 | **"Prompt Engineering"** / subtitle | Section divider |
| 24 | Slide 15 | Chat bubble: "Write me a proposal for improving our onboarding process." / → Generic output snippet | Prompt → output |
| 25 | Slide 16 | Wrong: bare prompt / Right: prompt with role | Wrong/Right (light bg) |
| 26 | Slide 17 | Wrong: vague / Right: specific with constraints | Wrong/Right (light bg) |
| 27 | Slide 18 | Wrong: kitchen sink / Right: structured single task | Wrong/Right (light bg) |
| 28 | Slide 19 | Wrong: leading / Right: "be radically honest..." | Wrong/Right (light bg) |
| 29 | Slide 20 | Wrong: no format / Right: "one-page exec brief..." | Wrong/Right (light bg) |
| 30 | Slide 21 (split) | Side-by-side: 1-line original vs. 1-line final | Before/after |
| 31 | Slide 21 (split) | **"Same task. Same information. Just better words."** | Hero text |
| 32 | Slide 21 (split) | **"But we never changed what the AI knew."** | Hero text (cliffhanger) |
| 33 | Breather | *"You've changed the words. Now let's change the information."* | Breather |

### Level 3: "Feed AI Smarter" (Slides 34-41)

| New # | Source | On-screen text | Layout |
|-------|--------|---------------|--------|
| 34 | Slide 22 (split) | **"Same prompt. Different information."** | Hero text |
| 35 | Slide 22 (split) | Left: "Plausible but generic" / Right: "Sounds like someone who works here" | Two-column comparison (light) |
| 36 | Slide 23 (split) | Dory placeholder image + **"Meet your AI colleague."** | Image + 3 words |
| 37 | Slide 23 (split) | **"Brilliant. Helpful. Remembers nothing."** | Hero text, 60pt |
| 38 | Slide 24 | 3 words in a row: **"Too much. Contradictory. Too broad."** | Hero text |
| 39 | Slide 25 | **"Let AI tell you what it needs."** / one-line prompt example | Hero + support text |
| 40 | Slide 26 (split) | **"Not too much. Not too little."** | Hero text |
| 41 | Breather | *"You prompt well and feed AI smartly. But who's doing all the work? Still you."* | Breather |

### Level 4: "Let AI Drive" (Slides 42-51)

| New # | Source | On-screen text | Layout |
|-------|--------|---------------|--------|
| 42 | Slide 27 (split) | 4-step diagram: You → Copy → AI → Apply (all "You" icons) | Simple diagram |
| 43 | Slide 27 (split) | **"You're using a Ferrari to carry groceries."** | Hero text |
| 44 | Slide 28 (split) | 4-step diagram: Agent retrieves → identifies gaps → creates → You review | Simple diagram |
| 45 | Slide 28 (split) | **"Same Dory. Now she has hands."** | Hero text |
| 46 | Slide 29 | 6 connection icons in a row, labels below | Icon row |
| 47 | Slide 30 | Left: "Without" 4 lines / Right: "With" 4 lines | Two-column (light) |
| 48 | Slide 31 | **"Trust, but verify."** / 3 short rules below at 28pt | Hero + 3 lines |
| 49 | Slide 32 (split) | **"AI is a power tool, not autopilot."** | Hero text |
| 50 | Slide 32 (split) | **"When the answer 'feels right' but you can't verify it — that's the most dangerous moment."** | Hero text (teal, 36pt) |
| 51 | Breather | *"You're managing AI well. Time to orchestrate it."* | Breather |

### Level 5: "Orchestrate" (Slides 52-64)

| New # | Source | On-screen text | Layout |
|-------|--------|---------------|--------|
| 52 | Slide 33 (split) | Left: 1 chef icon / Right: 4 chef icons at stations | Simple diagram |
| 53 | Slide 33 (split) | **"The trick isn't making one AI smarter. It's making many work together."** | Hero text |
| 54 | Slide 34 (split) | 4-phase flow: Research → Draft → Review → You | Diagram only |
| 55 | Slide 34 (split) | **"Each agent does one thing. The chain does everything."** | Hero text |
| 56 | Slide 36 (simplified) | **"Skills"** / "The playbook each chef follows." | Hero + support |
| 57 | Slide 37 (simplified) | 3 agent labels + skill name per agent | Simple 3-column, large text |
| 58 | Slide 38 (simplified) | **"Reusable. Consistent. Scalable. Focused."** | Hero text, 4 words |
| 59 | Slide 39 | **"Custom instructions" = "System prompts" = "Rules" = "Skills"** | Hero text |
| 60 | Slide 40 (split) | Left: "Directions every trip" / Right: "GPS that learns" | Two-column (light) |
| 61 | Slide 40 (split) | **"Skills compound. The brigade gets smarter every time."** | Hero text |
| 62 | Slide 41 (simplified) | **"1.5 hours"** / "of you being the bottleneck" | Big number (red) |
| 63 | Slide 42 (simplified) | **"15 minutes"** / "of judgment — the part only humans can do" | Big number (green) |
| 64 | Slide 42 (split) | **"Same proposal. The chain gets smarter every time."** | Hero text |

### Closing (Slides 65-71)

| New # | Source | On-screen text | Layout |
|-------|--------|---------------|--------|
| 65 | Slide 43 | 4-persona spectrum with level bridges | Diagram |
| 66 | Slide 44 | 4-row toolkit table | Simple table |
| 67 | Slide 45 (simplified) | 4 week labels on a timeline | Simple timeline |
| 68 | Breather | *"Let's come back to where we started."* | Breather |
| 69 | Slide 46 (split) | **"Remember the 45-minute conversation?"** | Hero text |
| 70 | Slide 46 (split) | **"Two minutes. That's the trick."** | Hero text, 72pt |
| 71 | Slide 47 | **"The secret was never in the AI."** / "Now go try it — one task, this week." | Hero + CTA |

**Total: 71 slides** (including 6 breathers)

## Wrong/Right Slides (Light Background)

These 5 slides keep a simplified card layout since the container has semantic meaning (wrong = red, right = green). But they're dramatically simplified:

- **Headline at 44pt** (not 36pt)
- **Card text at 28pt** (not 14-15pt)
- **~15 words per card max** (was 30-50)
- **No takeaway strips** — the contrast IS the takeaway
- **No source citations on-screen** — sources in notes

## Implementation Approach

The rewrite replaces nearly all slide code. The cleanest approach:

1. **Strip utility functions** down to: `darkSlide`, `breatherSlide`, `singleMsg` (renamed to `hero`), `sectionDivider`, and a simplified `wrongRight`
2. **Remove** all card/footer/bar functions
3. **New `bigNum` helper** — giant number + support line
4. **New `diagram` pattern** — manual layout per diagram slide
5. **Rewrite every slide** to follow the billboard rule
6. **Move all removed text to speaker notes** — nothing is deleted, just relocated

## Speaker Notes Strategy

Every slide's notes should contain:
1. The key speaking point (what to SAY while this slide is up)
2. Any detail/context that was removed from the visual
3. Source citations (moved from on-screen)
4. Transition to next slide
