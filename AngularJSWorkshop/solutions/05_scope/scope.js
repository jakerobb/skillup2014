angular.module("demo", [])
    .run(function ($rootScope) {
//        all scopes are created from $rootScope
    })
    .controller("AppCtrl", function ($scope) {
//        each controller creates a $scope
//        scopes are directly tied to an element
//        scopes are inherited by the children of the element

        //$scope.$apply() needs to be called "outside of angular"
        setInterval(function () {
            $scope.random = Math.random();
            $scope.$apply();
        }, 1000);

        $scope.$watch("random", function (newVal, oldVal) {
            console.log(newVal, oldVal);
        })

//        $on is primarily used for state changes or other global stuff
        $scope.$on("someEvent", function (event, args) {
            console.log(args.message);
        })


        $scope.$emit("someEvent", {message: "emitted!"}); //send event up to $rootScope
        $scope.$broadcast("someEvent", {message: "broadcasted!"}); //send event down from $rootScope


        $scope.two = 2;
        $scope.three = 3;
        console.log($scope.$eval("two + three"));


        //$destroy gives you one last chance to do something before the $scope is gone
        $scope.$on("$destroy", function () {
            console.log($scope.two);
        })

        setTimeout(function () {
            $scope.$destroy()
        }, 5000);
    })
