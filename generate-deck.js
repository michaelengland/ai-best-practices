const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const {
  FaBan, FaSearch, FaMagic, FaRocket, FaBrain, FaPlug, FaRobot, FaDesktop,
  FaGlobe, FaEnvelope, FaFileAlt, FaDatabase, FaCalendarAlt, FaPuzzlePiece,
  FaFish, FaArrowRight, FaUser, FaLightbulb
} = require("react-icons/fa");

// ============================================================
// DESIGN SYSTEM
// ============================================================
const D = {
  bg: "0F0F1A", lightBg: "F8F9FA", glow: "00B4D8",
  white: "FFFFFF", text: "E0E4E8", muted: "94A3B8", darkText: "1E293B",
  accent: "00B4D8", wrong: "E63946", wrongBg: "FEE2E2", right: "2D936C", rightBg: "DCFCE7",
  h: "Georgia", b: "Calibri",
};

// ============================================================
// UTILITIES
// ============================================================
function svgMarkup(Icon, color, size = 256) {
  return ReactDOMServer.renderToStaticMarkup(React.createElement(Icon, { color, size: String(size) }));
}
async function icon64(Icon, color, size = 256) {
  const png = await sharp(Buffer.from(svgMarkup(Icon, color, size))).png().toBuffer();
  return "image/png;base64," + png.toString("base64");
}

function darkSlide(pres) {
  const s = pres.addSlide();
  s.background = { color: D.bg };
  s.addShape(pres.shapes.OVAL, {
    x: 5, y: 2.5, w: 8, h: 6,
    fill: { color: D.accent, transparency: 96 }
  });
  return s;
}

// Breather slide helper
function breatherSlide(pres, text, notes) {
  const s = darkSlide(pres);
  s.addText(text, {
    x: 1.5, y: 2.0, w: 7, h: 1.6,
    fontFace: D.h, fontSize: 28, color: D.accent, italic: true,
    align: "center", margin: 0, valign: "middle"
  });
  if (notes) s.addNotes(notes);
  return s;
}

// Section divider — title + subtitle only
function sectionDivider(pres, d) {
  const s = darkSlide(pres);
  s.addText(d.title, {
    x: 0.5, y: 1.6, w: 9, h: 1.2,
    fontFace: D.h, fontSize: 54, color: D.white, bold: true, align: "center", margin: 0
  });
  if (d.subtitle) {
    s.addText(d.subtitle, {
      x: 1.0, y: 2.9, w: 8, h: 0.6,
      fontFace: D.b, fontSize: 28, color: D.accent, italic: true, align: "center", margin: 0
    });
  }
  s.addNotes(d.notes || "");
  return s;
}

// Giant number + support line
function bigNum(pres, num, sub, opts = {}) {
  const s = darkSlide(pres);
  const numColor = opts.color || D.white;
  s.addText(num, {
    x: 0.5, y: 1.0, w: 9, h: 2.5,
    fontFace: D.h, fontSize: opts.numSize || 120,
    color: numColor, bold: true, align: "center", margin: 0, valign: "bottom"
  });
  s.addText(sub, {
    x: 1.5, y: 3.6, w: 7, h: 0.8,
    fontFace: D.b, fontSize: 28,
    color: D.muted, align: "center", margin: 0, valign: "top"
  });
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}

// Centered hero text + optional support line
function hero(pres, main, opts = {}) {
  const s = darkSlide(pres);
  s.addText(main, {
    x: 1.0, y: 1.2, w: 8, h: 2.8,
    fontFace: opts.font || D.h, fontSize: opts.size || 44,
    color: opts.color || D.white, bold: true,
    align: "center", margin: 0, valign: "middle"
  });
  if (opts.sub) {
    s.addText(opts.sub, {
      x: 1.5, y: 4.0, w: 7, h: 0.8,
      fontFace: D.b, fontSize: 28,
      color: opts.subColor || D.muted, align: "center", margin: 0, valign: "top"
    });
  }
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}

