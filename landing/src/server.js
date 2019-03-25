// allows require modules relative to /src folder
require('app-module-path').addPath(__dirname);

const config = require('./config');

// Bootstrap server
const app = require('koa')();
require('./config/koa')(app);

app.listen(config.port, () => {
  console.log('Example landing application listening on %d, in %s mode', config.port, config.env);
});

// Expose app
exports = module.exports = app;
