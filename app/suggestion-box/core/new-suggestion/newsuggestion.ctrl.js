'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:NewsuggestionCtrl
 * @description
 * # NewsuggestionCtrl
 * Controller of the suggestionboxApp
 */
angular.module('suggestionboxApp')
.controller('NewsuggestionCtrl', function ($scope,layout,suggestions,toastr,$location) {
    
    $scope.wizard = {};
    $scope.wizard.rules = true;
    $scope.wizard.form = false;
    $scope.wizard.message = false;

    $scope.beginSubmission = function()
    {
        $scope.wizard.rules = false;
        $scope.wizard.form = true;
        $scope.wizard.message = false;
    };
    
    $scope.endSubmission = function()
    {
        
        $scope.suggestion = {};
        var title = $scope.newsuggestion.title;
        var summary = $scope.newsuggestion.summary;
        
        suggestions.newSuggestion(title,summary)
        .then(function(){
            $location.path('/suggestions');
            toastr.info('New Suggestion submitted successfully','Success');
        })
        .catch(function(err){
            toastr.error(err,'Error');
        });
        
        
        
        $scope.wizard.rules = false;
        $scope.wizard.form = false;
        $scope.wizard.message = true;
    };
    
    // Stick footer to bottom of screen
    layout.stickyFooter(625);

});
