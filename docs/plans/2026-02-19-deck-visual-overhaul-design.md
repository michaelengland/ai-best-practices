# Deck Visual Overhaul — Design Document

> **Next step:** Implement this design in `generate-deck.js` using the writing-plans skill.

## Overview

Full visual overhaul of the 47-slide "Getting Agents to Give Up Their Secrets" presentation. Moving from a flat, template-feeling layout to a dark-forward cinematic design inspired by Linear, Stripe, and Apple keynotes.

## Problem Statement

The current deck has several "AI-generated template" tells:
1. Every slide uses the same spatial grid (headline y=0.3, content y=1.1, footer y=5.0)
2. Flat backgrounds with no depth or gradient
3. Repetitive card/accent-bar pattern used ~30 times
4. Footer conflates source citations, transition text, and key takeaways
5. Zero imagery across 47 slides
6. Typography lacks dramatic size contrast (28pt headlines / 14pt body = flat 2:1 ratio)
7. No breather slides or spatial variation

## Design System

### Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Dark BG base | `0F0F1A` | Primary background for ~35 slides |
| Dark BG glow | `00B4D8` at 4% opacity, radial | Subtle depth on dark slides |
| Dark card | `1A1A3E` | Cards on dark backgrounds |
| Light BG | `F8F9FA` | ~12 light slides (Wrong/Right, dense data) |
| Body on dark | `E0E4E8` | Off-white body text for reduced eye strain |
| Body on light | `1E293B` | Slate-900, cooler than pure black |
| Muted on dark | `94A3B8` | Metadata, secondary text on dark |
| Muted on light | `64748B` | Metadata, secondary text on light |
| Accent | `00B4D8` | Teal — kept from v1 |
| Accent dark | `0891B2` | Darker teal variant |
| Wrong | `E63946` | Error/wrong-way cards |
| Right | `2D936C` | Fix/right-way cards |
| Wrong BG | `FEE2E2` | Wrong card fill (on light slides) |
| Right BG | `DCFCE7` | Right card fill (on light slides) |
| White | `FFFFFF` | Headlines on dark, pure white accents |

#### Background Glow Implementation

On dark slides, add a large semi-transparent oval shape to create ambient depth:

```javascript
// Radial glow — bottom-right quadrant
s.addShape(pres.shapes.OVAL, {
  x: 5, y: 2.5, w: 8, h: 6,
  fill: { color: "00B4D8", transparency: 96 }
});
```

This creates a barely-visible teal luminescence that prevents the "flat dark PowerPoint" feel.

### Typography System

6 strict text treatments for the entire deck:

| Treatment | Font | Size | Weight | Color (dark) | Color (light) | Usage |
|-----------|------|------|--------|--------------|----------------|-------|
| Hero | Georgia | 54pt | Bold | `FFFFFF` | n/a | Section divider titles only |
| Headline | Georgia | 40pt | Bold | `E0E4E8` | `1E293B` | Slide headlines |
| Subhead | Calibri | 20pt | Italic | `00B4D8` | `00B4D8` | Subtitles, callouts |
| Body | Calibri | 15pt | Regular | `E0E4E8` | `1E293B` | Main content text |
| Label | Calibri | 11pt | Bold+Caps | `94A3B8` | `64748B` | Level markers, card labels. charSpacing: 4 |
| Meta | Calibri | 9pt | Regular | `64748B` | `64748B` | Source citations only |

**Key ratios:**
- Hero:Body = 3.6:1
- Headline:Body = 2.7:1
- These create unmistakable hierarchy vs. the current flat 2:1

### Footer & Information Hierarchy

Three distinct tiers replacing the current single `addFooter`:

#### Tier 1: Takeaway Callout (content zone)
- **Position:** y=4.5, h=0.4, full-width (x=0.5, w=9)
- **Style:** 14pt Calibri Bold, accent color (`00B4D8`)
- **Background:** Accent at 8% opacity strip (on light) or 12% (on dark)
- **Content:** The one line the audience should remember from this slide
- **Not every slide needs this** — only slides with a key punchline

#### Tier 2: Separator Line
- **Position:** y=5.1
- **Style:** 1px line, `FFFFFF` at 8% opacity (dark) or `94A3B8` at 20% (light)
- **Purpose:** Visually separates content from metadata

#### Tier 3: Source Citation (metadata zone)
- **Position:** y=5.2, h=0.3
- **Style:** 9pt Calibri, `64748B`, right-aligned
- **Format:** `Source: McKinsey Global Institute` — clean, no "Sources:" prefix
- **Only present when the slide cites external data**

#### What happens to transition text?
- **Removed from footer entirely**
- Transitions become the subtitle of the NEXT slide (Subhead treatment, 20pt italic teal)
- Or become dedicated breather slides (see Spatial Rhythm below)

### Spatial Rhythm

Three layout modes to break the monotonous grid:

#### Mode 1: Standard Content (~25 slides)
- Headline at y=0.35
- Content starting at y=1.2
- Standard margins (x=0.5 sides)
- Used for: comparisons, data grids, three-column layouts, bullet slides

#### Mode 2: Cinematic / Hero (~12 slides)
- Content centered vertically (y=1.8–2.2 area)
- 60%+ whitespace — generous margins on all sides
- Used for: section dividers, single-message slides, key revelations
- Text at center of slide with vast empty space around it = maximum impact

#### Mode 3: Asymmetric (~10 slides)
- Content shifted to one side (e.g., left 55%)
- Right side: breathing room, subtle image, or floating shape
- Used for: Dory slides, metaphor slides, single-idea-dominates

### Breather Slides (4-5 new slides)

Inserted between dense sections for pacing:

