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
    'ngTouch',
    'angular-jwt',
    'angular-storage',
    'toastr',
    'ngScrollbars',
    'ngtimeago',
    'oitozero.ngSweetAlert'
  ])
    .config(function ($routeProvider,$locationProvider,$httpProvider) {
        $routeProvider
          .when('/login', {
            templateUrl: 'core/login/login.view.html',
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
          .when('/suggestions', {
            templateUrl: 'core/suggestions/suggestions.view.html',
            controller: 'SuggestionsCtrl',
            controllerAs: 'suggestions',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('client');
                }
            }
          })
          .when('/suggestion/:id', {
            templateUrl: 'core/suggestion/suggestion.view.html',
            controller: 'SuggestionCtrl',
            controllerAs: 'suggestion',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('client');
                },
                isApproved: function(suggestions,$location,$route){
                    return suggestions.isApproved($route.current.params.id)
                    .catch(function(){
                        $location.path('/notfound');
                    })
                },
                suggestion: function(suggestions,$route){
                    return suggestions.getSuggestion($route.current.params.id);
                }
            }
          })
          .when('/suggestions/pending/:id', {
            templateUrl: 'core/pending-suggestion/pendingsuggestion.html',
            controller: 'PendingsuggestionCtrl',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('client');
                },
                isPending: function(suggestions,$location,$route){
                    return suggestions.isPending($route.current.params.id)
                    .catch(function(){
                        $location.path('/notfound');
                    })
                },
                isOwner: function(suggestions,$location,$route){
                    return suggestions.isOwner($route.current.params.id)
                    .catch(function(){
                        $location.path('/forbidden');
                    })
                },
                suggestion: function(suggestions,$route){
                    return suggestions.getSuggestion($route.current.params.id);
                },
                messages: function(suggestions,$route){
                    return suggestions.getMessages($route.current.params.id);
                }
                
            }
          })
          .when('/newsuggestion', {
            templateUrl: 'core/new-suggestion/newsuggestion.html',
            controller: 'NewsuggestionCtrl',
            controllerAs: 'newsuggestion',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('admin');
                }
            }
          })
          .when('/admin', {
            templateUrl: 'core/admin/admin.view.html',
            controller: 'AdminCtrl',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin();
                },
                isAllowed: function(user,$location){
                     return user.isAllowed('admin')
                     .catch(function(){
                         $location.path('/forbidden');
                     })
                }
            }
          })
          .when('/forbidden', {
            templateUrl: 'core/forbidden/forbidden.view.html',
            controller: 'ForbiddenCtrl',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('client');
                }
            }
          })
          .when('/notfound', {
            templateUrl: 'core/not-found/notfound.view.html',
            controller: 'NotfoundCtrl',
            controllerAs: 'notfound'
          })
          .otherwise({
            redirectTo: '/suggestions'
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

