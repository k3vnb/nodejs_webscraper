const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ 
        headless: false
        // ,
        // args: ['--proxy-server=45.125.222.9:8080']
    });
    const page = await browser.newPage();
  
    await page.goto('https://amazon.com')
    await page.type('.search-key-box input', 'tent', {delay: 10})
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    const link = await page.url();
    console.log(link);
    // await browser.close();

})();
