'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:ForbiddenCtrl
 * @description
 * # ForbiddenCtrl
 * Controller of the suggestionboxApp
 */
angular.module('tproPortal')
    .controller('ForbiddenCtrl', function (layout) {
    
            
        // Stick footer to bottom of screen
        layout.stickyFooter(460);
            
    });