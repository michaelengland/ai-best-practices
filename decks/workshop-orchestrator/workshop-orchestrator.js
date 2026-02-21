const pptxgen = require("pptxgenjs");
const path = require("path");

const D = {
  bg: "0F0F1A", lightBg: "F8F9FA", glow: "00B4D8",
  white: "FFFFFF", text: "E0E4E8", muted: "94A3B8", darkText: "1E293B",
  accent: "00B4D8", wrong: "E63946", wrongBg: "FEE2E2", right: "2D936C", rightBg: "DCFCE7",
  h: "Georgia", b: "Calibri",
};

function darkSlide(pres) {
  const s = pres.addSlide();
  s.background = { color: D.bg };
  s.addShape(pres.shapes.OVAL, { x: 5, y: 2.5, w: 8, h: 6, fill: { color: D.accent, transparency: 96 } });
  return s;
}
function hero(pres, main, opts = {}) {
  const s = darkSlide(pres);
  s.addText(main, { x: 1.0, y: 1.2, w: 8, h: 2.8, fontFace: opts.font || D.h, fontSize: opts.size || 44, color: opts.color || D.white, bold: true, align: "center", margin: 0, valign: "middle" });
  if (opts.sub) { s.addText(opts.sub, { x: 1.5, y: 4.0, w: 7, h: 0.8, fontFace: D.b, fontSize: 28, color: opts.subColor || D.muted, align: "center", margin: 0, valign: "top" }); }
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}
function breatherSlide(pres, text, notes) {
  const s = darkSlide(pres);
  s.addText(text, { x: 1.5, y: 2.0, w: 7, h: 1.6, fontFace: D.h, fontSize: 28, color: D.accent, italic: true, align: "center", margin: 0, valign: "middle" });
  if (notes) s.addNotes(notes);
  return s;
}
function exerciseSlide(pres, instruction, detail, notes) {
  const s = darkSlide(pres);
  s.addText("YOUR TURN", { x: 1.0, y: 0.6, w: 8, h: 0.8, fontFace: D.b, fontSize: 22, color: D.accent, bold: true, align: "center", margin: 0, valign: "middle" });
  s.addText(instruction, { x: 1.0, y: 1.5, w: 8, h: 2.0, fontFace: D.h, fontSize: 36, color: D.white, bold: true, align: "center", margin: 0, valign: "middle" });
  if (detail) { s.addText(detail, { x: 1.5, y: 3.6, w: 7, h: 1.2, fontFace: D.b, fontSize: 22, color: D.muted, align: "center", margin: 0, valign: "top" }); }
  if (notes) s.addNotes(notes);
  return s;
}
function bigNum(pres, num, sub, opts = {}) {
  const s = darkSlide(pres);
  s.addText(num, { x: 0.5, y: 1.0, w: 9, h: 2.5, fontFace: D.h, fontSize: opts.numSize || 120, color: opts.color || D.white, bold: true, align: "center", margin: 0, valign: "bottom" });
  s.addText(sub, { x: 1.5, y: 3.6, w: 7, h: 0.8, fontFace: D.b, fontSize: 28, color: D.muted, align: "center", margin: 0, valign: "top" });
  if (opts.source) { s.addText(opts.source, { x: 0.5, y: 5.0, w: 9, h: 0.4, fontFace: D.b, fontSize: 11, color: D.muted, align: "right", margin: 0, valign: "bottom" }); }
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}
function spectrumSlide(pres, highlightFrom, highlightTo, notes) {
  const s = darkSlide(pres);
  const labels = ["Skeptic", "Explorer", "Whisperer", "Strategist", "Operator", "Orchestrator", "Builder"];
  const boxW = 1.2, boxH = 0.7, gap = 0.1;
  const totalW = labels.length * boxW + (labels.length - 1) * gap;
  const startX = (10 - totalW) / 2;
  labels.forEach((label, i) => {
    const x = startX + i * (boxW + gap);
    const isHighlighted = i === highlightFrom || i === highlightTo;
    const isBuilder = i === 6;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 2.0, w: boxW, h: boxH, rectRadius: 0.08,
      fill: { color: isHighlighted ? D.accent : D.bg, transparency: isHighlighted ? (i === highlightFrom ? 40 : 0) : 50 },
      line: { color: isHighlighted ? D.accent : D.muted, width: isHighlighted ? 2 : 1, dashType: isBuilder ? "dash" : "solid" }
    });
    s.addText(label, { x, y: 2.0, w: boxW, h: boxH, fontFace: D.b, fontSize: 15, color: isHighlighted ? D.white : D.muted, bold: true, align: "center", margin: 0, valign: "middle" });
    if (i < labels.length - 1) { s.addText("\u2192", { x: x + boxW, y: 2.0, w: gap, h: boxH, fontFace: D.b, fontSize: 14, color: D.muted, align: "center", margin: 0, valign: "middle" }); }
  });
  s.addText(labels[highlightFrom] + " \u2192 " + labels[highlightTo], { x: 1.0, y: 3.2, w: 8, h: 0.8, fontFace: D.h, fontSize: 32, color: D.accent, bold: true, align: "center", margin: 0, valign: "top" });
  if (notes) s.addNotes(notes);
  return s;
}

