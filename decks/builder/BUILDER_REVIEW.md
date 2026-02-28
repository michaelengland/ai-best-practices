# Builder Deck Review — Structural Changes

Post-generation review of the 65-slide deck. Four issues identified, all agreed.

## Issue 1: Three Why Claude slides → One

**Problem:** Slides 19-21 were three consecutive hero slides arguing Claude is best (model, agent, infrastructure). After slide 18 ("Be mercenaries with tooling"), three vendor-specific slides undermined the mercenary framing and felt like a sales pitch.

**Fix:** Collapse slides 18-21 into a single slide. Drop the "be mercenaries" framing — it contradicts what follows. Replace with honest, direct: "I chose Claude Code. Here's why." One slide with three reasons (best model, agentic-first, richest context engineering). The mercenary caveat moves to speaker notes.

**Slides removed:** 3 (net: 65 → 62)

## Issue 2: Architecture Map before definitions

**Problem:** Slide 22 showed boxes labeled "Gated Workflow", "Rules", "MCP Servers", "Skills" — but the audience didn't know what any of these meant yet. Abstract labels with no hooks.

**Fix:** Move the Architecture Map to after the Three Principles. Frame it as: "Here's the system that implements these three principles — we'll walk through each layer." The map becomes a roadmap for what's coming, not a diagram to understand. The Three Principles give the boxes meaning ("these serve perfect context, no hidden failures, and gated workflow") even before the detailed sections.

**Slides moved:** Architecture Map now follows Three Principles directly.

## Issue 3: "We never write code manually" and quality tradeoff as conclusions → reframe as the quality question

**Problem:** "We never write code manually" appeared as an unearned assertion before any tools were shown. The quality tradeoff (OR → AND) felt like a philosophical detour.

**Fix:** Reframe the thesis around: "Speed is solved. The question is how to get quality to keep pace." Then:
- Quality OR/AND tradeoff becomes the setup (not a detour — it's the central question)
- "We never write code manually" becomes the mechanism: it forces investment in quality infrastructure
- Three Principles become the answer: here's how quality keeps pace
- Architecture Map becomes the system: here's what implements the principles

The through-line tightens from scattered beliefs to a focused argument: speed → quality question → mechanism → principles → system → tools.

**Slides changed:** Reframed, not removed. "We never write code manually" stays but earns itself through the quality framing.

## Issue 4: Environment section breaks narrative arc

**Problem:** The Gated Workflow section (slides 48-52) was the natural climax: "Rules enforce standards. MCP provides context. Skills define the workflow. The approach connects them." But then 9 slides of environment logistics deflated the arc before closing.

**Fix:** Move environment section BEFORE the Gated Workflow section. New flow:

> Tools (MCP → Rules → Skills) → Environment → Gated Workflow → Closing

Gated Workflow becomes the penultimate section — the "how it all connects" payoff arrives right before closing. Environment becomes "the machine it runs on" leading into the climax rather than following it.

Environment stays off the Architecture Map — it's a different category (developer setup, not agent behavior). The section divider reframes accordingly.

**Slides moved:** Environment section (9 slides) repositioned. No slides removed.

## Resulting Structure (62 slides)

```
SITUATION (1-6)           — unchanged
COMPLICATION (7-16)       — unchanged
OPINIONATED STANCE (17-18) — collapsed from 6 to 2 slides
  17: "This is my opinionated best practice."
  18: "I chose Claude Code." (single slide, three reasons)
ROLE + THESIS (19-27)     — reframed around quality question
  19: Army of eager juniors
  20: Manager + Tech Lead
  21: Forbes quote
  22: Quality OR Speed → quality question setup
  23: Quality AND Speed → the answer requires investment
  24: "We never write code manually." → the mechanism
  25: Three Principles → the quality framework
  26: Architecture Map → the system (roadmap for what's coming)
  27: Breather → "Let's start with the tools."
MCP SERVERS (28-32)       — unchanged content, renumbered
RULES (33-37)             — unchanged content, renumbered
SKILLS (38-44)            — unchanged content, renumbered
ENVIRONMENT (45-52)       — moved before Gated Workflow
  45: Section divider (reframed: "Where the system runs")
  46-52: Parallel sessions through Compliance
GATED WORKFLOW (53-57)    — now the climax section
  53: Section divider
  54: Flow diagram
  55: Two-layer verification
  56: Superpowers
  57: "The approach that uses all three."
CLOSING (58-62)           — unchanged content, renumbered
  58: Breather
  59: Three Principles Recap
  60: Architecture Map callback (optional — "remember the map?")
  61: "The Builder's job isn't writing code."
  62: "It's building the machine that writes code well."
```
