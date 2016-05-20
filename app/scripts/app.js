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
    .config(function ($routeProvider,$locationProvider) {
        $routeProvider
          .when('/suggestions', {
            templateUrl: 'views/suggestions.html',
            controller: 'SuggestionsCtrl',
            controllerAs: 'suggestions',
            resolve: {
                loggedIn: function(authentication){
                    return authentication.checksession();
                }
            }
          })
          .when('/suggestion/:id', {
            templateUrl: 'views/suggestion.html',
            controller: 'SuggestionCtrl',
            controllerAs: 'suggestion',
            resolve: {
                loggedIn: function(authentication){
                    return authentication.checksession();
                },
                
                suggestion: function(suggestions,$route){
                    return suggestions.getSuggestion($route.current.params.id)
                }
                
            }
            
          })
          .when('/newsuggestion', {
            templateUrl: 'views/newsuggestion.html',
            controller: 'NewsuggestionCtrl',
            controllerAs: 'newsuggestion'
          })
          .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
          })
          .when('/logout', {
            templateUrl: 'views/logout.html',
            controller: 'LogoutCtrl',
            controllerAs: 'logout'
          })
          .otherwise({
            redirectTo: '/suggestions'
          });
    })
    .run(function(){
    
       
    })

