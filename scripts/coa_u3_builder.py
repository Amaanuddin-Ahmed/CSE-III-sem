import json
import re

def normalize_key(sub_id, text):
    cleaned = re.sub(r'[^a-z0-9]', ' ', text.lower())
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return f"{sub_id.lower()}|{cleaned}"

with open('data/coa-unit-3-4-5-questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

u3_questions = [q for q in questions if int(q['chapter']) == 3]

# Dictionary to hold the new solutions
unit3_solutions = {}

def add_solution(q_id, question_text, marks, answer_md):
    norm_key = normalize_key("COA", question_text)
    entry = {
        "key": norm_key,
        "subjectId": "COA",
        "chapter": 3,
        "marks": marks,
        "question": question_text,
        "answerMd": answer_md.strip()
    }
    unit3_solutions[norm_key] = entry
    unit3_solutions[q_id] = entry

print("Setup helper initialized. Writing unit 3 answers...")
