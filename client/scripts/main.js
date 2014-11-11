'use strict';

var namespace = 'main';

var angular = require('angular');

var app = angular.module(namespace, [
    'ui.router',
    // inject:modules start
    require('./players')(namespace).name
    // inject:modules end
]);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url : '/',
        template: require('./players/views/home.html') 
   });
}]);

module.exports = app;
