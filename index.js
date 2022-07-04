const pupperteer = require('puppeteer');

(async () => {
    const browser = await pupperteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://v89infinity.com/fresh-air-positive-pressure/');
    /* -----------*/
        const title = await page.title();
        const url = await page.url();
        console.log(title, url);
    // Title
    
        await page.screenshot({ path: "v89page.png" });
    // Save page to png
        const grabParagraph = await page.evaluate(() => {
            const pgTag = document.querySelector(".wpforms-field-description"); 
            return pgTag.innerText;
        });
    
        console.log(grabParagraph);
    // Tag Page

    const grapTechnologies = await page.evaluate(() => {
        const techTags = document.querySelectorAll(".elementor-widget-container h3");
        let technologies = [];
        // console.log(techTags);
        techTags.forEach((tag) => {
            
            technologies.push(tag.innerHTML);
        });
        return technologies;
    });

    console.log(grapTechnologies);

    await browser.close();

})();
