const {BasePage} = require("./base.page");


class OnDemandPage extends BasePage {
    logo = 'div.logo';
    onDemandFormContainer = '#js-dynamic-form-container';
    onDemandFormContactNameInput = '#dynamic-form-contact_name';
    onDemandFormCompanyNameInput = '#dynamic-form-company-name';
    onDemandFormCompanySizeDropdown = '#company-size-select';
    onDemandFormEmailInput = '#dynamic-form-email';
    onDemandFormPhoneInput = '#dynamic-form-phone';
    onDemandFormCountrySelectDropdown = '.iti__selected-flag';
    onDemandFormLocationSelectDropdown = '#market-select';
    onDemandFormSubmitButton = '#awareness-form-submit-button';
    page;

    constructor(page) {
        super(page);
        this.page = page
    }

    async checkThatPageIsOpen() {
        return this.page.waitForSelector(this.logo).then(() => true, () => false)
    }

    async fillFormOnDemand(name, companyName, email, companySize, phoneCountry, phone,locations) {
        await this.fillFullName(this.onDemandFormContactNameInput,name);
        await this.fillCompanyName(this.onDemandFormCompanyNameInput, companyName);
        await this.fillEmail(this.onDemandFormEmailInput, email);
        await this.selectCompanySize(this.onDemandFormCompanySizeDropdown, companySize);
        await this.selectCountryPhonePrefix(this.onDemandFormCountrySelectDropdown, phoneCountry)
        await this.fillPhone(this.onDemandFormPhoneInput, phone);
        await this.selectLocations(this.onDemandFormLocationSelectDropdown, locations);
    }
}

module.exports = {OnDemandPage};
