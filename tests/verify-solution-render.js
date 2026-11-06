const http = require('http');

http.get('http://localhost:5050/data/solutions/COA.json', (res) => {
  let raw = '';
  res.on('data', chunk => raw += chunk);
  res.on('end', () => {
    try {
      const data = JSON.parse(raw);
      const q1 = data.solutions['COA-A5-0383'];
      const q2 = data.solutions['coa|explain the cache incoherence'];
      const q3 = data.solutions['COA-B3-0250']; // Booth multiplication 10111 * 10011
      const q4 = data.solutions['COA-B4-0351']; // Cache direct mapping calculation
      
      console.log('--- TEST VERIFICATION OF SERVED SOLUTIONS ---');
      console.log('HTTP Status:', res.statusCode);
      console.log('Total Solutions in JSON:', Object.keys(data.solutions).length);
      console.log('Q1 (Cache Incoherence by ID) Length:', q1 ? q1.length : 'MISSING');
      console.log('Q2 (Cache Incoherence by NormKey) Length:', q2 ? q2.length : 'MISSING');
      console.log('Q3 (Booth 10111*10011 Trace Table present):', q3 && q3.includes('| Cycle |'));
      console.log('Q4 (Cache 256x16 Direct Mapping Math present):', q4 && q4.includes('Word Field = 5 bits'));
      
      if (q1 && !q1.includes('MR-25 Regulation') && q3 && q4) {
        console.log('>>> SUCCESS: All solutions verified live on local preview server!');
      } else {
        console.error('>>> FAILURE: Some solutions failed verification.');
        process.exit(1);
      }
    } catch (e) {
      console.error('JSON Parse Error:', e);
      process.exit(1);
    }
  });
}).on('error', err => {
  console.error('HTTP Request failed:', err);
  process.exit(1);
});
