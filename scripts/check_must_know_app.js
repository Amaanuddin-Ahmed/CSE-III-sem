const fs = require('fs');
const app = fs.readFileSync('app.js', 'utf8');
const pos = app.indexOf('Exam Must-Know');
console.log('pos in app.js:', pos);
if (pos !== -1) console.log(app.substring(pos - 100, pos + 400));
