import json
m=json.load(open('.cache/drive_manifest.json',encoding='utf-8'))
for it in m:
    if it.get('pageCount',0)>2: print(it['subject'],it['fileName'],it['pageCount'],it.get('emptyPages'))
