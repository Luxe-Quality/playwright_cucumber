const {TopBarSection}  = require( "./sections/top_bar.section");
const {BasePage} = require("./base.page");

class HomePage extends BasePage {
    languageInput = '#languageInput';
    topBarSection;
    page;
    spaceCardBlockTitle = '[data-test-id="browse-by-workspace__header"]';
    spaceCardBlockAllSpaceLink = '[data-test-id="browse-by-workspace__header-cta-link"]';
    privateOfficeCard = 'xpath=.//*[@data-test-id="browse-by-workspace__item-link"][contains(@href, "privateOffice")]';
    dedicatedDeskCard = 'xpath=.//*[@data-test-id="browse-by-workspace__item-link"][contains(@href, "dedicatedDesk")]';
    hotDeskCard = 'xpath=.//*[@data-test-id="browse-by-workspace__item-link"][contains(@href, "hotDesk")]';
    eventsCard = 'xpath=.//*[@data-test-id="browse-by-workspace__item-link"][contains(@href, "events")]';
    bannerLearnMoreLink = '.wework-alert-cta';
    locationsDropdown = '#locations-dropdown';
    startButton = '#select-location-btn';
    getInTouchButton = '#get-in-touch-btn';
    globalReachHeader = "div.global-reach__header";

    constructor(page) {
        super(page);
        this.page = page;
        this.topBarSection = new TopBarSection(page);
    }

    async checkThatPageIsOpen() {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        return this.page.waitForSelector(this.topBarSection.locationsLink).then(() => true, () => false);
    }
    async globalReachHeaderIsVisible() {
        return this.globalReachHeader;
    }

    async setLanguage(language) {
        await this.page.click(this.languageInput);
        if(language === "Français") {
            await this.page.locator("text=Français >> nth=0").click();
        } else if(language === "Français (Canada)") {
            await this.page.locator("text=Français (Canada)").click();
        } else {
            await this.page.locator('text=' + language).click();
        }
    }

    async selectLocationsCityDropdown(locationCity){
        await this.selectLocations(this.locationsDropdown, locationCity);
    }
}

module.exports = { HomePage };
