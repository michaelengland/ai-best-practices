# Billboard Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite every slide in `generate-deck.js` to pass the 3-second billboard test — maximum 15 words on screen, 28pt+ font, no cards, 50%+ whitespace.

**Architecture:** Strip utility functions to 5 essentials, add 1 new helper (`bigNum`), rewrite all ~46 content slides as billboard-style slides, expand to ~71 slides total by splitting dense slides.

**Tech Stack:** PptxGenJS, Node.js

**Design doc:** `docs/plans/2026-02-19-billboard-redesign.md`

---

### Task 1: Strip Design System & Utilities

**Files:**
- Modify: `generate-deck.js` (lines 1-200 approx — constants + all utility functions)

**What to do:**

1. Simplify the `D` constants object:
```javascript
const D = {
  bg: "0F0F1A",         // dark background
  lightBg: "F8F9FA",    // light background (Wrong/Right only)
  glow: "00B4D8",       // radial glow color
  white: "FFFFFF",       // hero text on dark
  text: "E0E4E8",       // headline text on dark
  muted: "94A3B8",      // support text on dark
  darkText: "1E293B",   // text on light bg
  accent: "00B4D8",     // teal accent
  wrong: "E63946",      // red
  wrongBg: "FEE2E2",    // wrong card fill
  right: "2D936C",      // green
  rightBg: "DCFCE7",    // right card fill
  h: "Georgia",         // heading font
  b: "Calibri",         // body font
};
```

2. Keep these utilities (update as needed):
   - `darkSlide(pres)` — unchanged (dark bg + radial glow oval)
   - `breatherSlide(pres, text, notes)` — unchanged
   - `sectionDivider(pres, opts)` — simplify: just title at 54pt + subtitle at 28pt, nothing else

3. Remove these utilities entirely:
   - `addDarkCard`, `addGlassCard`, `addCard`
   - `addBar`
   - `addTakeaway`, `addFooterSep`, `addSourceCite`
   - `addHeadline` (replaced by inline text calls)
   - `bulletSlide`, `threeCol`, `twoCol`
   - `sh()` shadow factory

4. Add new `bigNum` helper:
```javascript
function bigNum(pres, num, sub, opts = {}) {
  const s = darkSlide(pres);
  const numColor = opts.color || D.white;
  s.addText(num, {
    x: 0.5, y: 1.0, w: 9, h: 2.5,
    fontFace: D.h, fontSize: opts.numSize || 120,
    color: numColor, bold: true, align: "center", margin: 0, valign: "bottom"
  });
  s.addText(sub, {
    x: 1.5, y: 3.6, w: 7, h: 0.8,
    fontFace: D.b, fontSize: 28,
    color: D.muted, align: "center", margin: 0, valign: "top"
  });
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}
```

5. Add new `hero` helper (replaces singleMsg):
```javascript
function hero(pres, main, opts = {}) {
  const s = darkSlide(pres);
  s.addText(main, {
    x: 1.0, y: 1.2, w: 8, h: 2.8,
    fontFace: opts.font || D.h, fontSize: opts.size || 44,
    color: opts.color || D.white, bold: true,
    align: "center", margin: 0, valign: "middle"
  });
  if (opts.sub) {
    s.addText(opts.sub, {
      x: 1.5, y: 4.0, w: 7, h: 0.8,
      fontFace: D.b, fontSize: 28,
      color: opts.subColor || D.muted, align: "center", margin: 0, valign: "top"
    });
  }
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}
```

6. Add simplified `wrongRight` helper:
```javascript
function wrongRight(pres, opts) {
  const s = pres.addSlide();
  s.background = { color: D.lightBg };
  // Headline
  s.addText(opts.headline, {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontFace: D.h, fontSize: 44, color: D.darkText, bold: true, margin: 0
  });
  if (opts.subtitle) {
    s.addText(opts.subtitle, {
      x: 0.5, y: 1.05, w: 9, h: 0.5,
      fontFace: D.b, fontSize: 20, color: D.accent, italic: true, margin: 0
    });
  }
  // Wrong card
  const cardY = 1.7, cardH = 3.2;
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: cardY, w: 4.2, h: cardH, fill: { color: D.wrongBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: cardY, w: 0.06, h: cardH, fill: { color: D.wrong } });
  s.addText(opts.wrongText, {
    x: 0.8, y: cardY + 0.2, w: 3.6, h: cardH - 0.4,
    fontFace: D.b, fontSize: 18, color: D.darkText, margin: 0, valign: "top"
  });
  // Right card
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: cardY, w: 4.2, h: cardH, fill: { color: D.rightBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: cardY, w: 0.06, h: cardH, fill: { color: D.right } });
  s.addText(opts.rightText, {
    x: 5.6, y: cardY + 0.2, w: 3.6, h: cardH - 0.4,
    fontFace: D.b, fontSize: 18, color: D.darkText, margin: 0, valign: "top"
  });
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}
```

