'use strict';

/**
 * @ngdoc function
 * @name jsjLotteryApp.controller:PlayMainCtrl
 * @description
 * # PlayMainCtrl
 * Controller of the jsjLotteryApp
 */
angular.module('jsjLotteryApp').controller('PlayMainCtrl', function ($scope, lotteryData, players, $routeParams, $timeout) {
  var vm = this;
  vm.lottery = lotteryData;
  vm.playId = +$routeParams.play;
  vm.awardId = +$routeParams.award;
  vm.award = _.findWhere(lotteryData.awards, {id: vm.awardId});
  vm.awardIndex = 0;
  vm.index = 0;
  // 唯一化
  vm.players = _.unique(players, function(item) {
    return item.name + item.mobile;
  });
  // 清除本级中奖信息
  _.each(vm.players, function(player) {
    if (player.award == vm.award) {
      player.award = undefined;
    }
  });
  // 随机洗牌
  vm.players = _.shuffle(vm.players);
  // 忽略弃权的或者已中奖的
  vm.players = _.filter(vm.players, function(item) {
    return !item.givenUp && !item.award;
  });
  vm.removePlayer = function(player) {
    var index = vm.players.indexOf(player);
    vm.players.splice(index, 1);
  };
  var next = function() {
    ++vm.index;
    if (vm.index >= vm.players.length)
      vm.index = 0;
    if (!vm.rolling)
      return;
    vm.current = vm.players[vm.index];
  };
  vm.rolling = false;
  vm.start = function() {
    vm.rolling = true;
    vm.players = _.filter(vm.players, function(item) {
      return !item.givenUp && !item.award;
    });
    setTimeout(function() {
      $scope.$apply(function() {
        next();
      });
      if (vm.rolling)
        vm.start();
    }, 50);
  };
  vm.stopping = false;
  vm.stop = function() {
    vm.stopping = true;
    $timeout(function() {
      vm.rolling = false;
      vm.stopping = false;
      vm.current.award = vm.award;
      ++vm.awardIndex;
    }, 1000);
  };
  vm.giveUp = function() {
    vm.current.givenUp = true;
    vm.start();
  };

  vm.start();

});
