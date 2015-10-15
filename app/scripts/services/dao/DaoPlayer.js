'use strict';

angular.module('app').factory('daoPlayer', function(rightOfFilter) {
  function DaoPlayer() {
    this.items = [];
  }
  DaoPlayer.prototype.add = function(player) {
    if (!player.id) {
      player.id = this.items.length + 1;
    } else {
      // 转换成数字id，方便排序
      player.id = +player.id;
    }
    if (!_.findWhere(this.items, {name: player.name, mobile: player.mobile})) {
      this.items.push(player);
    }
  };
  DaoPlayer.prototype.remove = function(player) {
    var index = this.items.indexOf(player);
    this.items.splice(index, 1);
  };
  DaoPlayer.prototype.importText = function(text) {
    this.items = [];
    var lines = text.split(/(\r|\n)+/);
    var self = this;
    _.each(lines, function (line) {
      line = line.trim();
      if (line && !line.match(/您的姓名.*您的手机号.*/)) {
        // tab和逗号都可以作为分隔符
        var tokens = line.match(/(.*)[\t,，](.*)/);
        if (tokens && tokens.length >= 2) {
          var name = tokens[1].trim();
          var mobile = rightOfFilter(tokens[2].trim(), 4);
          self.add({name: name, mobile: mobile});
        }
      }
    });
  };
  DaoPlayer.prototype.clear = function() {
    this.items = [];
  };
  DaoPlayer.prototype.load = function() {
    this.items = angular.fromJson(localStorage.getItem('players'));
  };
  DaoPlayer.prototype.save = function() {
    localStorage.setItem('players', angular.toJson(this.items));
  };
  return new DaoPlayer();
});