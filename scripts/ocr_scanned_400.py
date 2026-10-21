#!/usr/bin/env python3
"""Re-OCR scanned pages at 400 DPI (better accuracy than the 300 DPI pass)."""

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
OUT_DIR = ROOT / ".cache" / "pyq_ocr_all"

pytesseract.pytesseract.tesseract_cmd = os.environ.get(
    "TESSERACT_CMD", r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)


def render(path: Path, page_index: int) -> Image.Image:
    if path.suffix.lower() in {".jpeg", ".jpg", ".png"}:
        img = Image.open(path).convert("L")
        if img.width < 1800:
            img = img.resize((img.width * 2, img.height * 2), Image.LANCZOS)
        return img
    doc = pymupdf.open(path)
    pix = doc[page_index].get_pixmap(dpi=400, colorspace=pymupdf.csGRAY)
    img = Image.open(io.BytesIO(pix.tobytes("png")))
    doc.close()
    return img


def main() -> int:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    jobs = []
    for item in manifest:
        if "error" in item:
            continue
        path = ROOT / item["localPath"]
        if not path.exists():
            continue
        if path.suffix.lower() in {".jpeg", ".jpg", ".png"}:
            jobs.append((item, path, 0, 1))
            continue
        doc = pymupdf.open(path)
        for n, page in enumerate(doc, 1):
            if len(page.get_text("text").strip()) < 40:
                jobs.append((item, path, n - 1, n))
        doc.close()

    print(f"Scanned OCR jobs: {len(jobs)}", flush=True)
    for i, (item, path, page_index, page_no) in enumerate(jobs, 1):
        out = OUT_DIR / f"{item['subject']}__{item['fileName']}__p{page_no}.json"
        try:
            img = render(path, page_index)
            data = pytesseract.image_to_data(
                img, lang="eng", config="--psm 6", output_type=pytesseract.Output.DICT
            )
            words = []
            for j, text in enumerate(data["text"]):
                text = text.strip()
                if not text or int(data["conf"][j]) < 10:
                    continue
                words.append({
                    "text": text,
                    "x": int(data["left"][j]),
                    "y": int(data["top"][j]),
                    "w": int(data["width"][j]),
                    "h": int(data["height"][j]),
                })
            out.write_text(json.dumps({"width": img.width, "height": img.height, "words": words}), encoding="utf-8")
            print(f"[{i}/{len(jobs)}] {item['subject']} {item['fileName']} p{page_no}: {len(words)}", flush=True)
        except Exception as exc:  # noqa: BLE001
            print(f"[{i}/{len(jobs)}] FAILED {item['subject']} {item['fileName']} p{page_no}: {exc}", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
