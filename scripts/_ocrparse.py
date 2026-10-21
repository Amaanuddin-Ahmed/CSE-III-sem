import json,re,sys
from pathlib import Path
from collections import defaultdict

ROOT=Path('.')
OCR=ROOT/'.cache/pyq_ocr_all'

def load_lines(path):
    d=json.load(open(path,encoding='utf-8'))
    W,H=d['width'],d['height']
    words=[w for w in d['words'] if w['text'].strip() and re.search(r'[A-Za-z0-9]',w['text'])]
    # detect header cut
    tol=max(14,H*0.006)
    rows=[]
    for w in sorted(words,key=lambda x:(x['y'],x['x'])):
        for r in rows:
            if abs(w['y']-r[0]['y'])<=tol:
                r.append(w);break
        else: rows.append([w])
    cutoff=W*0.75
    for r in rows:
        texts=[w['text'].lower() for w in r]
        if any('stem' in t for t in texts):
            rights=[w['x'] for w in r if w['x']>W*0.6 and w['text'].strip().upper() in ('M','L','CO','PO')]
            if rights: cutoff=min(rights)-12
    cut=int(cutoff)
    out=[]
    for r in sorted(rows,key=lambda r:r[0]['y']):
        r=[w for w in r if w['x']<cut]
        if not r: continue
        r.sort(key=lambda w:w['x'])
        line=' '.join(w['text'] for w in r)
        line=re.sub(r'\s+',' ',line).strip(' |{}_')
        out.append((int(r[0]['y']),line))
    return out,cut

def parse(lines):
    qs=[];cur=None;major=None
    def flush():
        nonlocal cur
        if cur and len(cur['text'].strip())>3: qs.append(cur)
        cur=None
    for y,line in lines:
        low=line.lower()
        if re.match(r'^(part[- ]?[ab]|q\.?\s*no|stem\s*of|hall ticket|mahatma|b\.tech|time:|max\.? marks|answer all|p\.?t\.?o)',low): continue
        if low in ('or','and'): continue
        if re.match(r'^\d{1,2}$',line): continue
        m=re.match(r'^([0-9lI]{1,2})\s*[.)]\s*(?:([a-j])\s*[).]?)?\s*(.*)$',line)
        if m:
            maj=int(m.group(1).replace('l','1').replace('I','1'))
            if 1<=maj<=6:
                flush(); major=maj
                cur={'major':maj,'sub':(m.group(2) or '').lower(),'text':m.group(3).strip(),'y':y}
                continue
        m2=re.match(r'^([a-j])\s*[).]\s*(.*)$',line)
        if m2 and major:
            flush()
            cur={'major':major,'sub':m2.group(1),'text':m2.group(2).strip(),'y':y}
            continue
        if cur is not None:
            cur['text']=(cur['text']+' '+line).strip()
    flush()
    return qs

for f in sys.argv[1:]:
    lines,cut=load_lines(f)
    print('====',Path(f).name,'cut',cut)
    for q in parse(lines):
        print(f"  {q['major']}.{q['sub']} :: {q['text'][:160]}")