1. **After slide 6** (end of Level 0): "Alright — let's see what most people get wrong."
2. **After slide 13** (end of Level 2 start): "You've got the habits. Now let's give you the understanding."
3. **After slide 21** (end of Level 2 iterations): Transition into Level 3
4. **After slide 32** (end of Level 4): "You're managing AI well. Time to orchestrate it."
5. **Before closing** (before current slide 46): "Let's come back to where we started."

**Treatment:** Dark background + radial glow, one line at 28pt Georgia Italic, teal color, vertically and horizontally centered. Nothing else. The emptiness IS the design.

**Total slide count:** ~51-52 slides. Breathers add no speaking time (~2-3 seconds each).

### Card & Shape Variants

Replace the single card style with 3 variants:

#### Standard Card (on dark backgrounds)
- Fill: `1A1A3E`
- Left accent bar: `00B4D8`, 0.06" wide
- Shadow: outer, blur 6, offset 2, opacity 0.12
- Used for: structured content, comparisons, data displays

#### Glass Card (new — for dark backgrounds)
- Fill: `FFFFFF` at 5% opacity
- Border: `FFFFFF` 1px at 15% opacity
- No accent bar
- No shadow (the border provides definition)
- Used for: featured quotes, key insights, persona callouts

#### Callout Strip (new)
- Full-width tinted bar (x=0.3, w=9.4)
- Fill: accent at 8% opacity (light) or 12% (dark)
- No shadow, no border
- Used for: takeaway text above the footer zone

#### Wrong/Right Cards (unchanged)
- Stay on light backgrounds with red/green fill and accent bars
- These ~6 slides remain the primary "light slide" moments

### Imagery Strategy

#### Dory (Finding Nemo)
- Use a real screenshot/still of Dory from the film
- Cropped headshot placed in a rounded card
- Fair use for educational/internal presentation purposes
- Appears on slides 23-24 (Dory metaphor slides)

#### AI-Generated Images (4-5 key slides)

Prompts for the user to generate via their preferred tool:

1. **Slide 1 (Title):** "Person illuminated by a glowing AI interface in a dark room, cinematic lighting, shallow depth of field, teal and navy color palette, atmospheric, moody"
2. **Slide ~22 (Same Prompt Different Context):** "Split-screen showing the same question on two screens with vastly different results, dark moody lighting, teal accents, cinematic"
3. **Slide ~33 (Kitchen Brigade):** "Professional kitchen seen from above, chefs at organized stations, workflow in motion, cinematic dark moody lighting, shallow depth of field"
4. **Slide ~41 (Manual vs Chained):** "Contrast of tangled mess of cables versus perfectly organized cable management, dark background, teal accent lighting, dramatic"
5. **Slide 47 (Closing):** "Same person from behind now confidently working with a glowing AI interface, warm teal glow, cinematic, the journey is complete"

**Placement:** Full-bleed behind dark overlay (cinematic slides) or contained in a card at ~40% width (content slides with text alongside).

## Slide Assignment Table

| Slide | Current BG | New BG | Mode | Notes |
|-------|-----------|--------|------|-------|
| 1 Title | Dark flat | Dark + glow + AI image | Cinematic | Full-bleed image behind overlay |
| 2 Spectrum | Light | Light | Standard | 4 icon cards need light bg |
| 3 Shallow End | Light | **Dark** | Cinematic | Big stat pops on dark |
| 4 Movie Before | Light | **Dark** | Standard | Timeline on dark |
| 5 AI Moment | Light | **Dark** | Standard | Stat cards in dark card style |
| 6 Barrier | Light | **Dark** | Cinematic | Single message, centered |
| NEW Breather | — | Dark | Cinematic | "Let's see what most people get wrong." |
| 7-8 Level 1 | Dark/Light | Dark/Light | Standard/Cinematic | Section divider + first concept |
| 9-13 Wrong/Right | Light | Light | Standard | Red/green cards need light bg |
| NEW Breather | — | Dark | Cinematic | "You've got the habits…" |
| 14-21 Level 2 | Mixed | Light for W/R, dark for others | Mixed | Wrong/Right stays light |
| 22-26 Level 3 | Light | **Dark** | Mixed | Dory slides get image + asymmetric |
| 27-32 Level 4 | Light | **Dark** (most) | Standard | Process/comparison slides |
| NEW Breather | — | Dark | Cinematic | "Time to orchestrate." |
| 33-40 Level 5 | Light | **Dark** | Mixed | Kitchen + chains = cinematic |
| 41-43 Payoff | Mixed | **Dark** | Standard | Climax comparison |
| 44-45 Level Up | Mixed | **Dark** | Standard | Toolkit + challenge |
| NEW Breather | — | Dark | Cinematic | "Let's come back to where we started." |
| 46-47 Closing | Mixed | **Dark** | Cinematic | Full-circle callback |

## Implementation Notes

- **Background glow:** Implemented as a large semi-transparent oval shape added to every dark slide. Must be added FIRST so it renders behind all other elements.
- **Glass cards:** PptxGenJS supports fill transparency. Use `fill: { color: "FFFFFF", transparency: 95 }` + `line: { color: "FFFFFF", width: 0.5, transparency: 85 }`.
- **Callout strip:** Simple rectangle shape with transparent fill.
- **Images:** Will need the user to provide AI-generated images and a Dory screenshot before those slides can be finalized. In the meantime, use placeholder colored rectangles.
- **Breather slides:** Trivially simple — dark background + glow + one centered text element.
- **Transition text migration:** Each current footer with transition text needs to be analyzed and either moved to the next slide's subtitle or converted to a breather. This is the most editorial-judgment-heavy part of the implementation.
