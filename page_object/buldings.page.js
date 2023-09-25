const {BasePage} = require("./base.page");

class BuildingsPage extends BasePage{
    page;
    logo = 'div.logo';
    firstSearchResultElement = '#results .search-card:nth-child(1)';
    getInTouchFormNameInput = '.get-in-touch-form #fullName';
    getInTouchFormEmailInput = '.get-in-touch-form #email';
    getInTouchFormCountrySelectDropdown = '.get-in-touch-form .iti__selected-flag';
    getInTouchFormPhoneInput = '.get-in-touch-form #phone';
    getInTouchFormCapacityInput = '.get-in-touch-form #desiredCapacity';
    getInTouchFormDateButton = '.get-in-touch-form #move-in-date';
    getIntouchFormTodayDate = '.get-in-touch-form .flatpickr-day.today'
    getInTouchFormInterestDropdown = '.get-in-touch-form  #lead_product-interests-select';
    getInTouchFormSubmitButton = '.get-in-touch-form  #step1Submit';

    constructor(page) {
        super(page);
        this.page = page;
    }

    //check if the page is loaded
    async checkThatPageIsOpen() {
        await this.page.waitForLoadState('load');
        return this.page.waitForSelector(this.logo).then(() => true, () => false);
    }

    async clickFirstSearchResultElement(){
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.click(this.firstSearchResultElement);
    }

    async fillCapacityInput(capacity){
        await this.page.evaluate(selector => {document.querySelector(selector).value = "";}, this.getInTouchFormCapacityInput);
        await this.page.type(this.getInTouchFormCapacityInput, capacity);
    }

    async setDateInCalendar(){
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.click(this.getInTouchFormDateButton);
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.click(this.getIntouchFormTodayDate);
    }

    async selectCountryPhonePrefixGetInTouchForm(selector, countryCode) {
        this.page.dispatchEvent(selector, 'click');
        await this.page.locator(`.get-in-touch-form [data-country-code="${countryCode}"]`).click();
    }

    async selectInterestDropdown(dropdown, index) {
        await this.page.click('.get-in-touch-form  .ray-dropdown__body');
        //await this.page.click('//*[@id="lead_product-interests-select-option-2"]');
        this.page.dispatchEvent('.get-in-touch-form .ray-dropdown__option-list li:nth-child(3)', 'click');
    }

    async fillFormGetInTouch(name, email, phoneCountry, phone,capacity,interested){
        await this.fillFullName(this.getInTouchFormNameInput, name);
        await this.fillEmail(this.getInTouchFormEmailInput, email);
        await this.selectCountryPhonePrefixGetInTouchForm(this.getInTouchFormCountrySelectDropdown, phoneCountry);
        await this.fillPhone(this.getInTouchFormPhoneInput, phone);
        await this.fillCapacityInput(capacity);
        await this.setDateInCalendar();
        await this.selectInterestDropdown(this.getInTouchFormInterestDropdown,interested)

    }
}

module.exports = {BuildingsPage};
