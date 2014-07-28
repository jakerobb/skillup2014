angular.module("demo.room.floor", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.room.floor", {
            url:"/floor",
            templateUrl:"demo/room/floor/demo.room.floor.html",
            controller: "FloorCtrl as floor"
        })
    })

    .controller("FloorCtrl", function () {
        var floor = this;

        floor.message = "demo.room.floor"
    })
