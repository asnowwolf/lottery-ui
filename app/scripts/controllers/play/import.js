'use strict';

/**
 * @ngdoc function
 * @name jsjLotteryApp.controller:ImportCtrl
 * @description
 * # ImportCtrl
 * Controller of the jsjLotteryApp
 */
angular.module('jsjLotteryApp').controller('PlayImportCtrl', function ($routeParams, lotteryData, players) {
  var vm = this;
  vm.lottery = lotteryData;
  vm.playId = $routeParams.play;
  vm.players = players;
  var rightOf = function(text, count) {
    if (!text)
      return text;
    if (text.length <= count) {
      return text;
    }
    return text.substring(text.length - count, text.length);
  };
  vm.importText = function (text) {
    players.splice(0, players.length);
    var lines = text.split(/(\r|\n)+/);
    _.each(lines, function (line) {
      line = line.trim();
      if (line && !line.match(/您的姓名.*您的手机号.*/)) {
        var tokens = line.match(/(.*)\t(.*)/);
        if (tokens) {
          var name = tokens[1];
          var mobile = rightOf(tokens[2], 4);
          players.push({name: name, mobile: mobile});
        }
      }
    });
  };
});
