'use strict';

/**
 * @ngdoc function
 * @name carsiteApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the carsiteApp
 */
angular.module('carsiteApp')
  .controller('LoginCtrl', function ($rootScope, $scope, $http, $location, $log) {

/*
    $http.get('http://localhost:8080/token').success(function(token) {
      $http({
        url: 'http://localhost:8080/repository',
        method: 'GET',
        headers: {
          'X-Auth-Token': token.token
        }
      }).success(function (data) {
        $scope.greeting = data;
      });
    });
*/

    var refreshGreeting = function() {
      $http.get('http://localhost:8080/resource', { headers: {'X-Auth-Token' : $rootScope.xAuthToken} }).success(function(data) {
        $scope.greeting = data;
      });
    }

    var authenticate = function(credentials, callback) {

      var headers = credentials ? {authorization : "Basic "
      + btoa(credentials.username + ":" + credentials.password)
      } : { 'X-Auth-Token' : $rootScope.xAuthToken };

      $http.get('http://localhost:8080/user', {headers : headers}).success(function(data) {
        if (data.name) {
          $rootScope.authenticated = true;
          $http.get('http://localhost:8080/token', {headers: headers}).success(function(token) {
            $rootScope.xAuthToken = token.token;
            refreshGreeting();
          });
        } else {
          $rootScope.authenticated = false;
        }
        callback && callback();
      }).error(function() {
        $rootScope.authenticated = false;
        callback && callback();
      });
    };


    authenticate();
    refreshGreeting();
    $scope.credentials = {};
    $scope.login = function() {
      authenticate($scope.credentials, function() {
        if ($rootScope.authenticated) {
          $location.path("/");
          $scope.error = false;
        } else {
          $location.path("/login");
          $scope.error = true;
        }
      });
    };

    $scope.logout = function() {
      $http.post('http://localhost:8080/logout', {headers: {'X-Auth-Token' : $rootScope.xAuthToken}}).success(function() {
        $rootScope.authenticated = false;
        $location.path("/");
      }).error(function(data) {
        $rootScope.authenticated = false;
      });
    }
  });
