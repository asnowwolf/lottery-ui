'use strict';

angular.module('jsjLotteryApp').config(function ($stateProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home/main.html',
    controller: 'MainCtrl as vm'
  });
  $stateProvider.state('home.about', {
    url: '/about',
    templateUrl: 'views/home/about.html',
    controller: 'AboutCtrl as vm'
  });
  $stateProvider.state('lottery.result', {
    url: '/result',
    templateUrl: 'views/lottery/result.html',
    controller: 'LotteryResultCtrl as vm'
  });
  $stateProvider.state('survey.list', {
    url: '/list',
    templateUrl: 'views/survey/list.html',
    controller: 'SurveyListCtrl as vm'
  });
  $stateProvider.state('/answer/list', {
    templateUrl: 'views/answer/list.html',
    controller: 'AnswerListCtrl as vm'
  });
  $stateProvider.state('/lucky-guy/list', {
    templateUrl: 'views/lucky-guy/list.html',
    controller: 'LuckyGuyListCtrl as vm'
  });
  $stateProvider.state('/round/list', {
    templateUrl: 'views/round/list.html',
    controller: 'RoundListCtrl as vm'
  });
  $stateProvider.state('/survey/list', {
    templateUrl: 'views/survey/list.html',
    controller: 'SurveyListCtrl as vm'
  });
  $stateProvider.state('/survey/:surveyId/lottery/list', {
    templateUrl: 'views/lottery/list.html',
    controller: 'LotteryListCtrl as vm'
  });
  $stateProvider.state('/survey/:surveyId/show', {
    templateUrl: 'views/survey/show.html',
    controller: 'SurveyShowCtrl as vm'
  });
  $stateProvider.state('/lottery/:lotteryId/show', {
    templateUrl: 'views/lottery/show.html',
    controller: 'LotteryShowCtrl as vm'
  });
  $stateProvider.state('/lottery/:lotteryId/play', {
    templateUrl: 'views/lottery/play.html',
    controller: 'LotteryPlayCtrl as vm'
  });
  $stateProvider.state('/play/:play/cover', {
    templateUrl: 'views/play/cover.html',
    controller: 'PlayCoverCtrl as vm'
  });
  $stateProvider.state('/play/:play/import', {
    templateUrl: 'views/play/import.html',
    controller: 'PlayImportCtrl as vm'
  });
  $stateProvider.state('/play/:play/main/:award', {
    templateUrl: 'views/play/main.html',
    controller: 'PlayMainCtrl as vm'
  });
  $stateProvider.state('/play/:play/ready/:award', {
    templateUrl: 'views/play/ready.html',
    controller: 'PlayReadyCtrl as vm'
  });
  $stateProvider.state('/play/:play/summary/:award', {
    templateUrl: 'views/play/summary.html',
    controller: 'PlaySummaryCtrl as vm'
  });
});