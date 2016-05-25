'use strict';

/**
 * @ngdoc service
 * @name suggestionboxApp.authInjector
 * @description
 * # authInjector
 * Factory in the suggestionboxApp.
 */
angular.module('suggestionboxApp')
  .factory('authInjector', function () {
// Test
    return {
        
        'request': function(config){
            
            config.headers.authorization = "Basic lkj23lj";
            config.headers.accept = "application/json";
            config.headers["Content-Type"] = "application/x-www-form-urlencoded;";
            
            
            console.log(config.headers);
            
            return config; 
        }
        
    };
    
  });
