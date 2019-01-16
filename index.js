//instagram scraper

const request = require('request-promise');
const cheerio = require('cheerio');

(async () => {
    const USERNAME = 'k3vnb33';
    const BASE_URL = `https://instagram.com/${USERNAME}`;

    let response = await request(BASE_URL);
    let $ = cheerio.load(response);

// .eq takes which child, in this case its child 3 (0-indexed so it is the fourth script tag w/ text/javascript type) that contains our json data
    let script = $('script[type="text/javascript"]').eq(3).html();

    let script_regex = /window._sharedData = (.+);/g.exec(script);
    let { entry_data: { ProfilePage: { [0] : { graphql : { user } } } } } = JSON.parse(script_regex[1]);

    // object.entry_data.ProfilePage[0].graphql.user
    console.log(user);
    debugger;
})()
