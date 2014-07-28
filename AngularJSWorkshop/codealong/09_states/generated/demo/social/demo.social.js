angular.module("demo.social", ["demo.social.facebook", "demo.social.plus", "demo.social.twitter"])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.social", {
            url:"/social",
            templateUrl:"demo/social/demo.social.html",
            controller: "SocialCtrl as social"
        })
    })

    .controller("SocialCtrl", function () {
        var social = this;

        social.message = "demo.social"
    })
