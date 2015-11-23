'use strict';

angular.module('app').controller('PlayLuckyListCtrl', function PlayLuckyListCtrl(daoPlayers, daoLottery) {
  var vm = this;
  vm.lottery = daoLottery;
  var players = _.reject(daoPlayers.allPlayers, {givenUp: true});
  vm.getPlayersByAward = function(award) {
    return _.where(players, {awardId: award.id});
  };
});
