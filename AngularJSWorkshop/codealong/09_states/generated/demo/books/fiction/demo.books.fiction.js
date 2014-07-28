angular.module("demo.books.fiction", [])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.books.fiction", {
            url:"/fiction",
            templateUrl:"demo/books/fiction/demo.books.fiction.html",
            controller: "FictionCtrl as fiction"
        })
    })

    .controller("FictionCtrl", function () {
        var fiction = this;

        fiction.message = "demo.books.fiction"
    })
