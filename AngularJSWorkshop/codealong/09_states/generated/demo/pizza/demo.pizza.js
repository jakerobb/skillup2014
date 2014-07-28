angular.module("demo.pizza", ["demo.pizza.meat", "demo.pizza.veggie"])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.pizza", {
            url:"/pizza",
            templateUrl:"demo/pizza/demo.pizza.html",
            controller: "PizzaCtrl as pizza"
        })
    })

    .controller("PizzaCtrl", function () {
        var pizza = this;

        pizza.message = "demo.pizza"
    })
