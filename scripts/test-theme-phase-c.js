// scripts/test-theme-phase-c.js
const fs = require('fs');
const path = require('path');
const http = require('http');
const { chromium } = require('playwright');

const PORT = 3465;
const rootDir = path.resolve(__dirname, '..');
const introOutDir = path.join(rootDir, 'tests', 'visual', 'intro');
fs.mkdirSync(introOutDir, { recursive: true });

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
  console.log(`Phase C test server running at http://localhost:${PORT}`);
  const browser = await chromium.launch({ headless: true });

  const testResults = {
    neverOverlapsActiveTour: false,
    introAppearsAfterTour: false,
    flightAnimationTriggers: false,
    introNeverAppearsAgainOnReload: false,
    switchToDarkWorks: false
  };

  try {
    // Test 1: Tour coordination
    const pageTour = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await pageTour.goto(`http://localhost:${PORT}/?theme=reset`);
    await pageTour.waitForTimeout(800);
    const modalDuringTour = await pageTour.evaluate(() => {
      const m = document.getElementById('darkIntroModal');
      return m && m.style.display !== 'none';
    });
    console.log('Intro modal visible during onboarding tour (should be false):', modalDuringTour);
    testResults.neverOverlapsActiveTour = !modalDuringTour;
    await pageTour.close();

    // Test 2: First visit with tour already seen (Desktop & Mobile captures)
    const pageDesktop = await browser.newPage({ viewport: { width: 1366, height: 768 } });
    await pageDesktop.goto(`http://localhost:${PORT}/`);
    await pageDesktop.evaluate(() => {
      localStorage.setItem('mgit_tour_seen_v2', 'true');
      localStorage.removeItem('mgit_dark_intro_seen');
      localStorage.removeItem('mgit_theme');
    });
    await pageDesktop.goto(`http://localhost:${PORT}/`);
    await pageDesktop.waitForTimeout(900); // Wait for 600ms entrance delay

    const desktopModalVisible = await pageDesktop.evaluate(() => {
      const m = document.getElementById('darkIntroModal');
      return m && m.style.display !== 'none';
    });
    console.log('Desktop intro modal visible after entrance delay:', desktopModalVisible);
    testResults.introAppearsAfterTour = desktopModalVisible;

    if (desktopModalVisible) {
      await pageDesktop.screenshot({ path: path.join(introOutDir, 'desktop-intro-modal.png'), fullPage: false });
    }

    // Capture mobile intro modal
    const pageMobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await pageMobile.goto(`http://localhost:${PORT}/`);
    await pageMobile.evaluate(() => {
      localStorage.setItem('mgit_tour_seen_v2', 'true');
      localStorage.removeItem('mgit_dark_intro_seen');
      localStorage.removeItem('mgit_theme');
    });
    await pageMobile.goto(`http://localhost:${PORT}/`);
    await pageMobile.waitForTimeout(900);
    const mobileModalVisible = await pageMobile.evaluate(() => {
      const m = document.getElementById('darkIntroModal');
      return m && m.style.display !== 'none';
    });
    if (mobileModalVisible) {
      await pageMobile.screenshot({ path: path.join(introOutDir, 'mobile-intro-modal.png'), fullPage: false });
    }

    // Test 3: Flight dismissal animation via "Later"
    const laterBtn = await pageDesktop.$('#darkIntroLaterBtn');
    if (laterBtn) {
      await laterBtn.click();
      await pageDesktop.waitForTimeout(500); // flight complete

      const modalAfterFlight = await pageDesktop.evaluate(() => {
        const m = document.getElementById('darkIntroModal');
        return m && m.style.display === 'none';
      });
      const introSeen = await pageDesktop.evaluate(() => localStorage.getItem('mgit_dark_intro_seen'));
      console.log('Modal closed after flight:', modalAfterFlight, 'Stored intro seen:', introSeen);
      testResults.flightAnimationTriggers = (modalAfterFlight && introSeen === 'true');

      // Test 4: Reload persistence (must NOT appear again)
      await pageDesktop.reload({ waitUntil: 'networkidle' });
      await pageDesktop.waitForTimeout(900);
      const modalOnReload = await pageDesktop.evaluate(() => {
        const m = document.getElementById('darkIntroModal');
        return m && m.style.display !== 'none';
      });
      console.log('Modal appeared on reload (should be false):', modalOnReload);
      testResults.introNeverAppearsAgainOnReload = !modalOnReload;
    }

    // Test 5: "Switch to Dark mode" button action
    const switchBtn = await pageMobile.$('#darkIntroSwitchBtn');
    if (switchBtn) {
      await switchBtn.click();
      await pageMobile.waitForTimeout(800);
      const themeAfterSwitch = await pageMobile.evaluate(() => document.documentElement.getAttribute('data-theme'));
      const savedTheme = await pageMobile.evaluate(() => localStorage.getItem('mgit_theme'));
      console.log('Theme after clicking "Switch to Dark mode":', themeAfterSwitch, 'Saved:', savedTheme);
      testResults.switchToDarkWorks = (themeAfterSwitch === 'dark' && savedTheme === 'dark');
    }

    await pageDesktop.close();
    await pageMobile.close();
  } catch (err) {
    console.error('Phase C error:', err);
  } finally {
    await browser.close();
    server.close(() => {
      console.log('Phase C test complete. Results:', testResults);
      process.exit(0);
    });
  }
});
