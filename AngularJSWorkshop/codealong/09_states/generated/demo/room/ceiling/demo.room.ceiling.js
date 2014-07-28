angular.module("demo.room.ceiling", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.room.ceiling", {
            url:"/ceiling",
            templateUrl:"demo/room/ceiling/demo.room.ceiling.html",
            controller: "CeilingCtrl as ceiling"
        })
    })

    .controller("CeilingCtrl", function () {
        var ceiling = this;

        ceiling.message = "demo.room.ceiling"
    })
