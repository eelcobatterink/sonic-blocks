'use strict';

goog.provide('Blockly.Blocks.play');
goog.require('Blockly.Blocks');

Blockly.Blocks['controls_pan'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('pan');
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip('The stereo position of the sound. -1 is left, 0 is in the middle and 1 is on the right. You may use a value in between -1 and 1 such as 0.25 ');
        }
}

Blockly.Blocks['controls_amp'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('amp');
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip('The amplitude of the note. Input Math Number');
        }
}
Blockly.Blocks['controls_attack'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('attack');
this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Input Math Number');
        }
}
Blockly.Blocks['controls_decay'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('decay');
this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level). Input Math Number');
        }
}
Blockly.Blocks['controls_release'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('release');
this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Input Math Number');
        }
}

Blockly.Blocks['controls_pitch'] = {
  init: function() {
	this.appendDummyInput()
            .appendField('pitch');
this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Pitch adjustment in semitones. 1 is up a semitone, 12 is up an octave, -12 is down an octave etc. Maximum upper limit of 24 (up 2 octaves). Lower limit of -72 (down 6 octaves). Decimal numbers can be used for fine tuning. ');
        }
}

var controls_list = [ 'controls_amp',
                      'controls_pan',
                      'controls_attack',
                      'controls_decay',
                      'controls_release',
					  'controls_pitch',
                    ];


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
//      .appendField(new Blockly.FieldCheckbox("FALSE"), "PITCH")
//      .appendField('pitch')
      ;
  this.appendStatementInput("STATEMENT")
        .setCheck(null);
  }
}

