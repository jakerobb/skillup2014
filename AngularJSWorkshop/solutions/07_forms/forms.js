angular.module("forms", [])
    .controller("AppCtrl", function () {
        var app = this;

        app.playerOptions = [
            {num: 1},
            {num: 2},
            {num: 3},
            {num: 4}
        ];

        app.game = {
            name: "Winner of Pizza",
            numPlayers: app.playerOptions[0],
            isForKids: true,
            type: "video"
        }

        app.submitForm = function (game) {
            var gameCopy = angular.copy(game);
            console.log(gameCopy); //store somewhere
        }
    })