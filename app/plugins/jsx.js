'use strict';

var jsx = require('JSXTransformer');

exports.translate = function (load) {
  var transform = jsx.transform(load.source, {
    sourceMap: true
  });

  if (transform.sourceMap) {
    var sourceMap = transform.sourceMap.toJSON();
    sourceMap.file = load.name;
    sourceMap.sources[0] = this.baseURL + load.name;

    load.metadata.sourceMap = transform.sourceMap;
  }

// console.log(this, load);
// console.log(sourceMap);

  return transform.code;
}
