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
      .appendField('play');
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

  decompose: function(workspace) {
    var topBlock = Blockly.Block.obtain(workspace, 'controls_play_play');
    topBlock.initSvg();

    return topBlock;
  },

  compose: function(topBlock) {


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
