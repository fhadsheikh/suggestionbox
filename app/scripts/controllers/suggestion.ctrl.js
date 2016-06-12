'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:SuggestionCtrl
 * @description
 * # SuggestionCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
  .controller('SuggestionCtrl', function ($scope,$routeParams,layout,suggestions,SweetAlert) {

    $scope.sugg = suggestions.suggestion();
    console.log($scope.sugg);
    
    $scope.like = function(id)
    {
        suggestions.likeSuggestion(id)
        .then(function(){
            SweetAlert.swal('Thanks for voting!', '', 'success');
            suggestions.getSuggestion(id)
            .then(function(res){
                $scope.sugg = res;
            })
        });
    };

    
    // Stick footer to bottom of screen
    layout.stickyFooter(544);
    
  });
