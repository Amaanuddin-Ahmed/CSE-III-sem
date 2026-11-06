const fs = require('fs');
const path = require('path');

function search(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (f === 'node_modules' || f === '.git' || f === '.cache') continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      search(full);
    } else if (f.endsWith('.js') || f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.json')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('Add MGIT') || content.includes('Home Screen') || content.includes('Add to Home')) {
        console.log('Found match in:', full);
      }
    }
  }
}

search('.');
