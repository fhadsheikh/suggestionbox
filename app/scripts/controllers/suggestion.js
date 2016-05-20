'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:SuggestionCtrl
 * @description
 * # SuggestionCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
  .controller('SuggestionCtrl', function ($scope,$routeParams, suggestions) {

        $scope.sugg = suggestions.suggestion();

    
// THIS CODE WORKS
//    suggestions.getSuggestion($routeParams.id).then(function(res){
//        $scope.suggestion = res;
//    })
//    
    
     var height = $(window).height();
        $("#suggestion").css("min-height",height-594);
    
  });
