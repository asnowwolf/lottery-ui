'use strict';

/**
 * @ngdoc service
 * @name jsjLotteryApp.dao/lottery
 * @description
 * # dao/lottery
 * Service in the jsjLotteryApp.
 */
angular.module('jsjLotteryApp').service('DaoLottery', function DaoLottery(daoUtils) {
  this.items = [
    {
      id: '1asdf1',
      survey: 'ashhd1',
      name: '现场抽奖方案一',
      active: true,
      timeFrom: '2014-07-22T12:00:00',
      timeTo: '2014-07-22T16:00:00'
    },
    {
      id: 'ddf1a2',
      survey: 'ashhd1',
      name: '现场抽奖方案二',
      timeFrom: '2014-07-22T12:00:00',
      timeTo: '2014-07-22T16:00:00'
    },
    {
      id: '33113a3',
      survey: 'ashhd1',
      name: '事后抽奖',
      timeFrom: '2014-07-22T12:00:00',
      timeTo: '2014-07-22T16:00:00'
    }
  ];
  this.listBySurvey = function(surveyCode) {
    return _.where(this.items, {survey: surveyCode});
  };
  this.select = function(id) {
    this.current = _.findWhere(this.items, {id: id})
  };
});
