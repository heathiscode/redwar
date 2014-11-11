'use strict';
var controllername = 'login';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$state','$ionicActionSheet', 'main.players.userServices'];

    function controller($state, $ionicActionSheet, userServices) {
        var vm = this;
        
        vm.form = { signUp: { }, signIn: { } };//reflective
        vm.errors = { username: {}, password: {} };//..
        
        vm.errors.clear = function() {
            vm.errors.username = {};
        };

        vm.signUp = function() {
            userServices.signUp(vm.form.signUp).then(function(got) {
                vm.errors.username = { };
                $state.go('findAction');
            }, function() {
                vm.errors.username.duplicate=true;
            });
        };

        vm.signIn = function() {
            userServices.signIn(vm.form.signIn).then(function(got) {
                vm.errors.password = {};
                $state.go('findAction');
            }, function() {
                vm.errors.password.invalid=true;
            });
        };

        var activate = function() {

        };

        activate();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
