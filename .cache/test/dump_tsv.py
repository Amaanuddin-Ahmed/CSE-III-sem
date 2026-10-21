import json

d = json.load(open('.cache/pyq_ocr_tsv/SE__Aug 2024.pdf__p1.json', encoding='utf-8'))
words = d['words']
rows = []
for w in sorted(words, key=lambda x: (x['y'], x['x'])):
    placed = False
    for r in rows:
        if abs(w['y'] - r[0]['y']) < 10:
            r.append(w)
            placed = True
            break
    if not placed:
        rows.append([w])
for r in rows:
    r.sort(key=lambda x: x['x'])
    print(round(r[0]['y']), ' | '.join(f"{x['x']}:{x['text']}" for x in r)[:240])
