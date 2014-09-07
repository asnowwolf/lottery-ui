'use strict';

/**
 * @ngdoc function
 * @name jsjLotteryApp.controller:CoverCtrl
 * @description
 * # CoverCtrl
 * Controller of the jsjLotteryApp
 */
angular.module('jsjLotteryApp')
  .controller('PlayCoverCtrl', function (lotteryData) {
    this.lottery = lotteryData;
  });
