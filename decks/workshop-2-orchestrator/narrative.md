# Workshop 2: Strategist → Orchestrator — Narrative

> **Next step:** Use **/deckwright:craft** to structure this narrative into a content outline.

## Overview

- **Audience**: Attendees who completed Workshop 1. They prompt well, understand context engineering, and have personal preferences (rules) and Skills configured. They haven't used AI with real source material or multi-step workflows — they still copy-paste everything manually.
- **Purpose**: By the end, attendees have run tasks where Claude retrieved its own context from files and the web, understand when to trust and when to verify, have broken a complex task into phases, run a multi-step chain using dedicated Skills, and understood how Skills compound when each agent in the chain has its own expertise.
- **Key message**: Stop being the bottleneck. Let Claude find what it needs. Then build it a team — each Skill focused, each one compounding.
- **Framework**: Show → Do → Trust → Orchestrate
- **Tone**: "Today the AI does the work. Your job is to judge — and then to direct the whole team."
- **Format**: ~35 slides, ~55 min effective (1 hr session). Billboard design. **Claude** (Team or Enterprise) with **org-provisioned Skills** — uploaded by the facilitator before the session.

## Tool Requirements

This workshop uses **Claude** (claude.ai), which all attendees have access to via a Team or Enterprise plan.

Claude natively provides everything needed for Act 1:
- **File upload**: Read and process documents, spreadsheets, PDFs
- **Web search**: Search and summarise live web content
- **Skills**: Specialized workflows that Claude auto-detects and applies (from Workshop 1)
- **Privacy**: Team and Enterprise conversations are not used to train Claude — safe for company data

### Pre-Session Facilitator Prep (critical)

**1. Prepare sample documents** — Have 2–3 ready (a policy doc, a data file, a memo). Keep them generic enough for the group but specific enough to be interesting. Attendees can also use their own files.

**2. Create and provision three org Skills** (budget 30 min):

Create a SKILL.md file for each, package as a ZIP, and upload via the admin panel (Organization settings → Skills) so they appear for all attendees.

**Research Skill** (`research-analyst/SKILL.md`)
> "You are a research analyst. Your only job is to gather and organise information. Always structure your output as: Key Finding | Source | Confidence Level. Use web search when needed. Do not draft, write, or synthesise beyond summarising what you find. Hand off a structured brief — nothing more."

**Draft Skill** (`draft-writer/SKILL.md`)
> "You are a senior writer. You receive structured research briefs — not raw sources or documents. Turn them into polished, well-structured proposals. Match the format and tone specified in the brief. Never go back to source material — work only from what you're given."

**Review Skill** (`review-editor/SKILL.md`)
> "You are a critical editor. You receive drafts and the original brief they were written against. Your job is to flag gaps, unsupported claims, and anything that doesn't answer the brief. Be direct. Use a checklist format: check for what works, X for what needs fixing, with a one-line reason for each."

Verify all three appear in attendees' Customize → Skills before the session.

## Session Structure

### Opening: Where We're At (3 min)

- Show the spectrum. Highlight the full Strategist → Orchestrator jump. "Two more levels. By the end, you're an Orchestrator."
- "You talk to AI like a pro. You've set up its playbook. But look at every step of your workflow — You search. You paste. AI drafts. You apply. Every step has 'you' in it."
- The copy-paste trap: four steps, you're the bottleneck at each one.

### The Ferrari Metaphor (1 min)

- "You're using a Ferrari to carry groceries."
- Let it land. This should sting — they recognise themselves.

---

## Act 1: Let Claude Work (~15 min)

### The Agent Way (1 min)

- Show the agent-driven workflow: Claude retrieves → Claude identifies gaps → Claude creates → You review.
- "Same four steps. You only appear at step 4."
- "Same colleague. Now she has hands — eyes, a search engine, and a filing cabinet."

### Exercise 1: Your First Source Task (5 min)

