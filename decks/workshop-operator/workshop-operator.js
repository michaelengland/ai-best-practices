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
  pres.title = "Workshop: Strategist \u2192 Operator";

  // ============================================================
  // OPENING
  // ============================================================

  {
    const s = darkSlide(pres);
    s.addText("Strategist \u2192 Operator", { x: 1.0, y: 0.8, w: 8, h: 2.5, fontFace: D.h, fontSize: 54, color: D.white, bold: true, align: "center", margin: 0, valign: "middle" });
    s.addText("Let AI work for you", { x: 1.5, y: 3.5, w: 7, h: 0.6, fontFace: D.b, fontSize: 22, color: D.muted, italic: true, align: "center", margin: 0 });
    s.addNotes("Welcome to Session 3 of the AI Academy. This session requires Claude Code or equivalent agentic tool.");
  }

  spectrumSlide(pres, 3, 4, "Strategist \u2192 Operator. You talk to AI well and you\u2019ve set up its playbook. Today the AI does the work.");

  hero(pres, "You talk to AI like a pro.\nYou\u2019ve set up its playbook.\nBut who\u2019s doing all the work?", {
    size: 36,
    sub: "Still you.",
    notes: "Callback to Workshop 2\u2019s cliffhanger. They\u2019re still the bottleneck \u2014 copy-pasting, searching, assembling. Today that changes."
  });

  // ============================================================
  // THE COPY-PASTE TRAP
  // ============================================================

  {
    const s = darkSlide(pres);
    const steps = ["1. You search", "2. You paste", "3. AI drafts", "4. You apply"];
    steps.forEach((step, i) => {
      s.addText(step, { x: 2.0, y: 1.0 + i * 0.9, w: 6, h: 0.8, fontFace: D.b, fontSize: 28, color: D.text, bold: true, margin: 0, valign: "middle" });
    });
    s.addNotes("The copy-paste cycle. Every step has \u2018you\u2019 in it. You\u2019re the bottleneck at every point.");
  }

  hero(pres, "You\u2019re using a Ferrari\nto carry groceries.", {
    notes: "Let this sting. They recognize themselves."
  });

  // ============================================================
  // THE AGENT WAY
  // ============================================================

  {
    const s = darkSlide(pres);
    const steps = [
      { text: "1. Agent retrieves", color: D.text },
      { text: "2. Agent identifies gaps", color: D.text },
      { text: "3. Agent creates", color: D.text },
      { text: "4. You review", color: D.accent },
    ];
    steps.forEach((step, i) => {
      s.addText(step.text, { x: 2.0, y: 1.0 + i * 0.9, w: 6, h: 0.8, fontFace: D.b, fontSize: 28, color: step.color, bold: true, margin: 0, valign: "middle" });
    });
    s.addNotes("Same four steps. You only appear at step 4. The agent retrieves, identifies gaps, creates. You review.");
  }

  hero(pres, "Same colleague.\nNow she has hands.", {
    sub: "Eyes, a phone, and a to-do list.",
    notes: "The AI colleague metaphor continues. Same memory issues, but now she has tools."
  });

  // ============================================================
  // EXERCISE 1: FIRST AGENT TASK
  // ============================================================

  exerciseSlide(pres,
    "Open Claude Code\n(or your agentic tool).",
    "We\u2019re going to give the agent\na task with a file to read.",
    "Give 1-2 minutes for setup. Have a sample document ready (policy doc, data file, or memo). Attendees can also use their own files."
  );

  exerciseSlide(pres,
    "Give the agent a task:",
    "\"Read [this document] and write\na one-paragraph summary\nfor a non-technical audience.\"",
    "Give 3-4 minutes. The agent reads the file, processes it, produces output. No copy-paste. Ask: \u2018How long would that have taken you manually?\u2019"
  );

  // ============================================================
  // EXERCISE 2: CONNECTIONS
  // ============================================================

  hero(pres, "An agent is only as useful\nas what it can reach.", {
    notes: "Set up the connections concept. Each connection = new capability."
  });

  exerciseSlide(pres,
    "Give the agent a research task:",
    "\"Research [topic] and summarize\nthe top 3 findings with sources.\"",
    "Give 4-5 minutes. The agent searches the web, reads results, synthesizes. Watch for: did it find something you didn\u2019t think to look for?"
  );

  hero(pres, "It found something\nyou wouldn\u2019t have\nthought to provide.", {
    size: 40,
    notes: "The reveal. The agent didn\u2019t just do what you asked \u2014 it found context you wouldn\u2019t have thought to include."
  });

  // ============================================================
  // TRUST
  // ============================================================

  hero(pres, "Trust, but verify.", {
    size: 60,
    notes: "You just handed AI the keys. How do you know it\u2019s right?"
  });

  exerciseSlide(pres,
    "Pick one claim from\nthe agent\u2019s output.\nVerify it manually.",
    "Is it accurate? Did anything\n\u2018feel right\u2019 but turn out wrong?",
    "Give 3-4 minutes. Group discussion: \u2018Was it accurate? When do you trust, when do you verify?\u2019 The \u2018feels right\u2019 moment is the most dangerous."
  );

  hero(pres, "AI is a power tool,\nnot autopilot.", {
    notes: "The mindset. You review. You judge. You approve. The agent does the grunt work."
  });

  // ============================================================
  // CLOSING
  // ============================================================

  hero(pres, "You\u2019re now an Operator.", {
    sub: "You set up agents, connected them\nto your world, and let them work.",
    notes: "Celebrate the crossing."
  });

  hero(pres, "One agent doing one task\nis powerful.\nWhat if you had a whole team?", {
    size: 36, color: D.accent,
    notes: "The cliffhanger for Workshop 4."
  });

  breatherSlide(pres,
    "Next time: Operator \u2192 Orchestrator.\nWe chain agents together.\nEach one focused. The team does everything.",
    "Preview of the final workshop."
  );

  console.log("Writing presentation...");
  await pres.writeFile({ fileName: path.join(__dirname, "workshop-operator.pptx") });
  console.log("Done! Created workshop-operator.pptx (20 slides)");
}

main().catch(err => { console.error("Error:", err); process.exit(1); });
