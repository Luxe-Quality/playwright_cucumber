const {BasePage} = require("./base.page");

class EventsPage extends BasePage {
    page;
    getQuoteButton = '[data-test-id="sticky-bar-cta"]';
    logo = '.logo';

    constructor(page) {
        super(page);
        this.page = page;
    }

    async checkThatPageIsOpen() {
        return this.page.waitForSelector(this.getQuoteButton).then(() => true, () => false);
    }

}

module.exports = { EventsPage };
