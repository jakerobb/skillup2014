module.exports = function (config) {
    config.set({

        files: [
            "../bower_components/angular/angular.js",
            "../bower_components/angular-mocks/angular-mocks.js",
            "./**/*.js"
        ],

        exclude: [
            "./*config.js",
            "./**/*_spec.js"
        ],

        autoWatch: true,
        logLevel: config.LOG_INFO,
        logColors: true,
        browsers: ['Chrome'],

        frameworks: ['jasmine']
    })
}
