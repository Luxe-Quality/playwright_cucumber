
class TopBarSection {
     locationsLink = 'xpath=.//*[contains(@href, "/search")][@class="track-nav-link-click"]'
     solutionsLink = 'xpath=.//*[contains(@href, "/solutions")][@class="track-nav-link-click"]'
     enterpriseLink = 'xpath=.//*[contains(@href, "/enterprise")][@class="track-nav-link-click"]'
     ideasLink = 'xpath=.//*[contains(@href, "/ideas")][@class="track-nav-link-click"]'
     contactUsLink = 'xpath=.//*[contains(@href, "/contact-us")][@class="track-nav-link-click"]'
     logInLink = '.nav-login-cta'
     logoLink = '.sl_norewrite'
     page;

    constructor(page) {
        this.page = page
    }

}

module.exports = { TopBarSection };
