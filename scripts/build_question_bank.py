#!/usr/bin/env python3
"""
Build the real MGIT question bank from the downloaded paper PDFs.

- Uses the embedded PDF text layer where available.
- Uses local Tesseract OCR for scanned pages.
- Splits bundled PDFs that contain more than one exam paper.
- Maps questions to Units 1-5 using MGIT's printed paper structure.
- De-duplicates repeated questions while keeping every source appearance.
"""

from __future__ import annotations

import json
import math
import re
from collections import defaultdict
from difflib import SequenceMatcher
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".cache" / "drive_manifest.json"
TEXT_DIR = ROOT / ".cache" / "pyq_text"
TESS6_DIR = ROOT / ".cache" / "pyq_ocr_tess6"
TESS_DIR = ROOT / ".cache" / "pyq_ocr_tess"
OUT_RAW = ROOT / ".cache" / "raw_question_bank.json"
OUT = ROOT / ".cache" / "question_bank.json"

SUBJECT_NAMES = {
    "DM": "Discrete Mathematics",
    "COA": "Computer Organization & Architecture",
    "OOPJ": "Object-Oriented Programming through Java",
    "DBMS": "Database Management Systems",
    "SE": "Software Engineering",
    "ES": "Environmental Studies",
    "IE": "Innovation and Entrepreneurship",
}

ROMAN = {"i": 1, "ii": 2, "iii": 3, "iv": 4, "v": 5, "vi": 6, "vii": 7, "viii": 8}

Q_RE = re.compile(
    r"^\s*(?P<major>\d{1,2})\s*[.)]\s*(?P<sub>[a-jA-J]|1)\s*[).]?\s*(?:\|\s*)?(?P<rest>.*)$"
)
Q_MAJOR_ONLY_RE = re.compile(r"^\s*(?P<major>\d{1,2})\s*[.)]\s*(?:\|\s*)?(?P<rest>[A-Z].*)$")

HEADER_SKIP = (
    "hall ticket",
    "mahatma gandhi",
    "b.tech",
    "common to",
    "time:",
    "max. marks",
    "answer all",
    "q. no",
    "q.no",
    "stem of",
    "part-a",
    "part-b",
    "code:",
    "p.t.o",
    "m: marks",
    "l:",
    "co:",
    "po:",
    "marks;",
    "level;",
    "programme outcome",
    "course outcome",
    "bloom",
    "regulation",
    "semester",
    "examinations",
    "examination",
)

MARKS_LINE_RE = re.compile(r"^\s*\d{1,2}(?:\s+\d{1,2}){1,5}\s*$")
PAGE_NO_RE = re.compile(r"^\s*(?:page\s*)?\d{1,2}\s*$", re.I)
SUB_PART_RE = re.compile(r"^\s*(?:\(?[ivx]{1,4}\)?|[a-j]\))\s+", re.I)


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
    )
    return re.sub(r"\s+", " ", text).strip()