7. Run `node generate-deck.js` — will fail because slides reference removed functions. That's expected; we'll fix in subsequent tasks.

**Commit:** `git commit -m "feat: strip utilities to billboard essentials, add bigNum/hero helpers"`

---

### Task 2: Rewrite Level 0 slides (new slides 1-11)

**Files:**
- Modify: `generate-deck.js` (Level 0 section)

**Context from design doc:** Level 0 currently has 6 content slides + 1 breather. It becomes 10 content slides + 1 breather. Dense slides are split, all text moved to notes.

**What to build (each slide in order):**

**Slide 1 — Title**
```javascript
{
  const s = darkSlide(pres);
  s.addText("Getting Agents to\nGive Up Their Secrets", {
    x: 1.0, y: 0.8, w: 8, h: 2.5,
    fontFace: D.h, fontSize: 54, color: D.white, bold: true, align: "center", margin: 0, valign: "middle"
  });
  s.addText("A guide to AI that actually works — from confused to in control", {
    x: 1.5, y: 3.5, w: 7, h: 0.6,
    fontFace: D.b, fontSize: 22, color: D.muted, italic: true, align: "center", margin: 0
  });
  s.addNotes("Let the title sit. Don't rush into the hook — give people a moment to read.");
}
```

**Slide 2 — Hook story** (28pt italic quote)
```javascript
hero(pres, "Last month, someone spent 45 minutes\narguing with ChatGPT.\nThe same task took 2 minutes.", {
  font: D.b, size: 28, color: D.text,
  notes: "Tell the full story: 'I watched someone go back and forth — copy, paste, no that's not right, copy, paste, closer but... The same task took 2 minutes once they knew the trick.'"
});
```

**Slide 3 — "This deck is about the trick."** (72pt hero)
```javascript
hero(pres, "This deck is about\nthe trick.", {
  size: 72,
  notes: "Pause after this. Let it land. The entire closing (slide ~70) calls back to this moment."
});
```

**Slide 4 — Spectrum** (diagram only: 4 labeled stages, no descriptions)
- Dark slide, 4 labeled ovals/rectangles in a horizontal row with arrows
- Labels only: "AI Skeptic", "AI Questioner", "AI Viber", "AI-First"
- Each at ~36pt Georgia
- Notes carry the descriptions of each persona

**Slide 5 — "Most people are here."** (spectrum + callout arrow at Questioner)
- Same 4 labels, but dimmed except Questioner which is highlighted
- Below spectrum: "Most people are here." at 36pt
- Notes: "These are your milestones. This deck's levels are the steps that move you to the right."

**Slide 6 — "1 billion+"** big number
```javascript
bigNum(pres, "1 billion+", "use AI tools monthly", {
  notes: "Source: DataReportal 2026. AI has mass reach but almost nobody is going deep."
});
```

**Slide 7 — "< 2%" big number**
```javascript
bigNum(pres, "< 2%", "pay for premium", {
  notes: "Source: Reuters. The opportunity gap is enormous — almost nobody is using AI seriously."
});
```

**Slide 8 — Timeline** (4-era labels only, no stats)
- Dark slide, 4 circles on a horizontal line
- Labels: "PCs 1980s", "Internet 1990s", "Smartphones 2010s", "AI Now"
- No stat text on screen — stats in notes
- Notes carry all the stats: productivity doubled, 7%→30% online, $7T GDP

**Slide 9 — "$4.4 trillion"** combined stat
```javascript
bigNum(pres, "$4.4T", "in annual value. Only 31% in full production.", {
  notes: "Sources: McKinsey Global Institute ($2.6-4.4T); ServiceNow (31% in production); Microsoft Security Blog (80% of Fortune 500 have active AI agents). The third stat is the killer — the gap between having AI and using it well."
});
```

