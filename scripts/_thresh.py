import sys, pathlib, pymupdf, pytesseract
from PIL import Image, ImageOps
import io

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

pdf = sys.argv[1]
pno = int(sys.argv[2])
dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 400
thr = int(sys.argv[4]) if len(sys.argv) > 4 else 110

doc = pymupdf.open(pdf)
pix = doc[pno - 1].get_pixmap(dpi=dpi)
img = Image.open(io.BytesIO(pix.tobytes("png"))).convert("L")
dark = img.point(lambda v: 0 if v < thr else 255)
print(pytesseract.image_to_string(dark, config="--psm 4"))
