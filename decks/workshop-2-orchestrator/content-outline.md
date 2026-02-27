# Workshop 2: Strategist → Orchestrator — Content Outline

> **Next step:** Use **/deckwright:design** to plan slides and visual direction.

## Overview
- **Estimated duration**: ~55 min effective (1 hr session)
- **Total sections**: 10
- **Narrative doc**: [narrative.md](narrative.md)

## Content Outline

### Section 1: Opening — You're still the bottleneck
**Key message**: You prompt well and your playbook is set. But every step of your workflow still has "you" in it.
**Content**:
- Title slide: "Strategist → Orchestrator"
- AI adoption spectrum with Strategist → Orchestrator crossing highlighted
- The copy-paste trap: "You search. You paste. AI drafts. You apply. Every step has 'you' in it."
- Ferrari metaphor: "You're using a Ferrari to carry groceries."
**Emphasis**: high
**Speaker notes**: This should sting. They recognise themselves — they've been doing exactly this since Workshop 1. The four-step trap makes it concrete. Let the Ferrari line land before moving on. Energy: "Today the AI does the work. Your job is to judge."
**Transition**: "What if you only appeared at step 4?"

### Section 2: Your First Agent Task
**Key message**: An agent does the retrieval, processing, and drafting. You only review.
**Content**:
- The agent-driven workflow: Agent retrieves → Agent identifies gaps → Agent creates → You review. "Same four steps. You only appear at step 4."
- "Same colleague. Now she has hands — eyes, a phone, and a to-do list."
- Exercise: Open ChatGPT. Upload a document. "Read the document I've uploaded and write a one-paragraph summary for a non-technical audience."
- Discuss: "How long would that have taken you manually?"
**Emphasis**: medium
**Speaker notes**: Quick warm-up exercise. The point isn't the summary quality — it's that they didn't copy-paste anything. ChatGPT read the file directly. Have a sample document ready for anyone who doesn't have their own. Mention early: ChatGPT Org doesn't use conversations for training — company documents are safe.
**Transition**: "That was one file. What if it could reach your email, calendar, and documents too?"

### Section 3: Connections — What an Agent Can Reach
**Key message**: An agent is only as useful as what it can reach. Connected agents replace your entire manual workflow.
**Content**:
- Six connection types: Email, Calendar, Files, Chat, Web, Custom
- Real examples: Monday morning email triage, meeting prep, document search
- Exercise: Switch to agent mode. "@Gmail Summarise my last 5 unread emails and flag anything that needs a response today."
- The reveal: "You didn't search. You didn't paste. You didn't even open your inbox. You just asked."
**Emphasis**: medium
**Speaker notes**: Pre-req: Gmail must be enabled in Workspace Settings → Apps. To switch to agent mode: click tools menu → "Agent", or type /agent in composer. Verify this works before the session. The reveal moment is the emotional beat: they gave the agent access and it did the work. Ask: "How long does this normally take you on a Monday morning?"
**Transition**: "You just handed AI the keys. How do you know it's right?"

### Section 4: Trust, But Verify
**Key message**: AI is a power tool, not autopilot. The "feels right" moment is the most dangerous.
**Content**:
- "You just handed AI the keys. How do you know it's right?"
- Four rules: Never trust numbers you didn't provide. Verify claims against sources. Use AI for drafts, not decisions. Org doesn't train on your data — but that's privacy, not accuracy.
- Exercise: Pick one claim or number from Exercise 1 or 2. Verify it manually.
- Discuss: "Was it accurate? Did anything feel right but turn out to be wrong?"
- Cautionary beat: "I destroyed months of work in seconds." — Replit AI agent incident, July 2025
- "AI is a power tool, not autopilot. You review. You judge. You approve."
**Emphasis**: high
**Speaker notes**: This is the most important mindset shift in the series. The verify exercise can be individual or group discussion if time is tight — but don't skip it. The Replit story is the gut punch: an AI coding agent autonomously deleted a user's entire codebase while trying to fix a bug. It makes the stakes real. End firmly: "The agent does the grunt work. The human makes the call."
**Transition**: "Now that you know how to trust an agent — what if you had a whole team of them?"

