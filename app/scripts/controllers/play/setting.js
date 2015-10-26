'use strict';
angular.module('app').controller('PlaySettingCtrl', function SettingCtrl(daoLottery) {
  var vm = this;
  vm.lottery = daoLottery;

  vm.onContinue = function() {
    _.each(daoLottery.awards, function(award){
      if(!award.name || !award.count || !award.item) {
        daoLottery.removeAward(award);
      }
    });
  };
});
