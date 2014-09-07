'use strict';

/**
 * @ngdoc directive
 * @name jsjLotteryApp.directive:ifIsAdmin
 * @description
 * # ifIsAdmin
 */
angular.module('jsjLotteryApp')
  .directive('ifIsAdmin', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ifIsAdmin directive');
      }
    };
  });
