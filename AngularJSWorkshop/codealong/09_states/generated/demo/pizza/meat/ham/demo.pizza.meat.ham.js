angular.module("demo.pizza.meat.ham", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.pizza.meat.ham", {
            url:"/ham",
            templateUrl:"demo/pizza/meat/ham/demo.pizza.meat.ham.html",
            controller: "HamCtrl as ham"
        })
    })

    .controller("HamCtrl", function () {
        var ham = this;

        ham.message = "demo.pizza.meat.ham"
    })
