'use strict';
var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'content/home.html'
  });
  $routeProvider.when('/bexit', {
    templateUrl: 'content/bexit.html'
  });
  $routeProvider.when('/boverview', {
    templateUrl: 'content/boverview.html'
  });
  $routeProvider.when('/browseros', {
    templateUrl: 'content/browseros.html'
  });
  $routeProvider.when('/bsite', {
    templateUrl: 'content/bsite.html'
  });
  $routeProvider.when('/landing', {
    templateUrl: 'content/landing.html'
  });
  $routeProvider.when('/realtime', {
    templateUrl: 'content/realtime.html'
  });
  $routeProvider.when('/locations', {
    templateUrl: 'content/locations.html'
  });
  $routeProvider.when('/overview', {
    templateUrl: 'content/overview.html'
  });
   $routeProvider.when('/aoverview', {
    templateUrl: 'content/averview.html'
  });
   $routeProvider.when('/infographic', {
    templateUrl: 'content/infographic.html'
  });
  $routeProvider.otherwise({redirecTo: '/'});
}]);