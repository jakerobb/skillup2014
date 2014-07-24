describe("controller_methods", function () {
    beforeEach(module("controllerMethods"));

    var ctrl;
    beforeEach(inject(function ($controller) {
        ctrl = $controller("AppCtrl");
    }));

    it("should have a blank message before updating", function () {
        expect(ctrl.savedMessage).toBe("update me");
    });

    it("should update the message", function () {
        ctrl.update("Woo ha!");
        expect(ctrl.savedMessage).toBe("Woo ha!");
    });
});
