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

Blockly.Python['sonic_pi_play'] = function (block) {
    var value_play = Blockly.Python.valueToCode(block, 'Play', Blockly.Python.ORDER_ATOMIC);
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

Blockly.Python['sonic_pi_sleep'] = function (block) {
    var value_sleep = Blockly.Python.valueToCode(block, 'Sleep', Blockly.Python.ORDER_ATOMIC);
    return 'sleep ' + value_sleep + '\n';
};