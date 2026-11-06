const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const pos = html.indexOf('Add MGIT PYQ Hub');
console.log('pos in html:', pos);
if (pos !== -1) console.log(html.substring(pos - 150, pos + 500));
