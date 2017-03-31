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

    it('should play midi_note with options if the options are set', function() {
      xmlText = `<xml>
  <block type="play_basic" id="$r|3m(mEmVK$H-)],(1v" x="-58" y="64"><mutation amp="true" pan="true" attack="true" decay="true" release="true"></mutation>
    <field name="PAN">0</field>
    <value name="NOTE">
      <block type="math_number" id="#YHK?u~+qGol?=t6twRP">
        <field name="NUM">0</field>
      </block>
    </value>
    <value name="AMP">
      <block type="math_number" id="Ht^WY%0u@So}VaNwDW__">
        <field name="NUM">0</field>
      </block>
    </value>
    <value name="ATTACK">
      <block type="math_number" id="-+U_xb.f74yDOy*+#H,N">
        <field name="NUM">0</field>
      </block>
    </value>
    <value name="DECAY">
      <block type="math_number" id="0K0DJ%%SBQqtE1ag!PAt">
        <field name="NUM">0</field>
      </block>
    </value>
    <value name="RELEASE">
      <block type="math_number" id="nj5sZFZ~?%$-Fxzd1OE-">
        <field name="NUM">0</field>
      </block>
    </value>
  </block>
</xml>`
    code = generateCode(xmlText, this.workspace);
    expect(code).to.equal("play 0, amp: 0, pan: 0, attack: 0, decay: 0, release: 0\n");
    });
  });
});
