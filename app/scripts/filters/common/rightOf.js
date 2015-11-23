'use strict';

angular.module('app').filter('rightOf', function () {
  return function (text, count) {
    if (!text) {
      return text;
    }
    if (text.length <= count) {
      return text;
    }
    return text.substring(text.length - count, text.length);
  };
});