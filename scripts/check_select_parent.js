const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const pos = html.indexOf('id="notesChapterSelect"');
console.log(html.substring(pos - 250, pos + 100));
