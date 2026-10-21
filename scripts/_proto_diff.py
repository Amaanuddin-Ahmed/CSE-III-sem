import json
from pathlib import Path
cur=json.loads(Path('.cache/question_bank_v2.json').read_text(encoding='utf-8'))
pro=json.loads(Path('.cache/prototype_papers.json').read_text(encoding='utf-8'))
curmap={}
for q in cur:
    curmap.setdefault((q['subjectId'],q['paperName']),set()).add(q['questionNumber'].replace('Q',''))
for p in pro:
    keys={(str(q['major'])+q['sub']) for q in p['questions']}
    ck=curmap.get((p['subject'],p['paperName']),set())
    miss=ck-keys
    extra=keys-ck
    if miss or extra:
        print(f"{p['subject']:5} {p['label'][:20]:20} n={len(keys)} cur={len(ck)} missing={' '.join(sorted(miss))} extra={' '.join(sorted(extra))}")
