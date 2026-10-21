import json
p=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
for name in ['Dec 2024.pdf','jan 2025 supple.pdf']:
 for x in p:
  if x['subject']=='SE' and x['paperName']==name:
   print('='*20,name,x['pages'])
   for q in x['questions']: print(q['major'],q['sub'],repr(q['text'][:120]))
