import json, re
from pathlib import Path

q = json.loads(Path('.cache/question_bank_v2.json').read_text(encoding='utf-8'))
patterns = {
 'embedded_qno': r'(?:\b\d\s*[.,]?\s*[a-d]\s*[.)]|\b\d\s*[.)]\s+[A-Z]|O\.\s*No\.)',
 'double_q': r'\?[^?]{10,}\?',
 'stray_header': r'\b(?:Q\.?\s*No|Stem\s*of|Marks|Bloom|CO\s*[-:]|PO\s*[-:]|L\s*[-:])\b',
 'spaced_word': r'\b(?:[a-z]{1,3}\s){3,}[a-z]{1,3}\b',
 'low_vowel': r'^[^aeiouAEIOU]{4,}',
 'symbols': r'[<>{}\\]',
}
for name, pat in patterns.items():
    items = [x for x in q if re.search(pat, x['question'], re.I)]
    print(f'\n### {name}: {len(items)}')
    for x in items[:60]:
        print(f"{x['subjectId']} {x['paperName']} p{x['pageNumber']} {x['questionNumber']}: {x['question'][:300]}")
