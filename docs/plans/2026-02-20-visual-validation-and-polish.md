# Visual Validation & Polish — 2026-02-20

Summary of all changes made during the visual validation, user feedback, and public release preparation session.

## Context

The billboard redesign (68 slides) was code-complete but had not been visually validated. This session ran the full deck-flow:present validation pipeline, addressed user feedback, and prepared the repo for public release.

## Visual Validation

Exported .pptx to PDF via PowerPoint AppleScript, converted to slide images via PyMuPDF, and created thumbnail grids for review.

### Issues found and fixed

| Slide(s) | Issue | Fix |
|-----------|-------|-----|
| 4, 5, 65 | "AI Questioner" text wrapping mid-word ("Question"/"er") | Widened boxes 1.9"→2.1", reduced font 28pt→22pt |
| 8 | "Smartphones" wrapping ("Smartpho"/"nes") | Widened label boxes 2.0"→2.5", reduced font 28pt→24pt |
| 23 | Subtitle missing — `sub:` passed but function expects `subtitle:` | Fixed property name |
| 36, 46, 52 | All icons showing "The picture can't be displayed" | Switched from base64 data to file path references |

## User Feedback Round

### Changes made

| Slide | Feedback | Action |
|-------|----------|--------|
| 2 | "Phrasing isn't clear — 2nd sentence not meeting first" | Changed "arguing with ChatGPT" → "on a one-page summary using ChatGPT" |
| 13 | "Boxes don't fully contain the text" | Enlarged boxes 3.2"→3.8" wide, 0.9"→1.2" tall, font 28pt→22pt |
| 35 | "Subtext almost overlapping main text" | Increased gap between heading and sub text, reduced sub font 28pt→24pt |
| 47 | "Text feels a little too close together" | Nudged body text down 0.2" |
| 48 | "Text feels a little low" | Raised entire block 0.2" |
| 65 | "Message unclear" | Added "Look how far you've come." headline |

### Pushbacks (kept as-is)

| Slide | Feedback | Reasoning |
|-------|----------|-----------|
| 8 | "Message unclear" | Tech adoption timeline reads in 3 seconds; detail is for speaker notes |
| 12 | "Overlapping words" | Intentional chaos — the overwhelm IS the message |

## Structural Changes

### Closing section trimmed (71→68 slides)

Removed slides 65-67 (spectrum recap, toolkit table, 30-day challenge). These practical/reference slides broke emotional momentum between Level 5's climax and the callback/punchline. The closing now flows: breather → callback → punchline → CTA.

### Source attributions added

Added subtle bottom-right source citations (11pt muted) to all stat slides via `bigNum` helper's new `source` parameter. Sources survive PDF sharing without speaker notes: DataReportal, Reuters, McKinsey, Second Talent, Addy Osmani, Microsoft.

### Callback mismatch fixed

Slide 2's phrasing was updated ("arguing with ChatGPT" → "one-page summary") but slide 66 still referenced "45-minute conversation." Fixed to "45-minute summary."

## Dory Image

- Generated AI image of a blue tang fish via Gemini (prompt documented in `2026-02-20-image-prompts.md`)
- Wired into slide 36, replacing the fish icon placeholder
- Removed on-screen "Dory" name references (slides 45, 64) — replaced with "Same colleague" and "She" to keep the deck copyright-clean and self-explanatory for PDF readers
- "Dory" remains in speaker notes for presenter context

## Skill Convention Alignment

Renamed and updated all plan document headers to follow deck-flow skill conventions:
- `*-design.md` → `*-deck-plan.md` (deck-flow:craft output)
- Added "Next step" references pointing to `/deck-flow:craft` or `/deck-flow:present`
- Replaced all `superpowers:executing-plans` references with `/deck-flow:present`

## Public Release Preparation

- **MIT license** added
- **README** rewritten: correct slide count (68), updated progression table, billboard design philosophy, "How this was built" section referencing deck-flow plugin and Claude Code, project structure
- **Security audit**: No secrets, credentials, or sensitive data in code or git history
- **Copyright audit**: AI-generated blue tang (not Disney IP), no "Dory" on-screen
- **PDF** added to repo for direct sharing
