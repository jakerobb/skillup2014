/* globals angular, console */
var httpdemo = angular.module("httpdemo", ['ui.bootstrap']);

httpdemo.service("peopleService", function ($http) {
    "use strict";
    this.getPeople = function () {
        return $http.get("http://localhost:3000/people")
                .then(function (result) {
                     return result;
                 });
    };

    this.createPerson = function (person) {
        return $http.post("http://localhost:3000/people", person);
    };

    this.updatePerson = function (person) {
        return $http.put("http://localhost:3000/people/" + person.id, person);
    };

    this.deletePerson = function (person) {
        return $http.delete("http://localhost:3000/people/" + person.id);
    };
});

httpdemo.people = httpdemo.controller("PeopleCtrl", function ($scope, $modal, peopleService) {
    "use strict";
    var people = this;
    people.data = [];

    people.createNewPerson = function (newPersonForm) {
        if (newPersonForm.$valid) {
            peopleService
                    .createPerson(angular.copy(newPersonForm.newPerson))
                    .then(people.updateList);
        }
    };

    people.updatePerson = function (updatePersonForm) {
        if (updatePersonForm.$valid) {
            peopleService
                    .updatePerson(updatePersonForm.person)
                    .then(people.updateList);
        }
    };

    people.deletePerson = function (person) {
        if (window.confirm("Are you sure you want to delete " + person.firstName + " " + person.lastName + "?")) {
            peopleService
                    .deletePerson(person)
                    .then(people.updateList);
        }
    };

    people.updateList = function () {
        peopleService
                .getPeople()
                .then(function (result) {
                          people.data = result.data;
                      }
        );
    };

    people.showPersonDetails = function (person) {
        $scope.person = person;
        $modal.open({
                        scope: $scope,
                        templateUrl: 'viewPersonDetailsTemplate',
                        controller: 'ViewPersonDetails as viewPersonDetails',
                        size: 'lg'
                    });

    };

    people.editPersonDetails = function (person) {
        $scope.person = person;
        var modalInstance = $modal.open({
                                            scope: $scope,
                                            templateUrl: 'editPersonDetailsTemplate',
                                            controller: 'EditPersonDetails as editPersonDetails',
                                            size: 'lg'
                                        });

        modalInstance.result.then(function (result) {
                                      people.updateList();
                                  }
        );

    };

    people.addNewPerson = function () {
        var modalInstance = $modal.open({
                                            scope: $scope,
                                            templateUrl: 'addPersonDetailsTemplate',
                                            controller: 'AddPersonDetails as addPersonDetails',
                                            size: 'lg'
                                        });

        modalInstance.result.then(function (result) {
                                      people.updateList();
                                  }
        );

    };

    people.updateList();

});

httpdemo.controller("ViewPersonDetails", function ($http, $modalInstance, $scope) {
    "use strict";
    var viewPersonDetails = this;
    viewPersonDetails.person = $scope.person;
    viewPersonDetails.ok = function () {
        $modalInstance.dismiss();
    };

});

httpdemo.controller("EditPersonDetails", function ($http, $modalInstance, $scope, peopleService) {
    "use strict";
    var editPersonDetails = this;
    editPersonDetails.person = $scope.person;
    editPersonDetails.save = function (form) {
        if (form.$valid) {
            peopleService.updatePerson(editPersonDetails.person);
            $modalInstance.close(true);
        }
    };
    editPersonDetails.cancel = function () {
        $modalInstance.dismiss();
    };

});

httpdemo.controller("AddPersonDetails", function ($http, $modalInstance, peopleService) {
    "use strict";
    var addPersonDetails = this;
    addPersonDetails.person = {};
    addPersonDetails.save = function (form) {
        if (form.$valid) {
            peopleService.createPerson(addPersonDetails.person);
            $modalInstance.close(true);
        }
    };
    addPersonDetails.cancel = function () {
        $modalInstance.dismiss();

    };

});

