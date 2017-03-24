'use strict';

const gulp = require('gulp');
const insert = require('gulp-insert');
const replace = require('gulp-replace');

var document = `
var document = {
   createElement: function() {
      return {
        appendChild: function() {},
        hasAttributes: function() {},
        hasChildNodes: function() {},
        setAttribute: function() {},
      }
   },
   createTextNode: function() {}
}
`;

const destDir = 'test/js';

gulp.task('blockly', function() {
  return gulp.src('ui/js/blockly_compressed.js')
      .pipe(replace(/goog\.global\s*=\s*this;/, 'goog.global=global;'))
      .pipe(insert.wrap(`var DOMParser = require("xmldom").DOMParser;\nvar XMLSerializer = require("xmldom").XMLSerializer;\n${document}\nmodule.exports = (function(){`,
          `\nBlockly.goog=goog;return Blockly;\n})();`))
      .pipe(gulp.dest(destDir))
});

gulp.task('blocks', function() {
  return gulp.src('ui/js/blocks_compressed.js')
      .pipe(insert.wrap(`module.exports = function(Blockly){\nvar goog = Blockly.goog;\n${document}\nBlockly.Blocks={};`,
          `\nreturn Blockly.Blocks;}`))
      .pipe(gulp.dest(destDir))
});

gulp.task('sonicpi', function() {
  return gulp.src('ui/js/sonicpi.js')
      .pipe(insert.wrap(`module.exports = function(Blockly){\nvar goog = Blockly.goog;\n${document}\nBlockly.SonicPi={};`,
          `\nreturn Blockly.SonicPi;\n}`))
      .pipe(gulp.dest(destDir))
});

gulp.task('sonicpi-blocks', function() {
  return gulp.src('ui/js/sonicpi_blocks.js')
      .pipe(insert.wrap(`module.exports = function(Blockly){\nvar goog = Blockly.goog;\n${document}\nBlockly.Blocks={};`,
          `\nreturn Blockly.Blocks;\n}`))
      .pipe(gulp.dest(destDir))
});

gulp.task('sonicpi-generators', function() {
  return gulp.src('ui/js/sonicpi_generators.js')
      .pipe(insert.wrap(`module.exports = function(Blockly){\nvar goog = Blockly.goog;\n${document}\nBlockly.SonicPi={};`,
          `\nreturn Blockly.SonicPi;\n}`))
      .pipe(gulp.dest(destDir))
});

gulp.task('build', [
  'blockly',
  'blocks',
  'sonicpi',
  'sonicpi-blocks',
  'sonicpi-generators'
]);