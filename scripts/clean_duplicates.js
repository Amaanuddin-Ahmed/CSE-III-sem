const fs = require('fs');
let app = fs.readFileSync('CSE-III-sem/app.js', 'utf8');

const duplicateBlock = `    // Year Filter Checkboxes
    if (el.yearCheckboxesRow) {
      el.yearCheckboxesRow.addEventListener('change', () => {
        const checked = Array.from(el.yearCheckboxesRow.querySelectorAll('.year-filter-cb:checked'))
          .map(cb => parseInt(cb.value, 10));
        state.selectedYears = checked;
        renderPyqsDivision();
      });
    }

    // Part A / Part B Toggle Buttons
    if (el.partToggleButtons) {
      el.partToggleButtons.querySelectorAll('.part-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          el.partToggleButtons.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.selectedPart = btn.getAttribute('data-part');
          renderPyqsDivision();
        });
      });
    }`;

// Replace CRLF or LF versions
const normalizedApp = app.replace(/\r\n/g, '\n');
const normalizedBlock = duplicateBlock.replace(/\r\n/g, '\n');

if (normalizedApp.includes(normalizedBlock)) {
  const result = normalizedApp.replace(normalizedBlock, '');
  fs.writeFileSync('CSE-III-sem/app.js', result, 'utf8');
  console.log('Successfully removed duplicate block!');
} else {
  console.log('duplicateBlock not found in normalized app');
}
