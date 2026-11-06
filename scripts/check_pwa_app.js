const fs = require('fs');
const app = fs.readFileSync('app.js', 'utf8');
const pos = app.indexOf('Add MGIT PYQ Hub');
console.log('pos in app.js:', pos);
if (pos !== -1) console.log(app.substring(pos - 150, pos + 800));
