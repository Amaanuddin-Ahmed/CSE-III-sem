import json

with open('scripts/coa_boilerplate_questions.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

print(f'Total questions: {len(qs)}')
u1 = [q for q in qs if q.get('chapter') == 1]
u2 = [q for q in qs if q.get('chapter') == 2]
print(f'Unit 1: {len(u1)}, Unit 2: {len(u2)}')
for i, q in enumerate(qs[:15]):
    print(f'{i+1}. [{q.get("id")}] ({q.get("marks")}M, U{q.get("chapter")}) {q.get("question")}')
