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

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({width: 1280, height: 720});


	bridge.run();

	/*
	"C:\Users\bleed310\Desktop\ffg-spi\electron-build\sonicpi\win\app\server\native\win\ruby\bin\ruby.exe"
# Start spi server
cd ../sonic-pi/app/server/bin
../native/osx/ruby/bin/ruby sonic-pi-server.rb > ../../../../logs/sonicpi.log 2>&1 &
*/
	let proc = child_process.spawn("../native/win/ruby/bin/ruby.exe", ["-E", "utf-8", "sonic-pi-server.rb"], {cwd: "electron-build/sonicpi/win/app/server/bin/"});
	proc.on("error", (err) => {
		console.log(err);
	});

	proc.on("exit", (err) => {
		console.log(err);
	});

	proc.stdout.pipe(process.stdout);

	// and load the index.html of the app.
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, "ui", "index.html"),
		protocol: 'file:',
		slashes: true
	}))

	// Open the DevTools.
	mainWindow.webContents.openDevTools()

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null
	})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	bridge.close();
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.