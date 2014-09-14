'use strict';

/**
 * @ngdoc function
 * @name app.controller:ImportCtrl
 * @description
 * # ImportCtrl
 * Controller of the app
 */
angular.module('app').controller('PlayImportCtrl', function (daoLottery, daoPlayer) {
  var vm = this;
  vm.lottery = daoLottery;
  vm.player = daoPlayer;
});
