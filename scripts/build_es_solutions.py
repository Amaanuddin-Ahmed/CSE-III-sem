# -*- coding: utf-8 -*-
"""
Builds authentic, comprehensive examination solutions for all Environmental Studies (ES) questions
covering Units 1, 2, 3, 4, and 5 for MGIT MR-25 and MR-22 syllabus.
"""

import json
import re
import os

def norm_key(subject_id, q_text):
    clean = re.sub(r'[^a-z0-9]', ' ', q_text.lower())
    clean = re.sub(r'\s+', ' ', clean).strip()
    return f"{subject_id.lower()}|{clean}"

# Master Solutions Dictionary
SOLUTIONS = {}

def add_solution(q_id, question_text, chapter, marks, answer_md):
    nk = norm_key("ES", question_text)
    entry = {
        "id": q_id,
        "question": question_text,
        "subjectId": "ES",
        "chapter": chapter,
        "marks": marks,
        "answerMd": answer_md.strip()
    }
    SOLUTIONS[nk] = entry
    SOLUTIONS[q_id] = entry

print("Ready to populate solutions.")
