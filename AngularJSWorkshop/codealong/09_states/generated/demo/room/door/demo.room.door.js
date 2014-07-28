angular.module("demo.room.door", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.room.door", {
            url:"/door",
            templateUrl:"demo/room/door/demo.room.door.html",
            controller: "DoorCtrl as door"
        })
    })

    .controller("DoorCtrl", function () {
        var door = this;

        door.message = "demo.room.door"
    })
