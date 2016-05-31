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
    
    $scope.signupForm = false; 
    
    $scope.submit = function(){
        user.login($scope.credentials.username, $scope.credentials.password);
    }
    
    $scope.signup = function(){
        $scope.signupForm = true;
        $scope.message = "Looks like this is your first time signing in. Please confirm the information below.";
    }
    
    // Stick footer to bottom of screen
    layout.stickyFooter(490);

});
 