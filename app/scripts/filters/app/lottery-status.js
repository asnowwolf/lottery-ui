'use strict';

/**
 * @ngdoc filter
 * @name jsjLotteryApp.filter:lotteryStatus
 * @function
 * @description
 * # lotteryStatus
 * Filter in the jsjLotteryApp.
 */
angular.module('jsjLotteryApp')
  .filter('lotteryStatus', function () {
    return function (input) {
      return input;
    };
  });
