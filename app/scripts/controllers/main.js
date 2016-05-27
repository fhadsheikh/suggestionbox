'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
    .controller('MainCtrl', function ($scope,user,$location,$rootScope) {
    
        $rootScope.$on('userDataChanged', function(event, args){
//            console.log(args);
            $scope.user = {};
            $scope.user.name = args.user.name;
        });
        

        this.logout = function(){
            user.logout();
            $scope.user = null;
            $location.path('/');
        }

    });
