'use strict';
var servicename = 'userServices';

var db = require('app/db.js')('users');


module.exports = function(app) {

    var dependencies = [ ];

    function service() {
        
        var isInitialized = false;
        
        var init = function() {
            isInitialized = true;
        };
        
        return {
            // initialization
            init: init,

            $get: ['$q', '$localStorage', 
                function($q, $localStorage) {
                    
                    var userData = function() {
                        return $localStorage.userData;
                    }

                    var signUp = function(ctrlData) {
                        var data = db.dataCrumble(ctrlData);
                        var d = $q.defer();

                        db.get(data.username,function(err, res) {
                            //user should not exist.
                            if (res) {
                                return d.reject({reason:'Username exists.'});
                            }

                            //save it
                            db.put(data, data.username, function(err, res) {
                                if (err) throw(err);
                                
                                $localStorage.userData = data;
                                d.resolve({
                                    got: res
                                });
                            });   
                            
                        });


                        return d.promise;
                    };

                    var signIn = function(ctrlData) {
                        var data = db.dataCrumble(ctrlData);
                        
                        var d = $q.defer();
                        //no pass, no login
                        if (!data.passphrase) d.reject();
                        
                        db.get(data.username, function(err, res) {
                            if (err) throw(err);
                            
                            if (res.passphrase == data.passphrase || err) {
                                $localStorage.userData = res;
                                return d.resolve({
                                    got: res
                                });
                            } 
                            
                            return d.reject();
                        });


                        return d.promise;
                    };


                    return {
                        isInitialized: isInitialized,
                        signUp: signUp,
                        signIn: signIn,
                        user: userData
                    };
                }
            ]
        };

    }
    service.$inject = dependencies;

    app.provider(app.name + '.' + servicename, service);

};