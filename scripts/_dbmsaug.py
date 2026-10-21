import json
p=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
for x in p:
 if x['paperName']=='Aug 2023.pdf' and x['subject']=='DBMS':
  print('='*20,x['pages'],len(x['questions']))
  for q in x['questions']: print(q['major'],q['sub'],q['marks'],q.get('source'),repr(q['text']))
