describe("directive_basics", function () {

    beforeEach(function () {
        browser.get("solutions/11_directive_basics/directive_basics.html");
    });

    it("should updated the div contents when typing", function () {
        var div = $("div[ws-directive]");
        var input = element(by.model("model.message"));

        expect(div.getText()).toBe("");
        input.sendKeys("w")
        expect(div.getText()).toBe("w");
        input.sendKeys("h")
        //this is a silly test because the directive is super basic
        expect(div.getText()).toBe("wwh");
    });
});
