const {When, Then} = require("@cucumber/cucumber");
const {AllAccessPage} = require("../../page_object/all_access.page");

let allAccessPage;
let payload;

When('Scroll page down till the "Connect with a WeWork All Access expert today" form',
    async function () {
        allAccessPage = new AllAccessPage(this.page);
        await allAccessPage.scrollIntoView(allAccessPage.allAccessFormContainer);
    });

Then('Fill in all fields in the All Access form',
    async function () {
        allAccessPage = new AllAccessPage(this.page);
        await allAccessPage.fillFormAllAccess(
            "John Smite",
            "testemail@mail.com",
            'ua',
            "123456789",
            2);
    });

Then('Click on the "Submit" button in the All Access form',
    async function () {
        allAccessPage = new AllAccessPage(this.page);
        payload = await allAccessPage.clickButtonWithPayloadRequest(allAccessPage.allAccessFormSubmitButton);
    });

Then('Check data in payload of the event "leads" in the All Access page',
    async function (data) {
        allAccessPage = new AllAccessPage(this.page);
        await allAccessPage.checkDataFromPayloadRequest(data, payload);
    })