- **Setup**: Open Claude. Upload a document using the paperclip icon (or drag and drop).
- **Exercise**: "Read the document I've uploaded and write a one-paragraph summary for a non-technical audience."
- **Watch**: Claude reads the file, processes it, produces output — no copy-paste from you.
- **Discuss**: "How long would that have taken you manually?"

### What Claude Can Reach (2 min)

- "AI is only as useful as what it can reach."
- Show what Claude can access: uploaded files, web search.
- Real examples from their world: researching a competitor (web search), analysing a policy doc (file upload).

### Exercise 2: Web Search in Action (5 min)

- **Setup**: Start a new conversation in Claude.
- **Exercise**: "Search for the latest trends in [topic relevant to their work] and give me a structured brief with sources."
- **The reveal**: "You didn't open Google. You didn't read 10 articles. You didn't summarise anything. You just asked."
- **Compare**: "How long does a research task like this normally take you?"

### The Shift (1 min)

- "You gave Claude a task and source material, and it did the work. No copy-paste. That's the shift: from doing to directing."

---

## Act 2: Trust, But Verify (~8 min)

### The Stakes (2 min)

- "You just handed AI the keys. How do you know it's right?"
- Four rules:
  - Never trust numbers you didn't provide
  - Verify claims against sources
  - Use AI for drafts, not decisions
  - Claude Team doesn't train on your data — but that's about privacy, not accuracy

### Exercise 3: Verify (4 min)

- **Exercise**: Take the output from Exercise 1 or 2. Pick one specific claim or number. Verify it manually.
- **Discuss**: "Was it accurate? Did anything feel right but turn out to be wrong? That 'feels right' moment is the most dangerous."

### The Cautionary Beat (2 min)

- "I destroyed months of work in seconds." — Replit AI agent incident, July 2025. An AI coding agent autonomously deleted a user's entire codebase while trying to fix a bug.
- "AI is a power tool, not autopilot. You review. You judge. You approve. Claude does the grunt work."

---

## Act 3: Orchestrate the Team (~25 min)

### The Pivot (2 min)

- "One conversation doing one task is powerful. But real work has multiple steps."
- The kitchen brigade metaphor: "One chef doing a 10-course dinner alone? Burnout. Mistakes. Forgotten appetiser. A kitchen brigade — each chef at a station — serves everything perfectly."
- "The trick isn't making one AI smarter. It's making many work together."

### Exercise 4: Break It Down (6 min)

- **Group exercise**: Facilitator presents a complex task (the tea presentation or another multi-step scenario).
- "What are the phases of this task? What does each phase produce? What does the next phase need from the previous one?"
- Write phases on whiteboard or shared doc. Target: 3–4 phases. e.g., Research → Draft → Review → Approval.
- "Each phase becomes one Skill. Each Skill has one job."

### The Chain Rule (1 min)

- "Each Skill does one thing. The chain does everything."
- "Break big tasks into focused steps. Pass results forward. Filter context between each."
- Visual: Research → Draft → Review → You. Only human at the final step.

### Demo: A Full Chain (7 min)

- **Facilitator runs a 3-phase chain live** using the pre-built org Skills:
  - New conversation → give it the research task → the Research Skill kicks in → show the structured brief output
  - New conversation → paste the brief → the Draft Skill kicks in → show the polished proposal
  - New conversation → paste the draft + original brief → the Review Skill kicks in → show the critique
- **Narrate each step**: "Watch — the Draft Skill never saw the original documents. It only got the brief. That's filtered context. Each new conversation keeps the Skill focused."
- Show the final output. Compare to what a single Claude conversation would have produced.

### Exercise 5: Build Your Own Chain (10 min)

- **Setup** (1 min): Attendees choose a task (their running task from Workshop 1, or the tea presentation). They'll use the pre-built Skills in a 2-phase chain.
- **Phase 1**: New conversation. Give it the research task. The Research Skill activates. Save the output (copy to a doc or notes).
- **Phase 2**: New conversation. Paste Phase 1's output. Give it the drafting task. The Draft Skill activates.
- **Compare**: "How does this compare to giving one Claude conversation the whole task at once?"
- **Discuss**: Where did the chain produce better results? Where did the handoff lose something?
- **Fallback**: If time runs short, Phase 1 becomes a facilitator demo. Attendees do Phase 2 only.

