const puppeteer = require('puppeteer');

const BASE_URL = 'https://twitter.com';
const LOGIN_URL = 'https://twitter.com/login';


let browser = null;
let page = null;

const twitter = {
    initialize: async () => {

        browser = await puppeteer.launch({
            headless: false
        });
        page = await browser.newPage();

        await page.goto(LOGIN_URL);
    },

    login: async (username, password) => {

        await page.goto(LOGIN_URL);
        await page.waitFor('input[name="session[username_or_email]"]');
        await page.type('input[name="session[username_or_email]"]', username);
        await page.keyboard.press('Tab');
        await page.type('input[name="session[password]"]', password);
        await page.click('#page-container > div > div.signin-wrapper > form > div.clearfix > button');

    },

    end: async () => {
        await browser.close();
    }
};

module.exports = twitter;