### Section 5: The Kitchen Brigade
**Key message**: The trick isn't making one AI smarter. It's making many work together.
**Content**:
- "One agent doing one task is powerful. But real work has multiple steps."
- Kitchen brigade metaphor: "One chef doing a 10-course dinner alone? Burnout. Mistakes. Forgotten appetiser. A kitchen brigade — each chef at a station — serves everything perfectly."
- "The trick isn't making one AI smarter. It's making many work together."
**Emphasis**: low
**Speaker notes**: Quick pivot beat. The kitchen brigade metaphor should be vivid but brief — it's the setup for Act 3, not a section on its own. Plant the word "specialised" — that's the Custom GPT concept they're about to see.
**Transition**: "First step: figure out the phases."

### Section 6: Break It Down — Phases become agents
**Key message**: Every complex task has phases. Each phase becomes one agent with one job.
**Content**:
- Group exercise: Facilitator presents a complex task (the tea presentation or another multi-step scenario)
- "What are the phases? What does each phase produce? What does the next phase need from the previous one?"
- Write phases on whiteboard or shared doc. Target: 3–4 phases (e.g., Research → Draft → Review → Approval)
- "Each phase becomes one agent. Each agent has one job."
- The chain rule: "Each agent does one thing. The chain does everything."
- Visual: Research → Draft → Review → You. Only human at the final step.
**Emphasis**: low
**Speaker notes**: This is a group discussion, not individual exercise. Facilitator drives. The goal is for attendees to see that decomposition is the hard part — once you have phases, assigning agents is straightforward. The chain rule visual should be the "write this down" moment. Keep it to 3–4 phases — more than that overcomplicates the demo that follows.
**Transition**: "Let me show you what this looks like in practice."

### Section 7: Demo — A full chain, live
**Key message**: Three specialised agents, each focused on one phase, produce better output than one agent doing everything.
**Content**:
- Facilitator runs a 3-phase chain live using pre-built Custom GPTs:
  - Open **Research Agent** → give it the task → show the structured brief output
  - Open **Draft Agent** → paste the brief → show the polished proposal
  - Open **Review Agent** → paste the draft + original brief → show the critique
- "Watch — Draft Agent never saw the original documents. It only got the brief. That's filtered context. Each agent stays focused."
- Compare: final output vs. what a single ChatGPT conversation would have produced
**Emphasis**: high
**Speaker notes**: This is the wow moment. Narrate every step — the audience needs to see the handoff mechanics (copy output, open new GPT, paste). Point out what Draft Agent doesn't know: it never saw the raw research, only the structured brief. That's the power of filtered context. The comparison to a single conversation should be obvious: the chain output is more structured, more thorough, better reviewed. Take your time — this demo earns the exercise that follows.
**Transition**: "Your turn."

### Section 8: Build Your Own Chain
**Key message**: A 2-phase chain on your own task proves the pattern works — and reveals where handoffs matter.
**Content**:
- Setup: Choose a task (running task from Workshop 1, or the tea presentation). Use the pre-built agents in a 2-phase chain.
- Phase 1: Open the Research Agent. Give it the task. Save the output.
- Phase 2: Open the Draft Agent. Paste Phase 1's output. Give it the drafting task.
- Compare: "How does this compare to giving one ChatGPT conversation the whole task at once?"
- Discuss: Where did the chain produce better results? Where did the handoff lose something?
**Emphasis**: medium
**Speaker notes**: 10 minutes is tight. Have the fallback ready: if time runs short, Phase 1 becomes a facilitator demo and attendees do Phase 2 only. The discussion is more important than both phases completing — where the chain wins and where the handoff loses something are both valuable observations. The chain is implemented by copy-pasting between conversations — this is intentionally visible, making the handoff concrete and the filtering tangible.
**Transition**: "You just ran a chain. Now let's look under the hood."

