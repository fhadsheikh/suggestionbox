'use strict';

/**
 * @ngdoc directive
 * @name suggestionboxApp.directive:search
 * @description
 * # search
 */
angular.module('tproPortal')
  .directive('searchBar', function () {
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
          templateUrl: 'main/common/search-bar/search-bar.view.html'
        };

  });