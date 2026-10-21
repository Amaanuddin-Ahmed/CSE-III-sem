import json, collections
ps = json.load(open('.cache/papers_v2.json', encoding='utf-8'))
for p in ps:
    if p['subject'] in ('SE', 'DBMS'):
        print(p['subject'], p['paperName'], p['label'], 'sem', p['semester'], 'code', p['paperCode'], 'pages', p['pages'], 'nq', len(p['questions']))
        if p['paperName'] in ('Aug 2024.pdf', 'July 2025 supple.pdf'):
            for q in p['questions']:
                print('   ', q['major'], q['sub'], q['page'], q['source'], '|', q['text'][:170])
