# Getting Agents to Give Up Their Secrets

A 68-slide presentation on AI best practices — taking you from confused to in control.

Available as [PowerPoint](Getting-Agents-to-Give-Up-Their-Secrets.pptx) or [PDF](Getting-Agents-to-Give-Up-Their-Secrets.pdf).

## What this is

A progressive leveling-up journey through AI adoption. Each section moves you along the spectrum from AI Skeptic to AI-First, covering prompt engineering, context engineering, agents, and multi-agent orchestration — all through a single running example.

**Design philosophy:** Every slide passes the 3-second billboard test. Maximum 15 words on screen, 28pt+ font, 50%+ whitespace. Detail lives in speaker notes.

## Slide progression

| Section | Slides | Theme |
|---------|--------|-------|
| Level 0 | 1–11 | Where are you? |
| Level 1 | 12–22 | Know your tools |
| Level 2 | 23–33 | Talk to AI properly |
| Level 3 | 34–41 | Feed AI smarter |
| Level 4 | 42–51 | Let AI drive |
| Level 5 | 52–64 | Orchestrate |
| Closing | 65–68 | Full circle |

## Regenerating the deck

```bash
npm install
node generate-deck.js
```

Requires Node.js 18+. Generates `Getting-Agents-to-Give-Up-Their-Secrets.pptx` (68 slides).

## How this was built

This entire presentation — narrative, slide design, and code — was created using [Claude Code](https://claude.ai/claude-code) with the [deck-flow](https://github.com/michaelengland/claude-code-plugins) plugin for structured presentation development.

The workflow followed four stages:
1. **`/deck-flow:narrative`** — Developed the story arc, audience, and source research
2. **`/deck-flow:craft`** — Translated narrative into a slide-by-slide content outline
3. **`/deck-flow:design`** — Planned visual direction and billboard design system
4. **`/deck-flow:present`** — Generated the .pptx with visual validation

Design documents and iteration history are in [`docs/plans/`](docs/plans/).

## Project structure

```
generate-deck.js          # PptxGenJS slide generator (single file, ~1100 lines)
images/                   # AI-generated imagery (blue tang fish)
icons/                    # Pre-rendered react-icons PNGs
docs/plans/               # Narrative, deck plans, design docs, image prompts
```

## License

MIT
