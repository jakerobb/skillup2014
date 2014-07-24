describe("controller_methods", function () {
    var message;

    beforeEach(function () {
        browser.get("solutions/04_controller_methods/controller_methods.html");
        message = element(by.binding("app.savedMessage"));
    });

    it("should have an empty message before being clicked", function () {

        expect(message.getText()).toBe("update me");
    });

    it("should update the message when clicked", function () {
        var button = $("#button");
        var input = $("#input");

        input.sendKeys("Sweet!");
        button.click();

        expect(message.getText()).toBe("Sweet!");
    });
});
