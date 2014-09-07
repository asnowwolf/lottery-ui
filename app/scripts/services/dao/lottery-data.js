'use strict';

/**
 * @ngdoc service
 * @name jsjLotteryApp.lotteryData
 * @description
 * # lotteryData
 * Constant in the jsjLotteryApp.
 */
angular.module('jsjLotteryApp').constant('lotteryData', {
  name: '2014 Open House',
  description: '关注微信并填写反馈问卷，大奖等你哦！',
  awards: [
    {
      id: 1,
      name: '三等奖',
      count: 5,
      items: ['《软件开发践行录》']
    },
    {
      id: 2,
      name: '二等奖',
      count: 2,
      items: ['爱国者移动电源']
    },
    {
      id: 3,
      name: '一等奖',
      count: 1,
      items: ['filco红轴机械键盘']
    }
  ]});
