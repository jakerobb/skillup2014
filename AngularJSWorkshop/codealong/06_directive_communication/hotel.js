/* globals angular, console */
var module = angular.module("hotel", ['ui.bootstrap']);

module.controller("hotel", function ($scope) {
    "use strict";
    var hotel = this;
    var floorScopes = [];
    var floorControllers = [];
    $scope.overallVacancy = true;
    $scope.fireAlarmTriggered = false;

    hotel.addFloor = function (floorScope, floorController) {
        floorScopes[floorScope.number] = floorScope;
        floorControllers[floorScope.number] = floorControllers;
        floorController.initFloor(hotel);
    };

    hotel.updateOverallVacancy = function () {
        $scope.overallVacancy = getOverallVacancy();
    };

    function getOverallVacancy() {
        for (var i = 0; i < floorScopes.length; i++) {
            for (var j = 0; j < floorScopes[i].roomScopes.length; j++) {
                var roomScope = floorScopes[i].roomScopes[j];
                if (roomScope.vacant && !roomScope.onFire && !roomScope.destroyed) {
                    return true;
                }
            }
        }
        return false;
    }

    hotel.removeRoom = function (roomScope) {
        console.log(roomScope);
        roomScope.destroyed = true;
        roomScope.onFire = false;
    };
});

module.controller("floor", function ($timeout) {
    "use strict";
    var floor = this;
    var hotel;

    var roomScopes = [];
    var roomControllers = [];

    floor.addRoom = function (roomScope, roomController) {
        roomScopes.push(roomScope);
        roomControllers.push(roomController);
        roomController.initRoom(hotel, floor);
        roomScope.$watch("vacant", function () {
            hotel.updateOverallVacancy();
        });
        roomScope.$watch("destroyed", function () {
            hotel.updateOverallVacancy();
        });
        roomScope.$watch("onFire", function(newValue, oldValue, roomScope) {
            hotel.updateOverallVacancy();
            if (oldValue === false && newValue === true) {
                var floorIndex = roomScope.floor;
                var roomIndex = roomScopes.indexOf(roomScope);
                if (roomIndex > 0) {
                    roomScope.spreadTimeout1 = $timeout(function () {
                        roomControllers[roomIndex - 1].catchFire();
                    }, 2000);
                }
                if (roomIndex + 1 < roomScopes.length) {
                    roomScope.spreadTimeout2 = $timeout(function () {
                        roomControllers[roomIndex + 1].catchFire();
                    }, 2000);
                }
            }
        });
    };

    floor.initFloor = function(theHotel) {
        hotel = theHotel;
    };



});

module.controller("room", function ($scope, $element, $timeout) {
    "use strict";
    var room = this;
    var hotel;
    var floor;
    $scope.vacant = true;
    $scope.onFire = false;
    $scope.destroyed = false;

    room.initRoom = function(theHotel, theFloor) {
        hotel = theHotel;
        floor = theFloor;
    };

    room.reserveRoom = function () {
        $scope.vacant = false;
    };

    room.vacateRoom = function () {
        $scope.vacant = true;
    };

    room.catchFire = function () {
        if (!$scope.destroyed) {
            $scope.onFire = true;
            $scope.destructionTimeout = $timeout(function () {
                hotel.removeRoom($scope);
            }, 2000);
        }
    };

    room.extinguishFire = function () {
        $scope.onFire = false;
        $timeout.cancel($scope.destructionTimeout);
        $timeout.cancel($scope.spreadTimeout1);
        $timeout.cancel($scope.spreadTimeout2);
    };
});

module.directive("hotel", function () {
    "use strict";
    return {
        scope: {
            name: "@name"
        },
        restrict: 'E',
        transclude: true,
        templateUrl: "hotel.html",
        controller: "hotel as hotel"
    };
});

module.directive("floor", function () {
    "use strict";
    return {
        scope: {
            number: "@number"
        },
        restrict: 'E',
        transclude: true,
        templateUrl: "floor.html",
        controller: "floor as floor",
        require: ["^hotel","floor"],
        link: function(scope, element, attribute, controllers) {
            controllers[0].addFloor(scope, controllers[1]);
        }
    };
});

module.directive("room", function () {
    "use strict";
    return {
        scope: {
            roomNumber: "@roomNumber"
        },
        controller: "room as room",
        restrict: 'E',
        templateUrl: "room.html",
        require: ["^floor","room"],
        link: function(scope, element, attribute, controllers) {
            controllers[0].addRoom(scope, controllers[1]);
        }
    };
});
