'use strict';
angular.module('app').controller('PlaySettingCtrl', function SettingCtrl(daoLottery) {
  var vm = this;
  vm.lottery = daoLottery;

  vm.onContinue = function() {
    daoLottery.awards = _.filter(daoLottery.awards, function(award){
      return !!award.name || !!award.count || !!award.item;
    });
  };
});
