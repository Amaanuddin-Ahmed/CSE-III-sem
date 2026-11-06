const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
const pos = css.indexOf('.pwa-install-prompt');
console.log(css.substring(pos, pos + 400));
