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

### Section 2: Your First Source Task
**Key message**: Claude does the retrieval, processing, and drafting. You only review.
**Content**:
- The agent-driven workflow: Claude retrieves → Claude identifies gaps → Claude creates → You review. "Same four steps. You only appear at step 4."
- "Same colleague. Now she has hands — eyes, a search engine, and a filing cabinet."
- Exercise: Open Claude. Upload a document. "Read the document I've uploaded and write a one-paragraph summary for a non-technical audience."
- Discuss: "How long would that have taken you manually?"
**Emphasis**: medium
**Speaker notes**: Quick warm-up exercise. The point isn't the summary quality — it's that they didn't copy-paste anything. Claude read the file directly. Have a sample document ready for anyone who doesn't have their own. Mention early: Claude Team/Enterprise doesn't use conversations for training — company documents are safe.
**Transition**: "That was one file. What else can Claude reach?"

### Section 3: What Claude Can Reach
**Key message**: AI is only as useful as what it can access. Claude can search the web and process your files.
**Content**:
- Two things Claude can reach: uploaded files and web search
- Real examples: researching a competitor (web search), analysing a policy doc (file upload)
- Exercise: "Search for the latest trends in [topic relevant to their work] and give me a structured brief with sources."
- The reveal: "You didn't open Google. You didn't read 10 articles. You didn't summarise anything. You just asked."
**Emphasis**: medium
**Speaker notes**: Web search in Claude is straightforward — just ask and Claude will search if needed. If attendees don't see web search results, have them be more explicit: "Search the web for..." The reveal moment is the emotional beat: they got a research brief with sources in seconds. Ask: "How long does a research task like this normally take you?"
**Transition**: "You just handed AI the keys. How do you know it's right?"

### Section 4: Trust, But Verify
**Key message**: AI is a power tool, not autopilot. The "feels right" moment is the most dangerous.
**Content**:
- "You just handed AI the keys. How do you know it's right?"
- Four rules: Never trust numbers you didn't provide. Verify claims against sources. Use AI for drafts, not decisions. Team/Enterprise doesn't train on your data — but that's privacy, not accuracy.
- Exercise: Pick one claim or number from Exercise 1 or 2. Verify it manually.
- Discuss: "Was it accurate? Did anything feel right but turn out to be wrong?"
- Cautionary beat: "I destroyed months of work in seconds." — Replit AI agent incident, July 2025
- "AI is a power tool, not autopilot. You review. You judge. You approve."
**Emphasis**: high
**Speaker notes**: This is the most important mindset shift in the series. The verify exercise can be individual or group discussion if time is tight — but don't skip it. The Replit story is the gut punch: an AI coding agent autonomously deleted a user's entire codebase while trying to fix a bug. It makes the stakes real. End firmly: "Claude does the grunt work. The human makes the call."
**Transition**: "Now that you know how to trust an agent — what if you had a whole team of them?"

### Section 5: The Kitchen Brigade
**Key message**: The trick isn't making one AI smarter. It's making many work together.
**Content**:
- "One conversation doing one task is powerful. But real work has multiple steps."
- Kitchen brigade metaphor: "One chef doing a 10-course dinner alone? Burnout. Mistakes. Forgotten appetiser. A kitchen brigade — each chef at a station — serves everything perfectly."
- "The trick isn't making one AI smarter. It's making many work together."
**Emphasis**: low
**Speaker notes**: Quick pivot beat. The kitchen brigade metaphor should be vivid but brief — it's the setup for Act 3, not a section on its own. Plant the word "specialised" — that's the Skill concept they're about to see.
**Transition**: "First step: figure out the phases."

### Section 6: Break It Down — Phases become Skills
**Key message**: Every complex task has phases. Each phase becomes one Skill with one job.
**Content**:
- Group exercise: Facilitator presents a complex task (the tea presentation or another multi-step scenario)
- "What are the phases? What does each phase produce? What does the next phase need from the previous one?"
- Write phases on whiteboard or shared doc. Target: 3–4 phases (e.g., Research → Draft → Review → Approval)
- "Each phase becomes one Skill. Each Skill has one job."
- The chain rule: "Each Skill does one thing. The chain does everything."
- Visual: Research → Draft → Review → You. Only human at the final step.
**Emphasis**: low
**Speaker notes**: This is a group discussion, not individual exercise. Facilitator drives. The goal is for attendees to see that decomposition is the hard part — once you have phases, assigning Skills is straightforward. The chain rule visual should be the "write this down" moment. Keep it to 3–4 phases — more than that overcomplicates the demo that follows.
**Transition**: "Let me show you what this looks like in practice."

### Section 7: Demo — A full chain, live
**Key message**: Three specialised Skills, each focused on one phase, produce better output than one conversation doing everything.
**Content**:
- Facilitator runs a 3-phase chain live using pre-built org Skills:
  - New conversation → give it the research task → the **Research Skill** kicks in → show the structured brief output
  - New conversation → paste the brief → the **Draft Skill** kicks in → show the polished proposal
  - New conversation → paste the draft + original brief → the **Review Skill** kicks in → show the critique
- "Watch — the Draft Skill never saw the original documents. It only got the brief. That's filtered context. Each new conversation keeps the Skill focused."
- Compare: final output vs. what a single Claude conversation would have produced
**Emphasis**: high
**Speaker notes**: This is the wow moment. Narrate every step — the audience needs to see the handoff mechanics (copy output, start new conversation, paste). Point out what the Draft Skill doesn't know: it never saw the raw research, only the structured brief. That's the power of filtered context — each new conversation provides isolation. The comparison to a single conversation should be obvious: the chain output is more structured, more thorough, better reviewed. Take your time — this demo earns the exercise that follows.
**Transition**: "Your turn."

