'use strict';

describe('Service: weatherFactory', function () {

  // load the service's module
  beforeEach(module('carsiteApp'));

  // instantiate service
  var weatherFactory;
  beforeEach(inject(function (_weatherFactory_) {
    weatherFactory = _weatherFactory_;
  }));

  it('should do something', function () {
    expect(!!weatherFactory).toBe(true);
  });

});
