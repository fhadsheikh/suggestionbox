'use strict';

describe('Service: suggestions', function () {

  // load the service's module
  beforeEach(module('suggestionboxApp'));

  // instantiate service
  var suggestions;
  beforeEach(inject(function (_suggestions_) {
    suggestions = _suggestions_;
  }));

  it('should do something', function () {
    expect(!!suggestions).toBe(true);
  });

});
