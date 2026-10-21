import sys
sys.path.insert(0,'scripts')
import build_bank_v2 as b
it={'subject':'DM','fileName':'Jan 2025 supple.pdf'}
for p in [1,2]:
    print('--- page',p)
    for y,l,m in b.ocr_lines(it,p):
        if 'Clifton' in l or 'France' in l or 'Datsun' in l or 'Hence' in l or 'prime' in l.lower(): print(y,repr(l),m)
