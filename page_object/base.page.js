const {expect} = require("@playwright/test");

class BasePage {

    constructor(page) {
        this.page = page
    }

    async chooseLabelInDropdown(dropdown, label) {
        await this.page.waitForSelector(dropdown)
        let dropdownEl = await this.page.$(dropdown)
        await dropdownEl.selectOption({label: label})
    }

    async chooseIndexInDropdown(dropdown, index) {
        await this.page.waitForSelector(dropdown)
        let dropdownEl = await this.page.$(dropdown)
        await dropdownEl.selectOption({index: index})
    }

     async delayedCheck() {
         let process_complete = false;
         if (!process_complete) {
             setTimeout(() => {
                 process_complete = true;
             }, 1000);
         }
     }

     async scrollIntoView(selector) {
         await this.page.locator(selector).scrollIntoViewIfNeeded();
     }

     async navigateToPage(url) {
         await this.page.goto(url);
         await this.page.waitForLoadState('load');
     }

     async clickSubmitButton(selector) {
         await this.page.click(selector);
         await this.page.waitForLoadState('load');
     }

    async clickLink(selector) {
        await this.page.click(selector);
        await this.page.waitForLoadState('load');
    }

    async clickButtonWithPayloadRequest(selector) {
        const [request] = await Promise.all([
            this.page.waitForRequest(request => (/leads/).test(request.url())
                && request.method() === "POST"),
            await this.page.click(selector)
        ]);
        return request.postDataJSON();
    }

    async checkDataFromPayloadRequest(data, payload) {
        data.raw().forEach((dataItem) => {
            expect(dataItem[1]).toEqual(payload[dataItem[0]].toString());
        });
    }

    async fillFullName(selector, name) {
        await this.page.fill(selector, name);
    }

    async fillTextField(selector, text) {
        await this.page.fill(selector, text);
    }

    async fillCompanyName(selector, name) {
        await this.page.fill(selector, name);
    }

    async fillEmail(selector, email) {
        await this.page.fill(selector, email);
    }

    async fillPhone(selector, phone) {
        await this.page.fill(selector, phone);
    }

    async selectCompanySize(selector, index) {
        await this.chooseIndexInDropdown(selector, index);
    }

    async selectLocations(selector, labelName) {
        await this.chooseLabelInDropdown(selector, labelName);
    }

    async selectCountryPhonePrefix(selector, countryCode) {
        this.page.dispatchEvent(selector, 'click');
        await this.page.locator(`[data-country-code="${countryCode}"]`).click();
    }

}

module.exports = {BasePage};
