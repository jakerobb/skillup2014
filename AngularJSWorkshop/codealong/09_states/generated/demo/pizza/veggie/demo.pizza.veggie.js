angular.module("demo.pizza.veggie", ["demo.pizza.veggie.mushroom"])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.pizza.veggie", {
            url:"/veggie",
            templateUrl:"demo/pizza/veggie/demo.pizza.veggie.html",
            controller: "VeggieCtrl as veggie"
        })
    })

    .controller("VeggieCtrl", function () {
        var veggie = this;

        veggie.message = "demo.pizza.veggie"
    })
