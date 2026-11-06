import urllib.request
import re
import json

def inspect_folder(folder_id, label=""):
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            html = response.read().decode('utf-8', errors='ignore')
            print(f"\n=== {label} ({folder_id}) ===")
            print(f"HTML size: {len(html)} bytes")
            
            # Find subfolders: Drive folders have mimeType application/vnd.google-apps.folder
            # In JS data chunks: [[id, name, mimeType, ...]]
            # Or regex for folders and files
            
            # Pattern 1: [["id","name",...]
            # In modern Drive HTML, items are often stored in window['_DRIVE_ivd'] or similar JSON blobs
            # Let's search for json-like structures with file/folder IDs
            
            # Find potential folder links / references
            folders = set(re.findall(r'https://drive\.google\.com/drive/folders/([A-Za-z0-9_-]{20,})', html))
            print(f"Subfolders found via URL: {len(folders)}")
            for f in folders:
                if f != folder_id:
                    print(f"  Folder: {f}")
            
            # Find all files with extensions
            files = set(re.findall(r'([^"\\\/]+\.(?:pdf|ppt|pptx|docx|txt|java|zip|rar))', html, re.IGNORECASE))
            print(f"Files found with extension ({len(files)}):")
            for name in sorted(files):
                clean_name = name.replace('&amp;', '&').replace('x22', '').replace('>', '')
                print(f"  - {clean_name}")
                
            # Also find ID mappings: search for 28-33 char base64 string followed or preceded by filename
            # e.g., ["1...", "name.pdf"]
            id_name_pairs = re.findall(r'\["([A-Za-z0-9_-]{25,45})",\[?"([^"\]]+\.(?:pdf|ppt|pptx|docx|txt|java))"', html, re.IGNORECASE)
            print(f"Matched ID-filename pairs: {len(id_name_pairs)}")
            for fid, fname in id_name_pairs:
                print(f"    PAIR: {fname} -> {fid}")

            # Also check if any folder name / IDs are in JS data
            # Typically: ["folder-id","Folder Name","application/vnd.google-apps.folder"]
            subfolder_pairs = re.findall(r'\["([A-Za-z0-9_-]{25,45})","([^"]+)","application/vnd\.google-apps\.folder"', html)
            print(f"Subfolder explicit pairs: {len(subfolder_pairs)}")
            for sfid, sfname in subfolder_pairs:
                print(f"    SUBFOLDER: {sfname} -> {sfid}")

            return subfolder_pairs

    except Exception as e:
        print(f"Failed to inspect {label} ({folder_id}): {e}")
        return []

print("Scanning Root and OOP folders...")
subfolders = inspect_folder("1v_S2vjhz1mAkgfUk1WHkxIcyEMS_RlNr", "SEM 3 ROOT")
oop_subs = inspect_folder("1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP", "OOP ROOT")
if oop_subs:
    for sfid, sfname in oop_subs:
        inspect_folder(sfid, f"OOP Subfolder: {sfname}")
