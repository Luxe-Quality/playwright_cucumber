const {BasePage} = require("./base.page");


 class EnterprisePage extends BasePage {
    enterprisePageHeader = '.enterprise-masthead__header';
    logo = 'div.logo';
    page;
    constructor(page) {
        super(page);
        this.page = page
    }

    async checkThatPageIsOpen() {
        return this.page.waitForSelector(this.enterprisePageHeader).then(() => true, () => false)
    }

}

module.exports = { EnterprisePage };
