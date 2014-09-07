'use strict';

/**
 * @ngdoc filter
 * @name jsjLotteryApp.filter:common/boolean
 * @function
 * @description
 * # common/boolean
 * Filter in the jsjLotteryApp.
 */
angular.module('jsjLotteryApp').filter('boolean', function () {
  return function (input) {
    return input ? '是' : '否'
  };
});
