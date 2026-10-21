import json, collections
d=json.load(open('.cache/question_bank_v2.json',encoding='utf-8'))
print(type(d), len(d))
print(json.dumps(d[0],indent=2,ensure_ascii=False)[:1500])
