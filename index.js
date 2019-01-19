const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      devtools: true
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.type('#viewport', 'The color orange', {delay: 100})
  await page.keyboard.press('Enter');
  await page.waitForNavigation();
  await page.screenshot({path: 'example.png'});
  await browser.close();

})();