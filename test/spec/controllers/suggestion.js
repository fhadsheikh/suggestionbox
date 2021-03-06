'use strict';

describe('Controller: SuggestionCtrl', function () {

  // load the controller's module
  beforeEach(module('suggestionboxApp'));

  var SuggestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuggestionCtrl = $controller('SuggestionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SuggestionCtrl.awesomeThings.length).toBe(3);
  });
});
