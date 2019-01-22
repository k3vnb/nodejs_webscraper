const puppeteer = require('puppeteer');
const twitter = require('./twitter');

(async () => {

    const USERNAME = 'fakeusername';
    const PASSWORD = 'fakepassword';
    await twitter.initialize();

    await twitter.login(USERNAME, PASSWORD);



    debugger;
    // await browser.close();

})();
