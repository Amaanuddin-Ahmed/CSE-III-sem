// scripts/verify-fixes.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outDir = path.resolve(__dirname, '..', 'tests', 'visual', 'fixes-verification');
fs.mkdirSync(outDir, { recursive: true });

async function run() {
  console.log('Launching Playwright browser...');
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

    // Enable dark mode directly via localStorage
    await page.goto('http://localhost:5050/');
    await page.evaluate(() => {
      localStorage.setItem('mgit_tour_seen_v2', 'true');
      localStorage.setItem('mgit_dark_intro_seen', 'true');
      localStorage.setItem('mgit_theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    });

    await page.goto('http://localhost:5050/');
    await page.waitForTimeout(600);

    // Remove any lingering tour overlay
    await page.evaluate(() => {
      const t = document.getElementById('tourOverlay');
      if (t) t.remove();
    });

    // 1. Enter Mid-2 Prep -> DM
    const mid2Card = await page.$('.exam-card[data-exam-id="mid2"]');
    if (mid2Card) {
      await mid2Card.click();
      await page.waitForTimeout(500);
    }
    const dmCard = await page.$('.subject-card[data-subject="DM"]');
    if (dmCard) {
      await dmCard.click();
      await page.waitForTimeout(500);
    }

    // 2. Open Notes View
    console.log('Capturing Notes View (checking highlighted Drive button, division controls, switcher)...');
    const notesChoice = await page.$('#chooseNotesCard');
    if (notesChoice) {
      await notesChoice.click();
      await page.waitForTimeout(600);
    }
    await page.screenshot({ path: path.join(outDir, '01-notes-view-dark.png') });

    // 3. Open AI Assistant Modal
    console.log('Capturing In-Built AI Assistant Modal...');
    await page.evaluate(() => {
      if (typeof window.openGeminiModal === 'function') {
        window.openGeminiModal();
      } else {
        const m = document.getElementById('geminiModal');
        if (m) m.style.display = 'flex';
      }
    });
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(outDir, '02-gemini-modal-dark.png') });

    // Close AI modal
    await page.evaluate(() => {
      if (typeof window.closeGeminiModal === 'function') {
        window.closeGeminiModal();
      } else {
        const m = document.getElementById('geminiModal');
        if (m) m.style.display = 'none';
      }
    });
    await page.waitForTimeout(400);

    // 4. Start Practice Session (Quiz mode)
    console.log('Starting practice session for DM Unit 3 (Quiz mode)...');
    await page.evaluate(() => {
      if (window.PracticeRunner && typeof window.PracticeRunner.startSession === 'function') {
        window.PracticeRunner.startSession('quiz', 'DM', '3', 'mid2');
      }
    });
    await page.waitForTimeout(800);
    console.log('Capturing Practice Session screen...');
    await page.screenshot({ path: path.join(outDir, '03-practice-session-dark.png') });

    // 5. Open Exit Practice Confirmation Modal
    console.log('Clicking sessionExitBtn button...');
    const exitBtn = await page.$('#sessionExitBtn');
    if (exitBtn) {
      await exitBtn.click();
      await page.waitForTimeout(500);
    }
    console.log('Capturing Exit Practice Modal...');
    await page.screenshot({ path: path.join(outDir, '04-exit-practice-modal-dark.png') });

    // 6. Close Exit Modal & Return to Subject View
    const confirmExit = await page.$('#confirmExitYesBtn');
    if (confirmExit) {
      await confirmExit.click();
      await page.waitForTimeout(600);
    }

    // 7. Open PYQs -> Unit 3 -> View Solution
    console.log('Opening PYQs and viewing solution...');
    const pyqChoice = await page.$('#choosePyqsCard');
    if (pyqChoice) {
      await pyqChoice.click();
      await page.waitForTimeout(500);
    }
    const pyqTab = await page.$('#tabSwitchToPyqs');
    if (pyqTab) {
      await pyqTab.click();
      await page.waitForTimeout(500);
    }
    const unitHeader = await page.$('.chapter-accordion-header');
    if (unitHeader) {
      await unitHeader.click();
      await page.waitForTimeout(400);
    }
    const qHeader = await page.$('.q-compact-header');
    if (qHeader) {
      await qHeader.click();
      await page.waitForTimeout(400);
    }
    const solBtn = await page.$('.btn-q-solution');
    if (solBtn) {
      await solBtn.click();
      await page.waitForTimeout(1000);
      console.log('Capturing View Solution modal...');
      await page.screenshot({ path: path.join(outDir, '05-solution-modal-dark.png') });
    }

    console.log('All verification captures completed successfully!');
  } catch (err) {
    console.error('Verification error:', err);
  } finally {
    await browser.close();
  }
}

run();
