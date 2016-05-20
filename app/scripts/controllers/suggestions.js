'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
  .controller('SuggestionsCtrl', function ($scope,$location,suggestions) {
    
    $scope.viewMySuggestions = function()
    {
        suggestions.getMySuggestions(2).then(function(res){
            $scope.suggestions = res;
            $scope.count = res.length;
            $scope.mySuggestions = false;
            $scope.allSuggestions = true;
        })
    }
    
    $scope.viewAllSuggestions = function()
    {
        suggestions.getSuggestions().then(function(res){
            $scope.suggestions = res;
            $scope.count = res.length;
            $scope.mySuggestions = true;
            $scope.allSuggestions = false;
        });
    }
    
    
    $scope.sortPopular = function(item)
    {
        $scope.order = '-'+item;
        $scope.selectedSort = item;
    }
    
    
    $scope.sortClass = function(item)
    {
        if(item == $scope.selectedSort){return 'selectedSort';}
    }
    
    $scope.viewAllSuggestions();
    
    $scope.sortPopular('likes');
    
    console.log('setting height for suggestions');
    var height = $(window).height();
    $(".sugg-list").css("min-height",height-810);
    
  });
