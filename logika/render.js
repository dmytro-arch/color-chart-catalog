const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [file, out, mode] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  await p.goto('file://' + path.resolve(file), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  if (mode === 'deck') {
    const over = await p.evaluate(() => [...document.querySelectorAll('.slide')].map((s, i) => {
      const r = s.getBoundingClientRect(); const bad = [];
      s.querySelectorAll('*').forEach(e => { const q = e.getBoundingClientRect(); if (q.height && q.bottom > r.bottom - 50 && !e.closest('.foot')) bad.push(e.tagName); });
      return bad.length ? (i + 1) + ' ' + bad.slice(0, 3).join(',') : null;
    }).filter(Boolean));
    console.log('overflow:', JSON.stringify(over));
    await p.pdf({ path: out, width: '1280px', height: '720px', printBackground: true });
  } else {
    await p.pdf({ path: out, format: 'A4', printBackground: true, margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' } });
  }
  await b.close();
})();
