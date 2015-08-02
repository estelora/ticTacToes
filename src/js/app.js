var ticTacToe = angular.module('ticTacToe', ['ngRoute']);

// //Create our 404 handler
ticTacToe.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    controller: 'Error404Ctrl',
    controllerAs: 'vm',
    templateUrl: '/error-404.html',
  });
}]);