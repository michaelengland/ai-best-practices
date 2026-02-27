# Workshop 2: Strategist → Orchestrator — Narrative

> **Next step:** Use **/deckwright:craft** to structure this narrative into a content outline.

## Overview

- **Audience**: Attendees who completed Workshop 1. They prompt well, understand context engineering, and have custom instructions set up. They haven't used AI agents — they still copy-paste everything manually.
- **Purpose**: By the end, attendees have run agent tasks where ChatGPT retrieved its own context, understand when to trust and when to verify, have broken a complex task into phases, run a multi-step agent chain using Custom GPTs, and understood how skills compound when each agent has its own expertise.
- **Key message**: Stop being the bottleneck. Let the agent find what it needs. Then build it a team — each agent focused, each skill compounding.
- **Framework**: Show → Do → Trust → Orchestrate
- **Tone**: "Today the AI does the work. Your job is to judge — and then to direct the whole team."
- **Format**: ~35 slides, ~55 min effective (1 hr session). Billboard design. **ChatGPT Org** with **Custom GPTs** — pre-built and shared by the facilitator before the session.

## Tool Requirements

This workshop uses **ChatGPT Org**, which all attendees have access to.

ChatGPT Org natively provides everything needed for Act 1:
- **File upload**: Read and process documents, spreadsheets, PDFs
- **Web browsing**: Search and summarise live web content
- **Agent mode**: Autonomous task execution with tool access
- **Connections**: Email, Calendar, Files, Chat (must be enabled — see facilitator prep)
- **Privacy**: Org conversations are not used to train ChatGPT — safe for company data

### Pre-Session Facilitator Prep (critical)

**1. Enable ChatGPT apps/connections** — Apps (Gmail, Google Drive, Google Chat) are disabled by default in ChatGPT Enterprise. Admin must enable them in Workspace Settings → Apps before the session. Test before.

**2. Prepare sample documents** — Have 2–3 ready (a policy doc, a data file, a memo). Keep them generic enough for the group but specific enough to be interesting. Attendees can also use their own files.

**3. Create and publish three Custom GPTs** to the organisation (budget 30 min):

**Research Agent**
> System prompt: "You are a research analyst. Your only job is to gather and organise information. Always structure your output as: Key Finding | Source | Confidence Level. Use web search. Do not draft, write, or synthesise beyond summarising what you find. Hand off a structured brief — nothing more."

**Draft Agent**
> System prompt: "You are a senior writer. You receive structured research briefs — not raw sources or documents. Turn them into polished, well-structured proposals. Match the format and tone specified in the brief. Never go back to source material — work only from what you're given."

**Review Agent**
> System prompt: "You are a critical editor. You receive drafts and the original brief they were written against. Your job is to flag gaps, unsupported claims, and anything that doesn't answer the brief. Be direct. Use a checklist format: ✓ for what works, ✗ for what needs fixing, with a one-line reason for each."

Publish all three to the workspace so they appear in attendees' ChatGPT sidebar.

## Session Structure

### Opening: Where We're At (3 min)

- Show the spectrum. Highlight the full Strategist → Orchestrator jump. "Two more levels. By the end, you're an Orchestrator."
- "You talk to AI like a pro. You've set up its playbook. But look at every step of your workflow — You search. You paste. AI drafts. You apply. Every step has 'you' in it."
- The copy-paste trap: four steps, you're the bottleneck at each one.

### The Ferrari Metaphor (1 min)

- "You're using a Ferrari to carry groceries."
- Let it land. This should sting — they recognise themselves.

---

## Act 1: Let the Agent Work (~15 min)

### The Agent Way (1 min)

- Show the agent-driven workflow: Agent retrieves → Agent identifies gaps → Agent creates → You review.
- "Same four steps. You only appear at step 4."
- "Same colleague. Now she has hands — eyes, a phone, and a to-do list."

### Exercise 1: Your First Agent Task (5 min)

- **Setup**: Open ChatGPT. Upload a document using the paperclip icon (or drag and drop).
- **Exercise**: "Read the document I've uploaded and write a one-paragraph summary for a non-technical audience."
- **Watch**: ChatGPT reads the file, processes it, produces output — no copy-paste from you.
- **Discuss**: "How long would that have taken you manually?"

### Connections: What an Agent Can Reach (2 min)

- "An agent is only as useful as what it can reach."
- Show the six connection types: Email, Calendar, Files, Chat, Web, Custom.
- Real examples from their world: Monday morning email triage, meeting prep, document search.

### Exercise 2: Agent Mode with Connections (5 min)

- **Setup**: Switch to agent mode (click tools menu → "Agent", or type /agent in composer).
- **Exercise**: "@Gmail Summarise my last 5 unread emails and flag anything that needs a response today."
- **The reveal**: "You didn't search. You didn't paste. You didn't even open your inbox. You just asked."
- **Compare**: "How long does this normally take you on a Monday morning?"

### The Shift (1 min)

- "You gave the agent access to your inbox, and it did the work. No copy-paste. That's the shift: from doing to directing."

---

## Act 2: Trust, But Verify (~8 min)

### The Stakes (2 min)

- "You just handed AI the keys. How do you know it's right?"
- Four rules:
  - Never trust numbers you didn't provide
  - Verify claims against sources
  - Use AI for drafts, not decisions
  - ChatGPT Org doesn't train on your data — but that's about privacy, not accuracy

### Exercise 3: Verify (4 min)

- **Exercise**: Take the output from Exercise 1 or 2. Pick one specific claim or number. Verify it manually.
- **Discuss**: "Was it accurate? Did anything feel right but turn out to be wrong? That 'feels right' moment is the most dangerous."

### The Cautionary Beat (2 min)

