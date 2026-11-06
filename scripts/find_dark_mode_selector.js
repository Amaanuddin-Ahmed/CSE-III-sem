const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('.dark-mode') || l.includes('body.dark') || l.includes('[data-theme=')) {
    if (i < 500) {
      console.log(i + 1, l);
    }
  }
});
