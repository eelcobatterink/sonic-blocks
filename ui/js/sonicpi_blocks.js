'use strict';

goog.provide('Blockly.Blocks.play');
goog.require('Blockly.Blocks');

Blockly.Blocks['controls_play_pan'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('pan');
this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
        }
}

Blockly.Blocks['controls_play_amp'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('amp');
this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
        }
}
Blockly.Blocks['controls_play_attack'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('attack');
this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
        }
}
Blockly.Blocks['controls_play_decay'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('decay');
this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
        }
}
Blockly.Blocks['controls_play_release'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('release');
this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
        }
}

Blockly.Blocks['controls_play_play'] = {
  init: function() {
  this.appendDummyInput()
      .appendField('play')
//      .appendField(new Blockly.FieldCheckbox("FALSE"), "IS_AMP")
//      .appendField('amp')
//      .appendField(new Blockly.FieldCheckbox("FALSE"), "IS_PAN")
//      .appendField('pan')
//      .appendField(new Blockly.FieldCheckbox("FALSE"), "IS_ATTACK")
//      .appendField('attack')
//      .appendField(new Blockly.FieldCheckbox("FALSE"), "IS_DECAY")
//      .appendField('decay')
//      .appendField(new Blockly.FieldCheckbox("FALSE"), "IS_RELEASE")
//      .appendField('release')
      ;
  this.appendStatementInput("STATEMENT")
        .setCheck(null);
  }
}

Blockly.Blocks['math_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "NUM");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(260);
	this.setTooltip('');
  }
};

Blockly.Blocks['math_arithmetic'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck("math_number");
    this.appendValueInput("B")
        .setCheck("math_number")
        .appendField(new Blockly.FieldDropdown([["+", "ADD"], ["-", "MINUS"], ["×", "MULTIPLY"], ["÷", "DIVIDE"], ["^", "POWER"]]), "OP");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(260);
	this.setTooltip('');
  }
};


Blockly.Blocks['play_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play");
    this.appendValueInput("NOTE")
        .setCheck(["note", "midi-note"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setMutator( new Blockly.Mutator(['controls_play_amp',
				                              	  'controls_play_pan',
				                              	  'controls_play_attack',
					                                'controls_play_decay',
	   				                              'controls_play_release'] ) );
  },
  c_amp_:false,
  c_pan_:false,
  c_attack_:false,
  c_decay_:false,
  c_release_:false,
  mutationToDom: function() {
    if (!(this.c_amp_ || this.c_pan_ || this.c_attack_ || this.c_decay_ || this.c_release_)){
      return null;
    } else {
      var container = document.createElement('mutation');
      if (this.c_amp_) {
        container.setAttribute('amp', this.c_amp_);
      }
      if (this.c_pan_) {
        container.setAttribute('pan', this.c_pan_);
      }
      if (this.c_attack_) {
        container.setAttribute('attack', this.c_attack_);
      }
      if (this.c_decay_) {
        container.setAttribute('decay', this.c_decay_);
      }
      if (this.c_release_) {
        container.setAttribute('release', this.c_release_);
      }
      return container;
     }
  },

  domToMutation: function (xmlElement){
    this.c_amp_ = (xmlElement.getAttribute('amp') == 'true') || false;
    this.c_pan_ = (xmlElement.getAttribute('pan') == 'true') || false;
    this.c_attack_ = (xmlElement.getAttribute('attack')=='true') || false;
    this.c_decay_ = (xmlElement.getAttribute('decay') == 'true') || false;
    this.c_release_ = (xmlElement.getAttribute('release') == 'true') || false;
    this.updateShape_()
  },

  updateShape_: function() {

    //RESET
    if( this.getInput('AMP') ){
      this.removeInput( 'AMP' );
    }
    if( this.getInput('PAN') ){
      this.removeInput( 'PAN' );
    }
    if( this.getInput('ATTACK') ){
      this.removeInput( 'ATTACK' );
    }
    if( this.getInput('DECAY') ){
      this.removeInput( 'DECAY' );
    }
    if( this.getInput('RELEASE') ){
      this.removeInput( 'RELEASE' );
    }

    //REPOPULATE
    if(this.c_amp_){
      this.appendValueInput( 'AMP' )
          .setCheck('math_number')
          .appendField( 'amp' );
    }
    if(this.c_pan_){
      this.appendValueInput( 'PAN' )
          .setCheck('math_number') //[-1,1]
          .appendField( 'pan');
    }
    if(this.c_attack_){
      this.appendValueInput( 'ATTACK' )
          .setCheck('math_number')
          .appendField( 'attack' );
    }
    if(this.c_decay_){
      this.appendValueInput( 'DECAY' )
          .setCheck('math_number')
          .appendField( 'decay' );
    }
    if(this.c_release_){
      this.appendValueInput( 'RELEASE' )
          .setCheck('math_number')
          .appendField( 'release');
      }
  },

  decompose: function(workspace) {
    var topBlock = Blockly.Block.obtain(workspace, 'controls_play_play');
    topBlock.initSvg();

    var connection = topBlock.getInput('STATEMENT').connection;
    if(this.c_amp_){
      var block = workspace.newBlock('controls_play_amp');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    if(this.c_pan_){
      var block = workspace.newBlock('controls_play_pan');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    if(this.c_attack_){
      var block = workspace.newBlock('controls_play_attack');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    if(this.c_decay_){
      var block = workspace.newBlock('controls_play_decay');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    if(this.c_release_){
      var block = workspace.newBlock('controls_play_release');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    return topBlock;
  },

  compose: function(topBlock) {
    this.c_amp_ = false;
    this.c_pan_ = false;
    this.c_attack_ = false;
    this.c_decay_ = false;
    this.c_release_ = false;

    var children = topBlock.getChildren();

    if ( children.length == 1 ) {
      var block = children[0];
      while( block ) {
        switch ( block.type ) {
          case 'controls_play_amp':
            this.c_amp_ = true;
            break;
          case 'controls_play_pan':
            this.c_pan_ = true;
            break;
          case 'controls_play_attack':
            this.c_attack_ = true;
            break;
          case 'controls_play_decay':
            this.c_decay_ = true;
            break;
          case 'controls_play_release':
            this.c_release_ = true;
            break;
          default:
            throw 'Unknown block type.';
        }
        block = block.nextConnection && block.nextConnection.targetBlock();
      }
    }
    this.updateShape_();

  }
};

Blockly.Blocks['puts'] = {
    init: function() {
        this.appendValueInput("OUTPUT")
            .appendField("puts");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('');

    }
};

Blockly.Blocks['midi_note'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("note number")
        .appendField(new Blockly.FieldNumber(72, 0, 127), "NOTE_NUMBER");
    this.setOutput(true, "midi-note");
    this.setColour(135);
    this.setTooltip('');
  }
};

Blockly.Blocks['note'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
												["C", ":C"],
												["C#/Db", ":Cs"],
												["D", ":D"],
												["D#/Eb", ":Ds"],
												["E", ":E"],
												["F", ":F"],
												["F#", ":Fs"],
												["G", ":G"],
												["G#", ":Gs"],
												["A", ":A"],
												["A#", ":As"],
												["B", ":B"]
												]), "NOTE")
        .appendField(new Blockly.FieldNumber(5, -2, 8, 1), "OCTAVE");
    this.setOutput(true, "note");
    this.setColour(135);
    this.setTooltip('');
  }
};

Blockly.Blocks['live_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("loop")
        .appendField(new Blockly.FieldTextInput("loop_name"), "LOOP_NAME");
    this.appendStatementInput("STATEMENT")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');

  }
};

