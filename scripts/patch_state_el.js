const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'app.js');
let app = fs.readFileSync(appPath, 'utf8');

// Replace state
const statePattern = /selectedYears:\s*\[2024,\s*2023,\s*2022,\s*2021,\s*2020\],[\r\n\s]*selectedPart:\s*'all',\s*\/\/\s*'all',\s*'A',\s*'B'/;
const newState = `selectedYears: [2024, 2023, 2022, 2021, 2020],
    selectedYear: 'all',
    selectedPart: 'all', // 'all', 'A', 'B', 'repeated'
    pyqSearchQuery: '',
    expandedChapters: { 1: true, 2: false, 3: false, 4: false, 5: false },`;

if (statePattern.test(app)) {
  app = app.replace(statePattern, newState);
  console.log('1. Successfully patched state');
} else {
  console.log('1. statePattern failed to match');
}

// Replace el
const elPattern = /yearCheckboxesRow:\s*document\.getElementById\('yearCheckboxesRow'\),[\r\n\s]*pyqCountBanner:\s*document\.getElementById\('pyqCountBanner'\),[\r\n\s]*partToggleButtons:\s*document\.getElementById\('partToggleButtons'\),[\r\n\s]*questionsListContainer:\s*document\.getElementById\('questionsListContainer'\),/;
const newEl = `toggleAllChaptersBtn: document.getElementById('toggleAllChaptersBtn'),
    toggleAllChaptersText: document.getElementById('toggleAllChaptersText'),
    viewSubjectDrivePapersBtn: document.getElementById('viewSubjectDrivePapersBtn'),
    pyqSearchInput: document.getElementById('pyqSearchInput'),
    clearPyqSearchBtn: document.getElementById('clearPyqSearchBtn'),
    yearPillsRow: document.getElementById('yearPillsRow'),
    pyqCountBanner: document.getElementById('pyqCountBanner'),
    partToggleButtons: document.getElementById('partToggleButtons'),
    chapterAccordionsContainer: document.getElementById('chapterAccordionsContainer'),`;

if (elPattern.test(app)) {
  app = app.replace(elPattern, newEl);
  console.log('2. Successfully patched el');
} else {
  console.log('2. elPattern failed to match');
}

fs.writeFileSync(appPath, app, 'utf8');
console.log('Finished patch_state_el.js');
