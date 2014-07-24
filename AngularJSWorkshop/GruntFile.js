module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-protractor-runner");

    grunt.config.init({
        karma:{
            unit: {
                configFile: "./solutions/karma.config.js",
                singleRun: true
            }
        },
        protractor: {
            options: {
                configFile: "./solutions/ptor.config.js", // Default config file
                keepAlive: false, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            run: {}
        }
    })
}
