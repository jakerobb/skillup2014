angular.module("demo.room.wall", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.room.wall", {
            url:"/wall",
            templateUrl:"demo/room/wall/demo.room.wall.html",
            controller: "WallCtrl as wall"
        })
    })

    .controller("WallCtrl", function () {
        var wall = this;

        wall.message = "demo.room.wall"
    })
