var factoryAndService = angular.module("factoryAndService",[]);

factoryAndService.constant("DAY", 24);

factoryAndService.value("vacation", true);

factoryAndService.factory("job", function (vacation) {
    return {
        type:"software developer",
        vacation: vacation
    }
});

factoryAndService.service("Calendar", function (DAY) {
    this.getWeek = function () {
        return DAY * 7;
    }
});


factoryAndService.controller("AppCtrl", function (job, Calendar) {
    var app = this;

    app.job = job;
    app.week = Calendar.getWeek();
});
