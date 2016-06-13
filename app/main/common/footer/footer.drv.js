'use strict';

/**
 * @ngdoc directive
 * @name suggestionboxApp.directive:footer
 * @description
 * # footer
 */
angular.module('tproPortal')
  .directive('footer', function () {

        return {
          templateUrl: 'main/common/footer/footer.view.html',
          restrict: 'E',
          replace:true
        };

    
  });
