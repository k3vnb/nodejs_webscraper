/* go to google, search a term, take a screenshot */

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({
//       headless: false,
//       devtools: true
//   });
//   const page = await browser.newPage();
//   await page.goto('https://google.com');
//   await page.type('#viewport', 'The color orange', {delay: 100})
//   await page.keyboard.press('Enter');
//   await page.waitForNavigation();
//   await page.screenshot({path: 'example.png'});
//   await browser.close();

// })();



/* create a PDF of a page */

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({
//       headless: true
//   });
//   const page = await browser.newPage();
//   await page.goto('https://learnscraping.com/');
//   await page.pdf({
//       path: '/page.pdf',
//       format: 'A4'
//   })

//   await browser.close();

// })();



/* Getting URL or Title of Current Page */

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({
//       headless: false
//   });
//   const page = await browser.newPage();
//   await page.goto('https://learnscraping.com/');
//   let title = await page.title();
//   console.log(`Title of page: ${title}`);
  
//   let url = await page.url();
//   console.log(`URL of page: ${url}`);

//   await browser.close();

// })();


/* Emulating Mobile Device Web w/ a scraper */

// const puppeteer = require('puppeteer');

// (async () => {
//     const devices = require('puppeteer/DeviceDescriptors');
//     const browser = await puppeteer.launch({
//         headless: false
//     });
//     const page = await browser.newPage();
//     await page.emulate(devices['iPhone X']);
//     await page.goto('https://learnscraping.com/');
  

//     await browser.close();

// })();


/* Using a Proxy Server w/ puppeteer -- get a public proxy server address from a list*/

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ 
        headless: false,
        args: ['--proxy-server=119.28.118.116:1080']
    });
    const page = await browser.newPage();
  
    await page.goto('https://httpbin.org/ip')

    debugger;
    // await browser.close();

})();

