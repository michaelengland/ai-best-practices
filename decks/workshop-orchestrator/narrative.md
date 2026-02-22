# Workshop: Operator → Orchestrator — Narrative

> **Next step:** Use **/deckwright:craft** to structure this narrative into a content outline.

## Overview

- **Audience**: Attendees who completed Workshops 1–3. They can prompt, manage context, use custom instructions, and run single-agent tasks in ChatGPT. They haven't chained agents together or given each agent its own specialisation.
- **Purpose**: By the end, attendees have broken a complex task into phases, run a multi-step agent chain using pre-built Custom GPTs, and understood how skills compound when each agent has its own expertise.
- **Key message**: One agent is powerful. A coordinated team of agents — each with its own skill — is transformative.
- **Framework**: Conceptualise → Demo → Do → Compound
- **Tone**: "This is the final level. By the end, you're an Orchestrator."
- **Format**: ~25 slides, ~45 min effective. Billboard design. **ChatGPT Org** with Custom GPTs — pre-built and shared by the facilitator before the session.

## Tool Requirements

Same as Workshop 3 — ChatGPT Org, which everyone already has.

This session introduces **Custom GPTs**: specialised agents the facilitator creates once and shares org-wide. Attendees open them from the ChatGPT sidebar — no configuration required on their end.

### Pre-Session Facilitator Prep (critical)

Before the session, create and publish these three Custom GPTs to the organisation:

**Research Agent**
> System prompt: "You are a research analyst. Your only job is to gather and organise information. Always structure your output as: Key Finding | Source | Confidence Level. Use web search. Do not draft, write, or synthesise beyond summarising what you find. Hand off a structured brief — nothing more."

**Draft Agent**
> System prompt: "You are a senior writer. You receive structured research briefs — not raw sources or documents. Turn them into polished, well-structured proposals. Match the format and tone specified in the brief. Never go back to source material — work only from what you're given."

**Review Agent**
> System prompt: "You are a critical editor. You receive drafts and the original brief they were written against. Your job is to flag gaps, unsupported claims, and anything that doesn't answer the brief. Be direct. Use a checklist format: ✓ for what works, ✗ for what needs fixing, with a one-line reason for each."

Publish all three to the workspace so they appear in attendees' ChatGPT sidebar.

## Session Structure

### Opening: Where We're At (3–5 min)

- Show the spectrum. Highlight Operator → Orchestrator crossing.
- "Last time, one agent doing everything. Today: a team."
- The kitchen brigade metaphor: "One chef doing a 10-course dinner alone will burn out. A kitchen brigade — each chef at a station — serves everything perfectly."

### Exercise 1: Break It Down (8 min)

- **Teach** (2 min): "The trick isn't making one AI smarter. It's making many work together. First step: figure out the phases."
- **Group exercise**: Facilitator presents a complex task (the onboarding proposal or another multi-step scenario). Group discussion: "What are the phases of this task? What does each phase produce? What does the next phase need from the previous one?"
- **Outcome**: A whiteboard or shared doc with 3–4 phases identified. e.g., Research → Draft → Review → Approval.
- "Each phase becomes one agent. Each agent has one job."

### Exercise 2: The Chain Rule (2 min)

- "Each agent does one thing. The chain does everything."
- "Break big tasks into focused steps. Pass results forward. Filter context between each."
- The "write this down" moment.

### Show: What a Skill Looks Like (3 min)

- Open the Research Agent in ChatGPT. Click the GPT name to show its configuration.
- "See this system prompt? That's the skill. It tells the agent what it is, what it does, and — crucially — what it doesn't do."
- "In Workshop 2 you set up Custom Instructions for yourself. This is the same idea, but for a specific agent with a specific job."
- "The Draft Agent has never seen the original research. It only sees what Research Agent passes to it. That's the focus — and that's why the output is better."

### Demo: A Full Chain (8 min)

- **Facilitator runs a 3-phase chain live** using the pre-built Custom GPTs:
  - Open **Research Agent** → give it the task → show the structured brief output
  - Open **Draft Agent** → paste the brief → show the polished proposal
  - Open **Review Agent** → paste the draft + original brief → show the critique
- **Narrate each step**: "Watch — Draft Agent never saw the original documents. It only got the brief. That's filtered context. Each agent stays focused."
- Show the final output. Compare to what a single ChatGPT conversation would have produced.

### Exercise 3: Build Your Own Chain (12 min)

- **Setup** (2 min): Attendees choose a task (their running task from previous workshops, or the prescribed one). They'll use the pre-built agents in a 2-phase chain.
- **Phase 1**: Open the Research Agent. Give it the task. Save the output (copy to a doc or notes).
- **Phase 2**: Open the Draft Agent. Paste Phase 1's output. Give it the drafting task.
- **Compare**: "How does this compare to giving one ChatGPT conversation the whole task at once?"
- **Discuss**: Where did the chain produce better results? Where did the handoff lose something?

### Exercise 4: Skills Compound (5 min)

- **Teach** (1 min): "You already know custom instructions from Workshop 2. Each of these Custom GPTs is a custom instruction for a specific agent. You can edit them."
- **Exercise**: Show the Research Agent's system prompt. Ask: "What would you add or change based on what you saw in Exercise 3?" Take 2–3 suggestions from the group.
- "When you edit that prompt, every future run of this agent gets better. Your feedback becomes the skill. The agent won't remember this conversation — but the skill will."
- "And in ChatGPT Org, when you improve a shared agent, everyone benefits."

### The Payoff: 1.5 Hours vs 15 Minutes (3 min)

- Show the comparison (borrowed from main deck): "1.5 hours of you being the bottleneck. 15 minutes of judgment — the part only humans can do."
- "Same proposal. The chain gets smarter every time. Your feedback becomes skills."

### Closing: What You've Unlocked (3 min)

- Show the full spectrum one final time. "You started as an Explorer. You're now an Orchestrator."
- The journey recap: "You learned to whisper. You became a strategist. You let agents operate. You orchestrated the brigade."
- "The secret was never in the AI. Now go try it — one task, this week."
- **Builder tease**: "And if you want to go further — building plugins, connecting agents to your actual systems, automating entire workflows — that's the Builder level. That's what's next."

## Notes

- **Pre-session prep is the critical dependency**: The Custom GPTs must be created and published before attendees arrive. Unlike Workshop 3 (no setup), this session has one facilitator task that must happen in advance. Budget 30 min to build and test all three agents.
- **Exercise 3 timing**: 12 min is tight for a 2-phase chain if attendees are reading outputs carefully. Have the fallback ready: if it runs long, Phase 2 becomes a facilitator demo while attendees watch. The discussion is more important than the doing here.
- **The "skills compound" beat**: This is the emotional climax. "The agent won't remember, but the skill will." The Custom GPT framing makes this concrete in a way Claude Code never could for this audience — they can literally see and edit the system prompt.
- **Graduation moment**: Consider a small recognition — attendees just completed a 4-session AI Academy. They went from Explorer to Orchestrator. Make it feel earned.
- **Chain tooling in practice**: The "chain" is implemented by copy-pasting output between ChatGPT conversations (one per Custom GPT). This is intentionally visible — it makes the handoff concrete and the filtering tangible. The automation of this handoff is the Builder level.
- **Workshop 2 callback**: The Custom GPT system prompt is directly analogous to the Custom Instructions they set up in Workshop 2. Making this connection explicit helps it land: "You've been doing this for yourself since Workshop 2. Now each agent has its own."
