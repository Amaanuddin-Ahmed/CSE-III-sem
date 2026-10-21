import pymupdf, subprocess, sys
from pathlib import Path
pdf=Path('.cache/pyq_pdfs/DM/Jan 2024 supp.pdf')
doc=pymupdf.open(pdf)
for pno in range(len(doc)):
    page=doc[pno]
    pix=page.get_pixmap(dpi=400, colorspace=pymupdf.csGRAY)
    img=Path(f'.cache/test/dmjan24_p{pno+1}.png')
    pix.save(img)
    for psm in (3,4,6):
        out=Path(f'.cache/test/dmjan24_p{pno+1}_psm{psm}.txt')
        subprocess.run([r'C:\Program Files\Tesseract-OCR\tesseract.exe',str(img),str(out.with_suffix('')),'--psm',str(psm),'-l','eng'],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
        print(out, out.stat().st_size)