// Simplified wrong/right comparison on light bg
function wrongRight(pres, opts) {
  const s = pres.addSlide();
  s.background = { color: D.lightBg };
  // Headline
  s.addText(opts.headline, {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontFace: D.h, fontSize: 44, color: D.darkText, bold: true, margin: 0
  });
  if (opts.subtitle) {
    s.addText(opts.subtitle, {
      x: 0.5, y: 1.05, w: 9, h: 0.5,
      fontFace: D.b, fontSize: 20, color: D.accent, italic: true, margin: 0
    });
  }
  // Wrong card
  const cardY = 1.7, cardH = 3.2;
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: cardY, w: 4.2, h: cardH, fill: { color: D.wrongBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: cardY, w: 0.06, h: cardH, fill: { color: D.wrong } });
  s.addText(opts.wrongText, {
    x: 0.8, y: cardY + 0.2, w: 3.6, h: cardH - 0.4,
    fontFace: D.b, fontSize: 22, color: D.darkText, margin: 0, valign: "top"
  });
  // Right card
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: cardY, w: 4.2, h: cardH, fill: { color: D.rightBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: cardY, w: 0.06, h: cardH, fill: { color: D.right } });
  s.addText(opts.rightText, {
    x: 5.6, y: cardY + 0.2, w: 3.6, h: cardH - 0.4,
    fontFace: D.b, fontSize: 22, color: D.darkText, margin: 0, valign: "top"
  });
  if (opts.notes) s.addNotes(opts.notes);
  return s;
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log("Pre-rendering icons...");
  const icons = {};
  const iconDefs = [
    ["ban", FaBan, "#FFFFFF"], ["search", FaSearch, "#FFFFFF"], ["magic", FaMagic, "#FFFFFF"], ["rocket", FaRocket, "#FFFFFF"],
    ["brain", FaBrain, "#00B4D8"], ["plug", FaPlug, "#00B4D8"], ["robot", FaRobot, "#00B4D8"], ["desktop", FaDesktop, "#00B4D8"],
    ["globe", FaGlobe, "#00B4D8"], ["envelope", FaEnvelope, "#00B4D8"], ["file", FaFileAlt, "#00B4D8"],
    ["database", FaDatabase, "#00B4D8"], ["calendar", FaCalendarAlt, "#00B4D8"], ["puzzle", FaPuzzlePiece, "#00B4D8"],
    ["fish", FaFish, "#00B4D8"], ["arrow", FaArrowRight, "#00B4D8"], ["user", FaUser, "#FFFFFF"], ["bulb", FaLightbulb, "#00B4D8"],
    ["banG", FaBan, "#6B7280"], ["searchG", FaSearch, "#6B7280"], ["magicG", FaMagic, "#0891B2"], ["rocketG", FaRocket, "#1E1E1E"],
    ["fishW", FaFish, "#FFFFFF"], ["arrowW", FaArrowRight, "#FFFFFF"],
    ["globeW", FaGlobe, "#FFFFFF"], ["envelopeW", FaEnvelope, "#FFFFFF"], ["fileW", FaFileAlt, "#FFFFFF"],
    ["databaseW", FaDatabase, "#FFFFFF"], ["calendarW", FaCalendarAlt, "#FFFFFF"], ["puzzleW", FaPuzzlePiece, "#FFFFFF"],
  ];
  for (const [name, Icon, color] of iconDefs) {
    icons[name] = await icon64(Icon, color);
  }

  console.log("Creating presentation...");
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "AI Best Practices";
  pres.title = "Getting Agents to Give Up Their Secrets";

  // ============================================================
  // LEVEL 0: "WHERE ARE YOU?" (Slides 1-11)
  // ============================================================

  // --- Slide 1: Title ---
  {
    const s = darkSlide(pres);
    s.addText("Getting Agents to\nGive Up Their Secrets", {
      x: 1.0, y: 0.8, w: 8, h: 2.5,
      fontFace: D.h, fontSize: 54, color: D.white, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addText("A guide to AI that actually works", {
      x: 1.5, y: 3.5, w: 7, h: 0.6,
      fontFace: D.b, fontSize: 22, color: D.muted, italic: true, align: "center", margin: 0
    });
    s.addNotes("Let the title sit. Don't rush into the hook \u2014 give people a moment to read. This is 'Getting Agents to Give Up Their Secrets,' a practical guide to AI that actually works.");
  }

  // --- Slide 2: Hook story ---
  hero(pres, "Last month, someone spent 45 minutes\narguing with ChatGPT.\nThe same task took 2 minutes.", {
    font: D.b, size: 28, color: D.text,
    notes: "Tell the full story: 'I watched someone go back and forth \u2014 copy, paste, no that\u2019s not right, copy, paste, closer but... The same task took 2 minutes once they knew the trick.' Let it land \u2014 this is the emotional anchor. The entire closing calls back to this person."
  });

  // --- Slide 3: "This deck is about the trick." ---
  hero(pres, "This deck is about\nthe trick.", {
    size: 72,
    notes: "Pause after this. Let it land. The entire closing (slide ~70) calls back to this moment. This is the thesis statement of the whole presentation."
  });

  // --- Slide 4: Spectrum (4 personas, no descriptions) ---
  {
    const s = darkSlide(pres);
    const labels = ["AI Skeptic", "AI Questioner", "AI Viber", "AI-First"];
    const boxW = 1.9, boxH = 0.8, gap = 0.3;
    const totalW = labels.length * boxW + (labels.length - 1) * gap;
    const startX = (10 - totalW) / 2;
    labels.forEach((label, i) => {
      const x = startX + i * (boxW + gap);
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 2.2, w: boxW, h: boxH,
        rectRadius: 0.1,
        fill: { color: D.accent, transparency: 85 },
        line: { color: D.accent, width: 1.5 }
      });
      s.addText(label, {
        x, y: 2.2, w: boxW, h: boxH,
        fontFace: D.h, fontSize: 28, color: D.white, bold: true, align: "center", margin: 0, valign: "middle"
      });
      if (i < labels.length - 1) {
        s.addText("\u2192", {
          x: x + boxW, y: 2.2, w: gap, h: boxH,
          fontFace: D.b, fontSize: 28, color: D.accent, align: "center", margin: 0, valign: "middle"
        });
      }
    });
    s.addNotes("The four personas:\n\u2022 AI Skeptic \u2014 Avoids AI or refuses to engage\n\u2022 AI Questioner \u2014 Has ChatGPT, uses it like a search engine\n\u2022 AI Viber \u2014 Uses AI tools, then fixes output by hand\n\u2022 AI-First \u2014 Everything through AI; context, agents, workflows\n\nThese are identity milestones. The deck\u2019s levels are the steps that move you to the right. By the end, we\u2019ll have moved you.");
  }

  // --- Slide 5: "Most people are here." (Questioner highlighted) ---
  {
    const s = darkSlide(pres);
    const labels = ["AI Skeptic", "AI Questioner", "AI Viber", "AI-First"];
    const boxW = 1.9, boxH = 0.8, gap = 0.3;
    const totalW = labels.length * boxW + (labels.length - 1) * gap;
    const startX = (10 - totalW) / 2;
    labels.forEach((label, i) => {
      const x = startX + i * (boxW + gap);
      const isHighlighted = i === 1;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 1.8, w: boxW, h: boxH,
        rectRadius: 0.1,
        fill: { color: isHighlighted ? D.accent : D.bg, transparency: isHighlighted ? 0 : 50 },
        line: { color: isHighlighted ? D.accent : D.muted, width: isHighlighted ? 2 : 1 }
      });
      s.addText(label, {
        x, y: 1.8, w: boxW, h: boxH,
        fontFace: D.h, fontSize: 28, color: isHighlighted ? D.white : D.muted, bold: true, align: "center", margin: 0, valign: "middle"
      });
      if (i < labels.length - 1) {
        s.addText("\u2192", {
          x: x + boxW, y: 1.8, w: gap, h: boxH,
          fontFace: D.b, fontSize: 28, color: D.muted, align: "center", margin: 0, valign: "middle"
        });
      }
    });
    s.addText("Most people are here.", {
      x: 1.0, y: 3.2, w: 8, h: 1.0,
      fontFace: D.h, fontSize: 36, color: D.accent, bold: true, align: "center", margin: 0, valign: "top"
    });
    s.addNotes("Most readers will self-identify at Questioner. They have ChatGPT, they\u2019ve tried it, but they\u2019re using it like a search engine. This framing pays off at the closing when we come full circle. Transition: Let\u2019s look at the numbers.");
  }

  // --- Slide 6: "1 billion+" ---
  bigNum(pres, "1 billion+", "use AI tools monthly", {
    notes: "Source: DataReportal 2026. AI has mass reach \u2014 over a billion people are using AI tools every month. But almost nobody is going deep. That\u2019s the opportunity. Transition: How few are going deep?"
  });

  // --- Slide 7: "< 2%" ---
  bigNum(pres, "< 2%", "pay for premium", {
    notes: "Source: Reuters. Fewer than 2% of AI users pay for premium tiers. The opportunity gap is enormous \u2014 almost nobody is using AI seriously. If you learn to use it well, you\u2019re already in the top percentile. Transition: We\u2019ve seen this pattern before."
  });

  // --- Slide 8: Timeline (4 eras, labels only) ---
  {
    const s = darkSlide(pres);
    const eras = [
      { label: "PCs", decade: "1980s" },
      { label: "Internet", decade: "1990s" },
      { label: "Smartphones", decade: "2010s" },
      { label: "AI", decade: "Now" }
    ];
    const lineY = 2.6;
    s.addShape(pres.shapes.LINE, { x: 1.0, y: lineY, w: 8, h: 0, line: { color: D.accent, width: 3 } });
    eras.forEach((e, i) => {
      const x = 1.5 + i * 2.35;
      const isLast = i === eras.length - 1;
      s.addShape(pres.shapes.OVAL, {
        x: x - 0.25, y: lineY - 0.25, w: 0.5, h: 0.5,
        fill: { color: isLast ? D.accent : D.muted }
      });
      s.addText(e.label, {
        x: x - 1.0, y: lineY - 1.4, w: 2.0, h: 0.6,
        fontFace: D.h, fontSize: 28, color: D.white, bold: true, align: "center", margin: 0, valign: "bottom"
      });
      s.addText(e.decade, {
        x: x - 1.0, y: lineY - 0.8, w: 2.0, h: 0.5,
        fontFace: D.b, fontSize: 28, color: D.muted, align: "center", margin: 0, valign: "top"
      });
    });
    s.addNotes("Every major technology era followed the same pattern:\n\u2022 PCs (1980s): US productivity growth doubled (0.6% \u2192 1.0%/yr) \u2014 Fed Reserve\n\u2022 Internet (1990s): Global business online 7% \u2192 30% \u2014 Visual Capitalist\n\u2022 Smartphones (2010s): The pattern speaks for itself\n\u2022 AI (Now): $7T projected GDP impact over 10 years \u2014 Goldman Sachs\n\nEvery era had skeptics. Every era punished those who waited. The only question is how fast you adapt. Transition: Let\u2019s look at where AI is right now.");
  }

  // --- Slide 9: "$4.4T" ---
  bigNum(pres, "$4.4T", "in annual value. Only 31% in full production.", {
    notes: "Sources: McKinsey Global Institute ($2.6\u20134.4T annually in added value); ServiceNow (only 31% of prioritized AI use cases in full production); Microsoft Security Blog (80% of Fortune 500 have active AI agents, Feb 2026). The third stat is the killer \u2014 the gap between having AI and using it well is enormous. Transition: So what\u2019s the core skill?"
  });

  // --- Slide 10: "The core skill for AI is talking." ---
  hero(pres, "The core skill for AI\nis talking.", {
    sub: "You already have it.",
    notes: "Permission-granting moment. AI\u2019s interface is natural language. The audience already has the prerequisite. 'You\u2019re not missing the skill. You\u2019re just using it wrong.' This deck is the walkthrough \u2014 each section levels you up. Transition: Let\u2019s see what most people get wrong."
  });

  // --- Slide 11: Breather ---
  breatherSlide(pres,
    "Let's see what most people get wrong.",
    "Transition into Level 1. Pause. Let the pacing shift. We\u2019re moving from 'why AI matters' to 'what AI actually is.'"
  );

  // ============================================================
  // LEVEL 1: "KNOW YOUR TOOLS" (Slides 12-22)
  // ============================================================

  // --- Slide 12: Word Cloud ---
  {
    const s = darkSlide(pres);
    const words = [
      ["ChatGPT", 0.3, 0.2, 32, true], ["LLM", 5.5, 0.3, 36, true], ["GPT", 3.0, 0.9, 28, true],
      ["Claude", 7.5, 0.6, 28, true], ["Gemini", 0.5, 1.8, 28, true], ["MCP", 8.0, 1.8, 28, true],
      ["tokens", 2.5, 2.2, 28, false], ["agents", 4.5, 1.6, 28, true], ["RAG", 6.5, 2.5, 28, true],
      ["fine-tuning", 1.5, 3.0, 28, false], ["embeddings", 3.8, 3.2, 28, false], ["prompts", 7.0, 3.0, 28, true],
      ["copilot", 0.5, 3.8, 28, true], ["AGI", 5.0, 3.5, 28, true], ["transformer", 2.8, 1.5, 28, false],
      ["neural net", 5.8, 1.2, 28, false], ["deep learning", 0.3, 0.7, 28, false], ["Anthropic", 7.8, 3.5, 28, false],
      ["OpenAI", 0.5, 1.1, 28, true], ["inference", 3.5, 2.8, 28, false], ["training", 8.0, 0.3, 28, false],
      ["parameters", 0.5, 4.2, 28, false], ["context window", 4.5, 4.0, 28, false], ["hallucination", 2.0, 4.0, 28, true],
      ["grounding", 7.0, 4.0, 28, false], ["retrieval", 5.5, 2.8, 28, false], ["vector DB", 7.8, 2.8, 28, false],
      ["Llama", 3.0, 3.8, 28, false], ["open-source", 6.0, 3.8, 28, false], ["API", 3.8, 0.2, 28, true],
    ];
    words.forEach(([word, x, y, size, bold]) => {
      const color = bold ? D.white : D.muted;
      s.addText(word, { x, y, w: 2.0, h: 0.5, fontFace: D.b, fontSize: size, color, bold, margin: 0 });
    });
    s.addNotes("Yeah. Exactly. Makes the reader feel validated. The overwhelm is real. Don\u2019t explain anything yet \u2014 just let the wall of jargon hit them. Every one of these terms is real, and most people feel like they should know them all. They don\u2019t need to. Transition: But there are some questions worth answering.");
  }

  // --- Slide 13: Word Cloud + Questions ---
  {
    const s = darkSlide(pres);
    // Dimmed word cloud background
    const bgWords = [
      ["LLM", 4.0, 0.2, 28, true], ["GPT", 0.3, 0.2, 28, true],
      ["Claude", 8.0, 0.3, 28, true], ["Gemini", 0.5, 2.2, 28, false],
      ["tokens", 4.2, 2.2, 28, false], ["copilot", 0.5, 4.2, 28, false],
      ["AGI", 4.5, 4.2, 28, true], ["training", 8.0, 2.2, 28, false],
    ];
    bgWords.forEach(([word, x, y, size, bold]) => {
      s.addText(word, { x, y, w: 2.0, h: 0.4, fontFace: D.b, fontSize: size, color: "2A2A4E", bold, margin: 0 });
    });
    // Question callout boxes
    const questions = [
      ["What's the difference\nbetween ChatGPT and GPT?", 0.5, 0.8],
      ["Is Claude the same\nas ChatGPT?", 5.5, 1.2],
      ["What even is\nan agent?", 1.5, 3.0],
      ["Do I need to know\nwhat a token is?", 6.0, 3.2],
    ];
    questions.forEach(([q, x, y]) => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y, w: 3.2, h: 0.9,
        rectRadius: 0.1,
        fill: { color: D.accent }
      });
      s.addText(q, {
        x: x + 0.15, y, w: 2.9, h: 0.9,
        fontFace: D.b, fontSize: 28, color: D.white, bold: true, margin: 0, valign: "middle"
      });
    });
    s.addNotes("We\u2019re going to make this simple. The questions represent common confusions. The audience should feel like someone is finally asking their questions. We\u2019ll answer all of these in the next few slides. Transition: Let\u2019s start with the basics \u2014 how is AI actually structured?");
  }

  // --- Slide 14: AI Stack (4 stacked rectangles) ---
  {
    const s = darkSlide(pres);
    const layers = ["App", "Agent", "API", "LLM"];
    const rectW = 2.5, rectH = 0.8, gap = 0.15;
    const startX = (10 - rectW) / 2;
    const totalH = layers.length * rectH + (layers.length - 1) * gap;
    const startY = (5.625 - totalH) / 2;
    layers.forEach((label, i) => {
      const y = startY + i * (rectH + gap);
      const shade = i === 0 ? D.accent : (i === 1 ? "0099B8" : (i === 2 ? "007A93" : "005C6E"));
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: startX, y, w: rectW, h: rectH,
        rectRadius: 0.08,
        fill: { color: shade }
      });
      s.addText(label, {
        x: startX, y, w: rectW, h: rectH,
        fontFace: D.b, fontSize: 28, color: D.white, bold: true, align: "center", margin: 0, valign: "middle"
      });
    });
    s.addNotes("The AI stack, from top to bottom:\n\u2022 App \u2014 ChatGPT, Claude, Copilot. This is what you interact with.\n\u2022 Agent \u2014 The brain + tools. The brain has ideas; the agent has hands.\n\u2022 API \u2014 How software talks to the brain. You don\u2019t need to know this exists.\n\u2022 LLM \u2014 A massive AI model trained on text. You never touch this directly.\n\nMost people only need the top two layers. Transition: Here\u2019s the simple version.");
  }

  // --- Slide 15: Stack summary ---
  hero(pres, "You use apps.\nApps use agents.\nAgents call APIs.\nAPIs talk to LLMs.", {
    font: D.b, size: 28,
    notes: "This is the entire AI stack in four sentences. Most people only need the top two layers (app and agent). The bottom two are for developers. If you remember nothing else from this section, remember this chain. Transition: So who makes what?"
  });

  // --- Slide 16: Who Makes What (simplified table) ---
  {
    const s = darkSlide(pres);
    s.addText("Who Makes What", {
      x: 0.5, y: 0.5, w: 9, h: 0.8,
      fontFace: D.h, fontSize: 44, color: D.white, bold: true, align: "center", margin: 0
    });
    const headerRow = [
      { text: "Company", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 20 } },
      { text: "LLM", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 20 } },
      { text: "App", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 20 } },
    ];
    const rows = [
      ["OpenAI", "GPT", "ChatGPT"],
      ["Anthropic", "Claude", "Claude.ai"],
      ["Google", "Gemini", "Gemini"],
      ["Microsoft", "(OpenAI's)", "Copilot"],
    ];
    const tableRows = [headerRow, ...rows.map(r => r.map(c => ({ text: c, options: { fontFace: D.b, fontSize: 20, color: D.text } })))];
    s.addTable(tableRows, {
      x: 1.0, y: 1.5, w: 8, colW: [2.6, 2.6, 2.8],
      border: { pt: 1, color: D.muted },
      rowH: [0.6, 0.65, 0.65, 0.65, 0.65],
      autoPage: false
    });
    s.addNotes("The key insight: Microsoft doesn\u2019t make the brain \u2014 they build tools around someone else\u2019s LLM.\n\nTaglines you might know them as:\n\u2022 OpenAI/ChatGPT \u2014 The one everyone uses\n\u2022 Anthropic/Claude \u2014 The 'thinking' one\n\u2022 Google/Gemini \u2014 The one in your Google apps\n\u2022 Microsoft/Copilot \u2014 The one in your work tools\n\nThis is why the agent/app layer matters more for most people. Transition: Where\u2019s the real action?");
  }

  // --- Slide 17: "The real action is in agents and apps." ---
  hero(pres, "The real action is in\nagents and apps.", {
    notes: "The LLM side costs billions to train, takes months per model, and only ~5 companies can do it. The agent/app side is just software \u2014 innovation has exploded, anyone can build agents and apps, new tools appear weekly. The biggest user-facing improvements come from better agents, apps, and workflows \u2014 and that\u2019s where you come in. Transition: Software engineers figured this out first."
  });

  // --- Slide 18: "41%" ---
  bigNum(pres, "41%", "of GitHub code is now AI-generated", {
    notes: "Source: Second Talent. 'Vibe coding' went from joke to industry practice in under a year (Karpathy coined the term Feb 2025). Software engineering was the canary in the coal mine \u2014 AI transformed coding faster than anyone expected. Transition: But there\u2019s a twist."
  });

  // --- Slide 19: "19% longer" ---
  bigNum(pres, "19%\nlonger", "when developers rely on AI\nwithout understanding it", {
    color: D.wrong, numSize: 80,
    notes: "Source: Addy Osmani. Developers who felt 20% faster actually took 19% longer once debugging and cleanup were included. The gap between 'uses AI tools' and 'uses AI tools well' is massive. Engineers went first, made all the mistakes, and learned what works. This deck teaches you those lessons. Transition: Let that sink in."
  });

  // --- Slide 20: "The gap is massive." ---
  hero(pres, "The gap between using AI\nand using AI well\nis massive.", {
    notes: "This is the thesis of Level 1. The tools are everywhere, adoption is exploding, but most people are using AI poorly. The gap is your opportunity. Transition: And adoption is accelerating."
  });

  // --- Slide 21: "10x" ---
  bigNum(pres, "10\u00D7", "Microsoft 365 Copilot daily users,\nyear over year", {
    notes: "Source: Microsoft Q2 2026 earnings. Microsoft 365 Copilot daily active users increased 10x year-over-year. Tools like Copilot in Excel, Copilot in Word, Gemini in Docs, Claude in Workflows \u2014 AI is entering every workplace tool. If you were a Skeptic, you\u2019re now a Questioner \u2014 you know what AI is. Transition: You\u2019ve got the basics."
  });

  // --- Slide 22: Breather ---
  breatherSlide(pres,
    "You've got the basics.\nNow let's give you the skills.",
    "Transition from Level 1 to Level 2. Persona milestone: Skeptic \u2192 Questioner. The audience now knows what AI is. Next: how to actually talk to it."
  );

  // ============================================================
  // LEVEL 2: "TALK TO AI PROPERLY" (Slides 23-33)
  // ============================================================

  // --- Slide 23: Section Divider ---
  sectionDivider(pres, {
    title: "Prompt Engineering",
    sub: "How to Stop Getting Useless Answers",
    notes: "Mental-model shift. The audience likely thinks output quality is about the AI. This section proves it\u2019s about the input. Most people type something vague, get something generic, and blame the AI. Let\u2019s fix that."
  });

  // --- Slide 24: "The Task" (chat bubble with vague prompt) ---
  {
    const s = darkSlide(pres);
    // Chat bubble shape
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.5, y: 1.0, w: 7, h: 1.8,
      rectRadius: 0.15,
      fill: { color: D.accent, transparency: 85 },
      line: { color: D.accent, width: 1.5 }
    });
    s.addText("Write me a proposal for improving\nour onboarding process.", {
      x: 1.8, y: 1.1, w: 6.4, h: 1.6,
      fontFace: D.b, fontSize: 28, color: D.white, margin: 0, valign: "middle", align: "center"
    });
    s.addText("\u2192 Generic, surface-level output", {
      x: 1.5, y: 3.2, w: 7, h: 0.8,
      fontFace: D.b, fontSize: 28, color: D.muted, margin: 0, align: "center", valign: "top"
    });
    s.addNotes("This is the baseline prompt that everyone starts with. The output is recognizably mediocre \u2014 generic proposal with bland headers, placeholder content, no specifics, no awareness of your company. Sound familiar? Over the next five slides, we\u2019ll transform this same task by changing only the words. Transition: The first fix is the easiest.");
  }

  // --- Slide 25: Wrong/Right — Assign a Role ---
  wrongRight(pres, {
    headline: "Assign a Role",
    subtitle: "vs. talking to a stranger",
    wrongText: "Write me a proposal for\nimproving our onboarding process.",
    rightText: "You are a senior HR operations\nconsultant. Write me a proposal for\nimproving our onboarding process.",
    notes: "The same vague request produces noticeably different output. The role sets the AI\u2019s default tone, depth, and perspective. A role frames everything that follows. Always start here. More relevant frameworks, industry terminology, realistic timelines \u2014 just from telling the AI who it is. Transition: Now let\u2019s get specific."
  });

  // --- Slide 26: Wrong/Right — Be Specific ---
  wrongRight(pres, {
    headline: "Be Specific",
    subtitle: "vs. the vague ask",
    wrongText: "Write me a proposal for\nimproving our onboarding process.",
    rightText: "Write a proposal for reducing\nonboarding from 4 to 2 weeks,\nfor the VP of People, under 2 pages.",
    notes: "Specificity in the request = specificity in the output. We didn\u2019t give new information \u2014 we described what we actually wanted. No audience, no constraints, no direction = the AI guesses everything. Treat it like briefing a colleague, not searching Google. Transition: Next \u2014 don\u2019t overload it."
  });

  // --- Slide 27: Wrong/Right — One Task at a Time ---
  wrongRight(pres, {
    headline: "One Task at a Time",
    subtitle: "vs. the kitchen sink",
    wrongText: "Write the proposal, draft an email,\ncreate a budget spreadsheet,\nand summarize risks.",
    rightText: "Structure the proposal with:\n1. Problem statement\n2. Proposed solution\n3. Expected outcomes\n4. Timeline",
    notes: "The kitchen-sink prompt is one of the most common mistakes. Five requests tangled together \u2014 tries everything, nails nothing. If you have 5 tasks, send 5 prompts. One task, clear structure \u2014 the AI mirrors your organization. Source: CodeSignal. Transition: Now let\u2019s add power keywords."
  });

  // --- Slide 28: Wrong/Right — Power Keywords ---
  wrongRight(pres, {
    headline: "Power Keywords",
    subtitle: "vs. leading the witness",
    wrongText: "Don't you think reducing\nonboarding to 2 weeks\nwould be great?",
    rightText: "Be radically honest about challenges.\nThink step by step.\nChallenge my assumptions.",
    notes: "'Radically honest,' 'think step by step,' 'challenge my assumptions,' and 'flag uncertainty' are four of the highest-leverage keyword modifiers. A leading question produces sycophantic agreement \u2014 an echo chamber. Permit uncertainty \u2014 an AI that says 'I\u2019m not sure' is more useful than one that confidently makes things up. Sources: OpenAI, DigitalOcean. Transition: One more \u2014 define what you want back."
  });

  // --- Slide 29: Wrong/Right — Define the Output ---
  wrongRight(pres, {
    headline: "Define the Output",
    subtitle: "vs. hoping for the best",
    wrongText: "(No format guidance)\n\u2192 Random format, 5-page essay\nwhen you needed bullets.",
    rightText: "One-page executive brief with\nbullet points. Data-driven language.\nReader has 2 minutes.",
    notes: "You wouldn\u2019t ask a designer for 'something nice.' Defining format, tone, length, and audience assumptions produces immediately usable output. For extra precision, include a short example of what good output looks like \u2014 a quick example beats a long description. Every iteration changed wording. We never changed what the AI knew. That\u2019s the setup for Level 3. Transition: Let\u2019s see the transformation."
  });

  // --- Slide 30: Before/After ---
  {
    const s = darkSlide(pres);
    // Left: original prompt (muted, small)
    s.addText("Before", {
      x: 0.5, y: 0.8, w: 4.2, h: 0.6,
      fontFace: D.h, fontSize: 28, color: D.muted, bold: true, margin: 0, align: "center"
    });
    s.addText("\"Write me a proposal for\nimproving our onboarding\nprocess.\"", {
      x: 0.5, y: 1.6, w: 4.2, h: 2.5,
      fontFace: D.b, fontSize: 28, color: D.muted, italic: true, margin: 0, align: "center", valign: "top"
    });
    // Divider
    s.addShape(pres.shapes.LINE, { x: 5.0, y: 0.8, w: 0, h: 4.0, line: { color: D.accent, width: 2 } });
    // Right: key phrases from final prompt (accent, highlighted)
    s.addText("After", {
      x: 5.3, y: 0.8, w: 4.2, h: 0.6,
      fontFace: D.h, fontSize: 28, color: D.accent, bold: true, margin: 0, align: "center"
    });
    s.addText("Senior HR consultant\n4 to 2 weeks, VP of People\nStep by step, challenge me\nOne-page brief, bullets", {
      x: 5.3, y: 1.6, w: 4.2, h: 2.5,
      fontFace: D.b, fontSize: 28, color: D.accent, margin: 0, align: "center", valign: "top"
    });
    s.addNotes("Full final prompt: 'You are a senior HR operations consultant. Write a proposal for reducing onboarding from 4 to 2 weeks. Aimed at VP of People, leadership review format, under 2 pages. Structure: problem, solution, outcomes, resources, timeline. Be radically honest, challenge assumptions, flag uncertainty. One-page exec brief with bullets, data-driven language.'\n\nRole + Specificity + Structure + Keywords + Output Definition. Same task, same background info, dramatically different result \u2014 purely from how the request was phrased. This is the hinge of the deck. Transition: Celebrate the progress, then plant the seed.");
  }

  // --- Slide 31: "Same task. Same information. Just better words." ---
  hero(pres, "Same task. Same information.\nJust better words.", {
    notes: "Let this land. The audience should feel the progress \u2014 five simple techniques transformed a mediocre prompt into a professional one. But there\u2019s a bigger lever coming. Transition: The cliffhanger."
  });

  // --- Slide 32: "But we never changed what the AI knew." ---
  hero(pres, "But we never changed\nwhat the AI knew.", {
    color: D.accent,
    notes: "This is the cliffhanger. Every iteration in Level 2 changed the wording, but the AI still had zero context about your company, your team, your situation. It was working blind. Level 3 introduces context engineering \u2014 giving the AI the information it needs. Transition: Let\u2019s change the information."
  });

  // --- Slide 33: Breather ---
  breatherSlide(pres,
    "You've changed the words.\nNow let's change the information.",
    "Transition from Level 2 (prompt engineering) to Level 3 (context engineering). The audience should feel like they\u2019ve mastered the words, but there\u2019s a whole other dimension."
  );

  // ============================================================
  // LEVEL 3: "FEED AI SMARTER" (Slides 34-41)
  // ============================================================

  // --- Slide 34: "Same prompt. Different information." ---
  hero(pres, "Same prompt.\nDifferent information.", {
    sub: "Dramatically different result.",
    notes: "The clearest Level 2/3 boundary demonstration. The prompt didn't change. The context did. This is the 'aha' \u2014 it's not about the words, it's about what the AI knows. Source: Elastic, KDnuggets. Transition: Let's see the difference."
  });

  // --- Slide 35: Before/After context (light bg, two columns) ---
  {
    const s = pres.addSlide();
    s.background = { color: D.lightBg };
    // Left column
    s.addText("Plausible but generic", {
      x: 0.5, y: 1.8, w: 4.2, h: 1.0,
      fontFace: D.h, fontSize: 32, color: D.muted, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addText("Could be for any company.", {
      x: 0.5, y: 2.9, w: 4.2, h: 0.8,
      fontFace: D.b, fontSize: 28, color: D.muted, align: "center", margin: 0, valign: "top"
    });
    // Divider
    s.addShape(pres.shapes.LINE, { x: 5.0, y: 1.0, w: 0, h: 3.6, line: { color: D.accent, width: 2 } });
    // Right column
    s.addText("Sounds like someone\nwho works here", {
      x: 5.3, y: 1.8, w: 4.2, h: 1.0,
      fontFace: D.h, fontSize: 32, color: D.accent, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addText("Same prompt + your context.", {
      x: 5.3, y: 2.9, w: 4.2, h: 0.8,
      fontFace: D.b, fontSize: 28, color: D.accent, align: "center", margin: 0, valign: "top"
    });
    s.addNotes("Left: Same well-crafted prompt from Level 2. Output is plausible but generic \u2014 reads like it could be for any company.\nRight: Same prompt + background info (current onboarding stats, company size & structure, known pain points, relevant policies). Output sounds like someone who works here.\nSource: Elastic, KDnuggets. Transition: Let's meet the metaphor that explains why.");
  }

  // --- Slide 36: Meet Dory ---
  {
    const s = darkSlide(pres);
    // Left: teal-tinted placeholder rectangle for future Dory image
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: 0.8, w: 3.5, h: 4.0,
      rectRadius: 0.15,
      fill: { color: D.accent, transparency: 85 },
      line: { color: D.accent, width: 1.5 }
    });
    s.addImage({ data: icons.fish, x: 1.95, y: 2.0, w: 1.2, h: 1.2 });
    // Right: just 4 words
    s.addText("Meet your\nAI colleague.", {
      x: 5.0, y: 1.5, w: 4.5, h: 2.5,
      fontFace: D.h, fontSize: 44, color: D.white, bold: true, align: "left", margin: 0, valign: "middle"
    });
    s.addNotes("Your AI is like Dory from Finding Nemo: incredibly smart, genuinely wants to help, remembers absolutely nothing between conversations. In Level 2, we got better at asking. But Dory's biggest problem isn't that she doesn't understand what you're saying \u2014 it's that she doesn't know what you know. You already SAW context transform output. Dory explains WHY. First of five Dory touchpoints. Transition: Let's meet her properly.");
  }

  // --- Slide 37: "Brilliant. Helpful. Remembers nothing." ---
  hero(pres, "Brilliant. Helpful.\nRemembers nothing.", {
    size: 60,
    notes: "The Dory punchline. Every conversation starts fresh \u2014 no memory of previous interactions, no context about your company, your role, or your preferences. This is why context engineering matters: you have to give Dory the information she needs every single time. Level 2 = words. Level 3 = information. Transition: Three ways to confuse your AI."
  });

  // --- Slide 38: Attention Problem ---
  hero(pres, "Too much.\nContradictory.\nToo broad.", {
    sub: "Three ways to confuse your AI.",
    notes: "The three failure modes of context:\n1. Too much context \u2014 Dory gets lost, buries important stuff in noise. Key details get drowned out by irrelevant information.\n2. Contradictory info \u2014 Dory gets confused, tries to satisfy everything at once. Output becomes incoherent.\n3. Broad instructions \u2014 Dory wanders off, loses focus partway through. Starts strong, finishes weak.\nThe problem isn't that AI is dumb. It's the context. Source: Sombra \u2014 57% of orgs have AI agents in production, but 32% cite quality as top barrier. Transition: So how do you fix it?"
  });

  // --- Slide 39: "Let AI tell you what it needs." ---
  hero(pres, "Let AI tell you\nwhat it needs.", {
    sub: "\"Before you start, ask me clarifying questions.\"",
    notes: "The single highest-leverage technique: let AI close its own context gaps. When you say 'Before you start, ask me clarifying questions about anything you'd need to know,' the AI will ask:\n\u2022 What's the current onboarding timeline?\n\u2022 Budget constraints?\n\u2022 Key stakeholder concerns?\n\u2022 Success metrics you'll be measured on?\n\u2022 Previous failed attempts?\nThe AI does context engineering for you. Source: Anthropic/Claude. Transition: But how much context is enough?"
  });

  // --- Slide 40: "Not too much. Not too little." ---
  hero(pres, "Not too much.\nNot too little.", {
    sub: "The right context at the right time.",
    notes: "Prompt engineering tweaks the question. Context engineering builds the knowledge base. Persona milestone: Questioner \u2192 Viber. You've outgrown Questioner. You prompt well, you understand context, you get good results. You're a Viber \u2014 but you're still doing all the work manually. Source: CIO. Transition: Let's change that."
  });

  // --- Slide 41: Breather ---
  breatherSlide(pres,
    "You prompt well and feed AI smartly.\nBut who's doing all the work? Still you.",
    "Transition from Level 3 (context engineering) to Level 4 (agents). The audience should feel like they've mastered information, but there's a bigger shift coming \u2014 letting AI do the work."
  );

  // ============================================================
  // LEVEL 4: "LET AI DRIVE" (Slides 42-51)
  // ============================================================

  // --- Slide 42: Copy-Paste Trap ---
  {
    const s = darkSlide(pres);
    const steps = ["1. You search", "2. You paste", "3. AI drafts", "4. You apply"];
    steps.forEach((step, i) => {
      const y = 1.0 + i * 0.9;
      s.addText(step, {
        x: 2.0, y, w: 6, h: 0.8,
        fontFace: D.b, fontSize: 28, color: D.text, bold: true, margin: 0, valign: "middle"
      });
    });
    s.addNotes("The copy-paste cycle is so universal it's invisible. Drawing it as steps makes people see the pattern:\n1. You decide which documents to provide\n2. You copy-paste into the AI chat\n3. You read the output\n4. You manually apply it\n\nProblems: You're the bottleneck. You don't know what context AI needs. You're doing grunt work. Every step has 'you' in it. Transition: There's a better metaphor for this.");
  }

  // --- Slide 43: "You're using a Ferrari to carry groceries." ---
  hero(pres, "You're using a Ferrari\nto carry groceries.", {
    notes: "The copy-paste trap summarized in one image. You have this incredibly powerful tool, and you're using it for the most mundane possible workflow. The AI can do so much more \u2014 if you let it. Transition: What if the agent did the work?"
  });

  // --- Slide 44: Agent-driven ---
  {
    const s = darkSlide(pres);
    const steps = [
      { text: "1. Agent retrieves", color: D.text },
      { text: "2. Agent identifies gaps", color: D.text },
      { text: "3. Agent creates", color: D.text },
      { text: "4. You review", color: D.accent },
    ];
    steps.forEach((step, i) => {
      const y = 1.0 + i * 0.9;
      s.addText(step.text, {
        x: 2.0, y, w: 6, h: 0.8,
        fontFace: D.b, fontSize: 28, color: step.color, bold: true, margin: 0, valign: "middle"
      });
    });
    s.addNotes("Same four steps, but the human only appears at step 4. The agent retrieves its own context, identifies gaps and goes back for more, creates/edits outputs directly, and you review and approve. Human moved from 'operator at every step' to 'reviewer at the end.' Same Dory, same memory issues, but now she has hands, eyes, and a to-do list. One great chef who finds ingredients, preps, cooks, and plates. You taste-test at the end. Transition: Let's meet this new Dory.");
  }

  // --- Slide 45: "Same Dory. Now she has hands." ---
  hero(pres, "Same Dory.\nNow she has hands.", {
    sub: "Eyes, a phone, and a to-do list.",
    notes: "Second Dory touchpoint. Same memory issues, but the agent now has tools. It can read files, search the web, send emails, query databases. The chef metaphor: one great chef who finds ingredients, preps, cooks, and plates. You taste-test at the end. Transition: What tools does she have?"
  });

  // --- Slide 46: Connections (6 icons in a row) ---
  {
    const s = darkSlide(pres);
    const connections = [
      { icon: icons.globeW, label: "Web" },
      { icon: icons.envelopeW, label: "Email" },
      { icon: icons.puzzleW, label: "Docs" },
      { icon: icons.databaseW, label: "Data" },
      { icon: icons.calendarW, label: "Calendar" },
      { icon: icons.arrowW, label: "Custom" },
    ];
    const iconSize = 0.8;
    const totalW = connections.length * 1.4 - 0.2;
    const startX = (10 - totalW) / 2;
    connections.forEach((c, i) => {
      const x = startX + i * 1.4;
      s.addImage({ data: c.icon, x: x + (1.2 - iconSize) / 2, y: 1.8, w: iconSize, h: iconSize });
      s.addText(c.label, {
        x, y: 2.8, w: 1.2, h: 0.6,
        fontFace: D.b, fontSize: 20, color: D.muted, align: "center", margin: 0, valign: "top"
      });
    });
    s.addNotes("Give Dory a phone, a filing cabinet, and a library card. The six connection types:\n\u2022 Web \u2014 Search and fact-check in real time\n\u2022 Email \u2014 Read context, draft responses\n\u2022 Docs \u2014 Policies, templates, past work\n\u2022 Data \u2014 Query real databases\n\u2022 Calendar \u2014 Scheduling context\n\u2022 Custom \u2014 Via MCP ('USB-C for AI') \u2014 any tool you can imagine\nMCP detail available in appendix for Q&A. Transition: What does this look like in practice?");
  }

  // --- Slide 47: With vs Without (light bg, two columns) ---
  {
    const s = pres.addSlide();
    s.background = { color: D.lightBg };
    // Left header
    s.addText("Without", {
      x: 0.5, y: 0.8, w: 4.2, h: 0.7,
      fontFace: D.h, fontSize: 36, color: D.wrong, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addText("You copy-paste\nYou forget the budget memo\nVP asks \u2014 too late", {
      x: 0.5, y: 1.7, w: 4.2, h: 2.5,
      fontFace: D.b, fontSize: 22, color: D.darkText, margin: 0, align: "center", valign: "top"
    });
    // Divider
    s.addShape(pres.shapes.LINE, { x: 5.0, y: 0.8, w: 0, h: 3.6, line: { color: D.muted, width: 1 } });
    // Right header
    s.addText("With", {
      x: 5.3, y: 0.8, w: 4.2, h: 0.7,
      fontFace: D.h, fontSize: 36, color: D.right, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addText("Agent reads directly\nFinds what you forgot\nFlags what you missed", {
      x: 5.3, y: 1.7, w: 4.2, h: 2.5,
      fontFace: D.b, fontSize: 22, color: D.darkText, margin: 0, align: "center", valign: "top"
    });
    s.addNotes("The forgotten budget memo is the killer detail. Everyone has this story.\nWithout connections: Copy-paste HR handbook, survey results, team structure. Forget the budget memo. Proposal misses cost constraints. VP asks about it \u2014 too late.\nWith connections: Agent reads HR system directly. Pulls survey data automatically. Finds the budget memo you forgot. Flags a policy constraint you didn't know existed.\nThe agent found context you wouldn't have thought to provide. Transition: But can you trust it?");
  }

  // --- Slide 48: "Trust, but verify." ---
  {
    const s = darkSlide(pres);
    s.addText("Trust, but verify.", {
      x: 1.0, y: 0.6, w: 8, h: 2.0,
      fontFace: D.h, fontSize: 60, color: D.white, bold: true,
      align: "center", margin: 0, valign: "bottom"
    });
    s.addText("Never trust numbers you didn't provide.\nVerify claims against sources.\nUse AI for drafts, not decisions.", {
      x: 1.5, y: 2.8, w: 7, h: 2.0,
      fontFace: D.b, fontSize: 28, color: D.muted,
      align: "center", margin: 0, valign: "top"
    });
    s.addNotes("NOW this slide lands. The reader just watched us hand AI the keys to documents, databases, and workflows. They should be feeling 'Wait, can I trust it with all that?' This addresses the unease at exactly the moment it's felt.\nThree rules:\n1. Never trust numbers you didn't provide \u2014 if it can't cite a source, it made it up.\n2. Verify claims against sources \u2014 AI output = first draft, not final answer.\n3. Use AI for drafts, not decisions \u2014 your judgment is the last step.\nLove Dory. Fact-check Dory. Transition: The mindset shift.");
  }

  // --- Slide 49: "AI is a power tool, not autopilot." ---
  hero(pres, "AI is a power tool,\nnot autopilot.", {
    notes: "Sensitive/confidential data \u2014 only approved/enterprise tools. Final legal/compliance language \u2014 AI drafts, humans approve. Anything where being wrong has serious consequences. Persona milestone: Viber \u2192 approaching AI-First. You're no longer a Viber \u2014 you've let go of the wheel. But you're still working with a single agent. One last leap. Transition: The most dangerous moment."
  });

  // --- Slide 50: The dangerous moment ---
  hero(pres, "When the answer \u2018feels right\u2019\nbut you can\u2019t verify it \u2014\nthat\u2019s the most dangerous moment.", {
    size: 36, color: D.accent,
    notes: "The fourth bullet from the old 'Hands on the Wheel' slide \u2014 and the most important. This is the 'feels right' trap. When AI output sounds confident and plausible but you have no way to check it, that's when mistakes happen. The feeling of confidence is not the same as verification. Transition: You're ready for the next level."
  });

  // --- Slide 51: Breather ---
  breatherSlide(pres,
    "You're managing AI well.\nTime to orchestrate it.",
    "Final level transition. Single agent \u2192 multi-agent. The audience has mastered individual AI interaction. Now we go to the brigade."
  );

  // ============================================================
  // LEVEL 5: "ORCHESTRATE" (Slides 52-64)
  // ============================================================

  // --- Slide 52: Kitchen Brigade ---
  {
    const s = darkSlide(pres);
    // Left: 1 large icon with label
    s.addImage({ data: icons.user, x: 1.5, y: 1.5, w: 1.5, h: 1.5 });
    s.addText("One Chef", {
      x: 0.8, y: 3.2, w: 3.0, h: 0.8,
      fontFace: D.b, fontSize: 28, color: D.muted, align: "center", margin: 0, valign: "top"
    });
    // Divider
    s.addShape(pres.shapes.LINE, { x: 5.0, y: 0.8, w: 0, h: 4.0, line: { color: D.accent, width: 2 } });
    // Right: 4 smaller icons with station labels
    const stations = ["Prep", "Grill", "Sauce", "Plate"];
    stations.forEach((label, i) => {
      const x = 5.8 + (i % 2) * 1.8;
      const y = 1.3 + Math.floor(i / 2) * 1.8;
      s.addImage({ data: icons.user, x: x + 0.2, y, w: 0.8, h: 0.8 });
      s.addText(label, {
        x, y: y + 0.9, w: 1.2, h: 0.5,
        fontFace: D.b, fontSize: 20, color: D.accent, align: "center", margin: 0, valign: "top"
      });
    });
    s.addNotes("Level 4: One chef doing everything solo. Works for single tasks, but a 10-course dinner alone = burnout, mistakes, forgotten appetizer.\nLevel 5: Kitchen brigade \u2014 multiple chefs at stations. A classroom of Dorys, each doing one focused step. Each fresh, focused, brilliant at one thing.\nLLMs are bad at long chains but excellent at focused tasks. The kitchen brigade leverages the strength. Third Dory touchpoint. Transition: Let's name the principle.");
  }

  // --- Slide 53: "The trick isn't making one AI smarter..." ---
  hero(pres, "The trick isn\u2019t making\none AI smarter.\nIt\u2019s making many\nwork together.", {
    size: 40,
    notes: "The core principle of Level 5. Instead of one powerful agent trying to do everything, you create a chain of focused agents. Each one does one thing brilliantly, and the chain does everything. Transition: Here's what that chain looks like."
  });

  // --- Slide 54: Chain flow diagram ---
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
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 2.2, w: boxW, h: boxH,
        rectRadius: 0.1,
        fill: { color: p.color }
      });
      s.addText(p.label, {
        x, y: 2.2, w: boxW, h: boxH,
        fontFace: D.b, fontSize: 28, color: D.white, bold: true, align: "center", margin: 0, valign: "middle"
      });
      if (i < phases.length - 1) {
        s.addText("\u2192", {
          x: x + boxW, y: 2.2, w: 0.6, h: boxH,
          fontFace: D.b, fontSize: 28, color: D.accent, bold: true, align: "center", margin: 0, valign: "middle"
        });
      }
    });
    s.addNotes("The onboarding proposal chain:\n\u2022 Agent 1 (Research) \u2014 researches onboarding process, pulls metrics from HR, reads surveys, summarizes pain points \u2192 structured brief\n\u2022 Agent 2 (Draft) \u2014 uses the brief to draft a proposal, one-page exec brief for VP of People \u2192 polished proposal\n\u2022 Agent 3 (Review) \u2014 reviews against leadership template and compliance policy, flags gaps \u2192 final draft + notes\n\u2022 You \u2014 review, adjust, approve. The part only humans can do: judgment.\n\nThree principles: Single job (each link has one clear job), Filtered context (context is filtered between steps), Compounding quality (each step builds on verified output). Smell test: If your initial prompt is getting long and complex, you need a Phase 0 \u2014 an agent whose only job is to figure out what the rest of the chain needs. Transition: The rule.");
  }

  // --- Slide 55: "Each agent does one thing. The chain does everything." ---
  hero(pres, "Each agent does one thing.\nThe chain does everything.", {
    notes: "Distilled principle. Break big tasks into focused steps. Pass results forward. Filter context between each. The 'write this down' moment. Transition: But how does each agent know what to do?"
  });

  // --- Slide 56: Skills ---
  hero(pres, "Skills", {
    size: 72,
    sub: "The playbook each chef follows.",
    notes: "Full definition: Skills are predefined rules, instructions, templates, and context packages \u2014 injected into the AI's context only when relevant. Think of them as the specialized training manual each chef at each station receives.\n\nHow does each Dory in the brigade know what to do? Skills. Write once, use forever. Every time the chain runs, each agent already knows its specialty.\n\nOrganizations investing in context architecture see 50% faster responses and 40% higher quality outputs. Source: CodeConductor. Transition: Let's see skills in action."
  });

  // --- Slide 57: Skills in Action ---
  {
    const s = darkSlide(pres);
    const agents = [
      { name: "Research Agent", skill: "+ Research Standards" },
      { name: "Draft Agent", skill: "+ Leadership Proposals" },
      { name: "Review Agent", skill: "+ Compliance Policy" },
    ];
    const colW = 2.8, gap = 0.3;
    const totalW = agents.length * colW + (agents.length - 1) * gap;
    const startX = (10 - totalW) / 2;
    agents.forEach((a, i) => {
      const x = startX + i * (colW + gap);
      s.addText(a.name, {
        x, y: 1.8, w: colW, h: 1.0,
        fontFace: D.b, fontSize: 28, color: D.accent, bold: true, align: "center", margin: 0, valign: "bottom"
      });
      s.addText(a.skill, {
        x, y: 2.9, w: colW, h: 1.0,
        fontFace: D.b, fontSize: 24, color: D.muted, align: "center", margin: 0, valign: "top"
      });
    });
    s.addNotes("Same onboarding chain, now upgraded with skills:\n\u2022 Agent 1 (Research) + 'Research Standards' \u2014 knows where to look, what data to prioritize, how to structure the brief. Already knows the company's data sources.\n\u2022 Agent 2 (Draft) + 'Leadership Proposals' \u2014 knows the VP's preferred format, tone, level of detail, how to frame costs. Every proposal sounds like it was written for this audience.\n\u2022 Agent 3 (Review) + 'Compliance Policy' \u2014 knows regulations, required disclaimers, approval workflows. Catches policy gaps you didn't know existed.\nWith skills, each agent already knows its specialty. Transition: What makes skills special?");
  }

  // --- Slide 58: "Reusable. Consistent. Scalable. Focused." ---
  hero(pres, "Reusable.\nConsistent.\nScalable.\nFocused.", {
    size: 48,
    notes: "The four properties that make skills transformative vs. just helpful:\n\u2022 Reusable \u2014 write once, use forever\n\u2022 Consistent \u2014 every interaction gets the same quality context\n\u2022 Scalable \u2014 works for 1 person or 10,000\n\u2022 Focused \u2014 only loads what's relevant, keeping each Dory's attention on track\nAnd they compound. Your feedback from each chain run becomes new skills. The brigade gets smarter every time. Transition: You may have seen skills by another name."
  });

  // --- Slide 59: "Custom instructions = System prompts = Rules = Skills" ---
  hero(pres, "\"Custom instructions\"\n= \"System prompts\"\n= \"Rules\"\n= \"Skills\"", {
    size: 36, font: D.b,
    notes: "Same concept, many names. Whether triggered by you, the app, or the AI itself differs across tools. The principle is identical. ChatGPT custom instructions, Claude Project rules, system prompts \u2014 all skills. If your tool has a way to save reusable instructions, use it. That's a skill. Transition: Here's the metaphor that ties it all together."
  });

  // --- Slide 60: GPS metaphor (light bg) ---
  {
    const s = pres.addSlide();
    s.background = { color: D.lightBg };
    // Left column
    s.addText("Directions\nevery trip", {
      x: 0.5, y: 1.5, w: 4.2, h: 1.2,
      fontFace: D.h, fontSize: 32, color: D.wrong, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addText("Effort. Every. Time.", {
      x: 0.5, y: 2.8, w: 4.2, h: 0.8,
      fontFace: D.b, fontSize: 22, color: D.muted, align: "center", margin: 0, valign: "top"
    });
    // Divider
    s.addShape(pres.shapes.LINE, { x: 5.0, y: 1.0, w: 0, h: 3.6, line: { color: D.muted, width: 1 } });
    // Right column
    s.addText("GPS that learns", {
      x: 5.3, y: 1.5, w: 4.2, h: 1.2,
      fontFace: D.h, fontSize: 32, color: D.right, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addText("Compounds permanently.", {
      x: 5.3, y: 2.8, w: 4.2, h: 0.8,
      fontFace: D.b, fontSize: 22, color: D.accent, align: "center", margin: 0, valign: "top"
    });
    s.addNotes("Prompt engineering = giving directions for each individual trip. Effort every time. Doesn't compound.\nContext engineering + skills = programming a GPS with home, office, preferences, traffic patterns. Gets smarter the more you invest. Compounds permanently.\nThis crystallizes the full journey. Each level built on the last. The GPS metaphor ties all five together. Transition: And here's the punchline.");
  }

  // --- Slide 61: "Skills compound." ---
  hero(pres, "Skills compound.\nThe brigade gets smarter\nevery time.", {
    size: 40,
    notes: "This is the compounding beat. Your feedback from each chain run becomes new skills. The VP's format becomes the 'Leadership Proposals' skill. Compliance gaps become the updated 'Compliance Policy' skill. Even though Dory won't remember, the skills will. Final Dory touchpoint. Transition: Let's see the numbers."
  });

  // --- Slide 62: "1.5 hrs" ---
  bigNum(pres, "1.5 hrs", "of you being the bottleneck", {
    color: D.wrong,
    notes: "Walk through the 7 steps verbally:\n1. Search for onboarding docs and survey data (20 min)\n2. Copy-paste into AI, ask for draft (10 min)\n3. Read output, realize it's missing budget context (5 min)\n4. Find budget data, re-prompt (15 min)\n5. Reformat to leadership template (20 min)\n6. Ask AI to review draft (10 min)\n7. Manually apply suggestions (15 min)\nTotal: ~1.5 hours of you being the bottleneck. This is the manual workflow the audience has watched evolve through the entire deck. Now it's at full scale and the pain is vivid. Transition: Now the chained way."
  });

  // --- Slide 63: "15 min" ---
  bigNum(pres, "15 min", "of judgment \u2014 the part only humans can do", {
    color: D.right,
    notes: "Walk through the chain:\n\u2022 Agent 1 researches (pulls metrics, reads surveys, summarizes pain points)\n\u2022 Agent 2 drafts (one-page exec brief for VP of People)\n\u2022 Agent 3 reviews (checks against leadership template and compliance policy)\n\u2022 You judge (review, adjust, approve)\nSame proposal quality. The chain did 1 hour 15 minutes of grunt work. You spent 15 minutes on judgment \u2014 the part only humans can do. Transition: And it gets better every time."
  });

  // --- Slide 64: "Same proposal. The chain gets smarter every time." ---
  hero(pres, "Same proposal.\nThe chain gets smarter\nevery time.", {
    sub: "Your feedback becomes skills. Dory won't remember, but the skills will.",
    notes: "Emotional climax. The skills compounding beat is the final Dory touchpoint. Your feedback from each run becomes new skills \u2014 the VP's format, compliance gaps, research standards. Even though Dory forgets, the skills persist. Same proposal. 15 minutes of judgment instead of 1.5 hours of grunt work. And next time it's even faster. Transition to closing."
  });

  // ============================================================
  // CLOSING (Slides 65-71)
  // ============================================================

  // --- Slide 65: From Asking to Orchestrating ---
  {
    const s = darkSlide(pres);
    const stages = [
      { label: "AI Skeptic", bridge: "Levels 0\u20131", color: "9CA3AF" },
      { label: "AI Questioner", bridge: "Levels 2\u20133", color: "6B7280" },
      { label: "AI Viber", bridge: "Level 4", color: D.accent },
      { label: "AI-First", bridge: "Level 5", color: D.accent },
    ];
    // Horizontal line
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.6, w: 9, h: 0.06, fill: { color: D.accent } });
    const boxW = 1.9, gap = 0.3;
    const totalW = stages.length * boxW + (stages.length - 1) * gap;
    const startX = (10 - totalW) / 2;
    stages.forEach((st, i) => {
      const x = startX + i * (boxW + gap);
      // Persona label above line
      s.addText(st.label, {
        x, y: 1.4, w: boxW, h: 1.0,
        fontFace: D.h, fontSize: 28, color: st.color, bold: true, align: "center", margin: 0, valign: "bottom"
      });
      // Bridge text below line
      s.addText(st.bridge, {
        x, y: 2.8, w: boxW, h: 0.8,
        fontFace: D.b, fontSize: 20, color: st.color, italic: true, align: "center", margin: 0, valign: "top"
      });
      // Arrow between
      if (i < stages.length - 1) {
        s.addText("\u2192", {
          x: x + boxW, y: 1.9, w: gap, h: 0.6,
          fontFace: D.b, fontSize: 28, color: D.accent, align: "center", margin: 0, valign: "middle"
        });
      }
    });
    s.addNotes("Don't rush this \u2014 let the audience see how far they've come. The spectrum from slide 4 is now a journey they've completed.\n\u2022 AI Skeptic \u2014 Levels 0\u20131 got you past this\n\u2022 AI Questioner \u2014 Levels 2\u20133 got you past this\n\u2022 AI Viber \u2014 Level 4 got you past this\n\u2022 AI-First \u2014 Level 5 brought you here\nYou walked in as a Questioner. This deck just showed you the path to AI-First. Transition: Here are the tools to keep going.");
  }

  // --- Slide 66: Your AI Toolkit ---
  {
    const s = darkSlide(pres);
    s.addText("Your AI Toolkit", {
      x: 0.5, y: 0.4, w: 9, h: 0.8,
      fontFace: D.h, fontSize: 44, color: D.white, bold: true, align: "center", margin: 0
    });
    const headerRow = [
      { text: "Category", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 20 } },
      { text: "Tools", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 20 } },
      { text: "Notes", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 20 } },
    ];
    const data = [
      ["General", "ChatGPT, Claude, Gemini", "Start here"],
      ["Workflow", "Copilot, Gemini Workspace", "In your tools"],
      ["Dev", "Copilot, Cursor, Claude Code", "AI-first coding"],
      ["Connections", "MCP, Zapier AI, custom", "Level 4\u20135"],
    ];
    const tableRows = [headerRow, ...data.map(r => r.map(c => ({ text: c, options: { fontFace: D.b, fontSize: 20, color: D.text } })))];
    s.addTable(tableRows, {
      x: 0.5, y: 1.4, w: 9, colW: [2.2, 3.8, 3.0],
      border: { pt: 1, color: "3A3A5E" },
      rowH: [0.6, 0.7, 0.7, 0.7, 0.7],
      autoPage: false
    });
    s.addNotes("Practical, not exhaustive. Know which tool to try first for your role:\n\u2022 General purpose \u2014 ChatGPT, Claude, Gemini. Free tiers available. Start here.\n\u2022 In your workflow \u2014 Microsoft Copilot, Gemini in Workspace. Already in your work tools.\n\u2022 For developers \u2014 GitHub Copilot, Cursor, Claude Code. AI-first coding.\n\u2022 For connections \u2014 MCP servers, Zapier AI, custom integrations. Level 4\u20135 territory.\nTransition: Here's your challenge.");
  }

  // --- Slide 67: 30-Day Challenge ---
  {
    const s = darkSlide(pres);
    // Timeline bar
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.6, w: 9, h: 0.06, fill: { color: D.accent } });
    const weeks = [
      { label: "Week 1\nQuestioner", color: D.accent },
      { label: "Week 2\nViber", color: D.accent },
      { label: "Week 3\nAI-First", color: D.accent },
      { label: "Week 4\nOrchestrator", color: D.right },
    ];
    const circleSize = 0.6;
    weeks.forEach((w, i) => {
      const x = 1.2 + i * 2.2;
      // Circle on timeline
      s.addShape(pres.shapes.OVAL, {
        x: x - circleSize / 2 + 0.5, y: 2.6 - circleSize / 2 + 0.03,
        w: circleSize, h: circleSize,
        fill: { color: w.color }
      });
      // Label below
      s.addText(w.label, {
        x: x - 0.5, y: 3.2, w: 2.0, h: 1.2,
        fontFace: D.b, fontSize: 24, color: w.color, align: "center", margin: 0, valign: "top"
      });
    });
    s.addNotes("One task. Four weeks. Four persona crossings.\n\u2022 Week 1 (Questioner) \u2014 Level 2. Specific, structured prompt. Compare to manual. Notice the phrasing difference.\n\u2022 Week 2 (Viber) \u2014 Level 3. Add context. Ask AI to ask clarifying questions. Notice the jump.\n\u2022 Week 3 (AI-First) \u2014 Level 4. Agent with connections. Let it pull context itself. Notice what it finds.\n\u2022 Week 4 (Orchestrator) \u2014 Level 5. Break into phases. Chain them. Compare to Week 1. You're orchestrating.\nFour weeks. One task. Same journey this deck just took you on. Most actionable takeaway. Transition: Let's come back to where we started.");
  }

  // --- Slide 68: Breather ---
  breatherSlide(pres,
    "Let's come back to where we started.",
    "Emotional reset before the callback. Pause. Let the pacing shift."
  );

  // --- Slide 69: "Remember the 45-minute conversation?" ---
  hero(pres, "Remember the\n45-minute conversation?", {
    size: 48,
    notes: "Callback to slide 2. The person who spent 45 minutes copy-pasting into ChatGPT. They learned to prompt with specificity (became a Viber, Levels 2\u20133). They let the agent find what it needed (started going AI-First, Level 4). They chained the whole workflow (full AI-First, Level 5). They were a Questioner who became AI-First. Transition: The punchline."
  });

  // --- Slide 70: "Two minutes. That's the trick." ---
  hero(pres, "Two minutes.\nThat\u2019s the trick.", {
    size: 72,
    notes: "The same task. Two minutes. That's the trick. Now you know it too. Let this land. Long pause. This is the emotional peak of the entire deck. Everything from slide 1 has been building to this moment. Transition: One final thought."
  });

  // --- Slide 71: CTA ---
  hero(pres, "The secret was never\nin the AI.", {
    sub: "Now go try it \u2014 one task, this week.",
    notes: "Clean exit. The secret was in knowing how to work with it. One task, this week \u2014 not 'transform everything.' Getting Agents to Give Up Their Secrets."
  });

  // ============================================================
  // WRITE FILE
  // ============================================================
  console.log("Writing presentation...");
  await pres.writeFile({ fileName: "Getting-Agents-to-Give-Up-Their-Secrets.pptx" });
  console.log("Done! Created Getting-Agents-to-Give-Up-Their-Secrets.pptx (71 slides, billboard)");
}

main().catch(err => { console.error("Error:", err); process.exit(1); });
