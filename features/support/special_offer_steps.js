const {When, Then} = require("@cucumber/cucumber");
const {SpecialOffersPage} = require("../../page_object/special_offers.page");
const {expect} = require("@playwright/test");

let specialOffersPage;

When('Scroll page down till the "Get in touch to redeem your special discount today" form',
    async function () {
        specialOffersPage = new SpecialOffersPage(this.page);
        await specialOffersPage.scrollIntoView(specialOffersPage.specialOfferFormContainer);
    });

Then('Fill in all fields in the special discount form',
    async function () {
        specialOffersPage = new SpecialOffersPage(this.page);
        await specialOffersPage.fillFormSpecialOffer("John Smite", "Corporation of Good", "test.inc@mail.com", 2, 'ua', "123456789", 'Warsaw');
    });

Then('Click on the "Submit" button in the special discount form',
    async function () {
        specialOffersPage = new SpecialOffersPage(this.page);
        await specialOffersPage.clickSubmitButton(specialOffersPage.specialOfferFormSubmitButton);
    });

Then('Success message is displayed',
    async function () {
        specialOffersPage = new SpecialOffersPage(this.page);
        expect(await specialOffersPage.successMessageIsDisplayed()).toBeTruthy();
    })
