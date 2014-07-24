describe("html only", function () {

    beforeEach(function () {
        browser.get("solutions/01_html_only/html_only.html");
    });

    it("should do a basic binding", function () {
        var simpleMath = element(by.binding("2 + 2"));
        expect(simpleMath.getText()).toBe("4");
    });
});
