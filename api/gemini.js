/**
 * Vercel Serverless Function: /api/gemini
 * Server-side Gemini proxy for the MGIT PYQ Hub study assistant.
 *
 * The API key is read only from the server environment (GEMINI_API_KEY).
 * It is never sent to, or stored in, the browser bundle.
 */

export const maxDuration = 30;

const SYSTEM_INSTRUCTION = `You are a thorough, exam-focused academic study assistant for university students studying computer science and engineering (MR-25 regulation).

Response principles:
- Give complete, well-developed answers. Do not artificially shorten, truncate, or summarise away detail. Prefer depth, worked examples, and exam-ready structure over brevity.
- Never announce yourself as an AI, mention hub or app names, or add repetitive self-identifying filler.
- Organise every response with Markdown: a short ### heading, bold key terms, bullet points, numbered steps, and comparison tables where useful.
- When a question specifies marks:
  * 2-mark: give a precise definition or formula plus one line of justification (3-5 lines).
  * 5-mark: give a structured answer with a definition, 4-6 explained points, a small example, and a conclusion.
  * 10-mark or long answer: give a comprehensive answer with an introduction, detailed body (definitions, architecture/diagram description, algorithm or derivation, worked example), advantages/limitations, and a conclusion. Aim for full exam length, not a summary.
- If marks are not specified, default to a comprehensive explanation covering the concept, how it works, a worked example, and common exam pitfalls.
- For mathematical or algorithmic problems (DM, COA, DBMS): show every step, state assumptions, and state the final result explicitly.
- For code, provide complete, runnable, commented Java, C, or SQL snippets and mention the expected output.
- Use tables for comparisons and other wide content; horizontal scrolling is supported, so do not avoid them.
- If the user asks for more detail or a longer answer, expand further instead of repeating the same points.
- Keep the tone polite, knowledgeable, direct, and encouraging like the official Gemini application.`;

function buildContents(history, query) {
  const turns = [];
  let remainingChars = 24000;
  if (Array.isArray(history)) {
    for (const turn of history.slice(-20)) {
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

  // Fast, high-availability Gemini models verified for this API key.
  // The first model gets the longest budget because longer answers take longer
  // to generate; fallbacks use shorter budgets to stay within maxDuration.
  const models = [
    { name: 'gemini-3.5-flash', timeoutMs: 11000 },
    { name: 'gemini-3.5-flash-lite', timeoutMs: 6000 },
    { name: 'gemini-3.6-flash', timeoutMs: 5000 },
    { name: 'gemini-3.8-flash', timeoutMs: 4000 }
  ];
  let lastStatus = 502;

  for (const { name: model, timeoutMs } of models) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify({
            contents,
            systemInstruction: { parts: [{ text: systemInstruction }] },
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 4096,
              topP: 0.9
            },
          }),
          signal: controller.signal
        }
      );
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts
          ?.map((p) => p.text || '')
          .join('')
          .trim();
        if (text) return res.status(200).json({ success: true, text, model });
        continue; // Empty/safety-blocked answer: try the next model.
      }

      lastStatus = response.status;
      // Bad API key / permission errors will not improve with another model.
      if (response.status === 401 || response.status === 403) {
        return res.status(503).json({
          error: 'AI_AUTH_ERROR',
          message: 'The AI assistant is temporarily unavailable. The owner needs to check the server key.',
        });
      }
      // If 404, 429, or 503 (model busy/unavailable), cascade to next model
      continue;
    } catch (err) {
      clearTimeout(timeoutId);
      console.error(`Gemini model ${model} failed:`, err?.name || err?.message || 'Unknown error');
      continue;
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
