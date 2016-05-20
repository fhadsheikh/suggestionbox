'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
.controller('LoginCtrl', function ($scope,$location) {
    
    
    $scope.submit = function(){
        
        
    }

    var height = $(window).height();
    console.log(height);
    console.log('test2');
    $("#login").css("min-height",height-490);

});
