'use strict';

/**
 * @ngdoc function
 * @name app.controller:PlayMainCtrl
 * @description
 * # PlayMainCtrl
 * Controller of the app
 */
angular.module('app').controller('PlayMainCtrl', function ($scope, daoLottery, daoPlayers, $routeParams, $timeout) {
  var vm = this;
  vm.lottery = daoLottery;
  vm.awardId = +$routeParams.awardId;
  vm.award = _.findWhere(daoLottery.awards, {id: vm.awardId});
  vm.awardIndex = 0;
  vm.index = 0;
  // TODO: 抽取这部分逻辑到服务中
  // 唯一化
  vm.players = _.unique(daoPlayers.allPlayers, function(player) {
    return player.name + player.mobile;
  });
  // 清除本级中奖信息
  _.each(vm.players, function(player) {
    if (player.awardId === vm.awardId) {
      player.awardId = undefined;
    }
  });
  // 随机洗牌
  vm.players = _.shuffle(vm.players);
  // 忽略弃权的或者已中奖的
  vm.players = _.filter(vm.players, function(player) {
    return !player.givenUp && !player.awardId;
  });
  vm.removePlayer = function(player) {
    var index = vm.players.indexOf(player);
    vm.players.splice(index, 1);
  };
  var next = function() {
    ++vm.index;
    if (vm.index >= vm.players.length) {
      vm.index = 0;
    }
    if (!vm.rolling) {
      return;
    }
    vm.current = vm.players[vm.index];
  };
  vm.rolling = false;
  vm.start = function() {
    vm.rolling = true;
    vm.players = _.filter(vm.players, function(player) {
      return !player.givenUp && !player.awardId;
    });
    setTimeout(function() {
      $scope.$apply(function() {
        next();
      });
      if (vm.rolling) {
        vm.start();
      }
    }, 50);
  };
  vm.stopping = false;
  vm.stop = function() {
    vm.stopping = true;
    $timeout(function() {
      vm.rolling = false;
      vm.stopping = false;
      vm.current.awardId = vm.awardId;
      ++vm.awardIndex;
    }, 1000);
  };
  vm.giveUp = function() {
    vm.current.givenUp = true;
    vm.start();
  };

  vm.start();
});
