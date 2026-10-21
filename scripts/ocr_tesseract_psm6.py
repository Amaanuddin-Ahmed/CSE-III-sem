#!/usr/bin/env python3
"""Tesseract OCR (--psm 6) for scanned pages - preserves table row reading order."""

from __future__ import annotations

import io
import json
import os
import sys
from pathlib import Path

import pymupdf
import pytesseract
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".cache" / "drive_manifest.json"
TEXT_DIR = ROOT / ".cache" / "pyq_text"
OUT_DIR = ROOT / ".cache" / "pyq_ocr_tess6"
OUT_DIR.mkdir(parents=True, exist_ok=True)

pytesseract.pytesseract.tesseract_cmd = os.environ.get(
    "TESSERACT_CMD", r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)


def render(pdf_path: Path, page_index: int) -> Image.Image:
    if pdf_path.suffix.lower() in {".jpeg", ".jpg", ".png"}:
        return Image.open(pdf_path).convert("L")
    doc = pymupdf.open(pdf_path)
    page = doc[page_index]
    pix = page.get_pixmap(dpi=300, colorspace=pymupdf.csGRAY)
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    doc.close()
    return img


def main() -> int:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    jobs = []
    for item in manifest:
        if "error" in item:
            continue
        text_path = TEXT_DIR / f"{item['subject']}__{item['fileName']}.json"
        if not text_path.exists():
            continue
        data = json.loads(text_path.read_text(encoding="utf-8"))
        for p in data["pages"]:
            if p["chars"] >= 40:
                continue
            out = OUT_DIR / f"{item['subject']}__{item['fileName']}__p{p['page']}.txt"
            if out.exists() and out.stat().st_size > 20:
                continue
            jobs.append((item, ROOT / item["localPath"], p["page"] - 1, out))

    print(f"PSM6 jobs: {len(jobs)}")
    for i, (item, pdf_path, page_index, out) in enumerate(jobs, 1):
        try:
            img = render(pdf_path, page_index)
            text = pytesseract.image_to_string(img, lang="eng", config="--psm 6")
            out.write_text(text, encoding="utf-8")
            print(f"[{i}/{len(jobs)}] {item['subject']} {item['fileName']} p{page_index + 1}: {len(text)} chars", flush=True)
        except Exception as exc:  # noqa: BLE001
            print(f"[{i}/{len(jobs)}] FAILED {item['subject']} {item['fileName']} p{page_index + 1}: {exc}", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
