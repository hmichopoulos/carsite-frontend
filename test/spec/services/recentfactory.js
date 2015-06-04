'use strict';

describe('Service: recentFactory', function () {

  // load the service's module
  beforeEach(module('carsiteApp'));

  // instantiate service
  var recentFactory;
  beforeEach(inject(function (_recentFactory_) {
    recentFactory = _recentFactory_;
  }));

  it('should do something', function () {
    expect(!!recentFactory).toBe(true);
  });

});
