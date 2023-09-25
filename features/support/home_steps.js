const {When, Then} = require("@cucumber/cucumber");
const {HomePage} = require("../../page_object/home.page");

let homePage;


Then('Click on the link of the top banner "Learn more"',
    async function () {
        homePage = new HomePage(this.page);
        const [newPage] = await Promise.all([
            this.context.waitForEvent('page'),
            await homePage.clickLink(homePage.bannerLearnMoreLink)
        ])
        await newPage.waitForLoadState();
        this.page = newPage;
    });

Then('Select {string} city from the dropdown find your flexible workspace module',
    async function (locationCity) {
        homePage = new HomePage(this.page);
        await homePage.selectLocationsCityDropdown(locationCity);
    });
