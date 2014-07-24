describe("ngModel", function () {

    beforeEach(function () {
        browser.get("solutions/02_ng_model/ng_model.html");
    });

    it("should update as I type", function () {
        var basicBinding = element(by.binding("basicBinding"));
        var basicInput = element(by.model("basicBinding"));

        var message = "Well, aren't you purdy? ;)";
        basicInput.sendKeys(message)

        expect(basicBinding.getText()).toBe(message);

    });
});
