'use strict';

/**
 * @ngdoc directive
 * @name jsjLotteryApp.directive:twDualEdit
 * @description
 * # 双形态编辑器
 */
angular.module('jsjLotteryApp')
  .directive('twDualEdit', function () {
    return {
      scope: {
        // 当前是否正在编辑状态
        editing: '=',
        // 标签形态的绑定模板
        label: '=twDualEdit'
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.$watch('editing', function(editing) {

        });
      }
    };
  });
