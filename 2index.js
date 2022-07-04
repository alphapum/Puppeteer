const pupperteer = require('puppeteer');

(async () => {
    const browser = await pupperteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com/');
    /* -----------*/
    const grabQuotes = await page.evaluate(() => {
        const quotes = document.querySelectorAll('.quote');
        let quotesArr = [];
        quotes.forEach((quoteTag) => {
            const quoteInfo = quoteTag.querySelectorAll('span');
            const actualQuote = quoteInfo[0]
            const actualAuthor = quoteInfo[1]

            const authorName = actualAuthor.querySelector("small")

            quotesArr.push({
                quote: actualQuote.innerText,
                author: authorName.innerText
            })
        })
        return quotesArr
    })
    // query in query in query
    console.log(grabQuotes)
    await browser.close();

})();
