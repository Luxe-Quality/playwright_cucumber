const {BasePage} = require("./base.page");
const {expect} = require("@playwright/test");
const moment = require("moment");

class SearchPage extends BasePage {
    page;
    searchChipCapacity = '#search-chip__capacity > span';
    searchChipDate = '#search-chip__date > span';
    searchChipWorkspace = '#search-chip__workspace > span:nth-child(1)';
    searchInput = '#search-container';
    firstSearchedBuildingLink = "#results a.search-card:nth-child(1)";
    logo = '.logo';

    constructor(page) {
        super(page);
        this.page = page;
    }
    //check if the page is loaded
    async checkThatPageIsOpen() {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        return this.page.waitForSelector(this.searchInput).then(() => true, () => false);
    }

    async verifyRedirectedUrl(cardLink){
        return await this.page.url().includes(cardLink);
    }

    async verifyDateIsValid(dateFormat){
        let date = (this.page.url()).match(/(?<=date=).*(?=&c)/);
        return moment(date, dateFormat,true).isValid();
    }

    async verifySearchChipWorkspace(filter){
        await this.delayedCheck();
        let element = '#'+filter;
        let textSearchChipWorkspace = await this.page.locator(element).innerHTML();
        return expect(await this.page.locator(this.searchChipWorkspace)).toContainText(textSearchChipWorkspace).then(() => true, () => false);
    }

    async verifySearchChipCapacity(capacity){
        return expect(await this.page.locator(this.searchChipCapacity)).toContainText(capacity).then(()=>true,()=>false);
    }

    async verifySearchChipDate(dateFormat){
        let textSearchChipDate = await this.page.locator(this.searchChipDate).innerText();
        return moment(textSearchChipDate, dateFormat,true).isValid();
    }
}

module.exports = { SearchPage };
