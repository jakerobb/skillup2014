angular.module("demo.home", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.home", {
            url:"/home",
            templateUrl:"demo/home/demo.home.html",
            controller: "HomeCtrl as home"
        })
    })

    .controller("HomeCtrl", function () {
        var home = this;

        home.message = "demo.home"
    })
