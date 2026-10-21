from pathlib import Path

p = Path("scripts/build_bank_v2.py")
s = p.read_text(encoding="utf-8")
lines = s.splitlines(keepends=True)
for i, line in enumerate(lines):
    if "MGIT PYQ Hub" in line and "question bank generated" in line:
        lines[i] = '        " * MGIT PYQ Hub - question bank generated from the original Drive papers.\\n"\n'
p.write_text("".join(lines), encoding="utf-8")
print("ok")
