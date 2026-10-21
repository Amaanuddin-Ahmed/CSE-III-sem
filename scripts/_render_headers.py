import json, os, pymupdf

ps = json.load(open('.cache/papers_v2.json', encoding='utf-8'))
man = {e['fileId']: e for e in json.load(open('.cache/drive_manifest.json', encoding='utf-8'))}
out = '.cache/page_preview'
os.makedirs(out, exist_ok=True)
targets = [
    ('DBMS', 'July 2025.pdf', 1),
    ('DBMS', 'July 2025.pdf', 3),
    ('SE', 'Aug 2024.pdf', 1),
    ('DM', 'Feb 2024 supple.pdf', 1),
    ('OOPJ', 'January 2026.pdf', 1),
    ('COA', 'Aug 2024 supple.pdf', 1),
    ('SE', '2025 july.pdf', 1),
]
for sub, name, page in targets:
    p = next(p for p in ps if p['subject'] == sub and p['paperName'] == name and page in p['pages'])
    entry = man.get(p['driveFileId'])
    path = entry['localPath'] if entry else None
    print(sub, name, page, '->', path)
    if not path or not os.path.exists(path):
        print('  missing'); continue
    doc = pymupdf.open(path)
    pix = doc[page - 1].get_pixmap(dpi=110)
    fn = f'{out}/{sub}_{name.replace(" ", "_").replace(",", "")}_p{page}.png'
    pix.save(fn)
    print('  saved', fn, pix.width, pix.height)
    doc.close()
