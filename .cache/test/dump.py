import pymupdf, re
d=pymupdf.open('.cache/pyq_pdfs/DBMS/22 supple.pdf')
p=d[0]
ws=p.get_text('words')
# group by y
from collections import defaultdict
rows=defaultdict(list)
for w in ws:
    y=round(w[1]/3)*3
    rows[y].append(w)
for y in sorted(rows):
    ws2=sorted(rows[y], key=lambda w:w[0])
    line=' '.join(w[4] for w in ws2)
    print(f"{y:4d} | {line}")
