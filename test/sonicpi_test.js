const assert = require('assert');
const Blockly = require('./blockly');

describe('Code generation', function() {
  describe('play block', function() {
    it('should return default note value when no input is present', function() {
      workspace = new Blockly.Workspace();
      xmlText = `<xml><block type="play_basic"></block></xml>`;
      xml = Blockly.Xml.textToDom(xmlText);
      Blockly.Xml.domToWorkspace(xml, workspace);
      code = Blockly.SonicPi.workspaceToCode(workspace);
      assert.equal(code, "play 72\n");
    });
  });
});