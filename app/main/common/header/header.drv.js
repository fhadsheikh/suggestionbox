'use strict';

/**
 * @ngdoc directive
 * @name suggestionboxApp.directive:header
 * @description
 * # header
 */
angular.module('tproPortal')
  .directive('header', function () {
        return {
          templateUrl: 'main/common/header/header.view.html',
          restrict: 'E',
          replace:true
        };
  });
