import urllib.request
import os

notes = {
    'Unit 1.pdf': '1Fy6lmAAa5frGzeL30Fgg9gjcl009aV6K',
    'Unit 2.pdf': '1LTntxlX3QbGQetwnaBPVA9KExbNMEqEV',
    'Unit-3.pdf': '1SZfLggJ2rLVaRG6poB80BszbfpypBZna',
    'Unit-4.pdf': '1Og6W5C_YuUGklPjeNZRq_yNwFDaYAHkG',
    'Unit-5 ES notes.pdf': '11eCeXOn-sCT0maQlUL824fU2h3CUUB1v'
}

out_dir = 'CSE-III-sem/data/es_notes_files'
os.makedirs(out_dir, exist_ok=True)

for name, fid in notes.items():
    dest = os.path.join(out_dir, name)
    if os.path.exists(dest) and os.path.getsize(dest) > 1000:
        print(f"Already exists: {name}")
        continue
    url = f"https://drive.usercontent.google.com/download?id={fid}&export=download"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
            with open(dest, 'wb') as f:
                f.write(data)
            print(f"Downloaded {name}: {len(data)} bytes")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
