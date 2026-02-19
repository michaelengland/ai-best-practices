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
  // Backgrounds
  darkBg: "0F0F1A", lightBg: "F8F9FA",
  // Cards
  darkCard: "1A1A3E", card: "FFFFFF",
  // Accent
  accent: "00B4D8", accentDark: "0891B2",
  // Text on dark
  textDark: "E0E4E8", mutedDark: "94A3B8",
  // Text on light
  text: "1E293B", muted: "64748B",
  // White (headlines on dark)
  white: "FFFFFF",
  // Wrong/Right
  wrong: "E63946", wrongBg: "FEE2E2", right: "2D936C", rightBg: "DCFCE7",
  // Table
  tableBorder: "D1D5DB", tableHead: "E5E7EB",
  // Fonts
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
const sh = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12 });

function darkSlide(pres) {
  const s = pres.addSlide();
  s.background = { color: D.darkBg };
  s.addShape(pres.shapes.OVAL, {
    x: 5, y: 2.5, w: 8, h: 6,
    fill: { color: D.accent, transparency: 96 }
  });
  return s;
}
function lightSlide(pres) { const s = pres.addSlide(); s.background = { color: D.lightBg }; return s; }

function addHeadline(s, text, opts = {}) {
  const isDark = opts.dark || false;
  const cleanOpts = { ...opts };
  delete cleanOpts.dark;
  s.addText(text, {
    x: 0.5, y: 0.3, w: 9, h: 0.8, fontFace: D.h, fontSize: cleanOpts.fontSize || 40,
    bold: true, color: isDark ? D.white : D.text, align: cleanOpts.align || "left",
    margin: 0, ...cleanOpts
  });
}

// Tier 1: Takeaway callout — the one line the audience should remember
function addTakeaway(pres, s, text, opts = {}) {
  const isDark = opts.dark || false;
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 4.5, w: 9.4, h: 0.45,
    fill: { color: D.accent, transparency: isDark ? 88 : 92 }
  });
  s.addText(text, {
    x: 0.5, y: 4.5, w: 9, h: 0.45, fontFace: D.b, fontSize: 14,
    color: D.accent, bold: true, margin: 0, valign: "middle"
  });
}

// Tier 2: Separator line
function addFooterSep(pres, s, opts = {}) {
  const isDark = opts.dark || false;
  s.addShape(pres.shapes.LINE, {
    x: 0.5, y: 5.1, w: 9, h: 0,
    line: { color: isDark ? "FFFFFF" : "94A3B8", width: 0.5, transparency: isDark ? 92 : 80 }
  });
}

// Tier 3: Source citation — metadata only
function addSourceCite(pres, s, text, opts = {}) {
  addFooterSep(pres, s, opts);
  s.addText(text, {
    x: 0.5, y: 5.15, w: 9, h: 0.3, fontFace: D.b, fontSize: 9,
    color: D.muted, align: "right", margin: 0
  });
}

// LEGACY SHIMS — remove after all slides migrated to takeaway/source
function addFooter(s, text) {
  s.addText(text, { x: 0.5, y: 5.0, w: 9, h: 0.45, fontFace: D.b, fontSize: 11, color: D.muted, italic: true, margin: 0 });
}
function addSource(s, text) {
  s.addText(text, { x: 0.5, y: 5.25, w: 9, h: 0.25, fontFace: D.b, fontSize: 9, color: D.muted, margin: 0 });
}

function addCard(pres, s, x, y, w, h, fill) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: fill || D.card }, shadow: sh() });
}
function addBar(pres, s, x, y, h, color) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h, fill: { color: color || D.accent } });
}
function addDarkCard(pres, s, x, y, w, h) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: D.darkCard }, shadow: sh() });
}
function addGlassCard(pres, s, x, y, w, h) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: "FFFFFF", transparency: 95 }, line: { color: "FFFFFF", width: 0.5, transparency: 85 } });
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

// Wrong/Right helper for Level 2 iterations
function wrongRight(pres, d) {
  const s = lightSlide(pres);
  s.addText([
    { text: d.headline, options: { bold: true, fontFace: D.h, fontSize: 36, color: D.text } },
    { text: " \u2014 " + d.subtitle, options: { italic: true, fontFace: D.b, fontSize: 16, color: D.muted } }
  ], { x: 0.5, y: 0.25, w: 9, h: 0.55, margin: 0 });
  // Left
  addCard(pres, s, 0.5, 1.0, 4.25, 3.3, D.wrongBg); addBar(pres, s, 0.5, 1.0, 3.3, D.wrong);
  s.addText("THE WRONG WAY", { x: 0.75, y: 1.05, w: 3.8, h: 0.3, fontFace: D.b, fontSize: 10, color: D.wrong, bold: true, margin: 0 });
  s.addText([
    { text: d.wrongPrompt, options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.text, italic: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: d.wrongLabel, options: { fontFace: D.b, fontSize: 12, color: "374151" } }
  ], { x: 0.75, y: 1.4, w: 3.8, h: 2.7, fontFace: D.b, fontSize: 13, color: D.text, margin: 0, valign: "top" });
  // Right
  addCard(pres, s, 5.25, 1.0, 4.25, 3.3, D.rightBg); addBar(pres, s, 5.25, 1.0, 3.3, D.right);
  s.addText("THE FIX", { x: 5.5, y: 1.05, w: 3.8, h: 0.3, fontFace: D.b, fontSize: 10, color: D.right, bold: true, margin: 0 });
  s.addText([
    { text: d.rightPrompt, options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.text, italic: true } },
    { text: "", options: { breakLine: true, fontSize: 6 } },
    { text: d.rightLabel, options: { fontFace: D.b, fontSize: 12, color: "374151" } }
  ], { x: 5.5, y: 1.4, w: 3.8, h: 2.7, fontFace: D.b, fontSize: 13, color: D.text, margin: 0, valign: "top" });
  // Legacy support during migration
  if (d.takeaway) addTakeaway(pres, s, d.takeaway);
  else if (d.footer) addFooter(s, d.footer);
  if (d.source) addSourceCite(pres, s, d.source);
  else if (d.sources) addSource(s, d.sources);
  s.addNotes(d.notes || "");
  return s;
}

// Two-column comparison helper
function twoCol(pres, d) {
  const isDark = d.dark || false;
  const s = isDark ? darkSlide(pres) : lightSlide(pres);
  addHeadline(s, d.headline, { dark: isDark });
  const cardH = 3.7;
  const cardFill = isDark ? D.darkCard : D.card;
  const bodyColor = isDark ? D.textDark : D.text;
  addCard(pres, s, 0.5, 1.2, 4.25, cardH, d.leftBg || cardFill);
  if (d.leftAccent) addBar(pres, s, 0.5, 1.2, cardH, d.leftAccent);
  const lx = d.leftAccent ? 0.75 : 0.7;
  if (d.leftTitle) s.addText(d.leftTitle, { x: lx, y: 1.3, w: 3.85, h: 0.35, fontFace: D.h, fontSize: 18, color: d.leftTitleColor || bodyColor, bold: true, margin: 0 });
  const ly = d.leftTitle ? 1.7 : 1.3, lh = d.leftTitle ? 3.0 : 3.4;
  s.addText(d.leftContent, { x: lx, y: ly, w: 3.85, h: lh, fontFace: D.b, fontSize: 15, color: bodyColor, margin: 0, valign: "top" });
  addCard(pres, s, 5.25, 1.2, 4.25, cardH, d.rightBg || cardFill);
  if (d.rightAccent) addBar(pres, s, 5.25, 1.2, cardH, d.rightAccent);
  const rx = d.rightAccent ? 5.5 : 5.45;
  if (d.rightTitle) s.addText(d.rightTitle, { x: rx, y: 1.3, w: 3.85, h: 0.35, fontFace: D.h, fontSize: 18, color: d.rightTitleColor || bodyColor, bold: true, margin: 0 });
  const ry = d.rightTitle ? 1.7 : 1.3, rh = d.rightTitle ? 3.0 : 3.4;
  s.addText(d.rightContent, { x: rx, y: ry, w: 3.85, h: rh, fontFace: D.b, fontSize: 15, color: bodyColor, margin: 0, valign: "top" });
  // Legacy support during migration
  if (d.takeaway) addTakeaway(pres, s, d.takeaway, { dark: isDark });
  else if (d.footer) addFooter(s, d.footer);
  if (d.source) addSourceCite(pres, s, d.source, { dark: isDark });
  else if (d.sources) addSource(s, d.sources);
  s.addNotes(d.notes || "");
  return s;
}

