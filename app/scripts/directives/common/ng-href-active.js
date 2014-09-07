'use strict';

/**
 * @ngdoc directive
 * @name jsjLotteryApp.directive:ngHrefActive
 * @description
 * # 类似于ui-sref-active，当前地址和所在元素上的链接相同的时候，添加active类
 */
angular.module('jsjLotteryApp').directive('ngHrefActive', function ($location) {
  return {
    restrict: 'A',
    scope: {
      activeClass: '@ngHrefActive'
    },
    link: function postLink(scope, element, attrs) {
      var checkActive = function() {
        var activeClass = scope.activeClass || 'active';
        var link = element.children('a:first');
        if (link.length > 0) {
          var linkHash = link[0].hash;
          var currentHash = "#!" + $location.path();
          if (currentHash.localeCompare(linkHash) === 0) {
            element.addClass(activeClass)
          } else {
            element.removeClass(activeClass)
          }
        }
      };

      scope.$on('$locationChangeSuccess', function () {
        checkActive();
      });
      checkActive();
    }
  };
});
