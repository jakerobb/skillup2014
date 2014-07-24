var provider = angular.module("provider",[]);


provider.constant("VERSION", "1.2.17");

provider.provider("framework", function () {
    var whichVersion;

    this.setVersion = function (version) {
        whichVersion = version;
    };


    this.$get = function () {
        return {
            title: "Angular " + whichVersion
        }
    }
});


provider.config(function (frameworkProvider, VERSION) {
    frameworkProvider.setVersion(VERSION);
});


provider.controller("AppCtrl", function (framework) {
    var app = this;

    app.framework = framework.title;
});
