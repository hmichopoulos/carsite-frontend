'use strict';

/**
 * @ngdoc function
 * @name carsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carsiteApp
 */
angular.module('carsiteApp')
  .controller('MainCtrl', function ($scope, $log, $http, recentService, weatherFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.recentOrders = recentService.getRecent6();
    $scope.weather = weatherFactory.get();
  });
