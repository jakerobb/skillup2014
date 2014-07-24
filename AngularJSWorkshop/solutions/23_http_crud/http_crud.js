var httpCrud = angular.module("httpCrud",[]);

httpCrud.controller("AppCtrl", function ($http) {
    var app = this;
    app.people = [];
    app.selectedPerson = {};

    var api = "http://localhost:3000/people/";

    function loadPeople() {
        $http.get(api)
            .success(function (results) {
                app.people = results;
            })
    }

    loadPeople();


    app.selectPerson = function (person) {
        $http.get(api + person.id)
            .success(function (result) {
                app.selectedPerson = result;
            })
    }

    app.savePerson = function (person) {
        console.log(person);
        $http.put(api + person.id, person)
            .success(function (result) {
                loadPeople();
            })
    }

    app.addPerson = function (person) {
        $http.post(api, person)
            .success(function (result) {
                app.selectedPerson = result;
                loadPeople();
            })
    }

    app.deletePerson = function (person) {
        $http.delete(api + person.id)
            .success(function () {
                loadPeople();
            })
    }

    app.newPerson = function () {
        app.selectedPerson = {};
    }



})