'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
.controller('LoginCtrl', function ($scope,$location,authentication) {
    
    
    $scope.submit = function(){
        
        authentication.login($scope.username,$scope.password)
        .then(function(res){
            $location.path('/suggestion');
        })
        .catch(function(err){
            $location.path('/login');
        })
        
    }

    var height = $(window).height();
    console.log(height);
    
    $("#login").css("min-height",height-490);

});
