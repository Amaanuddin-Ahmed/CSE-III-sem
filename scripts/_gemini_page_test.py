import base64, json, os, urllib.request, urllib.error, io, time
from pathlib import Path
import pymupdf
from PIL import Image

key = os.environ.get("GEMINI_API_KEY")
if not key:
    key = base64.b64decode("QVEuQWI4Uk42SURuTDU5MU1aXzlrbmlPclg4M1haaUxKNjFjdGRONWp6OG9DS1VaY1hCQ3c=").decode()

manifest = json.loads(Path('.cache/drive_manifest.json').read_text(encoding='utf-8'))
item = next(i for i in manifest if i.get('fileName') == 'Aug 2023.pdf' and i.get('subject') == 'OOPJ')
doc = pymupdf.open(Path(item['localPath']))
pix = doc[0].get_pixmap(dpi=200, colorspace=pymupdf.csGRAY)
im = Image.frombytes("L", (pix.width, pix.height), pix.samples)
buf = io.BytesIO(); im.save(buf, format="JPEG", quality=88)
b64 = base64.b64encode(buf.getvalue()).decode()
print('image bytes', len(buf.getvalue()), im.size)

prompt = """You are transcribing an MGIT B.Tech examination question paper from the attached page image.
Extract EVERY question and sub-question exactly as printed. Do not answer, summarise, correct the subject matter, or invent anything.
Return only JSON with this shape:
{"partA":[{"qno":"1.a","marks":2,"text":"..."}],"partB":[{"qno":"2.a","marks":5,"text":"..."}, ...]}
Rules:
- Preserve the printed wording, numbers, symbols, formulas, and punctuation as accurately as possible.
- Read the marks column if present. Part A sub-parts are usually 2 marks; Part B sub-parts are 5 or 10 marks.
- Include OR choices and all sub-parts. Do not merge two separate questions into one.
- Ignore headers, instructions, CO/PO/Bloom columns, and footers.
- If a word is genuinely unreadable, use [unclear] rather than guessing.
- If a question continues across lines, join it into one string with single spaces.
"""
body = json.dumps({
    "contents":[{"role":"user","parts":[{"text":prompt},{"inline_data":{"mime_type":"image/jpeg","data":b64}}]}],
    "generationConfig":{"temperature":0.0,"response_mime_type":"application/json"},
}).encode()
req = urllib.request.Request(
    f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key={key}",
    data=body, headers={"Content-Type":"application/json"})
with urllib.request.urlopen(req, timeout=120) as r:
    d = json.load(r)
text = d["candidates"][0]["content"]["parts"][0]["text"]
Path('.cache/_gemini_test.json').write_text(text, encoding='utf-8')
print(text[:8000])
