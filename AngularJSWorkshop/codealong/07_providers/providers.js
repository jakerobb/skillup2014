var vertafore = angular.module("vertafore", []);

vertafore.controller("AppCtrl", function ($scope) {
    var app = this;

    app.orders = [];

    app.submitOrder = function (order) {
        app.orders.push(angular.copy(order));
        console.log("New order submitted: ");
        console.log(order);
        console.log(app.orders);
    };


});

/*
vertafore.service("NameOfThing", function () {

});

vertafore.directive("Directive", function () {

});

vertafore.factory("SomeFactory", function () {

});

*/
