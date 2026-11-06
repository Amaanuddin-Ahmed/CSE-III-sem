const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const regex = /([^{}]+)\{([^}]+)\}/g;
let m;
while ((m = regex.exec(css)) !== null) {
  const sel = m[1].trim();
  const body = m[2].trim();
  if (sel.includes('agreeContribBtn') || (sel.includes('btn-action-primary') && !sel.includes(':hover'))) {
    console.log(sel, '-->', body.replace(/\s+/g, ' '));
  }
}
