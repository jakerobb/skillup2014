angular.module("demo.social.twitter", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.social.twitter", {
            url:"/twitter",
            templateUrl:"demo/social/twitter/demo.social.twitter.html",
            controller: "TwitterCtrl as twitter"
        })
    })

    .controller("TwitterCtrl", function () {
        var twitter = this;

        twitter.message = "demo.social.twitter"
    })
