import json,re
P=json.load(open('.cache/papers_v2.json',encoding='utf-8'))
bad=[]
for p in P:
    for q in p['questions']:
        t=q['text'].strip()
        if re.search(r'\b(and|or|to|of|the|with|a|an|for|if|in|on|by|is|are|from|that|which|as|at|be|it|this|these|following|below)\s*[.:;,]?$',t,re.I):
            bad.append((p['subject'],p['paperName'],q['major'],q['sub'],t))
print('truncated endings',len(bad))
for b in bad[:60]:
    print(b[0],b[1][:30],f"{b[2]}.{b[3]}",'|',b[4][-110:])
# suspicious trailing digits
print('\ntrailing digits')
for p in P:
    for q in p['questions']:
        if re.search(r'\s\d{1,2}$',q['text']):
            print(p['subject'],p['paperName'][:25],q['major'],q['sub'],'|',q['text'][-90:])
