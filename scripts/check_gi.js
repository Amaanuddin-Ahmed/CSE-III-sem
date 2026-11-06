const fs = require('fs');
const gi = fs.readFileSync('.gitignore', 'utf8');
console.log('Includes .env.local:', gi.includes('.env.local') || gi.includes('.env*.local') || gi.includes('.env'));
