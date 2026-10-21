import json,re
path='.cache/pyq_ocr_all/DBMS__Dec 2024.pdf__p1.json'
data=json.load(open(path,encoding='utf-8'))
width,height=data['width'],data['height']
words=[w for w in data['words'] if w['text'].strip() and w['text'].strip() not in {'|','{','}','[',']','_','='}]
tol=max(12.0,height*0.006); rows=[]
for w in sorted(words,key=lambda x:(x['y'],x['x'])):
    for row in rows:
        if abs(w['y']-row[0]['y'])<=tol: row.append(w); break
    else: rows.append([w])
cutoff=width*0.73
for row in rows:
    txt=' '.join(w['text'] for w in row).lower()
    if 'stem' in txt:
        rights=[w['x'] for w in row if w['x']>width*0.55 and w['text'].strip().upper() in {'M','L','CO','PO'}]
        print('header row',[(w['text'],w['x']) for w in row],rights)
        if rights: cutoff=min(rights)-38
        break
print('cutoff',cutoff, 'w',width)
for row in rows:
    if any('Entity' in w['text'] for w in row):
        print([(w['text'],w['x'],w['x']<cutoff) for w in sorted(row,key=lambda w:w['x'])])
