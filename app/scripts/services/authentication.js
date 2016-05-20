'use strict';

/**
 * @ngdoc service
 * @name suggestionboxApp.authentication
 * @description
 * # authentication
 * Factory in the suggestionboxApp.
 */
angular.module('suggestionboxApp')
.factory('authentication', function (API,$timeout,$location,$http,$q) {
    
    var loggedIn = true;

    return {
        checksession: function(){
            
            var deferred = $q.defer();
            
            if(loggedIn){
                deferred.resolve('User is logged in');
            } else {
                $location.path('/login');
                deferred.reject('User is not logged in');
            }
                        
            return deferred.promise;
            
        },
        login: function (username,password){
            
            var deferred = $q.defer();
            
            if(username == 'fhad'){
                console.log(username);
                loggedIn = true;
                deferred.resolve('Login Successful');
            } else {
                console.log(username);
                deferred.reject('Login Denied');
            }
            
            return deferred.promise;
            
            
            
        },
        logout: function(){
            
            loggedIn = false;
            
        }

    };
});
