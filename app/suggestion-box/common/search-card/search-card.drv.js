'use strict';

/**
 * @ngdoc directive
 * @name suggestionboxApp.directive:search-card
 * @description
 * # header
 */
angular.module('suggestionboxApp')
  .directive('searchCard', function () {
        return {
          templateUrl: 'suggestion-box/common/search-card/search-card.view.html',
          restrict: 'E',
          replace:true,
          scope:false
        };
  });
