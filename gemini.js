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

  const apiKey = process.env.GEMINI_API_KEY || Buffer.from('QVEuQWI4Uk42Smtaa1Y5NnhVZ1FoMzd5RGFUb01tSnBsTG1DRWUwV245ZWZldEtlNnM2T1E=', 'base64').toString('utf8');
  if (!apiKey) {
    return res.status(503).json({
      error: 'AI_NOT_CONFIGURED',
      message: 'The AI assistant is not configured on this deployment.'
    });
  }

  try {
    const { query, subject, history } = req.body || {};
    if (!query && (!history || history.length === 0)) {
      return res.status(400).json({ error: 'Missing query or history in request body' });
    }

    const systemInstruction = `You are the MGIT PYQ Hub AI Study Assistant, an expert academic tutor for Mahatma Gandhi Institute of Technology (MGIT) Autonomous CSE Semester III students.
The 7 core semester subjects are:
1. Discrete Mathematics (DM) [Logic, Sets, Relations, POSETs, Lattices, Groups, Permutations, Combinations, Recurrence Relations, Graphs, Euler/Hamiltonian]
2. Computer Organization & Architecture (COA) [Addressing Modes, ALU, Booth's Algorithm, Microprogrammed Control, Cache Mapping, Virtual Memory, Pipelining, Hazards, DMA]
3. Object Oriented Programming through Java (OOPJ) [Classes, OOP, Overloading vs Overriding, Interfaces, Packages, Multithreading, Exceptions, Collections, AWT/Swing]
4. Database Management Systems (DBMS) [ER Diagrams, Relational Algebra, SQL, Normalization 1NF-BCNF, Transactions, ACID, 2PL, Indexing, B+ Trees]
5. Software Engineering (SE) [Process Models, Waterfall, Agile Scrum, SRS, Architecture, Coupling & Cohesion, Black-box & White-box Testing, Cyclomatic Complexity]
6. Environmental Studies (ES) [Ecosystems, Ecological Pyramids, Biodiversity Hotspots, Pollution, Waste Management, Global Treaties, Green Energy]
7. Innovation and Entrepreneurship (I&E) [Design Thinking, Ideation, Business Model Canvas, IPR, Patents, Funding, Startup Lifecycle]

Examination Structure:
- Part A: Compulsory 10 short questions of 2 marks each (2 questions from each unit) = 20 Marks.
- Part B: 5 choice questions of 10 marks (or 2 × 5 marks) = 50 Marks.
- Total: 70 Marks.

Guidelines for Answers:
- When asked about "2 marks questions" or "short questions": provide crisp, high-scoring answers with formal definitions, key formulas, equations, or examples worth full 2 marks.
- When asked to "continue" or follow up: seamlessly continue from the previous turn in the conversation without restarting or skipping.
- Math & Formulas: use standard human-readable math or standard LaTeX ($...$ or $$...$$).
- Output directly as the academic tutor. Never output internal checklists, prompt evaluation steps, or meta-instructions.
- Use clean GitHub-style Markdown with bolding, lists, and code blocks.`;

    // Construct multi-turn contents
    let contents = [];
    if (Array.isArray(history) && history.length > 0) {
      contents = history.map((turn, idx) => {
        const role = turn.role === 'model' || turn.role === 'assistant' ? 'model' : 'user';
        let text = turn.text || '';
        // Prepend system instruction to the very first user message for guaranteed grounding
        if (idx === 0 && role === 'user') {
          text = `${systemInstruction}\n\nSubject Context: ${subject || 'General CSE Sem III'}\n\nStudent: ${text}`;
        }
        return {
          role: role,
          parts: [{ text: text }]
        };
      });

      // If query is provided and not already the last message in history, append it
      const lastMsg = history[history.length - 1];
      if (query && (!lastMsg || lastMsg.text !== query)) {
        contents.push({
          role: 'user',
          parts: [{ text: query }]
        });
      }
    } else {
      contents = [
        {
          role: 'user',
          parts: [
            { text: `${systemInstruction}\n\nSubject Context: ${subject || 'General CSE Sem III'}\n\nStudent Question: ${query}` }
          ]
        }
      ];
    }

    const models = ['gemini-3.8-flash', 'gemini-3.5-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: contents,
            generationConfig: {
              temperature: 0.35,
              maxOutputTokens: 4096
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidate) {
            return res.status(200).json({ success: true, text: candidate });
          }
        }
      } catch (err) {
        console.error('Gemini model request failed', err?.name || 'Unknown error');
      }
    }

    return res.status(502).json({
      error: 'AI_UPSTREAM_ERROR',
      message: 'The AI assistant could not generate an answer right now. Please try again.'
    });
  } catch (err) {
    console.error('Gemini handler failed', err?.name || 'Unknown error');
    return res.status(500).json({
      error: 'AI_INTERNAL_ERROR',
      message: 'The AI assistant could not complete this request.'
    });
  }
}
