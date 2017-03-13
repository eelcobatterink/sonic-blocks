

QUnit.test( "test workspace", function( assert ) {
  workspace = new Blockly.Workspace();
  xml = Blockly.Xml.textToDom( "<xml><block type=\"play_basic\"></block></xml>");
  Blockly.Xml.domToWorkspace( xml, workspace );
  assert.ok( "play 72\n" == Blockly.SonicPi.workspaceToCode( workspace ) )
} );
