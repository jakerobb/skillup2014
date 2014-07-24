var fs = require("fs");

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./**/*_spec.js'],
    baseUrl: "http://localhost:3333/",
    onPrepare: function () {
        //attaching a screenshot saver helper to the browser
        browser.writeScreenShot = function(data, filename) {
            var stream = fs.createWriteStream(filename);

            stream.write(new Buffer(data, 'base64'));
            stream.end();
        }
    }

}
