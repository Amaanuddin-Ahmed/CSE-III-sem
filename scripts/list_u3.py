import json

with open('data/coa-unit-3-4-5-questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

u3 = [q for q in questions if int(q['chapter']) == 3]
print(f"Total Unit 3: {len(u3)}")

for idx, q in enumerate(u3, 1):
    print(f"{idx}. [{q['marks']}M] {q['id']}: {q['question']}")
