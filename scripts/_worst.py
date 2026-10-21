import json
p=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
for name in ['DBMS/Dec 2024.pdf','SE/Dec 2024.pdf','DM/jan 2024 reg.pdf','OOPJ/Jan2026.pdf','DBMS/Aug 2023.pdf']:
    x=next((x for x in p if x['paperName']==name.split('/')[1] and x['subject']==name.split('/')[0]),None)
    print('='*30,name, 'pages',x['pages'] if x else None)
    if not x: continue
    for q in x['questions']:
        print(q['major'],q['sub'],q['marks'],repr(q['text']))
