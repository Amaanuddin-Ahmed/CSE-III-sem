import json
import re

# Load all questions
with open('data/coa-unit-3-4-5-questions.json', 'r', encoding='utf-8') as f:
    all_questions = json.load(f)

u3_questions = [q for q in all_questions if int(q['chapter']) == 3]
print(f"Loaded {len(u3_questions)} questions for Unit 3.")
