const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const darkRules = [];
const regex = /\[data-theme=["']?dark["']?\]\s+([^{]+)\{([^}]+)\}/g;
let m;
while ((m = regex.exec(css)) !== null) {
  const sel = m[1].trim();
  const body = m[2].trim();
  if (sel.includes('btn') || sel.includes('guideline') || sel.includes('banner') || sel.includes('modal') || sel.includes('pwa') || sel.includes('home-screen') || sel.includes('select') || sel.includes('must-know')) {
    darkRules.push({ sel, body });
  }
}

console.log(`Found ${darkRules.length} matching dark theme rules:`);
darkRules.slice(0, 15).forEach(r => console.log(r.sel, '-->', r.body.replace(/\s+/g, ' ').substring(0, 80)));
