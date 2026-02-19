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
    fontFace: D.b, fontSize: 18, color: D.darkText, margin: 0, valign: "top"
  });
  // Right card
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: cardY, w: 4.2, h: cardH, fill: { color: D.rightBg } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: cardY, w: 0.06, h: cardH, fill: { color: D.right } });
  s.addText(opts.rightText, {
    x: 5.6, y: cardY + 0.2, w: 3.6, h: cardH - 0.4,
    fontFace: D.b, fontSize: 18, color: D.darkText, margin: 0, valign: "top"
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
  // LEVEL 3: "FEED AI SMARTER" (Slides 22-26)
  // v2: Leads with proof (Same Prompt, Different Context) BEFORE Dory
  // ============================================================

  // --- Slide 22: Same Prompt, Different Context ---
  twoCol(pres, {
    dark: true,
    headline: "Same Prompt, Different Context",
    leftTitle: "Level 2 Result",
    leftContent: [
      { text: "Same well-crafted prompt from the 5x Prompt slide.", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.muted } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "Output is plausible but generic. Reads like it could be for any company.", options: { fontFace: D.b, fontSize: 13, color: D.muted, italic: true } },
    ],
    rightTitle: "With Context",
    rightAccent: D.right,
    rightBg: D.rightBg,
    rightContent: [
      { text: "Same prompt + background info:", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 4 } },
      { text: "\u2022 Current onboarding stats", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Company size & structure", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Known pain points", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Relevant policies", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "Output sounds like someone who works here.", options: { fontFace: D.b, fontSize: 13, color: D.right, bold: true, italic: true } },
    ],
    takeaway: "Same prompt. Different information. Dramatically different result.",
    source: "Elastic \u00b7 KDnuggets",
    notes: "The clearest Level 2/3 boundary demonstration. The prompt didn't change. The context did. This is the 'aha' \u2014 it's not about the words, it's about what the AI knows."
  });

  // --- Slide 23: Meet Your AI Colleague (Dory) ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "Meet Your AI Colleague", { dark: true });
    // Dory illustration area (fish icon as placeholder)
    addDarkCard(pres, s, 0.5, 1.2, 3.5, 3.0);
    s.addShape(pres.shapes.OVAL, { x: 1.3, y: 1.5, w: 1.8, h: 1.8, fill: { color: D.accent, transparency: 80 } });
    s.addImage({ data: icons.fish, x: 1.6, y: 1.8, w: 1.2, h: 1.2 });
    s.addText("Dory", { x: 0.5, y: 3.2, w: 3.5, h: 0.4, fontFace: D.h, fontSize: 20, color: D.accent, bold: true, align: "center", margin: 0 });
    s.addText("Your AI Colleague", { x: 0.5, y: 3.55, w: 3.5, h: 0.3, fontFace: D.b, fontSize: 12, color: D.mutedDark, italic: true, align: "center", margin: 0 });
    // Text right
    addDarkCard(pres, s, 4.3, 1.2, 5.2, 3.0);
    addBar(pres, s, 4.3, 1.2, 3.2, D.accent);
    s.addText([
      { text: "Your AI is like Dory:", options: { breakLine: true, fontFace: D.b, fontSize: 15, color: D.textDark, bold: true } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "Incredibly smart. Genuinely wants to help. Remembers absolutely nothing between conversations.", options: { breakLine: true, fontFace: D.b, fontSize: 14, color: D.textDark, italic: true } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "In Level 2, we got better at asking. But Dory's biggest problem isn't that she doesn't understand what you're saying \u2014 it's that she doesn't know what you know.", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.mutedDark } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "You already SAW context transform output. Dory explains WHY.", options: { fontFace: D.b, fontSize: 12, color: D.accent, bold: true } },
    ], { x: 4.55, y: 1.3, w: 4.7, h: 3.0, margin: 0, valign: "top" });
    addTakeaway(pres, s, "Level 2 = words. Level 3 = information.", { dark: true });
    s.addNotes("NOW the Dory metaphor has a reason. The reader just saw what context does (slide 22); Dory explains the mechanism. First of five Dory touchpoints.");
  }

  // --- Slide 24: The Attention Problem ---
  threeCol(pres, {
    dark: true,
    headline: "The Attention Problem",
    columns: [
      { title: "Too Much Context", body: "Dory gets lost \u2014 buries important stuff in noise. Key details get drowned out by irrelevant information.", accent: D.wrong },
      { title: "Contradictory Info", body: "Dory gets confused \u2014 tries to satisfy everything at once. Output becomes incoherent.", accent: "F59E0B" },
      { title: "Broad Instructions", body: "Dory wanders off \u2014 loses focus partway through. Starts strong, finishes weak.", accent: D.accentDark },
    ],
    takeaway: "The problem isn't that AI is dumb. It's the context.",
    source: "Sombra \u2014 57% of orgs have AI agents in production, but 32% cite quality as top barrier",
    notes: "Reframes 'AI gives bad answers.' It's almost never the model \u2014 it's the context."
  });

  // --- Slide 25: Let AI Tell You What It Needs ---
  twoCol(pres, {
    dark: true,
    headline: "Let AI Tell You What It Needs",
    leftTitle: "The Prompt",
    leftAccent: D.accent,
    leftContent: [
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "\"Before you start, ask me clarifying questions about anything you'd need to know to write an excellent proposal.\"", options: { fontFace: D.b, fontSize: 14, color: D.text, italic: true } },
    ],
    rightTitle: "AI's Questions",
    rightAccent: D.right,
    rightContent: [
      { text: "\u2022 What's the current onboarding timeline?", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Budget constraints?", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Key stakeholder concerns?", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Success metrics you'll be measured on?", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Previous failed attempts?", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "The AI does context engineering for you.", options: { fontFace: D.b, fontSize: 13, color: D.right, bold: true, italic: true } },
    ],
    takeaway: "The single highest-leverage technique: let AI close its own context gaps.",
    source: "Anthropic/Claude",
    notes: "The AI does context engineering for you. This addresses the attention problem from slide 24."
  });

  // --- Slide 26: The Goldilocks Principle + Persona Milestone ---
  {
    const s = darkSlide(pres);
    s.addText("Not too much. Not too little.\nThe right context at the right time.", {
      x: 1.0, y: 1.0, w: 8, h: 1.6,
      fontFace: D.h, fontSize: 26, color: D.white, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addText("Prompt engineering tweaks the question.\nContext engineering builds the knowledge base.", {
      x: 1.0, y: 2.6, w: 8, h: 1.0,
      fontFace: D.b, fontSize: 15, color: D.mutedDark, italic: true, align: "center", margin: 0, valign: "top"
    });
    // Persona milestone callout
    addGlassCard(pres, s, 1.5, 3.8, 7, 1.0);
    s.addText([
      { text: "Persona milestone: ", options: { bold: true, fontFace: D.b, fontSize: 12, color: D.accent } },
      { text: "You've outgrown Questioner. You prompt well, you understand context, you get good results. You're a ", options: { fontFace: D.b, fontSize: 12, color: D.textDark } },
      { text: "Viber", options: { bold: true, fontFace: D.b, fontSize: 12, color: D.accentDark } },
      { text: " \u2014 but you're still doing all the work manually.", options: { fontFace: D.b, fontSize: 12, color: D.textDark } },
    ], { x: 1.75, y: 3.85, w: 6.5, h: 0.9, margin: 0, valign: "middle" });
    addSourceCite(pres, s, "CIO", { dark: true });
    s.addNotes("Crystallizes Level 3. Persona milestone: Questioner \u2192 Viber. The reader knows they're making progress, but the work is still manual.");
  }

  // ============================================================
  // LEVEL 4: "LET AI DRIVE" (Slides 27-32)
  // v2: Trust/Verify now at END of this section. MCP folded inline.
  // ============================================================

  // --- Slide 27: The Copy-Paste Trap ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "The Copy-Paste Trap", { dark: true });
    const steps = [
      { num: "1", text: "You decide which documents to provide" },
      { num: "2", text: "You copy-paste into the AI chat" },
      { num: "3", text: "You read the output" },
      { num: "4", text: "You manually apply it" },
    ];
    steps.forEach((st, i) => {
      const y = 1.2 + i * 0.8;
      s.addShape(pres.shapes.OVAL, { x: 1.0, y: y + 0.05, w: 0.5, h: 0.5, fill: { color: D.wrong } });
      s.addText(st.num, { x: 1.0, y: y + 0.05, w: 0.5, h: 0.5, fontFace: D.b, fontSize: 16, color: D.white, bold: true, align: "center", margin: 0, valign: "middle" });
      s.addText(st.text, { x: 1.7, y: y, w: 4.1, h: 0.6, fontFace: D.b, fontSize: 14, color: D.textDark, margin: 0, valign: "middle" });
      if (i < 3) s.addText("\u2193", { x: 1.0, y: y + 0.55, w: 0.5, h: 0.25, fontFace: D.b, fontSize: 14, color: D.mutedDark, align: "center", margin: 0 });
    });
    // Problems card
    addCard(pres, s, 6.0, 1.2, 3.5, 2.8, D.wrongBg);
    addBar(pres, s, 6.0, 1.2, 2.8, D.wrong);
    s.addText([
      { text: "Problems:", options: { breakLine: true, bold: true, fontFace: D.b, fontSize: 13, color: D.wrong } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "You're the bottleneck", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 12, color: D.textDark } },
      { text: "You don't know what context AI needs", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 12, color: D.textDark } },
      { text: "You're doing grunt work", options: { bullet: true, fontFace: D.b, fontSize: 12, color: D.textDark } },
    ], { x: 6.25, y: 1.3, w: 3.0, h: 2.6, margin: 0, valign: "top" });
    addTakeaway(pres, s, "You're using a Ferrari to carry groceries.", { dark: true });
    s.addNotes("The copy-paste cycle is so universal it's invisible. Drawing it as a diagram makes people see it.");
  }

  // --- Slide 28: Hand Dory the Keys ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "Hand Dory the Keys", { dark: true });
    const steps = [
      { num: "1", text: "Agent retrieves its own context" },
      { num: "2", text: "Agent identifies gaps, goes back for more" },
      { num: "3", text: "Agent creates/edits outputs directly" },
      { num: "4", text: "You review and approve" },
    ];
    steps.forEach((st, i) => {
      const y = 1.2 + i * 0.8;
      const isHuman = i === 3;
      s.addShape(pres.shapes.OVAL, { x: 1.0, y: y + 0.05, w: 0.5, h: 0.5, fill: { color: isHuman ? D.accent : D.right } });
      s.addText(st.num, { x: 1.0, y: y + 0.05, w: 0.5, h: 0.5, fontFace: D.b, fontSize: 16, color: D.white, bold: true, align: "center", margin: 0, valign: "middle" });
      s.addText(st.text, { x: 1.7, y: y, w: 4.1, h: 0.6, fontFace: D.b, fontSize: 14, color: D.textDark, margin: 0, valign: "middle" });
      if (i < 3) s.addText("\u2193", { x: 1.0, y: y + 0.55, w: 0.5, h: 0.25, fontFace: D.b, fontSize: 14, color: D.mutedDark, align: "center", margin: 0 });
    });
    // Insight card
    addCard(pres, s, 6.0, 1.2, 3.5, 2.8, D.rightBg);
    addBar(pres, s, 6.0, 1.2, 2.8, D.right);
    s.addText([
      { text: "Same Dory. Same memory issues.", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.textDark, bold: true } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "But now she has hands, eyes, and a to-do list.", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.right, italic: true } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "One great chef who finds ingredients, preps, cooks, and plates.", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.textDark } },
      { text: "", options: { breakLine: true, fontSize: 4 } },
      { text: "You taste-test at the end.", options: { fontFace: D.b, fontSize: 12, color: D.accent, bold: true } },
    ], { x: 6.25, y: 1.3, w: 3.0, h: 2.6, margin: 0, valign: "top" });
    addTakeaway(pres, s, "Human moved from 'operator at every step' to 'reviewer at the end.'", { dark: true });
    s.addNotes("Visual contrast with slide 27 is the whole point. Chef metaphor sets up Level 5.");
  }

  // --- Slide 29: Connections Are Everything (with MCP inline) ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "Connections Are Everything", { dark: true });
    const connections = [
      { icon: icons.globe, label: "Web search/fetch", desc: "Research and fact-check" },
      { icon: icons.envelope, label: "Email access", desc: "Read context, draft responses" },
      { icon: icons.file, label: "Document access", desc: "Policies, templates, past work" },
      { icon: icons.database, label: "Database access", desc: "Query real data" },
      { icon: icons.calendar, label: "Calendar access", desc: "Scheduling context" },
      { icon: icons.puzzle, label: "Custom connections", desc: "Via MCP \u2014 \"USB-C for AI\"" },
    ];
    connections.forEach((c, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 0.5 + col * 3.1;
      const y = 1.1 + row * 1.6;
      addDarkCard(pres, s, x, y, 2.8, 1.3);
      s.addShape(pres.shapes.OVAL, { x: x + 0.15, y: y + 0.25, w: 0.6, h: 0.6, fill: { color: D.accent, transparency: 80 } });
      s.addImage({ data: c.icon, x: x + 0.25, y: y + 0.35, w: 0.4, h: 0.4 });
      s.addText(c.label, { x: x + 0.9, y: y + 0.15, w: 1.7, h: 0.35, fontFace: D.b, fontSize: 13, color: D.textDark, bold: true, margin: 0 });
      s.addText(c.desc, { x: x + 0.9, y: y + 0.5, w: 1.7, h: 0.5, fontFace: D.b, fontSize: 11, color: D.mutedDark, margin: 0 });
    });
    addTakeaway(pres, s, "Give Dory a phone, a filing cabinet, and a library card.", { dark: true });
    s.addNotes("MCP gets a single-line mention ('USB-C for AI') rather than a dedicated slide. Full MCP detail available in appendix for Q&A.");
  }

  // --- Slide 30: The Proposal \u2014 With Connections ---
  twoCol(pres, {
    dark: true,
    headline: "The Proposal \u2014 With Connections",
    leftTitle: "Without Connections",
    leftAccent: D.wrong,
    leftBg: D.wrongBg,
    leftContent: [
      { text: "\u2022 Copy-paste HR handbook, survey results, team structure", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Forget the budget memo", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Proposal misses cost constraints", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 VP asks about it \u2014 too late", options: { fontFace: D.b, fontSize: 12, color: D.wrong, bold: true } },
    ],
    rightTitle: "With Connections",
    rightAccent: D.right,
    rightBg: D.rightBg,
    rightContent: [
      { text: "\u2022 Agent reads HR system directly", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Pulls survey data automatically", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Finds the budget memo you forgot", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "\u2022 Flags a policy constraint you didn't know existed", options: { fontFace: D.b, fontSize: 12, color: D.right, bold: true } },
    ],
    takeaway: "The agent found context you wouldn't have thought to provide.",
    notes: "The forgotten budget memo is the killer detail. Everyone has this story."
  });

  // --- Slide 31: Trust, But Verify (moved from Level 3 to here) ---
  bulletSlide(pres, {
    dark: true,
    headline: "Trust, But Verify",
    bullets: [
      { head: "Never trust numbers you didn't provide.", body: "If it can't cite a source, it made it up." },
      { head: "Verify claims against sources.", body: "AI output = first draft, not final answer." },
      { head: "Use AI for drafts, not decisions.", body: "Your judgment is the last step." },
    ],
    takeaway: "Love Dory. Fact-check Dory.",
    notes: "NOW this slide lands. The reader just watched us hand AI the keys to documents, databases, and workflows. They should be feeling 'Wait, can I trust it with all that?' This addresses the unease at exactly the moment it's felt."
  });

  // --- Slide 32: When to Keep Your Hands on the Wheel + Persona Milestone ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "When to Keep Your Hands on the Wheel", { dark: true });
    const bullets = [
      { head: "Sensitive/confidential data \u2014", body: "only approved/enterprise tools" },
      { head: "Final legal/compliance language \u2014", body: "AI drafts, humans approve" },
      { head: "Anything where being wrong has serious consequences", body: "" },
      { head: "When the AI's answer 'feels right' but you can't verify it \u2014", body: "the most dangerous moment" },
    ];
    const richItems = [];
    bullets.forEach((b, i) => {
      richItems.push({ text: b.head + " ", options: { bold: true, fontFace: D.b, fontSize: 15, color: D.textDark, bullet: true, breakLine: false } });
      richItems.push({ text: b.body, options: { fontFace: D.b, fontSize: 15, color: D.textDark, breakLine: i < bullets.length - 1 } });
    });
    s.addText(richItems, { x: 0.7, y: 1.1, w: 8.6, h: 2.6, margin: 0, valign: "top", paraSpaceAfter: 10 });
    addTakeaway(pres, s, "AI is a power tool, not autopilot.", { dark: true });
    // Persona milestone callout
    addGlassCard(pres, s, 1.5, 3.8, 7, 0.6);
    s.addText([
      { text: "Persona milestone: ", options: { bold: true, fontFace: D.b, fontSize: 12, color: D.accent } },
      { text: "You're no longer a Viber \u2014 you've let go of the wheel. You're approaching ", options: { fontFace: D.b, fontSize: 12, color: D.textDark } },
      { text: "AI-First", options: { bold: true, fontFace: D.b, fontSize: 12, color: D.accent } },
      { text: ", but you're still working with a single agent. One last leap.", options: { fontFace: D.b, fontSize: 12, color: D.textDark } },
    ], { x: 1.75, y: 3.82, w: 6.5, h: 0.55, margin: 0, valign: "middle" });
    s.addNotes("The fourth bullet matters most \u2014 the 'feels right' trap. Persona milestone: Viber \u2192 approaching AI-First.");
  }

  // --- Breather after Level 4 ---
  breatherSlide(pres,
    "You're managing AI well. Time to orchestrate it.",
    "Final level transition. Single agent \u2192 multi-agent."
  );

  // ============================================================
  // LEVEL 5: "ORCHESTRATE" (Slides 33-40)
  // v2: Skills moved here from Level 3. Onboarding example throughout.
  // ============================================================

  // --- Slide 33: One Chef vs. A Kitchen Brigade ---
  twoCol(pres, {
    dark: true,
    headline: "One Chef vs. A Kitchen Brigade",
    leftTitle: "Level 4: One Chef",
    leftContent: [
      { text: "Single chef, everything solo.", options: { breakLine: true, fontFace: D.b, fontSize: 14, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "Works for single tasks. But a 10-course dinner alone = burnout, mistakes, forgotten appetizer.", options: { fontFace: D.b, fontSize: 13, color: D.muted, italic: true } },
    ],
    rightTitle: "Level 5: Kitchen Brigade",
    rightAccent: D.accent,
    rightContent: [
      { text: "Multiple chefs at stations.", options: { breakLine: true, fontFace: D.b, fontSize: 14, color: D.text, bold: true } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "A classroom of Dorys, each doing one focused step. Each fresh, focused, brilliant at one thing.", options: { fontFace: D.b, fontSize: 13, color: D.text, italic: true } },
    ],
    takeaway: "The trick isn't making one AI smarter. It's making many AIs work together.",
    notes: "LLMs are bad at long chains but excellent at focused tasks. Kitchen brigade leverages the strength. Third Dory touchpoint."
  });

  // --- Slide 34: Prompt Chaining (onboarding-specific + Phase 0) ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "Prompt Chaining", { dark: true });
    // Onboarding chain flow: Research -> Draft -> Review -> You
    const phases = [
      { label: "Agent 1\nResearch", color: D.accent, x: 0.3 },
      { label: "Agent 2\nDraft", color: D.accentDark, x: 2.5 },
      { label: "Agent 3\nReview", color: "0E7490", x: 4.7 },
      { label: "You", color: D.right, x: 6.9 },
    ];
    phases.forEach(p => {
      s.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 1.2, w: 1.6, h: 0.75, fill: { color: p.color }, shadow: sh() });
      s.addText(p.label, { x: p.x, y: 1.2, w: 1.6, h: 0.75, fontFace: D.b, fontSize: 11, color: D.white, bold: true, align: "center", margin: 0, valign: "middle" });
    });
    // Arrows between + output labels
    const arrowXs = [1.95, 4.15, 6.35];
    const outputs = ["structured\nbrief", "polished\nproposal", "final draft\n+ notes"];
    arrowXs.forEach((x, i) => {
      s.addText("\u2192", { x, y: 1.25, w: 0.5, h: 0.65, fontFace: D.b, fontSize: 22, color: D.accent, bold: true, align: "center", margin: 0, valign: "middle" });
      s.addText(outputs[i], { x: x - 0.15, y: 2.1, w: 0.8, h: 0.5, fontFace: D.b, fontSize: 8, color: D.mutedDark, italic: true, align: "center", margin: 0 });
    });
    // Three principles
    const principles = [
      { head: "Single job", body: "Each link has one clear job" },
      { head: "Filtered context", body: "Context is filtered between steps" },
      { head: "Compounding quality", body: "Each step builds on verified output" },
    ];
    principles.forEach((p, i) => {
      const x = 0.5 + i * 3.1;
      addDarkCard(pres, s, x, 2.6, 2.8, 1.0);
      addBar(pres, s, x, 2.6, 1.0, D.accent);
      s.addText(p.head, { x: x + 0.2, y: 2.65, w: 2.4, h: 0.3, fontFace: D.b, fontSize: 12, color: D.textDark, bold: true, margin: 0 });
      s.addText(p.body, { x: x + 0.2, y: 2.95, w: 2.4, h: 0.5, fontFace: D.b, fontSize: 11, color: D.mutedDark, margin: 0 });
    });
    // Phase 0 smell test callout
    addCard(pres, s, 0.5, 3.85, 9, 1.0, "FEF3C7");
    addBar(pres, s, 0.5, 3.85, 1.0, "F59E0B");
    s.addText([
      { text: "Smell test: ", options: { bold: true, fontFace: D.b, fontSize: 11, color: "92400E" } },
      { text: "If your initial prompt and context are getting long and complex, that's a signal you need a Phase 0 \u2014 an agent whose only job is to figure out what the rest of the chain needs.", options: { fontFace: D.b, fontSize: 11, color: "78350F" } },
    ], { x: 0.75, y: 3.9, w: 8.5, h: 0.9, margin: 0, valign: "middle" });
    s.addNotes("The onboarding proposal is now broken into focused steps. Each agent gets only the context it needs. The Phase 0 tip is a practical takeaway.");
  }

  // --- Slide 35: The Chain Rule ---
  singleMsg(pres, {
    main: "Break big tasks into focused steps.\nPass results forward.\nFilter context between each.",
    mainSize: 24,
    sub: "Each agent does one thing well. The chain does everything well.",
    notes: "Distilled principle. The 'write this down' moment."
  });

  // --- Slide 36: Skills: Every Chef's Playbook ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "Skills: Every Chef's Playbook", { dark: true });
    s.addText("How does each Dory in the brigade know what to do?", {
      x: 0.5, y: 1.05, w: 9, h: 0.35, fontFace: D.b, fontSize: 14, color: D.accent, italic: true, margin: 0
    });
    // Definition card
    addDarkCard(pres, s, 0.5, 1.5, 9, 1.2);
    addBar(pres, s, 0.5, 1.5, 1.2, D.accent);
    s.addText([
      { text: "Skills: ", options: { bold: true, fontFace: D.h, fontSize: 16, color: D.accent } },
      { text: "Predefined rules, instructions, templates, and context packages \u2014 injected into the AI's context only when relevant. Think of them as the specialized training manual each chef at each station receives.", options: { fontFace: D.b, fontSize: 13, color: D.textDark } },
    ], { x: 0.75, y: 1.6, w: 8.5, h: 1.0, margin: 0, valign: "middle" });
    // Connection to chains
    addDarkCard(pres, s, 0.5, 3.0, 9, 1.1);
    s.addImage({ data: icons.fish, x: 0.8, y: 3.15, w: 0.6, h: 0.6 });
    s.addText([
      { text: "Agent 1 (Research) gets the \"Research Standards\" skill.\nAgent 3 (Review) gets the \"Leadership Proposals\" and \"Compliance Policy\" skills.", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.textDark } },
      { text: "", options: { breakLine: true, fontSize: 4 } },
      { text: "Write once, use forever. Every time the chain runs, each agent already knows its specialty.", options: { fontFace: D.b, fontSize: 12, color: D.accent, bold: true, italic: true } },
    ], { x: 1.6, y: 3.1, w: 7.6, h: 0.9, margin: 0, valign: "top" });
    // Stat
    s.addText("Organizations investing in context architecture see 50% faster responses and 40% higher quality outputs.", {
      x: 0.5, y: 4.3, w: 9, h: 0.35, fontFace: D.b, fontSize: 11, color: D.accent, italic: true, margin: 0
    });
    addSourceCite(pres, s, "CodeConductor", { dark: true });
    s.addNotes("Skills introduced HERE \u2014 after the reader understands chains and the kitchen brigade. The framing is 'how you program each Dory,' not an abstract concept.");
  }

  // --- Slide 37: Skills in Action (onboarding chain agents) ---
  threeCol(pres, {
    dark: true,
    headline: "Skills in Action",
    columns: [
      { title: "Agent 1 (Research)\n+ \"Research Standards\"", body: "Where to look, what data to prioritize, how to structure the brief.\n\nAlready knows the company's data sources.", accent: D.accent },
      { title: "Agent 2 (Draft)\n+ \"Leadership Proposals\"", body: "The VP's preferred format, tone, level of detail, how to frame costs.\n\nEvery proposal sounds like it was written for this audience.", accent: D.accentDark },
      { title: "Agent 3 (Review)\n+ \"Compliance Policy\"", body: "Regulations, required disclaimers, approval workflows.\n\nCatches policy gaps you didn't know existed.", accent: "0E7490" },
    ],
    takeaway: "With skills, each agent already knows its specialty.",
    notes: "Same onboarding chain from slide 34, now upgraded with skills. The audience sees the concrete difference."
  });

  // --- Slide 38: Why Skills Change Everything ---
  bulletSlide(pres, {
    dark: true,
    headline: "Why Skills Change Everything",
    bullets: [
      { head: "Reusable \u2014", body: "write once, use forever" },
      { head: "Consistent \u2014", body: "every interaction gets the same quality context" },
      { head: "Scalable \u2014", body: "works for 1 person or 10,000" },
      { head: "Focused \u2014", body: "only loads what's relevant, keeping each Dory's attention on track" },
    ],
    stat: "And they compound. Your feedback from each chain run becomes new skills. The brigade gets smarter every time.",
    notes: "The four properties are what make skills transformative vs. just helpful. The compounding beat sets up the payoff in slide 42."
  });

  // --- Slide 39: Same Concept, Many Names ---
  singleMsg(pres, {
    headline: "Same Concept, Many Names",
    main: "\"Custom instructions\" = \"System prompts\"\n= \"Rules\" = \"Skills\"",
    mainSize: 22,
    sub: "Whether triggered by you, the app, or the AI itself differs across tools. The principle is identical.\n\nIf your tool has a way to save reusable instructions, use it. That's a skill.",
    notes: "Prevents thinking skills only exist in one tool. ChatGPT custom instructions, Claude Project rules, system prompts \u2014 all skills."
  });

  // --- Slide 40: GPS, Not Directions ---
  twoCol(pres, {
    dark: true,
    headline: "GPS, Not Directions",
    leftTitle: "Prompt Engineering",
    leftContent: [
      { text: "Giving directions for each individual trip.", options: { breakLine: true, fontFace: D.b, fontSize: 14, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "Effort every time.", options: { breakLine: true, fontFace: D.b, fontSize: 14, color: D.muted, italic: true } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "Doesn't compound.", options: { fontFace: D.b, fontSize: 14, color: D.wrong, bold: true } },
    ],
    rightTitle: "Context Engineering + Skills",
    rightAccent: D.accent,
    rightContent: [
      { text: "Programming a GPS with home, office, preferences, traffic patterns.", options: { breakLine: true, fontFace: D.b, fontSize: 14, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "Gets smarter the more you invest.", options: { breakLine: true, fontFace: D.b, fontSize: 14, color: D.accent, bold: true, italic: true } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "Compounds permanently.", options: { fontFace: D.b, fontSize: 14, color: D.right, bold: true } },
    ],
    takeaway: "Prompt engineering is manual directions. Context engineering + skills is programming a GPS.",
    notes: "Crystallizes the full journey. Each level built on the last. The GPS metaphor ties all five together."
  });

  // ============================================================
  // THE PAYOFF (Slides 41-43)
  // ============================================================

  // --- Slide 41: The Manual Way: 1.5 Hours of You ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "The Manual Way: 1.5 Hours of You", { dark: true });
    const steps = [
      ["1", "Search for onboarding docs and survey data", "20 min"],
      ["2", "Copy-paste into AI, ask for draft", "10 min"],
      ["3", "Read output, realize it's missing budget context", "5 min"],
      ["4", "Find budget data, re-prompt", "15 min"],
      ["5", "Reformat to leadership template", "20 min"],
      ["6", "Ask AI to review draft", "10 min"],
      ["7", "Manually apply suggestions", "15 min"],
    ];
    steps.forEach((st, i) => {
      const y = 1.1 + i * 0.5;
      s.addShape(pres.shapes.OVAL, { x: 0.5, y: y + 0.05, w: 0.35, h: 0.35, fill: { color: D.wrong } });
      s.addText(st[0], { x: 0.5, y: y + 0.05, w: 0.35, h: 0.35, fontFace: D.b, fontSize: 11, color: D.white, bold: true, align: "center", margin: 0, valign: "middle" });
      s.addText(st[1], { x: 1.0, y: y, w: 6.5, h: 0.45, fontFace: D.b, fontSize: 12, color: D.textDark, margin: 0, valign: "middle" });
      s.addText(st[2], { x: 8.0, y: y, w: 1.5, h: 0.45, fontFace: D.b, fontSize: 12, color: D.wrong, bold: true, align: "right", margin: 0, valign: "middle" });
    });
    // Total
    s.addShape(pres.shapes.LINE, { x: 0.5, y: 4.6, w: 9, h: 0, line: { color: D.wrong, width: 2 } });
    s.addText("Total: ~1.5 hours of you being the bottleneck", { x: 0.5, y: 4.7, w: 9, h: 0.4, fontFace: D.h, fontSize: 16, color: D.wrong, bold: true, align: "center", margin: 0 });
    s.addNotes("This is the manual workflow the audience has watched evolve through the entire deck. Now it's at full scale and the pain is vivid.");
  }

  // --- Slide 42: The Chained Way: 15 Minutes of Judgment (with skills compounding) ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "The Chained Way: 15 Minutes of Judgment", { dark: true });
    const agents = [
      { num: "1", label: "Agent 1 \u2014 Research", prompt: "\"Research our onboarding process. Pull metrics from HR, read the last 3 surveys, summarize pain points.\"", output: "\u2192 Research brief", color: D.accent },
      { num: "2", label: "Agent 2 \u2014 Draft", prompt: "\"Using this brief, draft a proposal to reduce onboarding from 4 to 2 weeks. One-page exec brief for VP of People. Be radically honest.\"", output: "\u2192 Polished proposal", color: D.accentDark },
      { num: "3", label: "Agent 3 \u2014 Review", prompt: "\"Review against our leadership template and compliance policy. Flag gaps, format correctly, list items needing human judgment.\"", output: "\u2192 Final draft + notes", color: "0E7490" },
      { num: "4", label: "You \u2014 Judgment", prompt: "Review, adjust, approve. The part only humans can do: judgment.", output: "~15 minutes", color: D.right },
    ];
    agents.forEach((a, i) => {
      const y = 1.1 + i * 0.78;
      addDarkCard(pres, s, 0.5, y, 9, 0.62);
      s.addText(a.label, { x: 0.75, y: y + 0.03, w: 2.2, h: 0.25, fontFace: D.b, fontSize: 11, color: a.color, bold: true, margin: 0 });
      s.addText(a.prompt, { x: 0.75, y: y + 0.28, w: 6.8, h: 0.28, fontFace: D.b, fontSize: 9, color: D.textDark, italic: true, margin: 0 });
      s.addText(a.output, { x: 7.8, y: y + 0.03, w: 1.5, h: 0.52, fontFace: D.b, fontSize: 10, color: a.color, bold: true, margin: 0, valign: "middle", align: "right" });
    });
    // Skills compounding beat + takeaway combined in glass card
    addGlassCard(pres, s, 0.5, 4.15, 9, 0.75);
    s.addText([
      { text: "And next time? ", options: { bold: true, fontFace: D.b, fontSize: 10, color: D.accent } },
      { text: "Your feedback becomes skills. The VP's format \u2192 \"Leadership Proposals\" skill. Compliance gaps \u2192 updated \"Compliance Policy\" skill. The chain gets smarter every time \u2014 even though Dory won't remember, the skills will.", options: { breakLine: true, fontFace: D.b, fontSize: 10, color: D.textDark } },
      { text: "", options: { breakLine: true, fontSize: 4 } },
      { text: "Same proposal. 15 minutes of judgment instead of 1.5 hours of grunt work.", options: { bold: true, fontFace: D.b, fontSize: 11, color: D.accent } },
    ], { x: 0.75, y: 4.18, w: 8.5, h: 0.68, margin: 0, valign: "middle" });
    s.addNotes("Emotional climax. The skills compounding beat is the final Dory touchpoint \u2014 even though Dory forgets, the skills persist.");
  }

  // --- Slide 43: From Asking to Orchestrating (with persona bridges) ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "From Asking to Orchestrating", { dark: true });
    const stages = [
      { label: "AI Skeptic", bridge: "Levels 0\u20131 got you\npast this", color: "9CA3AF" },
      { label: "AI Questioner", bridge: "Levels 2\u20133 got you\npast this", color: "6B7280" },
      { label: "AI Viber", bridge: "Level 4 got you\npast this", color: D.accentDark },
      { label: "AI-First", bridge: "Level 5 brought\nyou here", color: D.accent },
    ];
    // Evolution arrow
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.15, w: 9, h: 0.08, fill: { color: D.accent } });
    stages.forEach((st, i) => {
      const x = 0.5 + i * 2.35;
      addDarkCard(pres, s, x, 1.1, 2.1, 0.85);
      s.addText(st.label, { x: x + 0.1, y: 1.15, w: 1.9, h: 0.75, fontFace: D.h, fontSize: 13, color: st.color, bold: true, align: "center", margin: 0, valign: "middle" });
      // Bridge text below arrow
      s.addText(st.bridge, { x: x + 0.1, y: 2.35, w: 1.9, h: 0.6, fontFace: D.b, fontSize: 10, color: st.color, italic: true, align: "center", margin: 0 });
      // Arrow between stages
      if (i < 3) {
        s.addText("\u2192", { x: 2.35 + i * 2.35, y: 1.2, w: 0.5, h: 0.5, fontFace: D.b, fontSize: 22, color: D.accent, bold: true, align: "center", margin: 0 });
      }
    });
    // Closing statement
    addGlassCard(pres, s, 1.0, 3.2, 8, 1.2);
    s.addText("You walked in as a Questioner.\nThis deck just showed you the path to AI-First.", {
      x: 1.2, y: 3.3, w: 7.6, h: 1.0, fontFace: D.h, fontSize: 18, color: D.accent, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addNotes("Don't rush this \u2014 let the audience see how far they've come. The spectrum from slide 2 is now a journey they've completed.");
  }

  // ============================================================
  // LEVEL UP (Slides 44-45)
  // ============================================================

  // --- Slide 44: Your AI Toolkit ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "Your AI Toolkit", { dark: true });
    const headerRow = [
      { text: "Category", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 12 } },
      { text: "Tools", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 12 } },
      { text: "Notes", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 12 } },
    ];
    const data = [
      ["General purpose", "ChatGPT, Claude, Gemini", "Start here. Free tiers available"],
      ["In your workflow", "Microsoft Copilot, Gemini in Workspace", "Already in your work tools"],
      ["For developers", "GitHub Copilot, Cursor, Claude Code", "AI-first coding"],
      ["For connections", "MCP servers, Zapier AI, custom integrations", "Level 4\u20135 territory"],
    ];
    const tableRows = [headerRow, ...data.map(r => r.map(c => ({ text: c, options: { fontFace: D.b, fontSize: 12, color: D.textDark } })))];
    s.addTable(tableRows, {
      x: 0.5, y: 1.1, w: 9, colW: [2.2, 3.6, 3.2],
      border: { pt: 1, color: "3A3A5E" },
      rowH: [0.45, 0.55, 0.55, 0.55, 0.55],
      autoPage: false
    });
    s.addNotes("Practical, not exhaustive. Know which tool to try first for their role.");
  }

  // --- Slide 45: The 30-Day Challenge (with persona crossings) ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "The 30-Day Challenge", { dark: true });
    s.addText("One task. Four weeks. Four persona crossings.", {
      x: 0.5, y: 1.05, w: 9, h: 0.35, fontFace: D.b, fontSize: 14, color: D.accent, italic: true, margin: 0
    });
    const weeks = [
      { week: "Week 1", persona: "Better Questioner", level: "Level 2", desc: "Specific, structured prompt.\nCompare to manual.\nNotice the phrasing difference.", color: D.accent },
      { week: "Week 2", persona: "Cross into Viber", level: "Level 3", desc: "Add context. Ask AI to ask\nclarifying questions.\nNotice the jump.", color: D.accentDark },
      { week: "Week 3", persona: "Start AI-First", level: "Level 4", desc: "Agent with connections.\nLet it pull context itself.\nNotice what it finds.", color: "0E7490" },
      { week: "Week 4", persona: "Full AI-First", level: "Level 5", desc: "Break into phases.\nChain them. Compare to\nWeek 1. You're orchestrating.", color: D.right },
    ];
    // Timeline bar
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.75, w: 9, h: 0.06, fill: { color: D.accent } });
    weeks.forEach((w, i) => {
      const x = 0.5 + i * 2.35;
      // Node
      s.addShape(pres.shapes.OVAL, { x: x + 0.75, y: 1.55, w: 0.45, h: 0.45, fill: { color: w.color } });
      addDarkCard(pres, s, x, 2.1, 2.1, 2.3);
      addBar(pres, s, x, 2.1, 2.3, w.color);
      s.addText(w.week, { x: x + 0.15, y: 2.15, w: 1.8, h: 0.25, fontFace: D.b, fontSize: 11, color: w.color, bold: true, margin: 0 });
      s.addText(w.persona, { x: x + 0.15, y: 2.38, w: 1.8, h: 0.25, fontFace: D.b, fontSize: 10, color: w.color, italic: true, margin: 0 });
      s.addText(w.level, { x: x + 0.15, y: 2.62, w: 1.8, h: 0.2, fontFace: D.b, fontSize: 9, color: D.mutedDark, margin: 0 });
      s.addText(w.desc, { x: x + 0.15, y: 2.85, w: 1.8, h: 1.3, fontFace: D.b, fontSize: 10, color: D.textDark, margin: 0, valign: "top" });
    });
    addTakeaway(pres, s, "Four weeks. One task. Same journey this deck just took you on.", { dark: true });
    s.addNotes("Most actionable takeaway. Same task across four weeks mirrors the deck's progression. Now framed as persona crossings for motivation.");
  }

  // ============================================================
  // CLOSING (Slides 46-47)
  // ============================================================

  // --- Breather before Closing ---
  breatherSlide(pres,
    "Let's come back to where we started.",
    "Emotional reset before the callback."
  );

  // --- Slide 46: Full Circle (with persona language) ---
  {
    const s = darkSlide(pres);
    s.addText("Full Circle", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontFace: D.h, fontSize: 40, color: D.white, bold: true, align: "center", margin: 0 });
    s.addText("Remember the person spending 45 minutes copy-pasting into ChatGPT?", {
      x: 1.0, y: 1.0, w: 8, h: 0.5, fontFace: D.b, fontSize: 15, color: D.textDark, italic: true, align: "center", margin: 0
    });
    const journey = [
      ["They learned to prompt with specificity", "became a Viber", "Levels 2\u20133"],
      ["They let the agent find what it needed", "started going AI-First", "Level 4"],
      ["They chained the whole workflow", "full AI-First", "Level 5"],
      ["They were a Questioner who became AI-First", "", ""],
    ];
    journey.forEach((l, i) => {
      const y = 1.7 + i * 0.55;
      s.addText(l[0], { x: 1.0, y, w: 4.5, h: 0.4, fontFace: D.b, fontSize: 13, color: D.textDark, margin: 0 });
      if (l[1]) s.addText(l[1], { x: 5.5, y, w: 2.5, h: 0.4, fontFace: D.b, fontSize: 12, color: D.accent, italic: true, margin: 0 });
      if (l[2]) s.addText(l[2], { x: 8.0, y, w: 1.5, h: 0.4, fontFace: D.b, fontSize: 11, color: D.mutedDark, margin: 0, align: "right" });
    });
    s.addShape(pres.shapes.LINE, { x: 1.5, y: 3.85, w: 7, h: 0, line: { color: D.accent, width: 1 } });
    s.addText("The same task. Two minutes.\nThat's the trick. Now you know it too.", {
      x: 1.0, y: 4.0, w: 8, h: 0.8, fontFace: D.h, fontSize: 20, color: D.accent, bold: true, align: "center", margin: 0
    });
    s.addNotes("Emotional close. The callback lands the entire arc. Persona language makes it concrete \u2014 the person from slide 1 went from Questioner to AI-First. Pause after 'Now you know it too.'");
  }

  // --- Slide 47: Now Go Try It ---
  {
    const s = darkSlide(pres);
    s.addText("The secret was never in the AI.\nIt was in knowing how to work with it.", {
      x: 1.0, y: 1.2, w: 8, h: 1.5, fontFace: D.h, fontSize: 30, color: D.white, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addShape(pres.shapes.LINE, { x: 3.0, y: 3.0, w: 4, h: 0, line: { color: D.accent, width: 2 } });
    s.addText("Now go try it \u2014 start with one task, this week.", {
      x: 1.0, y: 3.3, w: 8, h: 0.8, fontFace: D.b, fontSize: 20, color: D.accent, bold: true, italic: true, align: "center", margin: 0
    });
    s.addText("Getting Agents to Give Up Their Secrets", {
      x: 1.0, y: 4.6, w: 8, h: 0.4, fontFace: D.b, fontSize: 12, color: D.mutedDark, align: "center", margin: 0
    });
    s.addNotes("Clean exit. One task, this week \u2014 not 'transform everything.'");
  }

  // ============================================================
  // WRITE FILE
  // ============================================================
  console.log("Writing presentation...");
  await pres.writeFile({ fileName: "Getting-Agents-to-Give-Up-Their-Secrets.pptx" });
  console.log("Done! Created Getting-Agents-to-Give-Up-Their-Secrets.pptx (52 slides, v3)");
}

main().catch(err => { console.error("Error:", err); process.exit(1); });
