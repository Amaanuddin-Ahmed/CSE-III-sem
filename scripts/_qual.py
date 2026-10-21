import json,sys,re,collections
sys.path.insert(0,'scripts')
from build_bank_v2 import question_quality
d=json.load(open('.cache/question_bank_v2.json',encoding='utf-8'))
for q in sorted(d,key=lambda x:question_quality(x['question']))[:80]:
    print(round(question_quality(q['question']),1), q['subjectId'], q['chapter'], repr(q['question'][:170]))
print('dist',collections.Counter(int(question_quality(x['question'])//5*5) for x in d))
