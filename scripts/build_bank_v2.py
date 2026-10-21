#!/usr/bin/env python3
"""
Build the MGIT question bank from the downloaded PYQ PDFs.

Sources:
  * embedded PDF text layer (positional parser), and
  * Tesseract OCR word boxes (column-aware line reconstruction).

For every paper the parser that produces the more complete/cleaner question set
is used.  Questions keep a link back to the exact Drive file and page.
"""

from __future__ import annotations

import hashlib
import json
import math
import re
from collections import defaultdict
from difflib import SequenceMatcher
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".cache" / "drive_manifest.json"
OCR_DIR = ROOT / ".cache" / "pyq_ocr_all"
PSM4_DIR = ROOT / ".cache" / "pyq_ocr_psm4_all"
DARK_DIR = ROOT / ".cache" / "pyq_ocr_dark_all"
OUT_RAW = ROOT / ".cache" / "papers_v2.json"
OUT = ROOT / ".cache" / "question_bank_v2.json"
OUT_JS = ROOT / "pyq-data.js"
FIXES_PATH = ROOT / "scripts" / "manual_fixes.json"
MANUAL_FIXES = (
    json.loads(FIXES_PATH.read_text(encoding="utf-8")) if FIXES_PATH.exists() else {}
)

SUBJECT_NAMES = {
    "DM": "Discrete Mathematics",
    "COA": "Computer Organization & Architecture",
    "OOPJ": "Object-Oriented Programming through Java",
    "DBMS": "Database Management Systems",
    "SE": "Software Engineering",
    "ES": "Environmental Studies",
    "IE": "Innovation and Entrepreneurship",
}

MONTHS = {
    "jan": 1, "january": 1, "feb": 2, "february": 2, "mar": 3, "march": 3,
    "apr": 4, "april": 4, "may": 5, "jun": 6, "june": 6, "jul": 7, "july": 7,
    "aug": 8, "august": 8, "sep": 9, "sept": 9, "september": 9, "oct": 10,
    "october": 10, "nov": 11, "november": 11, "dec": 12, "december": 12,
}

HEADER_SKIP = (
    "hall ticket", "mahatma gandhi", "b.tech", "common to", "time:",
    "max. marks", "max.marks", "answer all", "q. no", "q.no", "qno",
    "stem of", "stemofthe", "part-a", "part a", "part-b", "part b",
    "code:", "p.t.o", "m: marks", "m:marks", "l: bloom", "co:", "po:",
    "marks;", "level;", "programme outcome", "course outcome", "bloom",
    "regulation", "semester", "examinations", "examination", "question",
    "academic", "date & session", "branch & section", "roll no",
    "note:", "maximum marks", "answer key", "course :", "course:",
)

Q_RE = re.compile(r"^\s*(?P<major>[0-9lI]{1,2})\s*[.)]\s*(?:\(?(?P<sub>[a-j])\s*[).]?)?\s*(?P<rest>.*)$")
MAJOR_TAIL_RE = re.compile(r"^\s*(?P<major>[2-9])\s*[.)]\s*(?P<rest>.*)$")
SUB_ONLY_RE = re.compile(r"^\s*(?P<sub>[a-j])\s*[).]\s*(?P<rest>.*)$")
FOOTER_RE = re.compile(
    r"(?:M\s*:\s*Marks|Marks\s*;|Bloom|Programme Outcome|Course Outcome|P\.?T\.?O).*$", re.I
)


def norm(text: str) -> str:
    text = (
        text.replace("\u00ad", "")
        .replace("\u2013", "-")
        .replace("\u2014", "-")
        .replace("\u2018", "'")
        .replace("\u2019", "'")
        .replace("\u201c", '"')
        .replace("\u201d", '"')
        .replace("\x00", "")
        .replace("\u00a0", " ")
    )
    return re.sub(r"\s+", " ", text).strip()


def clean_question(text: str, marks: int | None = None) -> str:
    """Remove OCR/table artefacts that are not part of the question."""
    text = norm(text)
    text = FOOTER_RE.sub("", text)
    text = re.sub(r"\bQ\.?\s*No\.?\b.*$", "", text, flags=re.I)
    text = re.sub(r"\bStem\s*of\s*the\s*Question\b.*$", "", text, flags=re.I)
    text = re.sub(r"\bStemofthe\s*Question\b.*$", "", text, flags=re.I)
    text = re.sub(r"\s+Question\s*$", "", text, flags=re.I)
    text = re.sub(r"\s+Page\s+\d+\s+of\s+\d+.*$", "", text, flags=re.I)
    text = re.sub(r"\s+P\.?\s*T\.?\s*O\.?\s*$", "", text, flags=re.I)
    text = re.sub(r"\s+[OQ]\.?\s*No\.?\s*$", "", text, flags=re.I)
    text = re.sub(r"\s+OR\s*[.)]?\s*$", "", text, flags=re.I)
    text = re.sub(r"\s+OR\s*[xX]\s*[).]\s*[A-Za-z]?\s*$", "", text)
    text = text.replace("|", " ")
    # Drop standalone brace/bracket tokens left behind by the table layout, but
    # keep mathematical set notation such as {a, b, c} or [1, 2].
    text = re.sub(r"(?:(?<=^)|(?<=\s))[{}](?:(?=$)|(?=\s))", " ", text)
    text = re.sub(r"(?:(?<=^)|(?<=\s))[\[\]](?:(?=$)|(?=\s))", " ", text)
    text = text.replace("�?", "-").replace("\ufb01", "fi").replace("\ufb02", "fl")
    text = text.replace("\u00a0", " ").replace("\uFFFD", "")
    text = re.sub(r"\bINF\b", "1NF", text)
    text = re.sub(r"\bBCNF\b", "BCNF", text)
    text = re.sub(r"\bTbe\b", "The", text)
    text = re.sub(r"\bTlustrate\b", "Illustrate", text)
    text = re.sub(r"\btn\s+Java\b", "in Java", text)
    text = re.sub(r"\bnis\b", "n is", text)
    text = re.sub(r"\bfairdieis\b", "fair die is", text)
    text = re.sub(r"\b([A-Z][a-z]{3,})\.([a-z]{2,})", r"\1 \2", text)
    text = re.sub(r"\b([A-Z][a-z]{3,})\.([a-j])\b", r"\1 \2", text)
    text = re.sub(r"\b([a-z]{4,}):([a-z]{2,})", r"\1 \2", text)
    text = re.sub(r"\bCr eate\b", "Create", text)
    text = re.sub(r"\bex plain\b", "explain", text, flags=re.I)
    text = re.sub(r"\bexp\s+l\s*ain\b", "explain", text, flags=re.I)
    text = re.sub(r"\bwrit\s+e\b", "write", text, flags=re.I)
    text = re.sub(r"\bj\s*ava\b", "Java", text, flags=re.I)
    text = re.sub(r"\bu\s+ser\b", "user", text, flags=re.I)
    text = re.sub(r"\babo\s+ut\b", "about", text, flags=re.I)
    text = re.sub(r"\blimit\s+ations\b", "limitations", text, flags=re.I)
    text = re.sub(r"\bana\s+l\s*yze\b", "analyze", text, flags=re.I)
    text = re.sub(r"\beve\s+nt\b", "event", text, flags=re.I)
    text = re.sub(r"\bli\s+ste\s+n\s*ers\b", "listeners", text, flags=re.I)
    text = re.sub(r"\bha\s+ndlin\s+g\b", "handling", text, flags=re.I)
    text = re.sub(r"\bdistinguis\s+h\b", "distinguish", text, flags=re.I)
    text = re.sub(r"\bbetwe\s+en\b", "between", text, flags=re.I)
    text = re.sub(r"\bA\s+WT\b", "AWT", text)
    text = re.sub(r"\bswings\b", "Swing", text, flags=re.I)
    text = re.sub(r"\bStaté\b", "State", text)
    text = re.sub(r"\bDřaw\b", "Draw", text)
    text = re.sub(r"\brećeive\b", "receive", text)
    text = re.sub(r"\bcoetticient\b", "coefficient", text)
    text = re.sub(r"\b(\d)book\b", r"\1 book", text)
    text = re.sub(r"(\d)\"\s*(and|normal)", r"\1st \2", text)
    text = re.sub(r"(\d)™", lambda m: {"2": "2nd", "3": "3rd", "4": "4th"}.get(m.group(1), m.group(0)), text)
    text = re.sub(r"\bfloating-\s+Point\b", "floating-Point", text, flags=re.I)
    text = re.sub(r"'\s*\?", "?", text)
    text = re.sub(r"\bSQI\b", "SQL", text)
    text = re.sub(r"\bthe\s+Question\b.*$", "", text, flags=re.I)
    text = text.replace("\\'", "'")
    text = re.sub(r"\?\s*\.", "?", text)
    text = re.sub(r"\.\s*\?", "?", text)
    # leading question-number / OCR bullet leftovers
    text = re.sub(r"^\s*[¢©]\s*[).]?\s*", "", text)
    text = re.sub(r"^\s*\d{1,2}\s*[.)]\s*[\"'“]?[A-Za-z]?[\"'”]?\s+(?=[A-Z])", "", text)
    text = re.sub(r"^\s*[A-Za-z0-9]{1,2}\s*[.)]\s*[a-j]?\s*[.)]\s+(?=[A-Z])", "", text)
    text = re.sub(r"^\s*[a-j]\s*[.)]\s+(?=[A-Z])", "", text)
    text = re.sub(r"\s+([,.;:?])", r"\1", text)
    text = re.sub(r"([,.;:?])\1+", r"\1", text)
    # trailing marks / CO-PO columns
    if marks:
        text = re.sub(rf"\s+{marks}\s*$", "", text)
    text = re.sub(r"\s+(?:\d{1,2}\s+){2,}(?:\d{1,2}|[A-Za-z]{1,3})\s*$", "", text)
    # Garbled OCR debris that follows the final sentence, e.g.
    # "... interconnection network? nolttna2301" or "... answer. 5 p >".
    tail_m = re.search(r"[.?!]\s+(\S+(?:\s+\S+){0,3})\s*$", text)
    if tail_m:
        tail = tail_m.group(1)
        if len(tail) <= 16 and (
            re.search(r"[\u0400-\u04FF]", tail)
            or re.search(r"[0-9<>=|~^©®]", tail)
            or not re.search(r"[A-Za-z]{3,}", tail)
        ):
            text = text[:tail_m.start() + 1]
    # Leading numbering debris such as ".d) _ What is ..."
    text = re.sub(r"^[.)]\s*[a-j]?\s*[.)]?\s*[_\-\s]*\s*(?=[A-Z])", "", text)
    text = re.sub(r"\s{2,}", " ", text)
    text = text.strip(" |:;-—_")
    return text


