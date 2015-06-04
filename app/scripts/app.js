'use strict';

/**
 * @ngdoc overview
 * @name carsiteApp
 * @description
 * # carsiteApp
 *
 * Main module of the application.
 */
angular
  .module('carsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .when('/makers', {
        templateUrl: 'views/makers.html',
        controller: 'MakersCtrl'
      })
      .when('/badges', {
        templateUrl: 'views/badges.html',
        controller: 'BadgesCtrl'
      })
      .when('/retro', {
        templateUrl: 'views/retro.html',
        controller: 'RetroCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    //$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  });
