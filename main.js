const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const bridge = require("./bridge.js");
const child_process = require("child_process");


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;
let rubyServer = null;
const native = process.platform == "win32" ? "win" : "osx";
let rubyServerErrorHandler = null;
let rubyServerExitHandler = null;

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({width: 1280, height: 720});

	// Start "bridge"
	bridge.run();

	// Start SPI Server
	rubyServer = child_process.spawn("../native/" + native + "/ruby/bin/ruby", ["-E", "utf-8", "sonic-pi-server.rb"], {cwd: "bin/sonicpi/" + native + "/app/server/bin/"});
	rubyServerErrorHandler = err => {
		console.log("Ruby server errored", err);
		process.exit(1);
	}
	rubyServerExitHandler = err => {
		console.log("Ruby server died.", err);
		process.exit(2);	// We really want to show this is an issue.
	}

	rubyServer.on("error", rubyServerErrorHandler);
	rubyServer.on("exit", rubyServerExitHandler);

	rubyServer.stdout.pipe(process.stdout);

	// and load the index.html of the app.
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, "ui", "index.html"),
		protocol: 'file:',
		slashes: true
	}))

	if(process.argv.indexOf("--dev") != -1) {
		// Open the DevTools if we're in dev mode.
		mainWindow.webContents.openDevTools();
	}

	// null our menu, we don't need no menu!
	mainWindow.setMenu(null);

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null
		app.quit()
	})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
	const init = child_process.spawn("../native/" + native + "/ruby/bin/ruby", ["-E", "utf-8", "init-script.rb"], {cwd: "bin/sonicpi/" + native + "/app/server/bin/"});

	init.on("exit", createWindow);
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	rubyServer.removeAllListeners("error");
	rubyServer.removeAllListeners("exit");
	rubyServer.kill();
	child_process.spawn("../native/" + native + "/ruby/bin/ruby", ["-E", "utf-8", "exit-script.rb"], {cwd: "bin/sonicpi/" + native + "/app/server/bin/"});
	bridge.stop();
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow()
	}
})
