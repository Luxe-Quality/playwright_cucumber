const {Then} = require("@cucumber/cucumber");
const {BuildingsPage} = require("../../page_object/buldings.page");

let buildingPage;
let payload;

Then('Select first building in search results',
    async function () {
    buildingPage = new BuildingsPage(this.page)
        await buildingPage.clickFirstSearchResultElement();
    });

Then('Fill in all fields in the Get in touch form',
    async function () {
        buildingPage = new BuildingsPage(this.page);
        await buildingPage.fillFormGetInTouch("Test Lead", "test.lead@test.com", 'ua', "987654321", "4", 'Flexible access to buildings');
    });

Then('Click on the "Submit" button in the Get in touch form',
    async function () {
        buildingPage = new BuildingsPage(this.page);
        payload = await buildingPage.clickButtonWithPayloadRequest(buildingPage.getInTouchFormSubmitButton);
    });

Then('Check data in payload of the event "leads" in the Get in touch page',
    async function (data) {
        buildingPage = new BuildingsPage(this.page);
        await buildingPage.checkDataFromPayloadRequest(data, payload);
    })
