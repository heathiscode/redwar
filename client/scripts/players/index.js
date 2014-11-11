'use strict';
require('angular-ui-router');
require('angular-ionic');
require('famous-angular');

var modulename = 'players';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    /*..*/
    require('ngStorage');

    var app = angular.module(fullname, ['ui.router', 'ionic', 'famous.angular', 'ngStorage']);

    // inject:folders start
    require('./controllers')(app);
    require('./services')(app);

    // inject:folders end

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('login', {
            url : '/login',
            template: require('./views/login.html')
       })
       .state('findAction', {
           url: '/findAction',
           controller: 'main.players.findAction'
       })
       .state('dashboard', {
           url: '/dashboard',
           template: require('./views/dashboard.html'),
           controller: 'main.players.dashboard'
       });

    }]);
    
    
    return app;
};