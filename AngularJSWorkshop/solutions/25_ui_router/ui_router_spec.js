describe("ui_router", function () {

    beforeEach(function () {
        browser.get("solutions/22_ui_router/ui_router.html");
    });

    it("should default to the 'one' URL", function () {
        expect(browser.driver.getCurrentUrl()).toContain("#/one");
    });

    it("should have the first template", function () {
        expect($("div[ui-view]>div").getText()).toContain("one");
    });

});