async function main() {
  console.log("Creating presentation...");
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "AI Academy";
  pres.title = "Workshop: Operator \u2192 Orchestrator";

  // ============================================================
  // OPENING
  // ============================================================

  {
    const s = darkSlide(pres);
    s.addText("Operator \u2192 Orchestrator", { x: 1.0, y: 0.8, w: 8, h: 2.5, fontFace: D.h, fontSize: 54, color: D.white, bold: true, align: "center", margin: 0, valign: "middle" });
    s.addText("Coordinate AI teams", { x: 1.5, y: 3.5, w: 7, h: 0.6, fontFace: D.b, fontSize: 22, color: D.muted, italic: true, align: "center", margin: 0 });
    s.addNotes("Welcome to Session 4 \u2014 the final session of the AI Academy. Requires Claude Code.");
  }

  spectrumSlide(pres, 4, 5, "Operator \u2192 Orchestrator. Last time, one agent. Today: a team.");

  hero(pres, "Last time: one agent\ndoing everything.\nToday: a team.", {
    size: 40,
    notes: "Recap of Workshop 3. They can set up and run a single agent. But complex work has multiple steps, and one agent trying to do everything will lose focus."
  });

  // ============================================================
  // THE KITCHEN BRIGADE
  // ============================================================

  hero(pres, "One chef doing a\n10-course dinner alone?", {
    sub: "Burnout. Mistakes. Forgotten appetizer.",
    notes: "The kitchen brigade metaphor. One chef vs. a brigade of specialists."
  });

  hero(pres, "The trick isn\u2019t making\none AI smarter.\nIt\u2019s making many\nwork together.", {
    size: 40,
    notes: "The core principle of orchestration."
  });

  // ============================================================
  // EXERCISE 1: BREAK IT DOWN
  // ============================================================

  exerciseSlide(pres,
    "GROUP EXERCISE:\nBreak a task into phases.",
    "What are the steps? What does each\nstep produce? What does the next\nstep need from the previous one?",
    "Present a complex task (the onboarding proposal or another multi-step scenario). Group discussion: 5-6 minutes. Write phases on a whiteboard or shared doc. Target: 3-4 phases."
  );

  hero(pres, "Each phase becomes one agent.\nEach agent has one job.", {
    size: 36,
    notes: "The link from phases to agents. Each phase = one focused agent in the chain."
  });

  // ============================================================
  // THE CHAIN
  // ============================================================

  {
    const s = darkSlide(pres);
    const phases = [
      { label: "Research", color: D.accent },
      { label: "Draft", color: D.accent },
      { label: "Review", color: D.accent },
      { label: "You", color: D.right },
    ];
    const boxW = 1.8, boxH = 0.9;
    const totalW = phases.length * boxW + (phases.length - 1) * 0.6;
    const startX = (10 - totalW) / 2;
    phases.forEach((p, i) => {
      const x = startX + i * (boxW + 0.6);
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 2.2, w: boxW, h: boxH, rectRadius: 0.1, fill: { color: p.color } });
      s.addText(p.label, { x, y: 2.2, w: boxW, h: boxH, fontFace: D.b, fontSize: 28, color: D.white, bold: true, align: "center", margin: 0, valign: "middle" });
      if (i < phases.length - 1) { s.addText("\u2192", { x: x + boxW, y: 2.2, w: 0.6, h: boxH, fontFace: D.b, fontSize: 28, color: D.accent, bold: true, align: "center", margin: 0, valign: "middle" }); }
    });
    s.addNotes("The chain: Research \u2192 Draft \u2192 Review \u2192 You. Each agent gets one job. Context is filtered between steps.");
  }

  hero(pres, "Each agent does one thing.\nThe chain does everything.", {
    notes: "The distilled principle. Break big tasks into focused steps. Pass results forward."
  });

  // ============================================================
  // DEMO: A FULL CHAIN
  // ============================================================

  hero(pres, "DEMO", {
    size: 72, color: D.accent,
    sub: "Watch a 3-phase chain run live.",
    notes: "Facilitator runs a 3-phase chain in Claude Code:\n\u2022 Agent 1 (Research): reads source materials, produces structured brief\n\u2022 Agent 2 (Draft): uses only the brief to write the proposal\n\u2022 Agent 3 (Review): checks against requirements, flags gaps\nNarrate each step. ~8 minutes."
  });

  // ============================================================
  // EXERCISE 2: BUILD YOUR OWN CHAIN
  // ============================================================

  exerciseSlide(pres,
    "Build a 2-phase chain.",
    "Phase 1: Research / gather / summarize.\nSave the output.\nPhase 2: Feed Phase 1\u2019s output\nto a second agent to draft / create.",
    "Give 10-12 minutes. They choose a task (from previous workshops or prescribed). Run Phase 1, save output, start new context for Phase 2 with the output. Compare to single-agent approach."
  );

  // ============================================================
  // EXERCISE 3: ADD A SKILL
  // ============================================================

  hero(pres, "Skills", {
    size: 72,
    sub: "You already know these.\nNow each agent gets its own.",
    notes: "Bridge from Workshop 2. They set up custom instructions for themselves. Now each agent in the chain gets a focused skill."
  });

  exerciseSlide(pres,
    "Add a skill to one agent\nin your chain.",
    "e.g. \"When researching, structure\noutput as: Key Finding, Source,\nConfidence Level.\"",
    "Give 4-5 minutes. Re-run the chain. See the difference the skill makes at that station."
  );

  hero(pres, "Skills compound.\nThe brigade gets smarter\nevery time.", {
    size: 40,
    notes: "Your feedback from this run becomes a better skill next time. The chain improves with every use."
  });

  // ============================================================
  // THE PAYOFF
  // ============================================================

  bigNum(pres, "1.5 hrs", "of you being the bottleneck", {
    color: D.wrong, source: "Illustrative estimate",
    notes: "The manual workflow \u2014 search, copy-paste, draft, re-prompt, reformat, review, apply. ~1.5 hours of you being the bottleneck."
  });

  bigNum(pres, "15 min", "of judgment \u2014 the part only humans can do", {
    color: D.right,
    notes: "The chained workflow \u2014 agents do 1hr 15min of grunt work. You spend 15 min on judgment."
  });

  hero(pres, "Same proposal.\nThe chain gets smarter\nevery time.", {
    sub: "Your feedback becomes skills.\nShe won\u2019t remember, but the skills will.",
    notes: "The emotional climax. Skills compound. Even though each agent forgets, the skills persist."
  });

  // ============================================================
  // CLOSING: GRADUATION
  // ============================================================

  hero(pres, "You\u2019re now an Orchestrator.", {
    size: 48,
    notes: "The final crossing. They started as Explorers four sessions ago."
  });

  {
    const s = darkSlide(pres);
    const labels = ["Skeptic", "Explorer", "Whisperer", "Strategist", "Operator", "Orchestrator", "Builder"];
    const boxW = 1.2, boxH = 0.7, gap = 0.1;
    const totalW = labels.length * boxW + (labels.length - 1) * gap;
    const startX = (10 - totalW) / 2;
    labels.forEach((label, i) => {
      const x = startX + i * (boxW + gap);
      const isCompleted = i >= 1 && i <= 5;
      const isBuilder = i === 6;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 1.6, w: boxW, h: boxH, rectRadius: 0.08,
        fill: { color: isCompleted ? D.accent : D.bg, transparency: isCompleted ? 20 : 50 },
        line: { color: isCompleted ? D.accent : D.muted, width: isCompleted ? 2 : 1, dashType: isBuilder ? "dash" : "solid" }
      });
      s.addText(label, { x, y: 1.6, w: boxW, h: boxH, fontFace: D.b, fontSize: 15, color: isCompleted ? D.white : D.muted, bold: true, align: "center", margin: 0, valign: "middle" });
      if (i < labels.length - 1) { s.addText("\u2192", { x: x + boxW, y: 1.6, w: gap, h: boxH, fontFace: D.b, fontSize: 14, color: D.muted, align: "center", margin: 0, valign: "middle" }); }
    });
    s.addText("Look how far you\u2019ve come.", { x: 1.0, y: 2.7, w: 8, h: 0.8, fontFace: D.h, fontSize: 32, color: D.accent, bold: true, align: "center", margin: 0, valign: "top" });
    s.addNotes("The full journey. Explorer \u2192 Whisperer \u2192 Strategist \u2192 Operator \u2192 Orchestrator. All highlighted. Builder still dimmed as the horizon.");
  }

  hero(pres, "The secret was never\nin the AI.", {
    sub: "Now go try it \u2014 one task, this week.",
    notes: "Clean exit. The same CTA as the main deck. One task, this week. They\u2019re Orchestrators now."
  });

  console.log("Writing presentation...");
  await pres.writeFile({ fileName: path.join(__dirname, "workshop-orchestrator.pptx") });
  console.log("Done! Created workshop-orchestrator.pptx (24 slides)");
}

main().catch(err => { console.error("Error:", err); process.exit(1); });
