import json, os, pymupdf

ps = json.load(open('.cache/papers_v2.json', encoding='utf-8'))
man = {e['fileId']: e for e in json.load(open('.cache/drive_manifest.json', encoding='utf-8'))}
out = '.cache/page_preview'
os.makedirs(out, exist_ok=True)
targets = [
    ('COA', 'Feb 2024 supple.pdf', 1),
    ('DM', 'Feb 2024 supple.pdf', 1),
    ('DM', 'July 2025 reg,supple.pdf', 1),
    ('DM', 'July 2025 reg,supple.pdf', 2),
    ('DM', 'Jan 2024 supp.pdf', 1),
    ('DM', 'Aug 2024.pdf', 2),
    ('COA', 'Jan 2024 reg.pdf', 2),
    ('DM', 'Jan 2025.pdf', 1),
    ('DM', 'Jan 2025.pdf', 2),
    ('DM', '25 supple.pdf', 1),
    ('DM', 'Aug 2024 supp.pdf', 1),
    ('DBMS', 'July 2025.pdf', 3),
    ('SE', 'Feb 2024 supple.pdf', 1),
]
for sub, name, page in targets:
    p = next(p for p in ps if p['subject'] == sub and p['paperName'] == name and page in p['pages'])
    entry = man.get(p['driveFileId'])
    path = entry['localPath'] if entry else None
    if not path or not os.path.exists(path):
        print('missing', sub, name); continue
    doc = pymupdf.open(path)
    pix = doc[page - 1].get_pixmap(dpi=130)
    fn = f'{out}/fix_{sub}_{name.replace(" ", "_").replace(",", "")}_p{page}.png'
    pix.save(fn)
    print('saved', fn)
    doc.close()
