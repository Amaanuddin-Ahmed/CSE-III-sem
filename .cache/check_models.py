import json
import os
import urllib.parse
import urllib.request

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise SystemExit("Set GEMINI_API_KEY in the environment to list Gemini models.")

query = urllib.parse.urlencode({"key": api_key})
url = f"https://generativelanguage.googleapis.com/v1beta/models?{query}"
with urllib.request.urlopen(url, timeout=30) as response:
    data = json.load(response)

models = [
    model["name"].split("/")[-1]
    for model in data.get("models", [])
    if "generateContent" in model.get("supportedGenerationMethods", [])
]
print(f"Models available for content generation: {len(models)}")
for model in models:
    if "flash" in model.lower():
        print(model)
