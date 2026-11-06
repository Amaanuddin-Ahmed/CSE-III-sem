const fs = require('fs');

if (fs.existsSync('pwa-install.js')) {
  console.log('--- pwa-install.js ---');
  console.log(fs.readFileSync('pwa-install.js', 'utf8').substring(0, 1500));
}

if (fs.existsSync('popup-manager.js')) {
  console.log('--- popup-manager.js ---');
  console.log(fs.readFileSync('popup-manager.js', 'utf8').substring(0, 1500));
}
