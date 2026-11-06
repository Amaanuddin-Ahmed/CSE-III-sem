import urllib.request
import re
import json

folders = {
    'ES_PYQs': '1FCUxrLxzXfxVwUAoVCZyERUemeR46S15',
    'ES_Root': '1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0',
    'ES_Notes': '12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A'
}

for name, fid in folders.items():
    url = f"https://drive.google.com/drive/folders/{fid}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            filenames = set(re.findall(r'([^"\\\/]+\.(?:pdf|ppt|pptx|docx|txt))', html, re.IGNORECASE))
            filenames = {fn for fn in filenames if not fn.startswith("font") and len(fn) < 100}
            print(f"\n=== {name} ({fid}) === Total: {len(filenames)} files")
            for fn in sorted(filenames):
                pos = html.find(fn)
                chunk = html[max(0, pos-600):min(len(html), pos+600)]
                ids = re.findall(r'["\']([A-Za-z0-9_-]{28,35})["\']', chunk)
                ids = [i for i in ids if i != fid and not i.startswith("drive") and not i.startswith("application")]
                found_id = ids[0] if ids else None
                print(f"  * {fn} -> ID: {found_id}")
    except Exception as e:
        print(f"Error fetching {name}: {e}")
