angular.module("demo.pizza.meat", ["demo.pizza.meat.bacon", "demo.pizza.meat.ham"])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.pizza.meat", {
            url:"/meat",
            templateUrl:"demo/pizza/meat/demo.pizza.meat.html",
            controller: "MeatCtrl as meat"
        })
    })

    .controller("MeatCtrl", function () {
        var meat = this;

        meat.message = "demo.pizza.meat"
    })
