const fs = require('fs');
const content = fs.readFileSync('pwa-install.js', 'utf8');
const pos = content.indexOf('className =');
console.log(content.substring(pos, pos + 200));
