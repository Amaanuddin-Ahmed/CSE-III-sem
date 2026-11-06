# -*- coding: utf-8 -*-
"""
Generates complete authentic ES questions and examination solutions
covering all 5 units for MGIT MR-25 / MR-22 syllabus.
"""

import json
import re

def norm_key(subject_id, q_text):
    clean = re.sub(r'[^a-z0-9]', ' ', q_text.lower())
    clean = re.sub(r'\s+', ' ', clean).strip()
    return f"{subject_id.lower()}|{clean}"

# Load existing solutions if present
existing_solutions = {}
try:
    with open('CSE-III-sem/data/solutions/ES.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        existing_solutions = data.get('solutions', data)
except Exception:
    pass

print(f"Loaded {len(existing_solutions)} existing solutions.")
