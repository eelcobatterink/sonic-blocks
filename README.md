# SonicPi Blockly

## Table of Contents
* **[Installation instructions](#installations)**
* **[Tests](#tests)**

## Installation Instructions

### Including the Sonic Pi binaries (windows)
Due to there size, the sonic pi binaries that are required are not included in the repository. In order to get these, first install sonic pi on 
your machine (a windows installer is available on the sonic pi website). Note that this has been tested with version **2.11.1**


once installed, go to the Sonic Pi installation directory (typically C:\Program Files (x86)\Sonic Pi) and you will find two directories:
```text
app
etc
```

Create the following directory (relative to your project root) and copy the app and etc directories in there:
```text
.\bin\sonicpi\win
```

So after this is done, you should have the following directires
```text
.\bin\sonicpi\win\app
.\bin\sonicpi\win\etc
```

As a final check, confirm that the following files exist
```text
.\bin\sonicpi\win\app\server\bin\sonic-pi-server.rb
.\bin\sonicpi\win\app\server\native\win\ruby\bin\ruby.exe
```


### Building The app
Building the application requires a NodeJS/NPM installation. Once this is installed, go to the root directory and build the app using npm

```text
npm install
```

Once built, launch the application with

```text
npm start
```

If you encounter problems due to compatibility problems with the nodejs and electron verions, force a rebuild using
```text
.\node_modules\.bin\electron-rebuild.cmd
```






## Tests
Install dependencies:

```text
npm install -g gulp
npm install
```

To run tests:
```text
# Test everything
npm test

# Test SonicPi blocks
npm run test:sonicpi

# Test electron
npm run test:electron
```