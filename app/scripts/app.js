'use strict';

/**
 * @ngdoc overview
 * @name suggestionboxApp
 * @description
 * # suggestionboxApp
 *
 * Main module of the application.
 */
angular
  .module('suggestionboxApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/suggestions', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/suggestion', {
        templateUrl: 'views/suggestion.html',
        controller: 'SuggestionCtrl'
      })
      .when('/newsuggestion', {
        templateUrl: 'views/newsuggestion.html',
        controller: 'NewsuggestionCtrl',
        controllerAs: 'newsuggestion'
      })
      .otherwise({
        redirectTo: '/suggestions'
      });
  });
