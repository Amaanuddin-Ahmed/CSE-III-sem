import json,re,random,collections
P=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
Q=json.load(open('.cache/question_bank_v2.json',encoding='utf-8'))
print('papers',len(P),'questions',len(Q))
print('\n-- paper labels/counts --')
for p in P:
    if p['subject'] in ('DM','DBMS'):
        print(f"{p['subject']:5s} {p['paperName'][:38]:38s} {p['label'][:28]:28s} sem={p['semester']} q={len(p['questions'])}")
print('\n-- sample questions --')
random.seed(3)
for q in random.sample(Q,35):
    print(f"{q['subjectId']:5s} ch{q['chapter']} {q['part']} m{q['marks']} f{q['frequency']} | {q['question'][:190]}")
print('\n-- frequent --')
for q in sorted(Q,key=lambda x:-x['frequency'])[:20]:
    print(q['frequency'],q['subjectId'],q['chapter'],'|',q['question'][:120])
