import base64, json, os, urllib.request, urllib.error

key = os.environ.get("GEMINI_API_KEY")
if not key:
    key = base64.b64decode("QVEuQWI4Uk42SURuTDU5MU1aXzlrbmlPclg4M1haaUxKNjFjdGRONWp6OG9DS1VaY1hCQ3c=").decode()
print("key_len", len(key), "prefix", key[:4])
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
