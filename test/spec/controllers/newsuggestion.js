'use strict';

describe('Controller: NewsuggestionCtrl', function () {

  // load the controller's module
  beforeEach(module('suggestionboxApp'));

  var NewsuggestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsuggestionCtrl = $controller('NewsuggestionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewsuggestionCtrl.awesomeThings.length).toBe(3);
  });
});
