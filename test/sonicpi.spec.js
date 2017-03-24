const expect = require('chai').expect;
const Blockly = require('./blockly');

let generateCode = (xmlText, workspace) => {
  xml = Blockly.Xml.textToDom(xmlText);
  Blockly.Xml.domToWorkspace(xml, workspace);
  code = Blockly.SonicPi.workspaceToCode(workspace);
  return code;
}

describe('Code generation', function() {

  before(function() {
    this.workspace = new Blockly.Workspace();
  });

  afterEach(function() {
    this.workspace.clear();
    this.workspace.dispose();
  });

  describe('play block', function() {
    it('should return default note value when no input is present', function() {
      xmlText = `<xml><block type="play_basic"></block></xml>`;
      code = generateCode(xmlText, this.workspace);
      expect(code).to.equal("play 72\n");
    });

    it('should play midi_note', function() {
      xmlText = `<xml><block type="play_basic"><value name="NOTE"><block type="midi_note"><field name="NOTE_NUMBER">65</field></block></value></block></xml>`;
      code = generateCode(xmlText, this.workspace);
      expect(code).to.equal("play 65\n");
    });

    it('should play note', function() {
      xmlText = `<xml><block type="play_basic"><value name="NOTE"><block type="note"><field name="NOTE">:C</field><field name="OCTAVE">5</field></block></value></block></xml>`;
      code = generateCode(xmlText, this.workspace);
      expect(code).to.equal("play :C5\n");
    });
  });
});