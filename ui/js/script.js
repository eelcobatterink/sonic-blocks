function openTab(evt) {
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
      var code = Blockly.SonicPi.workspaceToCode(workspace);
      document.getElementById( 'code_area').value = code;
      document.getElementById( 'contents_blocks').style = "display: None";
      document.getElementById( 'contents_code').style = "display: Block";
      document.getElementById( 'contents_xml').style = "display: None";
    }
    else if( evt.currentTarget.id == 'tab_xml' ){
      var xmlDom = Blockly.Xml.workspaceToDom(workspace);
      var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
      document.getElementById( 'xml_area').value = xmlText;
      document.getElementById( 'contents_blocks').style = "display: None";
      document.getElementById( 'contents_code').style = "display: None";
      document.getElementById( 'contents_xml').style = "display: Block";
    }
}


window.onload = function() {
  document.getElementById( 'tab_blocks').addEventListener( 'click', openTab );
  document.getElementById( 'tab_code').addEventListener( 'click', openTab );
  document.getElementById( 'tab_xml').addEventListener( 'click', openTab );
}
