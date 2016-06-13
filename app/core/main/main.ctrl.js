'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
    .controller('MainCtrl', function ($scope,user,$location,$rootScope,suggestions) {
    
        var parent = this;
    
        parent.user = user.getUser();
    
        $rootScope.$on('userLoggedIn',function(event,args){            
            if(args){
                parent.header = true;
                parent.footer = true;
            } else {
                parent.header = false;
                parent.footer = false;
            }
        });
    
        user.checkLogin()
        .then(function(){
            parent.header = true;
            parent.footer = true;
        }, function(){
            parent.header = false;
            parent.footer = false;
        })
    
        $rootScope.$on('userDataChanged', function(e,a){
            parent.user = a.user; 
            // Check if user is Admin
            user.isAllowed('admin')
            .then(function(res){
                parent.isAdmin = true;
            }, function(){
                parent.isAdmin = false;
            });
            
        });
    
        // Check if user is Admin
        user.isAllowed('admin')
        .then(function(res){
            parent.isAdmin = true;
        }, function(){
            parent.isAdmin = false;
        });
    
        
        suggestions.recentSuggestions()
        .then(function(res){
            parent.recentSuggestions = res;
        });
    
        parent.logout = function(){
            user.logout();
            parent.user = null;
            $location.path('/');
        };
    

    });
