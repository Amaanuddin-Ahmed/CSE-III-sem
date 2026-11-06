import urllib.request
import os
import pymupdf

files_to_sync = [
    ("COA Unit 3 - Basic Computer Organization.pdf", "1xhpvC4T0M2F3_uN1zsav9yGsm5PQafQP", 3),
    ("COA Unit 4 - Microprogrammed Control, CPU & Arithmetic.pdf", "1WruGyxZOkj6CRDu_3hLEyfCZr124wlkY", 4),
    ("COA Unit 5 - IO & Memory Organization.pdf", "1sSN9DCdAt-nHofelFY60ORDB2MPLQaOp", 5),
    ("COA-Unitwise Question Bank with Answers..pdf", "11NPKrShqUBi80IeyziAgL2Mqvutgi2qD", [1, 2, 3, 4, 5]),
    ("COA ASSIGNMENT 2.pdf", "16ZpwA-M20ubZXURbjleGoTPTA52TmlmS", [3, 4, 5]),
    ("Input Output Organization.pdf", "18dWWsJwuNHhkeiMqM6YDTi_2LCfZ7fsN", 5),
    ("Memory_Organization_Class_PPT.pdf", "10MPj03F-qgsdpkw-YGtLk6HERmg5Se3j", 5),
    ("COA qstn bank.PDF", "1_UgGuGEsdpZsUobfc9MKONgZM2Ru2GXG", [1, 2, 3, 4, 5])
]

out_dir = ".cache/coa_new_notes"
os.makedirs(out_dir, exist_ok=True)

for fname, fid, unit in files_to_sync:
    out_path = os.path.join(out_dir, fname)
    if not os.path.exists(out_path):
        print(f"Downloading {fname} ({fid})...")
        url = f"https://drive.google.com/uc?export=download&id={fid}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as resp, open(out_path, 'wb') as f:
                f.write(resp.read())
            print(f"Downloaded {fname} successfully! Size: {os.path.getsize(out_path)} bytes")
        except Exception as e:
            print(f"Failed to download {fname}: {e}")
    else:
        print(f"Already cached: {fname}")

    # Extract text preview
    if os.path.exists(out_path) and out_path.endswith('.pdf'):
        try:
            doc = pymupdf.open(out_path)
            print(f"[{fname}] Page count: {len(doc)}")
            text = ""
            for p in doc[:5]:
                text += p.get_text() + "\n"
            print(f"[{fname}] Sample text ({len(text)} chars):\n{text[:300]}...\n")
        except Exception as e:
            print(f"[{fname}] Could not extract text: {e}")
