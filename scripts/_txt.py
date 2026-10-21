import fitz
for f in ['COA/Aug 2024 supp.pdf','COA/2025 Supple july.pdf','DM/Jan 2024 reg.pdf']:
    d=fitz.open('.cache/pyq_pdfs/'+f)
    print('='*20,f)
    print(d[0].get_text()[:1200])
