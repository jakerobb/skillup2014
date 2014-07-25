/* globals angular */
var vertafore = angular.module("vertafore", []);

vertafore.directive("note", function () {
    "use strict";
    return {
        scope: {
            to: "@to",
            from: "@from",
            message: "@message"
        },
        restrict: 'E',
        templateUrl: "noteTemplate"
    };
});

