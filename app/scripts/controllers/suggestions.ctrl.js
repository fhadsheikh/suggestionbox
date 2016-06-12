'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
  .controller('SuggestionsCtrl', function ($scope,$location,suggestions,layout) {
    
    $scope.viewMySuggestions = function()
    {
        suggestions.getMySuggestions().then(function(res){
            console.log(res);
            $scope.suggestions = res;
            $scope.count = res.length;
            $scope.mySuggestions = false;
            $scope.allSuggestions = true;
        });
    };
    
    $scope.viewAllSuggestions = function()
    {
        suggestions.getSuggestions().then(function(res){
            $scope.suggestions = res;
            $scope.count = res.length;
            $scope.mySuggestions = true;
            $scope.allSuggestions = false;
        });
    };
    
    $scope.openSuggestion = function(sugg){
        if(sugg.status === '1'){
            $location.path('/suggestion/'+sugg.id);
        } else {
            $location.path('/suggestions/pending/'+sugg.id);
        }
    };
    
    $scope.sortPopular = function(item)
    {
        $scope.order = item;
        $scope.selectedSort = item;
    };
    
    
    $scope.sortClass = function(item)
    {
        if(item === $scope.selectedSort || '-'+item === $scope.selectedSort){return 'selectedSort';}
    };
    
    $scope.viewAllSuggestions();
    
    $scope.sortPopular('-votes');
    
    // Stick footer to bottom of screen
    layout.stickyFooter(750);
    
  });
