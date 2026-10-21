#!/usr/bin/env python3
"""
Extract verbatim questions from MGIT question-paper PDFs.

Strategy
--------
1. Use the PDF text layer with positional (line bounding box) reconstruction.
   Question number / stem / marks live in fixed table columns, so we can
   separate them reliably instead of relying on flat text order.
2. Pages with no text layer are reported so a vision-OCR pass can fill them.
3. Every extracted question keeps its source page, paper name and Drive ID.

Output: .cache/extracted_questions.json
"""

from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

try:
    import pymupdf
except ImportError:  # pragma: no cover
    import fitz as pymupdf

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".cache" / "drive_manifest.json"
OUT = ROOT / ".cache" / "extracted_questions.json"

QNO_RE = re.compile(r"^(?P<major>\d{1,2})\s*[.)]\s*(?P<sub>[a-jA-J])?\s*[).]?$")
YEAR_RE = re.compile(r"(19|20)\d{2}")
ROMAN_SESSION_RE = re.compile(r"(Regular|Supplementary|Supple|Supply)", re.I)


def norm(text: str) -> str:
    text = (
        text.replace("\u00ad", "")
        .replace("\u2013", "-")
        .replace("\u2014", "-")
        .replace("\u2018", "'")
        .replace("\u2019", "'")
        .replace("\u201c", '"')
        .replace("\u201d", '"')
    )
    return re.sub(r"\s+", " ", text).strip()


def page_lines(page):
    data = page.get_text("dict")
    lines = []
    for block in data.get("blocks", []):
        if block.get("type") != 0:
            continue
        for line in block.get("lines", []):
            text = norm(" ".join(span.get("text", "") for span in line.get("spans", [])))
            if not text:
                continue
            x0, y0, x1, y1 = line["bbox"]
            lines.append({"text": text, "x0": x0, "y0": y0, "x1": x1, "y1": y1})
    lines.sort(key=lambda l: (l["y0"], l["x0"]))
    rows = []
    for line in lines:
        if rows and abs(line["y0"] - rows[-1][0]["y0"]) <= 4.5:
            rows[-1].append(line)
        else:
            rows.append([line])
    ordered = []
    for row in rows:
        ordered.extend(sorted(row, key=lambda l: l["x0"]))
    return ordered


def find_columns(lines, page_width):
    """Return (qno_end, text_start, marks_start, marks_end) for this page."""
    header = None
    for line in lines:
        t = line["text"].lower()
        if "stem" in t and ("m" == t.strip() or " m " in f" {t} " or "marks" in t):
            header = line
            break
    if header:
        # M column is the line at similar y with text 'M'
        candidates = [l for l in lines if abs(l["y0"] - header["y0"]) < 12 and l["x0"] > page_width * 0.6]
        m_line = next((l for l in candidates if l["text"].strip().upper().startswith("M")), None)
        if m_line:
            marks_start = m_line["x0"] - 4
            # Q.No column ends before the stem
            q_cols = [l for l in lines if "q." in l["text"].lower() and abs(l["y0"] - header["y0"]) < 12]
            q_end = (q_cols[0]["x1"] + 6) if q_cols else 82
            return q_end, q_end + 3, marks_start, marks_start + 30
    # Fallbacks based on common MGIT layouts
    if page_width > 700:
        return 95, 100, 545, 590
    return 82, 88, 438, 466


def is_qno_start(line, qno_end):
    if line["x0"] > qno_end:
        return None
    text = line["text"].strip()
    m = QNO_RE.match(text)
    if m:
        return m
    # Sometimes PDF merges "1. a) What is..." into one line starting at the qno column
    m2 = re.match(r"^(?P<major>\d{1,2})\s*[.)]\s*(?P<sub>[a-jA-J])\s*[).]\s*(?P<rest>.+)$", text)
    if m2:
        return m2
    m3 = re.match(r"^(?P<major>\d{1,2})\s*[.)]\s+(?P<rest>[A-Z].+)$", text)
    if m3:
        return m3
    return None


