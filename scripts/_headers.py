import json,pymupdf,os,re
m=json.load(open('.cache/drive_manifest.json',encoding='utf-8'))
for i in m:
    p=os.path.join('.',i['localPath'])
    if not p.lower().endswith('.pdf'): continue
    doc=pymupdf.open(p); t=doc[0].get_text('text'); doc.close()
    head=' '.join(t.split())[:420] if len(t.strip())>100 else ''
    sem=re.search(r'B\.Tech\.?\s*(I{1,3}V?|IV)\s*Semester',head)
    if not sem:
        # try OCR file if text empty
        f='.cache/pyq_ocr_tess6/%s__%s__p1.txt'%(i['subject'],i['fileName'])
        if os.path.exists(f):
            head=' '.join(open(f,encoding='utf-8',errors='ignore').read().split())[:420]
            sem=re.search(r'B\.Tech\.?\s*(I{1,3}V?|IV)\s*Semester',head)
    print(f"{i['subject']:5s} {i['fileName'][:40]:40s} sem={sem.group(1) if sem else '?'} :: {head[:150]}")
