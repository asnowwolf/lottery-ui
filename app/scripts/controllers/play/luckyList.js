'use strict';

angular.module('app').controller('PlayLuckyListCtrl', function PlayLuckyListCtrl(daoPlayer, daoLottery) {
  var vm = this;
  vm.lottery = daoLottery;
  var players = _.reject(daoPlayer.items, {givenUp: true});
  vm.getPlayersByAward = function(award) {
    return _.where(players, {awardId: award.id});
  };
});