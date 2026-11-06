const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const head = html.substring(0, html.indexOf('</head>'));
const links = head.match(/<link[^>]*>/gi) || [];
links.forEach(l => console.log(l));
