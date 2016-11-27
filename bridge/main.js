var osc = require("osc");
var WebSocketServer = require("ws").Server;

var spi = new osc.UDPPort({
    localAddress: "127.0.0.1",
    localPort: 4558,

    remoteAddress: "127.0.0.1",
    remotePort: 4557
});

var connected = false;

spi.on("ready", function() {

});

spi.on("message", function(msg) {
    console.log("Message, cmd: " + msg.address + ", args: " + msg.args.join(" "));
});

spi.open();



var wss = new WebSocketServer({ port: 4001 });
var clients = []

wss.on('connection', function connection(ws) {
    clients.push(ws);

    ws.on('message', function incoming(message) {
    try {
    msg = JSON.parse(message);
    } catch(err) {
        console.log("Could not parse websocket message: " + err);
        return;
    }

    if(msg.type && msg.type == "run") {
        console.log("Running code " + msg.code);
        spi.send({
            address: "/run-code",
            args: [0, msg.code]
        });

        return;
    }
  });
});

/*
var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121
});

udpPort.on("ready", function () {
    var ipAddresses = getIPAddresses();

    console.log("Listening for OSC over UDP.");
    ipAddresses.forEach(function (address) {
        console.log(" Host:", address + ", Port:", udpPort.options.localPort);
    });
});

udpPort.on("message", function (oscMessage) {
    example.mapOSCToSynth(oscMessage, example.synth, example.synthValueMap);
});

udpPort.on("error", function (err) {
    console.log(err);
});

udpPort.open();
*/