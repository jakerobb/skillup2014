describe("ng_repeat", function () {

    beforeEach(function () {
        browser.get("solutions/05_ng_repeat/ng_repeat.html");
    });

    it("should display a list of people", function () {
        var locator = by.repeater("person in app.people");

        var one = element(locator.row(0).column("person.name"));
        var two = element(locator.row(1).column("person.name"));
        var three = element(locator.row(2).column("person.name"));

        expect(one.getText()).toBe("Andy");
        expect(two.getText()).toBe("Fred");
        expect(three.getText()).toBe("Zeke");
    });
});
