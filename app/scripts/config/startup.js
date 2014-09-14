'use strict';

angular.module('app').run(function($rootScope, daoLottery, daoPlayer) {
  daoLottery.load();
  daoPlayer.load();
  // 路由变化前自动保存
  $rootScope.$on('$locationChangeStart', function() {
    daoLottery.save();
    daoPlayer.save();
  });
});