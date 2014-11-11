'use strict';
var controllername = 'games';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.message = 'Hello World';
        
        var activate = function() {
            vm.games=[{name:'hello'},{name:'world'}];
        };
        
        activate();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};