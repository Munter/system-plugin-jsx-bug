'use strict';

var jsx = require('JSXTransformer');

exports.translate = function (load) {
  var transform = jsx.transform(load.source, {
    sourceMap: true
  });

  if (transform.sourceMap) {
    var moduleName = load.address.replace(this.baseURL, '');

    var sourceMap = transform.sourceMap.toJSON();
    sourceMap.file = moduleName;
    sourceMap.sources[0] = load.source;

    console.log('sourceMap', sourceMap);

    load.metadata.sourceMap = transform.sourceMap;
  }


  return transform.code;
}
