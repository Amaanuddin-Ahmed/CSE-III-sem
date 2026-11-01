// scripts/test-theme-phase-b.js
const fs = require('fs');
const path = require('path');
const http = require('http');
const { chromium } = require('playwright');

const PORT = 3457;
const rootDir = path.resolve(__dirname, '..');
const darkOutDir = path.join(rootDir, 'tests', 'visual', 'dark');
const lightCheckDir = path.join(rootDir, 'tests', 'visual', 'light-check');
fs.mkdirSync(darkOutDir, { recursive: true });
fs.mkdirSync(lightCheckDir, { recursive: true });

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
  console.log(`Phase B test server running at http://localhost:${PORT}`);
  const browser = await chromium.launch({ headless: true });

  let results = {
    header360NoOverflow: false,
    toggleWorks: false,
    themePersistsOnReload: false,
    themeResetWorks: false,
    metaThemeColorUpdates: false
  };

  try {
    const page = await browser.newPage({ viewport: { width: 360, height: 740 } });

    // Mark tour as seen to avoid overlay
    await page.addInitScript(() => {
      localStorage.setItem('mgit_tour_seen_v2', 'true');
    });

    // 1. Test 360px mobile header width
    await page.goto(`http://localhost:${PORT}/?theme=reset`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    const header = await page.$('.site-header');
    const headerBox = await header.boundingBox();
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    console.log(`360px viewport check: scrollWidth=${scrollWidth}, headerHeight=${headerBox.height}`);
    results.header360NoOverflow = scrollWidth <= 360;

    // 2. Test theme toggle click
    const toggleBtn = await page.$('#themeToggleBtn');
    if (toggleBtn) {
      await toggleBtn.click();
      await page.waitForTimeout(500);

      const themeAfterClick = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      const metaColor = await page.evaluate(() => {
        const m = document.querySelector('meta[name="theme-color"]');
        return m ? m.getAttribute('content') : null;
      });
      const ariaPressed = await page.evaluate(() => {
        const b = document.getElementById('themeToggleBtn');
        return b ? b.getAttribute('aria-pressed') : null;
      });

      console.log(`Toggle clicked: theme=${themeAfterClick}, metaColor=${metaColor}, ariaPressed=${ariaPressed}`);
      results.toggleWorks = (themeAfterClick === 'dark' && ariaPressed === 'true');
      results.metaThemeColorUpdates = (metaColor === '#0b1220');

      // 3. Test reload persistence (Anti-FOUC)
      await page.reload({ waitUntil: 'domcontentloaded' });
      const themeAfterReload = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      console.log(`After reload: theme=${themeAfterReload}`);
      results.themePersistsOnReload = (themeAfterReload === 'dark');

      // 4. Test ?theme=reset
      await page.goto(`http://localhost:${PORT}/?theme=reset`, { waitUntil: 'networkidle' });
      const themeAfterReset = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      console.log(`After ?theme=reset: theme=${themeAfterReset}`);
      results.themeResetWorks = (themeAfterReset === 'light');
    }

    // 5. Capture Dark Mode Screenshots (Mobile 390x844 & Desktop 1366x768)
    const viewports = [
      { name: 'mobile', width: 390, height: 844 },
      { name: 'desktop', width: 1366, height: 768 }
    ];

    for (const vp of viewports) {
      const p = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      await p.addInitScript(() => {
        localStorage.setItem('mgit_tour_seen_v2', 'true');
        localStorage.setItem('mgit_theme', 'dark');
      });

      // Dark Home
      await p.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });
      await p.waitForTimeout(500);
      await p.screenshot({ path: path.join(darkOutDir, `${vp.name}-01-home.png`), fullPage: false });

      // Dark Subjects (Mid-2)
      const mid2Btn = await p.$('[data-exam-id="mid2"]');
      if (mid2Btn) {
        await mid2Btn.click();
        await p.waitForTimeout(500);
        await p.screenshot({ path: path.join(darkOutDir, `${vp.name}-02-subjects.png`), fullPage: false });
      }

      // Dark Subject Hub (DM)
      const dmCard = await p.$('.subject-card[data-subject="DM"], [data-sub="DM"], .subj-card, .subject-card');
      if (dmCard) {
        await dmCard.click();
        await p.waitForTimeout(600);
        await p.screenshot({ path: path.join(darkOutDir, `${vp.name}-03-subject-hub.png`), fullPage: false });
      }

      // Dark PYQs
      const choosePyqs = await p.$('#choosePyqsCard');
      if (choosePyqs) {
        await choosePyqs.click();
        await p.waitForTimeout(500);
      }

      // Expand chapters and question
      const expandBtn = await p.$('#toggleAllChaptersBtn, #expandAllUnitsBtn');
      if (expandBtn) {
        await expandBtn.click();
        await p.waitForTimeout(400);
      }

      const firstQHeader = await p.$('.q-compact-header');
      if (firstQHeader) {
        await firstQHeader.click();
        await p.waitForTimeout(400);
      }

      // Dark View Solution Modal
      const viewSolBtn = await p.$('.btn-q-solution');
      if (viewSolBtn) {
        await viewSolBtn.click();
        await p.waitForTimeout(1000);
        await p.screenshot({ path: path.join(darkOutDir, `${vp.name}-04-solution-modal.png`), fullPage: false });

        // Dark Ask with AI Modal
        const askDeeperBtn = await p.$('#solAskAiDeeperBtn');
        if (askDeeperBtn) {
          await askDeeperBtn.click();
          await p.waitForTimeout(800);
          await p.screenshot({ path: path.join(darkOutDir, `${vp.name}-05-ask-modal.png`), fullPage: false });
        }
      }

      // Dark Footer
      const footer = await p.$('footer');
      if (footer) {
        await footer.scrollIntoViewIfNeeded();
        await p.waitForTimeout(400);
        await p.screenshot({ path: path.join(darkOutDir, `${vp.name}-06-footer.png`), fullPage: false });
      }

      await p.close();
    }

    await page.close();
  } catch (err) {
    console.error('Test error:', err);
  } finally {
    await browser.close();
    server.close(() => {
      console.log('Phase B test complete. Results:', results);
      process.exit(0);
    });
  }
});
