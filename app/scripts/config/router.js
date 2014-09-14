'use strict';

angular.module('app').config(function ($stateProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('default', {
    url: '',
    redirectTo: '/'
  });
  $stateProvider.state('home', {
    url: '/',
    redirectTo: '/play/setting'
  });
  $stateProvider.state('play', {
    url: '/play',
    abstract: true,
    template: '<div ui-view></div>'
  });
  $stateProvider.state('play.setting', {
    url: '/setting',
    templateUrl: 'views/play/setting.html',
    controller: 'PlaySettingCtrl as vm'
  });
  $stateProvider.state('play.import', {
    url: '/import',
    templateUrl: 'views/play/import.html',
    controller: 'PlayImportCtrl as vm'
  });
  $stateProvider.state('play.main', {
    url: '/:awardId/main',
    templateUrl: 'views/play/main.html',
    controller: 'PlayMainCtrl as vm'
  });
  $stateProvider.state('play.overview', {
    url: '/overview',
    templateUrl: 'views/play/overview.html',
    controller: 'PlayOverviewCtrl as vm'
  });
  $stateProvider.state('play.ready', {
    url: '/:awardId/ready',
    templateUrl: 'views/play/ready.html',
    controller: 'PlayReadyCtrl as vm'
  });
  $stateProvider.state('play.summary', {
    url: '/:awardId/summary',
    templateUrl: 'views/play/summary.html',
    controller: 'PlaySummaryCtrl as vm'
  });
});