import json,collections
p=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
print('papers',len(p))
for x in p:
    if x['paperName'] in ('Aug 2023.pdf','Jan 2025.pdf','July 2025.pdf','Dec 2024.pdf','January 2026.pdf','July 2025 reg,supp.pdf','Supp jan 26.pdf'):
        print(x['subject'],x['paperName'],x['pages'],x['label'],x['semester'],x['paperCode'],len(x['questions']))
print('subjects',collections.Counter(x['subject'] for x in p))
print('sem',collections.Counter((x['subject'],x['semester']) for x in p))
print('exam',collections.Counter(x['examType'] for x in p))
for x in p:
    if len(x['questions'])<28: print('short',x['subject'],x['paperName'],x['pages'],x['label'],len(x['questions']))
