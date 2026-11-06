# -*- coding: utf-8 -*-
"""
Merge ES questions and solutions into pyq-data.js and data/solutions/ES.json
"""
import json
import re
import sys
import os
sys.path.insert(0, os.path.abspath('.'))

def norm_key(subject_id, q_text):
    clean = re.sub(r'[^a-z0-9]', ' ', q_text.lower())
    clean = re.sub(r'\s+', ' ', clean).strip()
    return f"{subject_id.lower()}|{clean}"

# Import all new questions and solutions
from scripts.create_es_data import new_questions
from scripts.build_es_u1 import U1_SOLUTIONS
from scripts.build_es_u1_rem import U1_REMAINING
from scripts.build_es_u2 import U2_SOLUTIONS
from scripts.build_es_u2_rem import U2_REMAINING
from scripts.build_es_u3 import U3_SOLUTIONS
from scripts.build_es_u3_rem import U3_REMAINING
from scripts.build_es_u4 import U4_SOLUTIONS
from scripts.build_es_u5 import U5_SOLUTIONS

all_new_solutions = (U1_SOLUTIONS + U1_REMAINING + 
                     U2_SOLUTIONS + U2_REMAINING + 
                     U3_SOLUTIONS + U3_REMAINING + 
                     U4_SOLUTIONS + U5_SOLUTIONS)

print(f"Loaded {len(new_questions)} new questions and {len(all_new_solutions)} new solutions.")

# 1. Update data/solutions/ES.json
with open('data/solutions/ES.json', 'r', encoding='utf-8') as f:
    es_json = json.load(f)

existing_solutions = es_json.get('solutions', {})
print(f"Existing solution keys in ES.json: {len(existing_solutions)}")

# Map existing questions in pyq-data.js to also have their question IDs as keys
# Read pyq-data.js
with open('pyq-data.js', 'r', encoding='utf-8') as f:
    pyq_content = f.read()

# Add new solutions to es_json['solutions']
sol_dict_by_id = {s[0]: s for s in all_new_solutions}

for q in new_questions:
    qid = q['id']
    qtext = q['question']
    ch = q['chapter']
    marks = q['marks']
    
    sol = sol_dict_by_id.get(qid)
    if not sol:
        print(f"WARNING: No solution found for {qid}")
        continue
    
    ans_md = sol[4].strip()
    n_key = norm_key("ES", qtext)
    
    entry = {
        "key": n_key,
        "id": qid,
        "subjectId": "ES",
        "question": qtext,
        "chapter": ch,
        "marks": marks,
        "answerMd": ans_md
    }
    
    existing_solutions[n_key] = entry
    existing_solutions[qid] = entry

# Count unique question IDs / keys
unique_solutions = set()
for k, v in existing_solutions.items():
    if isinstance(v, dict) and 'answerMd' in v:
        unique_solutions.add(v.get('question', k))

es_json['solutions'] = existing_solutions
es_json['totalSolutions'] = len(unique_solutions)
es_json['count'] = len(unique_solutions)
es_json['updatedAt'] = "2026-11-07T01:30:00.000Z"

with open('data/solutions/ES.json', 'w', encoding='utf-8') as f:
    json.dump(es_json, f, indent=2, ensure_ascii=False)

print(f"Updated data/solutions/ES.json with {len(existing_solutions)} total entries ({len(unique_solutions)} unique questions).")

# 2. Append new questions to QUESTIONS_DATABASE in pyq-data.js
# First check if any new question is already in pyq-data.js
existing_ids_in_pyq = set(re.findall(r'"id":\s*"([^"]+)"', pyq_content))
questions_to_add = [q for q in new_questions if q['id'] not in existing_ids_in_pyq]
print(f"Questions to add to pyq-data.js: {len(questions_to_add)} (out of {len(new_questions)})")

if questions_to_add:
    # Find the end of QUESTIONS_DATABASE array in pyq-data.js
    # Typically `const QUESTIONS_DATABASE = [ ...\n];`
    # Let's locate the closing bracket of QUESTIONS_DATABASE
    marker = "const QUESTIONS_DATABASE = ["
    idx = pyq_content.find(marker)
    if idx == -1:
        raise ValueError("Could not find QUESTIONS_DATABASE in pyq-data.js")
    
    # We find the end of the array before `if (typeof module !== 'undefined')`
    end_marker_idx = pyq_content.rfind("];\n\nif (typeof module")
    if end_marker_idx == -1:
        end_marker_idx = pyq_content.rfind("];\nif (typeof module")
    if end_marker_idx == -1:
        end_marker_idx = pyq_content.rfind("];")
    
    # Format the questions to add as pretty JSON objects with proper 2-space indentation
    formatted_qs = []
    for q in questions_to_add:
        q_json = json.dumps(q, indent=2, ensure_ascii=False)
        # Indent each line with 2 spaces
        indented = "  " + q_json.replace("\n", "\n  ")
        formatted_qs.append(indented)
    
    # Check if the array already has elements and needs a preceding comma
    # Look back from end_marker_idx to find non-whitespace
    prev_content = pyq_content[:end_marker_idx].rstrip()
    comma = ",\n" if not prev_content.endswith("[") else "\n"
    
    new_pyq_content = (
        prev_content + comma +
        ",\n".join(formatted_qs) + "\n" +
        pyq_content[end_marker_idx:]
    )
    
    with open('pyq-data.js', 'w', encoding='utf-8') as f:
        f.write(new_pyq_content)
    
    print(f"Successfully appended {len(questions_to_add)} questions to QUESTIONS_DATABASE in pyq-data.js.")
else:
    print("All questions already present in pyq-data.js.")

# 3. Update SUBJECTS_DATA for ES in pyq-data.js
with open('pyq-data.js', 'r', encoding='utf-8') as f:
    updated_pyq = f.read()

# Update questionCount and paperCount for ES
# Let's find SUBJECTS_DATA and ES block
updated_pyq = re.sub(
    r'(ES:\s*\{[^}]*?questionCount:\s*)\d+',
    r'\g<1>77',
    updated_pyq
)

updated_pyq = re.sub(
    r'(ES:\s*\{[^}]*?paperCount:\s*)\d+',
    r'\g<1>5',
    updated_pyq
)

with open('pyq-data.js', 'w', encoding='utf-8') as f:
    f.write(updated_pyq)

print("Updated SUBJECTS_DATA for ES in pyq-data.js (questionCount: 77, paperCount: 5).")
