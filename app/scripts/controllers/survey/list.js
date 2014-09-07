'use strict';

/**
 * @ngdoc function
 * @name jsjLotteryApp.controller:SurveyListCtrl
 * @description
 * # SurveyListCtrl
 * Controller of the jsjLotteryApp
 */
angular.module('jsjLotteryApp').controller('SurveyListCtrl', function ($scope, DaoSurvey) {
  var vm = $scope.vm = {};
  vm.survey = DaoSurvey;
});
