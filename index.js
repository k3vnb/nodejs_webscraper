
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    await page.goto('https://httpbin.org/ip')

    debugger;
    // await browser.close();

})();
