import json, random
from pathlib import Path

q = json.loads(Path('.cache/question_bank_v2.json').read_text(encoding='utf-8'))
random.seed(4)
for subj in ['DM','COA','OOPJ','DBMS','SE']:
    print('\n\n########', subj)
    items = [x for x in q if x['subjectId']==subj]
    for x in random.sample(items, min(45,len(items))):
        print(f"[{x['paperName']} p{x['pageNumber']} {x['questionNumber']} ch{x['chapter']}] {x['question']}")
