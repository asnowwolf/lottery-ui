'use strict';

/**
 * @ngdoc function
 * @name app.controller:PlayMainCtrl
 * @description
 * # PlayMainCtrl
 * Controller of the app
 */
angular.module('app').controller('PlayMainCtrl', function ($scope, daoLottery, daoPlayers, $routeParams, $timeout, $interval) {
  var vm = this;
  vm.lottery = daoLottery;
  vm.awardId = +$routeParams.awardId;
  vm.award = _.findWhere(daoLottery.awards, {id: vm.awardId});
  vm.numOfClaimedAwards = 0;
  vm.currentPlayerIdx = 0;

  vm.players = _.unique(daoPlayers.allPlayers, function(player) {
    return player.name + player.mobile;
  });

  resetWinnerForCurrentAward(vm.players, vm.awardId);

  vm.players = _.shuffle(vm.players);


  vm.rolling = false;
  vm.start = function() {
    vm.players = excludeGivenUpAndAlreadyWonPlayers(vm.players);

    vm.rolling = true;
    $interval(function() {
        if (!vm.rolling) {
          return;
        }
        vm.currentPlayerIdx = getNextPlayerIdx(vm.currentPlayerIdx, vm.players.length);
        vm.currentPlayer = vm.players[vm.currentPlayerIdx];
    }, 50);
  };

  vm.stopping = false;
  vm.stop = function() {
    vm.stopping = true;
    $timeout(function() {
      vm.rolling = false;
      vm.stopping = false;
      vm.currentPlayer.awardId = vm.awardId;
      ++vm.numOfClaimedAwards;
    }, 618);
  };

  vm.giveUp = function() {
    vm.currentPlayer.givenUp = true;
    --vm.numOfClaimedAwards;
    vm.start();
  };

  vm.start();

  function resetWinnerForCurrentAward(players, awardId) {
    _.each(players, function(player) {
      if (player.awardId === awardId) {
        player.awardId = undefined;
      }
    });
  }

  function getNextPlayerIdx(currentPlayerIdx, totalNumOfPlayers) {
    var nextPlayerIdx = currentPlayerIdx + 1;
    if (nextPlayerIdx >= totalNumOfPlayers) {
      nextPlayerIdx = 0;
    }
    return nextPlayerIdx;
  }

  function excludeGivenUpAndAlreadyWonPlayers (players) {
     return _.filter(players, function(player) {
      return !player.givenUp && !player.awardId;
    });
  }
});
