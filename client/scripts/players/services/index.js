'use strict';

module.exports = function(app) {
    // inject:start
    require('./gameServices')(app);
    require('./userServices')(app);
    // inject:end
};