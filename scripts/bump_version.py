import json

with open('CSE-III-sem/version.json', 'w', encoding='utf-8') as f:
    json.dump({
        "version": "v2026.11.06-sem-end-sync-2",
        "commit": "sem-end-upcoming-notes-complete",
        "generatedAt": "2026-11-06T18:00:00.000Z"
    }, f, indent=2)

with open('CSE-III-sem/sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()
import re
sw = re.sub(r"const CACHE_NAME = '[^']+';", "const CACHE_NAME = 'mgit-hub-v2026.11.06-sem-end-sync-2';", sw)
with open('CSE-III-sem/sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)

with open('CSE-III-sem/app.js', 'r', encoding='utf-8') as f:
    app = f.read()
app = re.sub(r"v2026\.11\.[0-9a-z-]+", "v2026.11.06-sem-end-sync-2", app, count=1)
with open('CSE-III-sem/app.js', 'w', encoding='utf-8') as f:
    f.write(app)

print("Bumped version stamp and service worker cache successfully.")
