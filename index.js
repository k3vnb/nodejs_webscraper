const request = require('request-promise');
const cheerio = require('cheerio');

const URL = 'https://www.imdb.com/title/tt0089885/?ref_=nv_sr_1';

(async () => {

    const response = await request(URL);

    console.log(response)

})()