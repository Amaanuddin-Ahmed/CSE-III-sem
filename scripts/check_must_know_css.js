const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
const pos = css.indexOf('Exam Must-Know') !== -1 ? css.indexOf('Exam Must-Know') : css.indexOf('must-know');
console.log('pos:', pos);
if (pos !== -1) console.log(css.substring(pos - 100, pos + 500));
