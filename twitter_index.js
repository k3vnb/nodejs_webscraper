const puppeteer = require('puppeteer');

(async () => {
    const BASE_URL = 'https://twitter.com';
    const LOGIN_URL = 'https://twitter.com/login';
    const USERNAME = 'berrysven';
    const PASSWORD = 'numb3r1';
    
    const browser = await puppeteer.launch({ 
        headless: false    });
    const page = await browser.newPage();
  
    await page.goto(LOGIN_URL);
    await page.waitFor(500);
    await page.waitFor('input[name="session[username_or_email]"]');
    await page.type('input[name="session[username_or_email]"]', USERNAME);
    await page.type('input[name="session[password]"]', PASSWORD);
    await page.click('#page-container > div > div.signin-wrapper > form > div.clearfix > button');

    debugger;
    // await browser.close();

})();

