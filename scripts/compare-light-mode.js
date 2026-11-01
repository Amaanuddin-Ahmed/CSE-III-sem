// scripts/compare-light-mode.js
const fs = require('fs');
const path = require('path');
const http = require('http');
const { chromium } = require('playwright');

const PORT = 3458;
const rootDir = path.resolve(__dirname, '..');
const baselineDir = path.join(rootDir, 'tests', 'visual', 'baseline');
const currentLightDir = path.join(rootDir, 'tests', 'visual', 'current-light');
fs.mkdirSync(currentLightDir, { recursive: true });

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(rootDir, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, async () => {
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: 'mobile', width: 390, height: 844 },
    { name: 'desktop', width: 1366, height: 768 }
  ];

  let totalDiffs = {};

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.addInitScript(() => {
      localStorage.setItem('mgit_tour_seen_v2', 'true');
      localStorage.setItem('mgit_theme', 'light');
    });

    // Capture current light mode screenshots for exact same flow
    await page.goto(`http://localhost:${PORT}/?theme=reset`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    const homeCurrent = path.join(currentLightDir, `${vp.name}-01-home.png`);
    await page.screenshot({ path: homeCurrent, fullPage: false });

    // Mid-2
    const mid2Btn = await page.$('[data-exam-id="mid2"]');
    if (mid2Btn) {
      await mid2Btn.click();
      await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(currentLightDir, `${vp.name}-02-subjects.png`), fullPage: false });
    }

    // Compare 01-home and 02-subjects
    const diffCalcPage = await browser.newPage();
    for (const step of ['01-home.png', '02-subjects.png']) {
      const baseFile = path.join(baselineDir, `${vp.name}-${step}`);
      const currFile = path.join(currentLightDir, `${vp.name}-${step}`);

      if (fs.existsSync(baseFile) && fs.existsSync(currFile)) {
        const baseB64 = fs.readFileSync(baseFile).toString('base64');
        const currB64 = fs.readFileSync(currFile).toString('base64');

        const diffResult = await diffCalcPage.evaluate(async ({ b64A, b64B }) => {
          function loadImg(b64) {
            return new Promise((resolve) => {
              const img = new Image();
              img.onload = () => resolve(img);
              img.src = 'data:image/png;base64,' + b64;
            });
          }
          const imgA = await loadImg(b64A);
          const imgB = await loadImg(b64B);

          const canvas = document.createElement('canvas');
          canvas.width = imgA.width;
          canvas.height = imgA.height;
          const ctx = canvas.getContext('2d');

          ctx.drawImage(imgA, 0, 0);
          const dataA = ctx.getImageData(0, 0, imgA.width, imgA.height).data;

          ctx.clearRect(0, 0, imgA.width, imgA.height);
          ctx.drawImage(imgB, 0, 0);
          const dataB = ctx.getImageData(0, 0, imgB.width, imgB.height).data;

          let diffPixels = 0;
          const totalPixels = imgA.width * imgA.height;

          // Ignore top-right header moon button bounding box where the new theme icon was placed
          for (let i = 0; i < dataA.length; i += 4) {
            const dr = Math.abs(dataA[i] - dataB[i]);
            const dg = Math.abs(dataA[i + 1] - dataB[i + 1]);
            const db = Math.abs(dataA[i + 2] - dataB[i + 2]);
            const da = Math.abs(dataA[i + 3] - dataB[i + 3]);
            if (dr + dg + db + da > 20) {
              diffPixels++;
            }
          }
          return {
            diffPixels,
            totalPixels,
            percent: (diffPixels / totalPixels) * 100
          };
        }, { b64A: baseB64, b64B: currB64 });

        totalDiffs[`${vp.name}-${step}`] = diffResult;
        console.log(`Diff for ${vp.name}-${step}: ${diffResult.diffPixels} / ${diffResult.totalPixels} (${diffResult.percent.toFixed(3)}%)`);
      }
    }
    await diffCalcPage.close();
    await page.close();
  }

  await browser.close();
  server.close(() => {
    console.log('Light mode comparison complete:', totalDiffs);
    process.exit(0);
  });
});
