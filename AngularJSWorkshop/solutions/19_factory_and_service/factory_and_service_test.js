describe("factory_and_service", function () {
    beforeEach(module("factoryAndService"));

    var calendar;
    var day;
    var job;
    var vacation;
    beforeEach(inject(function ($injector, $controller, _job_, _vacation_, _Calendar_, _DAY_) {
        vacation = _vacation_;
        job = _job_;
        day = _DAY_;
        calendar = _Calendar_
    }));

    describe("Calendar service", function () {
        it("should have days constant * 7", function () {
            expect(calendar.getWeek()).toBe(day * 7);
        });
    });

    describe("job factory", function () {
        it("should have the vacation value", function () {
            expect(job.vacation).toBe(vacation);
        });
    });
});
