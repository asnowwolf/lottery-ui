'use strict';
angular.module('app').controller('PlaySettingCtrl', function SettingCtrl(daoLottery) {
  var vm = this;
  vm.lottery = daoLottery;
});