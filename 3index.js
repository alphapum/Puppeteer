const pupperteer = require('puppeteer');

(async () => {
    const browser = await pupperteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com/');
    /* -----------*/
    const linkLogin = await page.evaluate(() => {
        const linkLogin = document.querySelector('.col-md-4 p a').href
        return linkLogin
    })
    // await page.click('a[href="/login"]')

    // const pagelogin = await browser.newPage();
    await page.goto(linkLogin)

    await page.type("#username", "Pumda", { delay: 100 })
    await page.type("#password", "Pumda1234", { delay: 100 })

    await page.click('input[value="Login"]')


    console.log(linkLogin)

    const linkLogout = await page.evaluate(() => {
        const linkLogout = document.querySelector('.col-md-4 p a').href
        return linkLogout
    })

    var delayInMilliseconds = 3000; //1 second


    setTimeout(async function () {
        //your code to be executed after 1 second
        await page.goto(linkLogout)

        await browser.close();



    }, delayInMilliseconds);





})();
