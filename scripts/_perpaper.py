import json,re,collections
p=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
for x in sorted(p,key=lambda x:len(x['questions'])):
    qs=x['questions']; src=collections.Counter(q.get('source') for q in qs)
    bad=sum(1 for q in qs if re.search(r'[^\x00-\x7F]',q['text']) or re.search(r'\s\d{1,2}$',q['text']) or len(q['text'])<25)
    print(f"{len(qs):2d} {x['subject']:4s} {x['paperName'][:36]:36s} p{x['pages']} {dict(src)} bad={bad}")
