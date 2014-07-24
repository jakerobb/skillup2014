var watchingWithScope = angular.module("watchingWithScope",[]);

watchingWithScope.controller("AppCtrl", function ($scope) {
    var app = this;

    $scope.$watch("app.message", function (newVal, oldVal) {
        console.log(newVal + " | " + oldVal);
    })
});

watchingWithScope.controller("AdminCtrl", function ($scope) {
    var admin = this;

    $scope.$watch("admin", function (newVal, oldVal) {
        console.log(newVal + " | " + oldVal);
    }, true); //true watches *everything* (CAREFUL!!!)
});

watchingWithScope.controller("DashboardCtrl", function ($scope) {
    var dash = this;
    dash.items = [];

    dash.addItem = function () {
        dash.items.push(Math.random());
    };

    dash.removeItem = function () {
        dash.items.pop();
    };

    $scope.$watchCollection("dash.items", function (newVal, oldVal) {
        console.log(newVal)
    });
});
