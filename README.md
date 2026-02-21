# AI Best Practices

A suite of presentations for teaching AI adoption — from a self-paced reference deck to a full interactive workshop series.

## The Decks

| Deck | Slides | Duration | Purpose |
|------|--------|----------|---------|
| [Reference deck](decks/ai-best-practices/ai-best-practices.pptx) | 68 | Self-paced | The complete journey — Skeptic to Orchestrator |
| [AI Academy pitch](decks/ai-academy-pitch/ai-academy-pitch.pptx) | 10 | ~5 min | Sell the workshop series — get people excited to attend |
| [Workshop: Whisperer](decks/workshop-whisperer/workshop-whisperer.pptx) | 22 | ~45 min | Explorer → Whisperer — prompt engineering (5 hands-on rounds) |
| [Workshop: Strategist](decks/workshop-strategist/workshop-strategist.pptx) | 22 | ~45 min | Whisperer → Strategist — context engineering + setting up skills |
| [Workshop: Operator](decks/workshop-operator/workshop-operator.pptx) | 18 | ~45 min | Strategist → Operator — agents + connections + trust |
| [Workshop: Orchestrator](decks/workshop-orchestrator/workshop-orchestrator.pptx) | 20 | ~45 min | Operator → Orchestrator — chains + skills per agent |

## The Persona Spectrum

Each deck covers one or more crossings on the AI adoption spectrum:

```
Skeptic → Explorer → Whisperer → Strategist → Operator → Orchestrator → Builder
                                                                          (horizon)
```

The reference deck covers the full journey. The workshops cover one crossing each. The pitch deck sells the workshop series.

## Design philosophy

Every slide passes the 3-second billboard test. Maximum 15 words on screen, 28pt+ font, 50%+ whitespace. Detail lives in speaker notes. Workshop decks add "YOUR TURN" exercise slides for hands-on tasks.

## Regenerating the decks

```bash
npm install
node decks/ai-best-practices/ai-best-practices.js
node decks/ai-academy-pitch/ai-academy-pitch.js
node decks/workshop-whisperer/workshop-whisperer.js
node decks/workshop-strategist/workshop-strategist.js
node decks/workshop-operator/workshop-operator.js
node decks/workshop-orchestrator/workshop-orchestrator.js
```

Requires Node.js 18+. Workshops 3-4 (Operator, Orchestrator) require [Claude Code](https://claude.ai/claude-code) or equivalent agentic tool for the hands-on exercises.

## How this was built

This entire suite — narratives, slide designs, and code — was created using [Claude Code](https://claude.ai/claude-code) with the [deck-flow](https://github.com/michaelengland/claude-code-plugins) plugin for structured presentation development.

## License

MIT
