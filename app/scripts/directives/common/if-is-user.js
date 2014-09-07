'use strict';

/**
 * @ngdoc directive
 * @name jsjLotteryApp.directive:ifIsUser
 * @description
 * # ifIsUser
 */
angular.module('jsjLotteryApp')
  .directive('ifIsUser', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ifIsUser directive');
      }
    };
  });
