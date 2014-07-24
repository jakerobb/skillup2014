describe("basic_controller", function () {

    beforeEach(function () {
        browser.get("solutions/03_basic_controller/basic_controller.html");
    });

    it("should have a message of 'Hello'", function () {
        var message = element(by.binding("message"));
        expect(message.getText()).toBe("Hello");
    });
});
