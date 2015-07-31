'use strict';

module.exports = {
  name: 'live-reload-script-injector',

  contentFor: function(type, config) {
    if (type !== 'head') { return; }
    if (config.liveReload !== true) { return; }

    var src
    if (config.liveReloadServer) {
      src = config.liveReloadServer + '/livereload.js?snipver=1'
    } else {
      var scheme = options.ssl ? 'https://' : 'http://';
      src = [scheme, liveReloadHost, ':', options.liveReloadPort, ].join('');
    }

    if (src) {
      return '<script src="' + src + '" type="text/javascript"></script>';
    }
  }
};
