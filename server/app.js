var jspm = require(process.cwd() + '/package.json').jspm;
var Path = require('path');

var express = require('express');
var app = express();

var serverRoot = Path.join(process.cwd());
var baseUrl = jspm.directories.baseURL || '';
var systemjsUrl = Path.join(jspm.directories.packages || Path.join(baseUrl, 'jspm_packages'), 'system.js');
var configUrl = jspm.configFile || Path.join(baseUrl, 'config.js');

app
  .get('/', function (req, res) {
    res.end([
      '<h1>SystemJS debugging page</h1>',
      '<p>I have loaded your SystemJS configuration for you. Just open your console and start playing. Example:</p>',
      '<pre>System.import("myModule").then(console.log.bind(console));</pre>',
      '<script src="' + systemjsUrl + '"></script>',
      '<script src="' + configUrl + '"></script>'
    ].join('\n'));
  })
  .use(express.static(serverRoot));

app.listen(9001, function () {
  console.log('started sever with server root ' + serverRoot + ' on http://localhost:9001');
});
