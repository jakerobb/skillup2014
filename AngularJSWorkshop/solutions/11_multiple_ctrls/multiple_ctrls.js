var multipleCtrls = angular.module("multipleCtrls",[]);

multipleCtrls.controller("AppCtrl", function () {
    var app = this;
    app.message = "App says hi";
});

multipleCtrls.controller("AdminCtrl", function () {
    var admin = this;
    admin.message = "The admin also says hi";
});

multipleCtrls.controller("DashboardCtrl", function () {
    var dash = this;
    dash.message = "The dash says hi too";
});
