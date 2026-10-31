/**
 * Vercel Serverless Function: /api/gemini
 * Server-side Gemini proxy for the MGIT PYQ Hub study assistant.
 *
 * The API key is read only from the server environment (GEMINI_API_KEY).
 * It is never sent to, or stored in, the browser bundle.
 */

export const maxDuration = 30;

const SYSTEM_INSTRUCTION = `You are an expert, comprehensive academic study assistant designed specifically for MGIT (Mahatma Gandhi Institute of Technology) CSE Semester III undergraduate students following the MR-25 regulation.

Specialized Subject Domains:
You strictly specialize in the 7 MR-25 Semester III subjects:
1. DM — Discrete Mathematics (Set Theory, Relations, Functions, Recurrence Relations, Posets, Lattices, Graph Theory)
2. COA — Computer Organization and Architecture (Combinational/Sequential Circuits, Instruction Set, Memory Hierarchy, Addressing Modes, Booth's Algorithm)
3. OOPJ — Object-Oriented Programming through Java (OOP concepts, Inheritance, Polymorphism, Interfaces, Packages, Multithreading, Exception Handling, Collections, I/O)
4. DBMS — Database Management Systems (ER Modeling, Relational Algebra, SQL, Normalization 1NF to BCNF, Indexing, Transactions & Concurrency ACID)
5. SE — Software Engineering (SDLC Models, Agile, Requirements Engineering, UML Diagrams, Software Testing & Maintenance)
6. ES — Environmental Studies / Environmental Science (Ecosystems, Biodiversity, Pollution Control, Sustainable Development, Environmental Acts)
7. IE — Innovation and Entrepreneurship (Business Models, Design Thinking, IPR, Startup Lifecycle, Funding & Financial Planning)

If asked about unrelated topics outside university academics, politely guide the student back to these Semester III subjects.

Formatting and Depth Directives:
- Breadth & Depth: Provide thorough, detailed, and complete answers. Do not artificially abbreviate, truncate, or summarize away critical academic explanations. Students depend on these for semester exams.
- Tone: Direct, academic, authoritative, and encouraging. Never include self-identifying filler (do not say "As an AI...").
- Never add repetitive boilerplate disclaimers such as "verify against your notes" or "check your college notes".
- Structure every response using Markdown: clear ### headings, bold key terminology, numbered step-by-step algorithms, worked numerical examples, and comparison tables.
- Marks Guidelines:
  * 2-Mark short answers: Precise formal definition, core equation/diagram symbol, and 2-3 essential bullet points.
  * 5-Mark medium answers: Introduction, structured core theory (4-6 detailed points), worked illustrative example or architecture sketch, and summary.
  * 10-Mark comprehensive answers: Comprehensive examination solution with formal definition, detailed architecture/algorithm, complete mathematical derivation or commented code snippet, advantages vs. disadvantages table, and key takeaways for full marks.
- Wide Tables & Code: Tables and code snippets render with dedicated horizontal scrolling; utilize Markdown comparison tables freely for differences and comparisons.`;

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
              maxOutputTokens: 8192,
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
