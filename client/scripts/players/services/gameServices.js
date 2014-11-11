'use strict';
var servicename = 'gameServices';

var db = {
    games: require('app/db.js')('games'),
    users: require('app/db.js')('users')
};

module.exports = function(app) {

    var dependencies = [];

    function service() {
        var isInitialized = false;
        var init = function() {
            isInitialized = true;
        };
        return {
            // initialization
            init: init,

            $get: ['$q',
                function($q) {
                    var newGame = function(opts) {
                        var d = $q.defer();
                        var data = db.games.dataCrumb(opts);
                        
                        db.games.get(data.gamename,function(err,res) {
                            
                            if (res) {
                                return d.reject({reason:'Sorry, that name is taken for now.'});
                            }

                            db.games.put(data,data.gamename, function(err,res) {
                                d.resolve({ got:res });
                            });

                        });
                     
                        return d.promise;
                    };

                    return {
                        isInitialized: isInitialized,
                        newGame: newGame
                    };
                }
            ]
        };

    }
    service.$inject = dependencies;

    app.provider(app.name + '.' + servicename, service);
};