const Application = require('spectron').Application;
const assert = require('assert');

const isWindows = process.platform == "win32" ? true : false;
let electronPath = `${__dirname}/../node_modules/.bin/electron`;
if (isWindows) {
  electronPath = electronPath + '.cmd';
}

describe('Application launch', function() {
  this.timeout(20000);

  beforeEach(function() {
    this.app = new Application({
      path: electronPath,
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
    return this.app.client.waitUntilWindowLoaded(20000)
      .waitUntilTextExists('#conn-status', 'Connected', 20000)
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