// Bullet list helper
function bulletSlide(pres, d) {
  const isDark = d.dark || false;
  const s = isDark ? darkSlide(pres) : lightSlide(pres);
  addHeadline(s, d.headline, { dark: isDark });
  const bodyColor = isDark ? D.textDark : D.text;
  const items = d.bullets.map((b, i) => {
    if (typeof b === "string") return { text: b, options: { bullet: true, breakLine: i < d.bullets.length - 1, fontFace: D.b, fontSize: 14, color: bodyColor } };
    return { text: "", options: { breakLine: true, fontSize: 6 } }; // spacer
  });
  // Build rich text array with bold headers if items are objects
  const sz = d.bullets.length <= 5 ? 18 : 15;
  const richItems = [];
  d.bullets.forEach((b, i) => {
    if (typeof b === "object" && b.head) {
      richItems.push({ text: b.head + " ", options: { bold: true, fontFace: D.b, fontSize: sz, color: bodyColor, bullet: true, breakLine: false } });
      richItems.push({ text: b.body, options: { fontFace: D.b, fontSize: sz, color: bodyColor, breakLine: i < d.bullets.length - 1 } });
    } else {
      richItems.push({ text: b, options: { bullet: true, fontFace: D.b, fontSize: sz, color: bodyColor, breakLine: i < d.bullets.length - 1 } });
    }
  });
  s.addText(richItems, { x: 0.7, y: 1.1, w: 8.6, h: 3.7, margin: 0, valign: "middle", paraSpaceAfter: 10 });
  if (d.stat) {
    s.addText(d.stat, { x: 0.5, y: 4.5, w: 9, h: 0.35, fontFace: D.b, fontSize: 11, color: D.accent, italic: true, margin: 0 });
  }
  // Legacy support during migration
  if (d.takeaway) addTakeaway(pres, s, d.takeaway, { dark: isDark });
  else if (d.footer) addFooter(s, d.footer);
  if (d.source) addSourceCite(pres, s, d.source, { dark: isDark });
  else if (d.sources) addSource(s, d.sources);
  s.addNotes(d.notes || "");
  return s;
}

// Single message / centered statement
function singleMsg(pres, d) {
  const isDark = d.dark !== undefined ? d.dark : true;
  const s = isDark ? darkSlide(pres) : lightSlide(pres);
  const textColor = isDark ? D.textDark : D.text;
  const subColor = isDark ? D.mutedDark : D.muted;
  if (d.headline) addHeadline(s, d.headline, { dark: isDark });
  const mainY = d.headline ? 1.4 : (d.sub ? 1.7 : 2.0);
  s.addText(d.main, {
    x: 1.0, y: mainY, w: 8, h: 1.6,
    fontFace: D.h, fontSize: d.mainSize || 26, color: textColor, bold: true, align: "center", margin: 0, valign: "middle"
  });
  if (d.sub) {
    s.addText(d.sub, {
      x: 1.0, y: mainY + 1.7, w: 8, h: 1.2,
      fontFace: D.b, fontSize: 16, color: subColor, italic: true, align: "center", margin: 0, valign: "top"
    });
  }
  // Legacy support during migration
  if (d.takeaway) addTakeaway(pres, s, d.takeaway, { dark: isDark });
  else if (d.footer) addFooter(s, d.footer);
  if (d.source) addSourceCite(pres, s, d.source, { dark: isDark });
  else if (d.sources) addSource(s, d.sources);
  s.addNotes(d.notes || "");
  return s;
}

// Section divider
function sectionDivider(pres, d) {
  const s = darkSlide(pres);
  if (d.level) {
    s.addText(d.level, { x: 0.5, y: 1.0, w: 9, h: 0.5, fontFace: D.b, fontSize: 11, color: D.mutedDark, bold: true, margin: 0, align: "center", charSpacing: 4 });
  }
  s.addText(d.title, { x: 0.5, y: 1.6, w: 9, h: 1.2, fontFace: D.h, fontSize: 54, color: D.white, bold: true, align: "center", margin: 0 });
  if (d.subtitle) {
    s.addText(d.subtitle, { x: 1.0, y: 2.9, w: 8, h: 0.6, fontFace: D.b, fontSize: 20, color: D.accent, italic: true, align: "center", margin: 0 });
  }
  if (d.small) {
    s.addText(d.small, { x: 1.5, y: 3.6, w: 7, h: 0.8, fontFace: D.b, fontSize: 13, color: "999999", italic: true, align: "center", margin: 0 });
  }
  s.addNotes(d.notes || "");
  return s;
}

