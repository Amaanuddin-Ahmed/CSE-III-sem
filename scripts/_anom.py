import json,re,collections
d=json.load(open('.cache/question_bank_v2.json',encoding='utf-8'))
pats={
 'trailing_digit':r'\s\d{1,2}$',
 'page':r'Page\s*\d+\s*of\s*\d+',
 'markscols':r'\b(?:M|L|CO|PO)\b',
 'qno_in_text':r'^\s*(?:Q\.?\s*)?\d+\s*[.)]\s*[a-j]?\s*[.)]?',
 'trunc':r'[a-z]{1,3}$',
 'weird':r'[^\x00-\x7F\u2013\u2014\u2018\u2019\u201c\u201d\u20b9\u00d7\u00f7\u2264\u2265\u2260\u2211\u222b\u221a\u221e\u03b1-\u03c9\u0391-\u03a9]',
 'double_space':r'\s{2,}',
}
for name,pat in pats.items():
    xs=[x for x in d if re.search(pat,x['question'])]
    print(name,len(xs))
    for x in xs[:6]: print('   ',repr(x['question'][-160:]))
print('--- long >400')
for x in sorted(d,key=lambda x:-len(x['question']))[:12]:
    print(len(x['question']),x['subjectId'],repr(x['question'][:80]),'...',repr(x['question'][-120:]))
