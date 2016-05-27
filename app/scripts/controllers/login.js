'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
.controller('LoginCtrl', function ($scope,$location,layout,user) {
    
    $scope.submit = function(){
        user.login($scope.credentials.username, $scope.credentials.password);
    }
    
    // Stick footer to bottom of screen
    layout.stickyFooter(490);

});
 