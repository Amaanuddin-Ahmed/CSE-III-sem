import sys
sys.path.insert(0,'scripts')
import build_bank_v2 as b
it={'subject':'DBMS','fileName':'Dec 2024.pdf'}
for y,line,m in b.ocr_lines(it,1):
    if 'Entity' in line or 'modeling' in line or 'constraints' in line:
        print(y,repr(line),m)
        for yy,ll,mm in b.ocr_lines(it,1):
            if abs(yy-y)<60: print('   ',yy,repr(ll),mm)
