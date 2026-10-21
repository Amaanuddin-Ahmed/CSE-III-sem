import json
from collections import Counter
from pathlib import Path

papers = json.loads(Path('.cache/papers_v2.json').read_text(encoding='utf-8'))
for p in papers:
    seen=[]
    for q in p['questions']:
        k=f"{q['major']}{q.get('sub','')}"
        if k not in seen: seen.append(k)
    counts=Counter(q['major'] for q in p['questions'])
    print(f"{p['subject']:5} {p['label']:22} {p['paperName'][:33]:33} pages={p['pages']} n={len(p['questions']):2} majors={dict(sorted(counts.items()))} qs={' '.join(seen)}")
