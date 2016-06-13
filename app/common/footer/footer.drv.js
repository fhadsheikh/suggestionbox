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
          templateUrl: 'common/footer/footer.view.html',
          restrict: 'E',
          replace:true
        };

    
  });
