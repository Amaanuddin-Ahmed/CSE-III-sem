import urllib.request
import re
import json

folder_id = "1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x"
url = f"https://drive.google.com/drive/folders/{folder_id}"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

with urllib.request.urlopen(req) as response:
    html = response.read().decode('utf-8', errors='ignore')

# Google drive page contains JSON blobs with file metadata.
# Let's search for patterns where filename and ID are close together:
target_files = [
    "COA Unit 3 - Basic Computer Organization.pdf",
    "COA Unit 4 - Microprogrammed Control, CPU",
    "COA Unit 5 - IO",
    "COA-Unitwise Question Bank with Answers",
    "COA ASSIGNMENT 2.pdf",
    "COA Complete questions.PDF",
    "COA.pdf",
    "Input Output Organization.pdf",
    "Memory_Organization_Class_PPT.pdf",
    "COA qstn bank.PDF"
]

results = {}

for tf in target_files:
    pos = html.find(tf)
    if pos != -1:
        # Search surrounding 600 characters for a 33-char Google Drive ID
        chunk = html[max(0, pos-600):min(len(html), pos+600)]
        ids = re.findall(r'["\']([A-Za-z0-9_-]{28,35})["\']', chunk)
        # Filter out folder_id
        ids = [i for i in ids if i != folder_id and not i.startswith("drive")]
        results[tf] = ids
    else:
        results[tf] = "Not found"

print(json.dumps(results, indent=2))
