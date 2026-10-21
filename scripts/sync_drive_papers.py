#!/usr/bin/env python3
"""
MGIT PYQ Hub - Google Drive source sync.

Reads the verified inventory in docs/inventory/source_drive_inventory.md,
downloads every question-paper PDF into .cache/pyq_pdfs/<SUBJECT>/, and
extracts the embedded text layer with PyMuPDF.

This script never modifies or removes anything in the source Drive.
"""

from __future__ import annotations

import json
import re
import sys
import time
import urllib.request
from pathlib import Path

try:
    import pymupdf  # PyMuPDF >= 1.24
except ImportError:  # pragma: no cover
    import fitz as pymupdf

ROOT = Path(__file__).resolve().parents[1]
INVENTORY = ROOT / "docs" / "inventory" / "source_drive_inventory.md"
CACHE = ROOT / ".cache" / "pyq_pdfs"
TEXT_CACHE = ROOT / ".cache" / "pyq_text"

SUBJECT_MAP = {
    "C.O.A": "COA",
    "D.M": "DM",
    "DBMS": "DBMS",
    "ES": "ES",
    "O.O.P": "OOPJ",
    "S.E": "SE",
    "I&E": "IE",
}

ROW_RE = re.compile(
    r"^\|\s*\d+\s*\|\s*(?P<name>[^|]+?)\s*\|\s*`(?P<id>[A-Za-z0-9_-]+)`\s*\|\s*(?P<size>[^|]+?)\s*\|\s*(?P<type>[^|]+?)\s*\|"
)
HEAD_RE = re.compile(r"^###\s+2\.\d+\s+(?P<subject>[^(]+)\(")


def parse_inventory() -> list[dict]:
    rows: list[dict] = []
    current = None
    for raw in INVENTORY.read_text(encoding="utf-8").splitlines():
        head = HEAD_RE.match(raw)
        if head:
            name = head.group("subject").strip().rstrip(".")
            current = SUBJECT_MAP.get(name)
            continue
        row = ROW_RE.match(raw)
        if not row or not current:
            continue
        ftype = row.group("type").strip()
        rows.append(
            {
                "subject": current,
                "fileName": row.group("name").strip(),
                "fileId": row.group("id").strip(),
                "size": row.group("size").strip(),
                "type": ftype,
                "isPaper": "Notes" not in ftype,
            }
        )
    return rows


def download(file_id: str, dest: Path) -> None:
    if dest.exists() and dest.stat().st_size > 1024:
        return
    url = f"https://drive.google.com/uc?export=download&id={file_id}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=90) as res:
        data = res.read()
    if b"<html" in data[:300].lower():
        raise RuntimeError(f"Drive returned HTML instead of PDF for {file_id}")
    dest.write_bytes(data)


def extract_text(pdf_path: Path) -> dict:
    doc = pymupdf.open(pdf_path)
    pages = []
    for i, page in enumerate(doc):
        text = page.get_text("text") or ""
        pages.append(
            {
                "page": i + 1,
                "text": text,
                "chars": len(text.strip()),
                "images": len(page.get_images(full=True)),
            }
        )
    doc.close()
    return {"pages": pages, "pageCount": len(pages)}


def main() -> int:
    inventory = parse_inventory()
    papers = [r for r in inventory if r["isPaper"]]
    print(f"Inventory rows: {len(inventory)} | question papers: {len(papers)}")

    TEXT_CACHE.mkdir(parents=True, exist_ok=True)
    manifest = []
    for idx, row in enumerate(papers, 1):
        sub_dir = CACHE / row["subject"]
        sub_dir.mkdir(parents=True, exist_ok=True)
        safe_name = re.sub(r'[<>:"/\\|?*]', "_", row["fileName"])
        dest = sub_dir / safe_name
        text_dest = TEXT_CACHE / f"{row['subject']}__{safe_name}.json"
        print(f"[{idx}/{len(papers)}] {row['subject']}: {row['fileName']}", flush=True)
        try:
            download(row["fileId"], dest)
            extracted = extract_text(dest)
            text_dest.write_text(json.dumps(extracted, ensure_ascii=False, indent=1), encoding="utf-8")
            empty_pages = [p["page"] for p in extracted["pages"] if p["chars"] < 40]
            manifest.append(
                {
                    **row,
                    "localPath": str(dest.relative_to(ROOT)),
                    "bytes": dest.stat().st_size,
                    "pageCount": extracted["pageCount"],
                    "emptyPages": empty_pages,
                    "textChars": sum(p["chars"] for p in extracted["pages"]),
                }
            )
        except Exception as exc:  # noqa: BLE001
            print(f"  !! FAILED: {exc}", flush=True)
            manifest.append({**row, "error": str(exc)})
        time.sleep(0.15)

    out = ROOT / ".cache" / "drive_manifest.json"
    out.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    ok = [m for m in manifest if "error" not in m]
    print(f"\nDownloaded+extracted {len(ok)}/{len(papers)} papers -> {out}")
    return 0 if len(ok) == len(papers) else 1


if __name__ == "__main__":
    sys.exit(main())
