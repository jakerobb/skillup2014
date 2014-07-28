/* globals angular, console */
var firststate = angular.module("firststate", ['ui.router']);

firststate.controller("FirstCtrl", function ($scope) {
    "use strict";
    var first=this;
    first.message = "Salud!";

/*
    $scope.$on('$stateChangeStart',
               function(event, toState, toParams, fromState, fromParams){
                   console.log("Changing from");
                   console.log(fromState);
                   console.log(" to ");
                   console.log(toState);
               });
*/

});

firststate.controller("SecondCtrl", function () {
    "use strict";
    var second=this;
    second.message = "Yo!";
});


firststate.config(function ($stateProvider) {
    "use strict";

    $stateProvider.state("first", {
        url: "/first",
/*
        onExit: function () {
            console.log("Exiting first stage.");
        },
        onEnter: function () {
            console.log("Entering first stage.");
        },
*/
        views: {
            "": {
                template: "<div><div ui-view='piece'></div><div ui-view='piecetwo'></div></div>" // these point to child states
            },
            user: {
                template: "<h2>I'm a user</h2>"
            },
            timeline: {
                template: "<h2>timeline goes here</h2>"
            },
            status: {
                template: "<h2>what's the sitrep?</h2>"
            }
        },
        controller: "FirstCtrl as first"
    });

    $stateProvider.state("first.something", {
        url: "/something",
        views: {
            piece: {
                template: "foo"
            },
            piecetwo: {
                template: "bar"
            }
        }
    });

    $stateProvider.state("second", {
        template: "<div>{{second.message}}</div>",
        url: "/second",
/*
        onExit: function () {
            console.log("Exiting second stage.");
        },
        onEnter: function () {
            console.log("Entering second stage.");
        },
*/
        controller: "SecondCtrl as second"
    });
});


firststate.controller("AppCtrl", function ($state, $rootScope) {
    "use strict";

    $state.go("first");


});

