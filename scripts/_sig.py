import json,re
from collections import Counter,defaultdict
d=json.load(open('.cache/raw_question_bank.json',encoding='utf-8'))
for p in d:
    qs=p['questions']
    parts=defaultdict(list)
    for q in p['questions']:
        parts[q['major']].append(q['sub'])
    sig=' '.join(f"{m}:{''.join(sorted(set(s)))}" for m,s in sorted(parts.items()))
    flags=[]
    if len(parts.get(1,[]))!=10: flags.append(f"A={len(parts.get(1,[]))}")
    for m in range(2,7):
        n=len(parts.get(m,[]))
        if n!=4: flags.append(f"{m}={n}")
    bad=[q['text'][:60] for q in qs if re.search(r'\b\d\s+\d\s+\d\b|Q\.No|Stem of|“|\bCO\b|\bPO\b',q['text'])]
    print(f"{p['subject']:5s} {p['paperName'][:38]:38s} {p['label'][:34]:34s} n={len(qs):2d} {sig} {' '.join(flags)}")
