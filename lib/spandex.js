'use strict';
var bare = require('bare')
  , controller = require('./controller');

bare.router.on('get', '/admin', controller.showTest);
bare.router.on('get', '/index', controller.showIndex);

module.exports = {
  bare: bare
};
