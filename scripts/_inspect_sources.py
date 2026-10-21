import json, sys
from pathlib import Path
sys.path.insert(0, 'scripts')
import build_bank_v2 as b
import pymupdf
from collections import Counter

manifest = json.loads(Path('.cache/drive_manifest.json').read_text(encoding='utf-8'))
item = next(i for i in manifest if i.get('fileName') == 'Aug 2023.pdf' and i.get('subject') == 'OOPJ')
doc = pymupdf.open(Path(item['localPath']))
page = doc[0]
for name, qs in [('text', b.parse_text_page(page, 1)), ('ocr', b.parse_ocr_page(item, 1))]:
    print('\n===', name, len(qs))
    for q in qs:
        print(q['major'], q['sub'], repr(q['text']))
