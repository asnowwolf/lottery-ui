'use strict';

/**
 * @ngdoc function
 * @name jsjLotteryApp.controller:SurveyShowCtrl
 * @description
 * # SurveyShowCtrl
 * Controller of the jsjLotteryApp
 */
angular.module('jsjLotteryApp')
  .controller('SurveyShowCtrl', function ($routeParams, $interval, $timeout, DaoSurvey, DaoAnswer) {
    var vm = this;
    vm.survey = DaoSurvey;
    var versions = $routeParams.id;
    vm.survey.select(versions);
    vm.lottery = DaoAnswer;
    var rolling = null;
    var randomAnswer = function() {
      var answers = vm.lottery.listBySurvey($routeParams.id);
      var index = Math.round(Math.random() * answers.length);
      var answer = answers[index];
      return lottery;
    };
    vm.rollStart = function() {
      vm.rolling = true;
      vm.stopping = false;
      rolling = $interval(function() {
        vm.current = randomAnswer();
      }, 200);
    };
    vm.times = 5;
    vm.rollStop = function() {
      vm.stopping = true;
      $timeout(function() {
        $interval.cancel(rolling);
        vm.luckyList.push(vm.current);
        vm.rolling = false;
        vm.stopping = false;
        vm.times--;
      }, 2000);
    };
    vm.rolling = false;
    vm.luckyList = [];

  });
