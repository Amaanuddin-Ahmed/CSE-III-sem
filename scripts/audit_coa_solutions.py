# -*- coding: utf-8 -*-
import json

with open('data/solutions/COA.json', 'r', encoding='utf-8') as f:
    coa = json.load(f)

with open('data/coa-unit-3-4-5-questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

boilerplate_count = 0
missing_count = 0
valid_count = 0

for q in questions:
    qid = q['id']
    normKey = q.get('normKey', '')
    sol = coa['solutions'].get(qid) or coa['solutions'].get(normKey)
    if not sol:
        missing_count += 1
        print(f"MISSING: [{qid}] {q['question'][:50]}")
    elif 'MR-25 Regulation' in sol or 'Core Engineering Definition & Architectural Principle' in sol:
        boilerplate_count += 1
        print(f"BOILERPLATE: [{qid}] {q['question'][:50]}")
    else:
        valid_count += 1

print("\n--- COA UNITS 3, 4, 5 AUDIT SUMMARY ---")
print(f"Total Questions Checked: {len(questions)}")
print(f"Fully Authored & Valid:  {valid_count}")
print(f"Remaining Boilerplate:   {boilerplate_count}")
print(f"Missing Solutions:       {missing_count}")
