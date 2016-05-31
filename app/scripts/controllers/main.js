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
            $scope.user = {};
            $scope.user.name = args.user.name;
        });
        
        var parent = this;
    
        $rootScope.$on('userLoggedIn',function(event,args){
            console.log(args);
            
            if(args){
                parent.header = true;
                parent.footer = true;
            } else {
                parent.header = false;
                parent.footer = false;
            }
        });
    
        this.logout = function(){
            user.logout();
            $scope.user = null;
            $location.path('/');
        }

    });
