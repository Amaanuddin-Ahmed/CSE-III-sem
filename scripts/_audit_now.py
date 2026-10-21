import json, re, random
from pathlib import Path

q = json.loads(Path('.cache/question_bank_v2.json').read_text(encoding='utf-8'))
print('total', len(q))

def show(title, items, n=40):
    print('\n==', title, len(items))
    for x in items[:n]:
        print(f"{x['subjectId']} {x['paperName']} p{x['pageNumber']} {x['questionNumber']} ch{x['chapter']}: {x['question']}")

short = [x for x in q if len(x['question']) < 18]
show('SHORT', short, 60)
garbled = [x for x in q if re.search(r'[\uFFFD�]|(?:\b\w{1,2}\b){5,}', x['question'])]
show('GARBLED', garbled, 50)
ends_bad = [x for x in q if re.search(r'(?:\b(?:is|are|the|of|and|or|to|with|for|by|in|on|a|an|that|which|explain|define|write|discuss|describe|what|how|why|compare|list|draw|give|state)|short note on)\s*[.?:;]*$', x['question'], re.I)]
show('ENDS BAD', ends_bad, 80)
print('\nEND BAD count', len(ends_bad))

long = [x for x in q if len(x['question']) > 600]
show('LONG', long, 40)
