import sys
sys.path.insert(0,'scripts')
import build_bank_v2 as b
it={'subject':'DBMS','fileName':'Aug 2023.pdf'}
for p in [1,2]:
 print('--- p',p)
 for y,l,m in b.ocr_lines(it,p):
  if any(k in l for k in ['2. b','2.b','3. b','3.b','4. b','4.b','5. b','5.b','6. b','6.b','6.d','2. a','4. a']):
   print(y,repr(l),m)
