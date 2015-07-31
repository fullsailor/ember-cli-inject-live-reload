'use strict';

module.exports = {
  name: 'live-reload-script-injector',

  contentFor: function(type, config) {
    if (type !== 'head') { return; }

    var options = config.options;
    if (options.liveReload !== true) { return; }

    var src;
    if (options.liveReloadServer) {
      src = options.liveReloadServer + '/livereload.js?snipver=1'
    } else {
      var scheme = options.ssl ? 'https://' : 'http://';
      var liveReloadHost = options.liveReloadHost || options.host;
      src = [scheme, liveReloadHost, ':', options.liveReloadPort, ].join('');
    }

    if (src) {
      return '<script src="' + src + '" type="text/javascript"></script>';
    }
  }
};
