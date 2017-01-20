// JavaScript source code

Blockly.Blocks['sonic_pi_play'] = {
    /**
     * Block for repeat n times (external number).
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "type": "sonic_pi_play",
            "message0": "Play %1",
            "args0": [
              {
                  "type": "input_value",
                  "name": "Play",
              }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "Play a note",
            "helpUrl": ""
        });
    }
};

Blockly.SonicPi['sonic_pi_play'] = function (block) {
    var value_play = Blockly.SonicPi.valueToCode(block, 'Play', Blockly.SonicPi.ORDER_ATOMIC);
    return 'play ' + value_play + '\n';
};


Blockly.Blocks['sonic_pi_sleep'] = {
    /**
     * Block for repeat n times (external number).
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "type": "sonic_pi_play",
            "message0": "Sleep %1",
            "args0": [
              {
                  "type": "input_value",
                  "name": "Sleep",
              }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "Play a note",
            "helpUrl": ""
        });
    }
};

Blockly.SonicPi['sonic_pi_sleep'] = function (block) {
    var value_sleep = Blockly.SonicPi.valueToCode(block, 'Sleep', Blockly.SonicPi.ORDER_ATOMIC);
    return 'sleep ' + value_sleep + '\n';
};


Blockly.Blocks['sonic_pi_times'] = {
    /**
     * Block for repeat n times (external number).
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "type": "sonic_pi_times",
            "message0": " %1 Times %2 %3",
            "args0": [
              {
                  "type": "input_value",
                  "name": "TIMES",
                  "check": "Number",
                  "align": "RIGHT"
              },
              {
                  "type": "input_dummy"
              },
              {
                  "type": "input_statement",
                  "name": "BODY"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "Repeat the contents ",
            "helpUrl": ""
        });
    }
};

Blockly.SonicPi['sonic_pi_times'] = function (block) {
    var value_times = Blockly.SonicPi.valueToCode(block, 'TIMES', Blockly.SonicPi.ORDER_ATOMIC);
    var statements_body = Blockly.SonicPi.statementToCode(block, 'BODY');
    // TODO: Assemble Python into code variable.
    var code = value_times + '.times do\n' + statements_body + 'end\n'
    return code;
};


Blockly.Blocks['sonic_pi_thread'] = {
    /**
     * Block for repeat n times (external number).
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "type": "sonic_pi_thread",
            "message0": "in_thread %1 %2",
            "args0": [
              {
                  "type": "input_dummy",
                  "name": "in_thread",
              },
              {
                  "type": "input_statement",
                  "name": "BODY"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "Play in a seperate voice",
            "helpUrl": ""
        });
    }
};

Blockly.SonicPi['sonic_pi_thread'] = function (block) {
    var statements_body = Blockly.SonicPi.statementToCode(block, 'BODY');
    // TODO: Assemble Python into code variable.
    var code = 'in_thread do\n' + statements_body + 'end\n'
    return code;
};


Blockly.Blocks['sonic_pi_define'] = {
    /**
     * Block for repeat n times (external number).
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "type": "sonic_pi_define",
            "message0": "define %1 %2 %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "define",
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "BODY"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "Define the contents ",
            "helpUrl": ""
        });
    }
};

Blockly.Python['sonic_pi_define'] = function (block) {
    var value_define = Blockly.Python.valueToCode(block, 'define', Blockly.Python.ORDER_ATOMIC);
    var statements_body = Blockly.Python.statementToCode(block, 'BODY');
    // TODO: Assemble Python into code variable.
    var code = 'define :' + value_define + ' do\n' + statements_body + 'end\n'
    return code;
};