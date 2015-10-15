'use strict';

/**
 * @ngdoc function
 * @name app.controller:CoverCtrl
 * @description
 * # CoverCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('PlayOverviewCtrl', function (daoLottery, daoPlayer) {
    var vm = this;
    vm.lottery = daoLottery;
    vm.allowReset = function() {
      return _.find(daoPlayer.items, function(player) {
        return player.awardId || player.givenUp;
      });
    };
    vm.resetAll = function() {
      if (!confirm('清空后将无法恢复，只能重新抽奖，您确实要清空吗？')) {
        return;
      }
      _.each(daoPlayer.items, function(player) {
        player.award = undefined;
        player.awardId = undefined;
        player.givenUp = undefined;
      });
      daoPlayer.save();
    };
  });
