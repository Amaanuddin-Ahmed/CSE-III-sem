import urllib.request
import os

files = {
    'ES-model question paper for end exam.pdf': '1kd6Gl4qewEPM1nlDkxoeTvaRSPAy3lNF',
    'ASSIGNMENTS-2 - ES-CSE-1.pdf': '1vfNsng54TZErtdNsjerc5GU09iRvVG1u',
    'ES-model question paper-MID-1.pdf': '1VAunuOEsY3Za2l5dtB5qtUXc1qr1o2E2',
    'MR-22 IE-1-ES-PART-A - Objective Q.P -ES with answer key.pdf': '1qt6Jn9mQR0GVyH8ClZO2Q0Lbz5n-e3Ev',
    'MR-22 IE-1-ES-PART-B - Descriptive Q.P -ES-Answer key.pdf': '1yAnL_pxm6oSGEJW6dEDMHyJ-SmAphnna'
}

out_dir = 'CSE-III-sem/data/es_pyq_files'
os.makedirs(out_dir, exist_ok=True)

for name, fid in files.items():
    dest = os.path.join(out_dir, name)
    if os.path.exists(dest) and os.path.getsize(dest) > 1000:
        print(f"Already exists: {name} ({os.path.getsize(dest)} bytes)")
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
