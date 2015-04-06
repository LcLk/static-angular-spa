app = angular.module('myApp', ['ngRoute']);

app.config( function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when("/step/:number", { 
        templateUrl: function(args){return "views/step_" + args.number + ".html"},
      }).
      otherwise( { 
        redirectTo: "/step/1" 
      });
});

app.controller('NavCtrl', function($scope, $routeParams){
  $scope.steps = [0,1,2,3,4,5,6,7];
  // Is the current tab the active partial?
  $scope.previousStep = function() {
    return Math.max(0,parseInt($routeParams.number) - 1);
  }
  $scope.nextStep = function() {
    return Math.min(parseInt($routeParams.number) + 1, $scope.steps.length-1);
  }

  $scope.currentStep = function() {
    return $routeParams.number;
  }
});