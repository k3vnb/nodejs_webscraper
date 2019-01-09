const request = require('request-promise');
const cheerio = require('cheerio');

const URL = 'https://www.imdb.com/title/tt0089885/?ref_=nv_sr_1';

(async () => {

    const response = await request({
        uri: URL,
        headers: {
            'User-Agent': 'Request-Promise'
        }
    });

    let $ = cheerio.load(response);

    let title = $('div[class="title_wrapper"] > h1').text();
    let rating = $('span[itemprop="ratingValue"]').text();

    console.log(title, rating);

})()