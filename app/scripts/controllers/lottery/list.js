'use strict';

/**
 * @ngdoc function
 * @name jsjLotteryApp.controller:LotteryListCtrl
 * @description
 * # LotteryListCtrl
 * Controller of the jsjLotteryApp
 */
angular.module('jsjLotteryApp').controller('LotteryListCtrl', function (config, DaoSurvey, DaoLottery, $routeParams, $location) {
  var surveyId = $routeParams.surveyId;
  this.survey = DaoSurvey.get(surveyId);
  this.test = {
    name: 'a'
  };
  this.lottery = DaoLottery;
});
