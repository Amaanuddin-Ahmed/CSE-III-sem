import sys, json, re, pymupdf
sys.path.insert(0,'scripts')
import build_bank_v2 as b
man=json.load(open('.cache/drive_manifest.json',encoding='utf-8'))
for it in man:
    if 'error' in it or it['subject'] not in {'DM','COA','OOPJ','DBMS','SE'}: continue
    p=b.ROOT/it['localPath']
    if p.suffix.lower()!='.pdf': continue
    d=pymupdf.open(p)
    t=d[0].get_text()
    if len(t.strip())<100:
        lines=[l for _,l,_ in b.ocr_lines(it,1)]
        t=' '.join(lines)
    # find subject line: after institute line
    lines=[re.sub(r'\s+',' ',x).strip() for x in t.splitlines() if x.strip()]
    subj=''
    for i,l in enumerate(lines[:15]):
        if re.search(r'gandhi|institute',l,re.I):
            for cand in lines[i+1:i+5]:
                if re.search(r'B\.?Tech|Semester|Hall|Code|Time|Marks|Part-',cand,re.I): continue
                subj=cand; break
            break
    d.close()
    print(f"{it['subject']:5s} | {it['fileName'][:42]:42s} | {subj[:70]}")
