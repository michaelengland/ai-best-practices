# AI Best Practices

A 68-slide presentation on AI best practices — taking you from confused to in control.

Available as [PowerPoint](decks/ai-best-practices/ai-best-practices.pptx) or [PDF](decks/ai-best-practices/ai-best-practices.pdf).

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
node decks/ai-best-practices/ai-best-practices.js
```

Requires Node.js 18+. Generates `decks/ai-best-practices/ai-best-practices.pptx` (68 slides).

## How this was built

This entire presentation — narrative, slide design, and code — was created using [Claude Code](https://claude.ai/claude-code) with the [deck-flow](https://github.com/michaelengland/claude-code-plugins) plugin for structured presentation development. Design documents and iteration history are in [`decks/ai-best-practices/`](decks/ai-best-practices/).

## Project structure

```
decks/ai-best-practices/
  ai-best-practices.js     # PptxGenJS slide generator (~1100 lines)
  ai-best-practices.pptx   # Generated presentation
  ai-best-practices.pdf    # PDF for sharing
  narrative.md             # Story arc and source research
  content-outline.md       # Slide-by-slide content plan
  slide-design.md          # Visual direction and design system
  assets/                  # AI-generated imagery (blue tang fish)
  icons/                   # Pre-rendered react-icons PNGs
  history/                 # Earlier plan versions and session notes
```

## License

MIT
