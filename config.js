// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'searchForVideo.js',
        'openVideo.js',
        'navigateToHistoryPage.js',
        'homeLeftSideMenu.js',
    ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    },
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--start-maximized', '--disable-infobars', '--disable-gpu']
        }
    }
};