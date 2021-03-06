'use strict';

goog.provide('Blockly.SonicPi.play');
goog.require('Blockly.SonicPi');


Blockly.SonicPi['play_basic'] = function(block) {
  var note = Blockly.SonicPi.valueToCode(block, 'NOTE', Blockly.SonicPi.ORDER_ATOMIC) || 72;
  var code = 'play ' + note + mutatorCodeGen(block);
  return code;
};

Blockly.SonicPi['puts'] = function(block) {
    var output = Blockly.SonicPi.statementToCode(block, 'OUTPUT');
    var code = "puts " + output + "\n";
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

function synthBlockCodeGenerator(block) {
  var synth_name = block.getFieldValue('NAME');
  var code = "use_synth :" + synth_name + "\n";
  return code;
}

Blockly.SonicPi['synth_sine'] = function(block) {
	var code = synthBlockCodeGenerator(block)
	return code;
};

Blockly.SonicPi['synth_saw'] = function(block) {
	var code = synthBlockCodeGenerator(block)
	return code;
};

Blockly.SonicPi['synth_instrument'] = function(block) {
	var code = synthBlockCodeGenerator(block)
	return code;
};

Blockly.SonicPi['synth_noise'] = function(block) {
	var code = synthBlockCodeGenerator(block)
	return code;
};

Blockly.SonicPi['synth_tri'] = function(block) {
	var code = synthBlockCodeGenerator(block)
	return code;
};

Blockly.SonicPi['synth_square'] = function(block) {
	var code = synthBlockCodeGenerator(block)
	return code;
};

Blockly.SonicPi['fx'] = function(block) {
  var fx_name = block.getFieldValue('FX_NAME');
  var statements = Blockly.SonicPi.statementToCode(block, 'NAME');
  var code = "with_fx :" + fx_name + " do\n" + statements + "end\n";
  return code;
};

Blockly.SonicPi['play_advanced'] = function(block) {
  var note = Blockly.SonicPi.statementToCode(block, 'NOTE');
  var duration = Blockly.SonicPi.valueToCode(block, 'DURATION', Blockly.SonicPi.ORDER_ATOMIC);
  var code = 'play_pattern_timed [' + note + '], ' + duration + '\n';
  return code;
};

Blockly.SonicPi['play_pattern_timed'] = function(block) {
  var value_notes = Blockly.SonicPi.valueToCode(block, 'NOTES', Blockly.SonicPi.ORDER_ATOMIC);
  var value_times = Blockly.SonicPi.valueToCode(block, 'TIMING', Blockly.SonicPi.ORDER_ATOMIC);

  var code = 'play_pattern_timed ' + value_notes + ', ' + value_times + ' ' + mutatorCodeGen(block);
  return code;
};

Blockly.SonicPi['notes'] = function(block) {
  var value_notes_list = Blockly.SonicPi.valueToCode(block, 'NOTE_LIST', Blockly.SonicPi.ORDER_ATOMIC);
  var code = value_notes_list + mutatorNotes(block);
  return code;
};

Blockly.SonicPi['timings'] = function(block) {
  var value_timings_list = Blockly.SonicPi.valueToCode(block, 'TIMINGS_LIST', Blockly.SonicPi.ORDER_ATOMIC);
  var code = value_timings_list + mutatorTimings(block);
  return code;
};

Blockly.SonicPi['duration'] = function(block) {
  var note_base = parseFloat(block.getFieldValue('NOTE_BASE'));
  var duration = parseFloat(block.getFieldValue('DURATION'));
  var is_dotted = block.getFieldValue('IS_DOTTED') == 'TRUE';
  var code = duration * note_base;
  code = code * ( is_dotted ? 1.5 : 1.0 )
  return [code, Blockly.SonicPi.ORDER_ATOMIC];
};
Blockly.SonicPi['in_thread'] = function (block) {
    var statements_do = Blockly.SonicPi.statementToCode(block, 'DO');
    var code = 'in_thread do\n'+statements_do+'end\n';
    return code;
};

function mutatorNotes(block) {
	var list  = ''
	var note = Blockly.SonicPi.valueToCode(block, 'NOTE', Blockly.SonicPi.ORDER_ATOMIC);
	if (note != null && note !== ''){
      list += ', ' + note;
    }
    return list;
}


function mutatorTimings(block) {
	var list  = ''
	var timing = Blockly.SonicPi.valueToCode(block, 'TIMING', Blockly.SonicPi.ORDER_ATOMIC);
	if (timing != null && timing !== ''){
      list += ', ' + timing;
    }
    return list;
}


function mutatorCodeGen(block) {
	var amp = Blockly.SonicPi.valueToCode(block, 'AMP', Blockly.SonicPi.ORDER_ATOMIC);
    var pan = block.getFieldValue('PAN');
    var attack = Blockly.SonicPi.valueToCode(block, 'ATTACK', Blockly.SonicPi.ORDER_ATOMIC);
    var decay = Blockly.SonicPi.valueToCode(block, 'DECAY', Blockly.SonicPi.ORDER_ATOMIC);
    var release = Blockly.SonicPi.valueToCode(block, 'RELEASE', Blockly.SonicPi.ORDER_ATOMIC);
	var pitch = Blockly.SonicPi.valueToCode(block, 'PITCH', Blockly.SonicPi.ORDER_ATOMIC);

    var controls = '';
    if (amp != null && amp !== ''){
      controls += ', amp: ' + amp;
    }
    if (pan != null){
      controls += ', pan: ' + pan;
    }
    if (attack != null && attack !== ''){
      controls += ', attack: ' + attack;
    }
    if (decay != null && decay !== ''){
      controls += ', decay: '+decay;
    }
    if (release != null && release !== ''){
      controls += ', release: '+release;
    }
	if (pitch != null && pitch !== ''){
      controls += ', pitch: '+pitch;
    }

    var code = controls + "\n";
    return code;

}

function sampleBlockCodeGen(block) {
	var dropdown_sample = block.getFieldValue('SAMPLE');
    var code = 'sample :'+ dropdown_sample + mutatorCodeGen(block)
	return code
};

Blockly.SonicPi['ambient_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['bass_drum_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['bass_sounds_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['drum_sounds_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['electric_sounds_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['misc_sounds_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['perc_sounds_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['snare_drums_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['guitar_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['loop_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['tabla_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
};

Blockly.SonicPi['vinyl_sample'] = function (block) {
    var code = sampleBlockCodeGen(block)
    return code;
}

Blockly.SonicPi['sample_custom'] = function(block) {
  var text_sample_name = block.getFieldValue('SAMPLE_NAME');
  var statements_fx = Blockly.SonicPi.statementToCode(block, 'fx');
  var code = 'sample :'+ text_sample_name + statements_fx + '\n';
  return code;
};

Blockly.SonicPi['fx_option'] = function(block) {
  var text_fx = block.getFieldValue('fx_name');
  var text_value = block.getFieldValue('value');
  var code = ', '+ text_fx + ' : ' + text_value ;
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
    var code = '('+repeats+')' + '.times do\n' + branch + 'end\n';
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

//math
Blockly.SonicPi['math_number'] = function(block) {
    // Numeric value.
    var code = parseFloat(block.getFieldValue('NUM'));
    return [code, Blockly.SonicPi.ORDER_ATOMIC];
};

Blockly.SonicPi['math_arithmetic'] = function(block) {
    // Basic arithmetic operators, and power.
    var OPERATORS = {
        'ADD': [' + ', Blockly.SonicPi.ORDER_ADDITION],
        'MINUS': [' - ', Blockly.SonicPi.ORDER_SUBTRACTION],
        'MULTIPLY': [' * ', Blockly.SonicPi.ORDER_MULTIPLICATION],
        'DIVIDE': [' / ', Blockly.SonicPi.ORDER_DIVISION],
        'POWER': [' ** ', Blockly.SonicPi.ORDER_COMMA]
    };
    var tuple = OPERATORS[block.getFieldValue('OP')];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.SonicPi.valueToCode(block, 'A', order) || '0';
    var argument1 = Blockly.SonicPi.valueToCode(block, 'B', order) || '0';
    var code;

    code = argument0 + operator + argument1;
    return [code,order];
};


//variables
Blockly.SonicPi['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.SonicPi.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.SonicPi.ORDER_ATOMIC];
};

Blockly.SonicPi['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.SonicPi.valueToCode(block, 'VALUE',
      Blockly.SonicPi.ORDER_NONE) || '0';
  var varName = Blockly.SonicPi.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + '\n';
};

//procedures
Blockly.SonicPi['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  for (var i = 0, varName; varName = block.workspace.variableList[i]; i++) {
    if (block.arguments_.indexOf(varName) == -1) {
      globals.push(Blockly.SonicPi.variableDB_.getName(varName,
          Blockly.Variables.NAME_TYPE));
    }
  }
  globals = globals.length ? '  global ' + globals.join(', ') + '\n' : '';
  var funcName = Blockly.SonicPi.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.SonicPi.statementToCode(block, 'STACK');
  if (Blockly.SonicPi.STATEMENT_PREFIX) {
    branch = Blockly.SonicPi.prefixLines(
        Blockly.SonicPi.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.SonicPi.INDENT) + branch;
  }
  if (Blockly.SonicPi.INFINITE_LOOP_TRAP) {
    branch = Blockly.SonicPi.INFINITE_LOOP_TRAP.replace(/%1/g,
        '"' + block.id + '"') + branch;
  }
  var returnValue = Blockly.SonicPi.valueToCode(block, 'RETURN',
      Blockly.SonicPi.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + '\n';
  } else if (!branch) {
    branch = Blockly.SonicPi.PASS;
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

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.SonicPi['procedures_defnoreturn'] =
    Blockly.SonicPi['procedures_defreturn'];

Blockly.SonicPi['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.SonicPi.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.SonicPi.valueToCode(block, 'ARG' + i,
        Blockly.SonicPi.ORDER_NONE) || 'None';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.SonicPi.ORDER_FUNCTION_CALL];
};

Blockly.SonicPi['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.SonicPi.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.SonicPi.valueToCode(block, 'ARG' + i,
        Blockly.SonicPi.ORDER_NONE) || 'None';
  }
  var code = funcName + '(' + args.join(', ') + ')\n';
  return code;
};

Blockly.SonicPi['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.SonicPi.valueToCode(block, 'CONDITION',
      Blockly.SonicPi.ORDER_NONE) || 'False';
  var code = 'if ' + condition + ':\n';
  if (block.hasReturnValue_) {
    var value = Blockly.SonicPi.valueToCode(block, 'VALUE',
        Blockly.SonicPi.ORDER_NONE) || 'None';
    code += '  return ' + value + '\n';
  } else {
    code += '  return\n';
  }
  return code;
};


Blockly.SonicPi['variables_get'] = function(block) {
    // Variable getter.
    var code = Blockly.SonicPi.variableDB_.getName(block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    return [code, Blockly.SonicPi.ORDER_ATOMIC];
};

Blockly.SonicPi['variables_set'] = function(block) {
    // Variable setter.
    var argument0 = Blockly.SonicPi.valueToCode(block, 'VALUE',
            Blockly.SonicPi.ORDER_ASSIGNMENT) || '0';
    var varName = Blockly.SonicPi.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return varName + ' = ' + argument0 + ';\n';
};

Blockly.SonicPi['scale'] = function(block) {
    var tonic = block.getFieldValue('TONIC');
    var name = block.getFieldValue('NAME');
    var num_octaves = block.getFieldValue('NUM_OCTAVES');
    var code = '(scale :' + tonic + ', :' + name + ', num_octaves: ' + num_octaves + ')';
    return code;
};

Blockly.SonicPi['lists_create_empty'] = function(block) {
  // Create an empty list.
  return ['[]', Blockly.Python.ORDER_ATOMIC];
};

Blockly.SonicPi['lists_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.SonicPi.valueToCode(block, 'ADD' + i,
        Blockly.SonicPi.ORDER_NONE) || 'None';
  }
  var code = '[' + elements.join(', ') + ']';
  return [code, Blockly.SonicPi.ORDER_ATOMIC];
};

Blockly.SonicPi['lists_repeat'] = function(block) {
  // Create a list with one element repeated.
  var item = Blockly.SonicPi.valueToCode(block, 'ITEM',
      Blockly.SonicPi.ORDER_NONE) || 'None';
  var times = Blockly.SonicPi.valueToCode(block, 'NUM',
      Blockly.SonicPi.ORDER_MULTIPLICATIVE) || '0';
  var code = '[' + item + '] * ' + times;
  return [code, Blockly.SonicPi.ORDER_MULTIPLICATIVE];
};
