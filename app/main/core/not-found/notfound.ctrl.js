'use strict';

/**
 * @ngdoc function
 * @name suggestionboxApp.controller:NotfoundCtrl
 * @description
 * # NotfoundCtrl
 * Controller of the suggestionboxApp
 */
angular.module('tproPortal')
    .controller('NotfoundCtrl', function (layout) {

        // Stick footer to bottom of screen
        layout.stickyFooter(460);
    });
