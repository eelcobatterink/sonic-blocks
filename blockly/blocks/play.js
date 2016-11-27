'use strict';

goog.provide('Blockly.Blocks.play');

goog.require('Blockly.Blocks');


Blockly.Blocks['play_basic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play");
    this.appendValueInput("NAME")
        .setCheck(["note", "midi-note"]);
    this.setInputsInline(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
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
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['note'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["C", ":C"], ["C#/Db", ":Cs"], ["D", ":D"], ["D#/Eb", ":Ds"], ["E", ":E"], ["F", ":F"], ["F#", ":Fs"], ["G", ":G"], ["G#", ":Gs"], ["A", ":A"], ["A#", ":As"], ["B", ":B"]]), "NOTE")
        .appendField(new Blockly.FieldNumber(5, -2, 8, 1), "OCTAVE");
    this.setOutput(true, "note");
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};