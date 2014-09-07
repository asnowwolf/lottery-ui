'use strict';

/**
 * @ngdoc function
 * @name jsjLotteryApp.controller:PlayReadyCtrl
 * @description
 * # PlayReadyCtrl
 * Controller of the jsjLotteryApp
 */
angular.module('jsjLotteryApp').controller('PlayReadyCtrl', function (lotteryData, $routeParams) {
  this.lottery = lotteryData;
  this.playId = +$routeParams.play;
  this.awardId = +$routeParams.award;
  this.award = _.findWhere(lotteryData.awards, {id: this.awardId});
});
