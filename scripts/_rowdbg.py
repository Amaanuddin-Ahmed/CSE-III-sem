import json,re
d=json.load(open('.cache/pyq_ocr_all/DBMS__Aug 2023.pdf__p4.json',encoding='utf-8'))
W,H=d['width'],d['height']
print(W,H)
words=[w for w in d['words'] if w['text'].strip() and w['text'] not in ('|','{','}','[',']','_')]
rows=[]
for w in sorted(words,key=lambda x:(x['y'],x['x'])):
    for r in rows:
        if abs(w['y']-r[0]['y'])<=H*0.006: r.append(w);break
    else: rows.append([w])
for r in rows:
    txt=' '.join(w['text'] for w in r)
    if 'Explain in detail' in txt or 'functional dependencies' in txt or 'stem' in txt.lower():
        print([(w['text'],w['x']) for w in sorted(r,key=lambda x:x['x'])])
