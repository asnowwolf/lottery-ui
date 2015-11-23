'use strict';

angular.module('app').config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({
    redirectTo: '/setting'
  });

  $routeProvider.when('/setting', {
    templateUrl: 'views/play/setting.html',
    controller: 'PlaySettingCtrl as vm'
  });
  $routeProvider.when('/players', {
    templateUrl: 'views/data/players.html',
    controller: 'PlayPlayersCtrl as vm'
  });
  $routeProvider.when('/award/:awardId/main', {
    templateUrl: 'views/play/main.html',
    controller: 'PlayMainCtrl as vm'
  });
  $routeProvider.when('/overview', {
    templateUrl: 'views/play/overview.html',
    controller: 'PlayOverviewCtrl as vm'
  });
  $routeProvider.when('/award/:awardId/ready', {
    templateUrl: 'views/play/ready.html',
    controller: 'PlayReadyCtrl as vm'
  });
  $routeProvider.when('/award/:awardId/summary', {
    templateUrl: 'views/play/summary.html',
    controller: 'PlaySummaryCtrl as vm'
  });
  $routeProvider.when('/luckyList', {
    templateUrl: 'views/play/luckyList.html',
    controller: 'PlayLuckyListCtrl as vm'
  });
});
