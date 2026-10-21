import json
d=json.load(open('.cache/pyq_ocr_all/SE__Dec 2024.pdf__p1.json',encoding='utf-8'))
print(d['width'])
for w in sorted([w for w in d['words'] if 950<w['y']<1080],key=lambda w:(w['y'],w['x'])):
    print(round(w['x']),round(w['y']),repr(w['text']))