def clean_ocr(text: str) -> str:
    text = text.replace("|", " ")
    text = text.replace("�?Ts", "'s").replace("�?\"", "->").replace("�?", "-")
    text = text.replace("~", "->")
    text = re.sub(r"\bINF\b", "1NF", text)
    text = re.sub(r"\bBCNF\b", "BCNF", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip(" |")


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
    header = None
    for line in lines:
        t = line["text"].lower()
        if "stem" in t and ("q." in t or "question" in t):
            header = line
            break
    if header:
        candidates = [l for l in lines if abs(l["y0"] - header["y0"]) < 14 and l["x0"] > page_width * 0.6]
        m_line = next((l for l in candidates if l["text"].strip().upper().startswith("M")), None)
        if m_line:
            marks_start = m_line["x0"] - 4
            q_cols = [l for l in lines if "q." in l["text"].lower() and abs(l["y0"] - header["y0"]) < 14]
            q_end = (q_cols[0]["x1"] + 6) if q_cols else 82
            return q_end, q_end + 3, marks_start, marks_start + 30
    if page_width > 700:
        return 95, 100, 545, 590
    return 82, 88, 438, 466


def parse_text_page(page, page_no: int):
    lines = page_lines(page)
    if sum(len(l["text"]) for l in lines) < 40:
        return []
    qno_end, text_start, marks_start, marks_end = find_columns(lines, page.rect.width)
    out = []
    current = None

    def flush():
        nonlocal current
        if current and norm(current["text"]):
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
        if MARKS_LINE_RE.match(text) or PAGE_NO_RE.match(text):
            continue
        m = Q_RE.match(text)
        if line["x0"] <= qno_end and m:
            flush()
            sub = m.group("sub").lower()
            current = {
                "major": int(m.group("major")),
                "sub": sub,
                "text": clean_ocr(m.group("rest")),
                "marks": None,
                "page": page_no,
                "source": "text",
            }
            continue
        if current is None:
            continue
        if marks_start - 8 <= line["x0"] <= marks_end:
            if re.fullmatch(r"\d{1,2}", text):
                if current["marks"] is None:
                    current["marks"] = int(text)
            continue
        if low == "or":
            continue
        if line["x0"] < marks_start - 8:
            current["text"] += " " + text
    flush()
    return out


def parse_ocr_page(text: str, page_no: int):
    out = []
    current = None

    def flush():
        nonlocal current
        if current and norm(current["text"]):
            out.append(current)
        current = None

    for raw in text.splitlines():
        line = clean_ocr(raw)
        if not line:
            continue
        low = line.lower()
        if low.startswith(("part-a", "parta", "part-b", "partb")):
            continue
        if any(low.startswith(p) for p in HEADER_SKIP):
            continue
        if MARKS_LINE_RE.match(line) or PAGE_NO_RE.match(line):
            continue
        if low in {"or", "and"}:
            continue

        m = Q_RE.match(line)
        if not m:
            m = Q_MAJOR_ONLY_RE.match(line)
        if m and "sub" not in m.groupdict():
            # major-only line: only accept when it really is a question start
            major = int(m.group("major"))
            rest = clean_ocr(m.group("rest"))
            if major < 2 or not rest:
                m = None

        if m:
            flush()
            sub = (m.groupdict().get("sub") or "").lower()
            rest = clean_ocr(m.groupdict().get("rest") or "")
            current = {
                "major": int(m.group("major")),
                "sub": sub,
                "text": rest,
                "marks": None,
                "page": page_no,
                "source": "ocr",
            }
            continue

        if current is None:
            continue
        # continuation line
        if SUB_PART_RE.match(line):
            current["text"] += " " + line
        else:
            current["text"] += " " + line
    flush()
    return out


MARKS_SUFFIX_RE = re.compile(
    r"\s+(?P<m1>\d{1,2})(?:\s+(?:\d{1,2}|[lLzZ]|[0-9,;]{1,10})){2,6}\s*$"
)


def strip_ocr_marks(line: str):
    marks = None
    m = MARKS_SUFFIX_RE.search(line)
    if m:
        marks = int(m.group("m1"))
        line = line[: m.start()]
    line = line.replace("|", " ").replace("[", " ").replace("]", " ")
    line = re.sub(r"\s+", " ", line).strip(" |:;-")
    return line, marks


def parse_ocr_psm6_page(text: str, page_no: int):
    out = []
    current = None
    counters = defaultdict(int)

    def flush():
        nonlocal current
        if current and norm(current["text"]):
            out.append(current)
        current = None

    for raw in text.splitlines():
        line = clean_ocr(raw)
        if not line:
            continue
        low = line.lower()
        if low.startswith(("part-a", "parta", "part-b", "partb")):
            continue
        if any(low.startswith(p) for p in HEADER_SKIP):
            continue
        if low.startswith("p.t.o") or low.startswith("contd"):
            continue

        body, marks = strip_ocr_marks(line)
        if not body:
            continue
        if MARKS_LINE_RE.match(body) or PAGE_NO_RE.match(body):
            continue
        if body.lower() in {"or", "and"}:
            continue

        m = re.match(
            r"^(?P<major>[0-9lI]{1,2})\s*[.)]\s*(?P<sub>[a-jA-J]|1)?\s*[).]?\s*(?P<rest>.*)$",
            body,
        )
        if m:
            major_txt = m.group("major").replace("l", "1").replace("I", "1")
            try:
                major = int(major_txt)
            except ValueError:
                major = 0
            if 1 <= major <= 9:
                counters[major] += 1
                sub = (m.group("sub") or "").lower()
                if major == 1:
                    if sub == "1" or sub not in "abcdefghij":
                        sub = "abcdefghij"[min(counters[major] - 1, 9)]
                else:
                    if sub == "1" or sub not in "abcd":
                        sub = "abcd"[min(counters[major] - 1, 3)]
                rest = (m.group("rest") or "").strip()
                if len(rest) < 4 and not rest:
                    pass
                flush()
                current = {
                    "major": major,
                    "sub": sub,
                    "text": rest,
                    "marks": marks,
                    "page": page_no,
                    "source": "tesseract-psm6",
                }
                continue

        if current is None:
            continue
        if body:
            current["text"] += " " + body
    flush()
    return out


def parse_ocr_tsv_page(item, page_no: int):
    tsv_path = ROOT / ".cache" / "pyq_ocr_tsv" / f"{item['subject']}__{item['fileName']}__p{page_no}.json"
    if not tsv_path.exists():
        return None
    data = json.loads(tsv_path.read_text(encoding="utf-8"))
    width = data.get("width", 2480)
    words = [w for w in data.get("words", []) if w.get("text")]
    rows = []
    for w in sorted(words, key=lambda x: (x["y"], x["x"])):
        placed = False
        for row in rows:
            if abs(w["y"] - row[0]["y"]) <= 6:
                row.append(w)
                placed = True
                break
        if not placed:
            rows.append([w])

    qno_end = width * 0.15
    marks_start = width * 0.84
    for row in rows:
        text = " ".join(w["text"] for w in row).lower()
        if "stem" in text and ("q" in text or "no" in text):
            q_words = [w for w in row if w["x"] < width * 0.25]
            if q_words:
                qno_end = max(w["x"] + w["w"] for w in q_words) + 14
            m_words = [w for w in row if w["x"] > width * 0.6 and w["text"].strip().upper().startswith("M")]
            if m_words:
                marks_start = min(w["x"] for w in m_words) - 10
            break

    out = []
    current = None
    counters = defaultdict(int)  # major -> number of sub-parts seen

    def flush():
        nonlocal current
        if current and norm(current["text"]):
            out.append(current)
        current = None

    for row in rows:
        row = sorted(row, key=lambda w: w["x"])
        q_words = [w for w in row if w["x"] < qno_end]
        t_words = [w for w in row if qno_end <= w["x"] < marks_start]
        qtext = clean_ocr(" ".join(w["text"] for w in q_words))
        ttext = clean_ocr(" ".join(w["text"] for w in t_words))
        if not qtext and not ttext:
            continue
        low = (qtext + " " + ttext).lower()
        if any(low.startswith(p) for p in HEADER_SKIP):
            continue
        if MARKS_LINE_RE.match(ttext) or PAGE_NO_RE.match(ttext):
            continue
        if low.strip() in {"or", "and"}:
            continue

        m = re.match(r"^\s*(?P<major>\d{1,2})\s*[.)]?\s*(?P<rest>.*)$", qtext) if qtext else None
        if m and qtext and re.match(r"^\s*\d{1,2}\s*[.)]", qtext):
            major = int(m.group("major"))
            rest = m.group("rest").strip()
            sub_match = re.search(r"[a-jA-J]", rest)
            sub = sub_match.group(0).lower() if sub_match else ""
            # Normalise the common OCR misreads of a sub-part letter.
            if major == 1:
                counters[major] += 1
                sub = "abcdefghij"[min(counters[major] - 1, 9)]
            else:
                counters[major] += 1
                if sub not in "abcd":
                    sub = "abcd"[min(counters[major] - 1, 3)]
            flush()
            current = {
                "major": major,
                "sub": sub,
                "text": ttext,
                "marks": None,
                "page": page_no,
                "source": "tesseract-tsv",
            }
            continue
        if current is None:
            continue
        if ttext:
            current["text"] += " " + ttext
    flush()
    return out


def read_page_text(item, page_no):
    for directory in (TESS6_DIR, TESS_DIR):
        tess = directory / f"{item['subject']}__{item['fileName']}__p{page_no}.txt"
        if tess.exists():
            return tess.read_text(encoding="utf-8", errors="ignore")
    txt = TEXT_DIR / f"{item['subject']}__{item['fileName']}.json"
    if txt.exists():
        data = json.loads(txt.read_text(encoding="utf-8"))
        for p in data["pages"]:
            if p["page"] == page_no:
                return p["text"]
    return ""


def paper_meta_from_text(text: str, fallback_name: str):
    header = " ".join(text.splitlines()[:18])
    year = None
    m = re.search(r"(20\d{2})", header)
    if m:
        year = int(m.group(1))
    exam_type = "Unknown"
    if re.search(r"supplement|supple|supply", header, re.I):
        exam_type = "Supplementary"
    elif re.search(r"mid[\s-]?[12]|cie", header, re.I):
        exam_type = "Mid"
    elif re.search(r"regular", header, re.I):
        exam_type = "Regular"
    session = ""
    sm = re.search(r"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z/]*(?:\s*[-/]\s*(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))?\s*[-/]?\s*(20\d{2})", header, re.I)
    if sm:
        session = norm(sm.group(0))
    reg = ""
    rm = re.search(r"\b(MR[\s-]?\d{2})\b", header, re.I)
    if rm:
        reg = rm.group(1).upper().replace(" ", "-")
    subject = ""
    for line in text.splitlines():
        l = line.strip()
        if re.search(r"database|mathematics|organization|java|software|environment|entrepreneur", l, re.I):
            subject = l
            break
    if not year:
        ym = re.search(r"(20\d{2})", fallback_name)
        if ym:
            year = int(ym.group(1))
    return {
        "year": year,
        "examType": exam_type,
        "session": session or (str(year) if year else ""),
        "regulation": reg,
        "subjectPrinted": subject,
    }


def assign_chapter(q):
    major = q["major"]
    if major == 1:
        sub = q.get("sub") or ""
        if sub and sub.isalpha():
            idx = "abcdefghij".find(sub) + 1
        elif sub.isdigit():
            idx = int(sub)
        else:
            idx = 0
        if 1 <= idx <= 10:
            return math.ceil(idx / 2)
        return None
    if 2 <= major <= 6:
        return major - 1
    if major > 6:
        return min(5, (major - 2) // 2 + 1)
    return None


def parse_paper(item):
    pdf_path = ROOT / item["localPath"]
    text_json = TEXT_DIR / f"{item['subject']}__{item['fileName']}.json"
    pages = json.loads(text_json.read_text(encoding="utf-8"))["pages"]
    page_texts = {}
    for p in pages:
        text = read_page_text(item, p["page"])
        page_texts[p["page"]] = text

    # split into paper segments at pages that start a fresh Part-A
    segments = []
    current_pages = []
    for p in pages:
        pno = p["page"]
        text = page_texts.get(pno, "")
        low = text.lower()
        starts_new = ("part-a" in low or "part a" in low) and ("examination" in low or "hall ticket" in low)
        if starts_new and current_pages:
            segments.append(current_pages)
            current_pages = []
        current_pages.append(pno)
    if current_pages:
        segments.append(current_pages)

    results = []
    for seg_idx, page_nos in enumerate(segments):
        first_text = page_texts.get(page_nos[0], "")
        meta = paper_meta_from_text(first_text, item["fileName"])
        questions = []
        for pno in page_nos:
            text = page_texts.get(pno, "")
            if len(text.strip()) < 40:
                continue
            # text layer if this page has one
            page = None
            doc = pymupdf.open(pdf_path)
            page = doc[pno - 1]
            if page.get_text("text").strip():
                qs = parse_text_page(page, pno)
            else:
                qs = parse_ocr_psm6_page(text, pno)
                if not qs:
                    qs = parse_ocr_tsv_page(item, pno)
                if not qs:
                    qs = parse_ocr_page(text, pno)
            doc.close()
            questions.extend(qs)

        # normalise sub-parts / chapter
        clean = []
        part_a_index = 0
        for q in questions:
            text = norm(q["text"])
            text = re.sub(r"\s+([,.;:])", r"\1", text)
            if len(text) < 6:
                continue
            if q["major"] == 1:
                part_a_index += 1
                if q["sub"].isdigit():
                    letters = "abcdefghij"
                    q["sub"] = letters[min(part_a_index - 1, 9)]
            q["text"] = text
            q["chapter"] = assign_chapter(q)
            if not q["chapter"]:
                continue
            clean.append(q)

        # infer marks
        part_a_marks = 1
        bm = re.search(r"part[\s-]*a[^\n]{0,30}?10\s*[x×]\s*(\d+)", first_text, re.I)
        if bm:
            part_a_marks = int(bm.group(1))
        for q in clean:
            if q["major"] == 1 and q.get("marks") is None:
                q["marks"] = part_a_marks
        by_major = defaultdict(list)
        for q in clean:
            if q["major"] >= 2:
                by_major[q["major"]].append(q)
        for major, qs in by_major.items():
            subs = {q["sub"] for q in qs if q["sub"]}
            if len(qs) <= 1 or len(subs) <= 1:
                marks = 10
            elif len(subs) >= 4:
                marks = 5
            elif len(subs) == 2:
                marks = 5
            elif len(subs) == 3:
                marks = 10 if any(not q["sub"] for q in qs) else 5
            else:
                marks = 5
            for q in qs:
                if q["marks"] is None:
                    q["marks"] = marks

        label = " ".join(x for x in [meta["session"], meta["examType"]] if x).strip()
        if not label:
            label = Path(item["fileName"]).stem
        if seg_idx > 0:
            label += f" (Paper {seg_idx + 1})"
        results.append(
            {
                "subject": item["subject"],
                "paperName": item["fileName"],
                "driveFileId": item["fileId"],
                "pages": page_nos,
                "label": label,
                **meta,
                "questions": clean,
            }
        )
    return results


def similarity(a: str, b: str) -> float:
    a = re.sub(r"[^a-z0-9 ]", " ", a.lower())
    b = re.sub(r"[^a-z0-9 ]", " ", b.lower())
    return SequenceMatcher(None, norm(a), norm(b)).ratio()


def main():
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    all_papers = []
    for item in manifest:
        if "error" in item:
            continue
        try:
            papers = parse_paper(item)
        except Exception as exc:  # noqa: BLE001
            print(f"FAILED {item['subject']} {item['fileName']}: {exc}")
            continue
        all_papers.extend(papers)
        total = sum(len(p["questions"]) for p in papers)
        print(f"{item['subject']:5s} {item['fileName'][:40]:40s} segments={len(papers)} questions={total}")

    OUT_RAW.write_text(json.dumps(all_papers, ensure_ascii=False, indent=1), encoding="utf-8")

    # de-duplicate per subject + chapter
    grouped = []
    for paper in all_papers:
        for q in paper["questions"]:
            grouped.append((paper, q))

    buckets = defaultdict(list)
    for paper, q in grouped:
        buckets[(paper["subject"], q["chapter"])].append((paper, q))

    canonical = []
    for (subject, chapter), items in buckets.items():
        clusters = []
        for paper, q in items:
            text = q["text"]
            match = None
            for cluster in clusters:
                if similarity(text, cluster["question"]) >= 0.88:
                    match = cluster
                    break
            appearance = {
                "year": paper["year"],
                "session": paper["session"],
                "examType": paper["examType"],
                "label": paper["label"],
                "paperName": paper["paperName"],
                "driveFileId": paper["driveFileId"],
                "page": q["page"],
                "qno": f"{q['major']}.{q['sub']}" if q["sub"] else f"{q['major']}.",
                "marks": q["marks"],
                "part": "A" if q["major"] == 1 else "B",
            }
            if match:
                match["appearances"].append(appearance)
            else:
                clusters.append(
                    {
                        "subject": subject,
                        "chapter": chapter,
                        "question": text,
                        "part": "A" if q["major"] == 1 else "B",
                        "marks": q["marks"],
                        "appearances": [appearance],
                    }
                )
        canonical.extend(clusters)

    # attach ids and summary fields
    final = []
    for idx, c in enumerate(sorted(canonical, key=lambda x: (x["subject"], x["chapter"], x["part"], -len(x["appearances"]))), 1):
        appearances = sorted(c["appearances"], key=lambda a: (a["year"] or 0), reverse=True)
        years = sorted({a["year"] for a in appearances if a["year"]}, reverse=True)
        seen = set()
        deduped = []
        for a in appearances:
            key = (a["paperName"], a["page"], a["qno"], a["year"])
            if key in seen:
                continue
            seen.add(key)
            deduped.append(a)
        qid = f"{c['subject']}-CH{c['chapter']}-{idx:04d}"
        final.append(
            {
                "id": qid,
                "subject": c["subject"],
                "chapter": c["chapter"],
                "part": c["part"],
                "marks": c["marks"],
                "question": c["question"],
                "years": years,
                "frequency": len(deduped),
                "appearances": deduped,
            }
        )

    OUT.write_text(json.dumps(final, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"\nRaw papers: {len(all_papers)} | raw questions: {sum(len(p['questions']) for p in all_papers)}")
    print(f"Canonical questions: {len(final)}")
    for s in SUBJECT_NAMES:
        qs = [q for q in final if q["subject"] == s]
        print(f"  {s:5s} {len(qs):4d} questions")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
