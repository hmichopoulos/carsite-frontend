'use strict';

/**
 * @ngdoc function
 * @name carsiteApp.controller:BadgesCtrl
 * @description
 * # BadgesCtrl
 * Controller of the carsiteApp
 */
angular.module('carsiteApp')
  .controller('BadgesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
