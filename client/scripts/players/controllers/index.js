'use strict';

module.exports = function(app) {
    // inject:start
    require('./dashboard')(app);
    require('./findAction')(app);
    require('./games')(app);
    require('./login')(app);
    require('./settings')(app);
    // inject:end
};