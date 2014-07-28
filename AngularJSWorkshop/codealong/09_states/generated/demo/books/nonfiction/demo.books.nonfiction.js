angular.module("demo.books.nonfiction", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.books.nonfiction", {
            url:"/nonfiction",
            templateUrl:"demo/books/nonfiction/demo.books.nonfiction.html",
            controller: "NonfictionCtrl as nonfiction"
        })
    })

    .controller("NonfictionCtrl", function () {
        var nonfiction = this;

        nonfiction.message = "demo.books.nonfiction"
    })
