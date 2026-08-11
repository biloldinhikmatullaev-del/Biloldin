const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
  { id: 'project-1', url: 'https://e1d3c9d5-d59b-4554-a44c-f0db4a30b7ae.netlify.app/' },
  { id: 'project-2', url: 'https://e1fc4517-bd36-4111-86e0-86db280e2519.netlify.app/' },
  { id: 'project-3', url: 'https://f260cc14-038e-4d65-8954-9d641bdd92f8.netlify.app/' },
  { id: 'project-4', url: 'https://6202be6a-ece6-4fb9-b7db-69e85b09d489.netlify.app/' },
  { id: 'project-5', url: 'https://662357a7-78e1-45f3-bf30-2ca7089b5de7.netlify.app/' },
  { id: 'project-6', url: 'https://779b1b15-08c4-48f6-95c4-cde9c61c83ae.netlify.app/' },
  { id: 'project-7', url: 'https://72bc65b8-2e18-4568-ad72-189b2a29a9a2.netlify.app/' },
  { id: 'project-8', url: 'https://80b92941-aaa1-4b11-b152-968392016f2f.netlify.app/' },
  { id: 'project-9', url: 'https://9af5e59c-9b6b-47dc-9213-5720daf41aa2.netlify.app/' },
  { id: 'project-10', url: 'https://45c9403a-7c5c-42bd-9fca-f82a52d21856.netlify.app/' },
];

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  for (const item of urls) {
    console.log(`Taking screenshot of ${item.url}...`);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // small delay just in case of animations
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({ path: `./public/screenshots/${item.id}.jpg`, type: 'jpeg', quality: 80 });
      console.log(`Saved ${item.id}.jpg`);
    } catch (err) {
      console.error(`Error on ${item.url}:`, err);
    }
  }

  await browser.close();
  console.log('Done!');
})();
