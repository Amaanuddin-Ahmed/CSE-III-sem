import urllib.request
import re
import json

all_folders = {
    'DM_root': '1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU',
    'DM_notes': '1XXvoFAhADv1nh8oteiHOTj1mZ2f72fIM',
    'COA_root': '1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX',
    'COA_notes': '1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x',
    'OOPJ_root': '1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP',
    'OOPJ_notes': '1V066YGywMdVNPIX1JJ1UEvehlS25C9qx',
    'DBMS_root': '1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc',
    'DBMS_notes': '1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ',
    'SE_root': '16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX',
    'SE_notes': '1kovfVmnjEm5_lF_OzAJXGB04netXHIMT',
    'ES_root': '1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0',
    'ES_notes': '12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A',
    'IE_root': '1WHMeVXQY0TlxZm6F4HX0YQisRSniPdUi',
    'IE_notes': '1Ac3gEX38khTx85EGXGqoXxUPjwkJKcOx'
}

with open('CSE-III-sem/pyq-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

drive_ids_in_data = set(re.findall(r'"driveFileId":\s*"([^"]+)"', text))
print(f"Total driveFileIds currently in pyq-data.js: {len(drive_ids_in_data)}")

for name, fid in all_folders.items():
    url = f"https://drive.google.com/drive/folders/{fid}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            filenames = set(re.findall(r'([^"\\\/]+\.(?:pdf|ppt|pptx|docx))', html, re.IGNORECASE))
            filenames = {fn for fn in filenames if not fn.startswith("font") and len(fn) < 100}
            print(f"\n=== {name} ({fid}) === ({len(filenames)} files)")
            for fn in sorted(filenames):
                pos = html.find(fn)
                chunk = html[max(0, pos-600):min(len(html), pos+600)]
                ids = re.findall(r'["\']([A-Za-z0-9_-]{28,35})["\']', chunk)
                ids = [i for i in ids if i != fid and not i.startswith("drive") and not i.startswith("application")]
                found_id = ids[0] if ids else None
                in_notes = (found_id and found_id in drive_ids_in_data)
                if not in_notes and found_id:
                    print(f"  * [NEW CANDIDATE] {fn} -> ID: {found_id}")
    except Exception as e:
        print(f"Error fetching {name}: {e}")
