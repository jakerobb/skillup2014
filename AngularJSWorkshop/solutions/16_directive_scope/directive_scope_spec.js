describe("directive_scope", function () {

    beforeEach(function () {
        browser.get("solutions/13_directive_scope/directive_scope.html");
    });

    it("should update the message on click", function () {
        var string = element(by.binding("string"));
        var obj = element(by.binding("obj.message"));

        expect(obj.getText()).toBe("I'm going down to cow town");

        string.click();

        expect(obj.getText()).toBe("I was updated: today");
    });
});
