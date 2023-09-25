const {BasePage} = require("./base.page");

 class SolutionsPage extends BasePage {
     solutionPageHeader = '.solutions-page-header';
     logo = '.logo';

     page;

    constructor(page) {
        super(page);
        this.page = page
    }

    async checkThatPageIsOpen() {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        return this.page.waitForSelector(this.solutionPageHeader).then(() => true, () => false)
    }

}
module.exports = { SolutionsPage };

