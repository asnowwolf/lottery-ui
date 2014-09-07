'use strict';

/**
 * @ngdoc service
 * @name jsjLotteryApp.dao/answer
 * @description
 * # dao/answer
 * Service in the jsjLotteryApp.
 */
angular.module('jsjLotteryApp').service('DaoSurveyResult', function DaoSurveyResult() {
  this.items = [
    {
      survey: 'ashhd1',
      name: '张三',
      mobile: '0001',
      lucky: '特等奖'
    },
    {
      survey: 'ashhd1',
      name: '李四',
      mobile: '0002',
      lucky: ''
    },
    {
      survey: 'ashhd1',
      name: '王五',
      mobile: '0003',
      banned: true,
      lucky: ''
    },
    {
      survey: 'ashhd1',
      name: '王五',
      mobile: '0004',
      lucky: ''
    },
    {
      survey: 'ashhd1',
      name: '赵六',
      mobile: '0005',
      lucky: '一等奖'
    }
  ];
  this.listBySurvey = function (surveyCode) {
    return _.where(this.items, {survey: surveyCode});
  };

});
