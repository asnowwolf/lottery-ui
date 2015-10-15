'use strict';

/**
 * @ngdoc function
 * @name app.controller:PlayReadyCtrl
 * @description
 * # PlayReadyCtrl
 * Controller of the app
 */
angular.module('app').controller('PlayReadyCtrl', function (daoLottery, daoPlayer, $routeParams) {
  var vm = this;
  vm.lottery = daoLottery;
  vm.awardId = +$routeParams.awardId;
  vm.award = _.findWhere(daoLottery.awards, {id: this.awardId});
  vm.hasHistory = function() {
    return _.find(daoPlayer.items, function(player) {
      return player.awardId === vm.awardId || player.givenUp;
    });
  };
  vm.reset = function () {
    if (!confirm('清空后将无法恢复，只能重新抽奖，确实要清空吗？')) {
      return;
    }

    _.each(daoPlayer.items, function (player) {
      if (player.awardId === vm.awardId) {
        player.awardId = undefined;
        player.givenUp = false;
      }
    });
    daoPlayer.save();
  };
});
