'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:PendingsuggestionCtrl
 * @description
 * # PendingsuggestionCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
  .controller('PendingsuggestionCtrl', function (layout,$scope,suggestions,toastr) {
    
    $scope.sugg = suggestions.suggestion();
    
    $scope.config = {
    autoHideScrollbar: true,
    axis: 'y',
    theme: 'dark',
        setHeight: 400
        
    }
    
    // Stick footer to bottom of screen
    layout.stickyFooter(594);
  });
