/**
 * Visual Blocks Language
 *
 Save and load functions for sonic-blocks
 */
saveXml = function( name, xml ) {
  var a = window.document.createElement('a');
  a.href = window.URL.createObjectURL(new Blob( [xml ], {type: 'text/xml'}));
  a.download = name;

  // Append anchor to body.
  document.body.appendChild(a);
  a.click();

  // Remove anchor from body
  document.body.removeChild(a);
}

function loadXml( file, workspace ) {

    var reader = new FileReader();

    // Read file into memory as UTF-16
    reader.readAsText(file);

    reader.onload = function(evt){
      // Obtain the read file data
      var dom = new DOMParser().parseFromString( evt.target.result, 'text/xml').firstChild
      workspace.clear();
      Blockly.Xml.domToWorkspace(dom, workspace);
      //Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
    }
  }
