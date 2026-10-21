import json
p='.cache/pyq_ocr_tsv/COA__2025 Supple july.pdf__p1.json'
d=json.load(open(p,encoding='utf-8'))
W=d['width']
words=[w for w in d['words'] if w['text'].strip()]
rows=[]
for w in sorted(words,key=lambda x:(x['y'],x['x'])):
    for r in rows:
        if abs(w['y']-r[0]['y'])<=6:
            r.append(w); break
    else: rows.append([w])
for r in rows:
    r.sort(key=lambda x:x['x'])
    line=' | '.join(f"{w['text']}@{w['x']}" for w in r)
    if any(k in line.lower() for k in ['stem','q.no','1.','2.']) or (300<r[0]['y']<1200):
        print(round(r[0]['y']), line[:400])
