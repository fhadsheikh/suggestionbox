'use strict';

describe('Service: authInjector', function () {

  // load the service's module
  beforeEach(module('suggestionboxApp'));

  // instantiate service
  var authInjector;
  beforeEach(inject(function (_authInjector_) {
    authInjector = _authInjector_;
  }));

  it('should do something', function () {
    expect(!!authInjector).toBe(true);
  });

});
