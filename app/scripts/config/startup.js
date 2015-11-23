'use strict';

angular.module('app').run(function($rootScope, daoLottery, daoPlayers) {
  daoLottery.load();
  daoPlayers.load();
  // 路由变化前自动保存
  $rootScope.$on('$locationChangeStart', function() {
    daoLottery.save();
    daoPlayers.save();
  });
});
