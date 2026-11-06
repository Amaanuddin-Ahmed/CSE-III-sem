const fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('.cache/drive_manifest.json', 'utf8'));
console.log('Manifest items count:', manifest.length);
console.log('First 3 items:', manifest.slice(0, 3));
const coaItems = manifest.filter(m => m.subject === 'COA' || (m.folderPath && m.folderPath.includes('COA')));
console.log('COA items in manifest:', coaItems.length);
coaItems.forEach(i => console.log(' -', i.name || i.fileName, '|', i.id, '|', i.folderPath || i.folder));
