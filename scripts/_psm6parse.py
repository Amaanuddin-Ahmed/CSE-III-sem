import re,sys
from pathlib import Path

MARKS_TAIL=re.compile(r"\s+(\d{1,2})(?:\s+(?:\d{1,3}|[lLzZ=<>#]{1,3}|[0-9,;.]{1,8})){1,4}\s*$")
QRE=re.compile(r"^([0-9lI]{1,2})\s*[.)]\s*(?:([a-j])\s*[).]?)?\s*(.*)$")
SUBRE=re.compile(r"^([a-j])\s*[).]\s*(.*)$")

def clean(line):
    line=line.replace('|',' ').replace('[',' ').replace(']',' ')
    line=re.sub(r'\s+',' ',line).strip()
    return line

def parse(path):
    qs=[];cur=None;major=None;marks=None
    def flush():
        nonlocal cur
        if cur and len(cur['text'].strip())>2: qs.append(cur)
        cur=None
    for raw in Path(path).read_text(encoding='utf-8',errors='ignore').splitlines():
        line=clean(raw)
        if not line: continue
        low=line.lower()
        if re.match(r'^(part[- ]?[ab]|q\.?\s*no|stem\s*of|hall ticket|mahatma|b\.tech|time:|max\.? marks|answer all|p\.?t\.?o|m:\s*marks|m\s*\|)',low): continue
        if re.match(r'^\[?q\.?no',low): continue
        if low in ('or','and'): continue
        # strip trailing marks
        m=MARKS_TAIL.search(line)
        mk=None
        if m:
            mk=int(m.group(1)); line=line[:m.start()].strip()
        line=line.strip(' |{}_')
        if not line: continue
        # split inline next question
        parts=re.split(r'(?<=[?.])\s+(?=\d{1,2}\s*[.)]\s*[a-j]\s*[).]|\[\s*\d{1,2}\s*[.)])',line)
        if len(parts)>1:
            # process first then rest
            for part in parts:
                line=part
                q=try_q(line, mk)
                if q: flush(); major=q['major']; cur=q
                elif cur is not None: cur['text']+=' '+line
            continue
        q=try_q(line,mk)
        if q:
            flush(); major=q['major']; cur=q; continue
        if cur is not None: cur['text']+=' '+line
    flush()
    return qs

def try_q(line,mk):
    m=QRE.match(line)
    if m:
        maj=int(m.group(1).replace('l','1').replace('I','1'))
        if 1<=maj<=6:
            rest=(m.group(3) or '').strip()
            sub=(m.group(2) or '').lower()
            # '1. 1) text' case
            if not sub:
                mm=re.match(r'^(?:([a-j]|1)|)\s*[).]\s*(.*)$',rest)
                if mm and (mm.group(1) or ''):
                    sub=(mm.group(1) or '').lower(); rest=mm.group(2)
            return {'major':maj,'sub':sub,'text':rest,'marks':mk}
    m=SUBRE.match(line)
    return None

for f in sys.argv[1:]:
    print('====',Path(f).name)
    for q in parse(f):
        print(f"  {q['major']}.{q['sub']} [{q['marks']}] :: {q['text'][:170]}")
