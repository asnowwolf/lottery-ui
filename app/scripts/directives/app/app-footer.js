'use strict';

/**
 * @ngdoc directive
 * @name jsjLotteryApp.directive:appFooter
 * @description
 * # appFooter
 */
angular.module('jsjLotteryApp')
  .directive('appFooter', function () {
    return {
      templateUrl: 'views/home/app-footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