**Slide 10 — "The core skill for AI is talking."**
```javascript
hero(pres, "The core skill for AI\nis talking.", {
  sub: "You already have it.",
  notes: "Permission-granting moment. AI's interface is natural language. The audience already has the prerequisite. 'You're not missing the skill. You're just using it wrong.' This deck is the walkthrough."
});
```

**Slide 11 — Breather**
```javascript
breatherSlide(pres, "Let's see what most people get wrong.", "Transition into Level 1.");
```

**Verify:** `node generate-deck.js` runs. Count slides.

**Commit:** `git commit -m "feat: rewrite Level 0 as billboard slides (11 slides)"`

---

### Task 3: Rewrite Level 1 slides (new slides 12-22)

**Context:** Level 1 currently has 7 content slides + 1 breather. Becomes 10 content + 1 breather. Split "Software Engineering Was First" into 3 big-number slides.

**Slides to build:**

12. **Word cloud** — keep as-is but remove "Yeah. Exactly." footer (move to notes). Keep word positions.
13. **Word cloud + questions** — keep as-is but remove footer text. Move "We're going to make this simple" to notes.
14. **AI Stack diagram** — 4 stacked rectangles, labels only (App, Agent, API, LLM). No descriptions on screen. 36pt labels.
15. **Stack summary** — `hero(pres, "You use apps.\nApps use agents.\nAgents call APIs.\nAPIs talk to LLMs.", { font: D.b, size: 28, ... })`
16. **Who Makes What** — simplified table with large font. 4 rows: OpenAI/GPT/ChatGPT, Anthropic/Claude/Claude.ai, Google/Gemini/Gemini, Microsoft/(OpenAI's)/Copilot. No "You Know Them As" column — move taglines to notes.
17. **"The real action is in agents and apps."** — `hero(pres, ...)`
18. **"41%"** — `bigNum(pres, "41%", "of GitHub code is now AI-generated", { notes: "..." })`
19. **"19% longer"** — `bigNum(pres, "19%\nlonger", "when developers rely on AI without understanding it", { color: D.wrong, notes: "..." })`
20. **"The gap is massive."** — `hero(pres, "The gap between using AI\nand using AI well\nis massive.", { ... })`
21. **"10×"** — `bigNum(pres, "10×", "Microsoft 365 Copilot daily users, year over year", { notes: "..." })`
22. **Breather** — "You've got the basics. Now let's give you the skills."

**For each slide:** All explanatory text, source citations, and transition text move to speaker notes. Nothing on screen that isn't the core message.

**Commit:** `git commit -m "feat: rewrite Level 1 as billboard slides (12-22)"`

---

### Task 4: Rewrite Level 2 slides (new slides 23-33)

**Context:** Level 2 has the Wrong/Right comparison slides. These keep a simplified card layout (red/green cards have semantic meaning) but with much less text. Section divider + 5 wrong/right + the 5x prompt summary split into 3 slides.

**Slides to build:**

23. **Section divider** — "Prompt Engineering" at 54pt / "How to Stop Getting Useless Answers" at 28pt italic teal
24. **"The Task"** — Dark slide. Chat bubble shape with the vague prompt at 28pt. Below: a muted "generic output" indicator. Minimal.
25-29. **Five Wrong/Right slides** — Use the `wrongRight` helper. Each slide has:
  - Headline at 44pt (e.g., "Assign a Role")
  - Subtitle at 20pt italic teal (e.g., "vs. talking to a stranger")
  - Left wrong card: the bad prompt text at 18pt, ~15 words max
  - Right green card: the improved prompt text at 18pt, ~20 words max
  - All explanatory labels, footers, source citations → speaker notes

30. **Before/After** — dark slide, left shows "Write me a proposal..." (muted, small), right shows the full combined prompt (highlighted, but still concise — just the key phrases, not the full text). The visual contrast matters more than reading every word.
31. **"Same task. Same information. Just better words."** — `hero(pres, ...)`
32. **"But we never changed what the AI knew."** — `hero(pres, ..., { color: D.accent })` — this is the cliffhanger
33. **Breather** — "You've changed the words. Now let's change the information."

**Commit:** `git commit -m "feat: rewrite Level 2 as billboard slides (23-33)"`

---

### Task 5: Rewrite Level 3 slides (new slides 34-41)

**Context:** Level 3 introduces context engineering and the Dory metaphor. Currently 5 content slides → becomes 7 content + 1 breather.

**Slides to build:**

34. **"Same prompt. Different information."** — `hero(pres, ...)`
35. **Before/After context** — light bg, left column "Plausible but generic" with muted styling, right column "Sounds like someone who works here" with accent styling. Minimal text — ~10 words per side max.
36. **Meet Dory** — dark slide. Placeholder image rectangle (teal-tinted, left 40%). Right side: "Meet your AI colleague." at 44pt. Just the image + 4 words.
37. **"Brilliant. Helpful. Remembers nothing."** — `hero(pres, ..., { size: 60 })` — the Dory punchline
38. **Attention Problem** — `hero(pres, "Too much.\nContradictory.\nToo broad.", { sub: "Three ways to confuse your AI." })` — the 3 failure modes as 3 words
39. **"Let AI tell you what it needs."** — `hero(pres, ..., { sub: '"Before you start, ask me clarifying questions."' })`
40. **"Not too much. Not too little."** — `hero(pres, ..., { sub: "The right context at the right time." })`
41. **Breather** — "You prompt well and feed AI smartly. But who's doing all the work? Still you."

**Commit:** `git commit -m "feat: rewrite Level 3 as billboard slides (34-41)"`

---

### Task 6: Rewrite Level 4 slides (new slides 42-51)

**Context:** Level 4 covers agents, connections, trust. Currently 6 content slides + breather → becomes 9 content + breather.

**Slides to build:**

42. **Copy-Paste Trap diagram** — dark slide. 4 simple steps in a vertical flow: "You search → You paste → AI drafts → You apply". Each step has a small "You" indicator. Use simple text layout (no cards).
43. **"You're using a Ferrari to carry groceries."** — `hero(pres, ...)`
44. **Agent-driven diagram** — dark slide. 4 steps: "Agent retrieves → Agent identifies gaps → Agent creates → You review". The "You" only appears at step 4.
45. **"Same Dory. Now she has hands."** — `hero(pres, ...)`
46. **Connections** — dark slide. 6 icons in a row with one-word labels below: "Web", "Email", "Docs", "Data", "Calendar", "Custom". ~28pt labels. Notes carry the detailed descriptions.
47. **With vs Without connections** — light bg, simplified two-column. Left (muted): "You copy-paste. You forget the budget memo. VP asks about it." Right (accent): "Agent reads directly. Finds what you forgot. Flags what you missed."
48. **"Trust, but verify."** — `hero(pres, "Trust, but verify.", { sub: "Never trust numbers you didn't provide.\nVerify claims against sources.\nUse AI for drafts, not decisions." })` — the 3 rules at 28pt support
49. **"AI is a power tool, not autopilot."** — `hero(pres, ...)`
50. **The dangerous moment** — `hero(pres, "When the answer 'feels right'\nbut you can't verify it —\nthat's the most dangerous moment.", { size: 36, color: D.accent })`
51. **Breather** — "You're managing AI well. Time to orchestrate it."

**Commit:** `git commit -m "feat: rewrite Level 4 as billboard slides (42-51)"`

---

### Task 7: Rewrite Level 5 slides (new slides 52-64)

**Context:** Level 5 covers chaining, skills, and the payoff. Currently 10 content slides → becomes 13 slides. The most dramatic simplification — dense slides like "Prompt Chaining" and "The Chained Way" get split heavily.

**Slides to build:**

52. **Kitchen Brigade diagram** — dark slide. Left half: 1 large chef icon. Right half: 4 smaller chef icons at labeled stations. No text except station labels at 28pt.
53. **"The trick isn't making one AI smarter."** — `hero(pres, "The trick isn't making\none AI smarter.\nIt's making many\nwork together.", { size: 40 })`
54. **Chain flow diagram** — dark slide. 4 boxes in a horizontal flow: "Research → Draft → Review → You". Labels only at 28pt. Arrows between. No descriptions, no principles — just the flow.
55. **"Each agent does one thing. The chain does everything."** — `hero(pres, ...)` — combines the old "Chain Rule" slide
56. **Skills** — `hero(pres, "Skills", { sub: "The playbook each chef follows.", notes: "Full definition: predefined rules, instructions, templates, and context packages injected into AI context only when relevant..." })`
57. **Skills in Action** — dark slide. 3 columns, each just: agent name at top (28pt bold teal) + skill name below (28pt muted). No descriptions. E.g. "Research Agent\n+ Research Standards". All detail in notes.
58. **"Reusable. Consistent. Scalable. Focused."** — `hero(pres, "Reusable.\nConsistent.\nScalable.\nFocused.", { size: 48 })`
59. **"Custom instructions = System prompts = Rules = Skills"** — `hero(pres, ...)` — keep as-is, already close to billboard
60. **GPS metaphor** — light bg, two-column. Left: "Directions every trip" + small text "Effort. Every. Time." Right: "GPS that learns" + small text "Compounds permanently." Very minimal.
61. **"Skills compound."** — `hero(pres, "Skills compound.\nThe brigade gets smarter\nevery time.", { size: 40 })`
62. **"1.5 hours"** — `bigNum(pres, "1.5 hrs", "of you being the bottleneck", { color: D.wrong, notes: "Walk through the 7 steps verbally: search docs (20 min), copy-paste (10 min), realize missing budget (5 min), find budget (15 min), reformat (20 min), ask for review (10 min), manually apply (15 min)." })`
63. **"15 minutes"** — `bigNum(pres, "15 min", "of judgment — the part only humans can do", { color: D.right, notes: "Walk through the chain: Agent 1 researches, Agent 2 drafts, Agent 3 reviews, You judge. Same proposal quality. The chain did 1 hour 15 minutes of grunt work." })`
64. **"Same proposal. The chain gets smarter every time."** — `hero(pres, "Same proposal.\nThe chain gets smarter\nevery time.", { sub: "Your feedback becomes skills. Even though Dory won't remember, the skills will." })`

**Commit:** `git commit -m "feat: rewrite Level 5 as billboard slides (52-64)"`

---

### Task 8: Rewrite Closing slides (new slides 65-71)

**Context:** Closing currently has spectrum callback, toolkit, 30-day challenge, full circle, CTA. Becomes 7 slides.

**Slides to build:**

65. **From Asking to Orchestrating** — dark slide. 4 persona labels on horizontal progression (like slide 4 but with level bridges below). Each persona at 28pt, bridge text at 20pt italic. "Levels 0-1 got you past this" etc. Simplified from current version — no cards, just labeled positions on a line.
66. **Your AI Toolkit** — dark slide. Simple 4-row table at large font (14pt → 20pt minimum). Just 3 columns: Category, Tools, one-word Note. Clean.
67. **30-Day Challenge** — dark slide. 4 circles on a horizontal timeline. Labels: "Week 1\nQuestioner", "Week 2\nViber", "Week 3\nAI-First", "Week 4\nOrchestrator". No description text — all detail in notes.
68. **Breather** — "Let's come back to where we started."
69. **"Remember the 45-minute conversation?"** — `hero(pres, "Remember the\n45-minute conversation?", { size: 48 })`
70. **"Two minutes. That's the trick."** — `hero(pres, "Two minutes.\nThat's the trick.", { size: 72 })`
71. **CTA** — `hero(pres, "The secret was never in the AI.", { sub: "Now go try it — one task, this week." })`

**Commit:** `git commit -m "feat: rewrite Closing as billboard slides (65-71)"`

---

### Task 9: Content QA

**Steps:**
1. Run `node generate-deck.js` — verify it generates without errors
2. Run `python -m markitdown *.pptx | grep -c "Slide number:"` — verify 71 slides
3. Run `python -m markitdown *.pptx` — read through all slide text and verify:
   - No slide has more than ~15 words of visible text
   - All removed content appears in speaker notes
   - Breathers are in correct positions
   - No leftover references to removed functions
4. Spot-check 5-6 slides for font size, positioning, and centering
5. Fix any issues found

**Commit:** `git commit -m "fix: content QA corrections"`

---

### Task 10: Layout QA

**Steps:**
1. For every slide, verify mathematically:
   - All elements within 10" × 5.625" canvas
   - No overlapping elements
   - Minimum 0.5" margins from edges
   - Text centered (x + w/2 = 5.0 for centered elements)
2. Check that `bigNum` and `hero` helpers position text consistently
3. Check Wrong/Right slides for card alignment
4. Fix any layout issues found
5. Regenerate and verify

**Commit:** `git commit -m "fix: layout QA corrections"`