### Section 9: Skills Compound — The agent won't remember, but the skill will
**Key message**: Each Custom GPT's system prompt is a skill — and when you improve a shared agent, everyone benefits.
**Content**:
- "In Workshop 1 you set up custom instructions for yourself. Each of these Custom GPTs is a custom instruction for a specific agent. Same concept — now each agent in the chain gets its own focused skill."
- Exercise: Open the Research Agent. Click the name to view its system prompt. "What would you add or change based on what you saw?"
- Take 2–3 suggestions from the group.
- "When you edit that prompt, every future run gets better. Your feedback becomes the skill."
- "The agent won't remember this conversation — but the skill will."
- "And in ChatGPT Org, when you improve a shared agent, everyone benefits."
**Emphasis**: high
**Speaker notes**: This is the emotional climax. The Workshop 1 callback is critical — they've been building skills since last session; now each agent gets its own. The system prompt is tangible: they can see it, read it, edit it. "The agent won't remember, but the skill will" is the line to land. Give it a beat. The group suggestions make it participatory — they're not just using agents, they're improving them.
**Transition**: "Let's see what this adds up to."

### Section 10: Closing — You're an Orchestrator
**Key message**: You started as an Explorer. You're now an Orchestrator. The secret was never in the AI.
**Content**:
- The payoff: "1.5 hours of you being the bottleneck. 15 minutes of judgment — the part only humans can do."
- "Same tea presentation. The chain gets smarter every time. Your feedback becomes skills."
- Full spectrum with Explorer → Orchestrator highlighted. "You started as an Explorer. You're now an Orchestrator."
- Journey recap: "You learned to whisper. You became a strategist. You let agents operate. You orchestrated the brigade."
- "The secret was never in the AI. Now go try it — one task, this week."
- Builder tease: "And if you want to go further — building plugins, connecting agents to your actual systems, automating entire workflows — that's the Builder level."
**Emphasis**: high
**Speaker notes**: The 1.5 hrs → 15 min comparison is the rational payoff. The spectrum walk is the emotional payoff. This is a graduation moment — they completed a 2-session academy, Explorer to Orchestrator. Make it feel earned. The builder tease plants the seed but doesn't oversell — most attendees won't go there, and that's fine. End on the CTA: one task, this week.

## Source References
- [Replit AI agent incident](https://www.theregister.co.uk/2025/07/15/replit_ai_agent_deletes_codebase/) — AI coding agent autonomously deleted a user's entire codebase (July 2025). Supports the "trust but verify" beat in Section 4.

## Design Notes
- **Billboard design**: Maximum 15 words on screen, 28pt+ font, 50%+ whitespace. All detail in speaker notes.
- **Pre-built Custom GPTs**: The three agents (Research, Draft, Review) must be created and published to the org workspace before the session. System prompts are in the narrative doc. Budget 30 min facilitator prep.
- **Connection prerequisites**: Gmail/Google Drive/Google Chat must be enabled in ChatGPT Enterprise Workspace Settings → Apps before the session. Test before.
- **Chain mechanics are intentionally manual**: Copy-pasting between Custom GPT conversations makes the handoff visible and the context filtering tangible. This is a feature, not a limitation — automation is the Builder level.
- **Demo pacing**: Section 7 (live chain demo) needs breathing room. The facilitator should narrate what each agent does and — crucially — what it doesn't see. Filtered context is the key concept.
- **Exercise slides must be prescriptive**: Not "try using agent mode" but "Click tools menu → Agent. Type: @Gmail Summarise my last 5 unread emails and flag anything that needs a response today."
- **Dory callback**: The "same colleague, now she has hands" line in Section 2 references the Dory character from Workshop 1. Attendees will recognise her.
