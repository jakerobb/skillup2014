var firstDirective = angular.module("firstDirective",[]);

firstDirective.directive("wsDirective", function () {
    return function () {
        console.log("I do nothing and proud of it!");
    }
});