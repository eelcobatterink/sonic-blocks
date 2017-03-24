"use strict";

const OSC = require("osc-js");
const WebSocketServer = require("ws").Server;
const clients = []

var spi = null;
var wss = null;

let sendPort = { port: 4557 };

let run = () => {
	spi = new OSC({ plugin: new OSC.DatagramPlugin() });
	spi.open({port: 4558});
	
	spi.on("open", () => {
		console.log("SPI Ready.");
	});

	spi.on("/runs/all-completed", (msg) => {
		for(var client of clients) {
			client.send(JSON.stringify({type: "all-runs-completed"}));
		}
	});

	spi.on("/log/info", (msg) => {
		console.log("Message, cmd: " + msg.address + ", args: " + msg.args.join(" "));
	});

	wss = new WebSocketServer({ port: 4001 });

	wss.on('connection', function connection(ws) {
		clients.push(ws);

		ws.on('message', function incoming(message) {
			let msg = null;
			try {
				msg = JSON.parse(message);
			} catch(err) {
				console.log("Could not parse websocket message: " + err);
				return;
			}

			if(msg.type) {
				switch(msg.type) {
					case "run":
						console.log("Running code:\n" + msg.code);
						spi.send(new OSC.Message("/run-code", 0, msg.code), sendPort);
						break;
					case "stop-all":
						console.log("Stopping all runs");
						spi.send(new OSC.Message("/stop-all-jobs", 0), sendPort);
						break;
					default:
						console.log("Received unknown message type " + msg.type);
						console.log(msg);
						break;
				}
			}
		});

		ws.on("close", function() {
			// Remove this websocket from the client array.
			clients.splice(clients.indexOf(this), 1);
		});
	});
}

let stop = () => {
	// Send a kill message to SPI Server
	spi.send(new OSC.Message("/exit", 0), sendPort);
	spi.close();
	wss.close();

	wss = null;
	spi = null;
}

module.exports = {run: run, stop: stop};
