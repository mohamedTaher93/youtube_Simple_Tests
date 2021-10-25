var EC = protractor.ExpectedConditions;
var commonSteps = require('./commonSteps.js');

describe('Open the left-side menu on the youtube home page', function () {

    browser.waitForAngularEnabled(false);
    var menuButton = element(by.xpath("//button[@aria-label= 'Guide']"));
    var leftSideMenu = element(by.xpath("//div[@id = 'guide-inner-content']"));

    function openLeftMenu() {
        browser.wait(EC.visibilityOf(menuButton), 10000);
        menuButton.click();
    };

    function checkLeftMenu() {
        expect(leftSideMenu.isDisplayed()).toBe(true);
    };

    it('should opens the left-side menu bar', function () {
        commonSteps.openYoutube();
        browser.sleep(1000).then(function () {
            openLeftMenu();
            checkLeftMenu();
        });
    });
});