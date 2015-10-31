'use strict';

angular.module('app').controller('PlaySettingCtrl', function SettingCtrl(daoLottery) {
  var vm = this;
  vm.lottery = daoLottery;

  vm.onContinue = function () {
    daoLottery.awards = _.filter(daoLottery.awards, function (award) {
      return !!award.name || !!award.count || !!award.item;
    });
  };

  vm.showDialog = function () {
    setConcurrentHits.value = localStorage.getItem('concurrentHits') || 1;
    bootbox.prompt(setConcurrentHits);
  };


  function isNumber(string) {
    return /^\d+$/.test(string);
  }

  function isConcurrentHitsValid (result) {
    return !isNumber(result) || parseInt(result) > 3 || parseInt(result) < 1;
  }

  var setConcurrentHits = {
    size: 'small',
    title: '设定每次抽取人数:',
    value: null,
    callback: function (result) {
      if(result === null) {
        return;
      }

      if (isConcurrentHitsValid(result)) {
        bootbox.alert(warningAndForceAgain);
      }
      else {
        localStorage.setItem('concurrentHits', result);
      }
    }
  };

  var warningAndForceAgain = {
    size: 'small',
    title: '警告',
    message: '只能输入1~3之间的数字!',
    callback: function () {
      vm.showDialog();
    }
  };
});
