import json

with open('scripts/coa_boilerplate_questions.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

for q in qs:
    print(f"{q['id']}|{q['chapter']}|{q['marks']}|{q['question']}")
