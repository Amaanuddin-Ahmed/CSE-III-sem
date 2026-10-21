#!/usr/bin/env python3
"""Render every PYQ page and run Tesseract psm 4 (single column) at 400 DPI."""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".cache" / "drive_manifest.json"
OUT_DIR = ROOT / ".cache" / "pyq_ocr_psm4_all"
TMP = ROOT / ".cache" / "psm4_tmp"
TESS = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    TMP.mkdir(parents=True, exist_ok=True)
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
    print(f"pages to OCR: {len(todo)}", flush=True)
    for n, (item, path, pno, out) in enumerate(todo, 1):
        doc = pymupdf.open(path)
        page = doc[pno - 1]
        pix = page.get_pixmap(dpi=400, colorspace=pymupdf.csGRAY)
        img = TMP / f"page.png"
        pix.save(img)
        doc.close()
        try:
            subprocess.run(
                [TESS, str(img), str(out.with_suffix("")), "--psm", "4", "-l", "eng"],
                check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
                timeout=180,
            )
        except Exception as exc:
            print(f"FAIL {item['subject']} {item['fileName']} p{pno}: {exc}", flush=True)
            continue
        print(f"[{n}/{len(todo)}] {item['subject']} {item['fileName']} p{pno}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
