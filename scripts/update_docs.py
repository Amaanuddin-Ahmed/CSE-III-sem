with open('CSE-III-sem/README.md', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    "| Discrete Mathematics | `DM` | 24 Papers (PDF/Scanned) | 21 Unit Notes & Slide Decks | Dedicated Notes & PYQs Folders |",
    "| Discrete Mathematics | `DM` | 24 Papers (PDF/Scanned) | 22 Unit Notes & Slide Decks | Dedicated Notes & PYQs Folders |"
).replace(
    "| Database Management Systems | `DBMS` | 12 Past Papers | 8 Unit Notes & Revision Maps | Dedicated Notes & PYQs Folders |",
    "| Database Management Systems | `DBMS` | 12 Past Papers | 11 Unit Notes, Slides & Question Banks | Dedicated Notes & PYQs Folders |"
)

with open('CSE-III-sem/README.md', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated README.md")

with open('CSE-III-sem/docs/CONTENT_REVIEW.md', 'r', encoding='utf-8') as f:
    cr = f.read()

cr = cr.replace("88 notes", "92 notes").replace("88 unique notes", "92 unique notes").replace("88 total", "92 total")
cr = cr.replace("| DM | 207 | 260 | 471 | 9 | 17 | 21 |", "| DM | 207 | 260 | 471 | 9 | 18 | 22 |")
cr = cr.replace("| DBMS | 160 | 203 | 363 | 1 | 8 | 8 |", "| DBMS | 160 | 203 | 363 | 1 | 11 | 11 |")

with open('CSE-III-sem/docs/CONTENT_REVIEW.md', 'w', encoding='utf-8') as f:
    f.write(cr)

print("Updated docs/CONTENT_REVIEW.md")
