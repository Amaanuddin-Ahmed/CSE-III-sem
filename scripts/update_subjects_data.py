import re

with open('CSE-III-sem/pyq-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Update notesCount in SUBJECTS_DATA
content = re.sub(r'("DM":\s*\{[^}]*?"notesCount":\s*)\d+', r'\g<1>22', content)
content = re.sub(r'("COA":\s*\{[^}]*?"notesCount":\s*)\d+', r'\g<1>29', content)
content = re.sub(r'("DBMS":\s*\{[^}]*?"notesCount":\s*)\d+', r'\g<1>11', content)

with open('CSE-III-sem/pyq-data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated SUBJECTS_DATA notesCount in pyq-data.js successfully.")
