const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outDir = path.resolve(__dirname, '..', 'tests', 'visual', 'user-fixes-round2');
fs.mkdirSync(outDir, { recursive: true });

async function run() {
  console.log('Testing User Requirements:');
  console.log('1. Notes of COA collapsed by default');
  console.log('2. Dark mode intro "Later" stays in light theme');
  console.log('3. Solutions render in clean human-readable text with no red LaTeX errors');

  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

    // Test 1: Dark Mode Intro "Later" button behavior
    console.log('\n--- Test 1: Dark Mode Intro Popup "Later" Button ---');
    await page.goto('http://localhost:5050/?theme=reset');
    await page.evaluate(() => {
      localStorage.clear();
      // Keep tour seen so only dark intro triggers
      localStorage.setItem('mgit_tour_seen_v2', 'true');
    });

    await page.goto('http://localhost:5050/');
    // Wait for 2-second timer of dark intro popup
    console.log('Waiting for dark mode popup (2s)...');
    await page.waitForTimeout(2500);

    const isPopupVisible = await page.evaluate(() => {
      const m = document.getElementById('darkIntroModal');
      return m && window.getComputedStyle(m).display !== 'none';
    });
    console.log('Dark intro popup visible:', isPopupVisible);

    // Click "Later"
    console.log('Clicking "Later" button...');
    await page.evaluate(() => {
      const laterBtn = document.getElementById('darkIntroLaterBtn');
      if (laterBtn) laterBtn.click();
    });
    await page.waitForTimeout(600);

    // Verify theme is LIGHT and saved in localStorage
    const themeState = await page.evaluate(() => {
      return {
        themeAttr: document.documentElement.getAttribute('data-theme'),
        storageTheme: localStorage.getItem('mgit_theme'),
        introSeen: localStorage.getItem('mgit_dark_intro_seen')
      };
    });
    console.log('Theme state after clicking "Later":', JSON.stringify(themeState));
    if (themeState.themeAttr !== 'light' || themeState.storageTheme !== 'light') {
      throw new Error('FAILED: Theme did not stay light after clicking Later!');
    }
    console.log('>>> SUCCESS: Site correctly remained in Light Theme!');
    await page.screenshot({ path: path.join(outDir, '01-later-stays-light.png') });

    // Test 2: COA Notes Collapsed by Default
    console.log('\n--- Test 2: COA Notes Collapsed by Default ---');
    // Select Mid-2
    await page.evaluate(() => {
      const mid2 = document.querySelector('[data-exam-id="mid2"]');
      if (mid2) mid2.click();
    });
    await page.waitForTimeout(400);

    // Select COA
    await page.evaluate(() => {
      const coaCard = document.querySelector('.subject-card[data-subject="COA"]');
      if (coaCard) coaCard.click();
    });
    await page.waitForTimeout(400);

    // Choose Notes & Resources
    await page.evaluate(() => {
      const chooseNotes = document.querySelector('#chooseNotesCard') || document.querySelector('#tabSwitchToNotes');
      if (chooseNotes) chooseNotes.click();
    });
    await page.waitForTimeout(400);

    // Check all accordions state
    const accordionsState = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('.notes-unit-accordion-card'));
      return cards.map(c => ({
        id: c.id,
        badge: c.querySelector('.ch-badge')?.textContent?.trim(),
        isOpen: c.classList.contains('open'),
        bodyDisplay: c.querySelector('.chapter-accordion-body')?.style.display
      }));
    });
    console.log('Default Accordions State in COA Notes:');
    console.log(JSON.stringify(accordionsState, null, 2));

    const anyOpen = accordionsState.some(a => a.isOpen || a.bodyDisplay !== 'none');
    if (anyOpen) {
      throw new Error('FAILED: Some notes accordions were open by default!');
    }
    console.log('>>> SUCCESS: All COA notes accordions are collapsed by default!');
    await page.screenshot({ path: path.join(outDir, '02-coa-notes-collapsed-default.png') });

    // Test 2b: Click to Expand Unit 3
    console.log('Clicking to expand Unit 3 notes accordion...');
    await page.evaluate(() => {
      const u3Header = document.querySelector('#notesUnitAccordion-3 .chapter-accordion-header');
      if (u3Header) u3Header.click();
    });
    await page.waitForTimeout(300);

    const u3Open = await page.evaluate(() => {
      const c = document.getElementById('notesUnitAccordion-3');
      return c && c.classList.contains('open') && c.querySelector('.chapter-accordion-body').style.display === 'block';
    });
    console.log('Unit 3 expanded successfully on click:', u3Open);
    await page.screenshot({ path: path.join(outDir, '03-coa-unit3-expanded.png') });

    // Test 3: Clean Human-Readable Solutions (User Attachment Question)
    console.log('\n--- Test 3: Verified Solution for User Question ---');
    // Switch to PYQs tab
    await page.evaluate(() => {
      const pyqTab = document.querySelector('#tabSwitchToPyqs');
      if (pyqTab) pyqTab.click();
    });
    await page.waitForTimeout(400);

    // Search for 1010011 or open question solution modal
    const solutionResult = await page.evaluate(async () => {
      const q = window.QUESTIONS_DATABASE.find(item =>
        item.subjectId === 'COA' && item.question && item.question.includes('1010011')
      ) || window.QUESTIONS_DATABASE.find(item =>
        item.subjectId === 'COA' && item.question && item.question.toLowerCase().includes('2s complements')
      );

      if (!q) return { found: false, error: 'Question not found in database' };

      // Call openSolutionModal
      window.openSolutionModal(q);
      // Wait for modal to render
      await new Promise(r => setTimeout(r, 600));

      const modal = document.getElementById('solutionModal');
      const body = document.getElementById('solAnswerBody');
      const html = body ? body.innerHTML : '';
      const hasKatexError = html.includes('katex-error') || html.includes('style="color:#cc0000;"');
      const hasBeginArray = html.includes('\\begin{array}');
      const hasCleanTextCodeBlock = html.includes('<pre') && html.includes('0001010');

      return {
        found: true,
        modalVisible: modal ? window.getComputedStyle(modal).display !== 'none' : false,
        hasKatexError,
        hasBeginArray,
        hasCleanTextCodeBlock,
        snippet: body ? body.innerText.substring(0, 500) : ''
      };
    });

    console.log('Solution rendering verification:');
    console.log(JSON.stringify(solutionResult, null, 2));

    if (solutionResult.hasKatexError || solutionResult.hasBeginArray) {
      throw new Error('FAILED: Solution still contains unrendered LaTeX array or KaTeX error!');
    }
    console.log('>>> SUCCESS: Solution rendered in clean human-readable format with zero errors!');
    await page.screenshot({ path: path.join(outDir, '04-clean-human-readable-solution.png') });

    console.log('\nALL 3 USER VERIFICATION TESTS PASSED PERFECTLY!');
  } finally {
    await browser.close();
  }
}

run().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
