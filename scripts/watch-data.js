// scripts/watch-data.js
// Watches the data/ folder for changes and runs the CSV-to-JSON conversion automatically.
// Usage: node scripts/watch-data.js

import { watch } from 'fs';
import { exec } from 'child_process';
import path from 'path';

const dataDir = path.resolve('data');
const convertScript = 'npm run convert-csv';

console.log(`[watch-data] Watching for changes in ${dataDir} ...`);

function runConvertScript(reason) {
  console.log(`[watch-data] Triggering CSV conversion (${reason})...`);
  exec(convertScript, (err, stdout, stderr) => {
    if (err) {
      console.error('[watch-data] Error running conversion:', err);
    } else {
      console.log('[watch-data] Conversion complete.');
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
    }
  });
}

// Run conversion once at startup to ensure collections are always generated
runConvertScript('startup');

let timeout = null;

watch(dataDir, { recursive: true }, (eventType, filename) => {
  console.log(`[watch-data] File event: ${eventType} - ${filename}`);
  if (filename && (filename.endsWith('.csv') || filename.endsWith('.CSV'))) {
    console.log(`[watch-data] Detected change: ${filename} (${eventType})`);
    if (timeout) clearTimeout(timeout);
    // Debounce rapid changes
    timeout = setTimeout(() => {
      runConvertScript('file change');
    }, 300);
  }
});