- "I destroyed months of work in seconds." — Replit AI agent incident, July 2025. An AI coding agent autonomously deleted a user's entire codebase while trying to fix a bug.
- "AI is a power tool, not autopilot. You review. You judge. You approve. The agent does the grunt work."

---

## Act 3: Orchestrate the Team (~25 min)

### The Pivot (2 min)

- "One agent doing one task is powerful. But real work has multiple steps."
- The kitchen brigade metaphor: "One chef doing a 10-course dinner alone? Burnout. Mistakes. Forgotten appetiser. A kitchen brigade — each chef at a station — serves everything perfectly."
- "The trick isn't making one AI smarter. It's making many work together."

### Exercise 4: Break It Down (6 min)

- **Group exercise**: Facilitator presents a complex task (the tea presentation or another multi-step scenario).
- "What are the phases of this task? What does each phase produce? What does the next phase need from the previous one?"
- Write phases on whiteboard or shared doc. Target: 3–4 phases. e.g., Research → Draft → Review → Approval.
- "Each phase becomes one agent. Each agent has one job."

### The Chain Rule (1 min)

- "Each agent does one thing. The chain does everything."
- "Break big tasks into focused steps. Pass results forward. Filter context between each."
- Visual: Research → Draft → Review → You. Only human at the final step.

### Demo: A Full Chain (7 min)

- **Facilitator runs a 3-phase chain live** using the pre-built Custom GPTs:
  - Open **Research Agent** → give it the task → show the structured brief output
  - Open **Draft Agent** → paste the brief → show the polished proposal
  - Open **Review Agent** → paste the draft + original brief → show the critique
- **Narrate each step**: "Watch — Draft Agent never saw the original documents. It only got the brief. That's filtered context. Each agent stays focused."
- Show the final output. Compare to what a single ChatGPT conversation would have produced.

### Exercise 5: Build Your Own Chain (10 min)

- **Setup** (1 min): Attendees choose a task (their running task from Workshop 1, or the tea presentation). They'll use the pre-built agents in a 2-phase chain.
- **Phase 1**: Open the Research Agent. Give it the task. Save the output (copy to a doc or notes).
- **Phase 2**: Open the Draft Agent. Paste Phase 1's output. Give it the drafting task.
- **Compare**: "How does this compare to giving one ChatGPT conversation the whole task at once?"
- **Discuss**: Where did the chain produce better results? Where did the handoff lose something?
- **Fallback**: If time runs short, Phase 1 becomes a facilitator demo. Attendees do Phase 2 only.

### Exercise 6: Skills Compound (4 min)

- **Teach** (1 min): "In Workshop 1 you set up custom instructions for yourself. Each of these Custom GPTs is a custom instruction for a specific agent. Same concept — but now each agent in the chain gets its own focused skill."
- **Exercise**: Open the Research Agent. Click the name to view its system prompt. "What would you add or change based on what you saw in Exercise 5?" Take 2–3 suggestions from the group.
- "When you edit that prompt, every future run of this agent gets better. Your feedback becomes the skill. The agent won't remember this conversation — but the skill will."
- "And in ChatGPT Org, when you improve a shared agent, everyone benefits."

---

### The Payoff (2 min)

- Show the comparison: "1.5 hours of you being the bottleneck. 15 minutes of judgment — the part only humans can do."
- "Same tea presentation. The chain gets smarter every time. Your feedback becomes skills."

### Closing: What You've Unlocked (3 min)

- Show the full spectrum one final time. Every level from Explorer to Orchestrator highlighted.
- "You started as an Explorer. You're now an Orchestrator."
- The journey recap: "You learned to whisper. You became a strategist. You let agents operate. You orchestrated the brigade."
- "The secret was never in the AI. Now go try it — one task, this week."
- **Builder tease**: "And if you want to go further — building plugins, connecting agents to your actual systems, automating entire workflows — that's the Builder level. That's what's next."

## Source References

- [Replit AI agent incident](https://www.theregister.co.uk/2025/07/15/replit_ai_agent_deletes_codebase/) — AI coding agent autonomously deleted a user's entire codebase (July 2025). Supports the "trust but verify" beat.

## Notes

- **Pre-session prep is the critical dependency**: Three things must happen before attendees arrive: (1) ChatGPT apps/connections enabled by admin, (2) sample documents prepared, (3) three Custom GPTs created and published. Budget 45 min total for facilitator prep. Test everything.
- **Privacy reassurance**: Mention early that ChatGPT Org doesn't use their conversations for training. This matters for people hesitant to upload company documents or connect email.
- **Agent mode access**: To switch to agent mode: click tools menu → "Agent", or type /agent in composer. Verify this works before the session — the UI changes periodically.
- **Exercise 5 timing**: 10 min is tight for a 2-phase chain if attendees are reading outputs carefully. Have the fallback ready: Phase 1 as facilitator demo, attendees do Phase 2 only. The discussion is more important than the doing.
- **The "skills compound" beat**: This is the emotional climax. "The agent won't remember, but the skill will." The Custom GPT framing makes this concrete — they can literally see and edit the system prompt. Connect it explicitly to the custom instructions they set up in Workshop 1.
- **Graduation moment**: Attendees just completed a 2-session AI Academy. They went from Explorer to Orchestrator. Make it feel earned. Consider a small recognition.
- **Chain tooling in practice**: The "chain" is implemented by copy-pasting output between ChatGPT conversations (one per Custom GPT). This is intentionally visible — it makes the handoff concrete and the filtering tangible. The automation of this handoff is the Builder level.
- **Workshop 1 callback**: The Custom GPT system prompt is directly analogous to the custom instructions they set up in Workshop 1. Making this connection explicit helps it land: "You've been doing this for yourself since last session. Now each agent has its own."
