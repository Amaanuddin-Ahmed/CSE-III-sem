import json
from pathlib import Path
ps=json.loads(Path('.cache/prototype_papers.json').read_text(encoding='utf-8'))
targets=[('DM','Jan 2024 supp.pdf'),('DM','January 2024 supp.pdf'),('DBMS','January 2024 supp.pdf'),('SE','2025 july.pdf'),('OOPJ','jan 2024 reg.pdf'),('DM','Jan 2025.pdf'),('DM','Aug 2023.pdf'),('OOPJ','July 2025 reg,supp.pdf')]
for s,n in targets:
    p=next((x for x in ps if x['subject']==s and x['paperName']==n),None)
    if not p: continue
    print('\n#####',s,n,len(p['questions']))
    for q in p['questions']:
        print(f"{q['major']}{q['sub']}: {q['text']}")
