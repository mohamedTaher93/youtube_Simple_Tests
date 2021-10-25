var EC = protractor.ExpectedConditions;
var commonSteps = require('./commonSteps.js');

describe('Open History', function () {

    var historyButton = element(by.xpath("//ytd-mini-guide-entry-renderer[@aria-label = 'History']"));
    var historyMsg = element(by.xpath("//*[contains(text(), 'Keep track of what you watch')]"));
    var historyType = element(by.xpath("//*[contains(text(), 'History type')]"));

    browser.waitForAngularEnabled(false);

    function openLibrary() {
        browser.wait(EC.visibilityOf(historyButton), 10000);
        historyButton.click();
    };

    function checkHistoryPage() {
        browser.wait(EC.elementToBeClickable(historyType), 10000);
        expect(historyMsg.isDisplayed()).toBe(true);
    };

    it('should opens the history page', function () {
        commonSteps.openYoutube();
        browser.sleep(1000).then(function () {
            openLibrary()            
        }).then(function () {
            checkHistoryPage();
        })
    });
});