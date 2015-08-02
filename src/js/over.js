ticTacToe.config(function($routeProvider){
  //object to define the route
  var routeDef= {
    controller: 'OverController',
    controllerAs: 'overCtrl',
    templateUrl: 'views/over.html'
  }

  //parsing the route
  $routeProvider.when('/over', routeDef);

});

ticTacToe.controller('OverController', function() {

});