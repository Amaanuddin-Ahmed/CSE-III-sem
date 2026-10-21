import sys, pathlib, json, collections

bank = json.loads(pathlib.Path('.cache/question_bank_v2.json').read_text(encoding='utf-8'))
needle = sys.argv[1].lower()
subj_filter = sys.argv[2].upper() if len(sys.argv) > 2 else None

by_paper = collections.OrderedDict()
for q in bank:
    key = (q['subjectId'], q['paperName'], q.get('semester'))
    by_paper.setdefault(key, []).append(q)

for (subj, name, sem), qs in by_paper.items():
    if needle in name.lower() or needle == subj.lower():
        if subj_filter and subj != subj_filter:
            continue
        print('=' * 78)
        print(f"{subj} | {name} | sem {sem} | {len(qs)} questions")
        for q in sorted(qs, key=lambda x: (x.get('chapter') or 0, x['questionNumber'])):
            print(f"  {q['questionNumber']:7} ch{q['chapter']} {q.get('marks')}m [{q.get('part')}] {q['question']}")
