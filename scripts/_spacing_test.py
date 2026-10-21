import re
from wordfreq import top_n_list, zipf_frequency

VALID = set(w.lower() for w in top_n_list('en', 100000))
WORD_RE = re.compile(r"[A-Za-z]+")

def z(w): return zipf_frequency(w.lower(), 'en')

def repair_spacing(text, max_group=5):
    parts = [t for t in re.split(r'\s+', text) if t]
    out=[]
    i=0
    while i < len(parts):
        best=None
        for n in range(2, min(max_group, len(parts)-i)+1):
            chunk=parts[i:i+n]
            if not all(WORD_RE.fullmatch(c) for c in chunk):
                break
            if any(len(c)>12 for c in chunk):
                break
            joined=''.join(chunk)
            low=joined.lower()
            if len(joined)<4 or len(joined)>18 or low not in VALID:
                continue
            valid_flags=[c.lower() in VALID for c in chunk]
            if all(valid_flags):
                continue
            # Don't swallow normal words on the outside; at least one invalid fragment
            # and joined should be reasonably common.
            if z(joined) < 2.6:
                continue
            # prefer longest valid join, then most invalid pieces
            score=(sum(1 for v in valid_flags if not v), n, z(joined))
            if best is None or score > best[0]:
                best=(score,n,joined)
        if best:
            _,n,joined=best
            first=parts[i]
            if first.isupper() and len(first)>1:
                joined=joined.upper()
            elif first[0].isupper():
                joined=joined[0].upper()+joined[1:].lower()
            else:
                joined=joined.lower()
            out.append(joined)
            i+=n
        else:
            out.append(parts[i]); i+=1
    return ' '.join(out)

samples=[
'Wh at is an O bj ec t? How to allo cate memory for objects?',
'What h appe ns when th ere is no suitable tr y blo ck to handl e except ion?',
'Define int erface?',
'What is li g ht weight proc ess? Discuss.',
'Draw the thread li fe cy cle.',
'Ex pl ain Sca nn er cla ss with an examp le.',
'C omp are and C ontrast between ArrayList and V ec tor?',
'Wh at IS Java Co ll ect ions Framewo rk? List out some benefits of Co ll ec tions framework an d explain.',
'What is the difference between JButton and JToggleButton?',
'What are benefits of exception handling?',
'Explain the purpose of TextField Class. List event classes?',
'Compare Procedural oriented languages and OOP?',
]
for s in samples:
    print('IN :',s)
    print('OUT:',repair_spacing(s))
