const {BasePage} = require("./base.page");

class IdeasPage extends BasePage {
     exploreCategoriesDropDown = '.menu-center-part';
     homeLink = 'a.home-link';

     page;

    constructor(page) {
        super(page);
        this.page = page
    }

    async checkThatPageIsOpen() {
        return this.page.waitForSelector(this.exploreCategoriesDropDown).then(() => true, () => false)
    }

}
module.exports = { IdeasPage };
