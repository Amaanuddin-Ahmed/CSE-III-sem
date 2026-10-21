import pymupdf,io,sys
from PIL import Image
import pytesseract
pytesseract.pytesseract.tesseract_cmd=r"C:\Program Files\Tesseract-OCR\tesseract.exe"
f=sys.argv[1]; pno=int(sys.argv[2]) if len(sys.argv)>2 else 1; psm=sys.argv[3] if len(sys.argv)>3 else '6'; dpi=sys.argv[4] if len(sys.argv)>4 else '400'
d=pymupdf.open(f); pix=d[pno-1].get_pixmap(dpi=int(dpi),colorspace=pymupdf.csGRAY); img=Image.open(io.BytesIO(pix.tobytes('png')))
print(pytesseract.image_to_string(img,config=f'--psm {psm}'))
