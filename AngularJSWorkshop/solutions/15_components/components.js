var components = angular.module("components",[]);

components.directive("wsComponent", function () {
    return {
        restrict: "E",
        template: "<div>I'm an element and I'm OK, I sleep all night and I work all day</div>"
    }
});