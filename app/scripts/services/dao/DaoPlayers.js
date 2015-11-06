'use strict';

angular.module('app').factory('daoPlayers', function(rightOfFilter) {
  function DaoPlayers() {
    this.allPlayers = [];
  }
  DaoPlayers.prototype.add = function(player) {
    if (!player.id) {
      player.id = this.allPlayers.length + 1;
    } else {
      player.id = +player.id;
    }
    if (!_.findWhere(this.allPlayers, {name: player.name, mobile: player.mobile})) {
      this.allPlayers.push(player);
    }
  };
  DaoPlayers.prototype.remove = function(player) {
    var index = this.allPlayers.indexOf(player);
    this.allPlayers.splice(index, 1);
  };
  DaoPlayers.prototype.importText = function(text) {
    this.allPlayers = [];
    var lines = text.split(/(\r|\n)+/);
    _.each(lines, function (line) {
      line = line.trim();
      if (line && !line.match(/您的姓名.*您的手机号.*/)) {

        var tokens = line.match(/(.*)[\t,，](.*)/);
        if (tokens && tokens.length >= 2) {
          var name = tokens[1].trim();
          var mobile = rightOfFilter(tokens[2].trim(), 4);
          this.add({name: name, mobile: mobile});
        }
      }
    }.bind(this));
  };
  DaoPlayers.prototype.clear = function() {
    this.allPlayers = [];
  };
  DaoPlayers.prototype.load = function() {
    this.allPlayers = angular.fromJson(localStorage.getItem('allPlayers'));
  };
  DaoPlayers.prototype.save = function() {
    localStorage.setItem('allPlayers', angular.toJson(this.allPlayers));
  };
  return new DaoPlayers();
});
