# MGIT PYQ Hub — Google Gemini AI Integration

## 1. Roles of Gemini in MGIT PYQ Hub
1. **Document Ingestion OCR & Structuring:** Interprets scanned PDF pages, reads tabular question layouts, extracts printed `CO` marks, and outputs validated JSON.
2. **Student Explanation Assistant:** Provides step-by-step model answers, algorithm walkthroughs, and exam tips when a student clicks "Ask Gemini to explain".

---

## 2. Model & Version Specifications
- **Model:** `gemini-1.5-flash` (or `gemini-1.5-pro` for complex multi-page document OCR).
- **SDK:** Official `@google/genai` (Node.js/TypeScript).
- **API Key Management:** Keys are created at [Google AI Studio](https://aistudio.google.com/app/apikey) and stored exclusively in private server environment variables (`GEMINI_API_KEY`). The browser must not accept, persist, or send Gemini API keys.
- **Credential Exposure:** If a key is committed or otherwise exposed, revoke it immediately and replace the Vercel environment variable. Removing a key from the current source does not remove it from Git history.

---

## 3. Strict Security & Guardrails
- **Zero Client-Side Calls:** Client code must never import `@google/genai` with a browser API key. All AI requests pass through `/api/gemini/explain` or background ingestion scripts.
- **RAG & Grounding:** Prompts to Gemini must include verified syllabus excerpts, course outcome definitions, and reference steps to minimize hallucinations.
- **Quota & Cost Protection:**
  - Ingestion processes pages in batches to respect rate limits.
  - Explanation responses are cached in Supabase (`solution_guide` column) so subsequent students receive immediate answers without incurring additional API calls.
