const {BasePage} = require("./base.page");


class AllAccessPage extends BasePage {
    logo = 'div.logo';
    allAccessFormContainer = '#js-dynamic-form-container';
    allAccessFormContactNameInput = '#dynamic-form-contact_name';
    allAccessFormEmailInput = '#dynamic-form-email';
    allAccessFormPhoneInput = '#dynamic-form-phone';
    allAccessFormHowManyPeopleDropdown = '#how-many-passes-select';
    allAccessFormCountrySelectDropdown = '.iti__selected-flag';
    allAccessFormSubmitButton = '#awareness-form-submit-button';
    page;

    constructor(page) {
        super(page);
        this.page = page
    }

    async checkThatPageIsOpen() {
        return this.page.waitForSelector(this.logo).then(() => true, () => false)
    }

    async selectHowManyPeople(index) {
        await this.chooseIndexInDropdown(this.allAccessFormHowManyPeopleDropdown, index);
    }

    async fillFormAllAccess(name, email, phoneCountry, phone, index) {
        await this.fillFullName(this.allAccessFormContactNameInput, name);
        await this.fillEmail(this.allAccessFormEmailInput, email);
        await this.selectCountryPhonePrefix(this.allAccessFormCountrySelectDropdown,phoneCountry)
        await this.fillPhone(this.allAccessFormPhoneInput, phone);
        await this.selectHowManyPeople(index);
    }
}

module.exports = {AllAccessPage};
