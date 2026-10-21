/**
 * Vercel Serverless Function: /api/gemini
 * Server-side Gemini proxy for the MGIT PYQ Hub study assistant.
 *
 * The API key is read only from the server environment (GEMINI_API_KEY).
 * It is never sent to, or stored in, the browser bundle.
 */

const SYSTEM_INSTRUCTION = `You are the MGIT PYQ Hub study assistant: a careful, accurate academic tutor for B.Tech CSE students at Mahatma Gandhi Institute of Technology (Autonomous), Hyderabad.

Subjects in this hub:
1. Discrete Mathematics (DM)
2. Computer Organization & Architecture (COA)
3. Object-Oriented Programming through Java (OOPJ)
4. Database Management Systems (DBMS)
5. Software Engineering (SE)

How MGIT end-semester papers in this hub are actually structured:
- Part A is one compulsory question (Q1) with ten short sub-parts, 1.a to 1.j. Each sub-part is usually 1 or 2 marks. The ten sub-parts normally cover all five units (two per unit).
- Part B has Q2 to Q6, one question per unit. Each numbered question is worth 10 marks and normally contains an internal choice: either (a and b) OR (c and d), usually 5 marks each. Some papers use a single 10-mark sub-part instead.
- Do not claim that Part A always has five questions, and do not invent a marking scheme. If the exact marks are provided with the question, follow them.

Answering rules:
- Answer the exact question asked. Do not change the question or answer a different one.
- Match the depth to the marks: a 1–2 mark answer should be a few precise sentences; a 5 mark answer should have a short introduction, 3–6 key points, and a conclusion or example; a 10 mark answer should be a structured long answer with headings, diagrams described in words, and a worked example where relevant.
- For mathematics and numerical subjects, show the method and the intermediate steps, then state the final answer clearly. Use LaTeX only where it improves readability.
- For programming questions, give correct, compilable Java/SQL and explain the key lines.
- For diagram questions, describe the diagram completely (components, connections, flow) so a student can draw it; do not pretend to render an image.
- If the question is ambiguous or appears to contain an OCR error, state the most likely reading, answer that, and note the ambiguity briefly.
- Never invent a formula, a definition, a paper reference, or a statistic. If you are not certain, say so.
- Answer as a tutor, not as a chatbot: no meta-commentary, no mention of prompts or policies.
- Use clean Markdown: short headings, bold key terms, numbered steps, tables where useful.`;

function buildContents(history, query, subject) {
  const turns = [];
  if (Array.isArray(history)) {
    for (const turn of history.slice(-12)) {
      const text = typeof turn?.text === 'string' ? turn.text.trim() : '';
      if (!text) continue;
      turns.push({
        role: turn.role === 'model' || turn.role === 'assistant' ? 'model' : 'user',
        parts: [{ text }],
      });
    }
  }
  const finalQuery = (query || '').trim();
  if (finalQuery) {
    const last = turns[turns.length - 1];
    if (!last || last.role !== 'user' || last.parts[0].text !== finalQuery) {
      turns.push({ role: 'user', parts: [{ text: finalQuery }] });
    }
  }
  if (!turns.length) return [];
  // Gemini requires the conversation to start with a user turn.
  while (turns.length && turns[0].role !== 'user') turns.shift();
  return turns;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'AI_NOT_CONFIGURED',
      message: 'The AI assistant is not configured on this deployment.',
    });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const { query, subject, history, image } = body || {};
  const contents = buildContents(history, query, subject || '');
  if (!contents.length) {
    return res.status(400).json({ error: 'Missing query or history' });
  }

  // Optional photo of a question paper / notes page.
  if (image && typeof image.base64Data === 'string' && /^image\//.test(image.mimeType || '')) {
    if (image.base64Data.length < 6_000_000) {
      const last = contents[contents.length - 1];
      last.parts.push({ inlineData: { mimeType: image.mimeType, data: image.base64Data } });
    }
  }

  const context = `Subject context: ${subject || 'General CSE Semester III'}.\n`;
  contents[0].parts.unshift({ text: `${SYSTEM_INSTRUCTION}\n\n${context}` });

  const models = ['gemini-3.5-flash', 'gemini-flash-latest'];
  let lastError = null;
  let lastStatus = 502;

  for (const model of models) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            generationConfig: { temperature: 0.25, maxOutputTokens: 4096, topP: 0.9 },
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
        lastError = 'Empty response from model';
        continue;
      }

      lastStatus = response.status;
      lastError = await response.text();
      // Bad API key / permission errors will not improve with another model.
      if (response.status === 400 && /API key not valid/i.test(lastError)) break;
      if (response.status === 401 || response.status === 403) break;
    } catch (err) {
      lastError = err?.message || String(err);
    }
  }

  const quota = lastStatus === 429;
  return res.status(quota ? 429 : 502).json({
    error: quota ? 'AI_QUOTA_EXCEEDED' : 'AI_UPSTREAM_ERROR',
    message: quota
      ? 'The AI assistant has reached its request limit for now. Please try again later.'
      : 'The AI assistant could not generate an answer right now. Please try again.',
  });
}
