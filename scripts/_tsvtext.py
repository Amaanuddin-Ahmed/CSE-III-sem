import json, sys, re

def load(path, cut=1800):
    d=json.load(open(path,encoding='utf-8'))
    W=d['width']
    words=[w for w in d['words'] if w['text'].strip() and w['x'] < W*0.72]
    rows=[]
    for w in sorted(words,key=lambda x:(x['y'],x['x'])):
        for r in rows:
            if abs(w['y']-r[0]['y'])<=8:
                r.append(w); break
        else: rows.append([w])
    out=[]
    for r in rows:
        r.sort(key=lambda x:x['x'])
        out.append(' '.join(w['text'] for w in r))
    return out

for line in load(sys.argv[1]):
    print(line)
