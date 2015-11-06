'use strict';

angular.module('app').controller('PlayPlayersCtrl', function (daoLottery, daoPlayers) {
  var vm = this;
  vm.lottery = daoLottery;
  vm.player = daoPlayers;
  vm.clear = function() {
    if (!confirm('即将清空名单，清空后您可能需要重新导入，是否继续？')) {
      return;
    }
    vm.player.clear();
  };
});
