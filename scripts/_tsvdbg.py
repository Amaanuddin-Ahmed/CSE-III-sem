import json
p='.cache/pyq_ocr_all/DBMS__Dec 2024.pdf__p1.json'
d=json.load(open(p,encoding='utf-8'))
print(d['width'],d['height'])
for w in d['words']:
    if 'stem' in w['text'].lower() or w['text'].strip() in {'M','L','CO','PO','Q.'}:
        print(w)
print('--- words x>0.7w first 40')
for w in d['words'][:]:
    if w['x']>0.70*d['width'] and w['y']<600: print(round(w['x']),round(w['y']),repr(w['text']))
