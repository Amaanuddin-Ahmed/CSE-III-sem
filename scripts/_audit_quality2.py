import json, re, collections

qs = json.load(open('.cache/question_bank_v2.json', encoding='utf-8'))

print('--- non-ascii suspicious ---')
for q in qs:
    if re.search('[ř™₹©éć·]', q['question']):
        print(q['subjectId'], q['questionNumber'], repr(q['question']))

print('--- no terminal punctuation ---')
for q in qs:
    t = q['question'].strip()
    if t and t[-1] not in '.?:!)':
        print(q['subjectId'], q['questionNumber'], len(t), repr(t))

print('--- very short / fragments ---')
for q in qs:
    t = q['question'].strip()
    if len(t) < 30:
        print(q['subjectId'], q['questionNumber'], len(t), repr(t))

print('--- suspicious ascii noise ---')
pat = re.compile(r'(\|\||__|[A-Za-z]\|[A-Za-z]|\s{2,}|[\{\}\[\]]\s*$|^\W)')
for q in qs:
    if pat.search(q['question']):
        print(q['subjectId'], q['questionNumber'], repr(q['question'][:180]))
