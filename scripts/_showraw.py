import sys, pathlib, json

papers = json.loads(pathlib.Path('.cache/papers_v2.json').read_text(encoding='utf-8'))
needle = sys.argv[1].lower()
subj = sys.argv[2].upper() if len(sys.argv) > 2 else None
for x in papers:
    if (needle in x['paperName'].lower()) and (not subj or x['subject'] == subj):
        print('=' * 78)
        print(x['subject'], '|', x['paperName'], '|', x.get('paperCode'), '|', x.get('semester'), '|', len(x['questions']), 'questions')
        for q in x['questions']:
            print(f"  {q['major']}.{q['sub']:3} {q['source']:6} | {q['text']}")
