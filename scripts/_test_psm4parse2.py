import sys
sys.path.insert(0, 'scripts')
import build_bank_v2 as b
item = {"subject": "SE", "fileName": "Aug 2024.pdf"}
for pno in (1,2):
    qs = b.parse_psm4_page(b.psm4_text(item,pno), pno)
    print('--- p', pno, len(qs))
    for q in qs:
        print(q['major'], q['sub'], '|', q['text'][:150])
