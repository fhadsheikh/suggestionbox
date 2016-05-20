'use strict';

describe('Service: suggestion', function () {

  // load the service's module
  beforeEach(module('suggestionboxApp'));

  // instantiate service
  var suggestion;
  beforeEach(inject(function (_suggestion_) {
    suggestion = _suggestion_;
  }));

  it('should do something', function () {
    expect(!!suggestion).toBe(true);
  });

});
