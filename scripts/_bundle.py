import sys,json,pymupdf
sys.path.insert(0,'scripts')
import build_bank_v2 as b
m=json.load(open('.cache/drive_manifest.json',encoding='utf-8'))
for it in m:
    if it.get('pageCount',0)<=2: continue
    if it['subject'] not in {'DBMS','OOPJ'}: continue
    print('='*30,it['subject'],it['fileName'])
    d=pymupdf.open(b.ROOT/it['localPath'])
    for i in range(len(d)):
        t=d[i].get_text()
        if len(t.strip())<100:
            t=' '.join(l for _,l,_ in b.ocr_lines(it,i+1))
        head=' | '.join(t.splitlines()[:9])
        print(i+1, len(t), head[:300])
