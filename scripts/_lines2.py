import sys
sys.path.insert(0,'scripts')
import build_bank_v2 as b
it={'subject':'SE','fileName':'Dec 2024.pdf'}
for y,x,l,m in b.ocr_lines(it,1):
    if 3350<y<3700 or 4300<y<4800 or 3600<y<4200: print(y,x,repr(l),m)
