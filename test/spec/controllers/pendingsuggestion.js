'use strict';

describe('Controller: PendingsuggestionCtrl', function () {

  // load the controller's module
  beforeEach(module('suggestionboxApp'));

  var PendingsuggestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PendingsuggestionCtrl = $controller('PendingsuggestionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
