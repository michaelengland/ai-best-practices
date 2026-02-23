# AI Best Practices

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Slides: 215](https://img.shields.io/badge/Slides-215-635BFF.svg)](#the-decks)
[![Decks: 7](https://img.shields.io/badge/Decks-7-635BFF.svg)](#the-decks)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-635BFF.svg)](https://claude.ai/claude-code)

Open-source presentation decks for learning and teaching AI — from your first ChatGPT prompt to shipping production systems with AI coding agents.

![Slide preview](assets/slide-preview.jpg)

## Start here

**Learning AI on your own?** Start with the [reference deck PDF](decks/ai-best-practices/ai-best-practices.pdf) — self-paced, covers everything from prompt engineering to multi-agent orchestration.

**Running AI training for your team?** Grab the [pitch deck](decks/ai-academy-pitch/ai-academy-pitch.pdf) to sell the series, then run the four workshops in order. Each is a ~45 min hands-on session.

**Already shipping code with Claude Code?** The [Builder deck PDF](decks/builder/builder.pdf) is a practitioner's playbook for getting quality AND speed — how to set up your AI development infrastructure so agents produce production-grade output.

## The Decks

All decks follow a 7-level AI adoption spectrum. The reference deck and workshops are designed to be taken in order:

```
Skeptic → Explorer → Whisperer → Strategist → Operator → Orchestrator → Builder
```

### Reference & Expert Decks

| Deck | Slides | What it covers |
|------|--------|----------------|
| [Reference deck](decks/ai-best-practices/ai-best-practices.pptx) ([PDF](decks/ai-best-practices/ai-best-practices.pdf)) | 68 | The full journey — prompt engineering, context engineering, agents, orchestration |
| [Builder deck](decks/builder/builder.pptx) ([PDF](decks/builder/builder.pdf)) | 55 | The expert setup — quality AND speed with AI coding agents |

### Workshop Series

Four hands-on sessions, ~45 minutes each. Run as brown bag lunches or team training.

| Workshop | Slides | You'll learn | You'll need |
|----------|--------|--------------|-------------|
| [Whisperer](decks/workshop-whisperer/workshop-whisperer.pptx) ([PDF](decks/workshop-whisperer/workshop-whisperer.pdf)) | 22 | How to talk to AI — 5 prompt engineering techniques | ChatGPT (free tier) |
| [Strategist](decks/workshop-strategist/workshop-strategist.pptx) ([PDF](decks/workshop-strategist/workshop-strategist.pdf)) | 22 | What AI knows matters more than how you ask | ChatGPT (free tier) |
| [Operator](decks/workshop-operator/workshop-operator.pptx) ([PDF](decks/workshop-operator/workshop-operator.pdf)) | 18 | Let agents do the work — and when to trust them | [Claude Code](https://claude.ai/claude-code) |
| [Orchestrator](decks/workshop-orchestrator/workshop-orchestrator.pptx) ([PDF](decks/workshop-orchestrator/workshop-orchestrator.pdf)) | 20 | Chain focused agents together — skills that compound | [Claude Code](https://claude.ai/claude-code) |

Need to sell the series first? The [AI Academy pitch deck](decks/ai-academy-pitch/ai-academy-pitch.pptx) ([PDF](decks/ai-academy-pitch/ai-academy-pitch.pdf)) is a 5-minute overview for leadership or attendees.

## Design philosophy

Every slide passes the 3-second billboard test. Maximum 15 words on screen, 28pt+ font, 50%+ whitespace. Detail lives in speaker notes. Inspired by Apple keynotes and TED talk guidelines.

## How this was built

Built by [@michaelengland](https://github.com/michaelengland) using [Claude Code](https://claude.ai/claude-code) and [deckwright](https://github.com/michaelengland/deckwright) for structured presentation development. Every deck — narratives, content outlines, slide designs, and generation code — is produced programmatically, not designed manually.

## Regenerating the decks

The `.js` files are the source of truth. Edit those, not the `.pptx` files.

```bash
npm install
node decks/ai-best-practices/ai-best-practices.js
node decks/ai-academy-pitch/ai-academy-pitch.js
node decks/workshop-whisperer/workshop-whisperer.js
node decks/workshop-strategist/workshop-strategist.js
node decks/workshop-operator/workshop-operator.js
node decks/workshop-orchestrator/workshop-orchestrator.js
node decks/builder/builder.js
```

Requires Node.js 18+. All decks generated with [PptxGenJS](https://github.com/nickvdyck/PptxGenJS).

## License

MIT — use freely. Attribution appreciated but not required.
