var directiveBasics = angular.module("directiveBasics",[]);

directiveBasics.directive("wsDirective", function () {
    return function (scope, element, attrs) {
        scope.$watch(attrs.wsDirective, function (newVal) {
            element.append(newVal);
        })
    }
});