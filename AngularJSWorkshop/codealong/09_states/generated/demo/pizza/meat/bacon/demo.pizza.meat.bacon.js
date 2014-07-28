angular.module("demo.pizza.meat.bacon", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.pizza.meat.bacon", {
            url:"/bacon",
            templateUrl:"demo/pizza/meat/bacon/demo.pizza.meat.bacon.html",
            controller: "BaconCtrl as bacon"
        })
    })

    .controller("BaconCtrl", function () {
        var bacon = this;

        bacon.message = "demo.pizza.meat.bacon"
    })
