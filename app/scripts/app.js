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
    'toastr'
  ])
    .config(function ($routeProvider,$locationProvider,$httpProvider,jwtInterceptorProvider) {
        $routeProvider
          .when('/suggestions', {
            templateUrl: 'views/suggestions.html',
            controller: 'SuggestionsCtrl',
            controllerAs: 'suggestions',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('read');
                }
            }
          })
          .when('/suggestion/:id', {
            templateUrl: 'views/suggestion.html',
            controller: 'SuggestionCtrl',
            controllerAs: 'suggestion',
            resolve: {
                checkLogin: function(user){
                    return user.checkLogin();
                },
                isAllowed: function(user){
                    return user.isAllowed('read');
                },
                suggestion: function(suggestions,$route){
                    return suggestions.getSuggestion($route.current.params.id)
                }
            }
          })
          .when('/newsuggestion', {
            templateUrl: 'views/newsuggestion.html',
            controller: 'NewsuggestionCtrl',
            controllerAs: 'newsuggestion',
            resolve: {
                authenticate: function(user){
                    return user.checkLogin() && user.isAllowed('admin');
                }
            }
          })
          .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login',
            resolve: {
                loggedIn: function(user,$location){
                   user.checkLogin().then(function(res){
                       $location.path('/');
                   })
                }
            }
          })
          .otherwise({
            redirectTo: '/suggestions'
          });
    
//        console.log(localStorage.getItem('user'));
//        if(localStorage.getItem('jwt') !== null){
//            jwtInterceptorProvider.tokenGetter = function(){
//                return localStorage.getItem('jwt');
//            }
//            
//        
//        $httpProvider.interceptors.push('jwtInterceptor');
//            
//            }
    
//    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    
    $httpProvider.interceptors.push('authInjector');
    
    })
    .run(function(){
    
        
       
    })

