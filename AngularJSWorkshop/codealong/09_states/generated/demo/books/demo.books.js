angular.module("demo.books", ["demo.books.fantasy", "demo.books.fiction", "demo.books.nonfiction"])
    .config(function ($stateProvider) {
        $stateProvider.state("demo.books", {
            url:"/books",
            templateUrl:"demo/books/demo.books.html",
            controller: "BooksCtrl as books"
        })
    })

    .controller("BooksCtrl", function () {
        var books = this;

        books.message = "demo.books"
    })
