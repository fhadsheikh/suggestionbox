'use strict';

/**
 * @ngdoc service
 * @name suggestionboxApp.layout
 * @description
 * # layout
 * Factory in the suggestionboxApp.
 */
angular.module('suggestionboxApp')
  .factory('layout', function () {
    
    return {
        stickyFooter: function (subtract) {
        
            var height = $(window).height();
            $(".stickyFooterDependancy").css("min-height",height-subtract);
        }
    };
    
  });
