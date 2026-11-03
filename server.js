const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5050;
const rootDir = __dirname;

// Try loading GEMINI_API_KEY from .env.local or .env if present
function loadEnvFile(fileName) {
  const filePath = path.join(rootDir, fileName);
  if (fs.existsSync(filePath)) {
    const lines = fs.readFileSync(filePath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const k = trimmed.substring(0, idx).trim();
        const v = trimmed.substring(idx + 1).trim();
        if (!process.env[k]) {
          process.env[k] = v;
        }
      }
    }
  }
}
loadEnvFile('.env.local');
loadEnvFile('.env');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

const SYSTEM_INSTRUCTION = `You are an expert, comprehensive academic study assistant designed specifically for MGIT (Mahatma Gandhi Institute of Technology) CSE Semester III undergraduate students following the MR-25 regulation.
Specialized Subject Domains: DM, COA, OOPJ, DBMS, SE, ES, IE.
Provide thorough, detailed, and complete answers with formal definitions, equations, step-by-step algorithms, worked numerical examples, and comparison tables.
Structure responses using clean Markdown.`;

async function handleGeminiApi(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-gemini-key'
    });
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  let bodyStr = '';
  req.on('data', chunk => { bodyStr += chunk; });
  req.on('end', async () => {
    let body = {};
    try {
      body = JSON.parse(bodyStr);
    } catch (e) {
      body = {};
    }

    const clientKey = req.headers['x-gemini-key'] || body.apiKey;
    const apiKey = (clientKey || process.env.GEMINI_API_KEY || '').trim();

    if (!apiKey) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: false,
        error: 'NO_API_KEY',
        message: 'No Google Gemini API key configured. Enter a free API key from https://aistudio.google.com/app/apikey or click "Continue with ChatGPT / Gemini" below.'
      }));
      return;
    }

    const { query, subject, history, image } = body;
    const prompt = (query || '').trim();
    if (!prompt) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing query in request body' }));
      return;
    }

    const contents = [];
    if (Array.isArray(history)) {
      for (const turn of history.slice(-6)) {
        if (turn && turn.text) {
          contents.push({
            role: turn.role === 'model' || turn.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: String(turn.text).slice(0, 4000) }]
          });
        }
      }
    }

    const userParts = [{ text: prompt }];
    if (image && image.base64Data && image.mimeType) {
      userParts.push({
        inlineData: {
          mimeType: image.mimeType,
          data: image.base64Data
        }
      });
    }

    contents.push({ role: 'user', parts: userParts });

    // Try models in cascade
    const models = ['gemini-3.5-flash-lite', 'gemini-flash-lite-latest', 'gemini-3.5-flash', 'gemini-3.6-flash'];
    let lastError = null;

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const geminiRes = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            systemInstruction: { parts: [{ text: `${SYSTEM_INSTRUCTION}\nContext: Subject ${subject || 'CSE Semester III'}` }] },
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 8192
            }
          })
        });

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const text = data.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('').trim();
          if (text) {
            res.writeHead(200, {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            });
            res.end(JSON.stringify({ success: true, text, model }));
            return;
          }
        } else {
          const errData = await geminiRes.json().catch(() => ({}));
          lastError = errData.error || { message: `Status ${geminiRes.status}` };
          if (geminiRes.status === 401 || geminiRes.status === 403) {
            // Bad key / disabled account - return clear guidance
            res.writeHead(200, {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            });
            res.end(JSON.stringify({
              success: false,
              error: 'INVALID_API_KEY',
              message: `Gemini API key error: ${lastError.message || 'Key invalid or account disabled'}. Please verify your key at https://aistudio.google.com/app/apikey or use ChatGPT/Gemini web options.`
            }));
            return;
          }
        }
      } catch (err) {
        lastError = err;
      }
    }

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({
      success: false,
      error: 'UPSTREAM_ERROR',
      message: lastError ? (lastError.message || 'Upstream Gemini API error') : 'Unable to generate response right now.'
    }));
  });
}

const server = http.createServer((req, res) => {
  // CORS & No-cache headers for instant local development preview
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  let reqPath = req.url.split('?')[0];

  // Route /api/gemini
  if (reqPath === '/api/gemini') {
    handleGeminiApi(req, res);
    return;
  }

  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  let filePath = path.join(rootDir, reqPath);

  // Normalize and check path traversal
  const normalized = path.normalize(filePath);
  if (!normalized.startsWith(rootDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Check if directory, try index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: ' + reqPath);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`MGIT PYQ Hub local preview running at:`);
  console.log(`👉 http://localhost:${PORT}/`);
  console.log(`👉 http://localhost:${PORT}/?theme=reset (fresh first-visit view)`);
  console.log(`====================================================`);
});
