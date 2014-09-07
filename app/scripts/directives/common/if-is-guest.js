'use strict';

/**
 * @ngdoc directive
 * @name jsjLotteryApp.directive:ifIsGuest
 * @description
 * # ifIsGuest
 */
angular.module('jsjLotteryApp')
  .directive('ifIsGuest', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ifIsGuest directive');
      }
    };
  });
