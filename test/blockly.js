// Export Blockly as a module, containing the standard Blockly 
// and SonicPi blocks and generators.
const _ = require('lodash');

const Blockly = require('./js/blockly_compressed');
Blockly.Blocks = _.extend(Blockly.Blocks, require('./js/blocks_compressed')(Blockly));
Blockly.SonicPi = _.extend(Blockly.SonicPi, require('./js/sonicpi')(Blockly));
Blockly.Blocks = _.extend(Blockly.Blocks, require('./js/sonicpi_blocks')(Blockly));
Blockly.SonicPi = _.extend(Blockly.SonicPi, require('./js/sonicpi_generators')(Blockly));

module.exports = Blockly;