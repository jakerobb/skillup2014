describe("basic_controller", function () {
    beforeEach(module("basicController"));

    var ctrl;
    beforeEach(inject(function ($controller) {
        ctrl = $controller("AppCtrl");
    }))

    it("should exist", function () {
        expect(ctrl).not.toBeNull();
    });

    it("should have a basic message", function () {
        expect(ctrl.message).toBe("Hello");
    });
});
