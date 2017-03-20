const Application = require('spectron').Application;
const assert = require('assert');

describe('Application launch', function() {
  this.timeout(10000);

  beforeEach(function() {
    this.app = new Application({
      path: `${__dirname}/../node_modules/.bin/electron.cmd`,
      args: ['main.js']
    });

    return this.app.start();
  });

  afterEach(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it('shows an initial window without dev tools and connected to bridge', function() {
    return this.app.client.waitUntilWindowLoaded(10000)
      .waitUntilTextExists('#conn-status', 'Connected', 10000)
      .getWindowCount().then(function (count) {
        assert.equal(count, 1);
      })
      .getText('#conn-status').then(function(connectionStatus) {
        assert.equal(connectionStatus, 'Connected');
      })
      .webContents.isDevToolsOpened().then(function(isDevToolsOpened) {
        assert.equal(isDevToolsOpened, false);
      });
  });

});