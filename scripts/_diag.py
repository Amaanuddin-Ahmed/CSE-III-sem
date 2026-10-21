import json, pymupdf, os
d=json.load(open('.cache/drive_manifest.json',encoding='utf-8'))
for i in d:
    if not i['localPath'].lower().endswith('.pdf'):
        print('IMG ',i['subject'],i['fileName']); continue
    p=os.path.join('.',i['localPath'])
    doc=pymupdf.open(p)
    txt=sum(len(pg.get_text('text')) for pg in doc)
    kind='TEXT' if txt>200 else 'SCAN'
    print(f"{i['subject']:5s} {i['fileName'][:45]:45s} pages={len(doc)} textchars={txt:6d} {kind}")
    doc.close()