### Exercise 6: Skills Compound (4 min)

- **Teach** (1 min): "In Workshop 1 you set up rules (personal preferences) and enabled your first Skill. Now each step in the chain has its own Skill — a focused expert with a single job. Same concept, scaled to a team."
- **Exercise**: Go to Customize → Skills. Click on the Research Skill to view its SKILL.md. "What would you add or change based on what you saw in Exercise 5?" Take 2–3 suggestions from the group.
- "When you edit that SKILL.md, every future use gets better. Your feedback becomes the skill. Claude won't remember this conversation — but the Skill will."
- "And as an org Skill, when you improve it, everyone benefits."

---

### The Payoff (2 min)

- Show the comparison: "1.5 hours of you being the bottleneck. 15 minutes of judgment — the part only humans can do."
- "Same tea presentation. The chain gets smarter every time. Your feedback becomes Skills."

### Closing: What You've Unlocked (3 min)

- Show the full spectrum one final time. Every level from Explorer to Orchestrator highlighted.
- "You started as an Explorer. You're now an Orchestrator."
- The journey recap: "You learned to whisper. You became a strategist. You let Claude operate. You orchestrated the brigade."
- "The secret was never in the AI. Now go try it — one task, this week."
- **Builder tease**: "And if you want to go further — building integrations, connecting Claude to your actual systems, automating entire workflows — that's the Builder level. That's what's next."

## Source References

- [Replit AI agent incident](https://www.theregister.co.uk/2025/07/15/replit_ai_agent_deletes_codebase/) — AI coding agent autonomously deleted a user's entire codebase (July 2025). Supports the "trust but verify" beat.

## Notes

- **Pre-session prep is the critical dependency**: Two things must happen before attendees arrive: (1) sample documents prepared, (2) three org Skills created and provisioned. Budget 30 min total for facilitator prep. Each Skill is a SKILL.md file in a folder, zipped and uploaded via Organization settings → Skills. Test everything — verify Skills appear in attendees' Customize → Skills.
- **Privacy reassurance**: Mention early that Claude Team/Enterprise doesn't use their conversations for training. This matters for people hesitant to upload company documents.
- **Exercise 2 — web search**: Web search in Claude is straightforward — just ask a question and Claude will search if needed. No special mode switch required. If attendees don't see web search results, they may need to be more explicit: "Search the web for..."
- **Exercise 5 timing**: 10 min is tight for a 2-phase chain if attendees are reading outputs carefully. Have the fallback ready: Phase 1 as facilitator demo, attendees do Phase 2 only. The discussion is more important than the doing.
- **The "skills compound" beat**: This is the emotional climax. "Claude won't remember, but the Skill will." The SKILL.md makes this concrete — they can literally see and edit it. Connect it explicitly to the Skills they enabled in Workshop 1.
- **Graduation moment**: Attendees just completed a 2-session AI Academy. They went from Explorer to Orchestrator. Make it feel earned. Consider a small recognition.
- **Chain tooling in practice**: The "chain" is implemented by starting new conversations for each step — each new conversation provides isolation (filtered context). The copy-paste between conversations is intentionally visible — it makes the handoff concrete and the filtering tangible. The automation of this handoff is the Builder level.
- **Workshop 1 callback**: The chain Skills are the next step from the rules + Skills they set up in Workshop 1. Making this connection explicit helps it land: "In Workshop 1, you enabled a Skill for yourself. Now each step in the chain has its own Skill — same idea, applied to a team."
- **Pro plan audiences**: All exercises work the same except org provisioning. On Pro, the facilitator distributes Skill ZIPs for attendees to upload individually. Adjust the "when you improve an org Skill, everyone benefits" beat to "when you improve this Skill, every future use benefits."
