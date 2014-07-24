describe("http_crud", function () {
    beforeEach(module("httpCrud"));

    var http;
    var app;
    beforeEach(inject(function ($injector, $controller, $rootScope, $httpBackend) {
        http = $httpBackend;
        http.when('GET', 'http://localhost:3000/people/').respond([
            {firstName: "John"}
        ]);

        app = $controller("AppCtrl");
    }));

    it("should have data", function () {
        expect(app.people).toEqual([]);
        http.flush();
        expect(app.people).toEqual([{firstName:"John"}]);
    });
});
