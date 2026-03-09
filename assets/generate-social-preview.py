#!/usr/bin/env python3
"""Generate social-preview.png for the AI Best Practices repo.

Reads slide counts from PDFs, assembles a grid of slide thumbnails,
and renders the preview image. Re-run whenever slide counts change.

Usage: python3 assets/generate-social-preview.py
"""

import subprocess
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
OUTPUT = ASSETS / "social-preview.png"

# Design system
BG = (10, 37, 64)        # #0A2540
TEXT = (237, 237, 237)    # #EDEDED
MUTED = (139, 149, 165)  # #8B95A5
ACCENT = (99, 91, 255)   # #635BFF
WIDTH, HEIGHT = 1280, 640

# Decks and their display info
DECKS = [
    "ai-best-practices",
    "workshop-1-strategist",
    "workshop-2-orchestrator",
    "builder",
    "ai-policy",
    "ai-academy-pitch",
]

# Slide thumbnails to feature (deck_name, slide_number)
FEATURED_SLIDES = [
    ("ai-best-practices", 1),
    ("ai-best-practices", 7),
    ("ai-best-practices", 13),
    ("ai-best-practices", 35),
    ("workshop-2-orchestrator", 4),
    ("builder", 1),
    ("ai-policy", 11),
    ("ai-best-practices", 53),
    ("ai-policy", 21),
    ("builder", 62),
]


def get_slide_count(deck_name):
    pdf = ROOT / "decks" / deck_name / f"{deck_name}.pdf"
    if not pdf.exists():
        return 0
    result = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True)
    for line in result.stdout.split("\n"):
        if "Pages" in line:
            return int(line.split(":")[1].strip())
    return 0


def get_slide_image(deck_name, slide_num):
    """Extract a single slide as a PIL Image."""
    pdf = ROOT / "decks" / deck_name / f"{deck_name}.pdf"
    import tempfile, os
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(
            ["pdftoppm", "-jpeg", "-r", "72", "-f", str(slide_num), "-l", str(slide_num),
             str(pdf), os.path.join(tmp, "s")],
            capture_output=True
        )
        files = sorted(Path(tmp).glob("s-*.jpg"))
        if files:
            return Image.open(files[0]).copy()
    return None


def try_font(name, size):
    """Try to load a font, fall back to default."""
    paths = [
        f"/System/Library/Fonts/{name}.ttf",
        f"/System/Library/Fonts/Supplemental/{name}.ttf",
        f"/Library/Fonts/{name}.ttf",
        f"/Library/Fonts/Microsoft/{name}.ttf",
    ]
    for p in paths:
        if Path(p).exists():
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def main():
    # Count slides
    total_slides = sum(get_slide_count(d) for d in DECKS)
    deck_count = len(DECKS)

    # Create canvas
    img = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    # Fonts
    title_font = try_font("Georgia", 48)
    sub_font = try_font("Verdana", 16)
    footer_font = try_font("Verdana", 14)

    # Title
    title = "AI Best Practices"
    bbox = draw.textbbox((0, 0), title, font=title_font)
    tw = bbox[2] - bbox[0]
    draw.text(((WIDTH - tw) / 2, 30), title, fill=TEXT, font=title_font)

    # Subtitle
    subtitle = f"{total_slides} slides  ·  {deck_count} decks  ·  from first prompt to production"
    bbox = draw.textbbox((0, 0), subtitle, font=sub_font)
    sw = bbox[2] - bbox[0]
    draw.text(((WIDTH - sw) / 2, 95), subtitle, fill=MUTED, font=sub_font)

    # Slide grid
    cols = 5
    rows = math.ceil(len(FEATURED_SLIDES) / cols)
    thumb_w, thumb_h = 210, 118
    gap = 10
    grid_w = cols * thumb_w + (cols - 1) * gap
    grid_h = rows * thumb_h + (rows - 1) * gap
    grid_x = (WIDTH - grid_w) // 2
    grid_y = 135

    for idx, (deck, slide_num) in enumerate(FEATURED_SLIDES):
        col = idx % cols
        row = idx // cols
        x = grid_x + col * (thumb_w + gap)
        y = grid_y + row * (thumb_h + gap)

        slide_img = get_slide_image(deck, slide_num)
        if slide_img:
            slide_img = slide_img.resize((thumb_w, thumb_h), Image.LANCZOS)
            img.paste(slide_img, (x, y))
        else:
            # Placeholder
            draw.rectangle([x, y, x + thumb_w, y + thumb_h], fill=(20, 50, 80))

    # Footer
    footer = "Built with Claude Code + deckwright"
    bbox = draw.textbbox((0, 0), footer, font=footer_font)
    fw = bbox[2] - bbox[0]
    draw.text(((WIDTH - fw) / 2, HEIGHT - 40), footer, fill=MUTED, font=footer_font)

    img.save(OUTPUT, quality=95)
    print(f"Created {OUTPUT} ({WIDTH}x{HEIGHT}, {total_slides} slides across {deck_count} decks)")


if __name__ == "__main__":
    main()
