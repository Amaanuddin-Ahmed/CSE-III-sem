#!/usr/bin/env python3
"""OCR every PDF page/image to TSV word boxes (skip pages that already have output)."""

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
OUT_DIR.mkdir(parents=True, exist_ok=True)

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
        path = ROOT / item["localPath"]
        if not path.exists():
            continue
        if path.suffix.lower() in {".jpeg", ".jpg", ".png"}:
            page_count = 1
        else:
            doc = pymupdf.open(path)
            page_count = len(doc)
            doc.close()
        for n in range(1, page_count + 1):
            out = OUT_DIR / f"{item['subject']}__{item['fileName']}__p{n}.json"
            if out.exists() and out.stat().st_size > 50:
                continue
            jobs.append((item, path, n - 1, out))

    print(f"OCR jobs: {len(jobs)}", flush=True)
    for i, (item, path, page_index, out) in enumerate(jobs, 1):
        try:
            img = render(path, page_index)
            data = pytesseract.image_to_data(
                img, lang="eng", config="--psm 6", output_type=pytesseract.Output.DICT
            )
            words = []
            for j, text in enumerate(data["text"]):
                text = text.strip()
                if not text:
                    continue
                if int(data["conf"][j]) < 10:
                    continue
                words.append(
                    {
                        "text": text,
                        "x": int(data["left"][j]),
                        "y": int(data["top"][j]),
                        "w": int(data["width"][j]),
                        "h": int(data["height"][j]),
                    }
                )
            payload = {"width": img.width, "height": img.height, "words": words}
            out.write_text(json.dumps(payload), encoding="utf-8")
            print(
                f"[{i}/{len(jobs)}] {item['subject']} {item['fileName']} p{page_index + 1}: {len(words)} words",
                flush=True,
            )
        except Exception as exc:  # noqa: BLE001
            print(
                f"[{i}/{len(jobs)}] FAILED {item['subject']} {item['fileName']} p{page_index + 1}: {exc}",
                flush=True,
            )
    return 0


if __name__ == "__main__":
    sys.exit(main())
