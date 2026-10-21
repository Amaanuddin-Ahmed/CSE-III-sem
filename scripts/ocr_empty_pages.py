#!/usr/bin/env python3
"""
Vision-OCR fallback for scanned MGIT question-paper pages.

Only pages whose PDF text layer is empty are sent to Gemini. The model is
asked for strict JSON and is told never to invent content. Results are cached
per paper/page so the pass can be resumed safely.
"""

from __future__ import annotations

import base64
import json
import os
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".cache" / "drive_manifest.json"
TEXT_DIR = ROOT / ".cache" / "pyq_text"
OCR_DIR = ROOT / ".cache" / "pyq_ocr"
OCR_DIR.mkdir(parents=True, exist_ok=True)

MODEL = os.environ.get("OCR_MODEL", "gemini-3.5-flash")
API_URL = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"

PROMPT = """You are transcribing one page of an MGIT (Mahatma Gandhi Institute of Technology) examination question paper.

Return ONLY valid JSON with this shape:
{
  "exam": {
    "subject": "subject name printed on the paper",
    "regulation": "MR-21 or MR-22 or unknown",
    "session": "e.g. Jan/Feb-2024, Aug/Sep-2023, Dec 2025 / Jan 2026",
    "year": 2024,
    "examType": "Regular" | "Supplementary" | "Mid" | "Unknown",
    "partA": "e.g. 10 x 2 = 20 Marks",
    "partB": "e.g. 5 x 10 = 50 Marks"
  },
  "questions": [
    {"part": "A" or "B", "qno": "1.a", "text": "verbatim question text", "marks": 2}
  ]
}

STRICT RULES:
- Transcribe EVERY question and sub-question visible on this page, exactly as printed.
- Preserve sub-parts such as (i), (ii), (a), (b), equations (use plain text/LaTeX), tables (use markdown), and code.
- Do NOT paraphrase, summarise, correct grammar, or invent missing questions.
- If a section is completely illegible, use the text "[ILLEGIBLE]" for that portion.
- Keep "OR" alternatives as separate question entries (same major number, different letter).
- marks must be the number printed in the M column. Use null if not printed on this page.
- part must be "A" for Part-A and "B" for Part-B. If the page has no part header, infer from the question numbering: 1.a-1.j is Part A, 2.x-6.x is Part B.
- Do not include hall-ticket boxes, institute name, instructions, or footer text in the questions."""


def get_key() -> str:
    key = os.environ.get("GEMINI_API_KEY", "").strip()
    if key:
        return key
    raise RuntimeError("GEMINI_API_KEY is not set")


def call_gemini(key: str, model: str, image_b64: str, meta: dict) -> dict:
    import urllib.error
    import urllib.request

    body = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {"text": PROMPT + f"\n\nKnown metadata: subject={meta['subject']}, paper file={meta['fileName']}."},
                    {"inlineData": {"mimeType": "image/png", "data": image_b64}},
                ],
            }
        ],
        "generationConfig": {
            "temperature": 0,
            "topP": 0.1,
            "maxOutputTokens": 8192,
            "responseMimeType": "application/json",
        },
    }
    req = urllib.request.Request(
        API_URL.format(model=model, key=key),
        data=json.dumps(body).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=180) as res:
                payload = json.loads(res.read().decode("utf-8"))
            parts = payload.get("candidates", [{}])[0].get("content", {}).get("parts", [])
            text = "".join(p.get("text", "") for p in parts)
            if not text:
                raise RuntimeError(f"empty response: {str(payload)[:300]}")
            text = re.sub(r"^```(?:json)?|```$", "", text.strip(), flags=re.M).strip()
            return json.loads(text)
        except Exception as exc:  # noqa: BLE001
            if attempt == 3:
                raise
            time.sleep(2 + attempt * 3)
    raise RuntimeError("unreachable")


def render_page(pdf_path: Path, page_index: int) -> str:
    doc = pymupdf.open(pdf_path)
    page = doc[page_index]
    pix = page.get_pixmap(dpi=170, colorspace=pymupdf.csGRAY)
    path = OCR_DIR / f"_page_{os.getpid()}_{page_index}.png"
    pix.save(path)
    data = base64.b64encode(path.read_bytes()).decode("ascii")
    path.unlink(missing_ok=True)
    doc.close()
    return data


def main() -> int:
    key = get_key()
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    jobs = []
    for item in manifest:
        if "error" in item:
            continue
        pdf_path = ROOT / item["localPath"]
        text_path = TEXT_DIR / f"{item['subject']}__{item['fileName']}.json"
        if not text_path.exists():
            continue
        extracted = json.loads(text_path.read_text(encoding="utf-8"))
        for p in extracted["pages"]:
            if p["chars"] >= 40:
                continue
            out = OCR_DIR / f"{item['subject']}__{item['fileName']}__p{p['page']}.json"
            if out.exists():
                continue
            jobs.append((item, pdf_path, p["page"] - 1, out))

    print(f"OCR jobs: {len(jobs)}")
    if not jobs:
        return 0

    def work(job):
        item, pdf_path, page_index, out = job
        img = render_page(pdf_path, page_index)
        result = call_gemini(key, MODEL, img, item)
        result["_meta"] = {
            "subject": item["subject"],
            "paperName": item["fileName"],
            "fileId": item["fileId"],
            "page": page_index + 1,
        }
        out.write_text(json.dumps(result, ensure_ascii=False, indent=1), encoding="utf-8")
        return out, len(result.get("questions", []))

    with ThreadPoolExecutor(max_workers=3) as pool:
        futures = {pool.submit(work, j): j for j in jobs}
        for i, fut in enumerate(as_completed(futures), 1):
            job = futures[fut]
            try:
                out, n = fut.result()
                print(f"[{i}/{len(jobs)}] {job[0]['subject']} {job[0]['fileName']} p{job[2] + 1}: {n} questions", flush=True)
            except Exception as exc:  # noqa: BLE001
                print(f"[{i}/{len(jobs)}] FAILED {job[0]['subject']} {job[0]['fileName']} p{job[2] + 1}: {exc}", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
