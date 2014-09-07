'use strict';

/**
 * @ngdoc service
 * @name jsjLotteryApp.dao/servey
 * @description
 * # dao/servey
 * Service in the jsjLotteryApp.
 */
angular.module('jsjLotteryApp').service('DaoSurvey', function DaoSurvey() {
  this.items = [
    {
      id: 'ashhd1',
      name: 'Angular基础调查'
    },
    {
      id: '716631a',
      name: '测试问卷1'
    },
    {
      id: 'asd11',
      name: '这是一个名字超长的问卷，超长的问卷，超长的问卷'
    },
    {
      id: '726631a',
      name: '测试问卷2'
    },
    {
      id: '736631a',
      name: '测试问卷3'
    },
    {
      id: '746631a',
      name: '测试问卷4'
    },
    {
      id: '756631a',
      name: '测试问卷5'
    },
    {
      id: '766631a',
      name: '测试问卷6'
    },
    {
      id: '776631a',
      name: '测试问卷7'
    }

  ];
  this.listByUser = function (userId) {
    return this.items;
  };
  this.get = function(id) {
    return _.findWhere(this.items, {id: id});
  };
  this.select = function (id) {
    this.current = this.get(id);
  };
});
