'use strict';

/**
 * @ngdoc service
 * @name carsiteApp.weatherFactory
 * @description
 * # weatherFactory
 * Factory in the carsiteApp.
 */
angular.module('carsiteApp')
  .factory('weatherFactory', function ($resource, $log) {
    return $resource("http://22api.openweathermap.org/data/2.5/weather?q=Luxembourg,lu", {}, {
      'get': {
        method: 'GET',
        transformResponse: function (data) {
          data = angular.fromJson(data);
          return data;
        }
      }
    });
  });
