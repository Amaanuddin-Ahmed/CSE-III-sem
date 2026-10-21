import pymupdf
p='.cache/pyq_pdfs/DBMS/Aug 2023.pdf'
d=pymupdf.open(p)
print('pages',len(d))
for n in range(len(d)):
    a=d[n].get_text()
    b=d[n].get_text('text')
    c=d[n].get_text('blocks')
    print(n+1, len(a), len(b), len(c), repr(a[:60]))
