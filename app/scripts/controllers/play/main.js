'use strict';


angular.module('app').controller('PlayMainCtrl', function ($scope, daoLottery, daoPlayers, $routeParams, $timeout, $interval) {
  var vm = this;
  vm.lottery = daoLottery;
  vm.awardId = +$routeParams.awardId;
  vm.award = _.findWhere(daoLottery.awards, {id: vm.awardId});
  vm.numOfClaimedAwards = 0;
  vm.currentPlayerIdx = 0;

  var concurrentHitNum = vm.award.concurrentHits || 1;

  vm.players = _.unique(daoPlayers.allPlayers, function(player) {
    return player.name + player.mobile;
  });

  resetWinnerForCurrentAward(vm.players, vm.awardId);

  vm.players = _.shuffle(vm.players);


  vm.rolling = false;
  vm.stopping = false;

  vm.start = start;
  vm.stop = stop;
  vm.giveUp = giveUp;

  vm.start();


  function start() {
    vm.players = excludeGivenUpOrAlreadyWonPlayers(vm.players);
    if(vm.award.count - vm.numOfClaimedAwards < concurrentHitNum) {
      concurrentHitNum = vm.award.count - vm.numOfClaimedAwards;
    }

    vm.rolling = true;
    $interval(function() {
      if (!vm.rolling) {
        return;
      }
      vm.currentPlayers = getRandomPlayers(vm.players, concurrentHitNum);
    }, 50);
  }

  function stop() {
    vm.stopping = true;
    $timeout(function() {
      vm.stopping = false;
      vm.rolling = false;
      _.each(vm.currentPlayers, function(currentPlayer){ currentPlayer.awardId = vm.awardId;});
      vm.numOfClaimedAwards += vm.currentPlayers.length;
    }, 618);
  }

  function giveUp(player) {
    player.givenUp = true;
    delete player.awardId;
    _.remove(vm.currentPlayers, function(currentPlayer){ return currentPlayer === player;});
    --vm.numOfClaimedAwards;

    if(vm.currentPlayers.length === 0) {
      vm.start();
    }
  }

  function resetWinnerForCurrentAward(players, awardId) {
    _.each(players, function(player) {
      if (player.awardId === awardId) {
        delete player.awardId;
      }
    });
  }

  function getRandomPlayers(allPlayers, num) {
    return _.sample(allPlayers, num);
  }

  function excludeGivenUpOrAlreadyWonPlayers (players) {
     return _.filter(players, function(player) {
      return !player.awardId && !player.givenUp;
    });
  }
});
