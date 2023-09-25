const {BasePage} = require("./base.page");

 class LogInPage extends BasePage {
     submitButton = '.auth0-lock-submit';

     page;

    constructor(page) {
        super(page);
        this.page = page
    }

    async checkThatPageIsOpen() {
        return this.page.waitForSelector(this.submitButton).then(() => true, () => false)
    }

}
module.exports = { LogInPage };
