import sys, pathlib, json, pymupdf
sys.path.insert(0, 'scripts')
import build_bank_v2 as B

m = json.loads(pathlib.Path('.cache/drive_manifest.json').read_text(encoding='utf-8'))
it = [x for x in m if x.get('fileName') == 'Jan 2024 supp.pdf' and x['subject'] == 'DM'][0]
d = pymupdf.open(pathlib.Path(it['localPath']))

original = B.clean_question


def traced(text, marks=None):
    out = original(text, marks)
    if out.strip() == 'Find':
        import traceback
        print('BECAME FIND from:', repr(text)[:300])
        traceback.print_stack(limit=6)
    return out


B.clean_question = traced
qs = B.paper_from_pages(it, [1, 2], {}, d, '')
B.clean_question = original
for q in qs:
    if q['major'] == 3:
        print(q['sub'], q['source'], '|', repr(q['text']))
