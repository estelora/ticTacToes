ticTacToe.config(function($routeProvider){
  //object to define the route
  var routeDef= {
    controller: 'gameController',
    controllerAs: 'gameCtrl',
    templateUrl: 'views/game.html'
  }

  //parsing the route
  $routeProvider.when('/game', routeDef);

});