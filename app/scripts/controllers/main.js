'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
    .controller('MainCtrl', function ($scope, $timeout,user, jwtHelper) {

        this.logout = function(){
            user.logout();
        }

    });
