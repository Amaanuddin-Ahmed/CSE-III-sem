import sys, json, os
sys.path.insert(0, 'scripts')
import build_bank_v2 as b
import pymupdf

manifest = json.load(open('.cache/drive_manifest.json', encoding='utf-8'))
item = next(e for e in manifest if e['subject']=='COA' and e['fileName']=='Feb 2024 supple.pdf')
print(item['localPath'])
doc = pymupdf.open(os.path.join('.', item['localPath']))
pages = [1,2]
# replicate p4 part
p4 = []
for pno in pages:
    p4.extend(b.parse_psm4_page(b.psm4_text(item,pno), pno))
print('raw p4')
for q in p4: print(q['major'], q['sub'], '|', q['text'][:90])
# prepare
for q in p4: q['text'] = b.clean_question(q['text'], q.get('marks'))
p4 = [q for q in p4 if len(q['text'])>=5]
p4 = b.normalise_subparts(p4)
print('prepared p4')
for q in p4: print(q['major'], q['sub'], round(b.question_quality(q['text']),1), '|', q['text'][:90])
qs = b.paper_from_pages(item, pages, {1:doc[0].get_text('text'),2:doc[1].get_text('text')}, doc)
print('final')
for q in qs: print(q['major'], q['sub'], q['source'], '|', q['text'][:90])
doc.close()
