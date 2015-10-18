'use strict';

angular.module('app').factory('daoLottery', function () {
  function Award(award) {
    _.extend(this, award);
  }

  function DaoLottery() {
    this.name = '';
    this.description = '';
    this.awards = [{id: 1}];
  }

  DaoLottery.prototype.clear = function () {
    this.name = '';
    this.description = '';
    this.awards = [{id: 1}];
  };
  DaoLottery.prototype.load = function () {
    var data = localStorage.getItem('lottery');
    _.extend(this, angular.fromJson(data));
  };
  DaoLottery.prototype.save = function () {
    _.each(this.awards, function(award) {
      award.id = +award.id;
    });
    var data = angular.toJson(this);
    localStorage.setItem('lottery', data);
  };
  DaoLottery.prototype.addAward = function () {
    var award = {};
    award.id = this.awards.length + 1;
    this.awards.push(new Award(award));
  };
  DaoLottery.prototype.removeAward = function (award) {
    this.awards.splice(this.awards.indexOf(award), 1);
  };
  DaoLottery.prototype.importJson = function(text) {
    var data = angular.fromJson(text);
    _.extend(this, data);
  };
  DaoLottery.prototype.exportJson = function() {
    var blob = new Blob([angular.toJson(this)], {type: 'application/json;charset=utf-8'});
    saveAs(blob, 'lottery-' + moment().format('YYYYMMDD') + '.json');
  };
  return new DaoLottery();
});
