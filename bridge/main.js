var osc = require("osc");
var WebSocketServer = require("ws").Server;
var clients = []

var spi = new osc.UDPPort({
    localAddress: "127.0.0.1",
    localPort: 4558,

    remoteAddress: "127.0.0.1",
    remotePort: 4557
});

spi.on("ready", function() {

});

spi.on("message", function(msg) {

    switch(msg.address) {
        case "/runs/all-completed":
        for(var client of clients) {
            client.send(JSON.stringify({type: "all-runs-completed"}));
        }
        break;

        default:
        console.log("Message, cmd: " + msg.address + ", args: " + msg.args.join(" "));
        break;
    }
});
spi.open();


var wss = new WebSocketServer({ port: 4001 });


wss.on('connection', function connection(ws) {
    clients.push(ws);

    ws.on('message', function incoming(message) {
    try {
    msg = JSON.parse(message);
    } catch(err) {
        console.log("Could not parse websocket message: " + err);
        return;
    }

    if(msg.type) {
        switch(msg.type) {
            case "run":
                console.log("Running code " + msg.code);
                spi.send({
                    address: "/run-code",
                    args: [0, msg.code]
                });
            break;

            case "stop-all":
                console.log("Stopping all runs");
                spi.send({
                    address: "/stop-all-jobs",
                    args: [0]
                });
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
