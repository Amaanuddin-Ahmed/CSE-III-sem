import json
m=json.load(open('.cache/drive_manifest.json',encoding='utf-8'))
print(type(m))
if isinstance(m,dict): print(m.keys())
print(json.dumps(m,indent=1,ensure_ascii=False)[:3000])
