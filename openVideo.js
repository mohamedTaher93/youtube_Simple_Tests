var EC = protractor.ExpectedConditions;
var commonSteps = require('./commonSteps.js');

describe('Open a video on youtube', function () {

    browser.waitForAngularEnabled(false);
    var searchedWord = "test";
    var video = element(by.className("yt-simple-endpoint style-scope ytd-video-renderer"));
    var videoTitle = "";
    var openedVideo = element(by.className("video-stream html5-main-video"));
    var titleChecker = "";

    function openVideo() {
        browser.wait(EC.visibilityOf(video), 10000);
        video.getAttribute("title").then(function (title) {
            videoTitle = title;
            video.click();
            browser.wait(EC.visibilityOf(openedVideo), 10000);
        })
    };

    function checkOpenedVideo() {
        console.log("check Opened Video" + videoTitle);
        titleChecker = element(by.xpath("//*[contains(text(), '" + videoTitle +"')]"));
        expect(titleChecker.isDisplayed()).toBe(true);
    };

    it('should search for videos and open the first one', function () {
        commonSteps.openYoutube();
        browser.sleep(1000).then(function () {
            commonSteps.searchYoutube(searchedWord);
        }).then(function () {
            openVideo();
            checkOpenedVideo();
        });
    });
});