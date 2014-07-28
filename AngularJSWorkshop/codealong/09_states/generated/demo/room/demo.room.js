angular.module("demo.room", ["demo.room.ceiling", "demo.room.chair", "demo.room.door", "demo.room.floor", "demo.room.wall"])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.room", {
            url:"/room",
            templateUrl:"demo/room/demo.room.html",
            controller: "RoomCtrl as room"
        })
    })

    .controller("RoomCtrl", function () {
        var room = this;

        room.message = "demo.room"
    })
