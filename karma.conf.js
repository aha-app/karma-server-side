// Karma configuration
// Generated on Tue Feb 02 2016 17:07:14 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: ['karma-*', require('./')],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify', 'server-side'],
    urlRoot: '/karma/',

    // list of files / patterns to load in the browser
    files: [
      'test/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
      '**/*.sw?'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*Spec.js': ['browserify']
    },

    browserify: {
      debug: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: process.env.CI? ['browserstack-ie9', 'browserstack-chrome']: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    browserStack: {
      username: process.env.BROWSERSTACK_USER,
      accessKey: process.env.BROWSERSTACK_PASSWORD
    },

    customLaunchers: browsers,

    browserNoActivityTimeout: 60000
  })
}

var browsers = {
  'browserstack-ie9': {
    base: 'BrowserStack',
    browser : 'IE',
    browser_version : '9.0',
    os : 'Windows',
    os_version : '7',
    resolution : '1024x768'
  },
  'browserstack-ie10': {
    base: 'BrowserStack',
    browser : 'IE',
    browser_version : '10.0',
    os : 'Windows',
    os_version : '8',
    resolution : '1024x768'
  },
  'browserstack-ie11': {
    base: 'BrowserStack',
    browser : 'IE',
    browser_version : '11.0',
    os : 'Windows',
    os_version : '10',
    resolution : '1024x768'
  },
  'browserstack-edge': {
    base: 'BrowserStack',
    browser : 'Edge',
    browser_version : '13.0',
    os : 'Windows',
    os_version : '10',
    resolution : '1024x768'
  },
  'browserstack-firefox': {
    base: 'BrowserStack',
    browser : 'Firefox',
    browser_version : '47.0',
    os : 'Windows',
    os_version : '10',
    resolution : '1024x768'
  },
  'browserstack-safari': {
    base: 'BrowserStack',
    browser : 'Safari',
    browser_version : '9.1',
    os : 'OS X',
    os_version : 'El Capitan',
    resolution : '1024x768'
  },
  'browserstack-safari-ios': {
    base: 'BrowserStack',
    device : 'iPhone 6S',
    os : 'ios',
    os_version : '9.1',
  },
  'browserstack-chrome': {
    base: 'BrowserStack',
    browser : 'Chrome',
    browser_version : '52.0',
    os : 'Windows',
    os_version : '10',
    resolution : '1024x768'
  }
};
