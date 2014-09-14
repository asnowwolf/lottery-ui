'use strict';

/**
 * @ngdoc function
 * @name app.controller:PlayReadyCtrl
 * @description
 * # PlayReadyCtrl
 * Controller of the app
 */
angular.module('app').controller('PlayReadyCtrl', function (daoLottery, daoPlayer, $stateParams) {
  var vm = this;
  vm.lottery = daoLottery;
  vm.awardId = +$stateParams.awardId;
  vm.award = _.findWhere(daoLottery.awards, {id: this.awardId});
  vm.hasHistory = function() {
    return _.find(daoPlayer.items, function(player) {
      return player.awardId || player.givenUp;
    });
  };
  vm.reset = function () {
    _.each(daoPlayer.items, function (player) {
      if (player.awardId === vm.awardId) {
        player.awardId = undefined;
        player.givenUp = false;
      }
    });
  }
});
