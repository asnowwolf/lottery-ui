'use strict';

/**
 * @ngdoc function
 * @name app.controller:PlaySummaryCtrl
 * @description
 * # PlaySummaryCtrl
 * Controller of the app
 */
angular.module('app').controller('PlaySummaryCtrl', function (daoLottery, $routeParams, daoPlayer) {
  var vm = this;
  vm.lottery = daoLottery;
  vm.awardId = +$routeParams.awardId;
  vm.awardCount = daoLottery.awards.length;
  vm.luckyPlayers = _.filter(daoPlayer.items, function(player) {
    return !player.givenUp && player.awardId === vm.awardId;
  });
});
