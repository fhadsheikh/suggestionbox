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

    console.log('setting height');
    var height = $(window).height();
    $("#login").css("min-height",height-490);

});
