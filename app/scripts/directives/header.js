'use strict';

/**
 * @ngdoc directive
 * @name suggestionboxApp.directive:header
 * @description
 * # header
 */
angular.module('suggestionboxApp')
  .directive('header', function () {
        return {
          templateUrl: 'views/header.html',
          restrict: 'E'
        };
  });
