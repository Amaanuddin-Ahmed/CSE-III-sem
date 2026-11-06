import urllib.request
import re

folder_id = "1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX"
url = f"https://drive.google.com/drive/folders/{folder_id}"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

with urllib.request.urlopen(req) as response:
    html = response.read().decode('utf-8', errors='ignore')

pos = html.find("COA qstn bank.PDF")
if pos != -1:
    chunk = html[max(0, pos-600):min(len(html), pos+600)]
    ids = [i for i in re.findall(r'["\']([A-Za-z0-9_-]{28,35})["\']', chunk) if i != folder_id]
    print("COA qstn bank.PDF ID:", ids)
else:
    print("Not found in root folder HTML")
