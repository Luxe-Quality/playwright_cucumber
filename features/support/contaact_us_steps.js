const {When} = require("@cucumber/cucumber");
const {ContactUsPage} = require("../../page_object/contact_us.page");

When('User fill all fields on Contact US form', async function() {
    let contactUsPage = new ContactUsPage(this.page);
    await contactUsPage.fillFormContactUs(
        "John Smite",
        "Corporation of Good",
        "test.inc@mail.com",
        2,
        'cz',
        "987654321",
        'Prague',
        'Workspace',
        'text for notes text field');
})