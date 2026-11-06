const https = require('https');
const fs = require('fs');

const allFolders = {
  'DM_root': '1x4QjKc-CXLoCSDTqi6H2NUCtExuBkAMU',
  'DM_notes': '1XXvoFAhADv1nh8oteiHOTj1mZ2f72fIM',
  'COA_root': '1axgSIkJ5-WfD_xZpna8KFKnNxcaZ0AyX',
  'COA_notes': '1MmMPtCuHP-4M5HcofAwPSVCIXW0Bt55x',
  'OOPJ_root': '1WbWPKT2RWOdEQttkny0cwTHYTM4g62vP',
  'OOPJ_notes': '1V066YGywMdVNPIX1JJ1UEvehlS25C9qx',
  'DBMS_root': '1Af4RdwkOHfK-lM8SuNoeao0aPYiIf6hc',
  'DBMS_notes': '1DCTxebYJ3A3H2MMmZxNQEdYP-PS6w7jJ',
  'SE_root': '16MpaH50OsmOKyAse1V5oQB7vdDqKYQqX',
  'SE_notes': '1kovfVmnjEm5_lF_OzAJXGB04netXHIMT',
  'ES_root': '1jQq2Qr0cTHYbun0gyx1yU7wmRkwjxYi0',
  'ES_notes': '12C_bD_zCLFly1EobW9cFsmZ5PlW9PN3A',
  'IE_root': '1WHMeVXQY0TlxZm6F4HX0YQisRSniPdUi',
  'IE_notes': '1Ac3gEX38khTx85EGXGqoXxUPjwkJKcOx'
};

const text = fs.readFileSync('CSE-III-sem/pyq-data.js', 'utf8');
const idMatches = text.match(/"driveFileId":\s*"([^"]+)"/g) || [];
const driveIdsInData = new Set(idMatches.map(m => m.split('"')[3]));
console.log('Total driveFileIds currently in pyq-data.js:', driveIdsInData.size);

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  for (const [name, fid] of Object.entries(allFolders)) {
    try {
      const html = await fetchUrl(`https://drive.google.com/drive/folders/${fid}`);
      const matches = html.match(/([^"\\\/]+\.(?:pdf|ppt|pptx|docx))/gi) || [];
      const filenames = [...new Set(matches.filter(fn => !fn.startsWith('font') && fn.length < 100))];
      
      const newFiles = [];
      for (const fn of filenames) {
        const pos = html.indexOf(fn);
        const chunk = html.substring(Math.max(0, pos - 600), Math.min(html.length, pos + 600));
        const ids = (chunk.match(/["']([A-Za-z0-9_-]{28,35})["']/g) || [])
          .map(s => s.replace(/["']/g, ''))
          .filter(i => i !== fid && !i.startsWith('drive') && !i.startsWith('application'));
        const foundId = ids[0];
        if (foundId && !driveIdsInData.has(foundId)) {
          newFiles.push({ fn, foundId });
        }
      }
      console.log(`=== ${name} === Total files in folder: ${filenames.length}, New/Unlinked: ${newFiles.length}`);
      newFiles.forEach(f => console.log(`  * ${f.fn} -> ${f.foundId}`));
    } catch (e) {
      console.log(`Error fetching ${name}:`, e.message);
    }
  }
}

run();
