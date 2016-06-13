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
  .module('tproPortal', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-jwt',
    'angular-storage',
    'toastr',
    'ngScrollbars',
    'ngtimeago',
    'oitozero.ngSweetAlert',
    'suggestionboxApp'
  ])
    .config(function ($routeProvider,$locationProvider,$httpProvider) {
        $routeProvider
          .when('/login', {
            templateUrl: 'main/core/login/login.view.html',
            controller: 'LoginCtrl',
            controllerAs: 'login',
            resolve: {
                loggedIn: function(user,$location){
                   user.checkLogin().then(function(){
                       $location.path('/');
                   });
                }
            }
          })
          .when('/forbidden', {
            templateUrl: 'main/core/forbidden/forbidden.view.html',
            controller: 'ForbiddenCtrl',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('client');
                }
            }
          })
          .when('/notfound', {
            templateUrl: 'main/core/not-found/notfound.view.html',
            controller: 'NotfoundCtrl',
            controllerAs: 'notfound'
          })
          .otherwise({
            redirectTo: '/'
          });
    
        $httpProvider.interceptors.push('authInjector');
    
        $locationProvider.html5Mode(true);
    
    })

    .filter('toArray', function(){
        return function(obj) {
            var result = [];
            angular.forEach(obj, function(val) {
                result.push(val);
            });
            return result;
        };
    });

