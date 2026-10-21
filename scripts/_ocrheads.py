import sys,json,re
sys.path.insert(0,'scripts')
import build_bank_v2 as b
m=json.load(open('.cache/drive_manifest.json',encoding='utf-8'))
for it in m:
    if 'error' in it or it['subject'] not in {'DM','COA','OOPJ','DBMS','SE'}: continue
    if it.get('pageCount',1)<=0: continue
    for p in range(1,it.get('pageCount',1)+1):
        lines=[l for _,l,_ in b.ocr_lines(it,p)]
        head=' '.join(lines[:12])
        if re.search(r'hall ticket',head,re.I) and re.search(r'b\.?\s*tech',head,re.I):
            print(f"{it['subject']:4s}|{it['fileName'][:34]:34s}|p{p}|{head[:180]}")
