angular.module("demo.social.facebook", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.social.facebook", {
            url:"/facebook",
            templateUrl:"demo/social/facebook/demo.social.facebook.html",
            controller: "FacebookCtrl as facebook"
        })
    })

    .controller("FacebookCtrl", function () {
        var facebook = this;

        facebook.message = "demo.social.facebook"
    })
