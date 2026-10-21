import json, pathlib, re, collections

bank = json.loads(pathlib.Path('.cache/question_bank_v2.json').read_text(encoding='utf-8'))
tails = collections.Counter()
for q in bank:
    t = q['question'].strip()
    words = t.split()
    if not words:
        continue
    tails[" ".join(words[-2:]).lower()] += 1
for tail, n in tails.most_common(60):
    print(n, repr(tail))
print('---- suspicious endings')
pat = re.compile(r"(?:\b[OQ]\.?\s*No\b|\bM\s*L\b|\bCO\s*PO\b|\bP\.?T\.?O|\bPage\s*\d|\bBloom\b|\bMarks\b|\|\s*$)")
for q in bank:
    if pat.search(q['question']):
        print(q['subjectId'], q['paperName'], '|', q['question'][:160])
