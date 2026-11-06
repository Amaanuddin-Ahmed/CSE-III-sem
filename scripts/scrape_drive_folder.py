import urllib.request
import re
import json

def inspect_folder(folder_id):
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            print(f"Folder {folder_id} HTML size: {len(html)} bytes")
            
            # Find file titles and IDs in the raw HTML
            # Google Drive embeds items in format: ["fileId","fileName",...]
            # Or search for common extensions like .pdf, .ppt, .pptx
            titles = re.findall(r'\["([A-Za-z0-9_-]{28,})","([^"]+\.(?:pdf|ppt|pptx|docx|txt))"', html, re.IGNORECASE)
            print(f"Direct regex matches: {len(titles)}")
            for fid, name in set(titles):
                print(f"  * {name} -> {fid}")
                
            # Broader search for PDF names
            all_pdfs = set(re.findall(r'([^"\\\/]+\.(?:pdf|ppt|pptx))', html, re.IGNORECASE))
            print(f"All extension matches in HTML: {len(all_pdfs)}")
            for name in sorted(all_pdfs):
                if not name.startswith("font") and len(name) < 100:
                    print(f"  - {name}")

    except Exception as e:
        print(f"Failed to inspect folder {folder_id}: {e}")

print("=== COA ROOT FOLDER (1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX) ===")
inspect_folder("1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX")

print("\n=== COA NOTES FOLDER (1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x) ===")
inspect_folder("1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x")
