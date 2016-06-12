'use strict';

/**
 * @ngdoc directive
 * @name suggestionboxApp.directive:footer
 * @description
 * # footer
 */
angular.module('suggestionboxApp')
  .directive('footer', function () {

        return {
          templateUrl: 'views/footer.html',
          restrict: 'E'
        };

    
  });
