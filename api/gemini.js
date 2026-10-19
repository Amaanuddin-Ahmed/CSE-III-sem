/**
 * Vercel Serverless Function: /api/gemini
 * Provides secure server-side Gemini AI responses when GEMINI_API_KEY is configured in Vercel.
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(200).json({
      fallback: true,
      error: 'NO_SERVER_KEY',
      message: 'Server GEMINI_API_KEY not configured. Use client key or built-in knowledge base.'
    });
  }

  try {
    const { query, subject } = req.body || {};
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Missing query in request body' });
    }

    const systemInstruction = `You are the MGIT PYQ Hub Study Assistant, an expert academic tutor for Mahatma Gandhi Institute of Technology (MGIT) CSE Semester III students.
The core subjects are:
1. Discrete Mathematics (DM - CS303PC)
2. Computer Organization & Architecture (COA - CS302PC)
3. Object Oriented Programming through Java (OOPJ - CS305PC)
4. Database Management Systems (DBMS - CS301PC)
5. Software Engineering (SE - CS304PC)
6. Environmental Studies (ES - MC301HS)
7. Innovation and Entrepreneurship (I&E - MC302IE)

Provide clear, accurate, high-scoring answers. Include:
- Clear standard definitions
- Mathematical formulas, derivations, or neat code snippets where relevant
- High-yield exam tips based on MGIT past question paper patterns
Keep the tone helpful, professional, and academically rigorous. Format nicely with HTML or Markdown.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [
              { text: `${systemInstruction}\n\nSubject Context: ${subject || 'General CSE Sem III'}\nStudent Question: ${query}` }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 1024
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(200).json({
        fallback: true,
        error: 'API_ERROR',
        details: errText
      });
    }

    const data = await response.json();
    const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidate) {
      return res.status(200).json({ fallback: true, error: 'NO_CONTENT' });
    }

    return res.status(200).json({ success: true, text: candidate });
  } catch (err) {
    return res.status(200).json({
      fallback: true,
      error: 'SERVER_EXCEPTION',
      message: err.message
    });
  }
}
