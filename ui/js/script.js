//Create a namespace for this library
var SonicUI = {}

SonicUI.isElectron =  function () {
  if (typeof require !== 'function') return false;
  if (typeof window !== 'object') return false;
  try {
    const electron = require('electron');
    if (typeof electron !== 'object') return false;
  } catch(e) {
    return false;
  }
  return true;
}

SonicUI.setupWebsocket = function () {
  ws = new WebSocket("ws://127.0.0.1:4001/");
  var el = document.getElementById("conn-status");
  el.textContent = "Connecting...";
  el.style.backgroundColor = "#f1c40f";


  ws.onopen = function() {
    console.log("websocket connected");
    var el = document.getElementById("conn-status");
    el.textContent = "Connected";
    el.style.backgroundColor = "#2ecc71";
  }

  ws.onclose = function() {
    console.log("websocket disconnected");
    var el = document.getElementById("conn-status");
    el.textContent = "Disconnected";
    el.style.backgroundColor = "#e74c3c";

    setTimeout(SonicUI.setupWebsocket, 1000);
  }
}

SonicUI.openTab = function(evt) {
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";

    if ( evt.currentTarget.id == 'tab_blocks' ){
      document.getElementById( 'contents_blocks').style = "display: Block";
      document.getElementById( 'contents_code').style = "display: None";
      document.getElementById( 'contents_xml').style = "display: None";
    }
    else if( evt.currentTarget.id == 'tab_code' ){
      var code = Blockly.SonicPi.workspaceToCode(SonicUI.workspace);
      document.getElementById( 'code_area').value = code;
      document.getElementById( 'contents_blocks').style = "display: None";
      document.getElementById( 'contents_code').style = "display: Block";
      document.getElementById( 'contents_xml').style = "display: None";
    }
    else if( evt.currentTarget.id == 'tab_xml' ){
      var xmlDom = Blockly.Xml.workspaceToDom(SonicUI.workspace);
      var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
      document.getElementById( 'xml_area').value = xmlText;
      document.getElementById( 'contents_blocks').style = "display: None";
      document.getElementById( 'contents_code').style = "display: None";
      document.getElementById( 'contents_xml').style = "display: Block";
    }
}

SonicUI.stopAll = function() {
  ws.send(JSON.stringify({type: "stop-all"}));
}

SonicUI.runCode = function() {
  var code = Blockly.SonicPi.workspaceToCode(SonicUI.workspace);
  var payload = JSON.stringify({type: "run", code: code});
  ws.send(payload);
  console.log(payload);
}

SonicUI.selectFile = function() {
  document.getElementById( 'load_file_name').click();
}

SonicUI.loadFile = function(){
  var file = document.getElementById( 'load_file_name').files[0];
  if (file) loadXml( file, SonicUI.workspace );
}

SonicUI.saveFile = function(){
  var xmlDom = Blockly.Xml.workspaceToDom(SonicUI.workspace);
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  saveXml( 'sonic-blocks.xml', xmlText );

}

SonicUI.init = function() {
  SonicUI.workspace = Blockly.inject('contents_blocks', {
       media: 'media/',
       toolbox: document.getElementById('toolbox')
  });
  document.getElementById( 'tab_blocks').addEventListener( 'click', SonicUI.openTab );
  document.getElementById( 'tab_code').addEventListener( 'click', SonicUI.openTab );
  document.getElementById( 'tab_xml').addEventListener( 'click', SonicUI.openTab );
  document.getElementById( 'load' ).addEventListener( 'click',  SonicUI.selectFile );
  document.getElementById( 'load_file_name' ).addEventListener( 'change', SonicUI.loadFile );
  document.getElementById( 'save' ).addEventListener( 'click', SonicUI.saveFile );
  document.getElementById( 'run' ).addEventListener( 'click', SonicUI.runCode );
  document.getElementById( 'stop' ).addEventListener( 'click',SonicUI. stopAll );

  SonicUI.setupWebsocket();
}


window.addEventListener( 'load', SonicUI.init );
