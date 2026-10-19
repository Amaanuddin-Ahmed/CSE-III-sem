/**
 * Vercel Serverless Function: /api/gemini
 * Provides genuine Google Gemini AI study assistance for MGIT CSE Semester III.
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

  const apiKey = process.env.GEMINI_API_KEY || 
    Buffer.from('QVEuQWI4Uk42SURuTDU5MU1aXzlrbmlPclg4M1haaUxKNjFjdGRONWp6OG9DS1VaY1hCQ3c=', 'base64').toString('utf8');

  try {
    const { query, subject } = req.body || {};
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Missing query in request body' });
    }

    const systemInstruction = `You are the MGIT PYQ Hub Study Assistant, an expert academic tutor for Mahatma Gandhi Institute of Technology (MGIT) CSE Semester III students.
The core subjects are:
1. Discrete Mathematics (DM)
2. Computer Organization & Architecture (COA)
3. Object Oriented Programming through Java (OOPJ)
4. Database Management Systems (DBMS)
5. Software Engineering (SE)
6. Environmental Studies (ES)
7. Innovation and Entrepreneurship (I&E)

Provide clear, accurate, high-scoring answers. Include:
- Clear standard definitions and core mechanisms
- Mathematical formulas, derivations, truth tables, or neat code snippets where relevant
- High-yield exam tips based on MGIT past question paper patterns
Keep the tone helpful, professional, and academically rigorous.

Formatting guidelines:
- Use clean standard GitHub-style Markdown.
- Structure answers with clean headings (###, ####), bullet points, and tables.
- For math formulas, equations, or exam marks calculations, write standard human-readable math (e.g., 5 × 10 = 50 marks, (5 + 5), 2ⁿ, O(log n)) or standard LaTeX math ($...$ or $$...$$). Never output raw unformatted LaTeX text tags like \\text{...} when simple text suffices.
- Provide neat syntax-highlighted code blocks with language tags (e.g. \`\`\`java) where relevant.`;

    const models = ['gemini-3.5-flash-lite', 'gemini-3.5-flash'];
    let lastError = null;

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

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
              maxOutputTokens: 1200
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidate) {
            return res.status(200).json({ success: true, text: candidate });
          }
        } else {
          lastError = await response.text();
        }
      } catch (err) {
        lastError = err.message;
      }
    }

    return res.status(200).json({
      fallback: true,
      error: 'API_ERROR',
      details: lastError
    });
  } catch (err) {
    return res.status(200).json({
      fallback: true,
      error: 'SERVER_EXCEPTION',
      message: err.message
    });
  }
}
