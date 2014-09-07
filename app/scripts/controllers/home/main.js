'use strict';

/**
 * @ngdoc function
 * @name jsjLotteryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsjLotteryApp
 */
angular.module('jsjLotteryApp').controller('MainCtrl', function (DaoSurvey) {
  var vm = this;
  vm.survey = DaoSurvey;
});
