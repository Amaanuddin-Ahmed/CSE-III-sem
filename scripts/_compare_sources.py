import json, sys, re
from pathlib import Path
sys.path.insert(0,'scripts')
import build_bank_v2 as b
import pymupdf

manifest=json.loads(Path('.cache/drive_manifest.json').read_text(encoding='utf-8'))
targets=[('OOPJ','Aug 2023.pdf'),('OOPJ',"Jan '24 (java).pdf"),('OOPJ','jan 2024 reg.pdf'),('DM','January 2024 supp.pdf'),('DM','Jan 2024 supp.pdf'),('DM','Jan 2025.pdf'),('DM','Aug 2023.pdf'),('DBMS','January 2024 supp.pdf'),('SE','2025 july.pdf')]
for subj,name in targets:
    item=next((i for i in manifest if i.get('fileName')==name and i.get('subject')==subj),None)
    if not item: print('NO',subj,name); continue
    doc=pymupdf.open(Path(item['localPath']))
    pages=list(range(1,len(doc)+1))
    src={}
    for pno in pages:
        src.setdefault('text',[]).extend(b.parse_text_page(doc[pno-1],pno))
        src.setdefault('ocr',[]).extend(b.parse_ocr_page(item,pno))
        p4=b.psm4_text(item,pno)
        if p4: src.setdefault('p4',[]).extend(b.parse_psm4_page(p4,pno))
    print('\n\n#####',subj,name,pages)
    keys=sorted({(q['major'],q.get('sub','')) for qs in src.values() for q in qs})
    for key in keys:
        print(f'-- {key[0]}{key[1]}')
        for s in ['text','ocr','p4']:
            for q in src.get(s,[]):
                if (q['major'],q.get('sub',''))==key:
                    print(f'  {s}: {b.clean_question(q["text"],q.get("marks"))[:400]}')
    doc.close()
