import json
p=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
for name in ['Jan 2025 supple.pdf','January 2026.pdf']:
 for x in p:
  if x['paperName']==name and x['subject']=='DM':
   print('='*20,name,x['pages'])
   for q in x['questions']: print(q['major'],q['sub'],q['marks'],q.get('source'),repr(q['text']))
