const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const pos = html.indexOf('id="notesChapterSelect"');
console.log(html.substring(pos - 50, pos + 200));
