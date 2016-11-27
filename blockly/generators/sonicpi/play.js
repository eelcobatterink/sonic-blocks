'use strict';

goog.provide('Blockly.SonicPi.play');
goog.require('Blockly.SonicPi');


Blockly.SonicPi['play_basic'] = function(block) {
  var note = Blockly.SonicPi.valueToCode(block, 'NOTE', Blockly.SonicPi.ORDER_ATOMIC) || 72;
  var code = 'play ' + note + "\n";
  return code;
};

Blockly.SonicPi['midi_note'] = function(block) {
  var note_number = block.getFieldValue('NOTE_NUMBER');
  var code = note_number;
  return [code, Blockly.SonicPi.ORDER_ATOMIC];
};

Blockly.SonicPi['note'] = function(block) {
  var note = block.getFieldValue('NOTE');
  var octave = block.getFieldValue('OCTAVE');
  var code = note + octave;
  return [code, Blockly.SonicPi.ORDER_ATOMIC];
};

Blockly.SonicPi['live_loop'] = function(block) {
  var loop_name = block.getFieldValue('LOOP_NAME');
  var statements = Blockly.SonicPi.statementToCode(block, 'STATEMENT');
  var code = "live_loop :" + loop_name + " do\n" + statements + "end\n";
  return code;
};

Blockly.SonicPi['sleep'] = function(block) {
  var sleep_period = Blockly.SonicPi.valueToCode(block, 'SLEEP_PERIOD', Blockly.SonicPi.ORDER_ATOMIC);
  var code = "sleep " + sleep_period + "\n";
  return code;
};

Blockly.SonicPi['bpm'] = function(block) {
  var bpm = block.getFieldValue('BPM');
  var code = "use_bpm " + bpm + "\n";
  return code;
};

Blockly.SonicPi['synth'] = function(block) {
  var synth_name = block.getFieldValue('NAME');
  var code = "use_synth " + synth_name + "\n";
  return code;
};

Blockly.SonicPi['fx'] = function(block) {
  var fx_name = block.getFieldValue('FX_NAME');
  var statements = Blockly.SonicPi.statementToCode(block, 'NAME');
  var code = "with_fx " + fx_name + " do\n" + statements + "end\n";
  return code;
};

Blockly.SonicPi['play_advanced'] = function(block) {
  var note = Blockly.SonicPi.valueToCode(block, 'NOTE', Blockly.SonicPi.ORDER_ATOMIC);
  var duration = Blockly.SonicPi.valueToCode(block, 'DURATION', Blockly.SonicPi.ORDER_ATOMIC);
  var code = "play_pattern_timed [" + note + "], " + duration + "\n";
  return code;
};

Blockly.SonicPi['duration'] = function(block) {
  var note_base = parseFloat(block.getFieldValue('NOTE_BASE'));
  var is_dotted = block.getFieldValue('IS_DOTTED') == 'TRUE';
  var code = (note_base * is_dotted ? 1.5 : 1.0);
  return [code, Blockly.SonicPi.ORDER_ATOMIC];
};
