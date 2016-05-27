'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:SuggestionCtrl
 * @description
 * # SuggestionCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
  .controller('SuggestionCtrl', function ($scope,$routeParams,layout,suggestions) {

        $scope.sugg = suggestions.suggestion();

    
// THIS CODE WORKS
//    suggestions.getSuggestion($routeParams.id).then(function(res){
//        $scope.suggestion = res;
//    })
//    
    
    // Stick footer to bottom of screen
    layout.stickyFooter(594);
    
  });
