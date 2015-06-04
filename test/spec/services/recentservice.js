'use strict';

describe('Service: recentService', function () {

  // load the service's module
  beforeEach(module('carsiteApp'));

  // instantiate service
  var recentService;
  beforeEach(inject(function (_recentService_) {
    recentService = _recentService_;
  }));

  it('should do something', function () {
    expect(!!recentService).toBe(true);
  });

});
