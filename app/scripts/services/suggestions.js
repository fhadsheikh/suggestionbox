'use strict';

/**
 * @ngdoc service
 * @name suggestionboxApp.suggestions
 * @description
 * # suggestions
 * Factory in the suggestionboxApp.
 */
angular.module('suggestionboxApp')
  .factory('suggestions', function ($http,$q,API,$location,user) {
    
    var suggestion = null;
    
    return { 
        
        getSuggestions: function () {

          var defer = $q.defer();

          $http.get(API.url+'suggestions')
          .success(function onSuccess(res){
              defer.resolve(res);
          })
          .error(function onError(err){
              defer.reject(err);
              user.logout();
              $location.path('/login');
          });

          return defer.promise;
            
        },
        suggestion: function(){
            return suggestion;  
        },
        getSuggestion: function(id){
            
            var deferred = $q.defer();
            
                $http.get(API.url+'suggestion?id='+id)
                .success(function onSuccess(res){
                    suggestion = res;
                    deferred.resolve(res);
                })
                .error(function onError(err){
                    deferred.reject(err);
                    user.logout();
                    $location.path('/login');
                });
            
            return deferred.promise;
            
        },
        getMySuggestions: function(id){
            
            var deferred = $q.defer();
            
            $http.get(API.url+'mysuggestions')
            .success(function onSuccess(res){
                deferred.resolve(res);
            })
            .error(function onError(err){
                deferred.reject(err);
                user.logout();
                $location.path('/login');
            })
            
            return deferred.promise;
            
        }
        
    
    };
  });
