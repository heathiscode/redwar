'use strict';
var controllername = 'findAction';

var db={ users: require('app/db')('users') };

/* Handle login redirects - new user screens, updates etc.. */

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$state', 'main.players.userServices', '$localStorage'];

    function controller($state, userServices, $localStorage) {
        var vm = this;
        var user = $localStorage.userData;
        var activate = function() {
            if (!!user.firstScreen) {
                user.firstScreen = true;
                db.put(user.username, user, function(err,res) {
                    $state.go('dashboard');
                });
            }
            
            $state.go('dashboard');
            
        };
        activate();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};