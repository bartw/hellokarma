module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatchBatchDelay: 300,
        files: ['./tests/index.js'],
        preprocessors: { './tests/index.js': ['webpack'] },
        webpack: {},
        webpackMiddleware: { noInfo: true }
    });
};