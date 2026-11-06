# -*- coding: utf-8 -*-
"""
Merges all 92 Unit 3 solutions into data/solutions/COA.json
"""
import json

# 1. Load existing COA.json
with open('data/solutions/COA.json', 'r', encoding='utf-8') as f:
    coa_db = json.load(f)

# 2. Load questions metadata
with open('data/coa-unit-3-4-5-questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

u3_qmap = {q['id']: q for q in questions if q.get('chapter') == 3}

# 3. Load all authored u3 parts
authored = {}
for path in [
    'scripts/u3_p1_data.json',
    'scripts/u3_p1b_data.json',
    'scripts/u3_p2a_data.json',
    'scripts/u3_p2b_data.json',
    'scripts/u3_p2c_data.json',
    'scripts/u3_p2d_data.json'
]:
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        authored.update(data)

print(f"Total authored U3 solutions: {len(authored)} (Target: 92)")

updated_count = 0
for qid, sol_text in authored.items():
    # Update by ID
    coa_db['solutions'][qid] = sol_text
    
    # Update by normKey if known
    q_meta = u3_qmap.get(qid)
    if q_meta and 'normKey' in q_meta:
        coa_db['solutions'][q_meta['normKey']] = sol_text
    
    updated_count += 1

print(f"Successfully integrated {updated_count} solutions into COA.json database!")

with open('data/solutions/COA.json', 'w', encoding='utf-8') as f:
    json.dump(coa_db, f, indent=2, ensure_ascii=False)

print("Saved updated data/solutions/COA.json!")
