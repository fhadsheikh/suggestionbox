'use strict';

/**
 * @ngdoc service
 * @name suggestionboxApp.authInjector
 * @description
 * # authInjector
 * Factory in the suggestionboxApp.
 */
angular.module('suggestionboxApp')
.factory('authInjector', function (store) {
// Test
return {

    'request': function(config){

        config.headers.Authorization = store.get('jwt');
        config.headers.accept = "application/json";
        config.headers["Content-Type"] = "application/x-www-form-urlencoded;";
        config.headers["x-requested-with"] = "XMLHttpRequest";


        return config; 
    }

};

});
