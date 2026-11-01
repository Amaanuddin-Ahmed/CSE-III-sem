// scripts/verify-dark-contrast.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outDir = path.resolve(__dirname, '..', 'tests', 'visual', 'contrast-verification');
fs.mkdirSync(outDir, { recursive: true });

async function run() {
  console.log('Launching Playwright browser...');
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

    // Step 1: Open fresh page with ?theme=reset
    console.log('1. Testing 2-second popup trigger on fresh visit...');
    await page.goto('http://localhost:5050/?theme=reset');

    // At 1.5s, should NOT be visible yet
    await page.waitForTimeout(1500);
    const visibleAt15 = await page.evaluate(() => {
      const m = document.getElementById('darkIntroModal');
      return m && m.style.display !== 'none';
    });
    console.log('   Popup visible at 1.5s (expected false):', visibleAt15);

    // At 2.4s, should BE visible
    await page.waitForTimeout(900);
    const visibleAt24 = await page.evaluate(() => {
      const m = document.getElementById('darkIntroModal');
      return m && m.style.display !== 'none';
    });
    console.log('   Popup visible at 2.4s (expected true):', visibleAt24);
    await page.screenshot({ path: path.join(outDir, '01-intro-popup-at-2s.png') });

    // Step 2: Click "Switch to Dark mode"
    console.log('2. Clicking "Switch to Dark mode"...');
    await page.click('#darkIntroSwitchBtn');
    await page.waitForTimeout(800); // Wait for transition and dismissal

    // Ensure tour overlay doesn't block clicks in testing
    await page.evaluate(() => {
      localStorage.setItem('mgit_tour_seen_v2', 'true');
      const t = document.getElementById('tourOverlay');
      if (t) t.remove();
    });

    const currentTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    console.log('   Current theme attribute:', currentTheme);
    await page.screenshot({ path: path.join(outDir, '02-category-view-dark.png') });

    // Step 3: Enter Mid-2 Prep
    console.log('3. Clicking Mid-2 exam card...');
    const mid2Card = await page.$('.exam-card[data-exam-id="mid2"]');
    if (mid2Card) {
      await mid2Card.click();
      await page.waitForTimeout(600);
    }
    console.log('   Capturing Mid-2 Subjects view...');
    await page.screenshot({ path: path.join(outDir, '03-mid2-subjects-dark.png') });

    // Ensure tour is dismissed if re-rendered
    await page.evaluate(() => {
      const t = document.getElementById('tourOverlay');
      if (t) t.remove();
    });

    // Step 4: Click DM Subject
    console.log('4. Clicking DM subject card...');
    const dmCard = await page.$('.subject-card[data-subject="DM"]');
    if (dmCard) {
      await dmCard.click();
      await page.waitForTimeout(600);
    }

    // Click PYQs mode card
    console.log('   Clicking PYQs mode choice card...');
    const pyqChoice = await page.$('#choosePyqsCard');
    if (pyqChoice) {
      await pyqChoice.click();
      await page.waitForTimeout(600);
    }

    console.log('   Capturing DM PYQs view (Unit accordion cards)...');
    await page.screenshot({ path: path.join(outDir, '04-dm-pyqs-units-dark.png') });

    // Step 5: Expand Unit 3 accordion & first question
    console.log('5. Expanding Unit 3 and first question...');
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
    console.log('   Capturing expanded question item...');
    await page.screenshot({ path: path.join(outDir, '05-question-expanded-dark.png') });

    // Step 6: View Solution Modal
    console.log('6. Opening View Solution modal...');
    const solBtn = await page.$('.btn-q-solution');
    if (solBtn) {
      await solBtn.click();
      await page.waitForTimeout(1000);
      console.log('   Capturing Solution Modal...');
      await page.screenshot({ path: path.join(outDir, '06-solution-modal-dark.png') });

      // Close solution modal
      const closeSol = await page.$('#closeSolutionModalBtn');
      if (closeSol) {
        await closeSol.click();
        await page.waitForTimeout(400);
      }
    }

    // Step 7: Scroll to bottom footer
    console.log('7. Scrolling to bottom footer...');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    console.log('   Capturing bottom footer...');
    await page.screenshot({ path: path.join(outDir, '07-bottom-footer-dark.png') });

    // Step 8: Verify Light Mode is 100% untouched
    console.log('8. Verifying Light Mode...');
    const pageLight = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await pageLight.goto('http://localhost:5050/');
    await pageLight.evaluate(() => {
      localStorage.setItem('mgit_tour_seen_v2', 'true');
      localStorage.setItem('mgit_dark_intro_seen', 'true');
      localStorage.setItem('mgit_theme', 'light');
    });
    await pageLight.goto('http://localhost:5050/');
    await pageLight.waitForTimeout(600);
    await pageLight.screenshot({ path: path.join(outDir, '08-light-mode-verified.png') });

    console.log('SUCCESS: All 8 visual verification captures completed!');
  } catch (err) {
    console.error('Verification error:', err);
  } finally {
    await browser.close();
  }
}

run();
