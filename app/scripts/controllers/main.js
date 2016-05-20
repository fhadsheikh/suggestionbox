'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
  .controller('MainCtrl', function ($scope,$location,authentication) {
    
    $scope.logout = function()
    {
        authentication.logout();
        $location.path('/');
    }
   
  });
