# Workshop: Strategist → Operator — Narrative

> **Next step:** Use **/deck-flow:craft** to structure this narrative into a content outline.

## Overview

- **Audience**: Attendees who completed Workshops 1-2. They prompt well and have custom instructions set up. They haven't used AI agents — they still copy-paste everything manually.
- **Purpose**: By the end, attendees have set up and run a real agent task where the AI retrieved its own context, and they understand when to trust and when to verify.
- **Key message**: Stop being the bottleneck. Let the agent find what it needs — you just review.
- **Framework**: Show → Do → Compare → Trust
- **Tone**: "Today the AI does the work. Your job is to judge."
- **Format**: ~25 slides, ~45 min effective. Billboard design. **Requires Claude Code or equivalent agentic tool** — ChatGPT free tier is not sufficient.

## Tool Requirements

This workshop requires an agentic tool that can:
- Read files from disk or web
- Search for information autonomously
- Take multi-step actions without manual copy-paste

**Recommended**: Claude Code (CLI), Codex, or ChatGPT with Code Interpreter/Advanced Data Analysis.

The facilitator should confirm tool access before the session and provide setup instructions in advance.

## Session Structure

### Opening: Where We're At (3-5 min)

- Show the spectrum. Highlight Strategist → Operator crossing.
- "You talk to AI like a pro. You've set up its playbook. But who's doing all the work? Still you."
- Quick demo: show the 4-step copy-paste trap (You search → You paste → AI drafts → You apply). "Every step has 'you' in it."

### The Ferrari Metaphor (1 min)

- "You're using a Ferrari to carry groceries."
- Let it land. This should sting — they recognize themselves.

### Exercise 1: Your First Agent Task (10 min)

- **Teach** (3 min): Show the agent-driven workflow: Agent retrieves → Agent identifies gaps → Agent creates → You review. "Same four steps. You only appear at step 4."
- **Setup**: Open Claude Code (or equivalent). Prepare a simple task with a file to read.
- **Exercise**: Give the agent a task: "Read [this document] and write a one-paragraph summary for a non-technical audience."
- **Watch**: The agent reads the file, processes it, and produces output — no copy-paste.
- **Discuss**: "How long would that have taken you manually? The agent just did it in seconds."

### Exercise 2: Add Connections (10 min)

- **Teach** (2 min): "An agent is only as useful as what it can reach." Show the 6 connection types: Web, Email, Docs, Data, Calendar, Custom.
- **Exercise**: Give the agent a task that requires searching: "Research [topic] and summarize the top 3 findings with sources."
- **The reveal**: The agent found information you didn't think to provide. It went looking for what it needed.
- **Compare**: "Without connections, you'd have searched, read, copy-pasted, and summarized yourself. The agent just did all four."

### Exercise 3: The Budget Memo Moment (8 min)

- **Teach** (1 min): The budget memo story from the main deck — "You forgot the budget memo. The VP asks about it. Too late."
- **Exercise**: Give the agent a more complex task with multiple files or sources. Something where relevant context isn't obvious.
- **Watch for**: Did the agent find something you wouldn't have thought to include?
- **Discuss**: "The agent found context you wouldn't have thought to provide. That's the power of connections."

### Trust, But Verify (5 min)

- **Teach** (2 min): "You just handed AI the keys. How do you know it's right?"
  - Never trust numbers you didn't provide
  - Verify claims against sources
  - Use AI for drafts, not decisions
- **Exercise**: Take the output from Exercise 2 or 3. Pick one specific claim or number. Verify it manually.
- **Discuss**: "Was it accurate? Did anything feel right but turn out to be wrong? That 'feels right' moment is the most dangerous."

### Closing: What's Next (3 min)

- "You're now an Operator. You set up agents, connected them to your world, and let them work."
- **The cliffhanger**: "One agent doing one task is powerful. But real work has multiple steps. What if you had a whole team?"
- "Next time: Operator → Orchestrator. We chain agents together. Each one focused. The team does everything."

## Notes

- **Tool setup is critical**: If attendees can't access Claude Code or equivalent, the session fails. Send setup instructions 48 hours in advance. Have a facilitator backup plan (demo-only mode where facilitator shares screen and attendees observe).
- **File preparation**: Have 2-3 sample documents ready for exercises (a policy doc, a data file, a memo). Attendees can also use their own files.
- **Trust exercise timing**: If short on time, the trust exercise can be a group discussion instead of individual verification.
- **Security reminder**: Remind attendees about company data policies — only use approved tools for company data. This reinforces the trust theme.
