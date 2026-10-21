import pymupdf
d=pymupdf.open('.cache/pyq_pdfs/DM/Jan 2024 reg.pdf')
for i,p in enumerate(d):
    pix=p.get_pixmap(dpi=110)
    pix.save(f'.cache/_dm_jan24_p{i+1}.png')
    print(i+1,pix.width,pix.height)
