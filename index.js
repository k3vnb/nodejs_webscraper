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

    // object.entry_data.ProfilePage[0].graphql.user
    let { entry_data: { ProfilePage: { [0] : { graphql : { user } } } } } = JSON.parse(script_regex[1]);

    let instagram_data = {
        followers: user.edge_followed_by.count,
        following: user.edge_follow.count,
        uploads: user.edge_owner_to_timeline_media.count,
        full_name: user.full_name,
        picture_url: user.profile_pic_url_hd

    }

    console.log(instagram_data);
    debugger;
})()