// Three-column helper
function threeCol(pres, d) {
  const isDark = d.dark || false;
  const s = isDark ? darkSlide(pres) : lightSlide(pres);
  addHeadline(s, d.headline, { dark: isDark });
  const bodyColor = isDark ? D.textDark : D.text;
  const cardFill = isDark ? D.darkCard : D.card;
  d.columns.forEach((col, i) => {
    const x = 0.5 + i * 3.1;
    addCard(pres, s, x, 1.1, 2.8, 3.6, cardFill);
    addBar(pres, s, x, 1.1, 3.6, col.accent || D.accent);
    if (col.icon) s.addImage({ data: col.icon, x: x + 1.0, y: 1.25, w: 0.6, h: 0.6 });
    s.addText(col.title, { x: x + 0.2, y: col.icon ? 2.0 : 1.25, w: 2.4, h: 0.5, fontFace: D.h, fontSize: 14, color: bodyColor, bold: true, align: "center", margin: 0, valign: "top" });
    s.addText(col.body, { x: x + 0.2, y: col.icon ? 2.5 : 1.8, w: 2.4, h: col.icon ? 1.9 : 2.7, fontFace: D.b, fontSize: 12, color: bodyColor, margin: 0, valign: "top" });
  });
  // Legacy support during migration
  if (d.takeaway) addTakeaway(pres, s, d.takeaway, { dark: isDark });
  else if (d.footer) addFooter(s, d.footer);
  if (d.source) addSourceCite(pres, s, d.source, { dark: isDark });
  else if (d.sources) addSource(s, d.sources);
  s.addNotes(d.notes || "");
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
  // LEVEL 0: "WHERE ARE YOU?" (Slides 1-6)
  // ============================================================

  // --- Slide 1: Title ---
  {
    const s = darkSlide(pres);
    s.addText("Getting Agents to\nGive Up Their Secrets", {
      x: 0.5, y: 0.3, w: 9, h: 1.4, fontFace: D.h, fontSize: 44, color: D.white, bold: true, align: "center", margin: 0
    });
    s.addText("A guide to AI that actually works \u2014 from confused to in control", {
      x: 1.5, y: 1.7, w: 7, h: 0.5, fontFace: D.b, fontSize: 16, color: D.accent, italic: true, align: "center", margin: 0
    });
    addCard(pres, s, 1.0, 2.5, 8, 2.4, D.darkCard);
    addBar(pres, s, 1.0, 2.5, 2.4, D.accent);
    s.addText([
      { text: "\"Last month, I watched someone spend 45 minutes going back and forth with ChatGPT trying to write a one-page summary. Copy, paste, 'no that's not right', copy, paste, 'closer but...'", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.textDark, italic: true } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "The same task took 2 minutes once they knew the trick. This deck is about the trick.\"", options: { fontFace: D.b, fontSize: 14, color: D.accent, bold: true, italic: true } }
    ], { x: 1.25, y: 2.6, w: 7.5, h: 2.2, margin: 0, valign: "top" });
    s.addNotes("Let the hook land. This is the emotional anchor \u2014 the entire closing (slide 51) calls back to this person. Pause after 'This deck is about the trick.'");
  }

  // --- Slide 2: Where Are You on the Spectrum? ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "Where Are You on the Spectrum?");
    const stages = [
      { label: "AI Skeptic", desc: "Avoids AI or\nrefuses to engage", icon: icons.banG, color: "9CA3AF" },
      { label: "AI Questioner", desc: "Has ChatGPT, uses it\nlike a search engine", icon: icons.searchG, color: "6B7280" },
      { label: "AI Viber", desc: "Uses AI tools, then\nfixes output by hand", icon: icons.magicG, color: D.accentDark },
      { label: "AI-First", desc: "Everything through AI;\ncontext, agents, workflows", icon: icons.rocketG, color: D.accent }
    ];
    stages.forEach((st, i) => {
      const x = 0.5 + i * 2.35;
      addCard(pres, s, x, 1.1, 2.1, 3.0);
      s.addShape(pres.shapes.OVAL, { x: x + 0.65, y: 1.25, w: 0.8, h: 0.8, fill: { color: D.lightBg } });
      s.addImage({ data: st.icon, x: x + 0.8, y: 1.4, w: 0.5, h: 0.5 });
      s.addText(st.label, { x: x + 0.1, y: 2.2, w: 1.9, h: 0.4, fontFace: D.h, fontSize: 13, color: st.color, bold: true, align: "center", margin: 0 });
      s.addText(st.desc, { x: x + 0.1, y: 2.6, w: 1.9, h: 0.8, fontFace: D.b, fontSize: 11, color: D.muted, align: "center", margin: 0, valign: "top" });
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.2, w: 4.6, h: 0.03, fill: { color: D.accent } });
    s.addText("most people are here", { x: 0.5, y: 4.25, w: 4.6, h: 0.3, fontFace: D.b, fontSize: 10, color: D.accent, italic: true, align: "center", margin: 0 });
    for (let i = 0; i < 3; i++) {
      s.addText("\u2192", { x: 2.35 + i * 2.35, y: 1.9, w: 0.5, h: 0.4, fontFace: D.b, fontSize: 22, color: D.accent, bold: true, align: "center", margin: 0 });
    }
    s.addText("These are your milestones. This deck\u2019s levels are the steps that move you to the right. Find yourself \u2014 by the end, we\u2019ll have moved you.", {
      x: 0.5, y: 4.55, w: 9, h: 0.45, fontFace: D.b, fontSize: 10, color: D.muted, italic: true, align: "center", margin: 0
    });
    s.addNotes("Most readers will self-identify at Questioner. The personas are identity milestones \u2014 the deck's levels are the how. This framing pays off at slide 43 when we come full circle.");
  }

  // --- Slide 3: Most People Are Still in the Shallow End ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "Most People Are Still in the Shallow End", { dark: true });
    addDarkCard(pres, s, 1.5, 1.2, 7, 2.8);
    s.addText("1 billion+", { x: 1.5, y: 1.3, w: 7, h: 1.2, fontFace: D.h, fontSize: 64, color: D.accent, bold: true, align: "center", margin: 0 });
    s.addText("people use AI tools monthly", { x: 1.5, y: 2.3, w: 7, h: 0.4, fontFace: D.b, fontSize: 18, color: D.textDark, align: "center", margin: 0 });
    s.addShape(pres.shapes.LINE, { x: 3.5, y: 2.85, w: 3, h: 0, line: { color: D.accent, width: 1 } });
    s.addText("Fewer than 2% pay for premium", { x: 1.5, y: 3.0, w: 7, h: 0.4, fontFace: D.b, fontSize: 16, color: D.wrong, bold: true, align: "center", margin: 0 });
    s.addText("AI has mass reach \u2014 but almost nobody is going deep.", { x: 1.5, y: 3.4, w: 7, h: 0.4, fontFace: D.b, fontSize: 13, color: D.mutedDark, italic: true, align: "center", margin: 0 });
    addSourceCite(pres, s, "DataReportal 2026 \u00b7 Reuters", { dark: true });
    s.addNotes("Two points: 1) AI is already everywhere \u2014 you're not early, 2) almost nobody is using it seriously. The opportunity gap is enormous.");
  }

  // --- Slide 4: We've Seen This Movie Before ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "We've Seen This Movie Before", { dark: true });
    const eras = [
      { era: "PCs", decade: "1980s", stat: "US productivity growth\ndoubled (0.6% \u2192 1.0%/yr)", src: "Fed Reserve" },
      { era: "Internet", decade: "1990s", stat: "Global business online\n7% \u2192 30%", src: "Visual Capitalist" },
      { era: "Smartphones", decade: "2010s", stat: "", src: "" },
      { era: "AI", decade: "Now", stat: "$7T projected GDP\nimpact over 10 years", src: "Goldman Sachs" }
    ];
    // Timeline line
    s.addShape(pres.shapes.LINE, { x: 0.8, y: 2.3, w: 8.4, h: 0, line: { color: D.accent, width: 3 } });
    eras.forEach((e, i) => {
      const x = 0.5 + i * 2.35;
      // Circle node
      s.addShape(pres.shapes.OVAL, { x: x + 0.8, y: 2.05, w: 0.5, h: 0.5, fill: { color: i === 3 ? D.accent : D.accentDark } });
      s.addText(e.decade, { x: x + 0.1, y: 1.2, w: 1.9, h: 0.5, fontFace: D.b, fontSize: 12, color: D.mutedDark, align: "center", margin: 0 });
      s.addText(e.era, { x: x + 0.1, y: 1.55, w: 1.9, h: 0.4, fontFace: D.h, fontSize: 16, color: D.textDark, bold: true, align: "center", margin: 0 });
      if (e.stat) {
        s.addText(e.stat, { x: x + 0.1, y: 2.7, w: 1.9, h: 0.8, fontFace: D.b, fontSize: 11, color: D.textDark, align: "center", margin: 0 });
        s.addText(e.src, { x: x + 0.1, y: 3.5, w: 1.9, h: 0.3, fontFace: D.b, fontSize: 9, color: D.mutedDark, italic: true, align: "center", margin: 0 });
      } else {
        s.addText("(the pattern speaks\nfor itself)", { x: x + 0.1, y: 2.7, w: 1.9, h: 0.6, fontFace: D.b, fontSize: 11, color: D.mutedDark, italic: true, align: "center", margin: 0 });
      }
    });
    addTakeaway(pres, s, "Every era had skeptics. Every era punished those who waited.", { dark: true });
    s.addNotes("Don't dwell on individual stats. The point is the pattern: every era had skeptics, every era punished those who waited.");
  }

  // --- Slide 5: The AI Moment Is Now ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "The AI Moment Is Now", { dark: true });
    const stats = [
      { num: "80%", label: "of Fortune 500 use\nactive AI agents", src: "Microsoft Security Blog,\nFeb 2026" },
      { num: "$2.6\u20134.4T", label: "annually in\nadded value", src: "McKinsey Global Institute" },
      { num: "Only 31%", label: "of prioritized AI use cases\nin full production", src: "ServiceNow" }
    ];
    stats.forEach((st, i) => {
      const x = 0.5 + i * 3.1;
      addDarkCard(pres, s, x, 1.1, 2.8, 3.0);
      addBar(pres, s, x, 1.1, 3.0, D.accent);
      s.addText(st.num, { x: x + 0.2, y: 1.3, w: 2.4, h: 0.8, fontFace: D.h, fontSize: 36, color: D.accent, bold: true, align: "center", margin: 0 });
      s.addText(st.label, { x: x + 0.2, y: 2.1, w: 2.4, h: 0.7, fontFace: D.b, fontSize: 13, color: D.textDark, align: "center", margin: 0 });
      s.addText(st.src, { x: x + 0.2, y: 3.0, w: 2.4, h: 0.6, fontFace: D.b, fontSize: 9, color: D.mutedDark, italic: true, align: "center", margin: 0, valign: "bottom" });
    });
    addTakeaway(pres, s, "The gap between 'we have AI' and 'we use AI well' is your opportunity.", { dark: true });
    s.addNotes("The third stat is the killer. The gap between 'we have AI' and 'we're using AI well' is enormous.");
  }

  // --- Slide 6: The Barrier to Entry Is a Conversation ---
  singleMsg(pres, {
    main: "The core skill for AI is talking \u2014\nand you already have it.",
    sub: "You're not missing the skill. You're just using it wrong.\n\nThis deck is your walkthrough. Each section levels you up.",
    notes: "The permission-granting moment. AI's interface is natural language. The audience already has the prerequisite."
  });

  // --- Breather after Level 0 ---
  breatherSlide(pres,
    "Alright \u2014 let's see what most people get wrong.",
    "Pause. Let the pacing shift."
  );

  // ============================================================
  // LEVEL 1: "KNOW YOUR TOOLS" (Slides 7-13)
  // ============================================================

  // --- Slide 7: The Buzzword Blizzard ---
  {
    const s = darkSlide(pres);
    const words = [
      ["ChatGPT", 0.3, 0.2, 32, true], ["LLM", 5.5, 0.3, 36, true], ["GPT", 3.0, 0.9, 28, true],
      ["Claude", 7.5, 0.6, 28, true], ["Gemini", 0.5, 1.8, 24, true], ["MCP", 8.0, 1.8, 22, true],
      ["tokens", 2.5, 2.2, 18, false], ["agents", 4.5, 1.6, 26, true], ["RAG", 6.5, 2.5, 20, true],
      ["fine-tuning", 1.5, 3.0, 16, false], ["embeddings", 3.8, 3.2, 14, false], ["prompts", 7.0, 3.0, 22, true],
      ["copilot", 0.5, 3.8, 20, true], ["AGI", 5.0, 3.5, 18, true], ["transformer", 2.8, 1.5, 16, false],
      ["neural network", 5.8, 1.2, 14, false], ["deep learning", 0.3, 0.7, 14, false], ["Anthropic", 7.8, 3.5, 16, false],
      ["OpenAI", 0.5, 1.1, 20, true], ["inference", 3.5, 2.8, 14, false], ["training", 8.2, 0.3, 14, false],
      ["parameters", 0.5, 4.2, 14, false], ["context window", 4.5, 4.0, 16, false], ["hallucination", 2.0, 4.0, 18, true],
      ["grounding", 7.0, 4.0, 14, false], ["retrieval", 5.5, 2.8, 14, false], ["vector database", 7.8, 2.8, 12, false],
      ["Llama", 3.0, 3.8, 16, false], ["open-source", 6.0, 3.8, 14, false], ["API", 3.8, 0.2, 22, true],
      ["Google DeepMind", 4.0, 4.3, 12, false], ["multi-modal", 7.3, 4.3, 12, false],
    ];
    words.forEach(([word, x, y, size, bold]) => {
      const color = bold ? D.white : D.mutedDark;
      s.addText(word, { x, y, w: 2.0, h: 0.5, fontFace: D.b, fontSize: size, color, bold, margin: 0 });
    });
    s.addText("Yeah. Exactly.", { x: 3.0, y: 5.0, w: 4, h: 0.4, fontFace: D.b, fontSize: 14, color: D.mutedDark, italic: true, align: "center", margin: 0 });
    s.addNotes("Makes the reader feel validated. The overwhelm is real. Don't explain anything yet.");
  }

  // --- Slide 8: Let's Answer Some of These ---
  {
    const s = darkSlide(pres);
    // Dimmed word cloud — positioned to avoid callout box areas
    const words = [
      ["LLM", 4.0, 0.2, 28, true], ["GPT", 0.3, 0.2, 24, true],
      ["Claude", 8.0, 0.3, 20, true], ["Gemini", 0.5, 2.2, 18, false],
      ["tokens", 4.2, 2.2, 16, false], ["copilot", 0.5, 4.2, 16, false],
      ["AGI", 4.5, 4.2, 16, true], ["training", 8.2, 2.2, 14, false],
    ];
    words.forEach(([word, x, y, size, bold]) => {
      s.addText(word, { x, y, w: 2.0, h: 0.4, fontFace: D.b, fontSize: size, color: "2A2A4E", bold, margin: 0 });
    });
    // Question callout boxes
    const questions = [
      ["What's the difference between\nChatGPT and GPT?", 0.5, 0.8],
      ["Is Claude the same\nas ChatGPT?", 5.5, 1.2],
      ["What even is\nan agent?", 1.5, 3.0],
      ["Do I need to know\nwhat a token is?", 6.0, 3.2],
    ];
    questions.forEach(([q, x, y]) => {
      addCard(pres, s, x, y, 3.2, 0.9, D.accent);
      s.addText(q, { x: x + 0.15, y, w: 2.9, h: 0.9, fontFace: D.b, fontSize: 12, color: D.white, bold: true, margin: 0, valign: "middle" });
    });
    s.addText("We're going to make this simple.", { x: 2.5, y: 4.8, w: 5, h: 0.5, fontFace: D.b, fontSize: 16, color: D.textDark, italic: true, align: "center", margin: 0 });
    s.addNotes("The questions represent common confusions. The audience should feel like someone is finally asking their questions.");
  }

  // --- Slide 9: The AI Stack, Simply ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "The AI Stack, Simply");
    const layers = [
      { label: "App", desc: "ChatGPT, Claude, Copilot. This is what you interact with.", icon: icons.desktop, color: D.accent },
      { label: "Agent", desc: "The brain + tools. The brain has ideas; the agent has hands.", icon: icons.robot, color: D.accentDark },
      { label: "API", desc: "How software talks to the brain. You don't need to know this exists.", icon: icons.plug, color: "4B5563" },
      { label: "LLM", desc: "A massive AI model trained on text. You never touch this directly.", icon: icons.brain, color: "6B7280" },
    ];
    layers.forEach((l, i) => {
      const y = 1.1 + i * 0.95;
      const w = 8.0 - i * 0.6;
      const x = (10 - w) / 2;
      addCard(pres, s, x, y, w, 0.8);
      addBar(pres, s, x, y, 0.8, l.color);
      s.addImage({ data: l.icon, x: x + 0.2, y: y + 0.15, w: 0.5, h: 0.5 });
      s.addText(l.label, { x: x + 0.85, y: y + 0.05, w: 1.2, h: 0.35, fontFace: D.h, fontSize: 16, color: D.text, bold: true, margin: 0 });
      s.addText("(" + (["the thing you use", "the worker", "the phone line", "the brain"][i]) + ")", { x: x + 0.85, y: y + 0.35, w: 1.2, h: 0.35, fontFace: D.b, fontSize: 10, color: D.muted, italic: true, margin: 0 });
      s.addText(l.desc, { x: x + 2.2, y: y + 0.1, w: w - 2.6, h: 0.6, fontFace: D.b, fontSize: 12, color: D.text, margin: 0, valign: "middle" });
    });
    s.addText("You use apps \u2192 apps use agents \u2192 agents call APIs \u2192 APIs talk to LLMs", {
      x: 0.5, y: 4.95, w: 9, h: 0.35, fontFace: D.b, fontSize: 12, color: D.accent, italic: true, align: "center", margin: 0
    });
    s.addNotes("Most people only need the top two layers (app and agent). The bottom two are for developers.");
  }

  // --- Slide 10: Who Makes What ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "Who Makes What");
    const headerRow = [
      { text: "Company", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 13 } },
      { text: "LLM", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 13 } },
      { text: "Agent / App", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 13 } },
      { text: "You Know Them As", options: { fill: { color: D.accent }, color: D.white, bold: true, fontFace: D.b, fontSize: 13 } },
    ];
    const rows = [
      ["OpenAI", "GPT", "ChatGPT", "The one everyone uses"],
      ["Anthropic", "Claude", "Claude.ai, Claude Code", "The \"thinking\" one"],
      ["Google", "Gemini", "Gemini in Workspace, Android", "The one in your Google apps"],
      ["Microsoft", "(uses OpenAI's)", "Copilot across Office, GitHub", "The one in your work tools"],
    ];
    const tableRows = [headerRow, ...rows.map(r => r.map(c => ({ text: c, options: { fontFace: D.b, fontSize: 12, color: D.text } })))];
    s.addTable(tableRows, {
      x: 0.5, y: 1.1, w: 9, colW: [1.8, 1.5, 3.0, 2.7],
      border: { pt: 1, color: D.tableBorder },
      rowH: [0.45, 0.55, 0.55, 0.55, 0.55],
      autoPage: false
    });
    s.addNotes("Microsoft doesn't make the brain \u2014 they build tools around someone else's. This is why the agent/app layer matters more for most people.");
  }

  // --- Slide 11: Where the Real Action Is ---
  twoCol(pres, {
    headline: "Where the Real Action Is",
    leftTitle: "LLM Side",
    leftTitleColor: D.muted,
    leftContent: [
      { text: "Costs $billions to train", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 13, color: D.muted } },
      { text: "Takes months per model", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 13, color: D.muted } },
      { text: "Only ~5 companies can do it", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 13, color: D.muted } },
      { text: "Innovation is slow and expensive", options: { bullet: true, fontFace: D.b, fontSize: 13, color: D.muted } },
    ],
    rightTitle: "Agent / App Side",
    rightTitleColor: D.accent,
    rightAccent: D.accent,
    rightContent: [
      { text: "This is just software", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 13, color: D.text, bold: true } },
      { text: "Innovation has exploded", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 13, color: D.text, bold: true } },
      { text: "Anyone can build agents and apps", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 13, color: D.text, bold: true } },
      { text: "New tools appear weekly", options: { bullet: true, fontFace: D.b, fontSize: 13, color: D.text, bold: true } },
    ],
    takeaway: "The real action is in how models are used \u2014 and that's where you come in.",
    notes: "Reframes the AI news cycle. The biggest user-facing improvements come from better agents, apps, and workflows."
  });

  // --- Slide 12: Software Engineering Was First ---
  twoCol(pres, {
    headline: "Software Engineering Was First",
    leftTitle: "The Headline",
    leftAccent: D.accent,
    leftContent: [
      { text: "41%", options: { breakLine: true, fontFace: D.h, fontSize: 36, color: D.accent, bold: true } },
      { text: "of all code is now AI-generated", options: { breakLine: true, fontFace: D.b, fontSize: 14, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "\"Vibe coding\" went from joke to industry practice in under a year", options: { fontFace: D.b, fontSize: 12, color: D.muted, italic: true } },
    ],
    rightTitle: "The Twist",
    rightAccent: D.wrong,
    rightContent: [
      { text: "Developers who felt 20% faster actually took", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.text } },
      { text: "19% longer", options: { breakLine: true, fontFace: D.h, fontSize: 28, color: D.wrong, bold: true } },
      { text: "once debugging and cleanup were included.", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "The gap between 'uses AI tools' and 'uses AI tools well' is massive.", options: { fontFace: D.b, fontSize: 12, color: D.muted, italic: true } },
    ],
    takeaway: "Engineers went first, made all the mistakes, and learned what works. This deck teaches you those lessons.",
    source: "Second Talent \u00b7 Addy Osmani \u00b7 Karpathy coined 'vibe coding' Feb 2025",
    notes: "The twist stat is the most important. It reframes the deck's purpose."
  });

  // --- Slide 13: Your Job Is Next ---
  {
    const s = darkSlide(pres);
    addHeadline(s, "Your Job Is Next", { dark: true });
    addDarkCard(pres, s, 1.0, 1.1, 8, 2.0);
    s.addText("10x", { x: 1.0, y: 1.2, w: 3.0, h: 1.2, fontFace: D.h, fontSize: 72, color: D.accent, bold: true, align: "center", margin: 0 });
    s.addText([
      { text: "Microsoft 365 Copilot DAU increased", options: { breakLine: true, fontFace: D.b, fontSize: 16, color: D.textDark } },
      { text: "10x year-over-year (Q2 2026)", options: { fontFace: D.b, fontSize: 16, color: D.accent, bold: true } },
    ], { x: 4.0, y: 1.3, w: 4.8, h: 1.0, margin: 0, valign: "middle" });
    // Tool icons row
    const toolNames = ["Copilot in Excel", "Copilot in Word", "Gemini in Docs", "Claude in Workflows"];
    toolNames.forEach((name, i) => {
      const x = 1.2 + i * 2.0;
      s.addShape(pres.shapes.RECTANGLE, { x, y: 3.5, w: 1.7, h: 0.7, fill: { color: D.darkCard }, shadow: sh() });
      s.addText(name, { x, y: 3.5, w: 1.7, h: 0.7, fontFace: D.b, fontSize: 10, color: D.textDark, align: "center", margin: 0, valign: "middle" });
    });
    addTakeaway(pres, s, "If you were a Skeptic, you're now a Questioner \u2014 you know what AI is.", { dark: true });
    s.addNotes("Persona milestone: Skeptic \u2192 Questioner. The 10x DAU growth shows the hockey stick is happening NOW. Transition: Level 2 \u2014 let's learn how to actually talk to them...");
  }

  // --- Breather after Level 1 ---
  breatherSlide(pres,
    "You've got the basics. Now let's give you the skills.",
    "Transition from Level 1 to Level 2."
  );

  // ============================================================
  // LEVEL 2: "TALK TO AI PROPERLY" (Slides 14-21)
  // ============================================================

  // --- Slide 14: Section Divider ---
  sectionDivider(pres, {
    level: "LEVEL 2",
    title: "Prompt Engineering",
    subtitle: "or, How to Stop Getting Useless Answers",
    small: "Most people type something vague, get something generic, and blame the AI. Let's fix that.",
    notes: "Mental-model shift. The audience likely thinks output quality is about the AI. This section proves it's about the input."
  });

  // --- Slide 15: The Task ---
  twoCol(pres, {
    headline: "The Task",
    leftTitle: "The Prompt",
    leftAccent: D.muted,
    leftContent: [
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "\"Write me a proposal for improving our onboarding process.\"", options: { fontFace: D.b, fontSize: 14, color: D.text, italic: true } },
    ],
    rightTitle: "The Output",
    rightContent: [
      { text: "Generic proposal with bland headers,\nplaceholder content, no specifics,\nno awareness of your company...", options: { fontFace: D.b, fontSize: 13, color: D.muted, italic: true } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "(truncated \u2014 you've seen this before)", options: { fontFace: D.b, fontSize: 11, color: D.muted } },
    ],
    takeaway: "Sound familiar? Let's see how changing only the words transforms the output.",
    notes: "The output should look recognizably mediocre. Don't dwell on it \u2014 establish the baseline."
  });

  // --- Slides 16-20: Five Wrong/Right iterations ---
  const iterations = [
    {
      headline: "Assign a Role", subtitle: "vs. talking to a stranger",
      wrongPrompt: "\"Write me a proposal for improving our onboarding process.\"",
      wrongLabel: "The AI responds as a generic assistant \u2014 competent but surface-level. Like asking a random person on the street to write your proposal.",
      rightPrompt: "\"You are a senior HR operations consultant who specializes in onboarding optimization for mid-to-large companies.\n\nWrite me a proposal for improving our onboarding process.\"",
      rightLabel: "More relevant frameworks, industry terminology, realistic timelines \u2014 just from telling the AI who it is.",
      takeaway: "A role frames everything that follows. Always start here.",
      notes: "The same vague request produces noticeably different output. The role sets the AI's default tone, depth, and perspective."
    },
    {
      headline: "Be Specific", subtitle: "vs. the vague ask",
      wrongPrompt: "\"Write me a proposal for improving our onboarding process.\"",
      wrongLabel: "No audience, no constraints, no direction. The AI guesses everything.",
      rightPrompt: "\"Write a proposal for reducing new hire onboarding time from 4 weeks to 2 weeks, aimed at the VP of People, in a format suitable for a leadership review meeting. Keep it under 2 pages.\"",
      rightLabel: "Same information. Dramatically different result.",
      takeaway: "Treat it like briefing a colleague, not searching Google.",
      notes: "Specificity in the request = specificity in the output. We didn't give new information \u2014 we described what we actually wanted."
    },
    {
      headline: "One Task at a Time", subtitle: "vs. the kitchen sink",
      wrongPrompt: "\"Write the proposal, also draft an email to the team about it, and create a budget spreadsheet, and summarize the key risks, and...\"",
      wrongLabel: "Five requests tangled together. Tries everything, nails nothing.",
      rightPrompt: "\"Structure the proposal with:\n(1) Problem statement\n(2) Proposed solution\n(3) Expected outcomes\n(4) Resource requirements\n(5) Timeline\"",
      rightLabel: "One task. Clear structure. The AI mirrors your organization.",
      takeaway: "Structured asks produce structured outputs.",
      source: "CodeSignal",
      notes: "The kitchen-sink prompt is one of the most common mistakes. If you have 5 tasks, send 5 prompts."
    },
    {
      headline: "Power Keywords", subtitle: "vs. leading the witness",
      wrongPrompt: "\"Don't you think reducing onboarding to 2 weeks would be great for the company?\"",
      wrongLabel: "Leading question \u2192 sycophantic agreement. Echo chamber.",
      rightPrompt: "Add: \"Be radically honest about potential challenges. Think step by step. Challenge my assumptions if they seem flawed. If you're uncertain about any claim, flag it explicitly.\"",
      rightLabel: "The AI pushes back on a weak assumption and flags an uncertain statistic.",
      takeaway: "Permit uncertainty \u2014 an AI that says 'I'm not sure' is more useful than one that confidently makes things up.",
      source: "OpenAI \u00b7 DigitalOcean",
      notes: "\"Radically honest,\" \"think step by step,\" \"challenge my assumptions,\" and \"flag uncertainty\" are four of the highest-leverage keyword modifiers."
    },
    {
      headline: "Define the Output", subtitle: "vs. hoping for the best",
      wrongPrompt: "No format guidance \u2192 random format.\n\n5-page essay when you needed bullets.\n\n20 minutes reformatting.",
      wrongLabel: "You wouldn't ask a designer for 'something nice.'",
      rightPrompt: "\"Write this as a one-page executive brief with bullet points. Use data-driven language. Assume the reader has 2 minutes and no prior context.\"\n\nFor extra precision, include a short example of what good output looks like.",
      rightLabel: "Defining format, tone, length, and audience assumptions produces immediately usable output.",
      takeaway: "A quick example beats a long description.",
      notes: "Every iteration changed wording. We never changed what the AI knew. That's the setup for Level 3."
    },
  ];
  iterations.forEach(d => wrongRight(pres, d));

  // --- Slide 21: The 5x Prompt ---
  twoCol(pres, {
    headline: "The 5x Prompt",
    leftTitle: "Before",
    leftContent: [
      { text: "", options: { breakLine: true, fontSize: 10 } },
      { text: "\"Write me a proposal for improving our onboarding process.\"", options: { fontFace: D.b, fontSize: 16, color: D.muted, italic: true } },
    ],
    rightTitle: "Final Prompt",
    rightAccent: D.accent,
    rightContent: [
      { text: "Role + Specificity + Structure + Keywords + Output Definition", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.accent, bold: true } },
      { text: "", options: { breakLine: true, fontSize: 4 } },
      { text: "\"You are a senior HR operations consultant. Write a proposal for reducing onboarding from 4 to 2 weeks. Aimed at VP of People, leadership review format, under 2 pages. Structure: problem, solution, outcomes, resources, timeline. Be radically honest, challenge assumptions, flag uncertainty. One-page exec brief with bullets, data-driven language.\"", options: { fontFace: D.b, fontSize: 11, color: D.text, italic: true } },
    ],
    takeaway: "Same task. Same background info. Dramatically different result \u2014 purely from how the request was phrased.",
    notes: "This is the hinge of the deck. Celebrate the progress, then plant the seed that there's a bigger lever. The transition should feel like a cliffhanger."
  });

  // ============================================================
  // LEVEL 3: "FEED AI SMARTER" (Slides 22-26)
  // v2: Leads with proof (Same Prompt, Different Context) BEFORE Dory
  // ============================================================

  // --- Slide 22: Same Prompt, Different Context ---
  twoCol(pres, {
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
    footer: "Same prompt. Different information. Dramatically different result.",
    sources: "Sources: Elastic; KDnuggets",
    notes: "The clearest Level 2/3 boundary demonstration. The prompt didn't change. The context did. This is the 'aha' \u2014 it's not about the words, it's about what the AI knows."
  });

  // --- Slide 23: Meet Your AI Colleague (Dory) ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "Meet Your AI Colleague");
    // Dory illustration area (fish icon as placeholder)
    addCard(pres, s, 0.5, 1.1, 3.5, 3.4);
    s.addShape(pres.shapes.OVAL, { x: 1.3, y: 1.6, w: 1.8, h: 1.8, fill: { color: "E0F2FE" } });
    s.addImage({ data: icons.fish, x: 1.6, y: 1.9, w: 1.2, h: 1.2 });
    s.addText("Dory", { x: 0.5, y: 3.5, w: 3.5, h: 0.4, fontFace: D.h, fontSize: 20, color: D.accent, bold: true, align: "center", margin: 0 });
    s.addText("Your AI Colleague", { x: 0.5, y: 3.85, w: 3.5, h: 0.3, fontFace: D.b, fontSize: 12, color: D.muted, italic: true, align: "center", margin: 0 });
    // Text right
    addCard(pres, s, 4.3, 1.1, 5.2, 3.4);
    addBar(pres, s, 4.3, 1.1, 3.4, D.accent);
    s.addText([
      { text: "Your AI is like Dory:", options: { breakLine: true, fontFace: D.b, fontSize: 15, color: D.text, bold: true } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "Incredibly smart. Genuinely wants to help. Remembers absolutely nothing between conversations.", options: { breakLine: true, fontFace: D.b, fontSize: 14, color: D.text, italic: true } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "In Level 2, we got better at asking. But Dory's biggest problem isn't that she doesn't understand what you're saying \u2014 it's that she doesn't know what you know.", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.muted } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "You already SAW context transform output. Dory explains WHY.", options: { fontFace: D.b, fontSize: 12, color: D.accent, bold: true } },
    ], { x: 4.55, y: 1.3, w: 4.7, h: 3.0, margin: 0, valign: "top" });
    addFooter(s, "Level 2 = words. Level 3 = information.");
    s.addNotes("NOW the Dory metaphor has a reason. The reader just saw what context does (slide 22); Dory explains the mechanism. First of five Dory touchpoints.");
  }

  // --- Slide 24: The Attention Problem ---
  threeCol(pres, {
    headline: "The Attention Problem",
    columns: [
      { title: "Too Much Context", body: "Dory gets lost \u2014 buries important stuff in noise. Key details get drowned out by irrelevant information.", accent: D.wrong },
      { title: "Contradictory Info", body: "Dory gets confused \u2014 tries to satisfy everything at once. Output becomes incoherent.", accent: "F59E0B" },
      { title: "Broad Instructions", body: "Dory wanders off \u2014 loses focus partway through. Starts strong, finishes weak.", accent: D.accentDark },
    ],
    footer: "The problem isn't that AI is dumb. The problem is that we're feeding it wrong.",
    sources: "57% of orgs have AI agents in production, but 32% cite quality as top barrier \u2014 Source: Sombra",
    notes: "Reframes 'AI gives bad answers.' It's almost never the model \u2014 it's the context."
  });

  // --- Slide 25: Let AI Tell You What It Needs ---
  twoCol(pres, {
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
    footer: "The single highest-leverage technique: let AI close its own context gaps.",
    sources: "Source: Anthropic/Claude",
    notes: "The AI does context engineering for you. This addresses the attention problem from slide 24."
  });

  // --- Slide 26: The Goldilocks Principle + Persona Milestone ---
  {
    const s = lightSlide(pres);
    s.addText("Not too much. Not too little.\nThe right context at the right time.", {
      x: 1.0, y: 1.0, w: 8, h: 1.6,
      fontFace: D.h, fontSize: 26, color: D.text, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addText("Prompt engineering tweaks the question.\nContext engineering builds the knowledge base.", {
      x: 1.0, y: 2.6, w: 8, h: 1.0,
      fontFace: D.b, fontSize: 15, color: D.muted, italic: true, align: "center", margin: 0, valign: "top"
    });
    // Persona milestone callout
    addCard(pres, s, 1.5, 3.8, 7, 1.0, "E0F2FE");
    addBar(pres, s, 1.5, 3.8, 1.0, D.accent);
    s.addText([
      { text: "Persona milestone: ", options: { bold: true, fontFace: D.b, fontSize: 12, color: D.accent } },
      { text: "You've outgrown Questioner. You prompt well, you understand context, you get good results. You're a ", options: { fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "Viber", options: { bold: true, fontFace: D.b, fontSize: 12, color: D.accentDark } },
      { text: " \u2014 but you're still doing all the work manually.", options: { fontFace: D.b, fontSize: 12, color: D.text } },
    ], { x: 1.75, y: 3.85, w: 6.5, h: 0.9, margin: 0, valign: "middle" });
    addSource(s, "Source: CIO");
    s.addNotes("Crystallizes Level 3. Persona milestone: Questioner \u2192 Viber. The reader knows they're making progress, but the work is still manual.");
  }

  // ============================================================
  // LEVEL 4: "LET AI DRIVE" (Slides 27-32)
  // v2: Trust/Verify now at END of this section. MCP folded inline.
  // ============================================================

  // --- Slide 27: The Copy-Paste Trap ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "The Copy-Paste Trap");
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
      s.addText(st.text, { x: 1.7, y: y, w: 4.1, h: 0.6, fontFace: D.b, fontSize: 14, color: D.text, margin: 0, valign: "middle" });
      if (i < 3) s.addText("\u2193", { x: 1.0, y: y + 0.55, w: 0.5, h: 0.25, fontFace: D.b, fontSize: 14, color: D.muted, align: "center", margin: 0 });
    });
    // Problems card
    addCard(pres, s, 6.0, 1.2, 3.5, 2.8, D.wrongBg);
    addBar(pres, s, 6.0, 1.2, 2.8, D.wrong);
    s.addText([
      { text: "Problems:", options: { breakLine: true, bold: true, fontFace: D.b, fontSize: 13, color: D.wrong } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "You're the bottleneck", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "You don't know what context AI needs", options: { bullet: true, breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "You're doing grunt work", options: { bullet: true, fontFace: D.b, fontSize: 12, color: D.text } },
    ], { x: 6.25, y: 1.3, w: 3.0, h: 2.6, margin: 0, valign: "top" });
    addFooter(s, "You're using a Ferrari to carry groceries.");
    s.addNotes("The copy-paste cycle is so universal it's invisible. Drawing it as a diagram makes people see it.");
  }

  // --- Slide 28: Hand Dory the Keys ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "Hand Dory the Keys");
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
      s.addText(st.text, { x: 1.7, y: y, w: 4.1, h: 0.6, fontFace: D.b, fontSize: 14, color: D.text, margin: 0, valign: "middle" });
      if (i < 3) s.addText("\u2193", { x: 1.0, y: y + 0.55, w: 0.5, h: 0.25, fontFace: D.b, fontSize: 14, color: D.muted, align: "center", margin: 0 });
    });
    // Insight card
    addCard(pres, s, 6.0, 1.2, 3.5, 2.8, D.rightBg);
    addBar(pres, s, 6.0, 1.2, 2.8, D.right);
    s.addText([
      { text: "Same Dory. Same memory issues.", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.text, bold: true } },
      { text: "", options: { breakLine: true, fontSize: 6 } },
      { text: "But now she has hands, eyes, and a to-do list.", options: { breakLine: true, fontFace: D.b, fontSize: 13, color: D.right, italic: true } },
      { text: "", options: { breakLine: true, fontSize: 8 } },
      { text: "One great chef who finds ingredients, preps, cooks, and plates.", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 4 } },
      { text: "You taste-test at the end.", options: { fontFace: D.b, fontSize: 12, color: D.accent, bold: true } },
    ], { x: 6.25, y: 1.3, w: 3.0, h: 2.6, margin: 0, valign: "top" });
    addFooter(s, "Human moved from 'operator at every step' to 'reviewer at the end.'");
    s.addNotes("Visual contrast with slide 27 is the whole point. Chef metaphor sets up Level 5.");
  }

  // --- Slide 29: Connections Are Everything (with MCP inline) ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "Connections Are Everything");
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
      addCard(pres, s, x, y, 2.8, 1.3);
      s.addShape(pres.shapes.OVAL, { x: x + 0.15, y: y + 0.25, w: 0.6, h: 0.6, fill: { color: "E0F2FE" } });
      s.addImage({ data: c.icon, x: x + 0.25, y: y + 0.35, w: 0.4, h: 0.4 });
      s.addText(c.label, { x: x + 0.9, y: y + 0.15, w: 1.7, h: 0.35, fontFace: D.b, fontSize: 13, color: D.text, bold: true, margin: 0 });
      s.addText(c.desc, { x: x + 0.9, y: y + 0.5, w: 1.7, h: 0.5, fontFace: D.b, fontSize: 11, color: D.muted, margin: 0 });
    });
    addFooter(s, "Think of connections like giving Dory a phone, a filing cabinet, and a library card.");
    s.addNotes("MCP gets a single-line mention ('USB-C for AI') rather than a dedicated slide. Full MCP detail available in appendix for Q&A.");
  }

  // --- Slide 30: The Proposal \u2014 With Connections ---
  twoCol(pres, {
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
    footer: "The agent found context you wouldn't have thought to provide.",
    notes: "The forgotten budget memo is the killer detail. Everyone has this story."
  });

  // --- Slide 31: Trust, But Verify (moved from Level 3 to here) ---
  bulletSlide(pres, {
    headline: "Trust, But Verify",
    bullets: [
      { head: "Never trust numbers you didn't provide.", body: "If it can't cite a source, it made it up." },
      { head: "Verify claims against sources.", body: "AI output = first draft, not final answer." },
      { head: "Use AI for drafts, not decisions.", body: "Your judgment is the last step." },
    ],
    footer: "Dory is brilliant and helpful. Dory also sometimes remembers things that never happened. Love Dory. Fact-check Dory.",
    notes: "NOW this slide lands. The reader just watched us hand AI the keys to documents, databases, and workflows. They should be feeling 'Wait, can I trust it with all that?' This addresses the unease at exactly the moment it's felt."
  });

  // --- Slide 32: When to Keep Your Hands on the Wheel + Persona Milestone ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "When to Keep Your Hands on the Wheel");
    const bullets = [
      { head: "Sensitive/confidential data \u2014", body: "only approved/enterprise tools" },
      { head: "Final legal/compliance language \u2014", body: "AI drafts, humans approve" },
      { head: "Anything where being wrong has serious consequences", body: "" },
      { head: "When the AI's answer 'feels right' but you can't verify it \u2014", body: "the most dangerous moment" },
    ];
    const richItems = [];
    bullets.forEach((b, i) => {
      richItems.push({ text: b.head + " ", options: { bold: true, fontFace: D.b, fontSize: 15, color: D.text, bullet: true, breakLine: false } });
      richItems.push({ text: b.body, options: { fontFace: D.b, fontSize: 15, color: D.text, breakLine: i < bullets.length - 1 } });
    });
    s.addText(richItems, { x: 0.7, y: 1.1, w: 8.6, h: 2.6, margin: 0, valign: "top", paraSpaceAfter: 10 });
    addFooter(s, "AI is a power tool, not autopilot. Surgeons trust scalpels. They still look where they cut.");
    // Persona milestone callout
    addCard(pres, s, 1.5, 3.8, 7, 0.95, "E0F2FE");
    addBar(pres, s, 1.5, 3.8, 0.95, D.accent);
    s.addText([
      { text: "Persona milestone: ", options: { bold: true, fontFace: D.b, fontSize: 12, color: D.accent } },
      { text: "You're no longer a Viber \u2014 you've let go of the wheel. You're approaching ", options: { fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "AI-First", options: { bold: true, fontFace: D.b, fontSize: 12, color: D.accent } },
      { text: ", but you're still working with a single agent. One last leap.", options: { fontFace: D.b, fontSize: 12, color: D.text } },
    ], { x: 1.75, y: 3.85, w: 6.5, h: 0.85, margin: 0, valign: "middle" });
    s.addNotes("The fourth bullet matters most \u2014 the 'feels right' trap. Persona milestone: Viber \u2192 approaching AI-First.");
  }

  // ============================================================
  // LEVEL 5: "ORCHESTRATE" (Slides 33-40)
  // v2: Skills moved here from Level 3. Onboarding example throughout.
  // ============================================================

  // --- Slide 33: One Chef vs. A Kitchen Brigade ---
  twoCol(pres, {
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
    footer: "The trick isn't making one AI smarter. It's making many AIs work together.",
    notes: "LLMs are bad at long chains but excellent at focused tasks. Kitchen brigade leverages the strength. Third Dory touchpoint."
  });

  // --- Slide 34: Prompt Chaining (onboarding-specific + Phase 0) ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "Prompt Chaining");
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
      s.addText(outputs[i], { x: x - 0.15, y: 2.0, w: 0.8, h: 0.5, fontFace: D.b, fontSize: 8, color: D.muted, italic: true, align: "center", margin: 0 });
    });
    // Three principles
    const principles = [
      { head: "Single job", body: "Each link has one clear job" },
      { head: "Filtered context", body: "Context is filtered between steps" },
      { head: "Compounding quality", body: "Each step builds on verified output" },
    ];
    principles.forEach((p, i) => {
      const x = 0.5 + i * 3.1;
      addCard(pres, s, x, 2.6, 2.8, 1.0);
      addBar(pres, s, x, 2.6, 1.0, D.accent);
      s.addText(p.head, { x: x + 0.2, y: 2.65, w: 2.4, h: 0.3, fontFace: D.b, fontSize: 12, color: D.text, bold: true, margin: 0 });
      s.addText(p.body, { x: x + 0.2, y: 2.95, w: 2.4, h: 0.5, fontFace: D.b, fontSize: 11, color: D.muted, margin: 0 });
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
    const s = lightSlide(pres);
    addHeadline(s, "Skills: Every Chef's Playbook");
    s.addText("How does each Dory in the brigade know what to do?", {
      x: 0.5, y: 0.85, w: 9, h: 0.35, fontFace: D.b, fontSize: 14, color: D.accent, italic: true, margin: 0
    });
    // Definition card
    addCard(pres, s, 0.5, 1.3, 9, 1.2);
    addBar(pres, s, 0.5, 1.3, 1.2, D.accent);
    s.addText([
      { text: "Skills: ", options: { bold: true, fontFace: D.h, fontSize: 16, color: D.accent } },
      { text: "Predefined rules, instructions, templates, and context packages \u2014 injected into the AI's context only when relevant. Think of them as the specialized training manual each chef at each station receives.", options: { fontFace: D.b, fontSize: 13, color: D.text } },
    ], { x: 0.75, y: 1.4, w: 8.5, h: 1.0, margin: 0, valign: "middle" });
    // Connection to chains
    addCard(pres, s, 0.5, 2.8, 9, 1.3);
    s.addImage({ data: icons.fish, x: 0.8, y: 3.0, w: 0.6, h: 0.6 });
    s.addText([
      { text: "Agent 1 (Research) gets the \"Research Standards\" skill.\nAgent 3 (Review) gets the \"Leadership Proposals\" and \"Compliance Policy\" skills.", options: { breakLine: true, fontFace: D.b, fontSize: 12, color: D.text } },
      { text: "", options: { breakLine: true, fontSize: 4 } },
      { text: "Write once, use forever. Every time the chain runs, each agent already knows its specialty.", options: { fontFace: D.b, fontSize: 12, color: D.accent, bold: true, italic: true } },
    ], { x: 1.6, y: 2.9, w: 7.6, h: 1.1, margin: 0, valign: "top" });
    // Stat
    s.addText("Organizations investing in context architecture see 50% faster responses and 40% higher quality outputs.", {
      x: 0.5, y: 4.3, w: 9, h: 0.35, fontFace: D.b, fontSize: 11, color: D.accent, italic: true, margin: 0
    });
    addSource(s, "Source: CodeConductor");
    s.addNotes("Skills introduced HERE \u2014 after the reader understands chains and the kitchen brigade. The framing is 'how you program each Dory,' not an abstract concept.");
  }

  // --- Slide 37: Skills in Action (onboarding chain agents) ---
  threeCol(pres, {
    headline: "Skills in Action",
    columns: [
      { title: "Agent 1 (Research)\n+ \"Research Standards\"", body: "Where to look, what data to prioritize, how to structure the brief.\n\nAlready knows the company's data sources.", accent: D.accent },
      { title: "Agent 2 (Draft)\n+ \"Leadership Proposals\"", body: "The VP's preferred format, tone, level of detail, how to frame costs.\n\nEvery proposal sounds like it was written for this audience.", accent: D.accentDark },
      { title: "Agent 3 (Review)\n+ \"Compliance Policy\"", body: "Regulations, required disclaimers, approval workflows.\n\nCatches policy gaps you didn't know existed.", accent: "0E7490" },
    ],
    footer: "Without skills, each agent starts from scratch. With skills, each agent already knows its specialty.",
    notes: "Same onboarding chain from slide 34, now upgraded with skills. The audience sees the concrete difference."
  });

  // --- Slide 38: Why Skills Change Everything ---
  bulletSlide(pres, {
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
    footer: "Level 2 made you better at asking. Level 3 taught AI what you know. Level 4 let AI drive. Level 5 put a whole team on the road \u2014 skills are the map each driver follows.",
    notes: "Crystallizes the full journey. Each level built on the last. The GPS metaphor ties all five together."
  });

  // ============================================================
  // THE PAYOFF (Slides 41-43)
  // ============================================================

  // --- Slide 41: The Manual Way: 1.5 Hours of You ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "The Manual Way: 1.5 Hours of You");
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
      const y = 1.05 + i * 0.5;
      s.addShape(pres.shapes.OVAL, { x: 0.5, y: y + 0.05, w: 0.35, h: 0.35, fill: { color: D.wrong } });
      s.addText(st[0], { x: 0.5, y: y + 0.05, w: 0.35, h: 0.35, fontFace: D.b, fontSize: 11, color: D.white, bold: true, align: "center", margin: 0, valign: "middle" });
      s.addText(st[1], { x: 1.0, y: y, w: 6.5, h: 0.45, fontFace: D.b, fontSize: 12, color: D.text, margin: 0, valign: "middle" });
      s.addText(st[2], { x: 8.0, y: y, w: 1.5, h: 0.45, fontFace: D.b, fontSize: 12, color: D.wrong, bold: true, align: "right", margin: 0, valign: "middle" });
    });
    // Total
    s.addShape(pres.shapes.LINE, { x: 0.5, y: 4.6, w: 9, h: 0, line: { color: D.wrong, width: 2 } });
    s.addText("Total: ~1.5 hours of you being the bottleneck", { x: 0.5, y: 4.7, w: 9, h: 0.4, fontFace: D.h, fontSize: 16, color: D.wrong, bold: true, align: "center", margin: 0 });
    s.addNotes("This is the manual workflow the audience has watched evolve through the entire deck. Now it's at full scale and the pain is vivid.");
  }

  // --- Slide 42: The Chained Way: 15 Minutes of Judgment (with skills compounding) ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "The Chained Way: 15 Minutes of Judgment");
    const agents = [
      { num: "1", label: "Agent 1 \u2014 Research", prompt: "\"Research our onboarding process. Pull metrics from HR, read the last 3 surveys, summarize pain points.\"", output: "\u2192 Research brief", color: D.accent },
      { num: "2", label: "Agent 2 \u2014 Draft", prompt: "\"Using this brief, draft a proposal to reduce onboarding from 4 to 2 weeks. One-page exec brief for VP of People. Be radically honest.\"", output: "\u2192 Polished proposal", color: D.accentDark },
      { num: "3", label: "Agent 3 \u2014 Review", prompt: "\"Review against our leadership template and compliance policy. Flag gaps, format correctly, list items needing human judgment.\"", output: "\u2192 Final draft + notes", color: "0E7490" },
      { num: "4", label: "You \u2014 Judgment", prompt: "Review, adjust, approve. The part only humans can do: judgment.", output: "~15 minutes", color: D.right },
    ];
    agents.forEach((a, i) => {
      const y = 1.1 + i * 0.78;
      addCard(pres, s, 0.5, y, 9, 0.62);
      addBar(pres, s, 0.5, y, 0.62, a.color);
      s.addText(a.label, { x: 0.75, y: y + 0.03, w: 2.2, h: 0.25, fontFace: D.b, fontSize: 11, color: a.color, bold: true, margin: 0 });
      s.addText(a.prompt, { x: 0.75, y: y + 0.28, w: 6.8, h: 0.28, fontFace: D.b, fontSize: 9, color: D.text, italic: true, margin: 0 });
      s.addText(a.output, { x: 7.8, y: y + 0.03, w: 1.5, h: 0.52, fontFace: D.b, fontSize: 10, color: a.color, bold: true, margin: 0, valign: "middle", align: "right" });
    });
    // Skills compounding beat
    addCard(pres, s, 0.5, 4.3, 9, 0.65, "E0F2FE");
    addBar(pres, s, 0.5, 4.3, 0.65, D.accent);
    s.addText([
      { text: "And next time? ", options: { bold: true, fontFace: D.b, fontSize: 10, color: D.accent } },
      { text: "Your feedback becomes skills. The VP's format \u2192 \"Leadership Proposals\" skill. Compliance gaps \u2192 updated \"Compliance Policy\" skill. The chain gets smarter every time \u2014 even though Dory won't remember, the skills will.", options: { fontFace: D.b, fontSize: 10, color: D.text } },
    ], { x: 0.75, y: 4.33, w: 8.5, h: 0.58, margin: 0, valign: "middle" });
    addFooter(s, "Same proposal. 15 minutes of judgment instead of 1.5 hours of grunt work.");
    s.addNotes("Emotional climax. The skills compounding beat is the final Dory touchpoint \u2014 even though Dory forgets, the skills persist.");
  }

  // --- Slide 43: From Asking to Orchestrating (with persona bridges) ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "From Asking to Orchestrating");
    const stages = [
      { label: "AI Skeptic", bridge: "Levels 0\u20131 got you\npast this", color: "9CA3AF" },
      { label: "AI Questioner", bridge: "Levels 2\u20133 got you\npast this", color: "6B7280" },
      { label: "AI Viber", bridge: "Level 4 got you\npast this", color: D.accentDark },
      { label: "AI-First", bridge: "Level 5 brought\nyou here", color: D.accent },
    ];
    // Evolution arrow
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.1, w: 9, h: 0.08, fill: { color: D.accent } });
    stages.forEach((st, i) => {
      const x = 0.5 + i * 2.35;
      addCard(pres, s, x, 1.1, 2.1, 0.85);
      s.addText(st.label, { x: x + 0.1, y: 1.15, w: 1.9, h: 0.75, fontFace: D.h, fontSize: 13, color: st.color, bold: true, align: "center", margin: 0, valign: "middle" });
      // Bridge text below arrow
      s.addText(st.bridge, { x: x + 0.1, y: 2.3, w: 1.9, h: 0.6, fontFace: D.b, fontSize: 10, color: st.color, italic: true, align: "center", margin: 0 });
      // Arrow between stages
      if (i < 3) {
        s.addText("\u2192", { x: 2.35 + i * 2.35, y: 1.2, w: 0.5, h: 0.5, fontFace: D.b, fontSize: 22, color: D.accent, bold: true, align: "center", margin: 0 });
      }
    });
    // Closing statement
    addCard(pres, s, 1.0, 3.2, 8, 1.2, "E0F2FE");
    s.addText("You walked in as a Questioner.\nThis deck just showed you the path to AI-First.", {
      x: 1.2, y: 3.3, w: 7.6, h: 1.0, fontFace: D.h, fontSize: 18, color: D.accent, bold: true, align: "center", margin: 0, valign: "middle"
    });
    addFooter(s, "Full-circle moment. The spectrum from slide 2, but now each persona is bridged to the levels that got you past it.");
    s.addNotes("Don't rush this \u2014 let the audience see how far they've come. The spectrum from slide 2 is now a journey they've completed.");
  }

  // ============================================================
  // LEVEL UP (Slides 44-45)
  // ============================================================

  // --- Slide 44: Your AI Toolkit ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "Your AI Toolkit");
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
    const tableRows = [headerRow, ...data.map(r => r.map(c => ({ text: c, options: { fontFace: D.b, fontSize: 12, color: D.text } })))];
    s.addTable(tableRows, {
      x: 0.5, y: 1.1, w: 9, colW: [2.2, 3.6, 3.2],
      border: { pt: 1, color: D.tableBorder },
      rowH: [0.45, 0.55, 0.55, 0.55, 0.55],
      autoPage: false
    });
    s.addNotes("Practical, not exhaustive. Know which tool to try first for their role.");
  }

  // --- Slide 45: The 30-Day Challenge (with persona crossings) ---
  {
    const s = lightSlide(pres);
    addHeadline(s, "The 30-Day Challenge");
    s.addText("One task. Four weeks. Four persona crossings.", {
      x: 0.5, y: 0.85, w: 9, h: 0.35, fontFace: D.b, fontSize: 14, color: D.accent, italic: true, margin: 0
    });
    const weeks = [
      { week: "Week 1", persona: "Better Questioner", level: "Level 2", desc: "Specific, structured prompt.\nCompare to manual.\nNotice the phrasing difference.", color: D.accent },
      { week: "Week 2", persona: "Cross into Viber", level: "Level 3", desc: "Add context. Ask AI to ask\nclarifying questions.\nNotice the jump.", color: D.accentDark },
      { week: "Week 3", persona: "Start AI-First", level: "Level 4", desc: "Agent with connections.\nLet it pull context itself.\nNotice what it finds.", color: "0E7490" },
      { week: "Week 4", persona: "Full AI-First", level: "Level 5", desc: "Break into phases.\nChain them. Compare to\nWeek 1. You're orchestrating.", color: D.right },
    ];
    // Timeline bar
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.6, w: 9, h: 0.06, fill: { color: D.accent } });
    weeks.forEach((w, i) => {
      const x = 0.5 + i * 2.35;
      // Node
      s.addShape(pres.shapes.OVAL, { x: x + 0.75, y: 1.4, w: 0.45, h: 0.45, fill: { color: w.color } });
      addCard(pres, s, x, 2.0, 2.1, 2.5);
      addBar(pres, s, x, 2.0, 2.5, w.color);
      s.addText(w.week, { x: x + 0.15, y: 2.05, w: 1.8, h: 0.25, fontFace: D.b, fontSize: 11, color: w.color, bold: true, margin: 0 });
      s.addText(w.persona, { x: x + 0.15, y: 2.28, w: 1.8, h: 0.25, fontFace: D.b, fontSize: 10, color: w.color, italic: true, margin: 0 });
      s.addText(w.level, { x: x + 0.15, y: 2.52, w: 1.8, h: 0.2, fontFace: D.b, fontSize: 9, color: D.muted, margin: 0 });
      s.addText(w.desc, { x: x + 0.15, y: 2.8, w: 1.8, h: 1.4, fontFace: D.b, fontSize: 10, color: D.text, margin: 0, valign: "top" });
    });
    addFooter(s, "Four weeks. One task. Same journey this deck just took you on.");
    s.addNotes("Most actionable takeaway. Same task across four weeks mirrors the deck's progression. Now framed as persona crossings for motivation.");
  }

  // ============================================================
  // CLOSING (Slides 46-47)
  // ============================================================

  // --- Slide 46: Full Circle (with persona language) ---
  {
    const s = darkSlide(pres);
    s.addText("Full Circle", { x: 0.5, y: 0.3, w: 9, h: 0.6, fontFace: D.h, fontSize: 32, color: D.white, bold: true, align: "center", margin: 0 });
    s.addText("Remember the person spending 45 minutes copy-pasting into ChatGPT?", {
      x: 1.0, y: 1.0, w: 8, h: 0.5, fontFace: D.b, fontSize: 15, color: "CCCCCC", italic: true, align: "center", margin: 0
    });
    const journey = [
      ["They learned to prompt with specificity", "became a Viber", "Levels 2\u20133"],
      ["They let the agent find what it needed", "started going AI-First", "Level 4"],
      ["They chained the whole workflow", "full AI-First", "Level 5"],
      ["They were a Questioner who became AI-First", "", ""],
    ];
    journey.forEach((l, i) => {
      const y = 1.7 + i * 0.55;
      s.addText(l[0], { x: 1.0, y, w: 4.5, h: 0.4, fontFace: D.b, fontSize: 13, color: D.white, margin: 0 });
      if (l[1]) s.addText(l[1], { x: 5.5, y, w: 2.5, h: 0.4, fontFace: D.b, fontSize: 12, color: D.accent, italic: true, margin: 0 });
      if (l[2]) s.addText(l[2], { x: 8.0, y, w: 1.5, h: 0.4, fontFace: D.b, fontSize: 11, color: "999999", margin: 0, align: "right" });
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
      x: 1.0, y: 1.2, w: 8, h: 1.5, fontFace: D.h, fontSize: 26, color: D.white, bold: true, align: "center", margin: 0, valign: "middle"
    });
    s.addShape(pres.shapes.LINE, { x: 3.0, y: 3.0, w: 4, h: 0, line: { color: D.accent, width: 2 } });
    s.addText("Now go try it \u2014 start with one task, this week.", {
      x: 1.0, y: 3.3, w: 8, h: 0.8, fontFace: D.b, fontSize: 20, color: D.accent, bold: true, italic: true, align: "center", margin: 0
    });
    s.addText("Getting Agents to Give Up Their Secrets", {
      x: 1.0, y: 4.6, w: 8, h: 0.4, fontFace: D.b, fontSize: 12, color: "999999", align: "center", margin: 0
    });
    s.addNotes("Clean exit. One task, this week \u2014 not 'transform everything.'");
  }

  // ============================================================
  // WRITE FILE
  // ============================================================
  console.log("Writing presentation...");
  await pres.writeFile({ fileName: "Getting-Agents-to-Give-Up-Their-Secrets.pptx" });
  console.log("Done! Created Getting-Agents-to-Give-Up-Their-Secrets.pptx (49 slides, v2)");
}

main().catch(err => { console.error("Error:", err); process.exit(1); });
