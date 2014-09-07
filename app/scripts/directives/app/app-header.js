'use strict';

/**
 * @ngdoc directive
 * @name jsjLotteryApp.directive:appHeader
 * @description
 * # appHeader
 */
angular.module('jsjLotteryApp')
  .directive('appHeader', function () {
    return {
      templateUrl: 'views/home/app-header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var vm = scope.vm = {};
        vm.login = function() {
          vm.user = {nickname: '演示'};
        };
        vm.logout = function() {
          vm.user = null;
        }
      }
    };
  });
