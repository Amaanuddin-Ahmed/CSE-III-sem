import json
p=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
x=[x for x in p if x['paperName']=='Aug 2023.pdf' and x['subject']=='DBMS'][1]
for q in x['questions']:
 if q['major']==3: print(q['sub'],len(q['text']),repr(q['text']))
