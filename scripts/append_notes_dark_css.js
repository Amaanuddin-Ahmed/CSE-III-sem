const fs = require('fs');
let css = fs.readFileSync('css/theme-dark.css', 'utf8');
css += `
/* Notes Unit Accordion in Dark Mode */
html[data-theme="dark"] .notes-unit-title {
  color: #f1f5f9 !important;
}
html[data-theme="dark"] .notes-unit-accordion-card {
  background: #111a2e !important;
  border-color: #243352 !important;
}
html[data-theme="dark"] .notes-unit-accordion-card.open .chapter-accordion-header {
  background-color: #162238 !important;
  border-bottom: 1.5px solid #243352 !important;
}
`;
fs.writeFileSync('css/theme-dark.css', css, 'utf8');
console.log('Appended dark mode notes accordion styles to theme-dark.css');
