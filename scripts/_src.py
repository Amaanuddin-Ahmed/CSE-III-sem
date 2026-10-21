import sys, json, pathlib, re, pymupdf
sys.path.insert(0, 'scripts')
import build_bank_v2 as B

manifest = json.loads(pathlib.Path('.cache/drive_manifest.json').read_text(encoding='utf-8'))
papers = json.loads(pathlib.Path('.cache/papers_v2.json').read_text(encoding='utf-8'))

name = sys.argv[1]
subj = sys.argv[2]
target = sys.argv[3]  # e.g. 2.d

item = next(x for x in manifest if x['subject'] == subj and x['fileName'] == name)
paper = next(p for p in papers if p['subject'] == subj and p['paperName'] == name)
doc = pymupdf.open(pathlib.Path(item['localPath']))
print('FILE', name, 'pages', paper['pages'])
for pno in paper['pages']:
    print('#' * 20, 'PAGE', pno, 'TEXT LAYER')
    print(doc[pno - 1].get_text('text'))
    print('#' * 20, 'PAGE', pno, 'PSM4')
    print(B.psm4_text(item, pno))
