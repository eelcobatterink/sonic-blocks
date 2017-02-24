'use strict';

goog.provide('Blockly.Blocks.play');
goog.require('Blockly.Blocks');


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
        .setCheck("duration")
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
        .setCheck(["note", "midi-note"]);
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
            .appendField("in_thread");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("DO");
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

Blockly.Blocks['scale'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("scale_tonic")
            .appendField(new Blockly.FieldTextInput("C"), "TONIC");
        this.appendDummyInput()
            .appendField("name")
            .appendField(new Blockly.FieldDropdown([
													["major","MAJOR"], 
													["diatonic","DIATONIC"], 
													["ionian","IONIAN"], 
													["dorian","DORIAN"], 
													["phrygian","PHRYGRIAN"], 
													["lydian","LYDIAN"], 
													["minor","MINOR"], 
													["blues_major","BLUES_MAJOR"], 
													["whole","WHOLE"]
													]), "NAME");
        this.appendDummyInput()
            .appendField("num_octaves:")
            .appendField(new Blockly.FieldNumber(1, 1), "NUM_OCTAVES");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(100);
        this.setTooltip('Creates a ring of MIDI note numbers when given a tonic note and a scale name. Also takes an optional num_octaves: parameter (octave 1 is the default). If only passed the scale name, the tonic defaults to 0.');
        this.setHelpUrl('');
    }
};
