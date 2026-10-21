import json, re, collections

qs = json.load(open('.cache/question_bank_v2.json', encoding='utf-8'))
print('total', len(qs))

chars = collections.Counter()
for q in qs:
    for ch in q['question']:
        if ord(ch) > 127:
            chars[ch] += 1
print('nonascii', chars.most_common(50))

end = collections.Counter(q['question'].strip()[-1] for q in qs if q['question'].strip())
print('last chars', end.most_common(25))

short = [q for q in qs if len(q['question']) < 18]
print('short', len(short))
for q in short[:30]:
    print(q['subjectId'], q['questionNumber'], repr(q['question']))

# duplicate exact texts within subject
dups = collections.defaultdict(list)
for q in qs:
    dups[(q['subjectId'], q['question'].lower())].append(q)
exact = {k: v for k, v in dups.items() if len(v) > 1}
print('duplicate groups', len(exact), 'questions', sum(len(v) for v in exact.values()))
for k, v in list(exact.items())[:15]:
    print(k[0], len(v), repr(k[1][:100]), [x['questionNumber'] for x in v])
