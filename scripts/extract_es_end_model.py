import json
import urllib.request
import base64
import os
import fitz

# Load API key
with open('CSE-III-sem/.env.local', 'r', encoding='utf-8') as f:
    env_text = f.read()
import re
key_match = re.search(r'GEMINI_API_KEY=([^\r\n]+)', env_text)
API_KEY = key_match.group(1).strip()

doc = fitz.open('CSE-III-sem/data/es_pyq_files/ES-model question paper for end exam.pdf')
pages_data = []

for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=200)
    img_bytes = pix.tobytes('png')
    b64 = base64.b64encode(img_bytes).decode('utf-8')
    
    prompt = """Transcribe every single question from this MGIT Autonomous Environmental Science (MC201BS) Semester End Examinations question paper page with 100% precision.
For each question, output in JSON format:
{
  "qno": "1.a", "1.b", "2.a", "2.b", "2.c", "2.d", etc.,
  "part": "A" or "B",
  "marks": integer,
  "unit": integer (1, 2, 3, 4, or 5),
  "question": "Full exact wording of question",
  "or_choice": boolean (true if it is an OR alternative)
}
Return a JSON array of questions."""

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={API_KEY}"
    payload = {
        "contents": [
            {
                "parts": [
                    {"text": prompt},
                    {"inlineData": {"mimeType": "image/png", "data": b64}}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.1,
            "responseMimeType": "application/json"
        }
    }
    
    req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            res_json = json.loads(resp.read().decode('utf-8'))
            text = res_json['candidates'][0]['content']['parts'][0]['text']
            parsed = json.loads(text)
            print(f"=== PAGE {i+1} extracted {len(parsed)} questions ===")
            pages_data.extend(parsed)
    except Exception as e:
        print(f"Error page {i+1}: {e}")

print("Total extracted from ES end exam model paper:", len(pages_data))
with open('CSE-III-sem/data/es_end_model_questions.json', 'w', encoding='utf-8') as f:
    json.dump(pages_data, f, indent=2)

for q in pages_data:
    print(f"[{q.get('part')} - {q.get('qno')}] (Unit {q.get('unit')}, {q.get('marks')}M) {q.get('question')[:80]}")
