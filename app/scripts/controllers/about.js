'use strict';

/**
 * @ngdoc function
 * @name carsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the carsiteApp
 */
angular.module('carsiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