Blockly.Blocks['sleep'] = {
  init: function() {
    this.appendValueInput("SLEEP_PERIOD")
        .setCheck(["duration", "math_number"])
        .appendField("sleep");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');

  }
};

Blockly.Blocks['bpm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set tempo to ")
        .appendField(new Blockly.FieldNumber(0, 20, 500), "BPM")
        .appendField("bpm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');

  }
};

Blockly.Blocks['synth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("use synth")
        .appendField(new Blockly.FieldDropdown([
                                                ["sine", "sine"],
                                                ["saw", "saw"],
                                                ["tb303", "tb303"],
                                                ["square", "square"],
                                                ["beep", "beep"],
                                                ["chiplead", "chiplead"],
                                                ["dpulse", "dpulse"],
                                                ]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');

  }
};

Blockly.Blocks['fx'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("add effect")
        .appendField(new Blockly.FieldDropdown([
												["reverb", "reverb"],
												["echo", "echo"]
												]), "FX_NAME");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');

  }
};

Blockly.Blocks['play_advanced'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play");
    this.appendValueInput("NOTE")
        .setCheck(["note", "midi-note", "scale"]);
    this.appendValueInput("DURATION")
        .setCheck("duration")
        .appendField("for");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
   }
};

Blockly.Blocks['duration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(1), "DURATION")
        .appendField(new Blockly.FieldDropdown([
												["whole", "1"],
												["half", "0.5"],
												["quarter", "0.25"]
												]), "NOTE_BASE")
        .appendField("note, ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "IS_DOTTED")
        .appendField("dotted");
    this.setOutput(true, "duration");
    this.setColour(150);
  }
};

Blockly.Blocks['in_thread'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("thread");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['sample'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("sample")
            .appendField(new Blockly.FieldDropdown([
                                                    ["bd_808", "bd_808"],
                                                    ["bd_ada", "bd_ada"],
                                                    ["bd_gas", "bd_gas"],
                                                    ["bd_haus", "bd_haus"],
                                                    ["bd_klub", "bd_klub"],
                                                    ["bd_pure", "bd_pure"],
                                                    ["bd_sone", "bd_sone"],
                                                    ["elec_triangle", "elec_triangle"],
                                                    ["elec_hi_snare", "elec_hi_snare"],
                                                    ["drum_snare_hard", "drum_snare_hard"],
                                                    ["drum_cymbal_closed", "drum_cymbal_closed"]
                                                    ]), "SAMPLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sample_custom'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sample");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(""), "SAMPLE_NAME");
    this.appendStatementInput("fx")
        .setCheck("fx_option")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['fx_option'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("fx");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("amp"), "fx_name");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1"), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['scale'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("scale_tonic")
            .appendField(new Blockly.FieldTextInput("C"), "TONIC");
        this.appendDummyInput()
            .appendField("name")
            .appendField(new Blockly.FieldDropdown([
													["major","major"],
													["diatonic","diatonic"],
													["ionian","ionian"],
													["dorian","dorian"],
													["phrygian","phrygian"],
													["lydian","lydian"],
													["minor","minor"],
													["blues_major","blues_major"],
													["whole","whole"]
													]), "NAME");
        this.appendDummyInput()
            .appendField("num_octaves:")
            .appendField(new Blockly.FieldNumber(1, 1), "NUM_OCTAVES");
        this.setInputsInline(true);
        this.setOutput(true, "scale");
        this.setColour(140);
        this.setTooltip('Creates a ring of MIDI note numbers when given a tonic note and a scale name. Also takes an optional num_octaves: parameter (octave 1 is the default). If only passed the scale name, the tonic defaults to 0.');
        this.setHelpUrl('');
    }
};