def strip_diagram_noise(text: str) -> str:
    """Remove OCR labels from graph/diagram drawings that follow the question."""
    t = text
    t = re.sub(r"[\\]+", " ", t)
    t = re.sub(r"[«»¢€°]", " ", t)
    t = re.sub(r"\s+", " ", t).strip()

    # Cut diagram-label garbage that follows a complete sentence.
    for m in re.finditer(r"[?.!]", t):
        tail = t[m.end():].strip()
        if len(tail) < 8:
            continue
        # "... Find i) AUB" is still part of the question, not diagram noise.
        if re.match(
            r"(?:Find|Calculate|Compute|Determine|Show|Prove|Write|Draw|List|Explain|"
            r"Solve|Evaluate|State|Define|Give|Obtain|Apply|Illustrate|Construct|"
            r"Derive|Represent|Differentiate|Compare|Discuss|Describe)\b",
            tail,
            re.I,
        ):
            continue
        # A roman/lettered list item is part of the question.
        if re.match(r"^\(?(?:i{1,3}|iv|v|vi{0,3}|[a-j])\s*[).]", tail):
            continue
        single_letters = len(re.findall(r"\b[a-zA-Z]\b", tail))
        wordish = len(re.findall(r"[A-Za-z]{4,}", tail))
        symbols = len(re.findall(r"[~^|<>{}\[\]]", tail))
        tail_tokens = tail.split()
        label_tail = (
            len(tail_tokens) >= 3
            and all(re.fullmatch(r"[A-Za-z]{1,3}\d{0,2}", tok) for tok in tail_tokens)
        )
        weird = 0
        for tok in tail_tokens:
            core = tok.strip(".,;:()[]{}'\"")
            if not core:
                continue
            if re.search(r"[\u0400-\u04FF0-9<>=|~^_\\]", core):
                weird += 1
            elif re.search(r"[a-z][A-Z]", core):
                weird += 1
            elif re.fullmatch(r"[A-Za-z]{3,}", core) and not re.search(r"[aeiouAEIOU]", core):
                weird += 1
        gibberish_tail = len(tail_tokens) >= 2 and weird >= 2 and len(tail) <= 90
        if label_tail or gibberish_tail or (single_letters >= 3 and wordish <= 2 and not re.search(r"[=+*/×÷]", tail)) or symbols >= 2:
            t = t[:m.end()].strip()
            break

    # Cut leading diagram labels before the actual question.
    starter = re.search(
        r"\b(?:Define|Explain|Find|What|How|Why|Compare|Discuss|Describe|Write|State|"
        r"Show|Prove|List|Illustrate|Construct|Draw|Apply|Identify|Determine|Use|Consider|"
        r"Let|Given|Represent|Solve|Calculate|Evaluate|Justify|Differentiate|Develop|Design|"
        r"Create|Demonstrate|Analyze|Outline|Summarize|Classify|Simplify|Test|Verify|Obtain|"
        r"Derive|Compute|Perform|Convert|Name|Mention|Give|Make|With)\b",
        t,
    )
    if starter and starter.start() > 0 and starter.start() < 90:
        prefix = t[:starter.start()]
        if (
            len(re.findall(r"[A-Za-z]{3,}", prefix)) <= 1
            and not re.search(r"[{}\[\]()=<>]", prefix)
        ):
            t = t[starter.start():].strip()

    return clean_question(t)


TRUNC_END_RE = re.compile(
    r"\b(and|or|to|of|the|with|a|an|for|if|in|on|by|is|are|from|that|which|as|at|be|it|this|these|following|below)\s*[.:;,]?$"
)


def question_quality(text: str) -> float:
    if not text:
        return -999
    score = min(len(text), 150) / 10.0
    if text[-1:] in "?:.":
        score += 2
    if re.search(r"\b(Q\.?\s*No|Stem|Marks|Bloom|Programme)\b", text, re.I):
        score -= 12
    # two printed questions accidentally glued together
    if re.search(r"\b\d\s*[.)]\s*[a-j]\s*[.)]", text, re.I):
        score -= 25
    if re.search(r"\s[-–]\s*[A-Z][a-z]", text):
        score -= 10
    # left-over marks/CO/PO columns
    if re.search(r"(?:\s+\d{1,2}){3,}\s*$", text):
        score -= 10
    if re.search(r"\s(?:CO|PO)\s*\d", text):
        score -= 6
    if len(text) < 12:
        score -= 6
    if re.match(r"^[a-z]", text):
        score -= 8
    if TRUNC_END_RE.search(text):
        score -= 20
    if re.search(r"\bPage\s+\d+\s+of\s+\d+\b|\bP\.?T\.?O\b", text, re.I):
        score -= 6
    if re.search(r"\b(?:OR)\s*[xX]?\s*[).]?\s*[A-Za-z]?\s*$", text):
        score -= 5
    if re.search(r"[\u0400-\u04FF]", text):
        score -= 30
    if "\ufffd" in text:
        score -= 20
    words = re.findall(r"[A-Za-z]+", text)
    if words and not re.search(r"""[.?!]["')\]]?\s*$""", text):
        last = words[-1]
        if len(last) <= 3 and last.islower() and last not in {
            "and", "are", "but", "for", "how", "its", "not", "the", "was", "why", "with",
            "you", "all", "any", "can", "may", "use", "two", "one", "out", "per", "via",
        }:
            # A tail with no terminal punctuation that ends in a fragment is a
            # strong sign the OCR/PDF line was cut off.
            score -= 14
    if re.search(r"\b(?:Tbe|teh|adn|ot|sf|th|wil|wit)\b", text):
        score -= 8
    if text.count("?") > 3:
        score -= 6
    return score