Blockly.Blocks['controls_sample_sample'] = {
  init: function() {
  this.appendDummyInput()
      .appendField('sample');
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

function controls_mutationToDom() {
  if (!(this.c_amp_ || this.c_pan_ || this.c_attack_ || this.c_decay_ || this.c_release_ || this.c_pitch_)){
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
	  if (this.c_pitch_) {
		container.setAttribute('pitch', this.c_pitch_);
	  }
      return container;
     }
}

function controls_domToMutation( xmlElement ) {
  this.c_amp_ = (xmlElement.getAttribute('amp') == 'true') || false;
  this.c_pan_ = (xmlElement.getAttribute('pan') == 'true') || false;
  this.c_attack_ = (xmlElement.getAttribute('attack')=='true') || false;
  this.c_decay_ = (xmlElement.getAttribute('decay') == 'true') || false;
  this.c_release_ = (xmlElement.getAttribute('release') == 'true') || false;
  this.c_pitch_ = (xmlElement.getAttribute('pitch') == 'true') || false;
  this.updateShape_()
}

function _controls_updateShape() {
  //RESET
  if( this.getInput('AMP') ){
    this.removeInput( 'AMP' );
  }
  if( this.getInput('DUM_PAN') ){
    this.removeInput( 'DUM_PAN' );
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
  if( this.getInput('PITCH') ){
    this.removeInput( 'PITCH' );
  }

  //REPOPULATE
  if(this.c_amp_){
    this.appendValueInput( 'AMP' )
    .setCheck('math_number')
    .appendField( 'amp' );
  }
  if(this.c_pan_){
    this.appendDummyInput('DUM_PAN')
    .appendField( 'pan')
    .appendField(new Blockly.FieldNumber('0',-1, 1, 0.001), 'PAN');
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
  if(this.c_pitch_){
    this.appendValueInput( 'PITCH' )
    .setCheck('math_number')
    .appendField( 'pitch' );
  }

}

function controls_decompose(control_top_block){
  return function(workspace) {
    var topBlock = Blockly.Block.obtain(workspace, control_top_block);
    topBlock.initSvg();

    var connection = topBlock.getInput('STATEMENT').connection;
    if(this.c_amp_){
      var block = workspace.newBlock('controls_amp');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    if(this.c_pan_){
      var block = workspace.newBlock('controls_pan');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    if(this.c_attack_){
      var block = workspace.newBlock('controls_attack');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    if(this.c_decay_){
      var block = workspace.newBlock('controls_decay');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    if(this.c_release_){
      var block = workspace.newBlock('controls_release');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
	if(this.c_pitch_){
      var block = workspace.newBlock('controls_pitch');
      block.initSvg();
      connection.connect(block.previousConnection);
      connection = block.nextConnection;
    }
    return topBlock;
  };
}

function controls_compose( topBlock ){
  this.c_amp_ = false;
  this.c_pan_ = false;
  this.c_attack_ = false;
  this.c_decay_ = false;
  this.c_release_ = false;
  this.c_pitch_ = false;

  var children = topBlock.getChildren();

  if ( children.length == 1 ) {
    var block = children[0];
    while( block ) {
      switch ( block.type ) {
        case 'controls_amp':
        this.c_amp_ = true;
        break;
        case 'controls_pan':
        this.c_pan_ = true;
        break;
        case 'controls_attack':
        this.c_attack_ = true;
        break;
        case 'controls_decay':
        this.c_decay_ = true;
        break;
        case 'controls_release':
        this.c_release_ = true;
        break;
		case 'controls_pitch':
		this.c_pitch_ = true;
        break;
        default:
        throw 'Unknown block type.';
      }
      block = block.nextConnection && block.nextConnection.targetBlock();
    }
  }
  this.updateShape_();

}

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
    this.setMutator( new Blockly.Mutator( controls_list ) );
  },
  c_amp_:false,
  c_pan_:false,
  c_attack_:false,
  c_decay_:false,
  c_release_:false,
  c_pitch_:false,
  mutationToDom: controls_mutationToDom,

  domToMutation: controls_domToMutation,

  updateShape_: _controls_updateShape,

  decompose: controls_decompose('controls_play_play'),

  compose: controls_compose
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

Blockly.Blocks['ambient_sample'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ambient sample")
            .appendField(new Blockly.FieldDropdown([
                                                    ["soft buzz", "ambi_soft_buzz"],
                                                    ["swoosh", "ambi_swoosh"],
                                                    ["drone", "ambi_drone"],
                                                    ["glass hum", "ambi_glass_hum"],
                                                    ["glass rub", "ambi_glass_rub"],
                                                    ["haunted hum", "ambi_haunted_hum"],
                                                    ["piano", "ambi_piano"],
                                                    ["lunar land", "ambi_lunar_land"],
                                                    ["dark woosh", "ambi_dark_woosh"],
                                                    ["choir", "ambi_choir"],
                                                    ]), "SAMPLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setMutator( new Blockly.Mutator( controls_list ) );
    },
    c_amp_:false,
    c_pan_:false,
    c_attack_:false,
    c_decay_:false,
    c_release_:false,
	c_pitch_:false,
    mutationToDom: controls_mutationToDom,

    domToMutation: controls_domToMutation,

    updateShape_: _controls_updateShape,

    decompose: controls_decompose('controls_sample_sample'),

    compose: controls_compose
};

Blockly.Blocks['bass_drum_sample'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("bass drum sample")
            .appendField(new Blockly.FieldDropdown([
                                                    ["ada", "bd_ada"],
                                                    ["pure", "bd_pure"],
                                                    ["808", "bd_808"],
                                                    ["zum", "bd_zum"],
                                                    ["gas", "bd_gas"],
                                                    ["sone", "bd_sone"],
                                                    ["haus", "bd_haus"],
                                                    ["zome", "bd_zome"],
                                                    ["boom", "bd_boom"],
                                                    ["klub", "bd_klub"],
													["fat", "bd_fat"],
													["tek", "bd_tek"],
                                                    ]), "SAMPLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setMutator( new Blockly.Mutator( controls_list ) );
    },
    c_amp_:false,
    c_pan_:false,
    c_attack_:false,
    c_decay_:false,
    c_release_:false,
	c_pitch_:false,
    mutationToDom: controls_mutationToDom,

    domToMutation: controls_domToMutation,

    updateShape_: _controls_updateShape,

    decompose: controls_decompose('controls_sample_sample'),

    compose: controls_compose
};

Blockly.Blocks['bass_sounds_sample'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("bass sounds sample")
            .appendField(new Blockly.FieldDropdown([
                                                    ["bass hit", "bass_hit_c"],
                                                    ["hard bass", "bass_hard_c"],
                                                    ["thick bass", "bass_thick_c"],
                                                    ["bass drop", "bass_drop_c"],
                                                    ["woodsy bass", "bass_woodsy_c"],
                                                    ["voxy bass", "bass_voxy_c"],
                                                    ["voxy hit bass", "bass_voxy_hit_c"],
                                                    ["dnb bass", "bass_dnb_f"],
                                                    ]), "SAMPLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setMutator( new Blockly.Mutator( controls_list ) );
    },
    c_amp_:false,
    c_pan_:false,
    c_attack_:false,
    c_decay_:false,
    c_release_:false,
	c_pitch_:false,
    mutationToDom: controls_mutationToDom,

    domToMutation: controls_domToMutation,

    updateShape_: _controls_updateShape,

    decompose: controls_decompose('controls_sample_sample'),

    compose: controls_compose
};

Blockly.Blocks['drum_sounds_sample'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("drum sounds sample")
            .appendField(new Blockly.FieldDropdown([
                                                    ["heavy drum kick", "drum_heavy_kick"],
                                                    ["soft mid tomtom", "drum_tom_mid_soft"],
                                                    ["hard mid tomtom", "drum_tom_mid_hard"],
                                                    ["soft low tomtom", "drum_tom_lo_soft"],
                                                    ["hard low tomtom", "drum_tom_lo_hard"],
                                                    ["soft high tomtom", "drum_tom_hi_soft"],
                                                    ["hard high tomtom", "drum_tom_hi_hard"],
                                                    ["soft drum splash", "drum_splash_soft"],
                                                    ["hard drum splash", "drum_splash_hard"],
                                                    ["soft snare drum", "drum_snare_soft"],
                                                    ["hard snare drum", "drum_snare_hard"],
                                                    ["soft cymbal", "drum_cymbal_soft"],
                                                    ["hard cymbal", "drum_cymbal_hard"],
                                                    ["open cymbal", "drum_cymbal_open"],
													["closed cymbal", "drum_cymbal_closed"],
                                                    ["pedal cymbal", "drum_cymbal_pedal"],
                                                    ["soft bass drum", "drum_bass_soft"],
                                                    ["hard bass drum", "drum_bass_hard"],
                                                    ["cowbell", "drum_cowbell"],
                                                    ["drum roll", "drum_roll"],
                                                    ]), "SAMPLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setMutator( new Blockly.Mutator( controls_list ) );
    },
    c_amp_:false,
    c_pan_:false,
    c_attack_:false,
    c_decay_:false,
    c_release_:false,
	c_pitch_:false,
    mutationToDom: controls_mutationToDom,

    domToMutation: controls_domToMutation,

    updateShape_: _controls_updateShape,

    decompose: controls_decompose('controls_sample_sample'),

    compose: controls_compose
};

Blockly.Blocks['electric_sounds_sample'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("electric sounds sample")
            .appendField(new Blockly.FieldDropdown([
                                                    ["triangle", "elec_triangle"],
                                                    ["snare", "elec_snare"],
                                                    ["low snare", "elec_lo_snare"],
                                                    ["mid snare", "elec_mid_snare"],
                                                    ["mid snare", "elec_hi_snare"],
                                                    ["cymbal", "elec_cymbal"],
                                                    ["soft kick", "elec_soft_kick"],
                                                    ["filtered snare", "elec_filt_snare"],
                                                    ["fuzzed tomtom", "elec_fuzz_tom"],
                                                    ["chime", "elec_chime"],
                                                    ["bong", "elec_bong"],
                                                    ["twang", "elec_twang"],
                                                    ["wood", "elec_wood"],
                                                    ["pop", "elec_pop"],
													["beep", "elec_beep"],
                                                    ["blip 1", "elec_blip"],
                                                    ["blip 2", "elec_blip2"],
                                                    ["ping", "elec_ping"],
                                                    ["bell", "elec_bell"],
                                                    ["flip", "elec_flip"],
													["tick", "elec_tick"],
                                                    ["hollow kick", "elec_hollow_kick"],
                                                    ["twip", "elec_twip"],
                                                    ["plip", "elec_plip"],
                                                    ["blup", "elec_blup"],
                                                    ]), "SAMPLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setMutator( new Blockly.Mutator( controls_list ) );
    },
    c_amp_:false,
    c_pan_:false,
    c_attack_:false,
    c_decay_:false,
    c_release_:false,
	c_pitch_:false,
    mutationToDom: controls_mutationToDom,

    domToMutation: controls_domToMutation,

    updateShape_: _controls_updateShape,

    decompose: controls_decompose('controls_sample_sample'),

    compose: controls_compose
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
