const {Given, When, Then} = require("@cucumber/cucumber");
const {BasePage} = require("../../page_object/base.page");
const {HomePage} = require("../../page_object/home.page");
const {LocationsPage} = require("../../page_object/locations.page");
const {SolutionsPage} = require("../../page_object/solutions.page");
const {EnterprisePage} = require("../../page_object/enterprise.page");
const {IdeasPage} = require("../../page_object/ideas.page");
const {ContactUsPage} = require("../../page_object/contact_us.page");
const {LogInPage} = require("../../page_object/logIn.page");
const {expect} = require("@playwright/test");
const {SearchPage} = require("../../page_object/search.page");
const {EventsPage} = require("../../page_object/events.page");
const configFile = require("../../config/config");
const {OnDemandPage} = require("../../page_object/on_demand.page");
const {AllAccessPage} = require("../../page_object/all_access.page");

let currentPage;
let payload;

Given('{string} page is open', async function (pageName) {
    switch (pageName) {
        case 'Home':
            currentPage = new HomePage(this.page)
            break;
        case 'Locations':
            currentPage = new LocationsPage(this.page)
            break;
        case 'Solutions':
            currentPage = new SolutionsPage(this.page)
            break;
        case 'Enterprise':
            currentPage = new EnterprisePage(this.page)
            break;
        case 'Ideas':
            currentPage = new IdeasPage(this.page)
            break;
        case 'ContactUs':
            currentPage = new ContactUsPage(this.page)
            break;
        case 'LogIn':
            currentPage = new LogInPage(this.page)
            break;
        case 'Search':
            currentPage = new SearchPage(this.page);
            break;
        case 'Events':
            currentPage = new EventsPage(this.page);
            break;
        default:
            expect(false, `${pageName} not exist`).toBeTruthy()
    }
    expect(await currentPage.checkThatPageIsOpen()).toBeTruthy();
});

When('User fill data {string} in field {string}',
    async function (data, field) {
        switch (data) {
            case ('empty'):
                data = '';
                break;
            case ('validEmail'):
                data = process.env.EMAIL;
                break;
            case ('validPassword'):
                data = process.env.PASSWORD;
                break;
        }
        field = field + 'Field'
        await this.page.fill(currentPage[field], data);
    })

When('User click {string} button',
    async function (button) {
        button = button + 'Button';
        await this.page.click(currentPage[button]);
    })

When('select language via dropdown to {string}', async function (language) {
    await currentPage.setLanguage(language);
});

Then('page is opened with selected locale {string}', async function (locale) {
    await expect(this.page.url()).toContain(locale);
});

When('User click {string}',
    async function (element) {
        await this.page.click(currentPage[element]);
    })

When('User click {string} {string}',
    async function (element, type) {
        element = element + type;
        await this.page.click(currentPage[element]);
    })

When('User click {string} {string} in section {string}',
    async function (element, type, section) {
        element = element + type;
        section = section + 'Section';
        await this.page.click(currentPage[section][element]);
    })


When('User hover {string} {string} in section {string}',
    async function (element, type, section) {
        element = element + type;
        section = section + 'Section';
        await this.page.hover(currentPage[section][element]);
    })

When('User hover on {string} {string}',
    async function (element, type) {
        element = element + type;
        await this.page.hover(currentPage[element]);
    })

When('User click {string} button in top bar',
    async function (button) {
        button = button + 'Button';
        await this.page.click(currentPage[button], {delay: 4000});

    })

When('User check {string} checkbox',
    async function (checkbox) {
        checkbox = checkbox + 'Checkbox';
        await this.page.click(currentPage[checkbox]);
    })

When('User sleep',
    async function () {
        await this.page.pause();
        await new Promise(r => setTimeout(r, 40000));
    })

Given('{string} is displayed',
    async function (element) {
        expect(await this.page.waitForSelector(currentPage[element])).toBeTruthy();

    })

Given('{string} is disabled',
    async function (element) {
        expect(await this.page.isDisabled(currentPage[element])).toBeTruthy();
    })


Given('User choose {string} {string} in {string} dropdown',
    async function (type, option, dropdown) {
        await this.page.waitForSelector(currentPage[dropdown + 'Dropdown']);
        let dropdownEl = await this.page.$(currentPage[dropdown + 'Dropdown']);
        switch (type) {
            case 'label':
                await this.page.waitForSelector(currentPage[dropdown + 'Dropdown']);
                await dropdownEl.selectOption({label: option});
                break;
            case 'value':
                await dropdownEl.selectOption({value: option});
                break;
            case 'index':
                await dropdownEl.selectOption({index: parseInt(option)});
                break;
            default:
                expect(false).toBeTruthy();
        }
    });

Then('Then page is opened with selected locale {string}', async function (locale) {
    expect(this.page.url()).toContain(locale);
})

When('Navigate to {string} page',
    async function (partUrl) {
        let basePage = new BasePage(this.page);
        switch (partUrl) {
            case 'wework-on-demand':
            case 'wework-all-access':
                await basePage.navigateToPage(configFile.use.dev_url + `solutions/${partUrl}`);
                break;
            case 'contact-us':
                await basePage.navigateToPage(configFile.use.dev_url + partUrl);
                break;
            case 'US version':
                await basePage.navigateToPage(configFile.use.dev_url + '?override_country=US');
                break;
            default:
                console.log.error('Unknown partUrl');
                break;
        }
});

When('Click "Submit" on {string} page',
    async function (page) {
        switch(page) {
            case 'wework-on-demand':
                let onDemandPage = new OnDemandPage(this.page);
                payload = await onDemandPage.clickButtonWithPayloadRequest(onDemandPage.onDemandFormSubmitButton);
                break;
            case 'wework-all-access':
                let allAccessPage = new AllAccessPage(this.page);
                payload = await allAccessPage.clickButtonWithPayloadRequest(allAccessPage.allAccessFormSubmitButton);
                break;
            case 'contact-us':
                let contactUsPage = new ContactUsPage(this.page);
                payload = await contactUsPage.clickButtonWithPayloadRequest(contactUsPage.contactSubmitButton);
                break;
            default:
                console.log.error("There's no page with current name: " + page);
                break;
        }
    });

Then('Check data in payload of the event "leads"',
    async function (data) {
        await currentPage.checkDataFromPayloadRequest(data, payload);
    });

Then('Verify that {string} section is visible', async function (section) {
    switch(section) {
            case 'Global Reach':
                expect(await currentPage.globalReachHeaderIsVisible()).toBeTruthy();
                break;
            default:
                console.error("There's no section with current name: " + section);
                break;
        }
});



