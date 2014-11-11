'use strict';
var controllername = 'dashboard';

var db = require('app/db.js')('users');

module.exports = function(app) {
  /*jshint validthis: true */

  var deps = ['$scope', '$localStorage', 'main.players.gameServices', '$ionicModal'];

  function controller($scope, $localStorage, gameServices, $ionicModal) {
    var vm = this;
    /* .. */
    vm.errors = { gamename: { } };
    /* logged in user data */
    vm.userData = {};
    /* new game request data */
    vm.newGame = {};
    /* */
    vm.modal = {};

    db.dataFy($localStorage.userData, vm.userData);

    var activate = function() {

      vm.newGame = function() {
        gameServices.newGame(vm.newGame).then(
          function(res) {
            vm.errors.gamename = { };
          }, function(err) {
            vm.errors.gamename.taken = true;
          }
        );
      };

    };

    activate();
  }

  controller.$inject = deps;
  app.controller(app.name + '.' + controllername, controller);
};