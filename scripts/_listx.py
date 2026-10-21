import sys
sys.path.insert(0,'scripts')
import build_bank_v2 as b
it={'subject':'DBMS','fileName':'Aug 2023.pdf'}
for p in [3,4]:
 print('--- p',p)
 for y,x,l,m in b.ocr_lines(it,p):
  if any(k in l for k in ['Find the snames','Find the pnames','Find the sids','For each part','2.','3.','4.','5.']):
   print(y,x,repr(l),m)