def parse_pdf(pdf_path: Path, meta: dict) -> dict:
    doc = pymupdf.open(pdf_path)
    questions = []
    empty_pages = []
    current = None
    part = "A"
    last_cols = None

    def flush():
        nonlocal current
        if current:
            current["text"] = norm(current["text"])
            if current["text"]:
                questions.append(current)
            current = None

    for page_index, page in enumerate(doc):
        lines = page_lines(page)
        if sum(len(l["text"]) for l in lines) < 40:
            empty_pages.append(page_index + 1)
            continue

        cols = find_columns(lines, page.rect.width)
        if last_cols is None or not any("stem" in l["text"].lower() for l in lines):
            cols = last_cols or cols
        else:
            last_cols = cols
        qno_end, text_start, marks_start, marks_end = cols

        for line in lines:
            text = line["text"].strip()
            low = text.lower()
            compact = low.replace(" ", "")

            # update the current exam part as we walk down the page
            if compact.startswith("part-a") or compact.startswith("parta"):
                part = "A"
                continue
            if compact.startswith("part-b") or compact.startswith("partb"):
                part = "B"
                continue

            # ignore page headers / instructions
            if any(
                low.startswith(p)
                for p in (
                    "hall ticket",
                    "mahatma gandhi",
                    "b.tech",
                    "(common to",
                    "time:",
                    "max. marks",
                    "answer all",
                    "q. no",
                    "q.no",
                    "stem of",
                    "m l co po",
                    "p.t.o",
                    "code:",
                    "level;",
                    "marks;",
                    "m: marks",
                    "m:",
                )
            ):
                continue
            if re.match(r"^(mr[-\s]?\d{2}|[a-z]\d{3}[a-z]{2,4}\d?)$", low):
                continue

            q = is_qno_start(line, qno_end)
            if q:
                flush()
                major = int(q.group("major"))
                sub = (q.groupdict().get("sub") or "").lower()
                current = {
                    "part": part,
                    "major": major,
                    "sub": sub,
                    "qno": f"{major}.{sub}" if sub else f"{major}.",
                    "text": (q.groupdict().get("rest") or "").strip(),
                    "marks": None,
                    "page": page_index + 1,
                }
                # the remainder of this line may contain the text
                if q.groupdict().get("rest"):
                    current["text"] = q.groupdict()["rest"].strip()
                continue

            if current is None:
                continue

            # marks column
            if marks_start - 8 <= line["x0"] <= marks_end:
                if re.fullmatch(r"\d{1,2}", text):
                    if current["marks"] is None:
                        current["marks"] = int(text)
                continue

            # "OR" separators / footer noise
            if text.upper() == "OR":
                continue
            if low.startswith(("part-", "note:", "continued")):
                continue

            # stem text: anything starting before the marks column
            if line["x0"] < marks_start - 8:
                # ignore stray CO/PO numbers that sit left of marks due to layout
                if re.fullmatch(r"[\d,\s]{1,8}", text) and line["x0"] > text_start + 220:
                    continue
                current["text"] += " " + text

    flush()
    page_count = doc.page_count
    doc.close()

    # clean / merge
    cleaned = []
    for q in questions:
        text = norm(q["text"])
        text = re.sub(r"\s+([,.;:])", r"\1", text)
        text = re.sub(r"\(\s+", "(", text)
        text = re.sub(r"\s+\)", ")", text)
        if len(text) < 4:
            continue
        q["text"] = text
        cleaned.append(q)

    return {
        "fileId": meta["fileId"],
        "paperName": meta["fileName"],
        "subject": meta["subject"],
        "pageCount": page_count,
        "emptyPages": empty_pages,
        "questions": cleaned,
    }


def infer_year(name: str) -> int | None:
    years = [int(y) for y in YEAR_RE.findall(name)]
    # YEAR_RE returns tuples due to group; handled below
    return None


def main() -> int:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    out = {}
    for item in manifest:
        if "error" in item:
            continue
        pdf_path = ROOT / item["localPath"]
        if pdf_path.suffix.lower() not in {".pdf", ".jpeg", ".jpg", ".png"}:
            continue
        try:
            parsed = parse_pdf(pdf_path, item)
        except Exception as exc:  # noqa: BLE001
            print(f"FAILED {item['subject']} {item['fileName']}: {exc}")
            continue
        key = f"{item['subject']}__{item['fileName']}"
        out[key] = parsed
        print(
            f"{item['subject']:5s} {item['fileName'][:38]:38s} pages={parsed['pageCount']} "
            f"empty={len(parsed['emptyPages'])} questions={len(parsed['questions'])}"
        )
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"\nWrote {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
