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
        
        suggestion: function(){
            return suggestion;  
        },
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
        },
        newSuggestion: function(title,summary){
            
            var data = $.param({
                title: title,
                summary: summary                
            });
            
            var deferred = $q.defer();
            
            $http.post(API.url + 'suggestion', data)
            .success(function(res){
                deferred.resolve(res);
            })
            .error(function(err){
                deferred.reject(err);
            });
            
            return deferred.promise;
        },
        likeSuggestion: function(id){
            
            var data = $.param({
                id: id
            });
            
            var deferred = $q.defer();
            
            $http.post(API.url + 'suggestion/vote',data)
            .success(function(res){
                console.log(res);
                deferred.resolve(res);
            })
            .error(function(err){
                console.log(err);
                deferred.reject(err);
            });
            
            return deferred.promise;
                        
        }    
    };
  });
