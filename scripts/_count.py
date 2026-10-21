import json, pymupdf, os
m=json.load(open('.cache/drive_manifest.json',encoding='utf-8'))
scanned=[]; texted=[]
for i in m:
    p=os.path.join('.',i['localPath'])
    if p.lower().endswith(('.jpeg','.jpg','.png')):
        scanned.append((i,1)); continue
    doc=pymupdf.open(p)
    for n,pg in enumerate(doc,1):
        t=pg.get_text('text').strip()
        (texted if len(t)>=40 else scanned).append((i,n))
    doc.close()
print('text pages',len(texted),'scanned pages',len(scanned))
from collections import Counter
print('scanned by subj',Counter(i['subject'] for i,n in scanned))
