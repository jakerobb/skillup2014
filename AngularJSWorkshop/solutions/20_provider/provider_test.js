describe("provider", function () {
    beforeEach(module("provider"));

    var framework;
    beforeEach(inject(function ($injector, $controller, $rootScope, _framework_) {
        framework = _framework_;
    }));

    it("should be set", function () {
        expect(framework).toEqual({title:"Angular 1.2.17"});
    });
});
