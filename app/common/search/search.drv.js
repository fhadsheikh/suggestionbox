'use strict';

/**
 * @ngdoc directive
 * @name suggestionboxApp.directive:search
 * @description
 * # search
 */
angular.module('suggestionboxApp')
  .directive('search', function () {
        return {
          restrict: 'E',
          scope: {
            search: '=search'
          },
          link: function(scope){
            scope.$evalAsync(function (search) {
              scope.search.filter = search.filter
            })
          },
          templateUrl: 'common/search/search.view.html'
        };

  });