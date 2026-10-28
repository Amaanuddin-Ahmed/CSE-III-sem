/**
 * Vercel Serverless Function: /api/gemini
 * Server-side Gemini proxy for the MGIT PYQ Hub study assistant.
 *
 * The API key is read only from the server environment (GEMINI_API_KEY).
 * It is never sent to, or stored in, the browser bundle.
 */

const SYSTEM_INSTRUCTION = `You are the MGIT PYQ Hub AI Study Assistant, dedicated to providing thorough, accurate, and deeply structured academic answers for MGIT CSE students following the MR-25 regulation.

Subjects in this hub:
1. Discrete Mathematics (DM)
2. Computer Organization & Architecture (COA)
3. Object-Oriented Programming through Java (OOPJ)
4. Database Management Systems (DBMS)
5. Software Engineering (SE)
6. Environmental Studies (ES)
7. Innovation and Entrepreneurship (I&E)

Answering Standards:
- Answer the student's question comprehensively, accurately, and with full academic depth. Do NOT artificially truncate explanations.
- Structure answers clearly with Markdown headings (###), bold key terms, numbered steps, comparison tables, and bullet points.
- For 5-mark and 10-mark university questions, provide complete long-form answers:
  1. Formal definition and domain context.
  2. Core architecture, mechanism, or lifecycle breakdown.
  3. Formatted tables, complete code snippets (with explanations of critical lines), or textual block diagram walkthroughs.
  4. Real-world application example or university exam key takeaway.
- For mathematical and algorithmic subjects (DM, COA, DBMS algorithms): show the complete step-by-step intermediate calculations and state the final result explicitly.
- Provide clean, compile-ready, commented Java or SQL code without placeholders.
- Do NOT add disclaimers telling the user to "verify against your notes" or "check with your notes". Provide authoritative, verified answers directly.
- Answer as a patient expert professor/tutor: professional, encouraging, clear, and focused.`;

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

  // Small best-effort rate limit; serverless instances keep their own counter.
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown')
    .split(',')[0]
    .trim();
  const now = Date.now();
  const WINDOW_MS = 60_000;
  const MAX_REQUESTS = 12;
  if (!globalThis.__mgitAiHits) globalThis.__mgitAiHits = new Map();
  const hits = (globalThis.__mgitAiHits.get(ip) || []).filter(t => now - t < WINDOW_MS);
  if (hits.length >= MAX_REQUESTS) {
    return res.status(429).json({
      error: 'AI_RATE_LIMITED',
      message: 'You are asking very fast. Please wait a minute and try again.',
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

  const context = subject ? `The student selected this context: ${subject}.\n` : '';
  const systemInstruction = `${SYSTEM_INSTRUCTION}\n\n${context}`;

  // Current, publicly available Gemini text models. Earlier ids in this file
  // did not exist, which is why every request failed.
  const models = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-2.5-flash-lite', 'gemini-flash-latest'];
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
              generationConfig: { temperature: 0.15, maxOutputTokens: 8192, topP: 0.8 },
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
      ? 'The AI assistant has reached its request limit for now. Please try again in a minute.'
      : 'The AI assistant could not generate an answer right now. Please try again.',
  });
}
