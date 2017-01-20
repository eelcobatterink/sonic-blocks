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

Blockly.SonicPi['in_thread'] = function (block) {
    var statements_do = Blockly.SonicPi.statementToCode(block, 'DO');
    var code = 'in_thread do\n'+statements_do+'end\n';
    return code;
};

Blockly.SonicPi['sample'] = function (block) {
    var dropdown_sample = block.getFieldValue('SAMPLE');
    var code = 'sample :'+dropdown_sample+'\n';
    return code;
};


Blockly.SonicPi['controls_repeat_ext'] = function(block) {
    // Repeat n times.
    if (block.getField('TIMES')) {
        // Internal number.
        var repeats = String(Number(block.getFieldValue('TIMES')));
    } else {
        // External number.
        var repeats = Blockly.SonicPi.valueToCode(block, 'TIMES',
                Blockly.SonicPi.ORDER_ASSIGNMENT) || '0';
    }
    var branch = Blockly.SonicPi.statementToCode(block, 'DO');
    branch = Blockly.SonicPi.addLoopTrap(branch, block.id);
    var code = repeats + '.times do\n' + branch + 'end\n';
    // var loopVar = Blockly.SonicPi.variableDB_.getDistinctName(
    //     'count', Blockly.Variables.NAME_TYPE);
    // var endVar = repeats;
    // if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    //     var endVar = Blockly.SonicPi.variableDB_.getDistinctName(
    //         'repeat_end', Blockly.Variables.NAME_TYPE);
    //     code += 'var ' + endVar + ' = ' + repeats + ';\n';
    // }
    // code += 'for (var ' + loopVar + ' = 0; ' +
    //     loopVar + ' < ' + endVar + '; ' +
    //     loopVar + '++) {\n' +
    //     branch + '}\n';
    return code;
};


Blockly.SonicPi['procedures_defnoreturn'] = function(block) {
    // Define a procedure with a return value.
    var funcName = Blockly.SonicPi.variableDB_.getName(
        block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.SonicPi.statementToCode(block, 'STACK');
    if (Blockly.SonicPi.STATEMENT_PREFIX) {
        branch = Blockly.SonicPi.prefixLines(
                Blockly.SonicPi.STATEMENT_PREFIX.replace(/%1/g,
                    '\'' + block.id + '\''), Blockly.SonicPi.INDENT) + branch;
    }
    if (Blockly.SonicPi.INFINITE_LOOP_TRAP) {
        branch = Blockly.SonicPi.INFINITE_LOOP_TRAP.replace(/%1/g,
                '\'' + block.id + '\'') + branch;
    }
    var args = [];
    for (var i = 0; i < block.arguments_.length; i++) {
        args[i] = Blockly.SonicPi.variableDB_.getName(block.arguments_[i],
            Blockly.Variables.NAME_TYPE);
    }
    var argsCode = '';
    if ( args.length > 0 ) {
        argsCode = '|' + args.join(', ') + '|'
    }
    var code = 'define :' + funcName + ' do' + argsCode + '\n' +
        branch + 'end\n';
    code = Blockly.SonicPi.scrub_(block, code);
    // Add % so as not to collide with helper functions in definitions list.
    Blockly.SonicPi.definitions_['%' + funcName] = code;
    return null;
};