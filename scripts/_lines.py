import sys
sys.path.insert(0,'scripts')
import build_bank_v2 as b
it={'subject':'SE','fileName':'Dec 2024.pdf'}
for y,x,l,m in b.ocr_lines(it,1):
    if 'Testing' in l or 'risk management' in l or 'affect' in l: print(y,x,repr(l),m)
