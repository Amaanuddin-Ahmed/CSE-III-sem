import json, collections
p=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
print(len(p))
for x in p[:5]:
    print({k:v for k,v in x.items() if k not in ('questions','pages')})
print(collections.Counter(x.get('subject') for x in p))
print('--- suspicious names')
for x in p:
    print(x.get('subject'),'|',x.get('fileName') or x.get('paperName'),'|',x.get('semester'),'|',x.get('label'),'|',len(x.get('questions',[])))
