angular.module("demo.pizza.veggie.mushroom", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.pizza.veggie.mushroom", {
            url:"/mushroom",
            templateUrl:"demo/pizza/veggie/mushroom/demo.pizza.veggie.mushroom.html",
            controller: "MushroomCtrl as mushroom"
        })
    })

    .controller("MushroomCtrl", function () {
        var mushroom = this;

        mushroom.message = "demo.pizza.veggie.mushroom"
    })
