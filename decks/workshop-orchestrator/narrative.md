# Workshop: Operator → Orchestrator — Narrative

> **Next step:** Use **/deck-flow:craft** to structure this narrative into a content outline.

## Overview

- **Audience**: Attendees who completed Workshops 1-3. They can prompt, manage context, use skills, and run single-agent tasks. They haven't chained agents together.
- **Purpose**: By the end, attendees have broken a complex task into phases, run a multi-step agent chain, and seen how skills compound across runs.
- **Key message**: One agent is powerful. A coordinated team of agents — each with its own skill — is transformative.
- **Framework**: Conceptualize → Demo → Do → Compound
- **Tone**: "This is the final level. By the end, you're an Orchestrator."
- **Format**: ~25 slides, ~45 min effective. Billboard design. **Requires Claude Code** for multi-step agent workflows.

## Tool Requirements

Same as Workshop 3 — Claude Code or equivalent. Participants should already be comfortable with the tool from the previous session.

## Session Structure

### Opening: Where We're At (3-5 min)

- Show the spectrum. Highlight Operator → Orchestrator crossing.
- "Last time, one agent doing everything. Today: a team."
- The kitchen brigade metaphor: "One chef doing a 10-course dinner alone will burn out. A kitchen brigade — each chef at a station — serves everything perfectly."

### Exercise 1: Break It Down (8 min)

- **Teach** (2 min): "The trick isn't making one AI smarter. It's making many work together. First step: figure out the phases."
- **Group exercise**: Facilitator presents a complex task (the onboarding proposal or another multi-step scenario). Group discussion: "What are the phases of this task? What does each phase produce? What does the next phase need from the previous one?"
- **Outcome**: A whiteboard/shared doc with 3-4 phases identified. e.g., Research → Draft → Review → Approval.
- "Each phase becomes one agent. Each agent has one job."

### Exercise 2: The Chain Rule (2 min)

- "Each agent does one thing. The chain does everything."
- "Break big tasks into focused steps. Pass results forward. Filter context between each."
- The "write this down" moment.

### Demo: A Full Chain (8 min)

- **Facilitator runs a 3-phase chain live** in Claude Code:
  - Agent 1 (Research): reads source materials, produces a structured brief
  - Agent 2 (Draft): uses only the brief (not raw materials) to write the proposal
  - Agent 3 (Review): checks the draft against requirements, flags gaps
- **Narrate each step**: "Watch — Agent 2 never saw the raw documents. It only got the brief. That's filtered context. Each agent stays focused."
- Show the final output. Compare to what a single agent would have produced.

### Exercise 3: Build Your Own Chain (12 min)

- **Setup** (2 min): Participants choose a task (their running task from previous workshops, or a prescribed one). Break it into 2 phases.
- **Phase 1**: Run the first agent — research/gather/summarize. Save the output.
- **Phase 2**: Feed Phase 1's output to a second agent — draft/create/synthesize.
- **Compare**: "How does this compare to giving one agent the whole task at once?"
- **Discuss**: Where did the chain produce better results? Where did it lose something?

### Exercise 4: Add a Skill to the Chain (5 min)

- **Teach** (1 min): "You already set up skills for yourself in Workshop 2. Now each agent gets its own."
- **Exercise**: Add a custom instruction to one agent in the chain (e.g., "When researching, always structure output as: Key Finding, Source, Confidence Level").
- **Re-run** the chain. See the difference the skill makes at that station.
- "Skills compound. Your feedback from this run becomes a better skill next time."

### The Payoff: 1.5 Hours vs 15 Minutes (3 min)

- Show the comparison (borrowed from main deck): "1.5 hours of you being the bottleneck. 15 minutes of judgment — the part only humans can do."
- "Same proposal. The chain gets smarter every time. Your feedback becomes skills. She won't remember, but the skills will."

### Closing: What You've Unlocked (3 min)

- Show the full spectrum one final time. "You started as an Explorer. You're now an Orchestrator."
- The journey recap: "You learned to whisper. You became a strategist. You let agents operate. You orchestrated the brigade."
- "The secret was never in the AI. Now go try it — one task, this week."
- **Builder tease**: "And if you want to go further — building plugins, creating tools for others — that's the Builder level. That's what's next."

## Notes

- **Exercise 3 is ambitious for 12 minutes**: If tool setup or troubleshooting eats time, simplify to a facilitator-led demo where participants follow along on their screens.
- **Chain tooling**: Claude Code handles multi-step workflows naturally through conversation context. The "chain" is implemented by: running agent 1, saving output, starting new context with agent 2 using the output. Skills = CLAUDE.md or system prompts per step.
- **The skills-compound beat**: This is the emotional climax. "Your feedback becomes skills. She won't remember, but the skills will." This should land with weight — it's the payoff for all 4 workshops.
- **Graduation moment**: Consider having a small celebration or recognition — attendees just completed a 4-session AI Academy. They went from Explorer to Orchestrator.
