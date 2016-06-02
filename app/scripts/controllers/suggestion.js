'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:SuggestionCtrl
 * @description
 * # SuggestionCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
  .controller('SuggestionCtrl', function ($scope,$routeParams,layout,suggestions,toastr) {

    $scope.sugg = suggestions.suggestion();
    
    $scope.like = function(id)
    {
        suggestions.likeSuggestion(id)
        .then(function(){
            toastr.info('You just liked suggestion '+id);
        });
    };

    
    // Stick footer to bottom of screen
    layout.stickyFooter(564);
    
  });
