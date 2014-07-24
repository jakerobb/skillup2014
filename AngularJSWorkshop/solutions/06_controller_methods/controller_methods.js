var controllerMethods = angular.module("controllerMethods",[]);


controllerMethods.controller("AppCtrl", function () {
    var app = this;
    app.message = "";
    app.savedMessage = "update me"

    app.update = function (message) {
        app.savedMessage = message;
    }
})