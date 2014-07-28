angular.module("demo.social.plus", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.social.plus", {
            url:"/plus",
            templateUrl:"demo/social/plus/demo.social.plus.html",
            controller: "PlusCtrl as plus"
        })
    })

    .controller("PlusCtrl", function () {
        var plus = this;

        plus.message = "demo.social.plus"
    })
