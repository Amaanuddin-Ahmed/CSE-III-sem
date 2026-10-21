import json, re, hashlib, collections
ps = json.load(open('.cache/papers_v2.json', encoding='utf-8'))

def fp(p):
    body = " ".join(sorted(re.sub(r"[^a-z0-9]", "", q["text"].lower()) for q in p["questions"]))
    return hashlib.sha1(body.encode()).hexdigest()

seen = {}
for p in ps:
    key = (p['subject'], p.get('paperCode')) if p.get('paperCode') else (p['subject'], fp(p))
    if key in seen:
        print('DUP:', p['subject'], p['paperName'], p['label'], '  ==  ', seen[key]['paperName'], seen[key]['label'], '| key', key)
    else:
        seen[key] = p
print('unique', len(seen), 'of', len(ps))
