const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
const pos = css.indexOf('#notesChapterSelect');
console.log('pos in style.css:', pos);
if (pos !== -1) console.log(css.substring(pos, pos + 300));

const darkCss = fs.readFileSync('css/theme-dark.css', 'utf8');
const dpos = darkCss.indexOf('#notesChapterSelect');
console.log('pos in theme-dark.css:', dpos);
if (dpos !== -1) console.log(darkCss.substring(dpos, dpos + 300));
