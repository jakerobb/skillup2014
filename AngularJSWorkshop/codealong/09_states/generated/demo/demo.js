angular.module("demo", ["ui.router", "ui.bootstrap", "demo.books", "demo.home", "demo.pizza", "demo.room", "demo.social"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("demo", {
            url:"",
            templateUrl:"demo/demo.html",
            controller:"DemoCtrl as demo"

        })

        $urlRouterProvider.otherwise("");
    })

    .controller("DemoCtrl", function () {
        var demo = this;

        demo.message = "Welcome to the demo state."
    })
