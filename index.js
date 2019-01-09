const amazon = require('./amazon');

(async () => {

    await amazon.initialize();

    let details = await amazon.getProductDetails('https://www.amazon.com/Apple-Retina-display-3-4GHz-quad-core/dp/B071G2S8LZ/ref=sr_1_3?s=pc&ie=UTF8&qid=1547077462&sr=1-3&keywords=imac+27');

    debugger;


})();