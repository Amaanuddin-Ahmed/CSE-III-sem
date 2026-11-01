// scripts/capture-baseline.js
const fs = require('fs');
const path = require('path');
const http = require('http');
const { chromium } = require('playwright');

const PORT = 3456;
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'tests', 'visual', 'baseline');
fs.mkdirSync(outDir, { recursive: true });

// Simple static server
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(rootDir, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, async () => {
  console.log(`Test server running at http://localhost:${PORT}`);

  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: 'mobile', width: 390, height: 844 },
    { name: 'desktop', width: 1366, height: 768 }
  ];

  for (const vp of viewports) {
    console.log(`Capturing baseline for viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });

    // Mark tour as seen so it doesn't overlay
    await page.addInitScript(() => {
      localStorage.setItem('mgit_tour_seen_v2', 'true');
    });

    // 1. Home / Category view
    await page.goto(`http://localhost:${PORT}/?theme=reset`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(outDir, `${vp.name}-01-home.png`), fullPage: false });

    // 2. Select Mid-2
    const mid2Btn = await page.$('[data-exam-id="mid2"]');
    if (mid2Btn) {
      await mid2Btn.click();
      await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(outDir, `${vp.name}-02-subjects.png`), fullPage: false });
    }

    // 3. Click DM Subject card
    const dmCard = await page.$('.subject-card[data-subject="DM"], [data-sub="DM"], .subj-card, .subject-card');
    if (dmCard) {
      await dmCard.click();
      await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(outDir, `${vp.name}-03-subject-hub.png`), fullPage: false });
    }

    // 4. Click PYQs mode card
    const choosePyqs = await page.$('#choosePyqsCard');
    if (choosePyqs) {
      await choosePyqs.click();
      await page.waitForTimeout(600);
    }

    // 5. Expand chapters
    const expandBtn = await page.$('#toggleAllChaptersBtn, #expandAllUnitsBtn');
    if (expandBtn) {
      await expandBtn.click();
      await page.waitForTimeout(400);
    }

    // 6. Expand first question item
    const firstQHeader = await page.$('.q-compact-header');
    if (firstQHeader) {
      await firstQHeader.click();
      await page.waitForTimeout(400);
    }

    // 7. Click View Solution
    const viewSolBtn = await page.$('.btn-q-solution');
    if (viewSolBtn) {
      await viewSolBtn.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(outDir, `${vp.name}-04-solution-modal.png`), fullPage: false });

      // 8. Open Ask with AI from within solution modal
      const askDeeperBtn = await page.$('#solAskAiDeeperBtn');
      if (askDeeperBtn) {
        await askDeeperBtn.click();
        await page.waitForTimeout(800);
        await page.screenshot({ path: path.join(outDir, `${vp.name}-05-ask-modal.png`), fullPage: false });

        const closeAsk = await page.$('#closeAskWithModalBtn');
        if (closeAsk) await closeAsk.click();
        await page.waitForTimeout(400);
      } else {
        const closeSol = await page.$('#closeSolutionModalBtn');
        if (closeSol) await closeSol.click();
        await page.waitForTimeout(400);
      }
    }

    // 9. Footer
    const footer = await page.$('footer');
    if (footer) {
      await footer.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(outDir, `${vp.name}-06-footer.png`), fullPage: false });
    }

    await page.close();
  }

  await browser.close();
  server.close(() => {
    console.log('Baseline capture complete. Saved to tests/visual/baseline/');
    process.exit(0);
  });
});
