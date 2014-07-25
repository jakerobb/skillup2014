var vertafore = angular.module("vertafore", ['ui.bootstrap']);

vertafore.filter('players', function() {
    return function(games, players) {
        var results = [];
        if (games !== undefined) {
            if (players === undefined) {
                return games;
            }
            for (var i = 0; i < games.length; i++) {
                var game = games[i];
                if (game.minPlayers <= players && game.maxPlayers >= players) {
                    results.push(game);
                }
            }
        }
        return results;
    }
});

vertafore.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});

vertafore.filter('expansionFlag', function() {
    return function(name, isExpansion) {
        return name + (isExpansion ? ' (Expansion)' : '');
    };
});

vertafore.controller("AppCtrl", function ($http, $modal, $scope) {
    var app = this;

    $http.get("games.json")
        .then(function (result) {
            app.games = result.data;
        });

    app.showGameDetails = function (game) {
        $scope.game = game;
        $modal.open({
            scope: $scope,
            templateUrl: 'gameDetailsTemplate',
            controller: 'GameDetails as gameDetails',
            size: 'lg'
        });

    };


});

vertafore.controller("GameDetails", function ($http, $modalInstance, $scope) {
    var gameDetails = this;
    gameDetails.game = $scope.game;
    gameDetails.ok = function () {
        $modalInstance.dismiss();
    };

});
