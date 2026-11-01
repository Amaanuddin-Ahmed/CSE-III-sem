#!/usr/bin/env node
/**
 * Stamp the deployed build hash into the service-worker cache name and the
 * footer version label. Run this before every production deploy:
 *
 *   npm run stamp
 *
 * On Vercel, VERCEL_GIT_COMMIT_SHA is available; locally we fall back to git.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.join(__dirname, '..');

function shortHash() {
  if (process.env.VERCEL_GIT_COMMIT_SHA) {
    return process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7);
  }
  try {
    return execSync('git rev-parse --short=7 HEAD', { cwd: root, encoding: 'utf8' }).trim();
  } catch (e) {
    return 'dev';
  }
}

const hash = shortHash();
const version = `v2026.11.01-${hash}`;

// Update sw.js cache name
const swPath = path.join(root, 'sw.js');
let sw = fs.readFileSync(swPath, 'utf8');
sw = sw.replace(/const CACHE_NAME = 'mgit-hub-v[^']+';/, `const CACHE_NAME = 'mgit-hub-${version}';`);
fs.writeFileSync(swPath, sw);

// Write version.json (never inject into UI footer)
const versionPath = path.join(root, 'version.json');
fs.writeFileSync(versionPath, JSON.stringify({ version, commit: hash, generatedAt: new Date().toISOString() }, null, 2) + '\n');

console.log(`Stamped build ${version}`);
