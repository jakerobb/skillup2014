angular.module("demo.room.chair", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.room.chair", {
            url:"/chair",
            templateUrl:"demo/room/chair/demo.room.chair.html",
            controller: "ChairCtrl as chair"
        })
    })

    .controller("ChairCtrl", function () {
        var chair = this;

        chair.message = "demo.room.chair"
    })
