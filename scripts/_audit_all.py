import json, pathlib, re, collections

papers = json.loads(pathlib.Path('.cache/papers_v2.json').read_text(encoding='utf-8'))
bank = json.loads(pathlib.Path('.cache/question_bank_v2.json').read_text(encoding='utf-8'))

checks = {
    'cyrillic': lambda t: bool(re.search(r'[\u0400-\u04FF]', t)),
    'replacement': lambda t: '\ufffd' in t or '�' in t,
    'short': lambda t: len(t) < 20,
    'trailing_marks': lambda t: bool(re.search(r'(?:\s+\d{1,2}){2,}\s*$', t)),
    'embedded_or': lambda t: bool(re.search(r'\bOR\b', t)),
    'embedded_qno': lambda t: bool(re.search(r'\s[2-9]\.\s*[a-d]\)\s', t)),
    'broken_word': lambda t: bool(re.search(r'\b[a-z]{2,}\s[a-z]\b\s*$', t)),
    'lone_letter_tail': lambda t: bool(re.search(r'\s[a-zA-Z]\s*$', t)),
    'double_q': lambda t: '??' in t,
    'amp_garbage': lambda t: bool(re.search(r'[|~^]{1}', t)),
}

print('=== BANK-LEVEL CHECKS (canonical', len(bank), ') ===')
for name, fn in checks.items():
    hits = [q for q in bank if fn(q['question'])]
    print(f'{name:16} {len(hits):4}')
    for q in hits[:6]:
        print('   ', q['subjectId'], q['paperName'][:28], '|', q['question'][:120].replace('\n', ' '))

print()
print('=== PAPER-LEVEL DUPLICATES ===')
for p in papers:
    seen = {}
    for q in p['questions']:
        k = re.sub(r'[^a-z0-9]', '', q['text'].lower())[:80]
        if k in seen:
            print(p['subject'], p['paperName'], seen[k], '==', f"{q['major']}.{q['sub']}", '|', q['text'][:90])
        seen[k] = f"{q['major']}.{q['sub']}"

print()
print('=== LOW QUALITY PER PAPER ===')
import sys
sys.path.insert(0, 'scripts')
import build_bank_v2 as B
bad = []
for p in papers:
    for q in p['questions']:
        s = B.question_quality(q['text'])
        if s < -2:
            bad.append((s, p['subject'], p['paperName'], q['major'], q['sub'], q['text']))
for row in sorted(bad)[:40]:
    print(f'{row[0]:6.1f} {row[1]} {row[2][:30]} {row[3]}.{row[4]} | {row[5][:130]}')
print('total low-quality:', len(bad))
