import pymupdf
d=pymupdf.open('.cache/pyq_pdfs/SE/Dec 2024.pdf')
pix=d[0].get_pixmap(dpi=110); pix.save('.cache/_se_dec24_p1.png'); print(pix.width,pix.height)
