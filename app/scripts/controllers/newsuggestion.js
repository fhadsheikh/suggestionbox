'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:NewsuggestionCtrl
 * @description
 * # NewsuggestionCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
.controller('NewsuggestionCtrl', function ($scope,layout) {
    
    $scope.wizard = {};
    $scope.wizard.rules = true;
    $scope.wizard.form = false;
    $scope.wizard.message = false;

    $scope.beginSubmission = function()
    {
        $scope.wizard.rules = false;
        $scope.wizard.form = true;
        $scope.wizard.message = false;
    }
    
    $scope.endSubmission = function()
    {
        $scope.wizard.rules = false;
        $scope.wizard.form = false;
        $scope.wizard.message = true;
    }
    
    // Stick footer to bottom of screen
    layout.stickyFooter(655);

});
