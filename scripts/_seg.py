import pymupdf,json
p='.cache/pyq_pdfs/DBMS/Aug 2023.pdf'
d=pymupdf.open(p)
for n in range(len(d)):
    low=d[n].get_text('text').lower()
    print(n+1, 'part-a' in low.replace(' ',''), 'parta' in low.replace(' ',''), 'examination' in low, 'hall ticket' in low, len(low))
