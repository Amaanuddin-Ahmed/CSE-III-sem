#!/usr/bin/env python3
"""Second OCR pass (psm 4) for scanned pages.

The table-aware psm 6 pass sometimes drops a word at the right edge of the
question column.  A plain psm 4 pass keeps the full sentence, so the builder
uses it to repair those omissions.
"""

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
OUT_DIR = ROOT / ".cache" / "pyq_ocr_psm4"
OUT_DIR.mkdir(parents=True, exist_ok=True)

pytesseract.pytesseract.tesseract_cmd = os.environ.get(
    "TESSERACT_CMD", r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)


def render(path: Path, page_index: int) -> Image.Image:
    doc = pymupdf.open(path)
    pix = doc[page_index].get_pixmap(dpi=400, colorspace=pymupdf.csGRAY)
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    doc.close()
    return img


def main() -> int:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    jobs = []
    for item in manifest:
        if "error" in item or item["subject"] not in {"DM", "COA", "OOPJ", "DBMS", "SE"}:
            continue
        path = ROOT / item["localPath"]
        if path.suffix.lower() != ".pdf" or not path.exists():
            continue
        doc = pymupdf.open(path)
        for n, page in enumerate(doc, 1):
            if len(page.get_text("text").strip()) < 40:
                jobs.append((item, path, n - 1, n))
        doc.close()

    print(f"psm4 OCR jobs: {len(jobs)}", flush=True)
    for i, (item, path, page_index, page_no) in enumerate(jobs, 1):
        out = OUT_DIR / f"{item['subject']}__{item['fileName']}__p{page_no}.txt"
        if out.exists() and out.stat().st_size > 20:
            continue
        try:
            img = render(path, page_index)
            text = pytesseract.image_to_string(img, lang="eng", config="--psm 4")
            out.write_text(text, encoding="utf-8")
            print(f"[{i}/{len(jobs)}] {item['subject']} {item['fileName']} p{page_no}", flush=True)
        except Exception as exc:  # noqa: BLE001
            print(f"[{i}/{len(jobs)}] FAILED {item['subject']} {item['fileName']} p{page_no}: {exc}", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
