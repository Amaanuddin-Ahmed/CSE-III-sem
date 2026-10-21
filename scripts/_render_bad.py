import json, pathlib, pymupdf

manifest = json.loads(pathlib.Path('.cache/drive_manifest.json').read_text(encoding='utf-8'))
papers = json.loads(pathlib.Path('.cache/papers_v2.json').read_text(encoding='utf-8'))
out = pathlib.Path('.cache/_render')
out.mkdir(exist_ok=True)

targets = [
    ('DM', 'Jan 2025.pdf', [1, 2]),
    ('DM', 'Dec 2024.pdf', [1, 2]),
    ('DM', 'march 2023.pdf', [2]),
    ('DM', 'Feb 2024 supple.pdf', [1]),
    ('DM', 'Aug 2023.pdf', [1, 2]),
    ('DM', 'Jan 2025 supple.pdf', [2]),
    ('DM', 'July 2025 supple.pdf', [1]),
    ('DM', 'January 2026.pdf', [1]),
]
for subj, name, pages in targets:
    item = next(x for x in manifest if x['subject'] == subj and x['fileName'] == name)
    doc = pymupdf.open(pathlib.Path(item['localPath']))
    for pno in pages:
        if pno > len(doc):
            continue
        pix = doc[pno - 1].get_pixmap(dpi=200)
        path = out / f"{subj}_{name.replace(' ', '_').replace(',', '')}_p{pno}.png"
        pix.save(path)
        print(path)
    doc.close()