### Section 8: Build Your Own Chain
**Key message**: A 2-phase chain on your own task proves the pattern works — and reveals where handoffs matter.
**Content**:
- Setup: Choose a task (running task from Workshop 1, or the tea presentation). Use the pre-built org Skills in a 2-phase chain.
- Phase 1: New conversation. Give it the research task. The Research Skill activates. Save the output.
- Phase 2: New conversation. Paste Phase 1's output. Give it the drafting task. The Draft Skill activates.
- Compare: "How does this compare to giving one Claude conversation the whole task at once?"
- Discuss: Where did the chain produce better results? Where did the handoff lose something?
**Emphasis**: medium
**Speaker notes**: 10 minutes is tight. Have the fallback ready: if time runs short, Phase 1 becomes a facilitator demo and attendees do Phase 2 only. The discussion is more important than both phases completing — where the chain wins and where the handoff loses something are both valuable observations. The chain is implemented by starting new conversations for each step — each new conversation provides isolation (filtered context). The copy-paste between conversations is intentionally visible, making the handoff concrete and the filtering tangible.
**Transition**: "You just ran a chain. Now let's look under the hood."

### Section 9: Skills Compound — Claude won't remember, but the Skill will
**Key message**: Each Skill's SKILL.md is its expertise — and when you improve an org Skill, everyone benefits.
**Content**:
- "In Workshop 1 you set up rules (personal preferences) and enabled your first Skill. Now each step in the chain has its own Skill — a focused expert with a single job. Same concept, scaled to a team."
- Exercise: Go to Customize → Skills. Click on the Research Skill to view its SKILL.md. "What would you add or change based on what you saw?"
- Take 2–3 suggestions from the group.
- "When you edit that SKILL.md, every future use gets better. Your feedback becomes the skill."
- "Claude won't remember this conversation — but the Skill will."
- "And as an org Skill, when you improve it, everyone benefits."
**Emphasis**: high
**Speaker notes**: This is the emotional climax. The Workshop 1 callback is critical — rules told Claude who they are, Skills told it how to work; now each step in the chain has its own specialised Skill. The SKILL.md is tangible: they can see it, read it, edit it. "Claude won't remember, but the Skill will" is the line to land. Give it a beat. The group suggestions make it participatory — they're not just using Skills, they're improving them. For Pro plan audiences: the facilitator distributes Skill ZIPs for attendees to upload individually; adjust to "every future use benefits" (personal rather than team-wide).
**Transition**: "Let's see what this adds up to."

### Section 10: Closing — You're an Orchestrator
**Key message**: You started as an Explorer. You're now an Orchestrator. The secret was never in the AI.
**Content**:
- The payoff: "1.5 hours of you being the bottleneck. 15 minutes of judgment — the part only humans can do."
- "Same tea presentation. The chain gets smarter every time. Your feedback becomes Skills."
- Full spectrum with Explorer → Orchestrator highlighted. "You started as an Explorer. You're now an Orchestrator."
- Journey recap: "You learned to whisper. You became a strategist. You let Claude operate. You orchestrated the brigade."
- "The secret was never in the AI. Now go try it — one task, this week."
- Builder tease: "And if you want to go further — building integrations, connecting Claude to your actual systems, automating entire workflows — that's the Builder level."
**Emphasis**: high
**Speaker notes**: The 1.5 hrs → 15 min comparison is the rational payoff. The spectrum walk is the emotional payoff. This is a graduation moment — they completed a 2-session academy, Explorer to Orchestrator. Make it feel earned. The builder tease plants the seed but doesn't oversell — most attendees won't go there, and that's fine. End on the CTA: one task, this week.

## Source References
- [Replit AI agent incident](https://www.theregister.co.uk/2025/07/15/replit_ai_agent_deletes_codebase/) — AI coding agent autonomously deleted a user's entire codebase (July 2025). Supports the "trust but verify" beat in Section 4.

## Design Notes
- **Billboard design**: Maximum 15 words on screen, 28pt+ font, 50%+ whitespace. All detail in speaker notes.
- **Pre-provisioned org Skills**: Three Skills (Research, Draft, Review) must be created as SKILL.md files, packaged as ZIPs, and uploaded via Organization settings → Skills before the session. Skill definitions are in the narrative doc. Budget 30 min facilitator prep.
- **Chain mechanics are intentionally manual**: Copy-pasting between new conversations makes the handoff visible and the context filtering tangible. This is a feature, not a limitation — automation is the Builder level.
- **Demo pacing**: Section 7 (live chain demo) needs breathing room. The facilitator should narrate what each Skill does and — crucially — what it doesn't see. Filtered context is the key concept.
- **Exercise slides must be prescriptive**: Not "try using web search" but "Type: Search for the latest trends in [your topic] and give me a structured brief with sources."
- **Dory callback**: The "same colleague, now she has hands" line in Section 2 references the Dory character from Workshop 1. Attendees will recognise her.
- **Pro plan note**: All exercises work the same on Pro. The facilitator distributes Skill ZIPs for attendees to upload individually. Adjust the "org Skill" language in Section 9 to focus on personal compounding rather than team-wide benefits.
