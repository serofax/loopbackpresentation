var loopback = require('loopback');
var boot = require('loopback-boot');

var app = loopback();


boot(app, __dirname + '/../server', function(err) {
  if (err) throw err;
  var ds = app.dataSources.mysql;
  ds.automigrate(function () {
    console.log('migrated');
    process.exit(0);
  });
});
