# AI Best Practices

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Slides: 160](https://img.shields.io/badge/Slides-160-00B4D8.svg)](#the-decks)
[![Decks: 6](https://img.shields.io/badge/Decks-6-00B4D8.svg)](#the-decks)

Open-source AI training materials — from prompt engineering to agent orchestration. Everything you need to run an AI literacy program at your company: a self-paced reference deck, a 5-minute pitch deck, and 4 interactive workshop decks with hands-on exercises using ChatGPT and Claude Code.

## Who is this for?

- **Team leads** who want to upskill their team on AI
- **L&D / training teams** looking for ready-made AI workshop materials
- **Individual learners** who want a structured path from AI beginner to advanced user
- **Anyone** who uses ChatGPT but suspects they're not getting the most out of it

## The Decks

| Deck | Slides | Duration | Purpose |
|------|--------|----------|---------|
| [Reference deck](decks/ai-best-practices/ai-best-practices.pptx) ([PDF](decks/ai-best-practices/ai-best-practices.pdf)) | 68 | Self-paced | The complete journey — Skeptic to Orchestrator |
| [AI Academy pitch](decks/ai-academy-pitch/ai-academy-pitch.pptx) ([PDF](decks/ai-academy-pitch/ai-academy-pitch.pdf)) | 10 | ~5 min | Sell the workshop series — get people excited to attend |
| [Workshop: Whisperer](decks/workshop-whisperer/workshop-whisperer.pptx) ([PDF](decks/workshop-whisperer/workshop-whisperer.pdf)) | 22 | ~45 min | Prompt engineering — 5 hands-on rounds with ChatGPT |
| [Workshop: Strategist](decks/workshop-strategist/workshop-strategist.pptx) ([PDF](decks/workshop-strategist/workshop-strategist.pdf)) | 22 | ~45 min | Context engineering + setting up your first custom instructions |
| [Workshop: Operator](decks/workshop-operator/workshop-operator.pptx) ([PDF](decks/workshop-operator/workshop-operator.pdf)) | 18 | ~45 min | AI agents, connections, and trust frameworks |
| [Workshop: Orchestrator](decks/workshop-orchestrator/workshop-orchestrator.pptx) ([PDF](decks/workshop-orchestrator/workshop-orchestrator.pdf)) | 20 | ~45 min | Multi-agent chains with compounding skills |

## The Persona Spectrum

The decks follow a 7-persona AI adoption spectrum. Each workshop covers one crossing:

```
Skeptic → Explorer → Whisperer → Strategist → Operator → Orchestrator → Builder
                      Session 1    Session 2    Session 3    Session 4    (horizon)
```

**Skeptic** — avoids AI. **Explorer** — has tried ChatGPT. **Whisperer** — prompts well. **Strategist** — curates what AI knows. **Operator** — lets agents work. **Orchestrator** — coordinates agent teams. **Builder** — creates tools (beyond these decks).

## What's covered

- **Prompt engineering** — role assignment, specificity, structure, power keywords, output definition
- **Context engineering** — what AI knows matters more than how you ask
- **Skills / custom instructions** — persistent context that compounds over time
- **AI agents** — letting AI retrieve its own context and do the work
- **Trust frameworks** — when to trust, when to verify, the "feels right" trap
- **Multi-agent orchestration** — chaining focused agents with filtered context
- **The kitchen brigade metaphor** — one chef vs. a team of specialists

## Design philosophy

Every slide passes the 3-second billboard test. Maximum 15 words on screen, 28pt+ font, 50%+ whitespace. Detail lives in speaker notes. Workshop decks add "YOUR TURN" exercise slides for hands-on tasks.

Inspired by Apple keynotes, TED talk guidelines, and the principle that if a slide can't be understood in 3 seconds, it has too much on it.

## Running the workshops

**Sessions 1-2** (Whisperer, Strategist): Attendees need ChatGPT (free tier works).

**Sessions 3-4** (Operator, Orchestrator): Attendees need [Claude Code](https://claude.ai/claude-code) or equivalent agentic tool.

Each workshop is designed for a ~60 minute brown bag lunch session (~45 min effective content). The facilitator presents teaching slides, then pauses on "YOUR TURN" slides while attendees complete hands-on exercises on their own laptops.

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

Requires Node.js 18+. All decks are generated programmatically using [PptxGenJS](https://github.com/nickvdyck/PptxGenJS).

## How this was built

This entire suite — narratives, slide designs, and code — was created using [Claude Code](https://claude.ai/claude-code) with the [deck-flow](https://github.com/michaelengland/claude-code-plugins) plugin for structured presentation development.

## License

MIT — use these materials freely. Attribution appreciated but not required.
