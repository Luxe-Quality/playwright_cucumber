const {When, Then} = require("@cucumber/cucumber");
const {SearchPage} = require("../../page_object/search.page");
const {expect} = require("@playwright/test");
let searchPage;

When('Verify redirected url for {string}',
    async function (cardLink) {
        searchPage = new SearchPage(this.page);
        if (cardLink !== 'events') {
            expect(await searchPage.verifyDateIsValid('YYYY-MM-DD')).toBeTruthy();
            expect(await searchPage.verifyRedirectedUrl('capacity=1')).toBeTruthy();
            expect(await searchPage.verifyRedirectedUrl('workspace=' + cardLink)).toBeTruthy();
        } else {
            expect(await searchPage.verifyRedirectedUrl(cardLink)).toBeTruthy();
        }
    });

When('Check the filters {string} {string} of the search bar',
    async function (filter, capacity) {
        searchPage = new SearchPage(this.page);
        if (filter === 'privateOffice') {
            expect(await searchPage.verifySearchChipWorkspace(filter)).toBeTruthy();
            expect(await searchPage.verifySearchChipCapacity(capacity)).toBeFalsy();
            //expect(await searchPage.verifySearchChipDate('MMM DD')).toBeTruthy();
        } else if(filter === 'events'){
            return true;
        } else {
            expect(await searchPage.verifySearchChipWorkspace(filter)).toBeTruthy();
            expect(await searchPage.verifySearchChipCapacity(capacity)).toBeTruthy();
            //expect(await searchPage.verifySearchChipDate('MMM DD')).toBeTruthy();
        }
    });

Then('Verify redirected url for {string} with parameter {string}',
    async function (typeSlug, parameterSlug) {
        searchPage = new SearchPage(this.page);
        expect(await searchPage.verifyRedirectedUrl(`${typeSlug}=${parameterSlug}`)).toBeTruthy();
    });
