# -*- coding: utf-8 -*-
"""
Merges all 95 Unit 5 solutions into data/solutions/COA.json
"""
import json

# 1. Load existing COA.json
with open('data/solutions/COA.json', 'r', encoding='utf-8') as f:
    coa_db = json.load(f)

# 2. Load questions metadata
with open('data/coa-unit-3-4-5-questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

u5_qmap = {q['id']: q for q in questions if q.get('chapter') == 5}

# 3. Load all authored u5 parts
authored = {}
for path in [
    'scripts/u5_p1_data.json',
    'scripts/u5_p2_data.json',
    'scripts/u5_p3_data.json'
]:
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        authored.update(data)

print(f"Total authored U5 solutions: {len(authored)} (Target: 95)")

updated_count = 0
for qid, sol_text in authored.items():
    # Update by ID
    coa_db['solutions'][qid] = sol_text
    
    # Update by normKey if known
    q_meta = u5_qmap.get(qid)
    if q_meta and 'normKey' in q_meta:
        coa_db['solutions'][q_meta['normKey']] = sol_text
    
    updated_count += 1

print(f"Successfully integrated {updated_count} Unit 5 solutions into COA.json database!")

with open('data/solutions/COA.json', 'w', encoding='utf-8') as f:
    json.dump(coa_db, f, indent=2, ensure_ascii=False)

print("Saved updated data/solutions/COA.json!")
