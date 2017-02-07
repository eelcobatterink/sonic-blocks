
Blockly.COLORS = [
  "#d91e18", 
  "#db0a5b", 
  "#ef4836", 
  "#ee7d16",
  "#c88330",
  "#e1a91a",
  "#f7ca18",
  "#5cb712",
  "#0e9a6c",
  "#2ecc71",
  "#2abb9b",
  "#2ca5e2",
  "#4a6cd4",
  "#8a55d7",
  "#bb42c3",
  "#632d99",
  "#34495e"
]

/**
 * The richness of block colours, regardless of the hue.
 * Must be in the range of 0 (inclusive) to 1 (exclusive).
 */
Blockly.HSV_SATURATION = 0.6;

/**
 * The intensity of block colours, regardless of the hue.
 * Must be in the range of 0 (inclusive) to 1 (exclusive).
 */
Blockly.HSV_VALUE = 0.8;


// Patch color function so it doesn't look awful anymore
Blockly.hueToRgb = function(hue) {
  // Hue will be increments of 15.
  // we have 16 values
  // 360/15 = 24 stops.
  var idx = Math.floor(hue / 15);
  if(idx < Blockly.COLORS.length) {
    return Blockly.COLORS[idx];
  }
  else {
    return goog.color.hsvToHex(0, 0, 0);
  }
};

// SVG 3D 1990 Effects patch
Blockly.BlockSvg.prototype.updateColour = function() {
  if (this.disabled) {
    // Disabled blocks don't have colour.
    return;
  }
  var hexColour = this.getColour();
  var rgb = goog.color.hexToRgb(hexColour);
  if (this.isShadow()) {
//    rgb = goog.color.lighten(rgb, 0.6);
//    hexColour = goog.color.rgbArrayToHex(rgb);
    this.svgPathLight_.style.display = 'none';
    this.svgPathDark_.setAttribute('fill', hexColour);
  } else {
    this.svgPathLight_.style.display = '';
 //   var hexLight = goog.color.rgbArrayToHex(goog.color.lighten(rgb, 0));
   // var hexDark = goog.color.rgbArrayToHex(goog.color.darken(rgb, 0));
    this.svgPathLight_.setAttribute('stroke', hexColour);
    this.svgPathDark_.setAttribute('fill', hexColour);
  }
  this.svgPath_.setAttribute('fill', hexColour);

  var icons = this.getIcons();
  for (var i = 0; i < icons.length; i++) {
    icons[i].updateColour();
  }

  // Bump every dropdown to change its colour.
  for (var x = 0, input; input = this.inputList[x]; x++) {
    for (var y = 0, field; field = input.fieldRow[y]; y++) {
      field.setText(null);
    }
  }
};

