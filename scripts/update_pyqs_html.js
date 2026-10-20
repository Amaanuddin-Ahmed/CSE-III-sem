const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
let s = fs.readFileSync(filePath, 'utf8');

const target = '<!-- Division Box 2: PYQs -->';
const endTarget = '<!-- Subtle bottom contribute button below all questions -->';

const idx1 = s.indexOf(target);
const idx2 = s.indexOf(endTarget);

if (idx1 === -1 || idx2 === -1) {
  console.error('Target not found in index.html', { idx1, idx2 });
  process.exit(1);
}

const endBlock = '</div>';
const idx3 = s.indexOf(endBlock, idx2);
const fullEnd = idx3 + endBlock.length;

const newHtml = `<!-- Division Box 2: PYQs (5 Chapter Accordions) -->
      <div class="division-box pyqs-division" id="pyqsDivisionBox" style="display: none;">
        <div class="division-box-header">
          <div class="division-header-title">
            <i class="fa-solid fa-book-bookmark"></i>
            <h4>Previous Year Questions (PYQs)</h4>
          </div>
          <div class="division-header-actions">
            <button type="button" class="btn-toggle-all-accordions" id="toggleAllChaptersBtn" title="Expand or Collapse All Chapters">
              <i class="fa-solid fa-up-down-left-right"></i>
              <span id="toggleAllChaptersText">Expand All</span>
            </button>
            <a id="viewSubjectDrivePapersBtn" href="#" target="_blank" rel="noopener noreferrer" class="btn-subject-drive-papers" title="View all raw question paper PDFs in Google Drive">
              <i class="fa-brands fa-google-drive"></i>
              <span>View Papers in Drive</span>
            </a>
          </div>
        </div>

        <!-- PYQ Search & Filter Controls -->
        <div class="pyq-filters-container">
          <!-- Instant Search Box -->
          <div class="pyq-search-box">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" id="pyqSearchInput" class="pyq-search-input" placeholder="Search questions across all chapters (e.g. Normalization, Booth, Tautology, AVL)..." autocomplete="off">
            <button type="button" id="clearPyqSearchBtn" class="pyq-search-clear" style="display: none;" title="Clear search">&times;</button>
          </div>

          <!-- Academic Year Filter Pills -->
          <div class="filter-row">
            <span class="filter-heading"><i class="fa-regular fa-calendar-days"></i> Academic Year:</span>
            <div class="year-pills-row" id="yearPillsRow">
              <button type="button" class="year-pill-btn active" data-year="all">All Years</button>
              <button type="button" class="year-pill-btn" data-year="2025">2025</button>
              <button type="button" class="year-pill-btn" data-year="2024">2024</button>
              <button type="button" class="year-pill-btn" data-year="2023">2023</button>
              <button type="button" class="year-pill-btn" data-year="2022">2022</button>
              <button type="button" class="year-pill-btn" data-year="2021">2021</button>
            </div>
          </div>

          <!-- Part & Repetition Filter Pills -->
          <div class="filter-row">
            <span class="filter-heading"><i class="fa-solid fa-filter"></i> Exam Part / Marks:</span>
            <div class="part-buttons" id="partToggleButtons">
              <button type="button" class="part-btn active" data-part="all">All Questions</button>
              <button type="button" class="part-btn" data-part="A">Part A (2 Marks)</button>
              <button type="button" class="part-btn" data-part="B">Part B (5/10 Marks)</button>
              <button type="button" class="part-btn repeated-filter-btn" data-part="repeated"><i class="fa-solid fa-fire"></i> Repeated (2+ Times)</button>
            </div>
          </div>

          <!-- Dynamic Question Count Summary -->
          <div class="pyq-count-banner" id="pyqCountBanner">
            Showing authentic questions across all 5 chapters
          </div>
        </div>

        <!-- 5 Chapter Accordions Container (CH 1 to CH 5) -->
        <div class="chapter-accordions-container" id="chapterAccordionsContainer">
          <!-- Dynamically populated 5 Chapter Accordion Rows: CH 1 to CH 5 -->
        </div>

        <!-- Subtle bottom contribute button below all questions -->
        <div class="pyq-bottom-contribute">
          <button class="btn-contribute-subtle" data-contrib-type="PYQ" type="button" title="Contribute a PYQ">
            <i class="fa-solid fa-plus"></i>
            <span>Contribute Question Paper</span>
          </button>
        </div>
      </div>`;

// Replace
s = s.substring(0, idx1) + newHtml + s.substring(fullEnd);
fs.writeFileSync(filePath, s, 'utf8');
console.log('SUCCESS: index.html pyqsDivisionBox updated!');
