'use strict';

/**
 * @ngdoc function
 * @name carsiteApp.controller:MakersCtrl
 * @description
 * # MakersCtrl
 * Controller of the carsiteApp
 */
angular.module('carsiteApp')
  .controller('MakersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
