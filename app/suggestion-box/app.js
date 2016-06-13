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
          .when('/suggestions', {
            templateUrl: 'suggestion-box/core/suggestions/suggestions.view.html',
            controller: 'SuggestionsCtrl',
            controllerAs: 'suggestions',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('client');
                }
            }
          })
          .when('/suggestion/:id', {
            templateUrl: 'suggestion-box/core/suggestion/suggestion.view.html',
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
            templateUrl: 'suggestion-box/core/pending-suggestion/pendingsuggestion.html',
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
            templateUrl: 'suggestion-box/core/new-suggestion/newsuggestion.html',
            controller: 'NewsuggestionCtrl',
            controllerAs: 'newsuggestion',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('admin');
                }
            }
          })
          .when('/admin', {
            templateUrl: 'suggestion-box/core/admin/admin.view.html',
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
          });
    
        $httpProvider.interceptors.push('authInjector');
    
        $locationProvider.html5Mode(true);
    
    });

