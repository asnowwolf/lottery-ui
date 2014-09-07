'use strict';

/**
 * @ngdoc service
 * @name jsjLotteryApp.baseDao
 * @description
 * # baseDao
 * Service in the jsjLotteryApp.
 */
angular.module('jsjLotteryApp')
  .service('daoUtils', function DaoUtils() {
    /** 对列表进行增强，为其增加prototype */
    this.enhanceList = function(list) {

    };
    this.enhanceItem = function(item) {
      var mixin = {
        $edit: function() {
          this.$editing = true;
        },
        $cancel: function() {
          this.$editing = false;
        }
      };
    };
  });
