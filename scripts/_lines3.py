import sys
sys.path.insert(0,'scripts')
import build_bank_v2 as b
it={'subject':'SE','fileName':'Dec 2024.pdf'}
for y,x,l,m in b.ocr_lines(it,1):
    if 'Risk Refinement' in l or 'software lifecycle' in l or 'software quality' in l or 'types of software' in l or 'testing during' in l: print(y,x,repr(l),m)
print('--- all lines 4400+')
for y,x,l,m in b.ocr_lines(it,1):
    if y>4000: print(y,x,repr(l),m)
