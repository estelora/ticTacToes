var game = angular.module('game', ['ngRoute']);

// //Create our 404 handler
game.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    controller: 'Error404Ctrl',
    controllerAs: 'vm',
    templateUrl: '/error-404.html',
  });
}]);