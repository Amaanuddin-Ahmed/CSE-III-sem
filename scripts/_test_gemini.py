import json, os, urllib.request, urllib.error

key = os.environ.get("GEMINI_API_KEY", "").strip()
if not key:
    raise SystemExit("Set GEMINI_API_KEY in the environment before running this test.")
body = json.dumps({"contents":[{"role":"user","parts":[{"text":"Reply with the single word OK."}]}]}).encode()
for model in ["gemini-2.5-flash", "gemini-3.5-flash", "gemini-flash-latest"]:
    req = urllib.request.Request(
        f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}",
        data=body, headers={"Content-Type":"application/json"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            d = json.load(r)
            print(model, r.status, d["candidates"][0]["content"]["parts"][0]["text"])
    except urllib.error.HTTPError as e:
        print(model, e.code, e.read()[:300])
    except Exception as e:
        print(model, type(e).__name__, e)
