const {setDefaultTimeout, Before, AfterAll, After, AfterStep} = require("@cucumber/cucumber");
const {devices} = require("@playwright/test");
const {chromium} = require("playwright");
let configFile = require('../config/config.js');

setDefaultTimeout(6000 * 1000);
const browserOptions = {
    locale: 'en-US',
    geolocation:{longitude: 2.2990125,latitude: 48.8598277},
    permissions:['geolocation'],
    slowMo: 100,
    headless: false,
    args: ['--no-sandbox']
};

Before(async function (scenario) {

    this.isMobile = (process.env.npm_config_device === 'True')
    console.log(scenario.pickle.name, '\n')
    if (process.env.npm_config_headless === 'True') {
        this.browser = await chromium.launch(browserOptions);
    } else {
        this.browser = await chromium.launch(browserOptions);
    }
    if (this.isMobile) {
        console.log('Emulate device')
        this.context = await this.browser.newContext({
            ...devices['iPhone 11'],
            recordVideo: {
                dir: 'report/videos/' + scenario.pickle.name
            }
        });
    } else {
        this.context = await this.browser.newContext({
            viewport: {
                width: 1680,
                height: 1050,
            },
            recordVideo: {
                dir: 'report/videos/' + scenario.pickle.name
            }
        });
    }
    let base_url = configFile.use.dev_url
    this.page = await this.context.newPage();
    await this.page.goto(base_url);

});

After(async function ( scenario) {
    let dateTime = new Date()
    let screenShotName
    if (this.isMobile) {
        //screenShotName = 'report/screenshots/' + 'Iphone11 ' + scenario.pickle.name + ' ' + scenario.result.status + ' ' + dateTime.getMilliseconds() + '.png'
        screenShotName = 'report/screenshots/' + 'Iphone11 ' + scenario.result.status + ' ' + dateTime.getMilliseconds() + '.png'
    } else {
        //screenShotName = 'report/screenshots/' + scenario.pickle.name + ' ' + scenario.result.status + ' ' + dateTime.getMilliseconds() + '.png'
        screenShotName = 'report/screenshots/' + scenario.result.status + ' ' + dateTime.getMilliseconds() + '.png'
    }
    let screenshot = await this.page.screenshot({path: screenShotName, fullPage: true});
    await this.attach(screenshot, 'image/png')
    await this.attach(this.page.url())
    await this.browser.close();
    await this.page.close();
    await this.context.close();
    console.log('\n')

});

AfterAll(async function () {
    // await this.browser.close();
});