# --------------------------------------------------------------------------
# PDF text-layer parser
# --------------------------------------------------------------------------
def text_lines(page):
    data = page.get_text("dict")
    lines = []
    for block in data.get("blocks", []):
        if block.get("type") != 0:
            continue
        for line in block.get("lines", []):
            parts = [span.get("text", "") for span in line.get("spans", [])]
            text = norm(" ".join(parts))
            if not text:
                continue
            x0, y0, x1, y1 = line["bbox"]
            lines.append({"text": text, "x0": x0, "y0": y0, "x1": x1, "y1": y1})
    lines.sort(key=lambda l: (l["y0"], l["x0"]))
    # A printed row can contain text whose bounding boxes start a few points apart
    # (e.g. the "1. f)" label sits slightly lower than its stem).  Group by the
    # vertical centre with a tolerance derived from the font height.
    heights = [l["y1"] - l["y0"] for l in lines if l["y1"] > l["y0"]]
    median_h = sorted(heights)[len(heights) // 2] if heights else 10.0
    tol = max(5.0, median_h * 0.8)
    rows = []
    for line in lines:
        centre = (line["y0"] + line["y1"]) / 2
        if rows:
            anchor = (rows[-1][0]["y0"] + rows[-1][0]["y1"]) / 2
            if abs(centre - anchor) <= tol:
                rows[-1].append(line)
                continue
        rows.append([line])
    ordered = []
    for row in rows:
        ordered.extend(sorted(row, key=lambda l: l["x0"]))
    return ordered


def find_columns(lines, width):
    header = next(
        (l for l in lines if re.search(r"stem\s*of|stemofthe", l["text"].lower())),
        None,
    )
    if header:
        cands = [l for l in lines if abs(l["y0"] - header["y0"]) < 16 and l["x0"] > width * 0.55]
        marks = next((l for l in cands if l["text"].strip().upper()[:1] in {"M", "L", "C", "P"}), None)
        qno = next((l for l in cands if "q" in l["text"].lower()), None)
        qno_end = (qno["x1"] + 12) if qno else width * 0.14
        marks_start = (marks["x0"] - 6) if marks else width * 0.78
        return qno_end, marks_start
    return width * (0.14 if width > 600 else 0.16), width * (0.78 if width > 600 else 0.80)


def parse_text_page(page, page_no):
    lines = text_lines(page)
    if sum(len(l["text"]) for l in lines) < 40:
        return []
    qno_end, marks_start = find_columns(lines, page.rect.width)
    out = []
    current = None

    def flush():
        nonlocal current
        if current:
            current["text"] = norm(current["text"])
            if len(current["text"]) >= 4:
                out.append(current)
        current = None

    for line in lines:
        text = line["text"].strip()
        low = text.lower()
        compact = low.replace(" ", "")
        if compact.startswith(("part-a", "parta", "part-b", "partb")):
            continue
        if any(low.startswith(p) for p in HEADER_SKIP):
            continue
        if re.fullmatch(r"\d{1,2}", text):
            if current is not None and line["x0"] >= marks_start - 10:
                if current["marks"] is None:
                    current["marks"] = int(text)
            continue
        if re.fullmatch(r"page\s*\d{1,2}", low):
            continue

        m = Q_RE.match(text)
        if line["x0"] < marks_start - 30 and m:
            major_txt = m.group("major").replace("l", "1").replace("I", "1")
            try:
                major = int(major_txt)
            except ValueError:
                major = 0
            if 1 <= major <= 9:
                flush()
                sub = (m.group("sub") or "").lower()
                if not sub:
                    rest = (m.group("rest") or "").strip()
                    sm = re.match(r"^(?:([a-j]|1|[ivx]{1,4}))\s*[).]\s*(.*)$", rest)
                    if sm:
                        sub = sm.group(1).lower()
                        rest = sm.group(2)
                    else:
                        rest = m.group("rest") or ""
                else:
                    rest = m.group("rest") or ""
                current = {
                    "major": major,
                    "sub": sub,
                    "text": rest,
                    "marks": None,
                    "page": page_no,
                    "source": "text",
                }
                continue

        if current is None:
            continue
        if line["x0"] >= marks_start - 8:
            if re.fullmatch(r"\d{1,2}", text) and current["marks"] is None:
                current["marks"] = int(text)
            continue
        if low in {"or", "and"}:
            continue
        if line["x0"] < marks_start - 8:
            current["text"] += " " + text
    flush()
    return out


# --------------------------------------------------------------------------
# OCR (TSV) parser
# --------------------------------------------------------------------------
def ocr_lines(item, page_no):
    path = OCR_DIR / f"{item['subject']}__{item['fileName']}__p{page_no}.json"
    if not path.exists():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    width, height = data["width"], data["height"]
    words = [
        w for w in data.get("words", [])
        if w["text"].strip() and w["text"].strip() not in {"|", "{", "}", "[", "]", "_", "="}
    ]
    if not words:
        return []
    tol = max(12.0, height * 0.006)
    rows = []
    for w in sorted(words, key=lambda x: (x["y"], x["x"])):
        for row in rows:
            if abs(w["y"] - row[0]["y"]) <= tol:
                row.append(w)
                break
        else:
            rows.append([w])

    cutoff = width * 0.73
    rights = []
    for row in rows[:30]:
        for w in row:
            token = re.sub(r"[^A-Z]", "", w["text"].strip().upper())
            if w["x"] > width * 0.55 and token in {"M", "L", "CO", "PO", "ML", "MIL", "COPO"}:
                rights.append(w["x"])
    if rights:
        cutoff = min(rights) - 30

    out = []
    for row in sorted(rows, key=lambda r: r[0]["y"]):
        row = sorted(row, key=lambda w: w["x"])
        marks_word = next(
            (w for w in row if w["x"] >= cutoff and re.fullmatch(r"\d{1,2}", w["text"].strip())),
            None,
        )
        text_row = [w for w in row if w["x"] < cutoff]
        if not text_row:
            continue
        line = " ".join(w["text"] for w in text_row)
        line = re.sub(r"\s+", " ", line).strip(" |{}_")
        if line:
            out.append((
                int(text_row[0]["y"]),
                int(text_row[0]["x"]),
                line,
                int(marks_word["text"]) if marks_word else None,
            ))
    return out


def marks_from_ocr_row(item, page_no, y_target):
    """Return the printed M-column value for the row nearest y_target."""
    path = OCR_DIR / f"{item['subject']}__{item['fileName']}__p{page_no}.json"
    if not path.exists():
        return None
    data = json.loads(path.read_text(encoding="utf-8"))
    width = data["width"]
    best = None
    for w in data.get("words", []):
        if abs(w["y"] - y_target) > 24 or w["x"] < width * 0.7:
            continue
        if re.fullmatch(r"\d{1,2}", w["text"].strip()):
            if best is None or w["x"] < best[0]:
                best = (w["x"], int(w["text"]))
    return best[1] if best else None


def parse_ocr_page(item, page_no):
    lines = ocr_lines(item, page_no)
    path = OCR_DIR / f"{item['subject']}__{item['fileName']}__p{page_no}.json"
    width = json.loads(path.read_text(encoding="utf-8")).get("width", 2500) if path.exists() else 2500
    qno_x = width * 0.145
    out = []
    current = None
    major = None
    seen = set()

    def flush():
        nonlocal current
        if current:
            current["text"] = norm(current["text"])
            if len(current["text"]) >= 4:
                key = (current["major"], current["sub"])
                if key not in seen:
                    seen.add(key)
                    out.append(current)
        current = None

    for y, x, line, row_marks in lines:
        low = line.lower()
        compact = low.replace(" ", "")
        if compact.startswith(("part-a", "parta", "part-b", "partb")):
            continue
        if any(low.startswith(p) for p in HEADER_SKIP):
            continue
        if low in {"or", "and"}:
            continue
        if re.fullmatch(r"\d{1,2}", line):
            continue
        if re.fullmatch(r"page\s*\d{1,2}", low):
            continue

        m = Q_RE.match(line)
        if m and x <= qno_x:
            major_txt = m.group("major").replace("l", "1").replace("I", "1")
            try:
                maj = int(major_txt)
            except ValueError:
                maj = 0
            if 1 <= maj <= 9:
                sub = (m.group("sub") or "").lower()
                rest = (m.group("rest") or "").strip()
                if not sub:
                    sm = re.match(r"^(?:([a-j]|1|[ivx]{1,4}))\s*[).]\s*(.*)$", rest)
                    if sm:
                        sub = sm.group(1).lower()
                        rest = sm.group(2)
                # A bare number followed by a list item belongs to the current question.
                if maj == 1 and current is not None and not sub and not rest:
                    continue
                flush()
                major = maj
                current = {
                    "major": maj,
                    "sub": sub,
                    "text": rest,
                    "marks": row_marks,
                    "page": page_no,
                    "source": "ocr",
                }
                continue

        sm = SUB_ONLY_RE.match(line)
        if sm and x <= qno_x and major == 1 and current is not None:
            letter = sm.group("sub")
            if letter > (current.get("sub") or "a") and len(sm.group("rest")) > 3:
                flush()
                current = {
                    "major": 1,
                    "sub": letter,
                    "text": sm.group("rest"),
                    "marks": row_marks,
                    "page": page_no,
                    "source": "ocr",
                }
                continue

        if current is None:
            continue
        current["text"] += " " + line
    flush()
    return out


# --------------------------------------------------------------------------
# Metadata
# --------------------------------------------------------------------------
def meta_from_text(text: str, fallback_name: str):
    head = " ".join(text.split()[:120])
    semester = None
    sm = re.search(r"B\.?\s*Tech\.?[^A-Za-z]{0,5}\s*(III|IV|VI|V|II)\s*Semester", head, re.I)
    if sm:
        semester = sm.group(1).upper()

    has_supp = bool(re.search(r"supplement", head, re.I))
    has_reg = bool(re.search(r"regular", head, re.I))
    if has_supp and has_reg:
        exam_type = "Regular/Supplementary"
    elif has_supp:
        exam_type = "Supplementary"
    elif has_reg:
        exam_type = "Regular"
    else:
        exam_type = "Unknown"

    year = None
    month = None
    range_m = re.search(
        r"(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s*[-,/ ]*\s*(20\d{2})\s*/\s*"
        r"(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s*[-,/ ]*\s*(20\d{2})",
        head, re.I,
    )
    if range_m:
        month = MONTHS.get(range_m.group(3).lower())
        year = int(range_m.group(4))
    if year is None:
        ym = re.search(r"(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s*[./-]?\s*(20\d{2})", head, re.I)
        if ym:
            month = MONTHS.get(ym.group(1).lower())
            year = int(ym.group(2))
    if year is None:
        ys = re.findall(r"\b(20\d{2})\b", head)
        if ys:
            year = max(int(y) for y in ys)
    if not year:
        ys = re.findall(r"\b(20\d{2})\b", fallback_name)
        if ys:
            year = max(int(y) for y in ys)

    if month is None:
        mm = re.search(r"\b(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)\b", head, re.I)
        if mm:
            month = MONTHS.get(mm.group(1).lower())
    if month is None:
        mf = re.search(r"\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)", fallback_name, re.I)
        if mf:
            month = MONTHS.get(mf.group(1).lower())

    regulation = None
    rm = re.search(r"\bMR[\s-]?(\d{2})\b", head, re.I)
    if rm:
        regulation = f"MR-{rm.group(1)}"

    code = None
    cm = re.search(r"Code\s*:\s*([A-Z0-9]{6,12})", head, re.I)
    if cm:
        code = cm.group(1).upper()

    # The printed paper code starts with B + semester digit (e.g. B414 = IV sem).
    if code:
        cm2 = re.match(r"B([2-8])", code)
        if cm2:
            semester = {"2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI",
                        "7": "VII", "8": "VIII"}[cm2.group(1)]

    return {
        "semester": semester,
        "examType": exam_type,
        "year": year,
        "month": month,
        "regulation": regulation,
        "paperCode": code,
    }


def short_label(meta, fallback):
    month_names = {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun",
                   7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"}
    parts = []
    if meta.get("month"):
        parts.append(month_names[meta["month"]])
    if meta.get("year"):
        parts.append(str(meta["year"]))
    session = " ".join(parts) if parts else ""
    if not session:
        session = Path(fallback).stem
    typ = meta.get("examType")
    if typ and typ not in {"Unknown"}:
        return f"{session} {typ}"
    return session


def psm4_text(item, page_no):
    path = PSM4_DIR / f"{item['subject']}__{item['fileName']}__p{page_no}.txt"
    if path.exists():
        return path.read_text(encoding="utf-8", errors="replace")
    return ""


def dark_text(item, page_no):
    """OCR of the page with light watermark pixels removed."""
    path = DARK_DIR / f"{item['subject']}__{item['fileName']}__p{page_no}.txt"
    if path.exists():
        return path.read_text(encoding="utf-8", errors="replace")
    return ""


def page_header_text(item, page_no, page):
    """Return the header text of a page, using OCR when there is no text layer."""
    text = page.get_text("text")
    if len(text.strip()) >= 80:
        return text
    lines = []
    dk = dark_text(item, page_no)
    if dk:
        lines.extend(dk.splitlines()[:18])
    p4 = psm4_text(item, page_no)
    if p4:
        lines.extend(p4.splitlines()[:18])
    lines.extend(line for _y, _x, line, _m in ocr_lines(item, page_no)[:22])
    return "\n".join(lines)


def is_paper_start(header):
    low = norm(header).lower()
    return bool(
        re.search(r"hall\s*ticket", low)
        and re.search(r"b\.?\s*tech|bachelor", low)
        and re.search(r"part[-\s]*a|parta", low)
        and re.search(r"semester|examination", low)
    )


def detect_subject(header, fallback):
    """The Drive folder is not reliable: several papers are filed under the wrong subject."""
    low = norm(header).lower()
    if "discrete mathematics" in low or "discrete maths" in low:
        return "DM"
    if "computer organization" in low or "computer architecture" in low:
        return "COA"
    if "database management" in low or "dbms" in low:
        return "DBMS"
    if "software engineering" in low:
        return "SE"
    if "java" in low and ("object" in low or "programming" in low):
        return "OOPJ"
    return fallback


# --------------------------------------------------------------------------
# Paper assembly
# --------------------------------------------------------------------------
def chapter_for(major, sub):
    if major == 1:
        if sub and sub.isalpha():
            idx = "abcdefghij".find(sub) + 1
        elif sub and sub.isdigit():
            idx = int(sub)
        else:
            return None
        return math.ceil(idx / 2) if 1 <= idx <= 10 else None
    if 2 <= major <= 6:
        return major - 1
    return None


def normalise_subparts(qs):
    """Fill missing Part-A letters in sequence and drop junk sub-parts."""
    out = []
    part_a = [q for q in qs if q["major"] == 1]
    for q in qs:
        if q["major"] == 1:
            letter = (q.get("sub") or "").lower()
            if letter not in "abcdefghij":
                q["sub"] = ""
        else:
            letter = (q.get("sub") or "").lower()
            q["sub"] = letter if letter in "abcd" else ""
    # Assign empty Part-A letters in order only when at least half are known
    known = [q for q in part_a if q["sub"]]
    if len(known) >= 5:
        used = {q["sub"] for q in known}
        next_idx = 0
        for q in part_a:
            if q["sub"]:
                continue
            while next_idx < 10 and "abcdefghij"[next_idx] in used:
                next_idx += 1
            if next_idx < 10:
                q["sub"] = "abcdefghij"[next_idx]
                used.add(q["sub"])
                next_idx += 1
    return qs


def infer_marks(questions, header_text):
    """Derive the marks from the printed paper structure, not noisy OCR columns."""
    part_a = [q for q in questions if q["major"] == 1]
    part_b = [q for q in questions if q["major"] >= 2]
    m = re.search(r"Part[-\s]*A[^\n]{0,70}?10\s*[x×]\s*(\d+)", header_text, re.I)
    part_a_marks = int(m.group(1)) if m else None
    if part_a_marks not in (1, 2):
        vals = [q["marks"] for q in part_a if q.get("marks") in (1, 2)]
        part_a_marks = max(set(vals), key=vals.count) if vals else 1
    for q in part_a:
        q["marks"] = part_a_marks

    by_major = defaultdict(list)
    for q in part_b:
        by_major[q["major"]].append(q)
    for major, qs in by_major.items():
        n = len(qs)
        if n == 1:
            qs[0]["marks"] = 10
        elif n == 2:
            for q in qs:
                q["marks"] = 5
        elif n >= 4:
            for q in qs:
                q["marks"] = 5
        else:  # three sub-parts: normally a/b = 5 each and c = 10 (or vice versa)
            tens = [q for q in qs if q.get("marks") == 10]
            target = tens[0] if tens else max(qs, key=lambda q: len(q["text"]))
            for q in qs:
                q["marks"] = 10 if q is target else 5

    for q in questions:
        q["text"] = clean_question(q["text"], q["marks"])
        q["text"] = re.sub(
            r"([?.!])\s+(?:[A-Za-z]|\d{1,2})(?:\s+(?:[A-Za-z]|\d{1,2})){0,3}\s*$", r"\1", q["text"]
        )
        q["text"] = q["text"].strip()


def dedupe_questions(qs):
    """Collapse the same sub-part captured twice (text layer + OCR)."""
    out = []
    for q in qs:
        key = re.sub(r"[^a-z0-9]", "", q["text"].lower())
        match = None
        for old in out:
            if old.get("chapter") != q.get("chapter"):
                continue
            other = re.sub(r"[^a-z0-9]", "", old["text"].lower())
            if not key or not other:
                continue
            if key == other:
                match = old
                break
            if len(key) > 30 and (key in other or other in key):
                match = old
                break
            if SequenceMatcher(None, key, other).ratio() >= 0.96:
                match = old
                break
        if match is None:
            out.append(q)
        else:
            q_score = question_quality(q["text"])
            m_score = question_quality(match["text"])
            # The embedded PDF text layer is authoritative for born-digital
            # papers; OCR only wins when it is clearly worse in the text layer.
            q_rank = q_score + (6 if q.get("source") == "text" else 0)
            m_rank = m_score + (6 if match.get("source") == "text" else 0)
            if q_rank > m_rank + 1:
                match["text"] = q["text"]
                match["source"] = q.get("source")
                if q.get("page"):
                    match["page"] = q["page"]
            if not match.get("marks") and q.get("marks"):
                match["marks"] = q["marks"]
    return out


def psm4_lines(item, pages):
    lines = []
    for pno in pages:
        path = DARK_DIR / f"{item['subject']}__{item['fileName']}__p{pno}.txt"
        if not path.exists():
            path = PSM4_DIR / f"{item['subject']}__{item['fileName']}__p{pno}.txt"
        if not path.exists():
            continue
        for line in path.read_text(encoding="utf-8").splitlines():
            line = norm(line)
            if len(line) < 3:
                continue
            # Drop the printed marks/CO-PO columns; they are not part of the stem.
            line = re.sub(r"\s*\|\s*(?:\d|CO|PO|M|L).*$", "", line)
            line = _strip_marks_tail(line)
            line = line.replace("|", " ")
            line = re.sub(r"(?:\s+\d{1,2}){2,}\s*$", "", line).strip()
            if len(line) < 3:
                continue
            if re.search(r"\b(?:P\.?T\.?O|Marks|Bloom|Part[-\s]*[AB])\b", line, re.I):
                continue
            if re.fullmatch(r"[\d\s.,/|_-]+", line):
                continue
            lines.append(line)
    return lines


# --------------------------------------------------------------------------
# psm 4 text parser (cleaner reading order for scanned pages)
# --------------------------------------------------------------------------
PSM4_Q_RE = re.compile(
    r"^(?:Q\.?\s*)?(?P<major>[0-9lI]{1,2})\s*[.)]\s*(?P<sub>[a-j])\s*[.)]?\s*(?P<rest>.*)$",
    re.I,
)
PSM4_SKIP_RE = re.compile(
    r"(hall\s*ticket|mahatma\s*gandhi|b\.?\s*tech|semester|common\s+to|"
    r"time\s*:|max\.?\s*marks|answer\s+all|q\.?\s*no|"
    r"stem\s*of|m\s*:\s*marks|bloom|programme\s+outcome|course\s+outcome|"
    r"p\.?\s*t\.?\s*o\.?|^\W*page\s+\d+|^\d+\s*$|"
    r"^mr[-\s]?\d{2}\b|code\s*:)",
    re.I,
)


def psm4_question_start(line: str):
    m = PSM4_Q_RE.match(line)
    if not m:
        return None
    major = m.group("major").strip()
    if major.lower() in {"l", "i"}:
        major = "1"
    if not major.isdigit() or not (1 <= int(major) <= 6):
        return None
    sub = m.group("sub").lower()
    if not ("a" <= sub <= "j"):
        return None
    return int(major), sub, m.group("rest").strip()


def _repair_psm4_numbering(line: str) -> str:
    """Fix the common b->6 / i->1 style OCR slip in printed question numbers."""
    digit_to_letter = {"1": "i", "6": "b", "8": "b", "9": "g"}

    def repl(m):
        major = m.group(1)
        sep = m.group(2)
        letter = digit_to_letter.get(m.group(3))
        if not letter:
            return m.group(0)
        return f"{major}{sep}{letter}{m.group(4)} "

    line = re.sub(r"^(\s*(?:Q\.?\s*)?[0-9lI]{1,2})\s*([.)])\s*([0-9])\s*([.)])\s*", repl, line)
    return line


def _core_token(tok: str) -> str:
    return tok.strip("|[]{}()!.,;:=@'\"")


def _is_digit_token(tok: str) -> bool:
    core = _core_token(tok)
    return bool(re.fullmatch(r"[A-Za-z]?[,|]?\d{1,2}[A-Za-z]?(?:[,;|]\d{1,2}[A-Za-z]?)*", core))


def _is_label_token(tok: str) -> bool:
    core = _core_token(tok)
    return bool(re.fullmatch(r"(?i:co|po|ml|mil|copo|l|m|c|o|p|i|j)", core))


def _is_caps_label(tok: str) -> bool:
    core = _core_token(tok).upper()
    return core in {"M", "L", "C", "P", "O", "I", "J", "CO", "PO", "ML", "MIL", "COPO", "LO", "MO", "BL"}


def _strip_marks_tail(line: str) -> str:
    """Drop the printed M / L / CO / PO tail that psm 4 glues onto the stem."""
    tokens = line.split()
    while tokens and set(tokens[-1]) <= {"|"}:
        tokens.pop()

    # Inside the marks column a bare "|" is a separator, never part of the stem.
    tail_start = max(0, len(tokens) - 9)
    tokens = tokens[:tail_start] + [t for t in tokens[tail_start:] if _core_token(t)]

    removed = 0
    digits = 0
    pipe_seen = False
    while tokens and removed < 8:
        # Separator-only tokens ("|", "]") sit between columns; drop them first.
        while tokens and not _core_token(tokens[-1]):
            pipe_seen = pipe_seen or "|" in tokens[-1]
            tokens.pop()
            removed += 1
        if not tokens:
            break
        tok = tokens[-1]
        core = _core_token(tok)
        if _is_digit_token(tok):
            digits += 1
            tokens.pop()
            removed += 1
            continue
        if digits > 0 and (_is_label_token(tok) or _is_caps_label(tok)):
            tokens.pop()
            removed += 1
            continue
        if len(tokens) >= 2 and (
            _is_label_token(tok) or _is_caps_label(tok) or re.fullmatch(r"[A-Za-z]", core)
        ) and (
            _is_digit_token(tokens[-2]) or _is_label_token(tokens[-2])
        ):
            tokens.pop()
            removed += 1
            continue
        break

    if digits >= 1 and (removed >= 2 or pipe_seen):
        return " ".join(tokens)
    return line


def _psm4_clean_lines(text: str):
    lines = []
    for raw in text.splitlines():
        line = norm(raw)
        line = _repair_psm4_numbering(line)
        # Drop the printed marks/CO-PO tail before touching inline pipes.
        line = _strip_marks_tail(line)
        # Drop a trailing marks/CO-PO column, but keep text after a plain '|'.
        line = re.sub(r"\s*\|\s*(?=(?:\d|CO\b|PO\b|M\b|L\b)).*$", "", line)
        line = line.replace("|", " ")
        line = re.sub(r"(?:\s+\d{1,2}){2,}\s*$", "", line).strip()
        line = re.sub(r"\s+\d{1,2}\s+(?i:l|m|c|i|j)\s*$", "", line).strip()
        line = re.sub(r"([.?:;])\s+[a-z]{1,3}\s+\d{1,2}\s*$", r"\1", line)
        line = re.sub(r"^[^\w(\"'\[]+", "", line).strip()
        if len(line) < 3 or PSM4_SKIP_RE.search(line):
            continue
        if re.fullmatch(r"[\d\s.,/|_-]+", line):
            continue
        lines.append(line)
    return lines


def _embedded_question_number(text: str):
    return bool(re.search(r"\b\d\s*[.)]\s*[a-j]\s*[.)]", text, re.I))


def _looks_like_question_start(line: str, current_text: str):
    """Heuristic for a question whose printed number OCR failed to capture."""
    if not re.match(r"^[A-Z(]", line):
        return False
    if len(line.split()) < 3:
        return False
    # Ignore one or two stray diagram letters after the final punctuation.
    current_text = re.sub(r"([?.!])[^?.!]{0,6}$", r"\1", current_text).strip()
    if not re.search(r"[?.!:]\s*$", current_text):
        return False
    return not re.match(
        r"^(?:OR|And|But|Also|With|Where|Which|Such|These|This|The|In|If|It)\b", line
    )


def _parse_psm4_numbered(lines, page_no: int, major_ctx: int = 1, bare_sub: bool = False):
    questions = []
    current = None
    for line in lines:
        start = psm4_question_start(line)
        if start:
            major, sub, rest = start
            current = {
                "major": major, "sub": sub, "text": rest, "page": page_no,
                "marks": None, "source": "ocr4",
            }
            questions.append(current)
            major_ctx = major
            continue

        # psm 4 sometimes loses the major number and keeps only "c) ...".
        if bare_sub and current is not None:
            sm = SUB_ONLY_RE.match(line)
            if sm:
                letter = sm.group("sub").lower()
                rest = sm.group("rest").strip()
                if current["sub"] < letter and len(rest) >= 8:
                    current = {
                        "major": 1, "sub": letter, "text": rest, "page": page_no,
                        "marks": None, "source": "ocr4",
                    }
                    questions.append(current)
                    continue

        if re.fullmatch(r"OR\s*[|.]*", line, re.I):
            current = None
            continue

        if current is None:
            # An unnumbered question starts a new block.
            current = {
                "major": major_ctx, "sub": "", "text": line, "page": page_no,
                "marks": None, "source": "ocr4",
            }
            questions.append(current)
            continue

        if _looks_like_question_start(line, current["text"]):
            current["text"] = re.sub(r"([?.!])[^?.!]{0,6}$", r"\1", current["text"]).strip()
            current = {
                "major": major_ctx, "sub": "", "text": line, "page": page_no,
                "marks": None, "source": "ocr4",
            }
            questions.append(current)
        else:
            current["text"] = (current["text"] + " " + line).strip()
    return questions


def _split_unnumbered_part_a(lines):
    items = []
    current = ""
    for line in lines:
        if not current:
            current = line
        elif _looks_like_question_start(line, current):
            items.append(current)
            current = line
        else:
            current = (current + " " + line).strip()
    if current:
        items.append(current)
    return items


def _fill_part_letters(questions, letters="abcdefghij"):
    """Fill missing sub-part letters without moving known ones."""
    known = {q["sub"] for q in questions if q["sub"]}
    used = set(known)
    next_idx = 0
    for q in questions:
        if q["sub"]:
            continue
        while next_idx < len(letters) and letters[next_idx] in used:
            next_idx += 1
        if next_idx >= len(letters):
            break
        q["sub"] = letters[next_idx]
        used.add(q["sub"])
        next_idx += 1
    return questions


def parse_psm4_page(text: str, page_no: int):
    lines = _psm4_clean_lines(text)
    if not lines:
        return []

    a_idx = next((i for i, l in enumerate(lines) if re.match(r"^part[-\s]*a\b", l, re.I)), None)
    b_idx = next((i for i, l in enumerate(lines) if re.match(r"^part[-\s]*b\b", l, re.I)), None)

    # Part A: most scans print 1.a) ... 1.j); some lose the column numbers.
    part_a = []
    if a_idx is not None:
        a_end = b_idx if b_idx is not None and b_idx > a_idx else len(lines)
        a_lines = lines[a_idx + 1:a_end]
        part_a = _parse_psm4_numbered(a_lines, page_no, major_ctx=1, bare_sub=True)
        if len(part_a) < 8:
            text_items = _split_unnumbered_part_a(a_lines)
            if len(text_items) == 10:
                part_a = [{
                    "major": 1, "sub": "abcdefghij"[i], "text": item, "page": page_no,
                    "marks": None, "source": "ocr4",
                } for i, item in enumerate(text_items)]
        elif len(part_a) == 10 and all(not q["sub"] for q in part_a):
            for i, q in enumerate(part_a):
                q["sub"] = "abcdefghij"[i]
        _fill_part_letters(part_a)

    # Part B
    part_b = []
    if b_idx is not None:
        part_b = _parse_psm4_numbered(lines[b_idx + 1:], page_no, major_ctx=2)
        by_major = defaultdict(list)
        for q in part_b:
            by_major[q["major"]].append(q)
        for qs in by_major.values():
            if len(qs) <= 4:
                _fill_part_letters(qs, "abcd")

    if not part_a and not part_b:
        raw = _parse_psm4_numbered(lines, page_no, major_ctx=1)
        # Without a Part-A/Part-B marker we only trust numbered questions.
        return [q for q in raw if q["sub"]]
    return part_a + part_b


def _tokens(text):
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).split()


def _tok_equal(a, b):
    if a == b:
        return True
    if len(a) > 3 and len(b) > 3 and SequenceMatcher(None, a, b).ratio() >= 0.8:
        return True
    return False


def repair_from_psm4(text, lines):
    """Recover words dropped by the table-aware OCR pass (psm 6)."""
    if not lines:
        return text
    q_tokens = _tokens(text)
    if len(q_tokens) < 3:
        return text
    best = None
    for i in range(len(lines)):
        for span in (1, 2, 3):
            raw = " ".join(lines[i:i + span]).strip()
            if not raw or len(raw) > 800:
                continue
            raw = clean_question(raw)
            raw = re.sub(r"^\s*\d{1,2}\s*[.)]\s*(?:[a-j]\s*[.)]\s*)?", "", raw)
            parts = raw.split()
            while parts and re.fullmatch(r"[\d|'\".,;:_-]{1,3}|[A-Za-z]{1,2}", parts[-1]):
                parts.pop()
            raw = " ".join(parts).strip()
            w_tokens = _tokens(raw)
            if len(w_tokens) < len(q_tokens):
                continue
            pos = 0
            ok = True
            for token in q_tokens:
                while pos < len(w_tokens) and not _tok_equal(token, w_tokens[pos]):
                    pos += 1
                if pos >= len(w_tokens):
                    ok = False
                    break
                pos += 1
            if not ok:
                continue
            extra = len(w_tokens) - len(q_tokens)
            if extra > 4:
                continue
            if re.search(r"\b(?:OR|Part[-\s]*[AB]|Marks|P\.?T\.?O)\b", raw, re.I):
                continue
            if re.search(r"\b[1-9]\.\s*[a-j]\)\s+[A-Z]", raw):
                continue
            if re.match(r"^\s*\d{1,2}\s*[.)]\s+[A-Z]", raw):
                continue
            score = (extra, len(raw))
            if best is None or score < best[0]:
                best = (score, raw)
    if best is None:
        return text
    fixed = clean_question(best[1])
    if len(fixed) < len(text) or len(fixed) - len(text) > 160:
        return text
    return fixed


def split_embedded_questions(qs):
    """Split a question whose next numbered part was glued onto it by the PDF."""
    out = []
    pattern = re.compile(
        r"(?:^|\s)[-–]?\s*([1-9])\.\s*([a-j])\)\s+(?=[A-Z])"
    )
    for q in qs:
        text = q["text"]
        m = pattern.search(text)
        if not m or m.start() < 8:
            out.append(q)
            continue
        head = text[:m.start()].strip(" -–")
        tail = text[m.end():].strip()
        if len(head) < 8 or len(tail) < 15:
            out.append(q)
            continue
        q["text"] = head
        out.append(q)
        out.append({
            "major": int(m.group(1)),
            "sub": m.group(2),
            "text": tail,
            "page": q.get("page"),
            "marks": None,
            "source": q.get("source"),
            "chapter": chapter_for(int(m.group(1)), m.group(2)),
        })
    return out


def paper_from_pages(item, pages, page_texts, doc, header_text=""):
    def texts_similar(a, b):
        na = re.sub(r"[^a-z0-9 ]", " ", (a or "").lower())
        nb = re.sub(r"[^a-z0-9 ]", " ", (b or "").lower())
        na = re.sub(r"\s+", " ", na).strip()
        nb = re.sub(r"\s+", " ", nb).strip()
        if not na or not nb:
            return False
        if na in nb or nb in na:
            short, long = sorted((na, nb), key=len)
            return len(short) >= 20 and len(short) / len(long) >= 0.82
        return SequenceMatcher(None, na, nb).ratio() >= 0.9

    text_qs = []
    ocr_qs = []
    dark_qs = []
    p4_qs = []
    for pno in pages:
        page = doc[pno - 1]
        if page.get_text("text").strip():
            text_qs.extend(parse_text_page(page, pno))
        ocr_qs.extend(parse_ocr_page(item, pno))
        dk = dark_text(item, pno)
        if dk:
            for q in parse_psm4_page(dk, pno):
                q["source"] = "ocrd"
                dark_qs.append(q)
        p4 = psm4_text(item, pno)
        if p4:
            p4_qs.extend(parse_psm4_page(p4, pno))

    def prepare(qs):
        prepared = []
        for q in qs:
            q["text"] = clean_question(q["text"], q.get("marks"))
            if len(q["text"]) < 5:
                continue
            prepared.append(q)
        return normalise_subparts(prepared)

    text_qs = prepare(text_qs)
    ocr_qs = prepare(ocr_qs)
    dark_qs = prepare(dark_qs)
    p4_qs = prepare(p4_qs)

    # merge the sources question-by-question; keep the cleanest wording
    by_key = {}
    order = []
    for q in text_qs + dark_qs + ocr_qs:
        key = (q["major"], q["sub"])
        if key not in by_key:
            by_key[key] = q
            order.append(key)
            continue
        old = by_key[key]
        q_is_text = q.get("source") == "text"
        old_is_text = old.get("source") == "text"
        if q_is_text and not old_is_text:
            # A real text layer beats OCR unless it is a stub.
            if len(q["text"]) >= 25 or question_quality(q["text"]) > question_quality(old["text"]):
                if q.get("marks") is None:
                    q["marks"] = old.get("marks")
                by_key[key] = q
        elif old_is_text and not q_is_text:
            # Never let OCR overwrite a usable PDF text layer; it may only
            # replace text that is clearly broken.
            if question_quality(old["text"]) < 0 and question_quality(q["text"]) > question_quality(old["text"]) + 15:
                if q.get("marks") is None:
                    q["marks"] = old.get("marks")
                by_key[key] = q
        elif q.get("source") == "ocrd" and old.get("source") != "ocrd":
            # Watermark-suppressed pass beats the plain OCR pass.
            if question_quality(q["text"]) > question_quality(old["text"]) - 5:
                if q.get("marks") is None:
                    q["marks"] = old.get("marks")
                by_key[key] = q
        elif old.get("source") == "ocrd" and q.get("source") != "ocrd":
            if question_quality(q["text"]) > question_quality(old["text"]) + 8:
                if q.get("marks") is None:
                    q["marks"] = old.get("marks")
                by_key[key] = q
        elif question_quality(q["text"]) > question_quality(old["text"]):
            if q.get("marks") is None:
                q["marks"] = old.get("marks")
            by_key[key] = q
        elif old.get("marks") is None and q.get("marks") is not None:
            old["marks"] = q["marks"]

    # The psm 4 pass has a cleaner reading order. Use it to replace known
    # questions; only add a key when the text is genuinely new.
    def ends_cleanly(t):
        return bool(re.search(r"""[?.!][\"')\]]?\s*$""", t)) and not TRUNC_END_RE.search(t)

    def norm_key(t):
        return re.sub(r"[^a-z0-9]", "", t.lower())

    def source_rank(q):
        return {"text": 3, "ocrd": 2, "ocr4": 1}.get(q.get("source"), 0)

    for q in p4_qs:
        key = (q["major"], q["sub"])
        if not q["sub"] or not q["text"].strip():
            continue
        if key in by_key:
            old = by_key[key]
            old_text = old["text"]
            new_text = q["text"]
            new_key = norm_key(new_text)
            old_key = norm_key(old_text)
            contained = bool(new_key) and new_key in old_key and len(old_text) > 1.2 * len(new_text)
            use_new = False
            if not _embedded_question_number(new_text):
                old_rank, new_rank = source_rank(old), source_rank(q)
                if new_rank > old_rank:
                    use_new = question_quality(new_text) > question_quality(old_text) + 6
                elif new_rank < old_rank:
                    use_new = (
                        question_quality(old_text) < 0
                        and question_quality(new_text) > question_quality(old_text) + 15
                    ) or (not ends_cleanly(old_text) and ends_cleanly(new_text)
                          and question_quality(old_text) < 0)
                elif ends_cleanly(new_text) and not ends_cleanly(old_text):
                    use_new = True
                elif contained and ends_cleanly(new_text):
                    # psm 4 kept this question separate; the other pass glued
                    # the next question onto it.
                    use_new = True
                elif (len(new_text) >= 0.8 * len(old_text)
                      and question_quality(new_text) >= question_quality(old_text) - 3):
                    use_new = True
                elif question_quality(new_text) > question_quality(old_text) + 2:
                    use_new = True
            if use_new:
                if q.get("marks") is None:
                    q["marks"] = old.get("marks")
                by_key[key] = q
        else:
            duplicate = any(
                old["major"] == q["major"] and texts_similar(old["text"], q["text"])
                for old in by_key.values()
            )
            if not duplicate:
                by_key[key] = q
                order.append(key)

    merged = [by_key[k] for k in order]
    merged.sort(key=lambda q: (q.get("page") or 0, q["major"], q.get("sub") or ""))

    # Drop unnumbered leftovers that are just a garbled copy of a keyed question.
    keyed_keys = [norm_key(q["text"]) for q in merged if q.get("sub")]
    majors_with_keyed = {q["major"] for q in merged if q.get("sub")}
    cleaned_merged = []
    for q in merged:
        if not q.get("sub"):
            # Part-B rows are always lettered; an unlettered row next to keyed
            # siblings is an OCR duplicate of one of them.
            if q["major"] >= 2 and q["major"] in majors_with_keyed:
                continue
            qk = norm_key(q["text"])
            prefix = qk[:70]
            if prefix and any(prefix in k for k in keyed_keys):
                continue
        cleaned_merged.append(q)
    merged = cleaned_merged
    for q in merged:
        q["text"] = clean_question(q["text"], q.get("marks"))
        q["chapter"] = chapter_for(q["major"], q.get("sub"))
    merged = [q for q in merged if q["chapter"] and len(q["text"]) >= 5]
    merged = split_embedded_questions(merged)
    merged = dedupe_questions(merged)
    infer_marks(merged, header_text)
    p4 = psm4_lines(item, pages)
    for q in merged:
        # The embedded PDF text layer is already exact; only OCR-sourced
        # questions need word-level repair from the psm 4 pass.
        if q.get("source") != "text":
            q["text"] = repair_from_psm4(q["text"], p4)
        q["text"] = strip_diagram_noise(q["text"])
    merged = split_embedded_questions(merged)
    merged = dedupe_questions(merged)
    return merged


def main():
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    papers = []

    for item in manifest:
        if "error" in item:
            continue
        if item["subject"] not in {"DM", "COA", "OOPJ", "DBMS", "SE"}:
            continue
        pdf_path = ROOT / item["localPath"]
        if pdf_path.suffix.lower() not in {".pdf"}:
            continue
        doc = pymupdf.open(pdf_path)
        page_texts = {}
        page_headers = {}
        for n in range(len(doc)):
            page_texts[n + 1] = doc[n].get_text("text")
            page_headers[n + 1] = page_header_text(item, n + 1, doc[n])

        # Split bundled PDFs (several papers saved in one file). Scanned pages
        # have no text layer, so use the OCR header as well.
        segments = []
        current = []
        for pno in range(1, len(doc) + 1):
            if is_paper_start(page_headers[pno]) and current:
                segments.append(current)
                current = []
            current.append(pno)
        if current:
            segments.append(current)

        for idx, pages in enumerate(segments):
            header_text = page_headers[pages[0]]
            questions = paper_from_pages(item, pages, page_texts, doc, header_text)
            if not questions:
                continue
            meta = meta_from_text(header_text, item["fileName"])
            subject = detect_subject(header_text, item["subject"])
            # Hand-transcribed corrections for questions whose printed text is
            # destroyed by scan watermarks or broken OCR.
            for q in questions:
                fix_key = f"{subject}|{meta.get('paperCode')}|{q['major']}.{q['sub']}"
                if fix_key in MANUAL_FIXES:
                    q["text"] = MANUAL_FIXES[fix_key]
                    q["chapter"] = chapter_for(q["major"], q["sub"])
            label = short_label(meta, item["fileName"])
            if len(segments) > 1:
                label += f" (Set {idx + 1})"
            papers.append({
                "subject": subject,
                "paperName": item["fileName"],
                "driveFileId": item["fileId"],
                "pages": pages,
                "label": label,
                "semester": meta["semester"],
                "examType": meta["examType"],
                "year": meta["year"],
                "month": meta["month"],
                "regulation": meta["regulation"],
                "paperCode": meta["paperCode"],
                "questions": questions,
            })
        doc.close()

    OUT_RAW.write_text(json.dumps(papers, ensure_ascii=False, indent=1), encoding="utf-8")

    # ---- paper-level duplicate detection -----------------------------------
    def paper_fingerprint(p):
        body = " ".join(sorted(
            re.sub(r"[^a-z0-9]", "", q["text"].lower()) for q in p["questions"]
        ))
        return hashlib.sha1(body.encode()).hexdigest()

    unique_papers = []
    seen_fp = {}
    for p in papers:
        fp = (p["subject"], p["paperCode"]) if p.get("paperCode") else paper_fingerprint(p)
        if fp in seen_fp:
            seen_fp[fp]["duplicates"].append({
                "paperName": p["paperName"],
                "driveFileId": p["driveFileId"],
                "label": p["label"],
            })
            continue
        p["duplicates"] = []
        seen_fp[fp] = p
        unique_papers.append(p)

    # ---- question clustering ---------------------------------------------
    def qnorm(text):
        t = text.lower()
        t = re.sub(r"[^a-z0-9 ]", " ", t)
        t = re.sub(r"\b(the|a|an|of|in|to|and|or|is|are|what|define|explain|describe|write|discuss|with|for|its|how|why)\b", " ", t)
        return re.sub(r"\s+", " ", t).strip()

    def tokens(text):
        return set(qnorm(text).split())

    def similar(a, b):
        na, nb = qnorm(a), qnorm(b)
        if not na or not nb:
            return False
        if na == nb:
            return True
        if na in nb or nb in na:
            short, long = sorted((na, nb), key=len)
            if len(short) >= 20 and len(short) / len(long) >= 0.82:
                return True
        if SequenceMatcher(None, na, nb).ratio() >= 0.9:
            return True
        ta, tb = tokens(a), tokens(b)
        if len(ta) >= 4 and len(tb) >= 4:
            inter = len(ta & tb)
            union = len(ta | tb)
            if union and inter / union >= 0.86:
                return True
        return False

    buckets = defaultdict(list)
    for p in unique_papers:
        for q in p["questions"]:
            buckets[(p["subject"], q["chapter"], 1 if q["major"] == 1 else 2)].append((p, q))

    canonical = []
    for (subject, chapter, partno), entries in buckets.items():
        clusters = []
        for paper, q in entries:
            cluster = None
            for c in clusters:
                if similar(q["text"], c["text"]):
                    cluster = c
                    break
            if cluster:
                cluster["entries"].append((paper, q))
            else:
                clusters.append({"text": q["text"], "entries": [(paper, q)]})
        for c in clusters:
            variants = defaultdict(int)
            for paper, q in c["entries"]:
                variants[q["text"]] += 1
            rep = max(
                variants.items(),
                key=lambda kv: (question_quality(kv[0]), kv[1], len(kv[0])),
            )[0]
            canonical.append({
                "subject": subject,
                "chapter": chapter,
                "part": "A" if partno == 1 else "B",
                "text": rep,
                "entries": c["entries"],
            })

    final = []
    for idx, c in enumerate(sorted(canonical, key=lambda x: (x["subject"], x["chapter"], x["part"], -len(x["entries"]))), 1):
        appearances = []
        seen = set()
        for paper, q in c["entries"]:
            key = (paper["paperName"], q["page"], q["major"], q["sub"])
            if key in seen:
                continue
            seen.add(key)
            appearances.append({
                "year": paper["year"],
                "month": paper["month"],
                "session": paper["label"],
                "examType": paper["examType"],
                "semester": paper["semester"],
                "label": paper["label"],
                "paperName": paper["paperName"],
                "driveFileId": paper["driveFileId"],
                "page": q["page"],
                "qno": f"{q['major']}.{q['sub']}" if q["sub"] else f"{q['major']}.",
                "marks": q["marks"],
                "part": "A" if q["major"] == 1 else "B",
            })
        appearances.sort(key=lambda a: (a["year"] or 0, a["month"] or 0), reverse=True)
        years = sorted({a["year"] for a in appearances if a["year"]}, reverse=True)
        marks = [a["marks"] for a in appearances if a["marks"]]
        marks_value = max(set(marks), key=marks.count) if marks else (2 if c["part"] == "A" else 5)
        first = appearances[0]
        qtext = clean_question(strip_diagram_noise(c["text"]), marks_value)
        if len(qtext) < 8 or question_quality(qtext) < -4:
            continue
        qid = f"{c['subject']}-{c['part']}{c['chapter']}-{idx:04d}"
        final.append({
            "id": qid,
            "subjectId": c["subject"],
            "chapter": c["chapter"],
            "part": c["part"],
            "marks": marks_value,
            "years": years,
            "frequency": len(appearances),
            "questionNumber": f"Q{first['qno'].rstrip('.')}",
            "topicTag": f"Unit {c['chapter']}",
            "question": qtext,
            "paperName": first["paperName"],
            "driveFileId": first["driveFileId"],
            "pageNumber": first["page"],
            "semester": first["semester"],
            "examType": first["examType"],
            "appearances": appearances,
        })

    for i, q in enumerate(final, 1):
        q["id"] = f"{q['subjectId']}-{q['part']}{q['chapter']}-{i:04d}"

    OUT.write_text(json.dumps(final, ensure_ascii=False, indent=1), encoding="utf-8")

    # ---- emit pyq-data.js (reuse the curated subject/notes metadata) -------
    current = OUT_JS.read_text(encoding="utf-8")
    sub_start = current.index("const SUBJECTS_DATA")
    notes_start = current.index("const NOTES_DATA")
    q_start = current.index("const QUESTIONS_DATABASE")
    subjects_block = current[sub_start:notes_start].rstrip()
    notes_block = current[notes_start:q_start].rstrip()

    counts = defaultdict(int)
    for p in unique_papers:
        counts[p["subject"]] += 1
    for subj in SUBJECT_NAMES:
        subjects_block = re.sub(
            rf'("id":\s*"{subj}"[\s\S]*?"paperCount":\s*)\d+',
            lambda m: m.group(1) + str(counts.get(subj, 0)),
            subjects_block,
            count=1,
        )

    js_questions = json.dumps(final, ensure_ascii=False, indent=2)
    header = (
        "/**\n"
        " * MGIT PYQ Hub - question bank generated from the original Drive papers.\n"
        f" * {len(unique_papers)} unique papers, {len(final)} canonical questions.\n"
        " * Each question keeps its exact paper, page and question number.\n"
        " */\n\n"
    )
    footer = (
        "\n\nif (typeof window !== 'undefined') {\n"
        "  window.SUBJECTS_DATA = SUBJECTS_DATA;\n"
        "  window.NOTES_DATA = NOTES_DATA;\n"
        "  window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;\n"
        "}\n"
        "if (typeof module !== 'undefined' && module.exports) {\n"
        "  module.exports = { SUBJECTS_DATA, NOTES_DATA, QUESTIONS_DATABASE };\n"
        "}\n"
    )
    OUT_JS.write_text(
        header + subjects_block + "\n\n" + notes_block + "\n\nconst QUESTIONS_DATABASE = "
        + js_questions + ";" + footer,
        encoding="utf-8",
    )

    # ---- report -----------------------------------------------------------
    print(f"Raw papers: {len(papers)} | unique papers: {len(unique_papers)} | canonical questions: {len(final)}")
    for s in ["DM", "COA", "OOPJ", "DBMS", "SE"]:
        qs = [q for q in final if q["subjectId"] == s]
        print(f"  {s:5s} {len(qs):4d} questions | {len([p for p in unique_papers if p['subject']==s])} unique papers")
    missing = [p for p in unique_papers if len({(q['major'], q['sub']) for q in p['questions']}) < 25]
    if missing:
        print("\nPapers with <25 questions:")
        for p in missing:
            print(f"  {p['subject']:5s} {p['paperName'][:40]:40s} {len(p['questions'])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
