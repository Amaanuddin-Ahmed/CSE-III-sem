import json
import os
import urllib.parse
import urllib.request

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise SystemExit("Set GEMINI_API_KEY in the environment to test Gemini.")

model = "gemini-2.5-flash"
query = urllib.parse.urlencode({"key": api_key})
url = (
    f"https://generativelanguage.googleapis.com/v1beta/models/"
    f"{model}:generateContent?{query}"
)
body = json.dumps({
    "contents": [{"role": "user", "parts": [{"text": "Reply with exactly: OK"}]}],
    "generationConfig": {"maxOutputTokens": 16},
}).encode("utf-8")
request = urllib.request.Request(
    url,
    data=body,
    headers={"Content-Type": "application/json"},
)
with urllib.request.urlopen(request, timeout=60) as response:
    result = json.load(response)

text = "".join(
    part.get("text", "")
    for part in result["candidates"][0]["content"]["parts"]
)
print(f"{model} -> {text[:100]!r}")
