import json, pymupdf, os, hashlib, collections
d=json.load(open('.cache/drive_manifest.json',encoding='utf-8'))
groups=collections.defaultdict(list)
for i in d:
    if not i['localPath'].lower().endswith('.pdf'): continue
    doc=pymupdf.open(os.path.join('.',i['localPath']))
    text='\n'.join(pg.get_text('text') for pg in doc).strip()
    doc.close()
    if len(text)<200:
        # use file bytes for scans
        h=hashlib.md5(open(os.path.join('.',i['localPath']),'rb').read()).hexdigest()
    else:
        h=hashlib.md5(' '.join(text.split()).encode()).hexdigest()
    groups[(i['subject'],h)].append(i['fileName'])
for (s,h),names in groups.items():
    if len(names)>1:
        print(s, ' | '.join(names))
