import sys, json
sys.path.insert(0, 'scripts')
import build_bank_v2 as b

item = {"subject": "COA", "fileName": "Feb 2024 supple.pdf"}
for pno in (1, 2):
    text = b.psm4_text(item, pno)
    qs = b.parse_psm4_page(text, pno)
    print('--- page', pno, len(qs))
    for q in qs:
        print(q['major'], q['sub'], q['source'], '|', q['text'][:200])
