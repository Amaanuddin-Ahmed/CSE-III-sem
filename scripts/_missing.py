import json, pathlib, re, sys

ROOT = pathlib.Path('.')
papers = json.loads((ROOT / '.cache/papers_v2.json').read_text(encoding='utf-8'))
only = sys.argv[1].lower() if len(sys.argv) > 1 else None

for p in papers:
    qs = p['questions']
    missing = []
    for m in range(1, 7):
        got = {q['sub'] for q in qs if q['major'] == m}
        need = 'abcdefghij' if m == 1 else 'abcd'
        for s in need:
            if s not in got:
                missing.append(f"{m}.{s}")
    if not missing:
        continue
    if only and only not in p['paperName'].lower():
        continue
    print('=' * 80)
    print(p['subject'], p['paperName'], p['paperCode'], 'pages', p['pages'], 'missing', missing)
    for pno in p['pages']:
        path = ROOT / '.cache/pyq_ocr_psm4_all' / f"{p['subject']}__{p['paperName']}__p{pno}.txt"
        if not path.exists():
            continue
        for line in path.read_text(encoding='utf-8', errors='replace').splitlines():
            if re.match(r"^\s*[0-9lI]\s*[.)]\s*[a-j]", line) or re.match(r"^\s*[a-j]\s*[.)]", line):
                print(f"  p{pno} | {line[:160]}")
