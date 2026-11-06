const fs = require('fs');

let theme = fs.readFileSync('theme.js', 'utf8');

// Replace if (toDark) setTheme(DARK); with if (toDark) setTheme(DARK); else setTheme(LIGHT, { skipAnimation: true });
const target = 'if (toDark) setTheme(DARK);';
const replacement = `if (toDark) {
      setTheme(DARK);
    } else {
      setTheme(LIGHT, { skipAnimation: true });
    }`;

if (theme.includes(target)) {
  theme = theme.replace(target, replacement);
  fs.writeFileSync('theme.js', theme, 'utf8');
  console.log('Successfully updated theme.js dismissIntro!');
} else {
  console.error('Target string not found in theme.js');
  process.exit(1);
}
