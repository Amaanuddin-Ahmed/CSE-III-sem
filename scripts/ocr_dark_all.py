#!/usr/bin/env python3
"""Render every PYQ page at 400 DPI, suppress light watermarks by thresholding,
then run Tesseract psm 4.

Several Drive scans carry a light grey watermark (often a different paper) that
the default OCR pass reads instead of the dark printed text.  Keeping only
near-black pixels removes that watermark.
"""
from __future__ import annotations

import io
import json
from pathlib import Path

import pymupdf
import pytesseract
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".cache" / "drive_manifest.json"
OUT_DIR = ROOT / ".cache" / "pyq_ocr_dark_all"
TESS = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
THRESHOLD = 115

pytesseract.pytesseract.tesseract_cmd = TESS


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    todo = []
    for item in manifest:
        if "error" in item:
            continue
        path = ROOT / item["localPath"]
        if path.suffix.lower() != ".pdf":
            continue
        doc = pymupdf.open(path)
        for pno in range(1, len(doc) + 1):
            out = OUT_DIR / f"{item['subject']}__{item['fileName']}__p{pno}.txt"
            if out.exists() and out.stat().st_size > 40:
                continue
            todo.append((item, path, pno, out))
        doc.close()
    print(f"pages to OCR (dark): {len(todo)}", flush=True)
    for n, (item, path, pno, out) in enumerate(todo, 1):
        try:
            doc = pymupdf.open(path)
            pix = doc[pno - 1].get_pixmap(dpi=400, colorspace=pymupdf.csGRAY)
            img = Image.open(io.BytesIO(pix.tobytes("png"))).convert("L")
            doc.close()
            clean = img.point(lambda v: 0 if v < THRESHOLD else 255)
            text = pytesseract.image_to_string(clean, config="--psm 4 -l eng")
        except Exception as exc:
            print(f"FAIL {item['subject']} {item['fileName']} p{pno}: {exc}", flush=True)
            continue
        out.write_text(text, encoding="utf-8")
        print(f"[{n}/{len(todo)}] {item['subject']} {item['fileName']} p{pno}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
