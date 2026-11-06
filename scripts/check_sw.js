const fs = require('fs');
const sw = fs.readFileSync('sw.js', 'utf8');
const pos = sw.indexOf('CACHE_NAME =');
console.log(sw.substring(pos, pos + 80));
