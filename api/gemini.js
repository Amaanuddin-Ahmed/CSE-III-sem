/**
 * Vercel Serverless Function: /api/gemini
 * Server-side Gemini proxy for the MGIT PYQ Hub study assistant.
 *
 * The API key is read only from the server environment (GEMINI_API_KEY).
 * It is never sent to, or stored in, the browser bundle.
 */

const SYSTEM_INSTRUCTION = `You are a helpful, fast, and structured academic study assistant for university students studying computer science and engineering (MR-25 regulation).

Key Principles:
- Provide clear, direct, and well-structured medium-length academic explanations without unnecessary repetitive self-identifying phrases (do not repeatedly announce yourself as an AI or mention hub names).
- Organize responses with concise Markdown headings (###), bold key terms, clean bullet points, or step-by-step procedures.
- When an exam question specifies marks (e.g. 2 Marks vs 5/10 Marks):
  * For 2-mark questions: Provide concise, high-yield definitions or core formulas in 2-4 lines.
  * For 5-mark and 10-mark questions: Provide a well-structured medium-length response with formal definitions, key points, short illustrative examples or code snippets, and essential takeaways.
- For mathematical or algorithmic problems (DM, COA, DBMS): Show clear step-by-step calculations and state the final result explicitly.
- Provide clean, commented Java, C, or SQL snippets where relevant.
- Keep the tone polite, knowledgeable, direct, and encouraging like the official Gemini application.`;

function buildContents(history, query) {
  const turns = [];
  let remainingChars = 16000;
  if (Array.isArray(history)) {
    for (const turn of history.slice(-12)) {
      const rawText = typeof turn?.text === 'string' ? turn.text.trim() : '';
      const text = rawText.slice(0, remainingChars);
      if (!text) continue;
      remainingChars -= text.length;
      turns.push({
        role: turn.role === 'model' || turn.role === 'assistant' ? 'model' : 'user',
        parts: [{ text }],
      });
      if (remainingChars <= 0) break;
    }
  }
  const finalQuery = query.trim();
  if (finalQuery) {
    const last = turns[turns.length - 1];
    if (!last || last.role !== 'user' || last.parts[0].text !== finalQuery) {
      turns.push({ role: 'user', parts: [{ text: finalQuery }] });
    }
  }
  if (!turns.length) return [];
  // Gemini requires the conversation to start with a user turn.
  while (turns.length && turns[0].role !== 'user') turns.shift();
  return turns.length && turns[turns.length - 1].role === 'user' ? turns : [];
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'AI_NOT_CONFIGURED',
      message: 'The AI assistant is not configured on this deployment. Ask the owner to set GEMINI_API_KEY.',
    });
  }

  // Small best-effort rate limit: 5 requests per minute per IP to protect quota
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown')
    .split(',')[0]
    .trim();
  const now = Date.now();
  const WINDOW_MS = 60_000;
  const MAX_REQUESTS = 5;
  if (!globalThis.__mgitAiHits) globalThis.__mgitAiHits = new Map();
  const hits = (globalThis.__mgitAiHits.get(ip) || []).filter(t => now - t < WINDOW_MS);
  if (hits.length >= MAX_REQUESTS) {
    return res.status(429).json({
      error: 'AI_RATE_LIMITED',
      message: 'You have reached the limit of 5 requests per minute. You can continue using your own Gemini or ChatGPT.',
    });
  }
  hits.push(now);
  globalThis.__mgitAiHits.set(ip, hits);

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const { query: rawQuery, subject: rawSubject, history, image } = body;
  if (rawQuery != null && typeof rawQuery !== 'string') {
    return res.status(400).json({ error: 'Query must be text' });
  }
  const query = (rawQuery || '').trim();
  if (query.length > 4000) {
    return res.status(413).json({ error: 'Query is too long' });
  }
  const subject = typeof rawSubject === 'string' ? rawSubject.trim().slice(0, 100) : '';
  const contents = buildContents(history, query);
  if (!contents.length) {
    return res.status(400).json({ error: 'Missing query or history' });
  }

  // Optional photo of a question paper / notes page.
  if (image != null) {
    const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);
    if (
      typeof image !== 'object' ||
      Array.isArray(image) ||
      typeof image.base64Data !== 'string' ||
      image.base64Data.length === 0 ||
      !allowedTypes.has(image.mimeType) ||
      image.base64Data.length > 4_000_000 ||
      !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(image.base64Data)
    ) {
      return res.status(400).json({ error: 'Invalid or oversized image attachment' });
    }
    contents[contents.length - 1].parts.push({
      inlineData: { mimeType: image.mimeType, data: image.base64Data },
    });
  }

  const context = subject ? `Context: Academic subject ${subject}.\n` : '';
  const systemInstruction = `${SYSTEM_INSTRUCTION}\n\n${context}`;

  // Current, publicly available Gemini models (Gemini 3.8 Flash primary)
  const models = ['gemini-3.8-flash', 'gemini-3.8-flash-lite', 'gemini-2.5-flash', 'gemini-flash-latest'];
  let lastStatus = 502;

  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': apiKey,
            },
            body: JSON.stringify({
              contents,
              systemInstruction: { parts: [{ text: systemInstruction }] },
              generationConfig: { temperature: 0.2, maxOutputTokens: 2048, topP: 0.8 },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts
            ?.map((p) => p.text || '')
            .join('')
            .trim();
          if (text) return res.status(200).json({ success: true, text, model });
          break; // Empty/safety-blocked answer: try the next model.
        }

        lastStatus = response.status;
        // Bad API key / permission errors will not improve with another model.
        if (response.status === 401 || response.status === 403) {
          return res.status(503).json({
            error: 'AI_AUTH_ERROR',
            message: 'The AI assistant is temporarily unavailable. The owner needs to check the server key.',
          });
        }
        // Retry once on an upstream 5xx before moving to the next model.
        if (response.status >= 500 && attempt === 0) {
          await new Promise((resolve) => setTimeout(resolve, 350));
          continue;
        }
        break;
      } catch (err) {
        console.error('Gemini upstream request failed', err?.name || 'Unknown error');
        if (attempt === 0) {
          await new Promise((resolve) => setTimeout(resolve, 350));
          continue;
        }
        break;
      }
    }
  }

  const quota = lastStatus === 429;
  return res.status(quota ? 429 : 502).json({
    error: quota ? 'AI_QUOTA_EXCEEDED' : 'AI_UPSTREAM_ERROR',
    message: quota
      ? 'The AI assistant has reached its request limit for now. Please wait a minute or continue with your own Gemini / ChatGPT.'
      : 'The AI assistant could not generate an answer right now. Please try again.',
  });
}
