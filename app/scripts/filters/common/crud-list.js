'use strict';

/**
 * @ngdoc filter
 * @name jsjLotteryApp.filter:crudList
 * @function
 * @description
 * # crudList
 * Filter in the jsjLotteryApp.
 */
angular.module('jsjLotteryApp')
  .filter('crudList', function () {
    return function (list) {
      if (_.isUndefined(list))
        return;
      var enhance = function(item, extraValues) {
        extraValues = extraValues || {};

        if (!item.$) {
          item.$ = {};
        }
        _.extend(item.$, extraValues);
        item.$._backup = angular.toJson(item);
        item.$.edit = function() {
          this.editing = true;
        };
        item.$.save = function(callback) {
          var self = this;
          callback.call(item, function() {
            self.editing = false;
            self.isNew = false;
          });
        };
        item.$.reset = function() {
          if (this.isNew) {
            this.remove();
          } else {
            _.extend(item, angular.fromJson(item._backup));
          }
        };
        item.$.cancel = function() {
          this.reset();
          this.editing = false;
        };
        item.$.editing = false;
        if (_.isUndefined(extraValues.isNew))
          item.$.isNew = false;

        item.$.remove = function() {
          var index = list.indexOf(item);
          if (index !== -1)
            list.splice(index, 1);
        };
        return item;
      };
      if (!list.$) {
        list.$ = {};
      }
      var create = function(defaultValues) {
        var item = _.extend({}, defaultValues);
        enhance(item, {isNew: true});
        item.$.edit();
      };
      list.$.create = function(defaultValues) {
        list.push(create(defaultValues));
      };

      list.$.createAtHead = function(defaultValues) {
        list.unshift(create(defaultValues));
      };

      _.each(list, function(item) {
        enhance(item);
      });
      return list;
    };
  });
