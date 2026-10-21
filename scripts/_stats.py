import json, collections, re, random
d=json.load(open('.cache/question_bank_v2.json',encoding='utf-8'))
print('total',len(d))
print(collections.Counter(x['subjectId'] for x in d))
print(collections.Counter((x['subjectId'],x['chapter']) for x in d))
print('marks',collections.Counter(x['marks'] for x in d))
lens=[len(x['question']) for x in d]
print('len min/median/max',min(lens),sorted(lens)[len(lens)//2],max(lens))
for x in d:
    q=x['question']
    if re.search(r'(\?\s*\d|\bPage \d+ of \d+|\|\s*$|\bM\s*\d{1,2}\s*$)', q) or len(q)<25:
        pass
print('--- samples')
random.seed(3)
for s in ['DM','COA','OOPJ','DBMS','SE']:
    print('=====',s)
    xs=[x for x in d if x['subjectId']==s]
    for x in random.sample(xs,8):
        print(f"[{x['chapter']}/{x['part']}/{x['marks']}] {x['question'][:300]!r} :: {x['paperName']} p{x['pageNumber']}")
