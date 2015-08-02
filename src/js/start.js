ticTacToe.config(function($routeProvider){
  //object to define the route
  var routeDef= {
    controller: 'startController',
    controllerAs: 'startCtrl',
    templateUrl: 'views/start.html'
  }

  //parsing the route, defaults to view.
  $routeProvider.when('/', routeDef);
  $routeProvider.when('/start', routeDef);

});