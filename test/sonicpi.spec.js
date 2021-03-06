const expect = require('chai').expect;
const Blockly = require('./blockly');

let generateCode = (xmlText, workspace) => {
  let xml = Blockly.Xml.textToDom(xmlText);
  Blockly.Xml.domToWorkspace(xml, workspace);
  let code = Blockly.SonicPi.workspaceToCode(workspace);
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
      let xmlText = `<xml><block type="play_basic"></block></xml>`;
      let code = generateCode(xmlText, this.workspace);
      expect(code).to.equal("play 72\n");
    });

    it('should play midi_note', function() {
      let xmlText = `<xml><block type="play_basic"><value name="NOTE"><block type="midi_note"><field name="NOTE_NUMBER">65</field></block></value></block></xml>`;
      let code = generateCode(xmlText, this.workspace);
      expect(code).to.equal("play 65\n");
    });

    it('should play note', function() {
      let xmlText = `<xml><block type="play_basic"><value name="NOTE"><block type="note"><field name="NOTE">:C</field><field name="OCTAVE">5</field></block></value></block></xml>`;
      let code = generateCode(xmlText, this.workspace);
      expect(code).to.equal("play :C5\n");
    });

    it('should play midi_note with options if the options are set', function() {
      let xmlText = `<xml>
        <block type="play_basic"><mutation amp="true" pan="true" attack="true" decay="true" release="true"></mutation>
          <field name="PAN">0</field>
          <value name="NOTE">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="AMP">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="ATTACK">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="DECAY">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="RELEASE">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
        </block>
      </xml>`;
      let code = generateCode(xmlText, this.workspace);
      expect(code).to.equal("play 0, amp: 0, pan: 0, attack: 0, decay: 0, release: 0\n");
    });
  });

  describe('use synth block', function() {
    let synthTypes = ["sine", "saw", "instrument", "noise", "tri", "square"];
    synthTypes.forEach((synth) => {
      it(`should generate code for synth type ${synth}`, function() {
        let xmlText = `<xml><block type="synth_${synth}"><field name="NAME">${synth}</field></block></xml>`;
        let code = generateCode(xmlText, this.workspace);
        expect(code).to.equal(`use_synth :${synth}\n`);
      });
    });
  });

  describe('use ambient sample block', function() {
    let ambientSamples = ["ambi_soft_buzz", "ambi_swoosh", "ambi_drone", "ambi_glass_hum",
                          "ambi_glass_rub", "ambi_haunted_hum", "ambi_piano", 
                          "ambi_lunar_land", "ambi_dark_woosh", "ambi_choir"];
    ambientSamples.forEach((sample) => {
      it("should generate code for ambient sample", function() {
        let xmlText = `<xml>
                        <block type="ambient_sample">
                          <field name="SAMPLE">${sample}</field>
                        </block>
                      </xml>`;
        let code = generateCode(xmlText, this.workspace);
        expect(code).to.equal(`sample :${sample}\n`);
      });
    });
  });

  describe('use bass drum sample block', function() {
    let bassDrumSamples = ["bd_ada", "bd_pure", "bd_808", "bd_zum",
                          "bd_gas", "bd_sone", "bd_haus", "bd_zome",
                          "bd_boom", "bd_klub", "bd_fat", "bd_tek"];
    bassDrumSamples.forEach((sample) => {
      it("should generate code for bass drum sample", function() {
        let xmlText = `<xml>
                        <block type="bass_drum_sample">
                          <field name="SAMPLE">${sample}</field>
                        </block>
                      </xml>`;
        let code = generateCode(xmlText, this.workspace);
        expect(code).to.equal(`sample :${sample}\n`);
      });
    });
  });

  // describe('use sample block with controls', function() {
  //   let xmlText = ` <xml>
  //                     <block type="sample">
  //                       <mutation amp="true" pan="true" attack="true" decay="true" release="true"></mutation>
  //                       <field name="SAMPLE">bd_808</field>
  //                       <field name="PAN">0</field>
  //                       <value name="AMP">
  //                         <block type="math_number">
  //                           <field name="NUM">0</field>
  //                         </block>
  //                       </value>
  //                       <value name="ATTACK">
  //                         <block type="math_number">
  //                           <field name="NUM">0</field>
  //                         </block>
  //                       </value>
  //                       <value name="DECAY">
  //                         <block type="math_number">
  //                           <field name="NUM">0</field>
  //                         </block>
  //                       </value>
  //                       <value name="RELEASE">
  //                         <block type="math_number">
  //                           <field name="NUM">0</field>
  //                         </block>
  //                       </value>
  //                     </block>
  //                   </xml>`
  //   let code = generateCode(xmlText, this.workspace);
  //   expect(code).to.equal("sample :bd_808, amp: 0, pan: 0, attack: 0, decay: 0, release: 0\n");
  // })
});
