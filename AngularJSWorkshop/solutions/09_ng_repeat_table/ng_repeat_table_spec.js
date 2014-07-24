describe("ng_repeat_table", function () {

    beforeEach(function () {
        browser.get("solutions/06_ng_repeat_table/ng_repeat_table.html");
    });

    it("should have 3 entries", function () {
        element.all(by.css("tbody tr")).then(function (tr) {
            expect(tr.length).toBe(3);
        })

    });
});
