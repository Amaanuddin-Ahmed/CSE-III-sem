import json, pathlib, re, collections

papers = json.loads(pathlib.Path('.cache/papers_v2.json').read_text(encoding='utf-8'))

print(f"{'subject':6} {'paper':42} {'code':9} {'n':>3} {'A':>2} {'B':>2}  structure")
for p in papers:
    qs = p['questions']
    a = [q for q in qs if q['major'] == 1]
    b = [q for q in qs if q['major'] >= 2]
    struct = []
    for m in range(2, 7):
        subs = [q['sub'] for q in qs if q['major'] == m]
        struct.append(f"{m}:{''.join(s or '?' for s in subs) or '-'}")
    flags = []
    if len(qs) != 30:
        flags.append(f"n={len(qs)}")
    if len(a) != 10:
        flags.append(f"A={len(a)}")
    title = p['paperName'][:40]
    mark = ' '.join(flags)
    print(f"{p['subject']:6} {title:42} {str(p.get('paperCode'))[:9]:9} {len(qs):3} {len(a):2} {len(b):2}  {' '.join(struct):40} {mark}")
