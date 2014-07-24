describe("components", function () {

    beforeEach(function () {
        browser.get("solutions/12_components/components.html");
    });

    it("should render the element with the proper text", function () {
        var component = $("ws-component");
        expect(component.getText()).toBe("I'm an element and I'm OK, I sleep all night and I work all day");
    });
});
