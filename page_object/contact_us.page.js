const {BasePage} = require("./base.page");


 class ContactUsPage extends BasePage {
     page;

     contactUsPageTitle = '.contact-us-page__title';
     logo = 'div.logo';
     fullNameField = '#nav-cta-contact_name';
     fullCompanyNameField = "#nav-cta-company_name";
     emailField = "#nav-cta-email";
     companySizeDropDown = "#company-size-select"
     countryPrefixSelectDropdown = ".iti__selected-flag";
     phoneField = "#nav-cta-phone"
     marketDropDown = "#market-select";
     interestDropDown = "#nav-cta-product-interest";
     contactSubmitButton = ".ray-button--primary";
     notesTextField = "#nav-cta-notes";

    constructor(page) {
        super(page);
        this.page = page
    }

    async checkThatPageIsOpen() {
        return this.page.waitForSelector(this.contactUsPageTitle).then(() => true, () => false)
    }

    async selectMarket(selector, marketName) {
        await this.chooseLabelInDropdown(selector, marketName);
    }

    async selectInterest(selector, interest) {
        await this.chooseLabelInDropdown(selector, interest);
    }

    async fillFormContactUs(name, companyName, email, companySize, phoneCountry, phone, market, interest, text) {
        await this.fillFullName(this.fullNameField ,name);
        await this.fillCompanyName(this.fullCompanyNameField, companyName);
        await this.fillEmail(this.emailField, email);
        await this.selectCompanySize(this.companySizeDropDown, companySize);
        await this.selectMarket(this.marketDropDown, market);
        await this.selectCountryPhonePrefix(this.countryPrefixSelectDropdown, phoneCountry)
        await this.fillPhone(this.phoneField, phone);
        await this.selectInterest(this.interestDropDown, interest);
        await this.fillTextField(this.notesTextField, text);
     }

}
module.exports = { ContactUsPage };
