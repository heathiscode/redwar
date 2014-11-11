'use strict';
var angular = require('angular-mocks');
var app = require('../')('app');
var servicename = 'userServices';
describe(app.name, function() {

    describe('Services', function() {

        describe(servicename, function() {

            beforeEach(function() {
                angular.mock.module(app.name);
            });

            beforeEach(module([app.name + '.' + servicename + 'Provider', function (serviceNameProvider) {
                // Configure the provider
                serviceNameProvider.init();
            }]));

            beforeEach(inject(function($injector) {
                this.service = $injector.get(app.name + '.' + servicename);
            }));

            it('should be defined', function() {
                expect(this.service).toBeDefined();
            });

            it('should be initialized', function() {
                expect(this.service.isInitialized).toBe(true);
            });

        });
    });
});