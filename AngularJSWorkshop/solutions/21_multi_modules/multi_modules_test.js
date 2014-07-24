describe("multi_modules", function () {
    beforeEach(module("multiModules"));
    beforeEach(module("someOtherModule"));
    beforeEach(module("bootcamp"));

    var ctrl;
    beforeEach(inject(function ($injector, $controller, $rootScope) {
        ctrl = $controller("AppCtrl");
    }));

    it("should allow multiple modules", function () {
        expect(ctrl.framework).toEqual({title: "Angular 1.2.17 (loaded from another module)"});
    });
});
