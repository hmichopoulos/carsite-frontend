'use strict';

describe('Controller: RetroCtrl', function () {

  // load the controller's module
  beforeEach(module('carsiteApp'));

  var RetroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RetroCtrl = $controller('RetroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
