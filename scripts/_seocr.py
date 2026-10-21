import sys
sys.path.insert(0,'scripts')
import build_bank_v2 as b
it={'subject':'SE','fileName':'Dec 2024.pdf'}
for y,x,l,m in b.ocr_lines(it,1):
    if y<1500: print(y,x,repr(l),m)
