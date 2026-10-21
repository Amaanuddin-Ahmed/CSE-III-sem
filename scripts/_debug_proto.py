import json, sys
from pathlib import Path
sys.path.insert(0,'scripts')
import _prototype_bank as pb
p=next(x for x in pb.PAPERS if x['subject']=='OOPJ' and x['paperName']=='Aug 2023.pdf')
# reproduce
item=next(i for i in pb.MANIFEST if i.get('fileId')==p['driveFileId'])
doc=pb.pymupdf.open(Path(item['localPath']))
qs=pb.b.parse_ocr_page(item,1)
for q in qs:
    print(q['major'],repr(q.get('sub')),repr(pb.b.clean_question(q['text'])))
print('prepared')
prep=[]
for q in qs:
    t=pb.b.clean_question(q['text'],q.get('marks'))
    if len(t)<5: continue
    q=dict(q); q['text']=t; prep.append(q)
prep=pb.b.normalise_subparts(prep)
for q in prep: print(q['major'],repr(q.get('sub')),repr(q['text']))
