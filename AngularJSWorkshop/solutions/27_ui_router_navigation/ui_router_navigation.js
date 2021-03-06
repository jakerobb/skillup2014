var uiRouterNavigation = angular.module("uiRouterNavigation",["ui.bootstrap", "ui.router"]);

uiRouterNavigation.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/one");

    $stateProvider
        .state("one", {
            url: "/one",
            templateUrl: 'partials/one.html',
            controller: "OneCtrl as one"
        })
        .state("two", {
            url: "/two",
            template: '<div>Second state</div>'
        })
        .state("three", {
            url: "/three",
            template: '<div>The third of three states</div>'
        })
});


uiRouterNavigation.controller("AppCtrl", function () {
});


uiRouterNavigation.controller("OneCtrl", function () {
    var one = this;
    one.things = [
        {name: "John"},
        {name: "Frank"},
        {name: "Lenny"}
    ]
});
