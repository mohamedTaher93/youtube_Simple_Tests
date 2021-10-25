var EC = protractor.ExpectedConditions;
var searchBox = element(by.id("search-form")).element(by.id("search"));
var searchButton = element(by.id("search-icon-legacy"));
var filtersButton = element(by.xpath("//*[contains(text(), 'Filters')]"));

module.exports = {
    openYoutube: function () {
        browser.get('https://www.youtube.com/').then(
            browser.wait(EC.visibilityOf(element(by.id("logo-icon"))), 10000));
    },
    searchYoutube: function (string) {
        browser.wait(EC.elementToBeClickable(searchBox), 10000).then(function () {
            searchBox.sendKeys(string);
            searchButton.click();
            browser.wait(EC.visibilityOf(filtersButton), 10000);
        });
    }
};