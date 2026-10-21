import pymupdf, glob, os
for f in ['DM/mr 21 suppl.pdf','DM/25 supple.pdf','COA/dec 2024.pdf','DBMS/22 supple.pdf','SE/jan 2026.pdf']:
    p='.cache/pyq_pdfs/'+f
    if not os.path.exists(p): print('missing',p); continue
    d=pymupdf.open(p)
    t=d[0].get_text()
    print('='*30,f, 'pages',len(d),'chars',len(t))
    print(t[:700])
