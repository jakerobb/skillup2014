
var someOtherModule = angular.module("someOtherModule", []);
someOtherModule.value("framework", {
    title: "Angular 1.2.17 (loaded from another module)"
});


var bootcamp = angular.module("bootcamp", ["someOtherModule"]);
bootcamp.controller("AppCtrl", function (framework) {
    var app = this;

    app.framework = framework;
});

var multiModules = angular.module("multiModules",["bootcamp"]);
