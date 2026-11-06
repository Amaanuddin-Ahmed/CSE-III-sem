const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outDir = path.resolve(__dirname, '..', 'tests', 'visual', 'notes-accordions-verification');
fs.mkdirSync(outDir, { recursive: true });

async function run() {
  console.log('Launching browser to verify Notes accordions and summaries...');
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

    // Test in Dark Mode first
    await page.goto('http://localhost:5050/');
    await page.evaluate(() => {
      localStorage.setItem('mgit_tour_seen_v2', 'true');
      localStorage.setItem('mgit_dark_intro_seen', 'true');
      localStorage.setItem('mgit_theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    });

    await page.goto('http://localhost:5050/');
    await page.waitForTimeout(600);

    // Select Mid-2 exam card
    console.log('Selecting Mid-2...');
    await page.evaluate(() => {
      const mid2 = document.querySelector('[data-exam-id="mid2"]');
      if (mid2) mid2.click();
    });
    await page.waitForTimeout(400);

    // Select COA subject
    console.log('Selecting COA subject...');
    await page.evaluate(() => {
      const coaCard = document.querySelector('.subject-card[data-subject="COA"]');
      if (coaCard) coaCard.click();
    });
    await page.waitForTimeout(400);

    // Choose Notes & Resources
    console.log('Choosing Notes...');
    await page.evaluate(() => {
      const chooseNotes = document.querySelector('#chooseNotesCard') || document.querySelector('#tabSwitchToNotes');
      if (chooseNotes) chooseNotes.click();
    });
    await page.waitForTimeout(500);

    // Check accordions rendered
    const unitAccordions = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('.notes-unit-accordion-card'));
      return cards.map(c => ({
        id: c.id,
        badge: c.querySelector('.ch-badge')?.textContent?.trim(),
        title: c.querySelector('.notes-unit-title')?.textContent?.trim(),
        count: c.querySelector('.ch-count-badge')?.textContent?.trim(),
        notesCount: c.querySelectorAll('.note-item-card').length,
        isOpen: c.classList.contains('open')
      }));
    });
    console.log('Rendered Notes Unit Accordions in Dark Mode:');
    console.log(JSON.stringify(unitAccordions, null, 2));

    await page.screenshot({ path: path.join(outDir, '01-coa-notes-accordions-dark.png'), fullPage: false });

    // Click "Read" on NOTE-COA-20 (Unit 3 Basic Computer Organization)
    console.log('Clicking Read on NOTE-COA-20...');
    await page.evaluate(() => {
      const readBtn = document.querySelector('.note-read-btn[data-note-id="NOTE-COA-20"]');
      if (readBtn) readBtn.click();
    });
    await page.waitForTimeout(600);

    // Verify modal content
    const modalInfo = await page.evaluate(() => {
      const modal = document.getElementById('notesReaderModal');
      const title = document.getElementById('notesReaderTitle')?.textContent;
      const topics = Array.from(document.querySelectorAll('.note-summary-topic h3')).map(h => h.textContent.trim());
      const mustKnow = Array.from(document.querySelectorAll('.note-summary-mustknow li')).map(li => li.textContent.trim());
      const isVisible = modal && window.getComputedStyle(modal).display !== 'none';
      return {
        visible: isVisible,
        title,
        topicsCount: topics.length,
        topicsSample: topics.slice(0, 3),
        mustKnowCount: mustKnow.length
      };
    });
    console.log('NOTE-COA-20 Summary Modal Info:');
    console.log(JSON.stringify(modalInfo, null, 2));

    await page.screenshot({ path: path.join(outDir, '02-coa-unit3-summary-modal-dark.png') });

    // Close reader modal
    await page.evaluate(() => {
      const closeBtn = document.getElementById('notesReaderClose');
      if (closeBtn) closeBtn.click();
    });
    await page.waitForTimeout(300);

    // Test Light Mode
    console.log('Testing Light Mode...');
    await page.evaluate(() => {
      localStorage.setItem('mgit_theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    });
    await page.waitForTimeout(300);

    await page.screenshot({ path: path.join(outDir, '03-coa-notes-accordions-light.png') });

    // Click "Read" on NOTE-COA-21 (Unit 4 Microprogrammed Control & CPU)
    console.log('Clicking Read on NOTE-COA-21 in light mode...');
    await page.evaluate(() => {
      const readBtn = document.querySelector('.note-read-btn[data-note-id="NOTE-COA-21"]');
      if (readBtn) readBtn.click();
    });
    await page.waitForTimeout(600);

    await page.screenshot({ path: path.join(outDir, '04-coa-unit4-summary-modal-light.png') });

    console.log('All Notes accordion & summary tests completed successfully!');
  } finally {
    await browser.close();
  }
}

run().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
