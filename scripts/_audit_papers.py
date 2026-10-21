import json
ps = json.load(open('.cache/papers_v2.json', encoding='utf-8'))
for p in ps:
    if p['paperName'] in ('July 2025.pdf', 'Feb 2024 supple.pdf', 'Jan 2024 reg.pdf', '2025 july.pdf', 'Aug 2024.pdf', 'January 2026.pdf', 'Aug 2024 supple.pdf'):
        print(p['subject'], p['paperName'], '| sem', p['semester'], '| code', p['paperCode'], '| label', p['label'], '| pages', p['pages'], '| nq', len(p['questions']))
