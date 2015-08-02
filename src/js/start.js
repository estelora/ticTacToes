ticTacToe.config(function($routeProvider){
  //object to define the route
  var routeDef= {
    controller: 'StartController',
    controllerAs: 'startCtrl',
    templateUrl: 'views/start.html'
  }

  //parsing the route, defaults to view.
  $routeProvider.when('/', routeDef);
  $routeProvider.when('/start', routeDef);

});

ticTacToe.controller('StartController', function() {

});