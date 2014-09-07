'use strict';

/**
 * @ngdoc filter
 * @name jsjLotteryApp.filter:blank
 * @function
 * @description
 * # blank
 * Filter in the jsjLotteryApp.
 */
angular.module('jsjLotteryApp')
  .filter('blank', function () {
    return function (input, defaultValue) {
      return input || defaultValue || '(无)'
    };
  });
