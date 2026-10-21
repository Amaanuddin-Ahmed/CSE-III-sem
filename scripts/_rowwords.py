import json
d=json.load(open('.cache/pyq_ocr_all/DBMS__Dec 2024.pdf__p1.json',encoding='utf-8'))
for w in sorted([w for w in d['words'] if abs(w['y']-1107)<50],key=lambda w:w['x']):
    print(round(w['x']),round(w['y']),repr(w['text']))
