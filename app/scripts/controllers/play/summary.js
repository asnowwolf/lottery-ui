'use strict';

/**
 * @ngdoc function
 * @name jsjLotteryApp.controller:PlaySummaryCtrl
 * @description
 * # PlaySummaryCtrl
 * Controller of the jsjLotteryApp
 */
angular.module('jsjLotteryApp').controller('PlaySummaryCtrl', function (lotteryData, $routeParams, players) {
  var vm = this;
  vm.lottery = lotteryData;
  vm.playId = +$routeParams.play;
  vm.awardId = +$routeParams.award;
  vm.award = _.findWhere(lotteryData.awards, {id: vm.awardId});
  vm.awardCount = lotteryData.awards.length;
  vm.luckyPlayers = _.filter(players, function(player) {
    return !player.givenUp && player.award == vm.award;
  });
});
