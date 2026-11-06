const fs = require('fs');
const css = fs.readFileSync('css/theme-dark.css', 'utf8');
console.log('theme-dark.css length:', css.length);
console.log('First 500 chars:\n', css.substring(0, 500));
