'use strict';

/**
 * @ngdoc directive
 * @name jsjLotteryApp.directive:ifInRoles
 * @description
 * # ifInRoles
 */
angular.module('jsjLotteryApp')
  .directive('ifInRoles', function (auth) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ifInRoles directive');
      }
    };
  });
