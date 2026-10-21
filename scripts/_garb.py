import json,re,collections
d=json.load(open('.cache/question_bank_v2.json',encoding='utf-8'))
def bad(q):
 t=q['question']
 score=0
 if re.match(r'^[a-z]',t): score+=2
 if re.search(r'[\u0400-\u04FF\u00C0-\u024F]',t): score+=3
 if re.search(r'[¢©«»°\\]',t): score+=2
 if len(re.findall(r'[;]',t))>2: score+=1
 if re.search(r'\b(?:tbe|teh|adn|wil|ot|sf)\b',t,re.I): score+=1
 if len(t)>60 and len(re.findall(r'\b[a-zA-Z]\b',t))>6: score+=1
 if re.search(r'\?\s*\d|\d\s*\?$',t): score+=1
 return score
xs=[q for q in d if bad(q)>=2]
print('bad count',len(xs))
for q in xs[:100]: print(bad(q),q['subjectId'],q['chapter'],repr(q['question'][:180]))
