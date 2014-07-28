angular.module("demo.books.fantasy", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.books.fantasy", {
            url:"/fantasy",
            templateUrl:"demo/books/fantasy/demo.books.fantasy.html",
            controller: "FantasyCtrl as fantasy"
        })
    })

    .controller("FantasyCtrl", function () {
        var fantasy = this;

        fantasy.message = "demo.books.fantasy"
    })
