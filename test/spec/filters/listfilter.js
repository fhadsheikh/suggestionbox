'use strict';

describe('Filter: listFilter', function () {

  // load the filter's module
  beforeEach(module('suggestionboxApp'));

  // initialize a new instance of the filter before each test
  var listFilter;
  beforeEach(inject(function ($filter) {
    listFilter = $filter('listFilter');
  }));


});
