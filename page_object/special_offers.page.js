const {BasePage} = require("./base.page");

class SpecialOffersPage extends BasePage {
    page;
    logo = 'div.logo';
    specialOfferFormContainer = '#nf-form-4-cont';
    specialOfferFormContactNameInput = '#nf-field-20';
    specialOfferFormCompanyNameInput = '#nf-field-520';
    specialOfferFormCompanySizeDropdown = '#nf-field-521';
    specialOfferFormEmailInput = '#nf-field-21';
    specialOfferFormPhoneInput = '#nf-field-519';
    specialOfferFormCountrySelectDropdown = '.iti__selected-flag';
    specialOfferFormLocationSelectDropdown = '#nf-field-522';
    specialOfferFormSubmitButton = '#nf-field-26';
    sendMeOfferCheckbox = '#nf-field-25';
    successMessage = '.nf-response-msg';

    constructor(page) {
        super(page);
        this.page = page;
    }

    async checkThatPageIsOpen() {
        return this.page.waitForSelector(this.logo).then(() => true, () => false);
    }

    async selectSendMeOfferCheckbox() {
        this.page.dispatchEvent(this.sendMeOfferCheckbox, 'click');
    }

    async fillFormSpecialOffer(name, companyName, email, companySize, phoneCountry, phone,locations) {
        await this.fillFullName(this.specialOfferFormContactNameInput, name);
        await this.fillCompanyName(this.specialOfferFormCompanyNameInput, companyName);
        await this.fillEmail(this.specialOfferFormEmailInput, email);
        await this.selectCompanySize(this.specialOfferFormCompanySizeDropdown, companySize);
        await this.selectCountryPhonePrefix(this.specialOfferFormCountrySelectDropdown, phoneCountry)
        await this.fillPhone(this.specialOfferFormPhoneInput, phone);
        await this.selectLocations(this.specialOfferFormLocationSelectDropdown, locations);
        //await this.selectSendMeOfferCheckbox();
    }

    async successMessageIsDisplayed() {
        return this.page.waitForSelector(this.successMessage).then(() => true, () => false);
    }

}

module.exports = { SpecialOffersPage };
