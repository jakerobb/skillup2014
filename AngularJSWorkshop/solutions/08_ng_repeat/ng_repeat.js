var ngRepeat = angular.module("ngRepeat",[]);

ngRepeat.controller("AppCtrl", function () {
    this.people = [
        {name: "Andy"},
        {name: "Fred"},
        {name: "Zeke"}
    ]
})
