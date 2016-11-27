'use strict';

goog.provide('Blockly.SonicPi.play');

goog.require('Blockly.SonicPi');


Blockly.SonicPi['play_basic'] = function(block) {
  var value_name = Blockly.SonicPi.valueToCode(block, 'NAME', Blockly.SonicPi.ORDER_ATOMIC) || 72;
  var code = 'play ' + value_name + "\n";
  return code;
};

Blockly.SonicPi['midi_note'] = function(block) {
  var number_note_number = block.getFieldValue('NOTE_NUMBER');
  var code = number_note_number;
  return [code, Blockly.SonicPi.ORDER_ATOMIC];
};

Blockly.SonicPi['note'] = function(block) {
  var dropdown_note = block.getFieldValue('NOTE');
  var number_octave = block.getFieldValue('OCTAVE');
  var code = dropdown_note + number_octave;
  return [code, Blockly.SonicPi.ORDER_ATOMIC];
};