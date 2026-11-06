const fs = require('fs');
['index.html', 'scope-map.js', 'app.js'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let pos = 0;
  while ((pos = content.indexOf('Upcoming', pos)) !== -1) {
    console.log(f, 'at pos', pos, ':', content.substring(Math.max(0, pos - 40), pos + 50).replace(/\s+/g, ' '));
    pos += 8;
  }
});
