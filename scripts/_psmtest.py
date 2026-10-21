import pymupdf, pytesseract, io
from PIL import Image
pytesseract.pytesseract.tesseract_cmd=r"C:\Program Files\Tesseract-OCR\tesseract.exe"
d=pymupdf.open('.cache/pyq_pdfs/SE/Dec 2024.pdf')
pix=d[0].get_pixmap(dpi=400,colorspace=pymupdf.csGRAY)
img=Image.open(io.BytesIO(pix.tobytes('png')))
for psm in [3,4,6,11,12]:
    t=pytesseract.image_to_string(img,config=f'--psm {psm}')
    i=t.lower().find('software myths')
    print('psm',psm,repr(t[max(0,i-80):i+60]) if i>=0 else 'NOT FOUND')
