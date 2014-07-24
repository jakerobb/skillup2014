describe("watching_with_scope", function () {
    beforeEach(module("watchingWithScope"));

    var ctrl;
    beforeEach(inject(function ($injector, $controller, $rootScope) {


        ctrl = $controller("DashboardCtrl", {$scope:$rootScope.$new()});
    }));

    it("should add an item to the array with addItem", function () {
        expect(ctrl.items.length).toBe(0);
        ctrl.addItem(Math.random());
        expect(ctrl.items.length).toBe(1);
    });

    it("should add an item to the array with addItem", function () {
        ctrl.addItem(Math.random());
        expect(ctrl.items.length).toBe(1);
        ctrl.removeItem(Math.random());
        expect(ctrl.items.length).toBe(0);
    });
});
