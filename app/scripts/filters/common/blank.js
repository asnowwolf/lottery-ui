'use strict';

/**
 * @ngdoc filter
 * @name app.filter:blank
 * @function
 * @description
 * # blank
 * Filter in the app.
 */
angular.module('app')
  .filter('blank', function () {
    return function (input, defaultValue) {
      return input || defaultValue || '(无)';
    };
  });
