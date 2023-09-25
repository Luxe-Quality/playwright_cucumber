const {When, Then} = require("@cucumber/cucumber");
const {OnDemandPage} = require("../../page_object/on_demand.page");

let onDemandPage;
let payload;

When('Scroll page down till the "Get updated when WeWork On Demand is available in your city" form',
    async function () {
        onDemandPage = new OnDemandPage(this.page);
        await onDemandPage.scrollIntoView(onDemandPage.onDemandFormContainer);
    });

Then('Fill in all fields in the On Demand form',
    async function () {
        onDemandPage = new OnDemandPage(this.page);
        await onDemandPage.fillFormOnDemand("John Smite", "Corporation of Good", "test.inc@mail.com", 2, 'cz', "987654321", 'Prague');
    });

Then('Click on the "Submit" button in the On Demand form',
    async function () {
        onDemandPage = new OnDemandPage(this.page);
        payload = await onDemandPage.clickButtonWithPayloadRequest(onDemandPage.onDemandFormSubmitButton);
    });

Then('Check data in payload of the event "leads" in the On Demand page',
    async function (data) {
        onDemandPage = new OnDemandPage(this.page);
        await onDemandPage.checkDataFromPayloadRequest(data, payload);
    })
