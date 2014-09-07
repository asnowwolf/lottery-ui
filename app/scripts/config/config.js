'use strict';

/**
 * @ngdoc constant
 * @name jsjLotteryApp.constant.config
 * @description
 * # 全局设置，常量
 */
angular.module('jsjLotteryApp').constant('config', {
  api: {
    root: 'http://jsj-lottery.herokuapp.com/api/',
    of: function(path, query) {
      if (this.root.lastIndexOf('/') !== this.root.length - 1) {
        this.root += '/';
      }
      if (path.indexOf('/') === 0)
        path = path.slice(1);

      if (query) {
        if (path.indexOf('?') === -1)
          path += '?';
        else if (path.indexOf('&') === -1)
          path += '&';
      }
      return this.root + path + _.map(query, function(value, key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(value)
      }).join('&')
    }
  }
});
