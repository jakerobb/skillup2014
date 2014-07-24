var httpInterceptor = angular.module("httpInterceptor", []);


httpInterceptor.config(function ($httpProvider) {
    $httpProvider.interceptors.push(function () {
        return {
            request: function (config) {
                config.requestTimestamp = new Date().getTime();
                return config;
            },
            response: function (response) {
                response.config.responseTimestamp = new Date().getTime();
                return response;
            }
        };
    });
});

httpInterceptor.controller("AppCtrl", function ($http) {
    var app = this;
    app.people = [];
    app.selectedPerson = {};

    var api = "http://localhost:3000/people/";

    function loadPeople() {
        $http.get(api)
            .success(function (results, status, header, config) {
                console.log("Round trip took: " + ((config.responseTimestamp - config.requestTimestamp) / 1000) + " seconds");
                app.people = results;
            })
    }

    loadPeople();


})

