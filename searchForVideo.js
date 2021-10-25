var EC = protractor.ExpectedConditions;
var commonSteps = require('./commonSteps.js');

describe('Search for a video on youtube', function () {
    
    var searchedWord = "test";
    var video = element(by.className("yt-simple-endpoint style-scope ytd-video-renderer"));

    browser.waitForAngularEnabled(false);

    function checkTitles(string) {
        browser.wait(EC.visibilityOf(video), 10000);
        video.getAttribute("title").then(function (label) {
            var lowerCaseTitle = label.toLowerCase();
            expect(lowerCaseTitle).toContain(searchedWord);
        
        })
    };
    it('should search for videos with a given word', function () {
        commonSteps.openYoutube();
        browser.sleep(1000).then(function () {
            commonSteps.searchYoutube(searchedWord);
        }).then(function () {
            checkTitles(searchedWord);
        });
    });
});