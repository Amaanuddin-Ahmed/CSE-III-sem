const fs = require('fs');
const content = fs.readFileSync('pwa-install.js', 'utf8');
const pos = content.indexOf('innerHTML');
console.log(content.substring(pos - 100, pos + 800));
