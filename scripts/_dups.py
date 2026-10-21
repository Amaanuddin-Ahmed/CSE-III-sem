import json,collections,re
d=json.load(open('.cache/question_bank_v2.json',encoding='utf-8'))
print('freq',collections.Counter(x['frequency'] for x in d))
print('appearances total',sum(x['frequency'] for x in d))
# near duplicate pairs within subject/chapter
from difflib import SequenceMatcher
def qn(t):
 t=t.lower(); t=re.sub(r'[^a-z0-9 ]',' ',t); t=re.sub(r'\b(the|a|an|of|in|to|and|or|is|are|what|define|explain|describe|write|discuss|with|for|its|how|why)\b',' ',t); return re.sub(r'\s+',' ',t).strip()
for s in ['DM','COA','OOPJ','DBMS','SE']:
 xs=[x for x in d if x['subjectId']==s]
 pairs=0
 for i in range(len(xs)):
  for j in range(i+1,len(xs)):
   if xs[i]['chapter']!=xs[j]['chapter']: continue
   a,b=qn(xs[i]['question']),qn(xs[j]['question'])
   if not a or not b: continue
   if SequenceMatcher(None,a,b).ratio()>=0.93 or (len(a)>25 and (a in b or b in a)):
    pairs+=1
    if pairs<=5: print(s,'NEAR',xs[i]['question'][:90],'||',xs[j]['question'][:90])
 print(s,'near pairs',pairs)
