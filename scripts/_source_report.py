import json, sys
from pathlib import Path
from collections import Counter
sys.path.insert(0,'scripts')
import build_bank_v2 as b
import pymupdf

manifest=json.loads(Path('.cache/drive_manifest.json').read_text(encoding='utf-8'))
for p in json.loads(Path('.cache/papers_v2.json').read_text(encoding='utf-8')):
    item=next((i for i in manifest if i.get('fileId')==p['driveFileId'] and i.get('fileName')==p['paperName']),None)
    if not item: continue
    doc=pymupdf.open(Path(item['localPath']))
    keysets={}
    for src in ['text','ocr','p4']:
        keys=set()
        for pno in p['pages']:
            if src=='text': qs=b.parse_text_page(doc[pno-1],pno)
            elif src=='ocr': qs=b.parse_ocr_page(item,pno)
            else: qs=b.parse_psm4_page(b.psm4_text(item,pno),pno)
            qs=b.normalise_subparts([dict(q,text=b.clean_question(q['text'],q.get('marks'))) for q in qs if len(b.clean_question(q['text'],q.get('marks')))>=5])
            keys |= {(q['major'],q.get('sub')) for q in qs if q.get('sub')}
        keysets[src]=keys
    allk=keysets['text']|keysets['ocr']|keysets['p4']
    def fmt(ks): return ' '.join(f'{m}{s}' for m,s in sorted(ks))
    miss=' '.join(f'{m}{s}' for m,s in sorted(allk-(keysets['ocr']|keysets['p4'])))
    extra=' '.join(f'{m}{s}' for m,s in sorted((keysets['ocr']|keysets['p4'])-keysets['text']))
    print(f"{p['subject']:5} {p['label'][:20]:20} n={len(p['questions']):2} txt={len(keysets['text']):2} ocr={len(keysets['ocr']):2} p4={len(keysets['p4']):2} text_only={miss or '-'} ocr_only={extra or '-'}")
    doc.close()
