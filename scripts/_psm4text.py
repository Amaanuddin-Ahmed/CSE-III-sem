import pymupdf, pytesseract, io
from PIL import Image
pytesseract.pytesseract.tesseract_cmd=r"C:\Program Files\Tesseract-OCR\tesseract.exe"
d=pymupdf.open('.cache/pyq_pdfs/SE/Dec 2024.pdf')
pix=d[0].get_pixmap(dpi=400,colorspace=pymupdf.csGRAY)
img=Image.open(io.BytesIO(pix.tobytes('png')))
t=pytesseract.image_to_string(img,config='--psm 4')
print(t[:3500])
