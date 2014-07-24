describe("filter_and_order", function () {

    beforeEach(function () {
        browser.get("solutions/07_filter_and_order/filter_and_order.html");
    });

    it("should sort by first name when clicking the first column", function () {
        var th1 = $("table tr:nth-child(1) th:nth-child(1)");

        th1.click();

        var firstName = $("tbody tr:nth-child(1) td:nth-child(1)");
        /*
         if you want to console.log some value, use the promise "then()" syntax

         firstName.getText().then(function (text) {
         console.log(text);
         })
         */

        expect(firstName.getText()).toBe("Alfonso");


        browser.takeScreenshot().then(function (png) {
            browser.writeScreenShot(png, 'solutions/07_filter_and_order/screenshots/firstName.png');
        });
    });

    it("should sort by last name when clicking the second column", function () {
        var th2 = $("table tr:nth-child(1) th:nth-child(2)");

        th2.click();

        var firstName = $("tbody tr:nth-child(1) td:nth-child(1)");

        expect(firstName.getText()).toBe("Hope");


        browser.takeScreenshot().then(function (png) {
            browser.writeScreenShot(png, 'solutions/07_filter_and_order/screenshots/lastName.png');
        });
    });

    it("should sort by email when clicking the third column", function () {
        var th3 = $("table tr:nth-child(1) th:nth-child(3)");

        th3.click();

        var firstName = $("tbody tr:nth-child(1) td:nth-child(1)");

        expect(firstName.getText()).toBe("Lacey");

        browser.takeScreenshot().then(function (png) {
            browser.writeScreenShot(png, 'solutions/07_filter_and_order/screenshots/email.png');
        });
    });

    it("should filter down on search", function () {
        var input = element(by.model("input.name"));
        input.sendKeys("Ny");

        var firstName = $("tbody tr:nth-child(1) td:nth-child(1)");

        expect(firstName.getText()).toBe("Nyssa");

        browser.takeScreenshot().then(function (png) {
            browser.writeScreenShot(png, 'solutions/07_filter_and_order/screenshots/search.png');
        });
    });
});
