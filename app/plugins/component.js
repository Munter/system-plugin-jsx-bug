'use strict';

var jsx = require('systemjs-plugins/jsx');

exports.locate = function (load) {
  var moduleName = load.name.replace(this.baseURL, '');

  var component;
  var parts;
  var path = '';
  var componentName = moduleName;
  var extension = '.jsx';

  if (componentName.indexOf('/') !== -1) {
    parts = componentName.split('/');

    componentName = parts.pop();
    path = parts.join('/') + '/';
  }

  if (componentName.indexOf('-') !== -1) {
    parts = componentName.split('-');

    componentName = parts.shift();
    extension = '-' + parts.join('-');
  }

  component = 'components/' + path + componentName + '/' + componentName + extension;

  return this.baseURL + component;
};

exports.translate = jsx.translate;
