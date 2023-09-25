const {BasePage} = require("./base.page");
const {TopBarSection} = require("./sections/top_bar.section");

 class LocationsPage extends BasePage {
     capacityButton = '#search-chip__capacity';
     logo = '.logo';
     page;
     topBarSection;

    constructor(page) {
        super(page);
        this.page = page
        this.topBarSection = new TopBarSection(page);

    }

    async checkThatPageIsOpen() {
        return this.page.waitForSelector(this.capacityButton).then(() => true, () => false)
    }

}
module.exports = { LocationsPage };
