//instagram scraper

const request = require('request-promise');
const cheerio = require('cheerio');

(async () => {
    const USERNAME = 'k3vnb';
    const BASE_URL = `https://instagram.com/${USERNAME}`;

    let response = await request(BASE_URL);
    let $ = cheerio.load(response);

// .eq takes which child, in this case its child 3 (0-indexed so it is the fourth script tag w/ text/javascript type) that contains our json data
    let script = $('script[type="text/javascript"]').eq(3).html();

    let script_regex = /window._sharedData = (.+);/g.exec(script);
    console.log(script_regex);
    debugger;
})()