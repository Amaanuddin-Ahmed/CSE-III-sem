import pymupdf
d=pymupdf.open('.cache/pyq_pdfs/DBMS/Aug 2023.pdf')
for i in [0,1,2,3]:
 pix=d[i].get_pixmap(dpi=90); pix.save(f'.cache/_dbms_aug_p{i+1}.png'); print(i+1,pix.width,pix.height)
